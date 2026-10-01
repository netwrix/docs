#!/usr/bin/env node

/**
 * Reverse-map CODEOWNERS team handles to their product labels via
 * .github/label-codeowners.json (label -> team), for PR auto-labeling.
 *
 * Usage:
 *   node scripts/resolve-labels-for-teams.mjs "@netwrix/foo-docs,@netwrix/bar-docs"
 *
 * Prints a comma-joined, deduped list of matching labels to stdout.
 */

import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const MAPPING_PATH = path.join(PROJECT_ROOT, '.github', 'label-codeowners.json');

function main() {
  const teamsArg = process.argv[2] || '';
  const teams = teamsArg.split(',').map(t => t.trim()).filter(Boolean);

  if (teams.length === 0) {
    process.stdout.write('');
    return;
  }

  const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf8'));
  const teamSet = new Set(teams);
  const labels = [];

  for (const [label, team] of Object.entries(mapping)) {
    if (teamSet.has(team) && !labels.includes(label)) {
      labels.push(label);
    }
  }

  process.stdout.write(labels.join(','));
}

main();
