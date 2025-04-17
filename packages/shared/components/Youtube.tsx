"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

type YoutubeProps = {
    id: string;
    playlist?: string;
    startTime?: number;
}

export function Youtube({ id, playlist, startTime }: YoutubeProps) {
    if (!id && !playlist) return <div>No video id or playlist provided</div>

    // Render thumbnail until it's clicked on
    const [isOpen, setIsOpen] = useState(false)
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
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

    // Check if thumbnail exists and find the best available one
    useEffect(() => {
        // Try to get video metadata for correct aspect ratio
        const fetchVideoMetadata = async () => {
            try {
                const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
                const metadataResponse = await fetch(oembedUrl);
                // If we can get metadata, proceed with thumbnails
                if (metadataResponse.ok) {
                    checkThumbnail(0);
                } else {
                    checkThumbnail(0);
                }
            } catch (error) {
                // Fallback to regular thumbnail check
                checkThumbnail(0);
            }
        };

        const thumbnailQualities = [
            'maxresdefault.jpg',
            'sddefault.jpg',
            'hqdefault.jpg',
            'mqdefault.jpg',
            'default.jpg'
        ];
        
        const checkThumbnail = async (index = 0) => {
            if (index >= thumbnailQualities.length) {
                // If we've tried all thumbnails without success, use a placeholder
                setThumbnailUrl('/images/video-placeholder.jpg');
                setIsLoading(false);
                return;
            }
            
            const url = `https://img.youtube.com/vi/${id}/${thumbnailQualities[index]}`;
            
            try {
                const response = await fetch(url, { method: 'HEAD' });
                if (response.ok) {
                    setThumbnailUrl(url);
                    setIsLoading(false);
                } else {
                    // Try next quality
                    checkThumbnail(index + 1);
                }
            } catch (error) {
                // Try next quality on error
                checkThumbnail(index + 1);
            }
        };
        
        fetchVideoMetadata();
    }, [id]);

    if (!isOpen) {
        return (
            <div className="relative cursor-pointer aspect-video" onClick={handleClick}>
                {isLoading ? (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                        <span>Loading thumbnail...</span>
                    </div>
                ) : (
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <Image
                            src={thumbnailUrl || `https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Youtube thumbnail"
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
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