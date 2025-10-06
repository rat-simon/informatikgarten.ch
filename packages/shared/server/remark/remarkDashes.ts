import { visit } from "unist-util-visit";
import type { Root, Text } from "mdast";

/**
 * Remark plugin to convert dashes to typographic equivalents:
 * - `---` (three dashes) � em-dash (–)
 * - `--` (two dashes) � en-dash (—)
 *
 * Note: Must process three dashes first to avoid incorrect conversion.
 */
export function remarkDashes() {
    return (tree: Root) => {
        visit(tree, "text", (node: Text) => {
            // Replace three dashes first (em-dash)
            node.value = node.value.replace(/---/g, "–");

            // Then replace two dashes (en-dash)
            node.value = node.value.replace(/--/g, "—");
        });
    };
}
