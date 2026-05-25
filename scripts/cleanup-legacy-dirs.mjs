/**
 * Removes directories that were gitignored under an old path but are no longer
 * covered after a rename. Without this, leftover generated files show up as
 * thousands of untracked changes for anyone who ran the dev server before the move.
 *
 * Add new entries here whenever an outputDir is renamed so contributors get
 * cleaned up automatically on their next `npm run start` or `npm run build`.
 */
import { existsSync, rmSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../');

const staleDirs = [
  // Moved to docs/changetracker/8.1/api/reference/ in PR #901
  'docs/changetracker/8.1/integration/api/reference',
];

for (const dir of staleDirs) {
  const full = resolve(repoRoot, dir);
  if (existsSync(full)) {
    rmSync(full, { recursive: true, force: true });
    console.log(`Cleaned up legacy directory: ${dir}`);
  }
}
