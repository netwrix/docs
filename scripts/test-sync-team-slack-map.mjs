#!/usr/bin/env node

/**
 * Tests for scripts/sync-team-slack-map.mjs
 *
 * Usage:
 *   node --test scripts/test-sync-team-slack-map.mjs
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import { extractTeams, mapLoginsToSlackIds } from './sync-team-slack-map.mjs';

test('extractTeams collects team handles from CODEOWNERS and the label map, deduped and sorted', () => {
  const codeowners = [
    '# comment',
    '',
    '/docs/changetracker/ @netwrix/changetracker-docs',
    '/docs/auditor/ @netwrix/auditor-docs @someuser',
    '/static/images/auditor/ @netwrix/auditor-docs',
  ].join('\n');
  const labels = { _comment: 'x', kb: '@netwrix/kb-docs', auditor: '@netwrix/auditor-docs' };

  assert.deepEqual(extractTeams(codeowners, labels), [
    '@netwrix/auditor-docs',
    '@netwrix/changetracker-docs',
    '@netwrix/kb-docs',
  ]);
});

test('mapLoginsToSlackIds maps known logins and reports unknown ones', () => {
  const users = { dcwills: 'U1', DanPiazza: 'U2' };
  assert.deepEqual(mapLoginsToSlackIds(['dcwills', 'ghost', 'DanPiazza'], users), {
    ids: ['U1', 'U2'],
    missing: ['ghost'],
  });
});

test('mapLoginsToSlackIds dedupes IDs', () => {
  assert.deepEqual(mapLoginsToSlackIds(['a', 'b'], { a: 'U1', b: 'U1' }).ids, ['U1']);
});
