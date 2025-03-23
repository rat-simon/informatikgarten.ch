import { PrismaClient } from '@prisma/client'
import { logger } from '../../utils'

const prisma = new PrismaClient()

export async function serverGetClassMembersFromClassId(classId: number) {
    try {
        const classMembers = await prisma.user.findMany({
            where: {
                classes: {
                    some: {
                        classId: classId
                    }
                }
            }
        })
        return classMembers
    } catch (error) {
        logger.error('Prisma error on getting class members:', error)
    }
}

export async function serverGetStudentsFromClassId(classId: number) {
    try {
        const students = await prisma.user.findMany({
            where: {
                classes: {
                    some: {
                        classId: classId,
                        OR: [{ isTeacher: false }, { isTeacher: null }]
                    }
                }
            }
        })
        return students
    } catch (error) {
        logger.error('Prisma error on getting class members:', error)
    }
}
