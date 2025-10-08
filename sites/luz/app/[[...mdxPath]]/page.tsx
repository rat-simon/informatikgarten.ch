import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import { searchFileInSubdirectories } from 'shared/server/utils'
import path from 'path'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
    const params = await props.params
    const result = await importPage(params.mdxPath)
    const { metadata } = result

    // Handle OG images
    const ogImage = await getOgImage(result, params.mdxPath)

    return {
        ...metadata,
        openGraph: {
            ...metadata.openGraph,
            images: ogImage ? [ogImage] : []
        }
    }
}

async function getOgImage(result: any, mdxPath: string[]) {
    const { metadata } = result
    const folder = mdxPath && mdxPath.length > 1 ? mdxPath.slice(0, -1).join('/') : ''

    // Helper to import image and get hashed URL
    // Uses require.context to pre-register all images at build time
    async function importImage(imageName: string) {
        try {
            // Search for the image file only in the folder where the markdown file is located
            const markdownDir = path.join(process.cwd(), 'content', folder)
            const foundPath = searchFileInSubdirectories(markdownDir, imageName)

            if (!foundPath) {
                console.warn(`Image not found: ${imageName} in ${markdownDir}`)
                return null
            }

            // Convert absolute path to relative path from content directory
            const relativePath = path.relative(path.join(process.cwd(), 'content'), foundPath)
            // Normalize path separators for import (use forward slashes)
            const normalizedPath = relativePath.replace(/\\/g, '/')

            console.log(`Found image ${imageName} at ${normalizedPath}`)

            // Dynamically import with a more specific pattern that webpack can analyze
            // The key is to have a static base path that webpack can see
            const img = await import(`../../content/${normalizedPath}`)
            return img.default?.src || img.default
        } catch (error) {
            console.warn(`Failed to import image: ${imageName}`, error)
            return null
        }
    }

    // 1. Check for explicit ogimage in frontmatter/metadata
    if (metadata?.ogimage) {
        // If it's a path starting with /, assume it's in /public
        if (metadata.ogimage.startsWith('/')) {
            return metadata.ogimage
        }
        // If it's a full URL, return as-is
        if (metadata.ogimage.startsWith('http')) {
            return metadata.ogimage
        }

        // Try to import the image
        const importedSrc = await importImage(metadata.ogimage)
        if (importedSrc) {
            return importedSrc
        }
    }

    // 2. Try to extract first image from content
    try {
        const fs = await import('fs/promises')
        const path = await import('path')

        const contentPath = path.join(process.cwd(), 'content', ...(mdxPath || []))
        const possiblePaths = [
            `${contentPath}.md`,
            `${contentPath}.mdx`,
            `${contentPath}/index.md`,
            `${contentPath}/index.mdx`
        ]

        for (const filePath of possiblePaths) {
            try {
                const content = await fs.readFile(filePath, 'utf-8')

                // Look for wikilink style images: ![[image.png]]
                const wikiLinkMatch = content.match(/!\[\[([^\]]+\.(png|jpg|jpeg|gif|webp|svg))\]\]/i)
                if (wikiLinkMatch && wikiLinkMatch[1]) {
                    const imageName = wikiLinkMatch[1]
                    const importedSrc = await importImage(imageName)
                    if (importedSrc) {
                        return importedSrc
                    }
                }

                // Look for standard markdown images: ![alt](image.png)
                const mdImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+\.(png|jpg|jpeg|gif|webp|svg))\)/i)
                if (mdImageMatch && mdImageMatch[2]) {
                    const imagePath = mdImageMatch[2]

                    // If it's already a full URL, return it
                    if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
                        return imagePath
                    }

                    // Try to import relative image
                    const importedSrc = await importImage(imagePath)
                    if (importedSrc) {
                        return importedSrc
                    }
                }

                break // Found the file, no need to check others
            } catch {
                continue
            }
        }
    } catch (error) {
        console.warn('Failed to extract image from content:', error)
    }

    // 3. Fallback to API-generated image with title
    const title = metadata?.title || 'luz.to'
    return `/api/og?title=${encodeURIComponent(title)}`
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
    const params = await props.params
    const result = await importPage(params.mdxPath)
    const { default: MDXContent, ...restProps } = result
    return (
        <Wrapper {...restProps}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    )
}
