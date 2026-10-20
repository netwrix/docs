#!/usr/bin/env node

/**
 * Tests for checkContent in scripts/quality/lib/preserve.mjs (used by /doc-restyle).
 *
 * Usage:
 *   node --test scripts/test-preserve-content.mjs
 */

import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

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
  assert.deepEqual(v, ['number removed or changed: 30']);
});

test('an added number fails', () => {
  const v = checkContent(one(ORIGINAL), one(ORIGINAL + '\nRetry 5 times.\n'));
  assert.deepEqual(v, ['number added: 5']);
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

test('a merge that deletes a page passes, and still fails if the merged content drops a fact', () => {
  const originals = [{ path: 'a.md', text: page('Set 30 seconds.') }, { path: 'b.md', text: page('Open port 8080.', 'title: B\nsidebar_position: 4') }];
  const merged = [{ path: 'a.md', text: page('Set 30 seconds.\n\nOpen port 8080.') }, { path: 'b.md', text: '' }];
  assert.deepEqual(checkContent(originals, merged), []);
  merged[0].text = page('Set 30 seconds.');
  assert.deepEqual(checkContent(originals, merged), ['number removed or changed: 8080']);
});

test('frontmatter: free keys may change, any other key may not change, go away, or appear', () => {
  const orig = page('Body.', 'title: T\nslug: old');
  const body = 'Body.';
  assert.deepEqual(checkContent(one(orig), one(page(body, 'title: New\nslug: old\ndescription: Added\nsidebar_label: L'))), []);
  assert.deepEqual(checkContent(one(orig), one(page(body, 'title: T\nslug: new'))), ['frontmatter slug changed in a.md']);
  assert.deepEqual(checkContent(one(orig), one(page(body, 'title: T'))), ['frontmatter slug removed in a.md']);
  assert.deepEqual(checkContent(one(orig), one(page(body, 'title: T\nslug: old\nkeywords: x'))), ['frontmatter keywords added in a.md']);
});

test('frontmatter: a list under a key is compared as a whole, and quote style does not matter', () => {
  const orig = page('Body.', 'title: T\nkeywords:\n  - alpha\n  - beta\nslug: "a-b"');
  assert.deepEqual(checkContent(one(orig), one(page('Body.', "title: T\nkeywords:\n  - alpha\n  - beta\nslug: 'a-b'"))), []);
  assert.deepEqual(checkContent(one(orig), one(page('Body.', 'title: T\nkeywords:\n  - alpha\nslug: "a-b"'))), ['frontmatter keywords changed in a.md']);
  assert.deepEqual(checkContent(one(orig), one(page('Body.', 'title: T\nkeywords:\n  - alpha\n  - gamma\nslug: "a-b"'))), ['frontmatter keywords changed in a.md']);
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

test('a confirmed fix never rewrites a code block', () => {
  const orig = page('Set 3O seconds.\n\n```text\n3O\n```\n');
  const fixedProse = page('Set 30 seconds.\n\n```text\n3O\n```\n');
  const changedCode = page('Set 30 seconds.\n\n```text\n30\n```\n');
  const allow = [{ from: '3O', to: '30' }];
  assert.deepEqual(checkContent(one(orig), one(fixedProse), allow), []);
  assert.ok(checkContent(one(orig), one(changedCode), allow).some(x => x.startsWith('code block')));
});

test('an allowed change with empty text is rejected', () => {
  assert.throws(() => checkContent(one(page('x')), one(page('x')), [{ from: '', to: 'y' }]), /non-empty/);
});

// CLI tests run in a throwaway git repo whose path contains a space.
const CLI = join(dirname(fileURLToPath(import.meta.url)), 'doc-restyle', 'integrity.mjs');

function withRepo(fn) {
  const dir = mkdtempSync(join(tmpdir(), 'restyle repo '));
  // Never sign the fixture commit, whatever the developer's global git config says.
  const git = (...a) => spawnSync('git', ['-c', 'commit.gpgsign=false', '-c', 'tag.gpgsign=false', ...a], { cwd: dir, encoding: 'utf8' });
  git('init', '-q');
  git('config', 'user.email', 't@example.com');
  git('config', 'user.name', 't');
  mkdirSync(join(dir, 'docs'));
  writeFileSync(join(dir, 'docs', 'a.md'), page('Set the timeout to 30 seconds.'));
  git('add', '.');
  const commit = git('commit', '-q', '-m', 'original');
  assert.equal(commit.status, 0, `fixture commit failed: ${commit.stderr}`);
  try {
    fn(dir, (...args) => spawnSync('node', [CLI, ...args], { cwd: dir, encoding: 'utf8' }));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test('CLI: runs from a path with a space and passes a clean restyle', () => {
  withRepo((dir, cli) => {
    writeFileSync(join(dir, 'docs', 'a.md'), page('Set the timeout to 30 seconds, then save.'));
    const r = cli('docs/a.md');
    assert.equal(r.status, 0, r.stdout + r.stderr);
    assert.match(r.stdout, /PASS/);
  });
});

test('CLI: a dropped number fails', () => {
  withRepo((dir, cli) => {
    writeFileSync(join(dir, 'docs', 'a.md'), page('Set the timeout.'));
    assert.equal(cli('docs/a.md').status, 1);
  });
});

test('CLI: a file identical to its base fails as nothing to compare', () => {
  withRepo((dir, cli) => {
    const r = cli('docs/a.md');
    assert.equal(r.status, 1);
    assert.match(r.stdout, /nothing to compare/);
  });
});

test('CLI: a bad base ref and a missing flag value exit 2', () => {
  withRepo((dir, cli) => {
    assert.equal(cli('--base', 'no-such-ref', 'docs/a.md').status, 2);
    assert.equal(cli('docs/a.md', '--allow-change').status, 2);
    assert.equal(cli('--allow-change', '=>x', 'docs/a.md').status, 2);
  });
});

test('CLI: an absolute path and a new file work', () => {
  withRepo((dir, cli) => {
    writeFileSync(join(dir, 'docs', 'a.md'), page('Set the timeout to 30 seconds, then save.'));
    writeFileSync(join(dir, 'docs', 'new.md'), page('No numbers here.'));
    const r = cli(join(dir, 'docs', 'a.md'), 'docs/new.md');
    assert.equal(r.status, 0, r.stdout + r.stderr);
  });
});

test('a longer fence can hold shorter fence lines, and a mismatched fence does not close it', () => {
  const orig = page('Example:\n\n````markdown\n```bash\nrun 5\n```\n````\n\nAfter 10 minutes.\n');
  assert.deepEqual(checkContent(one(orig), one(orig)), []);
  // Changing the number inside the nested example is a code change, not a prose number.
  const changed = orig.replace('run 5', 'run 6');
  assert.deepEqual(checkContent(one(orig), one(changed)), ['code block removed or changed: ````markdown\n```bash\nrun 5\n```\n````', 'code block added: ````markdown\n```bash\nrun 6\n```\n````']);
  const tilde = page('~~~text\n```\nstill code 7\n~~~\nAfter.\n');
  assert.deepEqual(checkContent(one(tilde), one(tilde)), []);
});

test('an unterminated fence is compared without its indent too', () => {
  const orig = page('Run:\n\n```bash\nrun 5\n');
  assert.deepEqual(checkContent(one(orig), one(page('1. Run:\n\n   ```bash\n   run 5\n'))), []);
});

test('Windows line endings do not fail a code block', () => {
  const orig = page('Run:\n\n```bash\nrun 5\n```\n');
  assert.deepEqual(checkContent(one(orig), one(orig.replace(/\n/g, '\r\n'))), []);
});

test('CLI: a path outside the repository exits 2', () => {
  withRepo((dir, cli) => {
    // A fresh private folder, never a fixed file name in the shared temp directory.
    const folder = mkdtempSync(join(tmpdir(), 'restyle outside '));
    const outside = join(folder, 'outside.md');
    writeFileSync(outside, page('x'));
    try {
      const r = cli(outside);
      assert.equal(r.status, 2);
      assert.match(r.stderr, /outside the repository/);
    } finally {
      rmSync(folder, { recursive: true, force: true });
    }
  });
});

test('CLI: a path that exists nowhere exits 2 instead of passing', () => {
  withRepo((dir, cli) => {
    const r = cli('docs/typo.md');
    assert.equal(r.status, 2);
    assert.match(r.stderr, /does not exist/);
  });
});

test('CLI: an absolute path through a symlinked checkout still maps into the repo', () => {
  withRepo((dir, cli) => {
    const holder = mkdtempSync(join(tmpdir(), 'restyle link '));
    const link = join(holder, 'repo-link');
    symlinkSync(dir, link);
    try {
      writeFileSync(join(dir, 'docs', 'a.md'), page('Set the timeout to 30 seconds, then save.'));
      const r = cli(join(link, 'docs', 'a.md'));
      assert.equal(r.status, 0, r.stdout + r.stderr);
    } finally {
      rmSync(holder, { recursive: true, force: true });
    }
  });
});

test('an allowed change reaches plain prose only, whole words only, and must be found', () => {
  const orig = page('Wait 5 minutes on port 1521, run `v5` or **Set 5**, see [x](/docs/v5/a.md).');
  const fixed = 'Wait 10 minutes on port 1521, run `v5` or **Set 5**, see [x](/docs/v5/a.md).';
  const allow = [{ from: '5 minutes', to: '10 minutes' }];
  assert.deepEqual(checkContent(one(orig), one(page(fixed)), allow), []);
  // A bare number is whole-word only: it changes the lone "5" prose, not 1521, `v5`, bold, or the link.
  const rewrittenKeepsOthers = 'Wait 10 minutes on port 1521, run `v5` or **Set 5**, see [x](/docs/v5/a.md).';
  assert.deepEqual(checkContent(one(orig), one(page(rewrittenKeepsOthers)), [{ from: '5', to: '10' }]), []);
  const rewrittenChangesPort = 'Wait 10 minutes on port 11021, run `v10` or **Set 5**, see [x](/docs/v5/a.md).';
  assert.ok(checkContent(one(orig), one(page(rewrittenChangesPort)), [{ from: '5', to: '10' }]).length > 0);
  assert.throws(() => checkContent(one(orig), one(page(fixed)), [{ from: 'v5', to: 'v6' }]), /not found/);
  assert.throws(() => checkContent(one(orig), one(page(fixed)), [{ from: 'no such text', to: 'x' }]), /not found/);
});

test('a YAML comment in frontmatter is not part of a value', () => {
  const orig = page('Body.', 'title: T\nslug: a\n# keep this\nkeywords:\n  - x');
  assert.deepEqual(checkContent(one(orig), one(page('Body.', 'title: T\nslug: a\nkeywords:\n  - x'))), []);
});

test('CLI: --base rejects a value that looks like an option', () => {
  withRepo((dir, cli) => {
    assert.equal(cli('--base', '-x', 'docs/a.md').status, 2);
  });
});

test('an allowed link change approves a renamed anchor or moved page, and only in link targets', () => {
  const orig = page('## Old heading\n\nSee [this](#old-heading) and [that](/docs/a/b.md#old-heading) and `#old-heading`.');
  const renamed = page('## New heading\n\nSee [this](#new-heading) and [that](/docs/a/b.md#new-heading) and `#old-heading`.');
  assert.ok(checkContent(one(orig), one(renamed)).length > 0);
  assert.deepEqual(checkContent(one(orig), one(renamed), [], [{ from: '#old-heading', to: '#new-heading' }]), []);
  // Inline code is not a link target, so it must stay as it was.
  const touchedCode = renamed.replace('`#old-heading`', '`#new-heading`');
  assert.ok(checkContent(one(orig), one(touchedCode), [], [{ from: '#old-heading', to: '#new-heading' }]).length > 0);
  assert.throws(() => checkContent(one(orig), one(renamed), [], [{ from: '#nowhere', to: '#x' }]), /not found in any link/);
  assert.throws(() => checkContent(one(orig), one(renamed), [], [{ from: '', to: '#x' }]), /non-empty/);
});

test('frontmatter numbers of a new or deleted page do not count as added or removed', () => {
  const keys = 'title: T\nsidebar_position: 3\nkeywords:\n  - ppe 10.2';
  const original = [{ path: 'a.md', text: page('Set 30 seconds. Open port 8080.', keys) }];
  const split = [
    { path: 'a.md', text: page('Set 30 seconds.', keys) },
    { path: 'b.md', text: page('Open port 8080.', keys) },
  ];
  assert.deepEqual(checkContent(original, split), []);
  const merge = [{ path: 'a.md', text: page('Set 30 seconds.', keys) }, { path: 'b.md', text: page('Open port 8080.', keys) }];
  const merged = [{ path: 'a.md', text: page('Set 30 seconds. Open port 8080.', keys) }, { path: 'b.md', text: '' }];
  assert.deepEqual(checkContent(merge, merged), []);
});

test('CLI: --allow-link rewrites link targets and rejects a bad value', () => {
  withRepo((dir, cli) => {
    writeFileSync(join(dir, 'docs', 'a.md'), page('See [x](#old).'));
    spawnSync('git', ['-c', 'commit.gpgsign=false', 'commit', '-qam', 'link'], { cwd: dir });
    writeFileSync(join(dir, 'docs', 'a.md'), page('See [x](#new).'));
    assert.equal(cli('docs/a.md').status, 1);
    assert.equal(cli('--allow-link', '#old=>#new', 'docs/a.md').status, 0);
    assert.equal(cli('--allow-link', '=>x', 'docs/a.md').status, 2);
  });
});
