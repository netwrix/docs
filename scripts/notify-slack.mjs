#!/usr/bin/env node

/**
 * Post a Slack notification to #docs-gh via an Incoming Webhook.
 *
 * Usage:
 *   node scripts/notify-slack.mjs --message "PR created: https://github.com/netwrix/docs/pull/123" --teams "@netwrix/changetracker-docs,@netwrix/kb-docs"
 *   node scripts/notify-slack.mjs --message "dev merged to main"
 *   node scripts/notify-slack.mjs --message "..." --teams "..." --scan-env COMMENT_BODY
 *
 * --scan-env names an environment variable holding text (an issue or PR body,
 * a comment). Any @login with an entry in .github/github-slack-users.json, and
 * any @org/team in team-slack-map.json, is @-mentioned in Slack too.
 *
 * Environment variables:
 *   SLACK_WEBHOOK_URL   Incoming Webhook URL (required)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const TEAM_MAP_PATH = path.join(PROJECT_ROOT, '.github', 'team-slack-map.json');
const USERS_PATH = path.join(PROJECT_ROOT, '.github', 'github-slack-users.json');

// @login or @org/team, not preceded by a word character (skips emails)
const HANDLE_RE = /(?<![\w@`])@([A-Za-z0-9][A-Za-z0-9-]*(?:\/[\w.-]+)?)/g;

function parseArgs(argv) {
  const args = { message: null, teams: null, scanEnv: null };

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--message') {
      args.message = argv[++i];
    } else if (argv[i] === '--teams') {
      args.teams = argv[++i];
    } else if (argv[i] === '--scan-env') {
      args.scanEnv = argv[++i];
    }
  }

  return args;
}

function resolveMentions(teamsArg, teamMap) {
  if (!teamsArg) return [];

  const teams = teamsArg.split(',').map(t => t.trim()).filter(Boolean);
  const ids = new Set();

  for (const team of teams) {
    if (team === '_comment') continue;

    const teamIds = teamMap[team];

    if (!teamIds || !Array.isArray(teamIds) || teamIds.length === 0) {
      console.error(`Warning: no Slack member IDs found for team "${team}"`);
      continue;
    }

    teamIds.forEach(id => ids.add(id));
  }

  return [...ids].map(id => `<@${id}>`);
}

// Slack IDs for @logins and @org/teams written in free text.
export function extractMentionIds(text, teamMap, users) {
  const ids = new Set();
  if (!text) return ids;

  const usersByLogin = new Map(
    Object.entries(users).filter(([k]) => k !== '_comment').map(([k, v]) => [k.toLowerCase(), v])
  );
  const teamsByHandle = new Map(
    Object.entries(teamMap).filter(([k]) => k !== '_comment').map(([k, v]) => [k.toLowerCase(), v])
  );

  for (const [, handle] of text.matchAll(HANDLE_RE)) {
    const key = handle.toLowerCase();
    if (handle.includes('/')) {
      (teamsByHandle.get(`@${key}`) ?? []).forEach(id => ids.add(id));
    } else if (usersByLogin.has(key)) {
      ids.add(usersByLogin.get(key));
    }
  }

  return ids;
}

async function main() {
  const { message, teams, scanEnv } = parseArgs(process.argv.slice(2));

  if (!message) {
    console.error('Error: --message is required');
    process.exit(1);
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Error: SLACK_WEBHOOK_URL environment variable is not set');
    process.exit(1);
  }

  const teamMap = JSON.parse(fs.readFileSync(TEAM_MAP_PATH, 'utf8'));
  const mentions = resolveMentions(teams, teamMap);

  if (scanEnv) {
    const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf8'));
    for (const id of extractMentionIds(process.env[scanEnv], teamMap, users)) {
      const mention = `<@${id}>`;
      if (!mentions.includes(mention)) mentions.push(mention);
    }
  }
  const text = mentions.length > 0 ? `${message} ${mentions.join(' ')}` : message;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Error: Slack webhook returned ${response.status}: ${body}`);
    process.exit(1);
  }

  console.log('Slack notification sent');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(err => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  });
}
