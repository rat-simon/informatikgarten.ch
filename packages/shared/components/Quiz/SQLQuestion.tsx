import Editor from '@monaco-editor/react'
import { isTeacherCS, logger } from '@utils'
import { useTheme } from 'next-themes'
import { Table, Td, Th, Tr } from 'nextra/components'
import { useEffect, useState } from 'react'
import initSqlJs, { Database, SqlJsStatic } from 'sql.js'

// Define types for SQL.js results
interface SqlResultColumn {
    columns: string[]
    values: any[][]
}

// Database singleton for reuse
let sqlInstance: SqlJsStatic | null = null
let dbInstance: Database | null = null

// Props for SQLQuestion component
interface SQLQuestionProps {
    id: string
    dbPath?: string
    defaultQuery?: string
    correctQuery?: string
    correctData?: SqlResultColumn[]
    children?: React.ReactNode
}

export function SQLQuestion({
    id,
    dbPath = '/sql/netflixdb.sqlite',
    defaultQuery = 'SELECT title FROM movie LIMIT 10;',
    correctQuery,
    correctData: providedCorrectData,
    children
}: SQLQuestionProps): JSX.Element {
    const [query, setQuery] = useState<string>(defaultQuery)
    const [results, setResults] = useState<SqlResultColumn[]>([])
    const [generatedCorrectData, setGeneratedCorrectData] = useState<
        SqlResultColumn[]
    >([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isDbReady, setIsDbReady] = useState<boolean>(false)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [showSolution, setShowSolution] = useState<boolean>(false)
    const { resolvedTheme } = useTheme()

    // Use either provided or generated correct data
    const correctData = providedCorrectData || generatedCorrectData

    // Check if user is a teacher
    const isTeacher = isTeacherCS()

    // Initialize database on component mount
    useEffect(() => {
        async function initDatabase(): Promise<void> {
            if (dbInstance) {
                setIsDbReady(true)
                return
            }

            setIsLoading(true)
            setError(null)

            try {
                // Initialize SQL.js once
                if (!sqlInstance) {
                    sqlInstance = await initSqlJs({
                        locateFile: file => `/sql/wasm/${file}`
                    })
                }

                // Load database file
                const response = await fetch(dbPath)
                if (!response.ok) {
                    throw new Error(
                        `Failed to load database: ${response.status} ${response.statusText}`
                    )
                }

                const arrayBuffer = await response.arrayBuffer()
                const uInt8Array = new Uint8Array(arrayBuffer)

                // Create database from file
                dbInstance = new sqlInstance.Database(uInt8Array)

                // Verify database with a test query
                const versionQuery = dbInstance.exec('SELECT sqlite_version();')
                console.log(
                    'Database loaded. SQLite version:',
                    versionQuery[0]?.values[0][0] || 'Unknown'
                )

                setIsDbReady(true)
            } catch (err: any) {
                console.error('Database initialization failed:', err)
                setError(`Failed to initialize database: ${err.message}`)
                setIsDbReady(false)

                // Clean up if initialization failed
                if (dbInstance) {
                    dbInstance.close()
                    dbInstance = null
                }
            } finally {
                setIsLoading(false)
            }
        }

        initDatabase()

        // Cleanup when component unmounts
        return () => {
            if (dbInstance) {
                dbInstance.close()
                dbInstance = null
            }
        }
    }, [dbPath])

    // Generate correct data from correct query if provided
    useEffect(() => {
        async function generateCorrectDataFromQuery() {
            if (
                isDbReady &&
                correctQuery &&
                !providedCorrectData &&
                dbInstance
            ) {
                try {
                    // We don't need to apply limits to correct query as it's controlled
                    const results = dbInstance.exec(correctQuery)
                    setGeneratedCorrectData(results)
                    logger.debug('Generated correct data from query')
                } catch (err: any) {
                    logger.error('Failed to execute correct query:', err)
                    setGeneratedCorrectData([])
                }
            }
        }

        generateCorrectDataFromQuery()
    }, [isDbReady, correctQuery, providedCorrectData])

    useEffect(() => {
        if (isDbReady && query) {
            executeQueryInternal(query)
        }
    }, [isDbReady, query, correctData])

    useEffect(() => {
        if (correctData && correctData.length > 0) {
            setIsCorrect(checkResults())
        }
    }, [correctData, results])

    // Helper function to convert ISO date strings in queries to timestamps
    const convertDatesToTimestamps = (sql: string): string => {
        // Regular expression to match date strings in both single and double quotes
        // Looks for: 'YYYY-MM-DD' or "YYYY-MM-DD"
        const dateRegex = /(['"])(\d{4}-\d{2}-\d{2})(['"])/g

        // Replace each date string with its timestamp equivalent
        return sql.replace(
            dateRegex,
            (match, openQuote, dateStr, closeQuote) => {
                try {
                    // Convert the date string to a timestamp in milliseconds
                    const timestamp = new Date(dateStr).getTime()

                    // Return just the timestamp number (no quotes)
                    return timestamp.toString()
                } catch (err) {
                    // If conversion fails, leave the original date string intact
                    console.warn(`Failed to convert date: ${dateStr}`, err)
                    return match
                }
            }
        )
    }

    // Helper function to apply a default LIMIT if one isn't already specified
    const applyDefaultLimit = (sql: string): string => {
        // Skip applying limit for non-SELECT queries
        if (!sql.trim().toLowerCase().startsWith('select')) {
            return sql
        }

        // Check if query already has a LIMIT clause
        const hasLimit = /\bLIMIT\s+\d+(\s+OFFSET\s+\d+)?(?:\s*;)?\s*$/i.test(
            sql
        )

        if (hasLimit) {
            return sql // Keep original query if it already has a LIMIT
        }

        // Add default LIMIT 100
        const trimmedSql = sql.trim()
        const endsWithSemicolon = trimmedSql.endsWith(';')

        if (endsWithSemicolon) {
            return trimmedSql.slice(0, -1) + ' LIMIT 100;'
        } else {
            return trimmedSql + ' LIMIT 100'
        }
    }

    // Execute SQL query against the database
    const executeQueryInternal = async (sql: string): Promise<void> => {
        if (!isDbReady || !dbInstance) {
            setError('Die Datenbank ist noch nicht bereit.')
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            // Convert date strings to timestamps
            const convertedSql = convertDatesToTimestamps(sql)
            // Apply default limit of 100 if no LIMIT clause exists
            const sqlWithLimit = applyDefaultLimit(convertedSql)

            const queryResults = dbInstance.exec(sqlWithLimit)
            setResults(queryResults)
            setError(null)
        } catch (err: any) {
            logger.error('SQL execution error:', err)
            setError(`SQL Error: ${err.message}`)
            setResults([])
        } finally {
            setIsLoading(false)
        }
    }

    // Check if results match expected results
    const checkResults = (): boolean => {
        if (!correctData || correctData.length === 0 || results.length === 0) {
            return false
        }

        // Check if number of result sets match
        if (correctData.length !== results.length) {
            return false
        }

        // For each result set
        for (let i = 0; i < correctData.length; i++) {
            const expected = correctData[i]
            const actual = results[i]

            // Check columns
            if (!arraysEqual(expected.columns, actual.columns)) {
                return false
            }

            // Check number of rows
            if (expected.values.length !== actual.values.length) {
                return false
            }

            // Check each row's values
            for (let j = 0; j < expected.values.length; j++) {
                if (!arraysEqual(expected.values[j], actual.values[j])) {
                    return false
                }
            }
        }

        return true
    }

    // Utility function to compare arrays
    const arraysEqual = (a: any[], b: any[]): boolean => {
        if (a.length !== b.length) return false

        for (let i = 0; i < a.length; i++) {
            // Handle null/undefined cases
            if (a[i] === null && b[i] === null) continue
            if (a[i] === null || b[i] === null) return false

            // Convert to strings for comparison (handles different number types)
            if (String(a[i]) !== String(b[i])) {
                return false
            }
        }

        return true
    }

    // Render result tables
    const renderResults = (): JSX.Element => {
        if (results.length === 0) {
            return <p>No results returned</p>
        }

        return (
            <div className="flex flex-col gap-4">
                {results.map((resultSet, index) => (
                    <div key={index} className="">
                        <Table>
                            <thead>
                                <Tr>
                                    {resultSet.columns.map((column, colIdx) => (
                                        <Th key={colIdx}>{column}</Th>
                                    ))}
                                </Tr>
                            </thead>
                            <tbody>
                                {resultSet.values.map((row, rowIdx) => (
                                    <Tr key={rowIdx}>
                                        {row.map((cell, cellIdx) => (
                                            <Td key={cellIdx}>
                                                {cell === null
                                                    ? 'NULL'
                                                    : String(cell)}
                                            </Td>
                                        ))}
                                    </Tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ))}
            </div>
        )
    }

    // Render solution section
    const renderSolution = (): JSX.Element | null => {
        if (!correctData || correctData.length === 0) return null

        if (isCorrect) {
            return (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 dark:bg-green-900/20">
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="font-medium">Korrekt! 🥳</span>
                    </div>

                    {correctQuery && (
                        <div className="mt-3">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                Das Query der Lösung:
                            </p>
                            <div className="bg-gray-100 p-3 rounded dark:bg-gray-800">
                                <pre>{correctQuery}</pre>
                            </div>
                        </div>
                    )}
                </div>
            )
        }

        return (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 dark:bg-red-900/20">
                {correctQuery && (
                    <div className="flex gap-2">
                        <p>
                            Das stimmt nicht mit den Daten der Lösung überein.
                        </p>

                        <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                        >
                            {showSolution ? 'Hide Solution' : 'Show Solution'}
                        </button>
                    </div>
                )}
                {showSolution && (
                    <div className="mt-2">
                        <div className="bg-gray-100 p-3 rounded dark:bg-gray-800">
                            <pre>{correctQuery}</pre>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="my-6 border border-gray-200 rounded-md overflow-hidden dark:border-gray-700">
            {children && (
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    {children}
                </div>
            )}
            <div className="relative min-h-8">
                <Editor
                    height="200px"
                    defaultLanguage="sql"
                    defaultValue={query}
                    theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
                    onChange={value => setQuery(value || '')}
                    options={{
                        minimap: { enabled: false },
                        scrollbar: { horizontal: 'auto' },
                        lineNumbers: 'off',
                        wordWrap: 'on',
                        wrappingStrategy: 'advanced',
                        automaticLayout: true,
                        renderWhitespace: 'all'
                    }}
                />
            </div>

            {!isDbReady && !error && (
                <span className="text-gray-500 italic">
                    Datenbank wird geladen...
                </span>
            )}

            {error && (
                <div className="text-red-600 bg-red-50 p-3 border-l-4 border-red-500 dark:bg-red-900/20 dark:text-red-300">
                    <p>{error}</p>
                </div>
            )}

            {query !== defaultQuery && renderSolution()}

            {!error && results.length > 0 && (
                <div className="p-4 overflow-x-auto">
                    <div className="my-1 text-xs text-gray-500 italic dark:text-gray-400">
                        <span>
                            {(results[0]?.values.length || 0) < 100
                                ? `${results[0]?.values.length || 0} Datensätze`
                                : '99 oder mehr Datensätze'}
                        </span>
                    </div>
                    {renderResults()}
                </div>
            )}
        </div>
    )
}
