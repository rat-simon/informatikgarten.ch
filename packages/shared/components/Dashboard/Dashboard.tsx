"use client"

import { ExtendedSession } from '../../types/AuthTypes'
import cn from 'clsx'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ClassesDashboard from './ClassesDashboard'
import s from './dashboard.module.css'
import { Sidebar } from './Sidebar'
import UsersDashboard from './UsersDashboard'

export type activeTabType = 'user' | 'classes' | 'users'

export const Dashboard = () => {
    const { data: sessionData, status } = useSession() as {
        data: ExtendedSession | null
        status: string
    }
    const [activeTab, setActiveTab] = useState<activeTabType>('user')
    const userRoles = sessionData?.user?.roles || []
    const router = useRouter()
    const callbackBase = `${router.basePath}/`

    if (!sessionData || status !== 'authenticated')
        return <button onClick={() => signIn('azure-ad')}>Log in</button>

    return (
        <div className={cn('flex', s.dashboard)}>
            <Sidebar
                userRoles={userRoles}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <main className="flex-1 p-4">
                {activeTab === 'user' && (
                    <div>
                        <h2 className='dbtitle'>User</h2>
                        <div>{`Name : ${sessionData?.user?.name}`}</div>
                        <div>{`Email : ${sessionData?.user?.email}`}</div>
                        {userRoles.length > 0 && (
                            <div>{`Rollen : ${userRoles.join(', ')}`}</div>
                        )}
                        <button
                            onClick={() =>
                                signOut({ callbackUrl: callbackBase })
                            }
                        >
                            Log out
                        </button>
                    </div>
                )}
                {activeTab === 'classes' && <ClassesDashboard />}
                {activeTab === 'users' && <UsersDashboard />}
            </main>
        </div>
    )
}

export default Dashboard
