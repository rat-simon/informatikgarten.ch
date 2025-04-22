import path from 'path'
import { promises as fsPromises } from 'fs'
import type { Image, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { logger } from '../../utils'
import { searchFileInSubdirectories } from '../utils'

async function fetchPlaybackIdAndPosterFromJson(videoSrcString: string): Promise<[string, string] | null> {
    try {
        // Assuming videoSrcString is e.g. /videos/my-video.mp4 inside /content
        const jsonFilename = path.basename(videoSrcString + '.json')
        const videoJsonPath = await searchFileInSubdirectories(
            process.cwd() + '/content/videos/',
            jsonFilename
        )

        if (!videoJsonPath) {
            logger.error('JSON file not found for', videoSrcString)
            return null
        }
        const jsonData = JSON.parse(await fsPromises.readFile(videoJsonPath, 'utf-8'))
        return [jsonData.providerMetadata.mux.playbackId, jsonData.poster]
    } catch (error) {
        console.error('Failed to fetch JSON data:', error)
        return null
    }
}

export const remarkVideo: Plugin<[], Root> = () => async (ast) => {
    const nodesToProcess: Array<{ node: Image, index: number | undefined, parent: any }> = []

    // First, collect all nodes to process
    visit(ast, 'image', (_node, index, parent: any) => {
        const node = _node as Image
        if (!node.url.startsWith('http') && node.url.endsWith('.mp4')) {
            nodesToProcess.push({ node, index, parent })
        }
    })

    // Then process them asynchronously
    for (const { node, index, parent } of nodesToProcess) {
        const result = await fetchPlaybackIdAndPosterFromJson(node.url)
        if (result) {
            const [playbackId, poster] = result
            const muxvideoNode = {
                type: 'muxvideo',
                data: {
                    hName: 'muxvideo',
                    hProperties: {
                        className: 'muxvideo',
                        src: playbackId,
                        poster: poster,
                        alt: node.alt || ''
                    }
                }
            }
            // Replace the original node with the new muxvideoNode
            parent.children[index || 0] = muxvideoNode
        }
    }

    return ast
}