import MuxPlayer from '@mux/mux-player-react'
import type { ReactElement } from 'react'

interface MuxvideoProps {
    src: string
    className: string
    alt: string
    blurDataURL?: string | null
    aspectRatio?: number | null
}

export function MuxVideo(props: MuxvideoProps): ReactElement {
    const { src: playbackId, blurDataURL, aspectRatio, ...restProps } = props
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
