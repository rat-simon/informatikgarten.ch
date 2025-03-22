import fs from 'graceful-fs'
import path from 'path'

// Helper function to recursively search for a file in subdirectories
export const searchFileInSubdirectories = (
    baseDir: string,
    targetFile: string
): string | null => {
    const filesAndFolders = fs.readdirSync(baseDir)
    for (const item of filesAndFolders) {
        const fullPath = path.join(baseDir, item)
        const stat = fs.lstatSync(fullPath)

        if (stat.isDirectory()) {
            const foundPath = searchFileInSubdirectories(fullPath, targetFile)
            if (foundPath) return foundPath
        } else if (path.basename(fullPath) === targetFile) {
            return fullPath
        }
    }
    return null
}
