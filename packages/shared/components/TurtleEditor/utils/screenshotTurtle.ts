import { cropToContent } from "./cropToContent"

const flattenCanvas = (
    wrapper: HTMLDivElement
): HTMLCanvasElement | undefined => {
    if (!wrapper || !wrapper.children) {
        console.log('No wrapper or children found')
        return
    }
    let canvases = Array.from(wrapper.children) as HTMLCanvasElement[]
    if (canvases.length === 0) {
        console.log('No canvases found')
        return
    }

    canvases = canvases.slice().reverse()

    const width = canvases[0]?.width ?? 0
    const height = canvases[0]?.height ?? 0

    // Create a new offscreen canvas
    const offscreenCanvas = document.createElement('canvas')
    offscreenCanvas.width = width
    offscreenCanvas.height = height

    // Draw each canvas onto the offscreen canvas context
    const ctx = offscreenCanvas.getContext('2d')
    if (!ctx) {
        console.error('Failed to get 2D context')
        return
    }

    ctx.clearRect(0, 0, width, height)
    canvases.forEach(canvas => {
        ctx.drawImage(canvas, 0, 0)
    })

    return offscreenCanvas
}

export const downloadScreenshot = wrapper => {
    const canvas = flattenCanvas(wrapper)
    if (!canvas) return

    // Create a link element to trigger the download
    const downloadLink = document.createElement('a')
    let pngDataUrl = canvas.toDataURL('image/png')

    cropToContent(pngDataUrl).then(result => {
        downloadLink.href = result.dataURL
        downloadLink.download = 'canvas_image.png'
        downloadLink.click()
    })

    // Clean up the URL object
    URL.revokeObjectURL(pngDataUrl)
}

export const getScreenshot = async wrapper => {
    const canvas = flattenCanvas(wrapper)
    if (!canvas) return

    const pngDataUrl = canvas.toDataURL('image/png')
    const result = await cropToContent(pngDataUrl)
    
    // Clean up the URL object
    URL.revokeObjectURL(pngDataUrl)
    return result
}
