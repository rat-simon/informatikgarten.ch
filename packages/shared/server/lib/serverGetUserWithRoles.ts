import { prisma } from './prisma'
import type { UserWithRoles } from '../../types/AuthTypes'
import { logger } from '../../utils'

// Deprecated
export async function getUserWithRoles(userId: string): Promise<UserWithRoles> {
    const [user, roles] = await Promise.all([
        prisma.user.findUnique({ where: { id: userId } }),
        prisma.userRole.findMany({
            where: { userId },
            include: { role: { select: { name: true } } }
        })
    ])

    if (!user) throw new Error('User not found')

    logger.debug("Roles", roles.map(ur => ur.role.name))

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        roles: roles.map(ur => ur.role.name)
    }
}
