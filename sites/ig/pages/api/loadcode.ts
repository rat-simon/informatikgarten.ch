import { PrismaClient } from '@prisma/client'
import { logger } from '@shared/utils'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth]'

const prisma = new PrismaClient()

const HISTORY_SIZE = 10

// Todo: Move to prisma

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
        // Check if editor string exists
        if (!req.query.editorId || typeof req.query.editorId !== 'string') {
            return res.status(400).json({ error: 'Invalid editor identifier' })
        }

        // Check if local timestamps supplied
        if (
            !req.query.localTimestamps ||
            typeof req.query.localTimestamps !== 'string'
        ) {
            return res.status(400).json({ error: 'Invalid timestamps' })
        }

        // Get local timestamps
        const localTimestamps = req.query.localTimestamps.split(',').map(Number)
        logger.debug('Received local timestamps by API:', localTimestamps)

        // Get user's email from session
        const userEmail = session.user.email

        // Get code snippets from code table
        // TODO: Is there a way to void the hack with localTimestamps?
        const codeResult = await prisma.code.findMany({
            where: {
                user: {
                    email: userEmail
                },
                editorString: req.query.editorId,
                timestamp: {
                    notIn: localTimestamps
                }
            },
            orderBy: {
                timestamp: 'desc'
            },
            take: HISTORY_SIZE,
            select: {
                timestamp: true,
                code: true
            }
        })
        logger.info(`Query found ${codeResult.length} rows.`)

        // If no rows are returned, return empty array
        if (codeResult.length === 0) {
            return res.status(200).json([])
        }

        // If more than HISTORY_SIZE rows are returned, delete all rows beyond HISTORY_SIZE
        if (codeResult.length >= HISTORY_SIZE) {
            // Get IDs of recent records to keep
            const recentIds = await prisma.code.findMany({
                where: {
                    user: {
                        email: userEmail
                    },
                    editorString: req.query.editorId
                },
                orderBy: {
                    timestamp: 'desc'
                },
                take: HISTORY_SIZE,
                select: {
                    id: true
                }
            })

            // Delete older records
            await prisma.code.deleteMany({
                where: {
                    user: {
                        email: userEmail
                    },
                    editorString: req.query.editorId,
                    id: {
                        notIn: recentIds.map(record => record.id)
                    }
                }
            })
        }

        // Convert rows to desired format
        const history = codeResult.map(row => ({
            timestamp: Number(row.timestamp),
            code: row.code
        }))

        res.status(200).json(history)
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Error fetching data' })
    }
}
