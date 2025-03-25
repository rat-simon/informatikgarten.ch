import { useState, useEffect, JSX } from "react";
import Editor from "@monaco-editor/react";
import initSqlJs, { Database, SqlJsStatic } from "sql.js";
import { useTheme } from "next-themes";
import styles from "./SQLPlayground.module.scss";
import { logger } from "../../utils";
import { useMDXComponents } from 'nextra-theme-docs'

const {
    tr: Tr,
    th: Th,
    td: Td,
    table: Table,
    ...docsComponents
  } = useMDXComponents()

// Define types for SQL.js results
interface SqlResultColumn {
    columns: string[];
    values: any[][];
}

// Database singleton for reuse
let sqlInstance: SqlJsStatic | null = null;
let dbInstance: Database | null = null;

export function SQLPlayground({
    dbPath = "/sql/netflixdb.sqlite",
    defaultQuery = "SELECT title FROM movie LIMIT 10 OFFSET 1000;"
}): JSX.Element {
    const [query, setQuery] = useState<string>(defaultQuery);
    const [results, setResults] = useState<SqlResultColumn[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDbReady, setIsDbReady] = useState<boolean>(false);
    const { resolvedTheme } = useTheme();

    // Initialize database on component mount
    useEffect(() => {
        async function initDatabase(): Promise<void> {
            if (dbInstance) {
                setIsDbReady(true);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                // Initialize SQL.js once
                if (!sqlInstance) {
                    sqlInstance = await initSqlJs({
                        locateFile: file => `https://sql.js.org/dist/${file}`
                    });
                }

                // Load database file
                const response = await fetch(dbPath);
                if (!response.ok) {
                    throw new Error(`Failed to load database: ${response.status} ${response.statusText}`);
                }

                const arrayBuffer = await response.arrayBuffer();
                const uInt8Array = new Uint8Array(arrayBuffer);

                // Create database from file
                dbInstance = new sqlInstance.Database(uInt8Array);

                // Verify database with a test query
                const versionQuery = dbInstance.exec("SELECT sqlite_version();");
                console.log("Database loaded. SQLite version:",
                    versionQuery[0]?.values[0][0] || "Unknown");

                setIsDbReady(true);

            } catch (err: any) {
                console.error("Database initialization failed:", err);
                setError(`Failed to initialize database: ${err.message}`);
                setIsDbReady(false);

                // Clean up if initialization failed
                if (dbInstance) {
                    dbInstance.close();
                    dbInstance = null;
                }
            } finally {
                setIsLoading(false);
            }
        }

        initDatabase();

        // Cleanup when component unmounts
        return () => {
            if (dbInstance) {
                dbInstance.close();
                dbInstance = null;
            }
        };
    }, []);

    // Run initial query to show tables

    useEffect(() => {
        if (isDbReady && query) {
            logger.debug("Executing query:", query);
            executeQueryInternal(query);
        }
    }, [isDbReady, query]);

    // Execute SQL query against the database
    const executeQueryInternal = async (sql: string): Promise<void> => {
        if (!isDbReady || !dbInstance) {
            setError("Database is not ready yet");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Convert date strings to timestamps
            const convertedSql = convertDatesToTimestamps(sql);
            // Apply default limit of 100 if no LIMIT clause exists
            const sqlWithLimit = applyDefaultLimit(convertedSql);

            const queryResults = dbInstance.exec(sqlWithLimit);
            setResults(queryResults);

            // Clear error if successful
            setError(null);
        } catch (err: any) {
            logger.error("SQL execution error:", err);
            setError(`SQL Error: ${err.message}`);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    // Helper function to apply a default LIMIT if one isn't already specified
    const applyDefaultLimit = (sql: string): string => {
        // Skip applying limit for non-SELECT queries
        if (!sql.trim().toLowerCase().startsWith('select')) {
            return sql;
        }

        // Check if query already has a LIMIT clause
        // This regex looks for LIMIT at the end of the query, 
        // handling both "LIMIT n" and "LIMIT n OFFSET m" forms
        const hasLimit = /\bLIMIT\s+\d+(\s+OFFSET\s+\d+)?(?:\s*;)?\s*$/i.test(sql);

        if (hasLimit) {
            return sql; // Keep original query if it already has a LIMIT
        }

        // Add default LIMIT 100
        const trimmedSql = sql.trim();
        const endsWithSemicolon = trimmedSql.endsWith(';');

        if (endsWithSemicolon) {
            return trimmedSql.slice(0, -1) + ' LIMIT 100;';
        } else {
            return trimmedSql + ' LIMIT 100';
        }
    };

    // Helper function to convert ISO date strings in queries to timestamps
    const convertDatesToTimestamps = (sql: string): string => {
        // Regular expression to match date strings in both single and double quotes
        // Looks for: 'YYYY-MM-DD' or "YYYY-MM-DD"
        const dateRegex = /(['"])(\d{4}-\d{2}-\d{2})(['"])/g;

        // Replace each date string with its timestamp equivalent
        return sql.replace(dateRegex, (match, openQuote, dateStr, closeQuote) => {
            try {
                // Convert the date string to a timestamp in milliseconds
                const timestamp = new Date(dateStr).getTime();

                // Return just the timestamp number (no quotes)
                return timestamp.toString();
            } catch (err) {
                // If conversion fails, leave the original date string intact
                console.warn(`Failed to convert date: ${dateStr}`, err);
                return match;
            }
        });
    };

    // Execute button handler
    const executeQuery = () => executeQueryInternal(query);

    // Render result tables
    const renderResults = (): JSX.Element => {
        if (results.length === 0) {
            return <p>No results returned</p>;
        }

        return (
            <div className={styles.sqlResults}>
                {results.map((resultSet, index) => (
                    <div key={index} className={styles.resultSet}>
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
                                            <Td key={cellIdx}>{cell === null ? 'NULL' : String(cell)}</Td>
                                        ))}
                                    </Tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.sqlPlayground}>
            <Editor
                height="8rem"
                defaultLanguage="sql"
                defaultValue={query}
                theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
                onChange={(value) => setQuery(value || "")}
                options={{
                    minimap: { enabled: false },
                    scrollbar: { horizontal: 'auto' },
                    lineNumbers: 'off',
                    wordWrap: 'on',
                    wrappingStrategy: 'advanced',
                    automaticLayout: true
                }}
            />
            <div className={styles.controls}>
                <button
                    onClick={executeQuery}
                    disabled={isLoading || !isDbReady}
                    className={styles.runButton}
                >
                    {isLoading ? "Running..." : "Run Query"}
                </button>
                {!isDbReady && !error && <span className={styles.loadingIndicator}>Loading database...</span>}
            </div>

            <div className={styles.resultsContainer}>
                {error ? (
                    <div className={styles.errorMessage}>
                        <p>{error}</p>
                    </div>
                ) : (
                    renderResults()
                )}
            </div>
        </div>
    );
}