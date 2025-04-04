import cn from "clsx";

const tw_sidebar =
    "block px-4 py-2 rounded cursor-pointer bg-blue-100 hover:bg-blue-200 transition-colors duration-200 ease-in-out";
const activeTabStyle = "bg-blue-300 bg-opacity-30";

export const Sidebar = ({ userRoles, activeTab, setActiveTab }) => {
    // Todo: Move from roles to permissions
    return (
        <aside className="w-64 p-4">
            <nav className="space-y-2">
                <a
                    onClick={() => setActiveTab("user")}
                    className={cn(
                        tw_sidebar,
                        activeTab === "user" && activeTabStyle
                    )}
                >
                    Benutzer
                </a>
                {userRoles.includes("teacher") && (
                    <a
                        onClick={() => setActiveTab("classes")}
                        className={cn(
                            tw_sidebar,
                            activeTab === "classes" && activeTabStyle
                        )}
                    >
                        Klassen
                    </a>
                )}
                {userRoles.includes("admin") && (
                    <a
                        onClick={() => setActiveTab("users")}
                        className={cn(
                            tw_sidebar,
                            activeTab === "users" && activeTabStyle
                        )}
                    >
                        Administrator
                    </a>
                )}
            </nav>
        </aside>
    );
};
