#!/usr/bin/env node

/**
 * Tests for scripts/notify-slack.mjs
 *
 * Usage:
 *   node --test scripts/test-notify-slack.mjs
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import { extractMentionIds } from './notify-slack.mjs';

const users = { _comment: 'x', dcwills: 'U1', 'DanPiazza-Netwrix': 'U2' };
const teams = { _comment: 'x', '@netwrix/auditor-docs': ['U3', 'U4'], '@site-admins': ['U9'] };
const ids = text => [...extractMentionIds(text, teams, users)];

test('mentions a known @login, case-insensitively', () => {
  assert.deepEqual(ids('please look @DCWills'), ['U1']);
});

test('mentions every member of a tagged @org/team', () => {
  assert.deepEqual(ids('cc @netwrix/auditor-docs'), ['U3', 'U4']);
});

test('ignores unknown logins, emails, and inline-code handles', () => {
  assert.deepEqual(ids('@nobody mail dean@dcwills.com `@dcwills`'), []);
});

test('does not treat @site-admins as a taggable handle', () => {
  assert.deepEqual(ids('@site-admins'), []);
});

test('dedupes and handles several mentions', () => {
  assert.deepEqual(ids('@dcwills @DanPiazza-Netwrix @dcwills.'), ['U1', 'U2']);
});

test('empty text yields no mentions', () => {
  assert.deepEqual(ids(undefined), []);
});
