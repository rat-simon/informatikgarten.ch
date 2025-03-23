import { ExtendedSession } from '../../types/AuthTypes'
import { PrismaClient } from '@prisma/client'
import logger from '../../utils/logger'

const prisma = new PrismaClient()

export async function serverGetClassIdsOfTeacher(session: ExtendedSession) {
    if (!session.user?.id || !session.user?.roles) {
        logger.warn('Missing user id or roles in session')
        return
    }

    // Verify user has teacher role using session roles
    if (!session.user.roles.includes('teacher')) {
        logger.verbose('User does not have teacher role')
        return
    }

    // Get classes where the user is teacher
    const teacherClasses = await prisma.userClass.findMany({
        where: {
            userId: session.user.id,
            isTeacher: true
        },
        select: {
            classId: true
        }
    })

    // Return class ids
    logger.verbose('Returning class ids for teacher', teacherClasses)
    return teacherClasses.map(c => c.classId)
}
