"use client"

import { usePathname } from 'next/navigation'

type YoutubeTimestampProps = {
    time: number;  // Time in seconds
    videoId: string;  // YouTube video ID
    label: string;  // Display text
}

export function YoutubeTimestamp({ time, videoId, label }: YoutubeTimestampProps) {
    const pathname = usePathname()
    const uniqueId = `${videoId}-${pathname?.replace(/\//g, '-') || 'default'}`

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        if (hours > 0) {
            return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
        } else {
            return `${mins}:${secs.toString().padStart(2, '0')}`
        }
    }

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        // Send message to YouTube component
        window.postMessage({
            type: 'youtube-seek',
            targetId: uniqueId,
            time: time
        }, window.location.origin)
    }

    return (
        <a
            href="#"
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline cursor-pointer"
        >
            <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                {formatTime(time)}
            </span>
            <span>{label}</span>
        </a>
    )
}