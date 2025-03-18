import { createBlurUp } from '@mux/blurup'
import { logger } from '../utils' // Direct because it's a plugin
import type { Plugin } from 'unified'
import type { Node } from 'unist'
import { visit } from 'unist-util-visit'

interface MuxVideoNode extends Node {
    tagName: 'muxvideo'
    properties: {
        src: string
        className: string
        alt: string
        blurDataURL?: string | null
        aspectRatio?: number | null
    }
}

// Throttling function with concurrency control
async function throttledQueue(
    muxvideoNodes: MuxVideoNode[],
    concurrency: number
): Promise<void> {
    let index = 0
    let running = 0
    const promises: Promise<void>[] = []

    const enqueue = async () => {
        if (index === muxvideoNodes.length) return
        const currentNode = muxvideoNodes[index++]
        if (!currentNode) return
        running++
        promises.push(
            (async () => {
                try {
                    const { blurDataURL, aspectRatio } = await createBlurUp(
                        currentNode.properties.src
                    )
                    currentNode.properties.blurDataURL = blurDataURL
                    currentNode.properties.aspectRatio = aspectRatio
                } catch (error) {
                    logger.warn(
                        `Error processing node: ${currentNode.properties.src}`,
                        error
                    )
                } finally {
                    running--
                    if (index < muxvideoNodes.length && running < concurrency) {
                        enqueue()
                    }
                }
            })()
        )
    }

    while (running < concurrency && index < muxvideoNodes.length) {
        enqueue()
    }

    await Promise.all(promises)
}

export const rehypeMuxvideo: Plugin<[], Node> = function () {
    return async function transformer(ast: Node) {
        const muxvideoNodes: MuxVideoNode[] = []
        visit(ast, 'element', node => {
            if (
                (node as MuxVideoNode).tagName === 'muxvideo' &&
                !(node as MuxVideoNode).properties.aspectRatio
            ) {
                muxvideoNodes.push(node as MuxVideoNode)
            }
        })

        // Throttle the tasks to limit concurrency
        const concurrency = 5 // Adjust the concurrency limit as needed
        await throttledQueue(muxvideoNodes, concurrency)

        return ast
    }
}
