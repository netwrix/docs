#!/usr/bin/env node

/**
 * Resolve product labels for a set of changed files
 *
 * Usage:
 *   node scripts/resolve-path-labels.mjs <file1> <file2> ...
 *
 * Prints a comma-joined, deduped list of labels from .github/label-paths.json
 * to stdout. Prints nothing if no files match.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const MAP_PATH = path.join(process.cwd(), '.github', 'label-paths.json');
const ROOTS = ['docs', 'sidebars', 'static/images', 'static/files'];

export function resolveLabels(files, map) {
  const labels = [];
  for (const [slug, label] of Object.entries(map)) {
    if (slug.startsWith('_')) continue;
    const hit = files.some((file) =>
      ROOTS.some((root) => {
        const prefix = `${root}/${slug}`;
        // Directory contents, or a sidebar file such as sidebars/1secure.js
        return file.startsWith(`${prefix}/`) || file.startsWith(`${prefix}.`);
      }),
    );
    if (hit && !labels.includes(label)) labels.push(label);
  }
  return labels;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
  process.stdout.write(resolveLabels(process.argv.slice(2), map).join(','));
}
