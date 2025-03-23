import { logger } from "../../../utils";

// Simple utility to replace autocrop-js functionality
export async function cropToContent(dataUrl: string): Promise<{ dataURL: string, bbox: { width: number, height: number } }> {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            // Create a canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            logger.debug('Cropping image to content', img.width);
            if (!ctx) {
                // Fallback if canvas context isn't available
                resolve({
                    dataURL: dataUrl,
                    bbox: { width: img.width, height: img.height }
                });
                return;
            }

            // Set dimensions
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw image to analyze
            ctx.drawImage(img, 0, 0);

            // Get image data to find non-transparent pixels
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Find bounds of non-transparent pixels
            let minX = canvas.width;
            let minY = canvas.height;
            let maxX = 0;
            let maxY = 0;

            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const alpha = data[(y * canvas.width + x) * 4 + 3];
                    if (alpha !== undefined && alpha > 10) { // Not fully transparent
                        minX = Math.min(minX, x);
                        minY = Math.min(minY, y);
                        maxX = Math.max(maxX, x);
                        maxY = Math.max(maxY, y);
                    }
                }
            }

            // Add padding
            const padding = 10;
            minX = Math.max(0, minX - padding);
            minY = Math.max(0, minY - padding);
            maxX = Math.min(canvas.width, maxX + padding);
            maxY = Math.min(canvas.height, maxY + padding);

            // Calculate dimensions
            const width = maxX - minX;
            const height = maxY - minY;

            // If empty or invalid, return original
            if (width <= 0 || height <= 0 || minX >= canvas.width || minY >= canvas.height) {
                resolve({
                    dataURL: dataUrl,
                    bbox: { width: img.width, height: img.height }
                });
                return;
            }

            // Create new canvas for cropped image
            const croppedCanvas = document.createElement('canvas');
            const croppedCtx = croppedCanvas.getContext('2d');
            croppedCanvas.width = width;
            croppedCanvas.height = height;

            if (croppedCtx) {
                // Draw cropped portion
                croppedCtx.drawImage(img, minX, minY, width, height, 0, 0, width, height);

                // Get data URL
                const croppedDataUrl = croppedCanvas.toDataURL('image/png');
                resolve({
                    dataURL: croppedDataUrl,
                    bbox: { width, height }
                });
            } else {
                // Fallback
                resolve({
                    dataURL: dataUrl,
                    bbox: { width: img.width, height: img.height }
                });
            }
        };

        img.src = dataUrl;
    });
}
