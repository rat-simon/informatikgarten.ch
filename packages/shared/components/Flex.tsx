import cn from 'clsx'
import React from 'react'

// Types for the Flex container
interface FlexProps {
    children: React.ReactNode
    gap?: 'none' | 'small' | 'medium' | 'large'
    className?: string
    wrap?: boolean
    direction?: 'row' | 'column'
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
}

// Types for the Flex.Item component
interface FlexItemProps {
    children: React.ReactNode
    className?: string
    width?: string | number
    grow?: boolean
}

// The Flex.Item component
const Item = ({ children, className, width, grow = true }: FlexItemProps) => {
    return (
        <div
            className={cn(
                'min-w-0', // Prevent content overflow
                grow ? 'flex-grow' : 'flex-grow-0',
                className
            )}
            style={width ? { width } : undefined}
        >
            {children}
        </div>
    )
}

// The main Flex component
const Flex = ({
    children,
    gap = 'medium',
    className,
    wrap = true,
    direction = 'row',
    justify = 'start',
    align = 'start'
}: FlexProps) => {
    // Map props to Tailwind classes
    const gapMap = {
        none: 'gap-0',
        small: 'gap-2',
        medium: 'gap-4',
        large: 'gap-8'
    }

    const justifyMap = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly'
    }

    const alignMap = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline'
    }

    return (
        <div
            className={cn(
                'flex',
                direction === 'row' ? 'flex-row' : 'flex-col',
                wrap ? 'flex-wrap' : 'flex-nowrap',
                gapMap[gap],
                justifyMap[justify],
                alignMap[align],
                // On small screens, default to column layout
                'sm:flex-col md:flex-row',
                className
            )}
        >
            {children}
        </div>
    )
}

// Attach the Item component to Flex
Flex.Item = Item

export { Flex }
