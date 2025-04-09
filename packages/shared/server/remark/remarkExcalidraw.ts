import type { Image, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export const remarkExcalidraw: Plugin<[], Root> = () => ast => {
    visit(ast, 'image', (_node, index, parent: any) => {
        const node = _node as Image

        if (node.url.endsWith('.excalidraw') || node.url.endsWith('.excalidraw.md')) {
            const url = node.url.replace('.excalidraw.md', '.excalidraw')

            // Create lightNode at [0]
            const lightNode = {
                type: 'image',
                url: url + '.light.svg',
                alt: node.alt
            }

            // Create darkNode at [1]
            const darkNode = {
                type: 'image',
                url: url + '.dark.svg',
                alt: node.alt,
                width: node.alt?.includes('excalidraw') && node.alt
            }

            // Create new node of type 'excalidraw' with lightNode and darkNode as children
            const excalidrawNode = {
                // type: 'raw',
                tagName: 'excalidraw',
                children: [lightNode, darkNode],
                data: {
                    hName: 'excalidraw'
                }
            }

            // Replace the original node with the new excalidrawNode in the parent's children array
            parent.children[index || 0] = excalidrawNode
        }
    })
}
