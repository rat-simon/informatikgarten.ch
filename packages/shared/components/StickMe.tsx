'use client'

import { logger } from '@utils'
import cn from 'clsx'
import FeatherIcon from 'feather-icons-react'
import { p } from 'nextra/dist/types-BhjhW0gX'
import React, { useEffect, useRef, useState } from 'react'
import { Pin, Unpin } from './icons'

interface StickMeProps {
    children: React.ReactNode
    pinActivedAtStart: boolean
}

export function StickMeMaybe({ children, ...restprops }: StickMeProps) {
    return (
        <StickMe {...restprops} pinActivedAtStart={false}>
            {children}
        </StickMe>
    )
}

export function StickMe({ children, pinActivedAtStart = true }: StickMeProps) {
    const [pinActivated, setPinActivated] = useState(pinActivedAtStart)
    const [isSticking, setIsSticking] = useState(false)
    const dimensionsRef = useRef({
        elemHeight: 0,
        elemAspect: 0,
        wHeight: 0,
        wWidth: 0,
        isLandscape: true,
        contentWidth: 0,
        staticOffset: 0
    })
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const navbarOffset = 64

    const updateDimensions = () => {
        if (!containerRef.current) return
        const { width, height } = containerRef.current.getBoundingClientRect()
        const nextraContentColumn = document.querySelector(
            '.nextra-nav-container + div'
        )
        dimensionsRef.current = {
            elemHeight: height,
            elemAspect: width / height,
            wHeight: window.innerHeight,
            wWidth: window.innerWidth,
            isLandscape: window.innerWidth > window.innerHeight,
            contentWidth: nextraContentColumn
                ? (nextraContentColumn as HTMLElement).offsetWidth / 2.1
                : 0,
            staticOffset: containerRef.current.offsetTop
        }
    }

    // Get initial dimensions and set up handlers
    useEffect(() => {
        updateDimensions()

        if (!pinActivated) {
            setIsSticking(false)
            document.documentElement.classList.remove('has-sticky-content')
            return
        }

        const handleResize = () => {
            updateDimensions()
            handleScroll()
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        window.addEventListener('orientationchange', handleResize)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('orientationchange', handleResize)
            document.documentElement.classList.remove('has-sticky-content')
        }
    }, [pinActivated])

    const handleScroll = () => {
        if (
            pinActivated &&
            window.scrollY > dimensionsRef.current.staticOffset
        ) {
            setIsSticking(true)
            document.documentElement.classList.add('has-sticky-content')
        } else {
            setIsSticking(false)
            document.documentElement.classList.remove('has-sticky-content')
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative my-4"
            style={{
                transition: 'height 1s ease-in-out',
                height:
                    isSticking && !dimensionsRef.current.isLandscape
                        ? `${dimensionsRef.current.elemHeight}px`
                        : 'auto'
            }}
        >
            {isSticking && (
                // render simple placeholder box
                <div className="flex justify-end items-center h-8 w-full">
                    <FeatherIcon icon="arrow-right" size="32" />
                </div>
            )}
            <div
                ref={contentRef}
                className={cn(
                    'transition-all duration-200 ease-in-out',
                    isSticking ? 'fixed' : 'relative'
                )}
                style={{
                    width:
                        isSticking && dimensionsRef.current.isLandscape
                            ? `${dimensionsRef.current.contentWidth}px`
                            : 'auto',
                    top: isSticking ? navbarOffset : 'auto',
                    left:
                        isSticking && dimensionsRef.current.isLandscape
                            ? 'auto'
                            : 0,
                    marginLeft:
                        isSticking && dimensionsRef.current.isLandscape
                            ? `${dimensionsRef.current.contentWidth}px`
                            : 'auto',
                    zIndex: isSticking ? 'var(--z-fullscreen)' : 'auto'
                }}
            >
                {children}

                <button
                    onClick={() => setPinActivated(!pinActivated)}
                    className="absolute top-2 right-2 p-1.5 rounded-full shadow-md hover:bg-white/100 transition-colors z-10"
                    title={pinActivated ? 'Unpin' : 'Pin'}
                >
                    {pinActivated ? <Unpin /> : <Pin />}
                </button>

                <style jsx global>{`
                    html.has-sticky-content .nextra-toc {
                        ${dimensionsRef.current.isLandscape &&
                        'display: block;'}
                        width: ${dimensionsRef.current.contentWidth}px;
                    }
                    html.has-sticky-content .nextra-sidebar-container {
                        width: 0px;
                    }
                    html.has-sticky-content .nextra-toc div {
                        transform: translateX(100%);
                    }
                `}</style>
            </div>
        </div>
    )
}
