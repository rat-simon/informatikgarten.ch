// Define log level from environment variable
const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || 'info'

// Define log levels with their styles
const levels = [
    { name: 'error', style: 'color: #ff0000; font-weight: bold' }, // Red
    { name: 'warn', style: 'color: #ff9900; font-weight: bold' },  // Orange
    { name: 'info', style: 'color: #00cc00' },                     // Green
    { name: 'debug', style: 'color: #0099ff' },                    // Blue
    { name: 'http', style: 'color: #cc00cc' },                     // Purple
    { name: 'verbose', style: 'color: #cccccc' },                  // Gray
    { name: 'silly', style: 'color:rgb(255, 217, 0)' }                     // Light gray
] as const

// Determine if we're in a browser environment
const isBrowser = typeof window !== 'undefined'

// Create logger
export const logger: { [key: string]: any } = {}

// Get the index of configured log level
const configuredLevelIndex = levels.findIndex(l => l.name === logLevel)

// Create logger functions for each level
levels.forEach((level, index) => {
    if (index <= configuredLevelIndex) {
        if (isBrowser) {
            // Browser implementation with CSS styles
            logger[level.name] = (...args: any[]) => {
                console.log(
                    `%c[${level.name.toUpperCase()}]`,
                    level.style,
                    ...args
                )
            }
        } else {
            // Node.js implementation with ANSI colors (for SSR)
            const nodeColors = {
                error: '\x1b[31m',
                warn: '\x1b[33m',
                info: '\x1b[32m',
                debug: '\x1b[36m',
                http: '\x1b[35m',
                verbose: '\x1b[34m',
                silly: '\x1b[33m'
            }
            const color = nodeColors[level.name as keyof typeof nodeColors]
            logger[level.name] = (...args: any[]) => {
                console.log(
                    `${color}[${level.name.toUpperCase()}]\x1b[0m`,
                    ...args
                )
            }
        }
    } else {
        logger[level.name] = () => { }
    }
})

export default logger