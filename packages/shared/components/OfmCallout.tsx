"use client"

import { useState } from 'react'
import type { FC, ReactNode } from 'react'

interface OfmCalloutProps {
  className?: string
  children?: ReactNode
}

const OfmCallout: FC<OfmCalloutProps> = ({ className, children }) => {

  const [isFolded, setIsFolded] = useState(className?.includes('callout-folded') || false);

  
  const handleClick = (e: React.MouseEvent) => {
    // Block content clicks
    const target = e.target as HTMLElement
    if (target.closest('.callout-content')) return
    
    setIsFolded(!isFolded);

  }

  return (<blockquote className={`callout callout-foldable ${isFolded ? 'callout-folded' : ''}`} onClick={handleClick}>
        {children}
      </blockquote>)
}

export { OfmCallout }
export type { OfmCalloutProps }