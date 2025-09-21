"use client"

import cn from 'clsx'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { logger } from '../utils'

const { img: Image } = getDocsMDXComponents()

export function Excalidraw(props: any): ReactElement {
    logger.silly('Excalidraw', props)

    const [svgContent, setSvgContent] = useState<{light?: string, dark?: string}>({})
    const [svgErrors, setSvgErrors] = useState<{light?: boolean, dark?: boolean}>({})

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
                const alt = node.props.alt || '';
                return { url, width, alt };
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
                const alt = node.props.alt || '';
                return { url, width, alt };
            }
            return null;
        } catch (e) {
            return null;
        }
    };

    // Check if links are present in alt tag
    const hasLinks = (imageData: any) => {
        return imageData?.alt && imageData.alt.toLowerCase().includes('links');
    };

    // Convert Obsidian links to web links
    const convertObsidianLinks = (svgContent: string) => {
        if (!svgContent || typeof svgContent !== 'string') {
            logger.silly('Invalid SVG content:', svgContent);
            return svgContent;
        }

        logger.silly('Checking for Obsidian links in SVG...');

        const converted = svgContent.replace(
            /obsidian:\/\/open\?vault=ig_content&amp;file=([^"'>\s&]*)/g,
            (match, filePath) => {
                logger.silly('Found Obsidian link:', match);
                logger.silly('File path:', filePath);

                // Decode URL-encoded characters and convert to web path
                const decodedPath = decodeURIComponent(filePath);
                const newLink = `/${decodedPath}`;
                logger.silly('Converted to:', newLink);
                return newLink;
            }
        );

        return converted;
    };

    // Fetch SVG content for inline rendering
    const fetchSvgContent = async (url: string, theme: 'light' | 'dark') => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch SVG');
            let svgText = await response.text();

            // Convert Obsidian links to web links
            svgText = convertObsidianLinks(svgText);

            setSvgContent(prev => ({ ...prev, [theme]: svgText }));
        } catch (error) {
            logger.error('Failed to fetch SVG content:', error);
            setSvgErrors(prev => ({ ...prev, [theme]: true }));
        }
    };

    const lightImage = getLightImageData();
    const darkImage = getDarkImageData();

    // Fetch SVG content when links are detected
    useEffect(() => {
        if (lightImage && hasLinks(lightImage) && !svgContent.light && !svgErrors.light) {
            fetchSvgContent(lightImage.url, 'light');
        }
        if (darkImage && hasLinks(darkImage) && !svgContent.dark && !svgErrors.dark) {
            fetchSvgContent(darkImage.url, 'dark');
        }
    }, [lightImage?.url, darkImage?.url, svgContent.light, svgContent.dark, svgErrors.light, svgErrors.dark]);

    // Render inline SVG with clickable links
    const renderInlineSvg = (imageData: any, theme: 'light' | 'dark') => {
        const content = svgContent[theme];
        const hasError = svgErrors[theme];

        if (hasError || !content) {
            // Fallback to regular img if SVG fetch failed or not yet loaded
            return (
                <img
                    src={imageData.url}
                    alt={`An Excalidraw image (${theme} theme)`}
                    width={imageData.width}
                    className={cn(
                        `excalidraw ${theme}-theme-only`,
                        'mx-auto',
                        theme === 'light' ? 'dark:hidden' : 'hidden dark:block'
                    )}
                />
            );
        }

        return (
            <span
                className={cn(
                    `excalidraw ${theme}-theme-only`,
                    'mx-auto w-full block',
                    theme === 'light' ? 'dark:hidden' : 'hidden dark:block'
                )}
                style={{
                    width: '100%',
                }}
                dangerouslySetInnerHTML={{
                    __html: typeof content === 'string' ? content.replace(
                        '<svg',
                        '<svg style="width: 100%; height: auto; max-width: 100%;"'
                    ) : content
                }}
            />
        );
    };

    if (!lightImage && !darkImage) {
        return <div className="p-4 text-gray-500">Excalidraw image not available</div>;
    }

    // Render both images with theme-specific visibility
    return (
        <>
            {lightImage && (
                hasLinks(lightImage) ? (
                    renderInlineSvg(lightImage, 'light')
                ) : (
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
                )
            )}

            {darkImage && (
                hasLinks(darkImage) ? (
                    renderInlineSvg(darkImage, 'dark')
                ) : (
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
                )
            )}
        </>
    );
}