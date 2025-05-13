"use client"

import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import { logger } from '../utils'

// Define props type outside so it can be used with dynamic import
interface MuxVideoProps {
    src: string
    poster: string
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
    const { src: playbackId, poster, blurDataURL, aspectRatio, alt, ...restProps } = props
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
            poster={poster}
            placeholder={blurDataURL ?? ''}
            accentColor="hsl(204deg, 100%, 55%)"
            style={{ aspectRatio: aspectRatio ?? 16 / 9 }}
            autoPlay={alt ? alt.includes('autoplay') : false}
            loop={alt ? alt.includes('loop') : false}
            {...restProps}
        />
    )
}