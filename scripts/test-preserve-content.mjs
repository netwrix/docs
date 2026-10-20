#!/usr/bin/env node

/**
 * Tests for checkContent in scripts/quality/lib/preserve.mjs (used by /doc-restyle).
 *
 * Usage:
 *   node --test scripts/test-preserve-content.mjs
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import { checkContent } from './quality/lib/preserve.mjs';

const page = (body, front = 'title: T\nsidebar_position: 3') => `---\n${front}\n---\n${body}`;
const one = (text, path = 'a.md') => [{ path, text }];

const ORIGINAL = page(`## Setup

Set the timeout to 30 seconds. Open \`config.yml\` and click **Save**. See [limits](./limits.md).

:::warning
This cannot be undone.
:::

\`\`\`bash
run --now
\`\`\`
`);

test('a reordered, retitled page passes', () => {
  const rewritten = page(`## Configure the timeout

:::warning
This cannot be undone.
:::

Open \`config.yml\`. Set the timeout to 30 seconds and click **Save**. See [limits](./limits.md).

\`\`\`bash
run --now
\`\`\`
`, 'title: Better title\nsidebar_position: 3\ndescription: New');
  assert.deepEqual(checkContent(one(ORIGINAL), one(rewritten)), []);
});

test('a dropped number fails', () => {
  const v = checkContent(one(ORIGINAL), one(ORIGINAL.replace('30 seconds', 'seconds')));
  assert.ok(v.some(x => x.startsWith('number removed') || x.startsWith('number')));
});

test('an added number fails', () => {
  const v = checkContent(one(ORIGINAL), one(ORIGINAL + '\nRetry 5 times.\n'));
  assert.ok(v.some(x => x.startsWith('number added')));
});

test('a changed code block fails', () => {
  const v = checkContent(one(ORIGINAL), one(ORIGINAL.replace('run --now', 'run --later')));
  assert.ok(v.some(x => x.startsWith('code block')));
});

test('a dropped warning fails', () => {
  const rewritten = ORIGINAL.replace(':::warning\nThis cannot be undone.\n:::\n', '');
  assert.ok(checkContent(one(ORIGINAL), one(rewritten)).some(x => x.startsWith('admonition')));
});

test('a split across two files passes', () => {
  const first = page('Set the timeout to 30 seconds. Click **Save**.\n\n:::warning\nThis cannot be undone.\n:::\n');
  const second = page('Open `config.yml`. See [limits](./limits.md).\n\n```bash\nrun --now\n```\n');
  const rewrittens = [{ path: 'a.md', text: first }, { path: 'b.md', text: second }];
  assert.deepEqual(checkContent([{ path: 'a.md', text: ORIGINAL }, { path: 'b.md', text: '' }], rewrittens), []);
});

test('a changed frontmatter key outside the free ones fails', () => {
  const v = checkContent(one(ORIGINAL), one(ORIGINAL.replace('title: T', 'title: T\nkeywords: x')));
  assert.deepEqual(v, []);
  const orig = page('Body.', 'title: T\nslug: old');
  assert.ok(checkContent(one(orig), one(page('Body.', 'title: T\nslug: new'))).some(x => x.startsWith('frontmatter slug')));
});

test('a confirmed fix passes when allowed', () => {
  const orig = page('Set the timeout to 3O seconds.');
  const fixed = page('Set the timeout to 30 seconds.');
  assert.ok(checkContent(one(orig), one(fixed)).length > 0);
  assert.deepEqual(checkContent(one(orig), one(fixed), [{ from: '3O', to: '30' }]), []);
});

test('wrapping a file name with a number in inline code passes', () => {
  const orig = page('Start the installer (PPE10.2.exe).');
  assert.deepEqual(checkContent(one(orig), one(page('Start the installer, `PPE10.2.exe`.'))), []);
});

test('hand-numbered Step labels may become a numbered list', () => {
  const orig = page('**Step 1 –** Open the console.\n\n**Step 2 –** Click **Save**.');
  assert.deepEqual(checkContent(one(orig), one(page('1. Open the console.\n2. Click **Save**.'))), []);
  assert.ok(checkContent(one(orig), one(page('1. Open the console.\n2. Click Save.'))).length > 0);
});

test('indenting a code block under a list item passes, changing it does not', () => {
  const orig = page('**Step 1 –** Run:\n\n```powershell\nGet-Service\n```\n');
  assert.deepEqual(checkContent(one(orig), one(page('1. Run:\n\n   ```powershell\n   Get-Service\n   ```\n'))), []);
  assert.ok(checkContent(one(orig), one(page('1. Run:\n\n   ```powershell\n   Get-Process\n   ```\n'))).length > 0);
});
