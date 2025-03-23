'use client'

import { SessionProvider } from 'next-auth/react'
import { TurtleProvider } from '../components/TurtleEditor/TurtleContext'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <TurtleProvider>
                {children}
            </TurtleProvider>
        </SessionProvider>
    )
}