// utils/serverCheckPermission.ts
import { ExtendedSession } from '../../types/AuthTypes'
import { serverGetClassIdsOfTeacher } from './serverGetClassIdsOfTeacher'
import { logger } from '../../utils'

type Role = 'admin' | 'teacher'
export type Permission =
    | 'view:all:classes'
    | 'edit:all:classes'
    | 'view:own:classes'
    | 'edit:own:classes'
    | 'view:all:users'
    | 'edit:all:users'

const ROLES: { [K in Role]: Permission[] } = {
    admin: [
        'view:all:classes',
        'edit:all:classes',
        'view:own:classes',
        'edit:own:classes',
        'view:all:users',
        'edit:all:users'
    ],
    teacher: ['view:own:classes', 'edit:own:classes']
}

export async function serverHasPermission(
    session: ExtendedSession,
    permission: Permission
) {
    logger.debug('Checking permission', { session, permission })
    if (!session?.user?.roles) return false

    return session.user.roles.some(role =>
        ROLES[role as Role]?.includes(permission)
    )
}

export async function serverUserMayEditClass(
    session: ExtendedSession,
    classId: number
) {
    // Check if user has permission to edit all classes
    let userHasPermission = await serverHasPermission(
        session,
        'edit:all:classes'
    )

    // If no permission to edit all classes, check if user is a teacher of the class
    if (
        !userHasPermission &&
        (await serverHasPermission(session, 'edit:own:classes'))
    ) {
        const classIdsOfTeacher =
            (await serverGetClassIdsOfTeacher(session)) || []
        userHasPermission = classIdsOfTeacher.includes(classId)
    }

    return userHasPermission
}
