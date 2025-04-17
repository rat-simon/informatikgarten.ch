import type { Root, Node } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'

/**
 * Remark plugin to transform wiki links to markdown links
 * Handles wiki links that span across multiple nodes and node types
 */
export const remarkWikiLinks: Plugin<[], Root> = () => (ast) => {
    // Handle complete wiki links in a single node
    visit(ast, 'text', (node, index, parent) => {
        if (node.value.includes('[[') && node.value.includes(']]') && parent && index !== undefined) {
            transformNodeWithWikiLinks(node, index, parent);
        }
    });

    // Handle split wiki links across multiple nodes of potentially different types
    visit(ast, 'paragraph', (paragraph) => {
        // Search for patterns like: [text with '![[' or '[['] + [any nodes] + [text with ']]']
        if (!paragraph.children || paragraph.children.length < 2) return;

        for (let i = 0; i < paragraph.children.length; i++) {
            const startNode = paragraph.children[i];

            // Check if this node contains the start of a wiki link
            if (startNode && startNode.type === 'text' &&
                (startNode.value.includes('![[') || startNode.value.endsWith('[[') ||
                    startNode.value.includes('[[') && !startNode.value.includes(']]'))) {

                // Look for a matching end node
                for (let j = i; j < paragraph.children.length; j++) {
                    const endNode = paragraph.children[j];

                    if (endNode && endNode.type === 'text' && endNode.value.includes(']]')) {
                        if (i === j && startNode.value.includes('[[') && startNode.value.includes(']]')) {
                            // This is a complete wiki link in a single node - already handled by first visit
                            continue;
                        }

                        // Extract content between [[ and ]]
                        let fullContent = "";
                        let openingFound = false;
                        let extractedMiddle = "";

                        // Process start node
                        if (startNode.value.includes('![[')) {
                            const parts = startNode.value.split('![[');
                            fullContent += parts[0]; // Content before ![[
                            openingFound = true;

                            // Check if the opening node has more text after ![[ that needs to be part of the link
                            if (parts.length > 1 && parts[1]) {
                                extractedMiddle = parts[1];
                            }
                        } else if (startNode.value.includes('[[')) {
                            const parts = startNode.value.split('[[');
                            fullContent += parts[0]; // Content before [[
                            openingFound = true;

                            // Check if the opening node has more text after [[ that needs to be part of the link
                            if (parts.length > 1 && parts[1]) {
                                extractedMiddle = parts[1];
                            }
                        }

                        // Extract content from middle nodes
                        for (let k = i + 1; k < j; k++) {
                            const middleNode = paragraph.children[k];
                            if (!middleNode) continue;

                            if (middleNode.type === 'text') {
                                extractedMiddle += middleNode.value;
                            } else if (middleNode.type === 'link') {
                                // For link nodes, use the URL
                                extractedMiddle += middleNode.url;
                            } else {
                                // For other node types, try to get a string representation
                                try {
                                    extractedMiddle += JSON.stringify(middleNode);
                                } catch (e) {
                                    extractedMiddle += "[complex content]";
                                }
                            }
                        }

                        // Process end node
                        let closingParts = endNode.value.split(']]');
                        extractedMiddle += closingParts[0]; // Content before ]]

                        // Create the complete wiki link syntax
                        let wikiLinkSyntax = '';
                        if (startNode.value.includes('![[')) {
                            wikiLinkSyntax = `![[${extractedMiddle}]]`;
                        } else {
                            wikiLinkSyntax = `[[${extractedMiddle}]]`;
                        }

                        // Transform the wiki link
                        const transformedLink = processWikiLinks(wikiLinkSyntax);
                        fullContent += transformedLink;

                        // Add any content after the closing ]]
                        if (closingParts.length > 1) {
                            fullContent += closingParts.slice(1).join(']]');
                        }

                        // Parse the transformed content back to nodes
                        const parsedAst = fromMarkdown(fullContent);

                        if (parsedAst.children.length > 0 && parsedAst.children[0]?.type === 'paragraph') {
                            // Replace the range of nodes with the transformed content
                            const nodesToRemove = j - i + 1;
                            paragraph.children.splice(i, nodesToRemove, ...parsedAst.children[0].children);

                            // Adjust the loop index since we've modified the children array
                            j = i - 1; // Will be incremented to i in the next iteration
                        }

                        break; // Move to the next potential wiki link
                    }
                }
            }
        }
    });

    return ast;

    // Helper function to transform a node with wiki links
    function transformNodeWithWikiLinks(node, index, parent) {
        const transformedText = processWikiLinks(node.value);

        if (transformedText !== node.value) {
            const parsedAst = fromMarkdown(transformedText);
            if (parsedAst.children.length > 0 && parsedAst.children[0]?.type === 'paragraph') {
                parent.children.splice(index, 1, ...parsedAst.children[0].children);
            }
        }
    }

    // Helper function to process wiki links text
    function processWikiLinks(text) {
        return text.replace(
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
    }
};