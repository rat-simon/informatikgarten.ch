// Define log level from environment variable
const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || 'info'

// Define log levels with their colors
const levels = [
    { name: 'error', color: '\x1b[31m' }, // Red
    { name: 'warn', color: '\x1b[33m' }, // Yellow
    { name: 'info', color: '\x1b[32m' }, // Cyan
    { name: 'debug', color: '\x1b[36m' }, // Green
    { name: 'http', color: '\x1b[35m' }, // Magenta
    { name: 'verbose', color: '\x1b[34m' }, // Blue
    { name: 'silly', color: '\x1b[90m' } // Gray
] as const

const resetColor = '\x1b[0m'

// Create logger
export const logger: { [key: string]: any } = {}

// Get the index of configured log level
const configuredLevelIndex = levels.findIndex(l => l.name === logLevel)

// Create logger functions for each level
levels.forEach((level, index) => {
    if (index <= configuredLevelIndex) {
        logger[level.name] = (...args: any[]) => {
            console.log(
                `${level.color}[${level.name.toUpperCase()}]${resetColor}`,
                ...args
            )
        }
    } else {
        logger[level.name] = () => { }
    }
})

export default logger
