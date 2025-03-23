import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { PrismaClient } from '@prisma/client'

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
        // Check if editor string exists
        if (!req.query.editorId || typeof req.query.editorId !== 'string') {
            return res.status(400).json({ error: 'Invalid editor identifier' })
        }

        // Get user's email from session
        const userEmail = session.user.email

        // Get code snippets from code table
        const timestamps = await prisma.code.findMany({
            where: {
                user: {
                    email: userEmail
                },
                editorString: req.query.editorId
            },
            orderBy: {
                timestamp: 'desc'
            },
            select: {
                timestamp: true
            }
        })

        // If no rows are returned, return empty array
        if (timestamps.length === 0) {
            return res.status(200).json([])
        }

        res.setHeader('Content-Type', 'text/plain')
        res.status(200).send(timestamps[0]?.timestamp || '')
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Error fetching data' })
    }
}
