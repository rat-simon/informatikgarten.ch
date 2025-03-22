import { logger } from '../../utils'
import cn from 'clsx'
import FeatherIcon from 'feather-icons-react'
import React, { useEffect, useState } from 'react'

type Student = {
    email: string
    change?: 'added' | 'changed'
    removed?: boolean
}

export const EditClassMembers: React.FC<{ classId: number }> = ({
    classId
}) => {
    const [students, setStudents] = useState<Student[]>([])
    const [newEmails, setNewEmails] = useState('')

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const addUsersLocally = () => {
        const emails = newEmails
            .split(/[\s,;]+/) // Split by spaces, commas, semicolons, and newlines
            .map(email => email.trim())
            .filter(email => isValidEmail(email)) // Filter out invalid emails

        const newUsers = emails.map(
            email => ({ email, change: 'added' }) as Student
        )
        setStudents(prevUsers => [
            ...prevUsers,
            ...newUsers.filter(
                user =>
                    !prevUsers.some(
                        existingUser => existingUser.email === user.email
                    )
            )
        ])
        setNewEmails('')
    }

    const deleteUserLocally = (user: Student) => {
        user.removed = !user.removed
        setStudents([...students])
    }

    const handleSaveChanges = async () => {
        const response = await fetch('/api/classes?type=editClassMembers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ classId, users: students })
        })

        if (response.ok) {
            getClassStudentsFromRemote()
        } else {
            logger.error('Trouble saving changes to class members.')
        }
    }

    const getClassStudentsFromRemote = async () => {
        const response = await fetch(
            `/api/classes?type=getClassStudents&classId=${classId}`
        )

        if (response.ok) {
            const classStudentsData = (await response.json()) as Student[]
            logger.silly(classStudentsData)
            setStudents(classStudentsData)
        } else {
            logger.error('Failed to fetch class members')
        }
    }

    useEffect(() => {
        getClassStudentsFromRemote()
    }, [])

    const tw_added = 'text-green-500'
    const tw_changed = 'text-yellow-500'
    const tw_deleted = 'text-red-500 line-through'

    return (
        <tr>
            <td colSpan={3}>
                <h2 className="text-lg">
                    {students.length} Schüler in dieser Klasse
                </h2>
                <ul className="grid grid-cols-2 gap-x-2 text-sm">
                    {students.map((user, index) => (
                        <li
                            key={index}
                            className={cn('p-1', {
                                [tw_deleted]: user.removed,
                                [tw_added]:
                                    !user.removed && user.change === 'added',
                                [tw_changed]:
                                    !user.removed && user.change === 'changed'
                            })}
                        >
                            <a
                                onClick={() => deleteUserLocally(user)}
                                className="text-gray-500 cursor-pointer pr-2"
                            >
                                <FeatherIcon
                                    icon={user.removed ? 'user-plus' : 'user-x'}
                                    size="18"
                                    className="inline"
                                />
                            </a>
                            <span className="inline">{user.email}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-xs">
                    Unverändert,
                    <span className={tw_added}> neu</span>,
                    <span className={tw_changed}> verändert</span> und
                    <span className={tw_deleted}> gelöscht</span>.
                </p>
                <button
                    onClick={handleSaveChanges}
                    className="mt-1 bg-blue-500 text-white p-2 rounded text-sm"
                >
                    Änderungen übernehmen
                </button>
                <div className="my-4">
                    <h3>Schüler hinzufügen</h3>
                    <textarea
                        placeholder="Emailadressen einfügen (getrennt durch Komma, Strichpunkt, Leerzeichen oder Zeilenumbruch)"
                        onChange={e => setNewEmails(e.currentTarget.value)}
                        className="border border-blue-500 rounded px-3 py-2 w-full"
                    />
                    <button
                        onClick={addUsersLocally}
                        className={cn(
                            'mt-1 bg-blue-500 text-white p-1 rounded text-xs',
                            newEmails.length > 0
                                ? 'bg-opacity-100'
                                : 'bg-opacity-30'
                        )}
                    >
                        Hinzufügen
                    </button>
                </div>
            </td>
        </tr>
    )
}
