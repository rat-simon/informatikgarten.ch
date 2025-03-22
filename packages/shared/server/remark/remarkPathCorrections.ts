import path from 'node:path'
import fs from 'graceful-fs'
import type { Image, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { VFile } from 'vfile'
import { logger } from '../../utils'
import { searchFileInSubdirectories } from '../utils'

export const remarkPathCorrections: Plugin<[], Root, VFile> = () =>
    (ast, file) => {
        const filePath = file.path || ''

        visit(ast, 'image', (node: Image) => {
            if (!node.url.startsWith('http') && node.url.endsWith('.mp4')) {
                logger.info('🙈 A local mp4 file has been used?', node)
            }
            if (node.url) {
                const basePath = path.dirname(filePath)
                let resolvedPath = path.resolve(basePath, node.url)

                if (!fs.existsSync(resolvedPath)) {
                    const foundPath = searchFileInSubdirectories(
                        basePath,
                        path.basename(node.url)
                    )
                    if (foundPath) {
                        node.url = path.relative(basePath, foundPath)
                    } else {
                        logger.warn(`⚠️ Could not resolve path ${node.url}`)
                        node.url = '/img/no-image.svg'
                    }
                }

                if (!node.url.startsWith('.') && !node.url.startsWith('/')) {
                    node.url = `./${node.url}`
                }
            }
        })
    }