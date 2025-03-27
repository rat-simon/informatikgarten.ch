"use client"

import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'

// Define props type outside so it can be used with dynamic import
interface MuxVideoProps {
    src: string
    className: string
    alt: string
    blurDataURL?: string | null
    aspectRatio?: number | null
}

const MuxPlayer = dynamic(
    () => import('@mux/mux-player-react').then((mod) => mod.default),
    {
        ssr: false,
        loading: () => (
            <div
                className="bg-gray-200 animate-pulse"
                style={{ aspectRatio: '16/9' }}
            />
        )
    }
)

export function MuxVideo(props: MuxVideoProps): ReactElement {
    const { src: playbackId, blurDataURL, aspectRatio, ...restProps } = props
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return (
            <div
                className={`bg-gray-200 ${props.className}`}
                style={{ aspectRatio: aspectRatio ?? 16 / 9 }}
            />
        )
    }

    return (
        <MuxPlayer
            playbackId={playbackId}
            placeholder={blurDataURL ?? ''}
            accentColor="hsl(204deg, 100%, 55%)"
            style={{ aspectRatio: aspectRatio ?? 16 / 9 }}
            {...restProps}
        />
    )
}