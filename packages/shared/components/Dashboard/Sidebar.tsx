import cn from 'clsx'

const tw_sidebar = 'block px-4 py-2 hover:bg-gray-700 rounded cursor-pointer'

export const Sidebar = ({ userRoles, activeTab, setActiveTab }) => {
    // Todo: Move from roles to permissions
    return (
        <aside className="w-64 text-white p-4">
            <nav className="space-y-2">
                <a
                    onClick={() => setActiveTab('user')}
                    className={cn(
                        tw_sidebar,
                        activeTab === 'user' && 'bg-blue-300 bg-opacity-10'
                    )}
                >
                    Benutzer
                </a>
                {userRoles.includes('teacher') && (
                    <a
                        onClick={() => setActiveTab('classes')}
                        className={cn(
                            tw_sidebar,
                            activeTab === 'classes' &&
                                'bg-blue-300 bg-opacity-10'
                        )}
                    >
                        Klassen
                    </a>
                )}
                {userRoles.includes('admin') && (
                    <a
                        onClick={() => setActiveTab('users')}
                        className={cn(
                            tw_sidebar,
                            activeTab === 'users' && 'bg-blue-300 bg-opacity-10'
                        )}
                    >
                        Administrator
                    </a>
                )}
            </nav>
        </aside>
    )
}
