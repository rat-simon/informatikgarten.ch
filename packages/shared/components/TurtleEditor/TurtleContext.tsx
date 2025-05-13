import { ExtendedSession } from '../../types/AuthTypes'
// import { Signal, signal } from '@preact/signals-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { logger } from '../../utils'
import { useSession } from 'next-auth/react'
import { createContext, RefObject, useState } from 'react'
import { TurtleConfigType } from './types/TurtleTypes'

const queryClient = new QueryClient()

type TurtleEditorData = {
    id: number
    configRef: RefObject<TurtleConfigType | null>
}

// const signaltest = signal(0)
// setInterval(() => (signaltest.value = Math.random()), 1000)

export const TurtleContext = createContext({
    registerTurtleEditor: (c: RefObject<TurtleConfigType | null>) =>
        -1 as number,
    unregisterTurtleEditor: (c: RefObject<TurtleConfigType | null>) => {},
    // signaltest: signal(0)
})

export function TurtleProvider({ children }) {
    const [editors, setEditors] = useState<TurtleEditorData[]>([])

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
                    const id = editors.length
                    setEditors(prevEditors => [
                        ...prevEditors,
                        { id, configRef }
                    ])
                    return id
                },
                unregisterTurtleEditor: configRef => {
                    setEditors(prev => {
                        const filtered = prev.filter(
                            e => e.configRef !== configRef
                        )
                        logger.silly('filtered 🐢', filtered)
                        return filtered
                    })
                },
                // signaltest
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
