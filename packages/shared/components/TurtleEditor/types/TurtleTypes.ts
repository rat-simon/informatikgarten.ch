import type { editor as EditorType } from 'monaco-editor'

export interface TurtleConfigType {
    idRef: React.RefObject<string>
    theme: string
    sessionRef: React.RefObject<any>
    wrapperRef: React.RefObject<HTMLDivElement | null>
    resizerHRef: React.RefObject<HTMLDivElement | null>
    codeeditorRef: React.RefObject<EditorType.IStandaloneCodeEditor | null>
    editorPanelRef: React.RefObject<HTMLDivElement | null>
    graphicswrapperRef: React.RefObject<HTMLDivElement | null>
    graphicspanelRef: React.RefObject<HTMLDivElement | null>
    historyRef: React.MutableRefObject<HistoryEntry[]>
    historyIndexRef: React.MutableRefObject<number | null>
    initCode: string
    runPythonCode: (pythonCode: string) => void
    autosaveCounterRef: React.MutableRefObject<number>
    codeControlRef: React.RefObject<HTMLDivElement | null>
    remoteTimestampsRef: React.RefObject<Set<number>>
    setUndo?: React.Dispatch<React.SetStateAction<boolean>>
    setRedo?: React.Dispatch<React.SetStateAction<boolean>>
}

export enum errorlevel {
    output = 'output',
    warning = 'warning',
    error = 'error'
}

export enum RunLevel {
    stopped,
    running
}

export interface HistoryEntry {
    timestamp: number
    code: string
    sendRemote: boolean
}

export type outputElement = [string | null, errorlevel | null]