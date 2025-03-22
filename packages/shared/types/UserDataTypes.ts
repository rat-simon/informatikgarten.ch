import { Prisma } from "@prisma/client"

export type QuestionDataJson = Prisma.JsonObject & {
    selected?: number[] // Array of selected option indices
    string?: string // For free text answers
    number?: number // For numeric answers
}

export type QuestionRecord = QuestionDataJson & {
    // UserId will be added server-side
    path: string
    componentId: string
    data: QuestionDataJson | null
    createdAt: string // ISO string to identify root version
    updatedAt: number // Unix timestamp for version ordering
}

export type QuestionRecordLocal = QuestionRecord & {
    isSubmitted?: boolean // Whether the question has been submitted
    savedToRemote?: boolean // Whether data is synced with server
}

