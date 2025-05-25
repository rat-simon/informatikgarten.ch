'use client'

import { SessionProvider } from 'next-auth/react'
import { TurtleProvider } from '../components/TurtleEditor/TurtleContext'
import { ReactNode } from 'react'

const isAuthConfigured = !!(process.env.NEXTAUTH_SECRET && process.env.POSTGRES_URL)

export default function Providers({ children }: { children: ReactNode }) {

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