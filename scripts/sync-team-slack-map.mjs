#!/usr/bin/env node

/**
 * Regenerate .github/team-slack-map.json from GitHub team membership.
 *
 * Usage:
 *   node scripts/sync-team-slack-map.mjs          # write the map
 *   node scripts/sync-team-slack-map.mjs --check  # exit 1 if the map is stale
 *
 * Run locally (or via `npm run slack:sync`) with a `gh` login that can read
 * org team membership; GITHUB_TOKEN in Actions cannot. Re-run whenever a
 * docs team's membership changes or a person's Slack ID is added to
 * .github/github-slack-users.json (GitHub login -> Slack member ID).
 * .github/team-slack-excludes.json lists members to leave out of a team's
 * mentions.
 *
 * Teams come from the handles in .github/CODEOWNERS and
 * .github/label-codeowners.json.
 */

import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GITHUB_DIR = path.resolve(__dirname, '..', '.github');
const CODEOWNERS_PATH = path.join(GITHUB_DIR, 'CODEOWNERS');
const LABEL_MAP_PATH = path.join(GITHUB_DIR, 'label-codeowners.json');
const USERS_PATH = path.join(GITHUB_DIR, 'github-slack-users.json');
const EXCLUDES_PATH = path.join(GITHUB_DIR, 'team-slack-excludes.json');
const TEAM_MAP_PATH = path.join(GITHUB_DIR, 'team-slack-map.json');

// Not a GitHub team: the admins @-mentioned for sync results and PRs that
// touch site code. Edited by hand in team-slack-map.json, so the sync keeps it.
const ADMIN_KEY = '@site-admins';

const TEAM_HANDLE = /^@[\w.-]+\/[\w.-]+$/;

export function extractTeams(codeownersText, labelMap) {
  const teams = new Set();

  for (const rawLine of codeownersText.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    for (const owner of line.split(/\s+/).slice(1)) {
      if (TEAM_HANDLE.test(owner)) teams.add(owner);
    }
  }

  for (const [label, team] of Object.entries(labelMap)) {
    if (label !== '_comment' && TEAM_HANDLE.test(team)) teams.add(team);
  }

  return [...teams].sort();
}

export function mapLoginsToSlackIds(logins, users) {
  const ids = [];
  const missing = [];

  for (const login of logins) {
    const id = users[login];
    if (id) {
      if (!ids.includes(id)) ids.push(id);
    } else {
      missing.push(login);
    }
  }

  return { ids, missing };
}

function fetchLogins(team) {
  const [org, slug] = team.slice(1).split('/');
  const out = execFileSync(
    'gh',
    ['api', `orgs/${org}/teams/${slug}/members`, '--paginate', '--jq', '.[].login'],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }
  );
  return out.split('\n').map(l => l.trim()).filter(Boolean);
}

function main() {
  const check = process.argv.includes('--check');

  const labelMap = JSON.parse(fs.readFileSync(LABEL_MAP_PATH, 'utf8'));
  const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf8'));
  const excludes = JSON.parse(fs.readFileSync(EXCLUDES_PATH, 'utf8'));
  const existing = JSON.parse(fs.readFileSync(TEAM_MAP_PATH, 'utf8'));
  const teams = extractTeams(fs.readFileSync(CODEOWNERS_PATH, 'utf8'), labelMap);

  const next = { _comment: existing._comment, [ADMIN_KEY]: existing[ADMIN_KEY] ?? [] };
  const unmapped = new Set();

  for (const team of teams) {
    let logins;
    try {
      logins = fetchLogins(team);
    } catch (err) {
      console.error(`Warning: could not read members of ${team}; keeping its existing entry`);
      next[team] = existing[team] ?? [];
      continue;
    }

    const excluded = excludes[team] ?? [];
    const { ids, missing } = mapLoginsToSlackIds(
      logins.filter(login => !excluded.includes(login)),
      users
    );
    missing.forEach(login => unmapped.add(login));
    next[team] = ids;
  }

  if (unmapped.size > 0) {
    console.error(`Warning: no Slack ID in github-slack-users.json for: ${[...unmapped].sort().join(', ')}`);
  }

  const serialized = `${JSON.stringify(next, null, 2)}\n`;

  if (check) {
    if (serialized !== fs.readFileSync(TEAM_MAP_PATH, 'utf8')) {
      console.error('team-slack-map.json is out of date. Run: npm run slack:sync');
      process.exit(1);
    }
    console.log('team-slack-map.json is up to date');
    return;
  }

  fs.writeFileSync(TEAM_MAP_PATH, serialized);
  console.log(`Wrote ${path.relative(process.cwd(), TEAM_MAP_PATH)} (${teams.length} teams)`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
