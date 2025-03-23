import { QuestionRecordLocal, QuestionDataJson } from '../../types/UserDataTypes'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { logger, sanitizeIdString } from '../../utils'
import { IDBPDatabase, openDB } from 'idb'
import { useSession } from 'next-auth/react'

const DB_NAME = 'informatikgarten'
const STORE_NAME = 'userData'

/**
 * UserDataService singleton for managing user data both locally and remotely
 */
class UserDataService {
    private static instance: UserDataService
    private db: IDBPDatabase | null = null
    private initializationPromise: Promise<void> | null = null

    private constructor() {
        if (typeof window !== 'undefined') {
            this.initializationPromise = this.initialize()
        }
    }

    public static getInstance(): UserDataService {
        if (!UserDataService.instance) {
            UserDataService.instance = new UserDataService()
        }
        return UserDataService.instance
    }

    private async initialize() {
        try {
            this.db = await this.initDB()
            logger.debug('IndexedDB initialized successfully')
        } catch (error) {
            logger.error('Failed to initialize IndexedDB:', error)
            throw error
        }
    }

    private async initDB() {
        if (!this.db) {
            return openDB(DB_NAME, 1, {
                upgrade(db) {
                    if (!db.objectStoreNames.contains(STORE_NAME)) {
                        const store = db.createObjectStore(STORE_NAME, {
                            keyPath: ['path', 'componentId']
                        })
                    }
                }
            })
        }
        return this.db
    }

    /**
     * Get user data from local IndexedDB
     */
    async getLocal(
        path: string,
        componentId: string
    ): Promise<QuestionRecordLocal | null> {
        // Wait for initialization to complete before accessing DB
        await this.initializationPromise

        if (!this.db) {
            logger.debug(
                'No IndexedDB connection available when getting local data',
                { path, componentId }
            )
            return null
        }

        try {
            const db = await this.db
            const result = await db.get(STORE_NAME, [path, componentId])
            logger.debug('IndexedDB get result:', {
                path,
                componentId,
                exists: !!result
            })
            return result
        } catch (error) {
            logger.error('Failed to get data from IndexedDB:', {
                path,
                componentId,
                error: error instanceof Error ? error.message : 'Unknown error'
            })
            return null
        }
    }

    /**
     * Save user data to local IndexedDB
     */
    async setLocal(entry: QuestionRecordLocal): Promise<void> {
        logger.debug('Setting local user data', {
            path: entry.path,
            componentId: entry.componentId
        })

        await this.initializationPromise
        if (!this.db) return

        const db = await this.db
        try {
            await db.put(STORE_NAME, entry)
            logger.verbose('Successfully saved to IndexedDB')
        } catch (error) {
            logger.error('Failed to save to IndexedDB:', error)
        }
    }

    /**
     * Get user data from remote API
     */
    async getRemote(
        path: string,
        componentId: string,
        createdAt?: string
    ): Promise<QuestionRecordLocal | null> {
        logger.debug('Fetching remote user data', {
            path,
            componentId,
            createdAt: createdAt || 'latest'
        })

        try {
            // Build URL with optional createdAt parameter
            let url = `/api/userdata?path=${encodeURIComponent(path)}&componentId=${encodeURIComponent(componentId)}`
            if (createdAt) {
                url += `&createdAt=${encodeURIComponent(createdAt)}`
            }

            const res = await fetch(url)
            if (!res.ok) {
                logger.error('Failed to fetch remote data:', await res.text())
                return null
            }

            const data = await res.json()

            // If getRemote was called with createdAt, we'll get { exists, data } format
            if (createdAt && typeof data === 'object' && 'exists' in data) {
                return data.exists && data.data ? {
                    ...data.data,
                    savedToRemote: true
                } : null
            }

            // Otherwise, we'll get the data directly or null
            return data ? {
                ...data,
                savedToRemote: true
            } : null
        } catch (error) {
            logger.error('Error fetching remote data:', error)
            return null
        }
    }

    /**
     * Save user data to remote API
     * This handles both creation and updates through the POST endpoint
     */
    async saveToRemote(entry: QuestionRecordLocal): Promise<QuestionRecordLocal | null> {
        logger.debug('Saving remote user data', {
            path: entry.path,
            componentId: entry.componentId,
            createdAt: entry.createdAt
        })

        try {
            const res = await fetch('/api/userdata', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(entry)
            })

            if (!res.ok) {
                logger.error('Failed to save remote data:', await res.text())
                return {
                    ...entry,
                    savedToRemote: false
                }
            }

            const data = await res.json()

            // Return the response from the server
            return {
                ...data,
                savedToRemote: true
            }
        } catch (error) {
            logger.error('Error saving remote user data:', error)
            return {
                ...entry,
                savedToRemote: false
            }
        }
    }
}

/**
 * React Hook for using UserDataService with React Query
 */
export function useUserData(path: string, componentId: string) {
    const queryClient = useQueryClient()
    const service = UserDataService.getInstance()
    const { status: sessionStatus } = useSession()

    const pathSanitized = sanitizeIdString(path)
    const idSanitized = sanitizeIdString(componentId)

    // Query for fetching data
    const { data: userRecord, isLoading } = useQuery({
        queryKey: ['userData', pathSanitized, idSanitized, sessionStatus],
        queryFn: async () => {
            if (typeof window === 'undefined') {
                logger.warn('Data fetching called server side. Skipping - but this should not happen')
                return null
            }

            const localEntry = await service.getLocal(pathSanitized, idSanitized)

            if (sessionStatus === 'authenticated') {
                const remoteEntry = await service.getRemote(pathSanitized, idSanitized)

                // Handle data synchronization with conflict resolution
                if (remoteEntry && localEntry) {
                    // Same thread (createdAt matches)
                    if (remoteEntry.createdAt === localEntry.createdAt) {
                        // Compare which version is newer
                        if (remoteEntry.updatedAt > localEntry.updatedAt) {
                            // Remote is newer, update local
                            logger.debug('Remote data is newer, updating local', {
                                remoteTime: remoteEntry.updatedAt,
                                localTime: localEntry.updatedAt
                            })
                            await service.setLocal(remoteEntry)
                            return remoteEntry
                        } else if (localEntry.updatedAt > remoteEntry.updatedAt) {
                            // Local is newer, update remote
                            logger.debug('Local data is newer, updating remote', {
                                remoteTime: remoteEntry.updatedAt,
                                localTime: localEntry.updatedAt
                            })
                            const updatedRemote = await service.saveToRemote(localEntry)
                            if (updatedRemote) {
                                await service.setLocal({
                                    ...localEntry,
                                    savedToRemote: true
                                })
                                return {
                                    ...localEntry,
                                    savedToRemote: true
                                }
                            }
                            return localEntry
                        }
                        // Same timestamp, prefer local for consistency
                        return localEntry
                    }
                    // Different threads, keep both and warn
                    else {
                        logger.warn('Version conflict detected - different root versions', {
                            remoteCreatedAt: remoteEntry.createdAt,
                            localCreatedAt: localEntry.createdAt
                        })
                        // Prefer local data for now, but mark it for user attention
                        return {
                            ...localEntry,
                            hasVersionConflict: true
                        } as QuestionRecordLocal
                    }
                }
                // Only remote exists
                else if (remoteEntry) {
                    logger.debug('Only remote data exists, saving locally')
                    await service.setLocal(remoteEntry)
                    return remoteEntry
                }
                // Only local exists
                else if (localEntry) {
                    logger.debug('Only local data exists, creating remote')
                    const savedRemote = await service.saveToRemote(localEntry)
                    if (savedRemote) {
                        await service.setLocal({
                            ...localEntry,
                            savedToRemote: true
                        })
                        return {
                            ...localEntry,
                            savedToRemote: true
                        }
                    }
                    return localEntry
                }
            }

            // Return local data if it exists (or null if nothing exists)
            return localEntry || null
        },
        enabled: typeof window !== 'undefined'
    })

    // Mutation for updating data
    const updateRecord = async (updatedData: QuestionDataJson & {
        isSubmitted?: boolean;
        savedToRemote?: boolean;
        createdAt?: string;
        updatedAt?: number;
    }): Promise<QuestionRecordLocal | null> => {
        try {
            // Extract metadata from the question data
            const { createdAt, updatedAt, isSubmitted, savedToRemote, ...questionData } = updatedData;

            // Create the entry object
            const newRecord: QuestionRecordLocal = {
                path: pathSanitized,
                componentId: idSanitized,
                data: questionData,
                createdAt: createdAt ?? new Date().toISOString(),
                updatedAt: updatedAt ?? Date.now(),
                savedToRemote: false,
                isSubmitted: isSubmitted ?? false
            }

            // Set locally first
            await service.setLocal(newRecord)

            // Then try to save to remote if authenticated
            if (sessionStatus === 'authenticated') {
                const remoteResult = await service.saveToRemote(newRecord)
                if (remoteResult) {
                    // Update local with remote status
                    const syncedRecord = {
                        ...newRecord,
                        savedToRemote: true
                    }
                    await service.setLocal(syncedRecord)
                    return syncedRecord
                }
            }

            return newRecord
        } catch (error) {
            logger.error('Error updating data:', error)
            return null
        } finally {
            // Always invalidate the query to refresh the data
            queryClient.invalidateQueries({
                queryKey: ['userData', pathSanitized, idSanitized]
            })
        }
    }

    return {
        record: userRecord,
        isLoading,
        updateRecord
    }
}