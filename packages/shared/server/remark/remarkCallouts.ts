import type { BlockContent, Blockquote, Heading, Text } from 'mdast'
import { parse } from 'svg-parser'
import type { Plugin } from 'unified'
import type { Data, Node, Parent } from 'unist'
import { visit } from 'unist-util-visit'

export const calloutTypes = {
  // aliases
  summary: 'abstract',
  lernziele: 'success',
  exercise: 'abstract',
  tldr: 'abstract',
  hint: 'tip',
  important: 'tip',
  check: 'success',
  done: 'success',
  help: 'question',
  faq: 'question',
  caution: 'warning',
  attention: 'warning',
  fail: 'failure',
  missing: 'failure',
  error: 'danger',
  cite: 'quote',
  // base types
  note: {
    keyword: 'note',
    color: '#448aff',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-pencil"><line x1="18" y1="2" x2="22" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>'
  },
  tip: {
    keyword: 'tip',
    color: '#00bfa6',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>'
  },
  warning: {
    keyword: 'warning',
    color: '#ff9100',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-alert-triangle"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
  },
  abstract: {
    keyword: 'abstract',
    color: '#00aeff',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-clipboard-list"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>'
  },
  info: {
    keyword: 'info',
    color: '#00b8d4',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
  },
  todo: {
    keyword: 'todo',
    color: '#00b8d4',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-check-circle-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>'
  },
  success: {
    keyword: 'success',
    color: '#00c853',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>'
  },
  question: {
    keyword: 'question',
    color: '#63dd17',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
  },
  failure: {
    keyword: 'failure',
    color: '#ff5252',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
  },
  danger: {
    keyword: 'danger',
    color: '#ff1745',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
  },
  bug: {
    keyword: 'bug',
    color: '#f50057',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-bug"><rect x="8" y="6" width="8" height="14" rx="4"></rect><path d="m19 7-3 2"></path><path d="m5 7 3 2"></path><path d="m19 19-3-2"></path><path d="m5 19 3-2"></path><path d="M20 13h-4"></path><path d="M4 13h4"></path><path d="m10 4 1 2"></path><path d="m14 4-1 2"></path></svg>'
  },
  example: {
    keyword: 'example',
    color: '#7c4dff',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>'
  },
  quote: {
    keyword: 'quote',
    color: '#9e9e9e',
    svg: '<svg viewBox="0 0 100 100" class="quote-glyph" width="16" height="16"><path fill="currentColor" stroke="currentColor" d="M16.7,13.3c-3.7,0-6.7,3-6.7,6.7v26.7c0,3.7,3,6.7,6.7,6.7h13.5c0.1,6-0.5,18.7-6.3,28.2c0,0,0,0,0,0 c-0.9,1.4-0.7,3.1,0.5,4.2c1.2,1.1,3,1.2,4.3,0.2c0,0,14.7-11.2,14.7-32.7V20c0-3.7-3-6.7-6.7-6.7L16.7,13.3z M63.3,13.3 c-3.7,0-6.7,3-6.7,6.7v26.7c0,3.7,3,6.7,6.7,6.7h13.5c0.1,6-0.5,18.7-6.3,28.2h0c-0.9,1.4-0.7,3.1,0.5,4.2c1.2,1.1,3,1.2,4.3,0.2 c0,0,14.7-11.2,14.7-32.7V20c0-3.7-3-6.7-6.7-6.7L63.3,13.3z"></path></svg>'
  },
  solution: {
    keyword: 'solution',
    color: '#9e9e9e',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 45 45" fill="none" stroke="currentColor" stroke-width="3" ><g><path d="M28.3,34.8h-8.9c-.2-4.2-2.1-8.3-5.2-11.4-2.3-2.5-3.5-5.6-3.5-8.9.1-6.7,5.5-12.3,12.5-12.7,7.6-.4,14,5.5,14,12.8s-1.3,6.3-3.6,8.7c-3.2,3.3-5.1,7.4-5.3,11.5Z"/><path d="M17.8,39.4h12.3"/><path d="M17.8,43.8h12.3"/></g></svg>'
  },
  discuss: {
    keyword: 'discuss',
    color: '#ffe253',
    svg: '<svg viewBox="0 0 14 16" class="quote-glyph" width="16" height="16"><path fill="currentColor" stroke="none" d="M4.9,3.8C4.1,3.9,3.4,4,2.8,4.3C1.4,4.8,0.4,5.7,0.1,6.7c-0.2,0.8,0,1.6,0.6,2.3c0.2,0.3,0.6,0.6,1,0.8l0.1,0.1l0,0.1 c-0.1,0.1-0.2,0.3-0.3,0.4c-0.3,0.3-0.6,0.7-1.2,1.1c-0.2,0.1-0.2,0.2-0.3,0.2c0,0,0,0,0,0.1c0,0,0.2,0,0.3,0 c0.8-0.1,1.8-0.5,2.9-1.1l0.2-0.1l0.2,0c0.3,0.1,0.6,0.1,1,0.2c0.2,0,0.3,0,0.7,0c0.5,0,0.6,0,1,0c1.6-0.2,3-0.9,3.7-1.9 c0.2-0.3,0.4-0.7,0.5-1.1c0-0.1,0-0.5,0-0.7C10.4,6.3,9.9,5.6,9.1,5C8.3,4.4,7.2,4,5.9,3.9C5.7,3.8,5.1,3.8,4.9,3.8z"/><path fill="currentColor" stroke="none" d="M11,7.6c-0.1,0.6-0.3,1.2-0.7,1.7c-0.1,0.2-0.4,0.5-0.6,0.6c-0.5,0.5-1.2,0.8-1.9,1.1c-0.1,0-0.2,0.1-0.2,0.1 c0,0,0.2,0.2,0.3,0.3c0.3,0.2,0.7,0.4,1,0.5c0.9,0.3,1.9,0.3,2.8,0l0.1,0L12,12c0.4,0.2,0.8,0.4,1.1,0.6c0.2,0.1,0.6,0.2,0.7,0.2 c0.1,0,0.1,0,0.1,0c0,0,0-0.1-0.1-0.1c-0.2-0.2-0.3-0.3-0.5-0.4C13.1,12,13,11.8,13,11.7c0-0.1-0.1-0.3-0.1-0.3c0,0,0,0,0.1-0.1 c0.1,0,0.2-0.1,0.2-0.2c0.5-0.5,0.7-1,0.5-1.6c-0.1-0.6-0.6-1.1-1.3-1.5C12,7.8,11.6,7.7,11,7.6L11,7.6L11,7.6z" /></svg>'
  }
}

// escape regex special characters
function escapeRegExp(s: string) {
  return s.replaceAll(/[-[\]{}()*+?.\\^$|/]/g, '\\$&')
}

// match breaks
const find = /[\t ]*(?:\r?\n|\r)/g

export const remarkCallouts: Plugin = function (
  providedConfig?: Partial<Config>
) {
  const config: Config = { ...defaultConfig, ...providedConfig }
  const defaultKeywords: string = Object.keys(config.types)
    .map(escapeRegExp)
    .join('|')

  return function (tree) {
    visit(tree, (node: Node, index, parent: Parent) => {
      // Filter required elems
      if (node.type !== 'blockquote') return

      /** add breaks to text without needing spaces or escapes (turns enters into <br>)
       *  code taken directly from remark-breaks,
       *  see https://github.com/remarkjs/remark-breaks for more info on what this does.
       */
      visit(node, 'text', (node: Text, index: number, parent: Parent) => {
        const result: Array<{ type: string; value?: string }> = []
        let start = 0

        find.lastIndex = 0

        let match = find.exec(node.value)

        while (match) {
          const position = match.index

          if (start !== position) {
            result.push({
              type: 'text',
              value: node.value.slice(start, position)
            })
          }

          result.push({ type: 'break' })
          start = position + match[0].length
          match = find.exec(node.value)
        }

        if (result.length > 0 && parent && typeof index === 'number') {
          if (start < node.value.length) {
            result.push({ type: 'text', value: node.value.slice(start) })
          }

          parent.children.splice(index, 1, ...result)
          return index + result.length
        }
      })

      /** add classnames to headings within blockquotes,
       * mainly to identify when using other plugins that
       * might interfere. for eg, rehype-auto-link-headings.
       */
      visit(node, 'heading', node => {
        const heading = node as Heading
        heading.data = {
          hProperties: {
            className: 'blockquote-heading'
          }
        }
      })

      // wrap blockquote in a div
      const wrapper = {
        ...node,
        type: 'element',
        tagName: 'div',
        data: {
          hProperties: {}
        },
        children: [node]
      }

      parent.children.splice(Number(index), 1, wrapper)

      const blockquote = wrapper.children[0] as Blockquote

      blockquote.data = {
        hProperties: {
          className: 'blockquote'
        }
      }

      // check for callout syntax starts here
      if (
        blockquote.children.length <= 0 ||
        blockquote.children[0]?.type !== 'paragraph'
      )
        return
      const title_paragraph = blockquote.children[0]

      if (
        title_paragraph.children.length <= 0 ||
        title_paragraph.children[0]?.type !== 'text'
      )
        return

      const firstchild = title_paragraph.children[0]

      const regex = /^\[!(?<keyword>(.*?))\](?<foldChar>[+-]?)/gi
      const m = regex.exec(firstchild.value)

      // if no callout syntax, forget about it.
      if (!m) return
      const [key, foldChar] = [m.groups?.keyword, m.groups?.foldChar]

      // if there's nothing inside the brackets, is it really a callout ?
      if (!key) return

      // now we're going for it, so let's remove the callout syntax from the content
      firstchild.value = firstchild.value.replaceAll(regex, '')

      const keyword = key.toLowerCase()
      const isOneOfKeywords: boolean = new RegExp(defaultKeywords).test(keyword)

      const entry: { [index: string]: string } = {}

      if (isOneOfKeywords) {
        if (typeof config?.types[keyword] === 'string') {
          const e = String(config?.types[keyword])
          Object.assign(entry, config?.types[e])
        } else {
          Object.assign(entry, config?.types[keyword])
        }
      } else {
        Object.assign(entry, config?.types['note'])
      }

      let parsedSvg

      if (entry?.svg) {
        parsedSvg = parse(entry.svg)
      }

      // create icon and title node wrapped in div
      const titleNode: object = {
        type: 'element',
        children: [
          {
            type: 'element',
            tagName: 'span',
            data: {
              hName: 'span',
              hProperties: {
                style: `color:${entry?.color}`,
                className: 'callout-icon'
              },
              hChildren: parsedSvg?.children ? parsedSvg.children : []
            }
          },
          {
            type: 'element',
            children: [title_paragraph],
            data: {
              hName: 'span',
              hProperties: {
                className: '_font-bold'
              }
            }
          }
        ],
        data: {
          ...blockquote.children[0]?.data,
          hProperties: {
            className: `${formatClassNameMap(config.classNameMaps.title)(
              keyword
            )} ${isOneOfKeywords ? keyword : 'note'}`,
            style: `background-color: ${entry?.color}1a;`
          }
        }
      }
      blockquote.children.shift()

      // wrap blockquote content in div
      const contentNode: object = {
        type: 'element',
        children: blockquote.children,
        data: {
          hProperties: {
            className: 'callout-content',
            style:
              parent.type === 'root'
                ? ''
                : `border-right:1px solid ${entry?.color}33;
                border-bottom:1px solid ${entry?.color}33;`
          }
        }
      }

      if (blockquote.children.length > 0)
        blockquote.children = [contentNode] as BlockContent[]
      blockquote.children.unshift(titleNode as BlockContent)

      // Add classes for the callout block
      const classList = [
        formatClassNameMap(config.classNameMaps.block)(keyword.toLowerCase())
      ]
      if (foldChar) {
        classList.push('callout-foldable')
        if (foldChar === '-') {
          classList.push('callout-folded')
        }
      }
      blockquote.data = config.dataMaps.block({
        ...blockquote.data,
        hProperties: {
          className: classList.join(' '),
          style: `border-left-color:${entry?.color};`
        }
      }) as any
    })
  }
}

export interface Config {
  classNameMaps: {
    block: ClassNameMap
    title: ClassNameMap
  }
  dataMaps: {
    block: (data: Data) => Data
    title: (data: Data) => Data
  }
  types: { [index: string]: string | object }
}

export const defaultConfig: Config = {
  classNameMaps: {
    block: 'callout',
    title: 'callout-title'
  },
  dataMaps: {
    block: data => data,
    title: data => data
  },
  types: { ...calloutTypes }
}

type ClassNames = string | string[]
type ClassNameMap = ClassNames | ((title: string) => ClassNames)
function formatClassNameMap(gen: ClassNameMap) {
  return (title: string) => {
    const classNames = typeof gen == 'function' ? gen(title) : gen
    return typeof classNames == 'object' ? classNames.join(' ') : classNames
  }
}

export default remarkCallouts
