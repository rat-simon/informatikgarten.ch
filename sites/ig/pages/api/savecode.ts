import { prisma } from 'shared/server/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { logger } from 'shared/utils'

const REMOTE_HISTORY_SIZE = 10

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

        // Check if data is an array with at least one item
        if (!Array.isArray(req.body.history) || req.body.history.length === 0) {
            return res.status(400).json({ error: 'Invalid history' })
        }

        // Check if editor string exists
        if (!req.body.editorId || typeof req.body.editorId !== 'string') {
            return res.status(400).json({ error: 'Invalid editor identifier' })
        }

        // Get editor string from request
        const editorString = req.body.editorId

        logger.debug('API received editorString', editorString)

        // Find or create user using upsert
        const user = await prisma.user.upsert({
            where: {
                email: session.user.email
            },
            update: {},
            create: {
                email: session.user.email
            }
        })

        // Save code entries using createMany
        await prisma.code.createMany({
            data: req.body.history.slice(0, REMOTE_HISTORY_SIZE).map(item => ({
                userId: user.id,
                timestamp: item.timestamp,
                editorString: editorString,
                code: item.code
            }))
        })

        res.status(200).json({ message: 'Data saved successfully' })
    } catch (error) {
        console.error('Error saving data:', error)
        res.status(500).json({ error: 'Error saving user data' })
    }
}
