import { DefaultSession } from 'next-auth'

export interface ExtendedSession extends Omit<DefaultSession, 'user'> {
    user: UserWithRoles
    error?: string
    accessToken?: string
}

export interface UserWithRoles {
    id: string
    email: string
    name?: string | null
    image?: string | null
    roles: string[]
}