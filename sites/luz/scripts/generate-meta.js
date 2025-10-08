#!/usr/bin/env node
import { readdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../content');

// Directories to process
const directories = ['europe', 'usa', 'venezuela'];

for (const dir of directories) {
  const dirPath = join(contentDir, dir);

  if (!existsSync(dirPath)) {
    console.log(`⚠ Directory ${dir} does not exist, skipping`);
    continue;
  }

  // Get all .md and .mdx files that start with YYYY
  const files = readdirSync(dirPath)
    .filter(f => /^\d{4}.*\.mdx?$/.test(f))
    .map(f => f.replace(/\.mdx?$/, ''));

  // Sort in reverse chronological order
  const sortedFiles = files.sort((a, b) => {
    const yearA = parseInt(a.match(/^(\d{4})/)?.[1] || '0');
    const yearB = parseInt(b.match(/^(\d{4})/)?.[1] || '0');
    // If years are equal, sort by full filename in reverse
    if (yearA === yearB) {
      return b.localeCompare(a);
    }
    return yearB - yearA; // Reverse chronological
  });

  // Check if attachments directory exists and contains .md or .mdx files
  const attachmentsPath = join(dirPath, 'attachments');
  let hasAttachmentsWithMdx = false;

  if (existsSync(attachmentsPath)) {
    const attachmentsFiles = readdirSync(attachmentsPath);
    hasAttachmentsWithMdx = attachmentsFiles.some(f => /\.mdx?$/.test(f));
  }

  // Generate _meta.ts content for this directory
  const metaEntries = sortedFiles.map(file => `  '${file}': {}`).join(',\n');

  let metaContent = `export default {
${metaEntries}`;

  if (hasAttachmentsWithMdx) {
    metaContent += `${sortedFiles.length > 0 ? ',\n' : ''}  attachments: {
    display: 'hidden'
  }`;
  }

  metaContent += `
}
`;

  const metaPath = join(dirPath, '_meta.ts');
  writeFileSync(metaPath, metaContent);
  console.log(`✓ Generated ${dir}/_meta.ts with ${sortedFiles.length} dated files in reverse chronological order`);
}

// Ensure main _meta.ts is simple
const mainMetaContent = `export default {
  index: { title: 'Home' },
  europe: {},
  venezuela: {},
  usa: { title: 'USA' }
}
`;

writeFileSync(join(contentDir, '_meta.ts'), mainMetaContent);
console.log('✓ Updated main _meta.ts');
