import log from '../../../utils/logger'
import { TurtleConfigType } from '../types/TurtleTypes'

export const browseHistory = (c: TurtleConfigType, delta: number) => {
    const history = c.historyRef.current
    const setUndo = c.setUndo
    const setRedo = c.setRedo

    if (history && setUndo && setRedo) {
        if (history.length <= 1) {
            setUndo(false)
            setRedo(false)
            return
        }
        const currentIndex = c.historyIndexRef.current ?? 0
        const newIndex = Math.max(currentIndex, 0) + delta
        log.info(`Browsing history to ${newIndex} of ${history.length - 1}`)

        if (history[newIndex] && newIndex >= 0 && newIndex < history.length) {
            c.historyIndexRef.current = newIndex
            if (c.codeeditorRef.current) {
                c.codeeditorRef.current.setValue(history[newIndex].code)
            }
        }
        setUndo(newIndex < history.length - 1)
        setRedo(newIndex > 0)
    }
}
