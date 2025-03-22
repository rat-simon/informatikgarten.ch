import type { Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'

/**
* Remark plugin to transform wiki links to markdown links
*/
export const remarkWikiLinks: Plugin<[], Root> =
    () => (ast) => {
        visit(ast, 'text', (node, index, parent) => {
            if (node.value.includes('[[') && parent && index !== undefined) {
                const transformedText = node.value.replace(
                    /\[\[(.+?)(?:\|(.+?))?\]\]/g,
                    (match, link, text) => {
                        link = link.replace(/(\/)?index$/g, '');
                        if (link.length === 0) {
                            link = '/';
                        }
                        if (text) {
                            // [[page|Custom text]] -> [Custom text](page)
                            return `[${text}](${link})`;
                        } else {
                            // [[path/to/page]] -> [page](path/to/page)
                            const filename = link.split('/').pop();
                            return `[${filename}](${link})`;
                        }
                    }
                );

                if (transformedText !== node.value) {
                    const parsedAst = fromMarkdown(transformedText);
                    if (parsedAst.children.length > 0) {
                        parent.children.splice(index, 1, ...parsedAst.children);
                    }
                }
            }
        });

        return ast;
    };