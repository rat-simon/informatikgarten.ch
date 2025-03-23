import { logger } from '@shared/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

interface CloudMailinPayload {
    envelope: {
        from: string
        to: string
        helo_domain: string
        remote_ip: string
        spf?: {
            result: string
            domain: string
        }
    }
    headers: {
        subject: string
        from: string
        to: string
        date: string
        'content-type': string
        'message-id': string
    }
    plain: string
    html?: string
    reply_plain?: string
    attachments?: Array<{
        content: string
        file_name: string
        content_type: string
        size: number
        disposition: string
        content_id: string
    }>
}

// Store codes with timestamps
const loginCodes = new Map<string, { code: string; timestamp: number }>()

// Cleanup function to remove expired codes
function cleanupExpiredCodes() {
    const now = Date.now()
    for (const [id, data] of loginCodes.entries()) {
        if (now - data.timestamp > 15 * 60 * 1000) {
            // 15 minutes
            loginCodes.delete(id)
        }
    }
}

function extractLoginCode(html: string): string | null {
    // Look for 6-digit code inside h1 tag
    const codeMatch = html.match(
        /<h1[^>]*>(?:<[^>]*>)*(\d{6})(?:<[^>]*>)*<\/h1>/i
    )
    return codeMatch ? codeMatch[1] ?? null : null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    if (req.method === 'GET') {
        cleanupExpiredCodes()
        return res.json({
            codes: Array.from(loginCodes.values()).map(
                ({ code, timestamp }) => ({
                    code,
                    expiresIn: Math.max(
                        0,
                        15 * 60 - (Date.now() - timestamp) / 1000
                    )
                })
            )
        })
    }

    try {
        const mail = req.body as CloudMailinPayload
        const loginCode = mail.html ? extractLoginCode(mail.html) : null
        
        // Check for ProtonMail confirmation emails
        if (mail.envelope.from.endsWith('proton.me') && 
            mail.headers.subject.toLowerCase().includes('confirm')) {
            logger.info('ProtonMail confirmation email:', {
                from: mail.envelope.from,
                subject: mail.headers.subject,
                content: mail.plain || mail.html
            })
        }

        if (!loginCode) {
            return res.status(422).json({
                status: 'error',
                message: 'No login code found in email'
            })
        }

        // Store code with timestamp
        const id = Math.random().toString(36).substring(7)
        loginCodes.set(id, {
            code: loginCode,
            timestamp: Date.now()
        })

        res.status(200).json({
            status: 'success',
            message: `Email processed successfully`,
            code: loginCode
        })
    } catch (error) {
        console.error('Error processing email:', error)
        res.status(500).json({ error: 'Failed to process email' })
    }
}
