"use client"

import Image from 'next/image'
import { useState } from 'react'

export function Youtube({ id }) {
    if (!id) return <div>No id provided</div>

    // Render thumbnail until it's clicked on
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(true)

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
                </div>
            </div>
        )
    }

    return (
        <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
    )
}
