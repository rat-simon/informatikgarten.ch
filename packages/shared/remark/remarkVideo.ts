import path from 'path'
import fs from 'graceful-fs'
import type { Image, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { logger, searchFileInSubdirectories } from '../utils'

function fetchPlaybackIdFromJson(videoSrcString: string) {
    try {
        // Assuming videoSrcString is e.g. /videos/my-video.mp4 inside /content
        const jsonFilename = path.basename(videoSrcString + '.json')
        const videoJsonPath = searchFileInSubdirectories(
            process.cwd() + '/content/videos/',
            jsonFilename
        )

        if (!videoJsonPath) {
            logger.error('JSON file not found for', videoSrcString)
            return null
        }
        const jsonData = JSON.parse(fs.readFileSync(videoJsonPath, 'utf-8'))
        return jsonData.providerMetadata.mux.playbackId
    } catch (error) {
        console.error('Failed to fetch JSON data:', error)
    }
}

export const remarkVideo: Plugin<[], Root> = () => ast => {
    visit(ast, 'image', (_node, index, parent: any) => {
        const node = _node as Image
        if (!node.url.startsWith('http') && node.url.endsWith('.mp4')) {
            const playbackId = fetchPlaybackIdFromJson(node.url)
            const muxvideoNode = {
                type: 'muxvideo',
                data: {
                    hName: 'muxvideo',
                    hProperties: {
                        className: 'muxvideo',
                        src: playbackId,
                        alt: node.alt || ''
                    }
                }
            }
            // Replace the original node with the new muxvideoNode in the parent's children array
            parent.children[index || 0] = muxvideoNode
        }
    })
}
