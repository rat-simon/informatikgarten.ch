import type { TurtleConfigType } from '../types/TurtleTypes'
import { autosaveHandler } from '../utils/autosave'

/**
 * Event handler to grab the canvas in the graphics panel and move it around
 * @param e Event
 * @param c Main config object
 * @param setPosition State function to set the position of the canvas
 */
export const grabCanvasHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    c: TurtleConfigType,
    setPosition: (position: { top: number; left: number }) => void
) => {
    e.preventDefault()

    // get the starting position of the cursor
    let startPosX = e.clientX
    let startPosY = e.clientY
    const mouseMoveHandler = (e: MouseEvent) => {
        // calculate the new position
        const newPosX = startPosX - e.clientX
        const newPosY = startPosY - e.clientY

        // with each move we also want to update the start X and Y
        startPosX = e.clientX
        startPosY = e.clientY
        if (c.graphicswrapperRef.current) {
            setPosition({
                top: c.graphicswrapperRef.current.offsetTop - newPosY,
                left: c.graphicswrapperRef.current.offsetLeft - newPosX
            })
        }
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mouseMoveHandler)
    })
}

/**
 * Initializes the event listener to zoom in the graphics panel
 * @param c Main config object
 */
export const initScaler = (c: TurtleConfigType) => {
    let canvasScale = 1
    const zoomCanvasFnc = (e: WheelEvent) => {
        e.preventDefault()
        canvasScale += canvasScale * e.deltaY * 0.001
        // canvasScale = Math.min(Math.max(0.125, canvasScale), 4);
        if (c.graphicswrapperRef.current)
            c.graphicswrapperRef.current.style.transform = `translate(-50%, -50%) scale(${canvasScale}, ${canvasScale})`
    }
    if (c.graphicspanelRef.current)
        c.graphicspanelRef.current.addEventListener('wheel', zoomCanvasFnc, {
            passive: false
        })
}

/**
 * Resets the history index and autosaves the code upon clicking outside of the code editor
 * @param e Event
 * @param c Main config object
 * @param setRedo setRedo button state
 */
export const handleDocClick = (
    e: MouseEvent,
    c: TurtleConfigType,
    setRedo: React.Dispatch<React.SetStateAction<boolean>>
) => {
    if (
        c.codeControlRef.current &&
        c.historyIndexRef.current !== -1 &&
        !c.codeControlRef.current.contains(e.target as Node)
    ) {
        c.historyIndexRef.current = -1
        autosaveHandler(c)
        setRedo(false)
    }
}

/**
 * Attaches the necessary event listeners to resize the panels
 * @param c The main config object
 */
export const initHResizer = (c: TurtleConfigType) => {
    const resize = (e: MouseEvent) => {
        const x = e.clientX
        if (
            c.wrapperRef.current &&
            c.editorPanelRef.current &&
            c.graphicspanelRef.current
        ) {
            const parentRect = c.wrapperRef.current.getBoundingClientRect()
            const newLeftWidth = x - parentRect.left
            const newRightWidth = parentRect.right - x
            c.editorPanelRef.current.style.width = `${newLeftWidth}px`
            c.graphicspanelRef.current.style.width = `${newRightWidth}px`
        }
    }
    const stopResize = () => {
        window.removeEventListener('mousemove', resize)
        window.removeEventListener('mouseup', stopResize)
        // resizecontroller.abort()
    }
    c.resizerHRef.current!.addEventListener('mousedown', (e: MouseEvent) => {
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
    })
}
