#!/usr/bin/env node

/**
 * Tests for scripts/vale-local.mjs and scripts/lib/vale-autofix-rules.mjs
 *
 * Usage:
 *   node --test scripts/test-vale-local.mjs
 *
 * The parity test runs only where GNU sed and bash 4+ exist (CI's Ubuntu
 * runners); the DaleLocal rule tests run only where `vale` is on PATH.
 */

import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { applyFixes, FIXERS } from './lib/vale-autofix-rules.mjs';
import { guardHookCommand, guardShimFile, hasUntrustedConfig } from './hooks/install.mjs';
import { blockingAlerts, parseChangedLines, splitByChangedLines, toViolations } from './vale-local.mjs';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = dirname(SCRIPT_DIR);

const fixLine = (check, line) => applyFixes(line, [{ line: 1, check }]).content;

const RULE_CASES = [
  ['Netwrix.Checkbox', 'Select the check box.', 'Select the checkbox.'],
  ['Netwrix.ClickOn', 'Click on Save, then double-click on the row.', 'Click Save, then double-click the row.'],
  ['Netwrix.Contractions', 'Do not stop. It cannot fail and is not slow.', "Don't stop. It can't fail and isn't slow."],
  ['Netwrix.Dropdown', 'Open the drop-down and the Drop Down menu.', 'Open the dropdown and the dropdown menu.'],
  ['Netwrix.InOrderTo', 'Restart in order to apply.', 'Restart to apply.'],
  ['Netwrix.IsAbleTo', 'It is able to run. They were able to log in.', 'It can run. They could log in.'],
  ['Netwrix.LoginVerb', 'Login to the console.', 'log in to the console.'],
  ['Netwrix.MakeSure', 'Make sure the service runs.', 'ensure the service runs.'],
  ['Netwrix.ProvidesAbilityTo', 'It provides the ability to export.', 'It lets you export.'],
  ['Netwrix.SetupUsage', 'You must setup the agent.', 'You must set up the agent.'],
  ['Netwrix.Utilize', 'It utilizes and utilises memory.', 'It uses and uses memory.'],
  ['Netwrix.WishTo', 'If you wish to continue.', 'If you want to continue.'],
  ['Netwrix.Aforementioned', 'Use the aforementioned setting.', 'Use the setting.'],
  ['Netwrix.LatinAbbreviations', 'Logs, e.g. audit logs, etc.', 'Logs, for example audit logs, and so on'],
  ['Netwrix.Please', 'Please restart the server.', 'restart the server.'],
  ['Netwrix.Spacing', 'Save it.  Then exit.', 'Save it. Then exit.'],
  ['Netwrix.TemporalHedges', 'Currently, the tool supports SQL.', 'the tool supports SQL.'],
  ['Netwrix.Plurals', 'Select the server(s).', 'Select the servers.'],
];

test('every rule vale-autofix.sh fixes has a Node fixer', () => {
  const script = readFileSync(join(SCRIPT_DIR, 'vale-autofix.sh'), 'utf8');
  const caseBlock = script.slice(script.indexOf('case "$RULE" in'), script.indexOf('esac', script.indexOf('case "$RULE" in')));
  const bashRules = [...caseBlock.matchAll(/^\s+(Netwrix\.\w+)\)/gm)].map((m) => m[1]).sort();
  assert.deepEqual(Object.keys(FIXERS).sort(), bashRules);
});

for (const [check, input, expected] of RULE_CASES) {
  test(`${check} fixes "${input}"`, () => {
    assert.equal(fixLine(check, input), expected);
  });
}

test('Please leaves "please note" lines alone', () => {
  assert.equal(fixLine('Netwrix.Please', 'Please note the limit.'), 'Please note the limit.');
});

test('lines inside fenced code blocks are never rewritten', () => {
  const doc = ['Intro.', '```', 'do not edit', '```', '~~~', 'do not edit', '~~~', 'do not edit'].join('\n');
  const violations = [2, 3, 4, 6, 8].map((line) => ({ line, check: 'Netwrix.Contractions' }));
  const { content, fixes } = applyFixes(doc, violations);
  assert.equal(content, ['Intro.', '```', 'do not edit', '```', '~~~', 'do not edit', '~~~', "don't edit"].join('\n'));
  assert.deepEqual(fixes, [{ line: 8, check: 'Netwrix.Contractions' }]);
});

test('heading lines are never rewritten', () => {
  const doc = '# Do Not Use the Old Method\n\nDo not use it.';
  const violations = [
    { line: 1, check: 'Netwrix.Contractions' },
    { line: 3, check: 'Netwrix.Contractions' },
  ];
  assert.equal(applyFixes(doc, violations).content, "# Do Not Use the Old Method\n\nDon't use it.");
});

test('several rules on one line all apply', () => {
  const violations = [
    { line: 1, check: 'Netwrix.Please' },
    { line: 1, check: 'Netwrix.ClickOn' },
    { line: 1, check: 'Netwrix.Checkbox' },
  ];
  assert.equal(applyFixes('Please click on the check box.', violations).content, 'click the checkbox.');
});

test('filler removal keeps list indentation intact', () => {
  const doc = '1. Step one\n\n    Please restart the   service.';
  const { content } = applyFixes(doc, [{ line: 3, check: 'Netwrix.Please' }]);
  assert.equal(content, '1. Step one\n\n    restart the service.');
});

test('CRLF line endings survive a fix', () => {
  const doc = 'First line.\r\nDo not stop.\r\nLast line.\r\n';
  assert.equal(
    applyFixes(doc, [{ line: 2, check: 'Netwrix.Contractions' }]).content,
    "First line.\r\nDon't stop.\r\nLast line.\r\n",
  );
});

test('unknown checks and unchanged lines report no fixes', () => {
  const { content, fixes } = applyFixes('Plain text.', [
    { line: 1, check: 'DaleLocal.PositionalReferences' },
    { line: 1, check: 'Netwrix.Checkbox' },
  ]);
  assert.equal(content, 'Plain text.');
  assert.deepEqual(fixes, []);
});

const VALE_JSON = {
  'docs/a.md': [
    { Line: 3, Span: [1, 4], Check: 'Netwrix.Please', Message: "Remove 'please'.", Severity: 'warning' },
    { Line: 5, Span: [2, 9], Check: 'Netwrix.DesiredAsAdjective', Message: 'Consider.', Severity: 'suggestion' },
  ],
  'docs/b.md': [{ Line: 1, Span: [1, 2], Check: 'DaleLocal.ExclamatorySentences', Message: 'No!', Severity: 'error' }],
};

test('toViolations flattens Vale JSON per file', () => {
  assert.deepEqual(toViolations(VALE_JSON), [
    { path: 'docs/a.md', line: 3, column: 1, check: 'Netwrix.Please', message: "Remove 'please'.", severity: 'warning' },
    { path: 'docs/a.md', line: 5, column: 2, check: 'Netwrix.DesiredAsAdjective', message: 'Consider.', severity: 'suggestion' },
    { path: 'docs/b.md', line: 1, column: 1, check: 'DaleLocal.ExclamatorySentences', message: 'No!', severity: 'error' },
  ]);
});

test('blockingAlerts keeps warnings and errors, drops suggestions', () => {
  assert.deepEqual(
    blockingAlerts(toViolations(VALE_JSON)).map((v) => v.check),
    ['Netwrix.Please', 'DaleLocal.ExclamatorySentences'],
  );
});

const DIFF = [
  'diff --git a/docs/a.md b/docs/a.md',
  'index 1111111..2222222 100644',
  '--- a/docs/a.md',
  '+++ b/docs/a.md',
  '@@ -3 +3 @@',
  '-old',
  '+new',
  '@@ -10,0 +11,2 @@',
  '+++ an added line that looks like a header',
  '+y',
  '@@ -20,2 +21,0 @@',
  '-gone',
  '-gone',
  'diff --git a/docs/new.md b/docs/new.md',
  'new file mode 100644',
  '--- /dev/null',
  '+++ b/docs/new.md',
  '@@ -0,0 +1,3 @@',
  '+a',
  '+b',
  '+c',
  'diff --git a/docs/old.md b/docs/old.md',
  'deleted file mode 100644',
  '--- a/docs/old.md',
  '+++ /dev/null',
  '@@ -1 +0,0 @@',
  '-z',
].join('\n');

test('parseChangedLines maps each file to its added line ranges', () => {
  assert.deepEqual(
    parseChangedLines(DIFF),
    new Map([
      ['docs/a.md', [[3, 3], [11, 12]]],
      ['docs/new.md', [[1, 3]]],
    ]),
  );
});

test('splitByChangedLines blocks only alerts on changed lines', () => {
  const alerts = [
    { path: 'docs\\a.md', line: 3, check: 'A', severity: 'warning' },
    { path: 'docs/a.md', line: 5, check: 'B', severity: 'warning' },
    { path: './docs/a.md', line: 12, check: 'C', severity: 'warning' },
    { path: 'docs/teammate.md', line: 1, check: 'D', severity: 'warning' },
  ];
  const { blocking, existing } = splitByChangedLines(alerts, parseChangedLines(DIFF));
  assert.deepEqual(blocking.map((a) => a.check), ['A', 'C']);
  assert.deepEqual(existing.map((a) => a.check), ['B', 'D']);
});

test('splitByChangedLines blocks everything when there is no base to diff against', () => {
  const alerts = [{ path: 'docs/a.md', line: 5, check: 'B', severity: 'warning' }];
  assert.deepEqual(splitByChangedLines(alerts, null), { blocking: alerts, existing: [] });
});

const HK_CONFIG_HOOK = 'test "${HK:-1}" = "0" || mise x -- hk run pre-commit --from-hook';
const HK_LEGACY_SHIM = '#!/bin/sh\ntest "${HK:-1}" = "0" || exec mise x -- hk run pre-push --from-hook "$@"\n';

test('guardHookCommand keeps hk\'s command and is idempotent', () => {
  for (const original of [HK_CONFIG_HOOK, HK_LEGACY_SHIM]) {
    const guarded = guardHookCommand(original);
    assert.match(guarded, /test ! -f \.config\/hk\.pkl/);
    assert.ok(guarded.includes(original.split('|| ')[1]), guarded);
    assert.equal(guardHookCommand(guarded), guarded);
  }
});

// Git for Windows defaults to core.autocrlf=true, and bash fails on CRLF
// scripts ($'\r': command not found), which aborts the anchors hook.
test('every tracked shell script checks out with LF endings', () => {
  const scripts = spawnSync('git', ['ls-files', '*.sh'], { cwd: REPO_ROOT, encoding: 'utf8' }).stdout.split('\n').filter(Boolean);
  const attrs = spawnSync('git', ['check-attr', 'eol', '--', ...scripts], { cwd: REPO_ROOT, encoding: 'utf8' }).stdout;
  for (const script of scripts) {
    assert.match(attrs, new RegExp(`^${script.replaceAll('.', '\\.')}: eol: lf$`, 'm'), script);
  }
});

test('guardShimFile guards hk shims in place and ignores other or missing hooks', () => {
  const dir = mkdtempSync(join(tmpdir(), 'shim-'));
  try {
    const shim = join(dir, 'pre-push');
    writeFileSync(shim, HK_LEGACY_SHIM, { mode: 0o755 });
    guardShimFile(shim);
    assert.equal(readFileSync(shim, 'utf8'), guardHookCommand(HK_LEGACY_SHIM));

    const other = join(dir, 'pre-commit');
    writeFileSync(other, '#!/bin/sh\necho custom\n');
    guardShimFile(other);
    assert.equal(readFileSync(other, 'utf8'), '#!/bin/sh\necho custom\n');

    assert.doesNotThrow(() => guardShimFile(join(dir, 'missing')));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('hasUntrustedConfig reads `mise trust --show` output', () => {
  assert.equal(hasUntrustedConfig('~/Documents/docs: trusted\n'), false);
  assert.equal(hasUntrustedConfig('/tmp/clone: untrusted\n'), true);
  assert.equal(hasUntrustedConfig('~/Documents: trusted\n~/Documents/docs: untrusted\n'), true);
});

test('guarded hook skips branches without hk.pkl and machines without mise', { skip: process.platform === 'win32' && 'POSIX sh test' }, () => {
  const dir = mkdtempSync(join(tmpdir(), 'hook-guard-'));
  try {
    const bin = join(dir, 'bin');
    spawnSync('mkdir', ['-p', bin, join(dir, '.config')]);
    writeFileSync(join(bin, 'mise'), '#!/bin/sh\nexit 7\n', { mode: 0o755 });
    const run = (env) =>
      spawnSync('/bin/sh', ['-c', guardHookCommand(HK_CONFIG_HOOK)], { cwd: dir, encoding: 'utf8', env });
    const withMise = { PATH: `${bin}:/usr/bin:/bin` };

    assert.equal(run(withMise).status, 0, 'no hk.pkl: hook is a no-op');

    writeFileSync(join(dir, '.config', 'hk.pkl'), '');
    assert.equal(run(withMise).status, 7, 'hk.pkl present: hk runs through mise');
    assert.equal(run({ ...withMise, HK: '0' }).status, 0, 'HK=0 skips');

    const noMise = run({ PATH: '/usr/bin:/bin' });
    assert.equal(noMise.status, 0, 'mise missing: skipped');
    assert.match(noMise.stderr, /mise/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

function hasGnuSedAndModernBash() {
  const sed = spawnSync('sed', ['--version'], { encoding: 'utf8' });
  const bash = spawnSync('bash', ['-c', 'echo ${BASH_VERSINFO[0]}'], { encoding: 'utf8' });
  return /GNU sed/.test(sed.stdout ?? '') && Number(bash.stdout) >= 4 && spawnSync('jq', ['--version']).status === 0;
}

test('Node fixers match vale-autofix.sh output', { skip: !hasGnuSedAndModernBash() && 'needs GNU sed, bash 4+ and jq' }, () => {
  const dir = mkdtempSync(join(tmpdir(), 'vale-parity-'));
  try {
    const lines = RULE_CASES.map(([, input]) => input);
    const doc = `${lines.join('\n')}\n`;
    const file = join(dir, 'doc.md');
    writeFileSync(file, doc);
    const violations = RULE_CASES.map(([check], i) => ({ path: file, line: i + 1, check }));
    writeFileSync(join(dir, 'violations.json'), JSON.stringify(violations));

    const run = spawnSync('bash', [join(SCRIPT_DIR, 'vale-autofix.sh'), join(dir, 'violations.json')], { encoding: 'utf8' });
    assert.equal(run.status, 0, run.stderr);

    assert.equal(applyFixes(doc, violations).content, readFileSync(file, 'utf8'));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

const valeAvailable = spawnSync('vale', ['--version']).status === 0;

const DALE_LOCAL_CASES = [
  ['DaleLocal.ExclamatorySentences', 'Your report is ready!', true],
  ['DaleLocal.ExclamatorySentences', 'Set the value to `!important` in CSS.', false],
  ['DaleLocal.PositionalReferences', 'Complete the steps below.', true],
  ['DaleLocal.PositionalReferences', 'As shown above, the service restarts.', true],
  ['DaleLocal.PositionalReferences', 'Values above 90 percent trigger an alert.', false],
  ['DaleLocal.MinimizingDifficulty', 'You can easily export the report.', true],
  ['DaleLocal.MinimizingDifficulty', 'Simply select Save.', true],
  ['DaleLocal.MinimizingDifficulty', 'Configure just-in-time access for the account.', false],
  ['DaleLocal.PositionalReferences', 'The table below shows the ports.', true],
  ['DaleLocal.PositionalReferences', 'See the example below:', true],
  ['DaleLocal.PositionalReferences', 'Export the data using the options above the Filters section.', false],
  ['DaleLocal.PositionalReferences', 'Each tab has its own filters, shown above its cards.', false],
  ['DaleLocal.MinimizingDifficulty', 'Users can easily create groups.', true],
  ['DaleLocal.MinimizingDifficulty', 'Simply drag and drop the file.', true],
  ['DaleLocal.MinimizingDifficulty', 'This type of attack is easily automated.', false],
  ['DaleLocal.MinimizingDifficulty', 'This keyword simply clicks the radio button.', false],
  ['DaleLocal.ExclamatorySentences', 'The You are ready to install GroupID! page opens.', false],
];

for (const [check, sentence, flagged] of DALE_LOCAL_CASES) {
  test(`${check} ${flagged ? 'flags' : 'ignores'} "${sentence}"`, { skip: !valeAvailable && 'vale not on PATH' }, () => {
    const dir = mkdtempSync(join(tmpdir(), 'dale-local-'));
    try {
      const file = join(dir, 'doc.md');
      writeFileSync(file, `# Title\n\n${sentence}\n`);
      const run = spawnSync('vale', ['--config', join(REPO_ROOT, '.vale-local.ini'), '--output', 'JSON', file], {
        encoding: 'utf8',
      });
      const checks = toViolations(JSON.parse(run.stdout || '{}')).map((v) => v.check);
      assert.equal(checks.includes(check), flagged, `alerts: ${checks.join(', ') || 'none'}`);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
}
