"use client"

import { useEffect, useState } from 'react'

// Define the type for the user object
type User = {
    id: number
    email: string
    roles: string[]
}

export const AdminDashboard = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        // Fetch users when the "Edit Users" tab is open
        const fetchUsers = async () => {
            const usersResponse = await fetch('/api/users?type=allUsers')

            if (usersResponse.ok) {
                const usersData = await usersResponse.json()
                setUsers(usersData)
            } else {
                console.error('Failed to fetch users')
            }
        }
        fetchUsers()
    }, [])

    return (
        <div>
            <h2>Users Dashboard</h2>
            <table className='w-3/5'>
                <thead className='text-left'>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.roles
                                    ? user.roles.join(', ')
                                    : 'No roles'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminDashboard
