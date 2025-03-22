import { useUserData } from '@/lib/userDataService'
import { QuestionRecordLocal, QuestionDataJson } from '@/types/UserDataTypes'
import { logger } from '@utils'
import cn from 'clsx'
import { useSession } from 'next-auth/react'
import { useRouter } from 'nextra/hooks'
import React, { useEffect, useState } from 'react'

interface QuestionProps {
    children: React.ReactNode
    type: 'single' | 'multiple' | 'text' | 'number'
    id: string
    onAnswer?: (data: QuestionRecordLocal) => void
    showFeedback?: boolean
    allowUpdate?: boolean
    minValue?: number
    maxValue?: number
    step?: number
}

interface OptionProps {
    children: React.ReactNode
    feedback?: string
    is?: 'true' | 'false'
}

// Utility function to convert string to boolean
const strToBool = (value: 'true' | 'false' | undefined): boolean => value === 'true'

function Question({
    children,
    id,
    type = 'multiple',
    showFeedback = true,
    allowUpdate = false,
    onAnswer,
    minValue = 0,
    maxValue = 100,
    step = 1
}: QuestionProps) {
    const [selected, setSelected] = useState<number[]>([])
    const [textAnswer, setTextAnswer] = useState<string>('')
    const [numberAnswer, setNumberAnswer] = useState<number>(minValue)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [createdAt, setCreatedAt] = useState<string>(new Date().toISOString())
    const [hasVersionConflict, setHasVersionConflict] = useState(false)
    const [savedToRemote, setSavedToRemote] = useState(false)
    const { status } = useSession()

    const path = useRouter().asPath
    const { record, isLoading, updateRecord } = useUserData(path, id)

    // Load saved state when record is available
    useEffect(() => {
        if (!record) return

        logger.debug('Loaded question record', record)

        // Store the createdAt for version tracking
        if (record.createdAt) {
            setCreatedAt(record.createdAt)
        }

        // Handle version conflicts
        if (record.hasVersionConflict) {
            setHasVersionConflict(true)
            logger.warn('Version conflict detected', { path, id })
        }

        // Load question content from the data field
        if (record.data) {
            if (record.data.selected) setSelected(record.data.selected)
            if (record.data.string !== undefined) setTextAnswer(record.data.string)
            if (record.data.number !== undefined) setNumberAnswer(record.data.number)
            setIsSubmitted(true)
        }

        // Set submission and sync state
        if (record.savedToRemote !== undefined) setSavedToRemote(record.savedToRemote)

    }, [record, path, id])

    // Handle selection for single/multiple choice questions
    const handleSelect = (index: number) => {
        if (!allowUpdate && isSubmitted) return

        if (type === 'single') {
            setSelected([index])
        } else {
            setSelected(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            )
        }
    }

    // Handle text input changes
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!allowUpdate && isSubmitted) return
        setTextAnswer(e.target.value)
        setIsSubmitted(false)
    }

    // Handle number/slider input changes
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!allowUpdate && isSubmitted) return
        setNumberAnswer(Number(e.target.value))
        setIsSubmitted(false)
    }

    // Save the question data
    const handleSubmit = () => {
        // Validate input based on question type
        if (
            (type === 'single' || type === 'multiple') && selected.length === 0 ||
            type === 'text' && !textAnswer.trim() ||
            type === 'number' && numberAnswer === undefined
        ) return

        setIsSubmitted(true)

        // Prepare data object with metadata
        const questionData: QuestionDataJson = {}

        // Add type-specific data
        if (type === 'single' || type === 'multiple') {
            questionData.selected = selected
        } else if (type === 'text') {
            questionData.string = textAnswer
        } else if (type === 'number') {
            questionData.number = numberAnswer
        }

        // Create the full data record
        const newRecord: QuestionRecordLocal = {
            path,
            componentId: id,
            data: questionData,
            isSubmitted: true,
            createdAt: createdAt,
            updatedAt: Date.now(),
            savedToRemote: false
        }

        logger.debug('Submitting question data', newRecord)

        // Update record
        updateRecord({
            ...questionData,
            isSubmitted: true,
            createdAt: createdAt ?? new Date().toISOString(),
            updatedAt: Date.now()
        })
            .then(result => {
                if (result) {
                    setSavedToRemote(!!result.savedToRemote)

                    // Clear any version conflicts after successful update
                    if (hasVersionConflict) setHasVersionConflict(false)

                    // Call the onAnswer callback if provided
                    if (onAnswer) onAnswer(result)
                }
            })
            .catch(error => {
                logger.error('Failed to update question data', error)
            })
    }

    // Get button disabled state
    const isButtonDisabled =
        (type === 'single' || type === 'multiple') && selected.length === 0 ||
        type === 'text' && !textAnswer.trim() ||
        type === 'number' && numberAnswer === undefined

    return (
        <div className={cn("space-y-4 border rounded-lg p-4 shadow-sm", {
            "border-orange-300 bg-orange-50 dark:bg-orange-900/10": hasVersionConflict
        })}>
            {hasVersionConflict && (
                <div className="p-2 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 text-sm rounded flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Version conflict detected. Your local version is shown, but others may have different answers.</span>
                </div>
            )}

            {/* Single/Multiple Choice Questions */}
            {(type === 'single' || type === 'multiple') && (
                <div className="space-y-2">
                    {React.Children.map(
                        children,
                        (child: React.ReactElement, index) => (
                            <div
                                onClick={() => handleSelect(index)}
                                className={cn('p-4 border rounded', {
                                    'cursor-pointer': allowUpdate || !isSubmitted,
                                    'cursor-default': !allowUpdate && isSubmitted,
                                    'hover:bg-gray-50 dark:hover:bg-gray-800': !isSubmitted || allowUpdate,
                                    'border-blue-500': selected.includes(index),
                                    'text-green-500 border-green-500': isSubmitted && showFeedback && strToBool(child.props.is) === selected.includes(index),
                                    'text-red-500 border-red-500': isSubmitted && showFeedback && !strToBool(child.props.is) === selected.includes(index)
                                })}
                            >
                                <div className="flex items-center gap-3">
                                    {type === 'single' ? (
                                        <div
                                            className={cn('w-4 h-4 rounded-full border', {
                                                'border-4 border-blue-500': selected.includes(index),
                                                'border-gray-300': !selected.includes(index)
                                            })}
                                        />
                                    ) : (
                                        <div
                                            className={cn('w-4 h-4 rounded border', {
                                                'bg-blue-500 border-blue-500': selected.includes(index),
                                                'border-gray-300': !selected.includes(index)
                                            })}
                                        >
                                            {selected.includes(index) && (
                                                <svg className="text-white" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                            )}
                                        </div>
                                    )}
                                    {child}
                                </div>

                                {isSubmitted && showFeedback && child.props.feedback && (
                                    <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                                        {strToBool(child.props.is) === selected.includes(index) ? '✓ ' : '✗ '}
                                        {child.props.feedback}
                                    </div>
                                )}
                            </div>
                        )
                    )}
                </div>
            )}

            {/* Text Questions */}
            {type === 'text' && (
                <div className="space-y-2">
                    <textarea
                        value={textAnswer}
                        onChange={handleTextChange}
                        disabled={isSubmitted && !allowUpdate}
                        className={cn('w-full p-3 border rounded min-h-[120px]', {
                            'opacity-80 cursor-not-allowed': isSubmitted && !allowUpdate
                        })}
                        placeholder="Geben Sie Ihre Antwort ein..."
                    />
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {children}
                    </div>
                </div>
            )}

            {/* Number/Slider Questions */}
            {type === 'number' && (
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-sm">
                            <span>{minValue}</span>
                            <span className="font-semibold">{numberAnswer}</span>
                            <span>{maxValue}</span>
                        </div>
                        <input
                            type="range"
                            min={minValue}
                            max={maxValue}
                            step={step}
                            value={numberAnswer}
                            onChange={handleNumberChange}
                            disabled={isSubmitted && !allowUpdate}
                            className={cn('w-full', {
                                'opacity-80 cursor-not-allowed': isSubmitted && !allowUpdate
                            })}
                        />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {children}
                    </div>
                </div>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {(!isSubmitted || allowUpdate) && (
                        <button
                            onClick={handleSubmit}
                            disabled={isButtonDisabled}
                            className={cn('px-4 py-2 rounded bg-blue-500 text-white', {
                                'opacity-50 cursor-not-allowed': isButtonDisabled,
                                'hover:bg-blue-600': !isButtonDisabled
                            })}
                        >
                            {isSubmitted && allowUpdate ? 'Update' : 'Submit'}
                        </button>
                    )}
                </div>

                {/* Save Status Indicator */}
                {isSubmitted && (
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                        {savedToRemote ? (
                            <>
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Saved</span>
                            </>
                        ) : status === 'authenticated' ? (
                            <>
                                <svg className="w-4 h-4 text-yellow-500 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>Syncing...</span>
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Saved locally</span>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

Question.Option = function Option({ children, feedback, is }: OptionProps) {
    return <div>{children}</div>
}

export { Question }
export { SQLQuestion } from './SQLQuestion'