"use client"

import { useState } from 'react'

export function DemoButton() {
    const [isAlt, setIsAlt] = useState(false)

    return (
        <div
            className={`
                mx-auto p-5 text-2xl text-center rounded-md transition-all duration-200
                ${
                    isAlt
                        ? 'bg-[#0084ff] text-white w-[200px]'
                        : 'bg-white text-black w-[300px]'
                }
            `}
        >
            <p>Hello World</p>
            <button
                onClick={() => setIsAlt(!isAlt)}
                className={`
                    border-none rounded px-4 py-2 text-sm cursor-pointer
                    ${isAlt ? 'bg-white text-black' : 'bg-[#0084ff] text-white'}
                `}
            >
                Change color
            </button>
        </div>
    )
}

export default DemoButton
