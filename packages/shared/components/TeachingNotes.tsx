"use client"

import { isTeacherCS } from '../utils'
import React, { useMemo } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

interface TeachingNotesProps {
    children: React.ReactNode
}

export const TeachingNotes: React.FC<TeachingNotesProps> = ({ children }) => {
    
    // Generate static HTML at component mount time
    const staticHtml = useMemo(
        () => renderToStaticMarkup(<>{children}</>),
        [children]
    )
    const handleOpen = () => {
        const newWindow = window.open(
            '',
            '',
            'width=200,height=600,right=0,top=0'
        )
        if (newWindow) {
            const styleSheets = Array.from(document.styleSheets)
                .map(styleSheet => styleSheet.href)
                .filter(Boolean)
                .map(href => `<link rel="stylesheet" href="${href}" />`)
                .join('\n')

            const html = `
                <!DOCTYPE html>
                <html class="dark" dir="ltr" style="color-scheme: dark;">
                <head>
                    <title>Teaching Notes</title>
                    ${styleSheets}
                    <style>
                        body { zoom: 1.5; }
                    </style>
                </head>
                <body>
                    ${staticHtml}
                </body>
                </html>
            `
            newWindow.document.write(html)
            newWindow.document.close()
        }
    }

    return (
        <>
            {isTeacherCS() && (
                <button
                    onClick={handleOpen}
                    className="teachingnotes absolute top-[var(--nextra-navbar-height)] right-0 rotate-90 rounded-full bg-blue-500 text-white px-2 py-1 text-xs"
                >
                    Teaching Notes
                </button>
            )}
        </>
    )
}
