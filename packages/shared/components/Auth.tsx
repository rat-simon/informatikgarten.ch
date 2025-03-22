import { isTeacherCS } from '../utils'
import { useSession } from 'next-auth/react'
import type { ReactNode } from 'react'

interface AuthProps {
    children: ReactNode
}

export function IsAuthenticated({ children }: AuthProps) {
    const { status } = useSession()

    if (status === 'loading') {
        return <div className="animate-pulse mt-8">Loading...</div>
    }

    if (status === 'unauthenticated') {
        return (
            <div className="p-4 mt-8 rounded-lg border border-red-600">
                <p className="text-red-600">
                    Sie müssen angemeldet sein, um diesen Inhalt zu sehen.
                </p>
            </div>
        )
    }

    return <>{children}</>
}

export function IsNotAuthenticated({ children }: AuthProps) {
    const { status } = useSession()

    if (status === 'loading') {
        return <div className="animate-pulse mt-8">Loading...</div>
    }

    return <>{status === 'unauthenticated' && children}</>
}

export function IsTeacher({ children }: AuthProps) {
    return <>{isTeacherCS() && children}</>
}