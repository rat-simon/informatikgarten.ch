import {
    serverHasPermission,
    serverUserMayEditClass
} from 'shared/server/lib/serverCheckPermission'
import { serverGetStudentsFromClassId } from 'shared/server/lib/serverGetClassMembers'
import { ExtendedSession } from 'shared/types/AuthTypes'
import { logger } from 'shared/utils'
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth]'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Check if user is authenticated
        const session = await getServerSession(req, res, authOptions)

        if (!session) {
            return res.status(401).json({ error: 'Unauthorized' })
        }

        // Handle different request methods
        switch (req.method) {
            case 'GET':
                await handleAuthorizedGetRequest(req, res, session)
                break
            case 'POST':
                await handleAuthorizedPostRequest(req, res, session)
                break
            default:
                res.setHeader('Allow', ['GET', 'POST'])
                res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (error) {
        logger.error('Error fetching data:', error)
        res.status(500).json({ error: 'Error fetching data' })
    }
}

async function handleAuthorizedGetRequest(
    req: NextApiRequest,
    res: NextApiResponse,
    session: ExtendedSession
) {
    if (!session.user) return
    logger.debug('HEREMARCY', session)

    const { type } = req.query
    if (type === 'allClasses') {
        // Check if user has permission to view all classes
        if (await serverHasPermission(session, 'view:all:classes')) {
            // List all classes
            const classes = await prisma.class.findMany({
                orderBy: [{ year: 'desc' }, { name: 'asc' }]
            })
            res.status(200).json(classes)
        } else if (await serverHasPermission(session, 'view:own:classes')) {
            // List classes the user is a member of
            const classes = await prisma.class.findMany({
                where: {
                    members: {
                        some: {
                            user: {
                                id: session.user.id
                            }
                        }
                    }
                },
                orderBy: [{ year: 'desc' }, { name: 'asc' }]
            })
            res.status(200).json(classes)
        }
    } else if (type === 'getClassStudents') {
        const { classId } = req.query
        if (!classId) return res.status(400).json({ error: 'Missing class' })

        const classIdString = Array.isArray(classId) ? classId[0] : classId
        if (!classIdString) return res.status(400).json({ error: 'Invalid class' })

        const classMembers = await serverGetStudentsFromClassId(parseInt(classIdString))
        if (classMembers) {
            // Don't send user id
            return res.status(200).json(classMembers.map(({ id, ...rest }) => rest))
        }
        return res.status(500).json({ error: 'Failed to get class members' })
    } else {
        // Reject unrecognized query parameters
        res.status(418).json({ error: "I don't serve coffee, I serve data." })
    }
}

async function handleAuthorizedPostRequest(
    req: NextApiRequest,
    res: NextApiResponse,
    session: ExtendedSession
) {
    if (!session.user || !session.user.id) return

    const { type } = req.query
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    if (type === 'createClass') {
        // Check if user has permission to create classes
        if (await serverHasPermission(session, 'edit:own:classes')) {
            const { className, classYear, classHash } = body
            if (className && classYear && classHash) {
                // Create a new class
                try {
                    await prisma.class.create({
                        data: {
                            name: className,
                            year: parseInt(classYear), // ensure it's a number
                            hash: classHash,
                            members: {
                                create: {
                                    userId: session.user.id,
                                    isTeacher: true
                                }
                            }
                        }
                    })

                    res.status(200).json({
                        message: 'Class created successfully'
                    })
                } catch (error) {
                    logger.error('Prisma error on creating class:', error)
                    res.status(500).json({ error: 'Failed to create class' })
                }
            }
        }
    } else if (type === 'editClass') {
        const { classId, className, classYear, classHash } = body
        if (!classId || !className || !classYear || !classHash) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        if (!(await serverUserMayEditClass(session, classId))) {
            return res.status(403).json({ error: 'Unauthorized' })
        }

        try {
            await prisma.class.update({
                where: {
                    id: parseInt(classId) // ensure it's a number
                },
                data: {
                    name: className,
                    year: parseInt(classYear),
                    hash: classHash
                }
            })
            res.status(200).json({
                message: 'Class updated successfully'
            })
        } catch (error) {
            logger.error('Prisma error on updating class:', error)
            res.status(500).json({ error: 'Failed to update class' })
        }
    } else if (type === 'editClassMembers') {
        // Expects a list of email addresses to add to a class
        const { classId, users } = body
        if (!classId || !users) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        if (!(await serverUserMayEditClass(session, classId))) {
            return res.status(403).json({ error: 'Unauthorized' })
        }

        // All Emails lowercase
        users.forEach(user => (user.email = user.email.toLowerCase()))

        const usersToAdd = users.filter(
            users => !users.removed && users.change === 'added'
        )
        const usersToRemove = users.filter(
            users => users.removed && users.change !== 'added'
        )

        const currentMembers =
            (await serverGetStudentsFromClassId(classId)) || []
        const usersToAddFiltered = usersToAdd.filter(
            user => !currentMembers.includes(user.email)
        )
        try {
            await prisma.$transaction(async tx => {
                // 1. Create new users (skips existing ones)
                await tx.user.createMany({
                    data: usersToAddFiltered.map(user => ({
                        email: user.email
                    })),
                    skipDuplicates: true
                })

                // 2. Get all user IDs (both new and existing)
                const users = await tx.user.findMany({
                    where: {
                        email: {
                            in: usersToAddFiltered.map(u => u.email)
                        }
                    },
                    select: { id: true }
                })

                // 3. Create class memberships (skips duplicates)
                await tx.userClass.createMany({
                    data: users.map(user => ({
                        userId: user.id,
                        classId: classId
                    })),
                    skipDuplicates: true
                })

                // 4. Remove users from the class
                await tx.userClass.deleteMany({
                    where: {
                        user: {
                            email: { in: usersToRemove.map(u => u.email) }
                        }
                    }
                })
            })

            return res.status(200).json({
                message: 'Class members added successfully'
            })
        } catch (error) {
            logger.error('Prisma error on adding class members:', error)
            res.status(500).json({ error: 'Failed to add class members' })
        }
    } else {
        return res.status(400).json({ error: 'Invalid request' })
    }
}
