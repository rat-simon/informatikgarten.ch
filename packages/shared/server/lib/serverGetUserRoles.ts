import { prisma } from './prisma'

export async function getUserRoles(userId: string): Promise<string[]> {
    const roles = await prisma.userRole.findMany({
        where: { userId },
        include: { role: { select: { name: true } } }
    })

    return roles.map(ur => ur.role.name)
}
