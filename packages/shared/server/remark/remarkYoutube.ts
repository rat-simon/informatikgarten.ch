import type { Image, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

/**
 * Extract video ID, playlist ID and timestamp from a YouTube URL
 */
function parseYoutubeUrl(url: string): { 
    videoId: string | null; 
    playlistId: string | null;
    startTime: number | undefined;
} {
    try {
        let videoId: string | null = null;
        let playlistId: string | null = null;
        let startTime: number | undefined = undefined;
        const urlObj = new URL(url);
        
        // Extract timestamp from t parameter (works for both URL formats)
        const timeParam = urlObj.searchParams.get('t');
        if (timeParam) {
            startTime = parseInt(timeParam);
            if (isNaN(startTime)) startTime = undefined;
        }

        // Handle standard YouTube URLs
        if (url.includes('youtube.com/watch')) {
            videoId = urlObj.searchParams.get('v');
            playlistId = urlObj.searchParams.get('list');
        }
        // Handle youtu.be short URLs
        else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split('?')[0] || null;
            playlistId = urlObj.searchParams.get('list');
        }

        return { videoId, playlistId, startTime };
    } catch (e) {
        return { videoId: null, playlistId: null, startTime: undefined };
    }
}

export const remarkYoutube: Plugin<[], Root> = () => ast => {
    visit(ast, 'image', (_node, index, parent: any) => {
        const node = _node as Image
        const url = node.url;

        // Check if this is a YouTube URL
        if (url.startsWith("https://www.youtube.com/watch") || url.startsWith("https://youtu.be/")) {
            const { videoId, playlistId, startTime } = parseYoutubeUrl(url);

            if (videoId) {
                // Create YouTube component node
                const youtubeNode = {
                    type: 'mdxJsxFlowElement',
                    name: 'Youtube',
                    attributes: [
                        { type: 'mdxJsxAttribute', name: 'id', value: videoId },
                        ...(playlistId ? [{ type: 'mdxJsxAttribute', name: 'playlist', value: playlistId }] : []),
                        ...(startTime ? [{ type: 'mdxJsxAttribute', name: 'startTime', value: startTime.toString() }] : [])
                    ],
                    children: [],
                    data: {
                        _mdxExplicitJsx: true
                    }
                };

                // Replace the original node with the YouTube component node
                parent.children[index || 0] = youtubeNode;
            }
        }
    });
};