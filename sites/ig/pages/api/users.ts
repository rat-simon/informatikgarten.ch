import { prisma } from '@shared/server/lib/prisma'  // Use shared Prisma instance
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth]'

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

        // Get roles directly from session instead of querying
        const userRoles = session.user.roles

        if (!userRoles.includes('admin')) {
            return res.status(403).json({ error: 'Forbidden' })
        }

        // Handle different request methods
        switch (req.method) {
            case 'GET':
                await handleAuthorizedGetRequest(req, res)
                break
            case 'POST':
                await handleAuthorizedPostRequest(req, res)
                break
            default:
                res.setHeader('Allow', ['GET', 'POST'])
                res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Error fetching data' })
    }
}

async function handleAuthorizedGetRequest(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { type } = req.query

    if (type === 'allUsers') {
        try {
            const users = await prisma.user.findMany({
                include: {
                    roles: {
                        include: {
                            role: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            })

            // Transform the nested data structure to match the original format
            const transformedUsers = users.map(user => ({
                id: user.id,
                email: user.email,
                roles: user.roles.map(ur => ur.role.name)
            }))

            res.status(200).json(transformedUsers)
        } catch (error) {
            console.error('Prisma error:', error)
            res.status(500).json({ error: 'Failed to fetch users' })
        }
    }
}

async function handleAuthorizedPostRequest(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { userId, roleId, className, classYear, classHash } = req.body

    res.status(400).json({ error: 'Invalid request body to user endpoint' })
}
