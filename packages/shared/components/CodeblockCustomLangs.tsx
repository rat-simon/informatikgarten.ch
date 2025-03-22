"use client"

/* eslint-disable tailwindcss/no-custom-classname */
import cn from 'clsx'
import FeatherIcon from 'feather-icons-react'
import React, { useEffect, useRef, useState } from 'react'

function splitWebCodeBlock(code: string): {
    html: string
    css: string
    js: string
} {
    const result = { html: '', css: '', js: '' }
    for (const [, part] of code.split('---').entries()) {
        if (!part.trim()) continue
        const index = part.indexOf('\n')
        const lang = part.slice(0, index).trim() as 'html' | 'css' | 'js'
        const content = part.slice(index + 1).trim()
        if (['html', 'css', 'js'].includes(lang)) {
            result[lang] = content
        }
    }
    return result
}

export function Codepen(props: any) {
    const codepenWrapperRef = useRef(null as HTMLDivElement | null)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const dynamicStyles = `
    .codepen-wrapper .cp_embed_wrapper {
        overflow: hidden;
        height: 100%;
        width: 100%;
    }
    .codepen-wrapper iframe {
        height: 100% !important;
    }
    `

    // Add Codepen embed script
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://static.codepen.io/assets/embed/ei.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen().then(() => setIsFullscreen(false))
        } else {
            codepenWrapperRef.current
                ?.requestFullscreen()
                .then(() => setIsFullscreen(true))
        }
    }

    const codeObject = splitWebCodeBlock(props.children ?? '')
    const codeSdx: React.JSX.Element[] = []
    for (const [lang, code] of Object.entries(codeObject)) {
        codeSdx.push(
            <pre key={lang} data-lang={lang}>
                {code}
            </pre>
        )
    }

    return (
        <>
            <style>{dynamicStyles}</style>
            <div
                ref={codepenWrapperRef}
                className={cn(
                    'codepen-wrapper _relative _w-full _overflow-hidden _z-20',
                    !isFullscreen && '_resize'
                )}
                style={{ height: props.height ?? '300px' }}
            >
                { props.hash ? (
                    <div
                        className="codepen"
                        data-theme-id="1"
                        data-slug-hash={props.hash}
                        data-default-tab={props.tabs ?? 'result'}
                    />
                ) : (
                    <div
                        className="codepen"
                        data-editable="true"
                        data-prefill
                        data-theme-id="1"
                        data-default-tab={props.tabs ?? 'html,result'}
                    >
                        {codeSdx}
                    </div>
                )}
                <button
                    onClick={toggleFullscreen}
                    className="_absolute _bottom-1 _right-2.5 _text-white _rounded _overflow-visible _z-30 _bg-neutral-700 _p-1"
                >
                    {isFullscreen ? (
                        <FeatherIcon size={14} icon="minimize-2" />
                    ) : (
                        <FeatherIcon size={14} icon="maximize-2" />
                    )}
                </button>
            </div>
        </>
    )
}

export function RenderHtml(props: any) {
    const { html, css, js } = splitWebCodeBlock(props.children ?? '')

    useEffect(() => {
        // Todo: Get rid of eval()
        try {
            eval(js)
        } catch (error) {
            console.error(error)
        }
    }, [js])

    return (
        <>
            <div className="_w-full _text-center">
                <style dangerouslySetInnerHTML={{ __html: css }} />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </>
    )
}
