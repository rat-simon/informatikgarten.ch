'use client'

import { SessionProvider } from 'next-auth/react'
import { TurtleProvider } from '../components/TurtleEditor/TurtleContext'
import { ReactNode } from 'react'
import { logger } from '../utils'

const isAuthConfigured = !!(process.env.NEXT_PUBLIC_AUTH_ENABLED === 'true')

export default function Providers({ children }: { children: ReactNode }) {

    logger.debug("isAuthConfigured?", isAuthConfigured)

    if (!isAuthConfigured) {
        return (
            <SessionProvider session={null}>
                <TurtleProvider>
                    {children}
                </TurtleProvider>
            </SessionProvider>
        )
    }

    return (
        <SessionProvider>
            <TurtleProvider>
                {children}
            </TurtleProvider>
        </SessionProvider>
    )
}