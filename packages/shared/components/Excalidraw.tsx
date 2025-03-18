"use client"

import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { ReactElement } from 'react'

const { img: Image } = getDocsMDXComponents()

export function Excalidraw(props: any): ReactElement {
    const { theme } = useTheme()

    const node =
        theme === 'light'
            ? props.children[0].props.src
            : props.children[1].props.src

    return (
        <Image
            src={node.src}
            alt="svg alt tag"
            width={node.width}
            height={node.height}
            className={cn('excalidraw', theme)}
        />
    )
}
