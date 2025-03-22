/**
 * Converts a string to a valid ID by removing all non-alphanumeric characters except hyphens
 * @param str - The input string to sanitize
 * @returns A sanitized string containing only alphanumeric characters and hyphens
 * @example
 * toValidId("Hello World!") // returns "HelloWorld"
 * toValidId("test-123") // returns "test-123"
 * toValidId("sql/00-eibeorg#aktueller-stand") // "sql00-eibeorg"
 */

type SanitizeIdString = (str: string) => string
export const sanitizeIdString : SanitizeIdString = str => {
    const withoutAnchor = str.split('#')[0];
    return withoutAnchor!.replace(/[^a-zA-Z0-9-]/g, '');
}