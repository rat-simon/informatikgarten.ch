// Note: "use client" directive removed

import cn from 'clsx'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { ReactElement } from 'react'
import { logger } from '../utils'

const { img: Image } = getDocsMDXComponents()

export function Excalidraw(props: any): ReactElement {
    logger.silly('Excalidraw', props)

    // Safely extract image data with fallbacks
    const getLightImageData = () => {
        try {
            if (!props.children || !props.children[0]) return null;
            const node = props.children[0];
            
            // Handle props directly if available
            if (node.props) {
                const url = node.props.src?.src;
                const width = node.props.alt?.includes('excalidraw') 
                    ? node.props.src?.width 
                    : node.props.alt;
                return { url, width };
            }
            return null;
        } catch (e) {
            return null;
        }
    };

    const getDarkImageData = () => {
        try {
            if (!props.children || !props.children[1]) return null;
            const node = props.children[1];
            
            if (node.props) {
                const url = node.props.src?.src;
                const width = node.props.alt?.includes('excalidraw') 
                    ? node.props.src?.width 
                    : node.props.alt;
                return { url, width };
            }
            return null;
        } catch (e) {
            return null;
        }
    };

    const lightImage = getLightImageData();
    const darkImage = getDarkImageData();

    if (!lightImage && !darkImage) {
        return <div className="p-4 text-gray-500">Excalidraw image not available</div>;
    }

    // Render both images with theme-specific visibility
    return (
        <>
            {lightImage && (
                <Image
                    src={lightImage.url}
                    alt="An Excalidraw image (light theme)"
                    width={lightImage.width}
                    className={cn(
                        'excalidraw light-theme-only',
                        'mx-auto',
                        'dark:hidden' // Hide in dark theme
                    )}
                />
            )}
            
            {darkImage && (
                <Image
                    src={darkImage.url}
                    alt="An Excalidraw image (dark theme)"
                    width={darkImage.width}
                    className={cn(
                        'excalidraw dark-theme-only',
                        'mx-auto',
                        'hidden dark:block' // Show only in dark theme
                    )}
                />
            )}
        </>
    );
}