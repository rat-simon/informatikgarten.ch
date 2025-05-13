import { logger } from '../../../utils'
import type { HistoryEntry, TurtleConfigType } from '../types/TurtleTypes'

const HISTORY_THRESHOLD = 10
const HISTORY_SIZE = 100

// Reset code to original
export const resetCode = (c: TurtleConfigType) => {
    if (
        c.codeeditorRef.current &&
        c.historyRef.current &&
        c.setRedo &&
        c.setUndo
    ) {
        c.codeeditorRef.current.setValue(c.initCode)
        c.historyRef.current.unshift({
            timestamp: Date.now(),
            code: c.initCode,
            sendRemote: false
        })
        c.historyIndexRef.current = -1
        c.setUndo(c.historyRef.current.length > 1)
        c.setRedo(false)
    }
}

export const autosaveHandler = (c: TurtleConfigType) => {
    // If browsing history, don't autosave
    if (c.historyIndexRef.current !== -1) {
        return
    }

    // Get current code
    const currentcode = c.codeeditorRef.current?.getValue()

    // Autosaving in first history item
    const history = c.historyRef.current
    history[0] = {
        timestamp: Date.now(),
        code: currentcode ?? '',
        sendRemote: false
    }
    c.autosaveCounterRef.current++

    // Every nr of HISTORY_THRESHOLD, save to history
    if (c.autosaveCounterRef.current % HISTORY_THRESHOLD === 0) {
        history[0].sendRemote = true
        history.unshift({
            timestamp: Date.now(),
            code: currentcode ?? '',
            sendRemote: false
        })
        history.length > HISTORY_SIZE && history.pop()
        if (c.setUndo) c.setUndo(history.length > 1)
        logger.info('Stored in history', history.length)

        if (c.sessionRef?.current) saveToRemote(c)
    }
}

export const saveBeforeUnload = (c: TurtleConfigType) => {
    logger.info('saveBeforeUnload')
    const history = c.historyRef.current
    // Check if code was changed from last time
    if (c.autosaveCounterRef.current === 0) {
        logger.info('unchanged code in', c.idRef.current)
        return
    }
    if (c.idRef.current !== null) {
        localStorage.setItem(c.idRef.current, JSON.stringify(history))
        logger.info('History saved to localStorage', history.length)
    }
}

export const restoreHandler = (c: TurtleConfigType) => {
    if (!c.idRef.current) return
    let localHistory = [] as HistoryEntry[]
    const localString = localStorage.getItem(c.idRef.current)
    if (
        localString !== null &&
        localString !== undefined &&
        localString !== '[]'
    ) {
        localHistory.push(...JSON.parse(localString))
        localHistory = localHistory.filter(
            item => typeof item.code === 'string'
        )
        logger.info('History restored from localStorage', localHistory.length)
        if (c.setUndo) c.setUndo(localHistory.length > 1)
        if (c.setRedo) c.setRedo(false)
    } else {
        logger.info('No history found in localStorage')
        localHistory.push({
            timestamp: 0,
            code: c.initCode,
            sendRemote: false
        })
    }
    c.historyRef.current = localHistory
    logger.silly('localHistory', localHistory)

    // Remember: restoreFromRemote is called after session is ready
}

export const saveToRemote = async (c: TurtleConfigType) => {
    // Sanitize entries without sendRemote
    // c.historyRef.current = c.historyRef.current.map(item => {
    //     return { sendRemote: true, ...item }
    // })
    // Filter entries with sendRemote true
    const sendRemoteList = c.historyRef.current.filter(
        item => item.sendRemote === true
    )
    logger.debug(`Sending ${sendRemoteList.length} items to remote.`)
    if (sendRemoteList.length === 0) return

    const editorId = c.idRef.current
    if (typeof editorId !== 'string' || editorId === '') {
        // If editorId is not a string or empty, do not save to remote
        logger.error('No valid editorId found, not saving to remote')
        return
    }
    const queryStart = performance.now()
    logger.debug('Saving to remote', editorId)
    fetch('/api/savecode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ editorId, history: sendRemoteList })
    }).then(() =>
        logger.debug(`The query took ${performance.now() - queryStart}ms`)
    )

    // Setting sendRemote to false
    c.historyRef.current = c.historyRef.current.map(item => {
        return { ...item, sendRemote: false }
    })

    logger.info('New items saved to remote', sendRemoteList.length)
}

export const loadFromRemote = async (c: TurtleConfigType) => {
    const editorId = c.idRef.current ?? ''
    const localTimestamps = c.historyRef.current.map(item => item.timestamp)
    logger.debug('localTimestamps', localTimestamps.length)
    logger.silly('localTimestamps', localTimestamps)
    if (editorId === '' || !localTimestamps) return

    // pass local timestamps to remote
    const response = await fetch(
        `/api/loadcode?editorId=${encodeURIComponent(
            editorId
        )}&localTimestamps=${encodeURIComponent(localTimestamps.join(','))}`
    )

    let withRemoteHistory = [] as HistoryEntry[]
    if (response.ok) {
        withRemoteHistory = (await response.json()).map(
            (item: HistoryEntry) => ({
                ...item,
                sendRemote: false
            })
        )
    } else {
        logger.error('Failed to fetch history from remote')
    }

    // check if response is an array
    if (!Array.isArray(withRemoteHistory)) {
        logger.error("Received a remote history that isn't an array.")
        return
    }

    // Logging
    logger.info('History received from remote:', withRemoteHistory.length)
    logger.silly('History received from remote:', withRemoteHistory)

    // check if there are any items in the array
    if (withRemoteHistory.length === 0) {
        return
    }

    // merge with local history
    withRemoteHistory.push(...c.historyRef.current)
    withRemoteHistory.sort((a, b) => b.timestamp - a.timestamp)

    // remove duplicates (shouldn't happen)
    const seen = new Set()
    const newHistory = withRemoteHistory.filter(item => {
        const duplicate = seen.has(item.timestamp)
        if (duplicate) {
            logger.warn('Duplicate detected!', item.timestamp)
        }
        seen.add(item.timestamp)
        return !duplicate
    })

    c.historyIndexRef.current = 999 // prevent new autosave
    c.historyRef.current = newHistory
    if (c.codeeditorRef?.current && newHistory[0]) {
        c.codeeditorRef.current.setValue(newHistory[0].code)
    }
    if (c.setUndo) c.setUndo(newHistory.length > 1)
    if (c.setRedo) c.setRedo(false)
    c.historyIndexRef.current = -1 // re-enable autosave
    c.autosaveCounterRef.current = 100 // make sure it's saved to localStorage
    logger.info('Merged remote and local histories.')
}
