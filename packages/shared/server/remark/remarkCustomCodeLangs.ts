import { visit } from 'unist-util-visit'
export const CUSTOM_CODE_LANGS = ['turtle', 'codepen', 'renderhtml']

export function remarkCustomCodeLangs() {
    return (ast: Node) => {
        visit(ast, 'code', (node: any) => {
            if (CUSTOM_CODE_LANGS.includes(node.lang)) {
                // Parse the attributes from the meta string
                const attributes = node.meta
                    ? node.meta
                        .split(' ')
                        .reduce((attrs: any, attr: string) => {
                            const [key, value] = attr.split('=')
                            if (key) {
                                attrs[key] = value ? value.replaceAll('"', '') : '' // remove quotes from value
                            }
                            return attrs
                        }, {})
                    : {}

                // Replace the node with a custom element
                node.type = 'element'
                node.tagName = node.lang
                node.data = {
                    hName: node.lang,
                    hProperties: attributes
                }
                node.children = [
                    {
                        type: 'raw',
                        value: node.value ?? ''
                    }
                ]
            }
        })
    }
}

export default remarkCustomCodeLangs