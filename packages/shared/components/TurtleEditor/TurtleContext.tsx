import { ExtendedSession } from '../../types/AuthTypes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { logger } from '../../utils'
import { useSession } from 'next-auth/react'
import { createContext, RefObject, useRef, useState, useEffect } from 'react'
import { TurtleConfigType } from './types/TurtleTypes'
import { usePathname } from 'next/navigation' // Updated import for App Router

const queryClient = new QueryClient()

type TurtleEditorData = {
    id: number
    configRef: RefObject<TurtleConfigType>
    path: string
}

export const TurtleContext = createContext({
    registerTurtleEditor: (c: RefObject<TurtleConfigType>) => -1 as number,
    unregisterTurtleEditor: (c: RefObject<TurtleConfigType>) => [] as TurtleEditorData[],
})

export function TurtleProvider({ children }) {
    const [editors, setEditors] = useState<TurtleEditorData[]>([])
    const editorIdCounterRef = useRef(0)
    const pathname = usePathname() // App Router hook for current path

    // Reset counter when the path changes
    useEffect(() => {
        // Reset counter for each new page
        editorIdCounterRef.current = 0;

        // Also clear editors from previous pages
        setEditors([]);

        logger.debug('Path changed, reset editors counter:', pathname);
    }, [pathname]); // This effect runs when the pathname changes

    const playall = () => {
        for (const editor of editors) {
            if (
                editor.configRef.current &&
                editor.configRef.current.codeeditorRef.current
            ) {
                editor.configRef.current.runPythonCode(
                    editor.configRef.current.codeeditorRef.current.getValue()
                )
            }
        }
    }

    const session = useSession().data as ExtendedSession
    const isTeacher = session?.user?.roles?.includes('teacher')

    return (
        <TurtleContext.Provider
            value={{
                registerTurtleEditor: configRef => {
                    const idNr = editorIdCounterRef.current++
                    setEditors(prevEditors => [
                        ...prevEditors,
                        {
                            id: idNr,
                            configRef,
                            path: pathname ?? ''
                        }
                    ])
                    return idNr
                },
                unregisterTurtleEditor: configRef => {
                    let filtered: TurtleEditorData[] = []
                    setEditors(prev => {
                        filtered = prev.filter(e => e.configRef !== configRef)
                        return filtered
                    })
                    return filtered
                },
            }}
        >
            <QueryClientProvider client={queryClient}>
                {children}
                {editors.length > 0 && isTeacher && (
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-500 shadow-lg rounded-lg p-4">
                        🐢 {editors.length} Turtle Editors
                        <button onClick={playall}>Play all</button>
                    </div>
                )}
            </QueryClientProvider>
        </TurtleContext.Provider>
    )
}