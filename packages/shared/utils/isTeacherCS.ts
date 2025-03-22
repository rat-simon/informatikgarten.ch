import { ExtendedSession } from '../types/AuthTypes'
import { useSession } from 'next-auth/react'

export const isTeacherCS = (): boolean => {
    const { data: session, status } = useSession()
    const extendedSession = session as ExtendedSession

    if (status === 'loading') return false
    if (!extendedSession?.user?.roles) return false

    return extendedSession.user.roles.includes('teacher')
}
