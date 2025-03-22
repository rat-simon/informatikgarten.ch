"use client"

import { getScreenshot } from './utils/screenshotTurtle'
import {
    ExcalidrawImageElement,
    FileId
} from '@excalidraw/excalidraw/element/types'
import {
    BinaryFileData,
    ExcalidrawImperativeAPI
} from "@excalidraw/excalidraw/types"
import autocrop from 'autocrop-js'
import cn from 'clsx'
import domtoimage from 'dom-to-image-more'
import FeatherIcon from 'feather-icons-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { codeToHtml } from 'shiki'
import fb from './style/feedback.module.css'
import { excali_image_template } from './types/FeedbackTypes'
import { TurtleConfigType } from './types/TurtleTypes'

const Excalidraw = dynamic(
    async () => (await import('@excalidraw/excalidraw')).Excalidraw,
    {
        ssr: false
    }
)

export function Feedback({ c }: { c: TurtleConfigType }) {
    const [showFeedback, setShowFeedback] = useState(false)
    const [excalidrawAPI, setExcalidrawAPI] =
        useState<ExcalidrawImperativeAPI | null>(null)
    const screenshotToExcalidraw = async () => {
        if (!excalidrawAPI) return

        try {
            const files_to_add = [] as BinaryFileData[]
            const elements_to_add = [] as ExcalidrawImageElement[]

            // Snapshot of code
            const code =
                c.codeeditorRef.current?.getValue() || 'No code provided'
            const codeShikiHtml = await codeToHtml(code, {
                lang: 'python',
                theme: 'min-light'
            })
            const parser = new DOMParser()
            const doc = parser.parseFromString(codeShikiHtml, 'text/html')
            const codeElement = doc.body.firstChild
            const codeImageDataURL = await domtoimage.toPng(codeElement, {
                scale: 2
            })
            const codeSnapResult = await autocrop(codeImageDataURL)

            const codeFileId = 'code' as FileId
            const turtleImageFileId = 'turtle' as FileId

            files_to_add.push({
                mimeType: 'image/png',
                id: codeFileId,
                dataURL: codeSnapResult.dataURL,
                created: Date.now()
            })
            elements_to_add.push({
                ...excali_image_template,
                x: 0,
                width: codeSnapResult.bbox.width,
                height: codeSnapResult.bbox.height,
                id: codeFileId,
                fileId: codeFileId
            })

            // Turtle screenshot
            const turtleSnapResult = await getScreenshot(
                c.graphicswrapperRef.current
            )

            if (turtleSnapResult) {
                elements_to_add.push({
                    ...excali_image_template,
                    x: codeSnapResult.bbox.width, // next to the code
                    id: turtleImageFileId,
                    fileId: turtleImageFileId,
                    width: turtleSnapResult.bbox.width * 2,
                    height: turtleSnapResult.bbox.height * 2
                })

                files_to_add.push({
                    mimeType: 'image/png',
                    id: turtleImageFileId,
                    dataURL: turtleSnapResult.dataURL,
                    created: Date.now()
                })
            }

            excalidrawAPI.addFiles(files_to_add)
            excalidrawAPI.updateScene({
                elements: elements_to_add
            })
        } catch (error) {
            console.error('Error processing screenshots:', error)
        }
    }

    return (
        <div className={cn(fb.feedbackrow)}>
            <div
                className={cn(
                    fb.feedbackContent,
                    showFeedback && fb.showFeedback
                )}
            >
                <Excalidraw excalidrawAPI={api => setExcalidrawAPI(api)} />
            </div>
            <div
                className={cn(fb.feedbackButton)}
                onClick={() => setShowFeedback(!showFeedback)}
            >
                {showFeedback ? (
                    <FeatherIcon size="24" icon="chevron-up" />
                ) : (
                    <FeatherIcon size="24" icon="chevron-down" />
                )}
            </div>
            {showFeedback && (
                <div
                    className={fb.feedbackButton}
                    onClick={() => screenshotToExcalidraw()}
                >
                    <FeatherIcon size="24" icon="download" />
                </div>
            )}
        </div>
    )
}
