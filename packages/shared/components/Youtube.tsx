"use client"

import Image from 'next/image'
import { useState } from 'react'

type YoutubeProps = {
    id: string;
    playlist?: string;
    startTime?: number;
}

export function Youtube({ id, playlist, startTime }: YoutubeProps) {
    if (!id && !playlist) return <div>No video id or playlist provided</div>

    // Render thumbnail until it's clicked on
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(true)

    // Build the YouTube URL parameters
    const buildEmbedUrl = () => {
        const params = new URLSearchParams();

        // Add autoplay when opened
        params.append('autoplay', '1');

        // Add start time if provided (in seconds)
        if (startTime) params.append('start', startTime.toString());

        // Add playlist if provided
        if (playlist) params.append('list', playlist);

        return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    }

    if (!isOpen) {
        return (
            <div className="relative cursor-pointer" onClick={handleClick}>
                <Image
                    src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                    width={1280}
                    height={720}
                    alt="Youtube thumbnail"
                    className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-4 transition-transform transform hover:scale-110">
                        <svg
                            className="w-16 h-16 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    {playlist && (
                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
                            </svg>
                            Playlist
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <iframe
            className="w-full aspect-video"
            src={buildEmbedUrl()}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}