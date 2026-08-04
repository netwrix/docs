#!/usr/bin/env node

/**
 * Resolve CODEOWNERS teams for a set of changed files
 *
 * Usage:
 *   node scripts/resolve-codeowners-teams.mjs <file1> <file2> ...
 *
 * Prints a comma-joined, deduped list of matching team handles to stdout
 * (no trailing newline handling required by caller). Prints nothing if
 * no files match any pattern.
 */

import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const CODEOWNERS_PATH = path.join(PROJECT_ROOT, '.github', 'CODEOWNERS');

function parseCodeowners(content) {
  const rules = [];

  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const parts = line.split(/\s+/);
    const pattern = parts[0];
    const owners = parts.slice(1);
    if (owners.length === 0) continue;

    const anchored = pattern.startsWith('/') ? pattern.slice(1) : pattern;
    const stripped = anchored.endsWith('/') ? anchored.slice(0, -1) : anchored;
    rules.push({ pattern: stripped, owners });
  }

  return rules;
}

function matchFile(rules, filePath) {
  let matchedOwners = null;

  for (const rule of rules) {
    // CODEOWNERS treats a non-wildcard pattern as matching both the exact
    // path and, recursively, everything under it — trailing slash or not.
    if (filePath === rule.pattern || filePath.startsWith(`${rule.pattern}/`)) {
      matchedOwners = rule.owners;
    }
  }

  return matchedOwners;
}

function main() {
  const files = process.argv.slice(2);
  const content = fs.readFileSync(CODEOWNERS_PATH, 'utf8');
  const rules = parseCodeowners(content);

  const teams = [];
  for (const file of files) {
    const owners = matchFile(rules, file);
    if (!owners) continue;
    for (const owner of owners) {
      if (!teams.includes(owner)) teams.push(owner);
    }
  }

  process.stdout.write(teams.join(','));
}

main();
