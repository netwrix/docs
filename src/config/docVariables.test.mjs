import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { accessAnalyzer261Installers, accessAnalyzer261Releases } from './releases/accessanalyzer-26.1.js';
import {
  docVariablesPreprocessor,
  releaseTable,
  releaseVariables,
  replaceDocVariables,
  variablesForDoc,
} from './docVariables.js';

const siteDir = fileURLToPath(new URL('../..', import.meta.url));
const aa261Dir = join(siteDir, 'docs/accessanalyzer/26.1');

const release120 = { version: '1.2.0', date: '2026-10-28', installer: '1.0.21' };
const release130 = { version: '1.3.0', date: '2026-12-01', installer: '1.0.30' };
const installers = [
  { version: '1.0.30', k3s: 'v1.34.1+k3s1', argocd: '3.3.0' },
  { version: '1.0.21', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
];

test('the first release supplies the latest versions', () => {
  const variables = releaseVariables([release130, release120], '1.1.10', installers);
  assert.equal(variables.appVersion, '1.3.0');
  assert.equal(variables.installerVersion, '1.0.30');
  assert.equal(variables.k3sVersion, 'v1.34.1+k3s1');
  assert.equal(variables.argocdVersion, '3.3.0');
});

test('the previous version is the second release, or the release before the list', () => {
  assert.equal(releaseVariables([release130, release120], '1.1.10', installers).previousAppVersion, '1.2.0');
  assert.equal(releaseVariables([release120], '1.1.10', installers).previousAppVersion, '1.1.10');
});

test('the release table has one row per release, newest first, with its installer and a spelled-out date', () => {
  assert.equal(
    releaseTable([release130, release120], installers),
    [
      '| Release | Released | Installer |',
      '|---|---|---|',
      '| 1.3.0 | December 1, 2026 | 1.0.30 |',
      '| 1.2.0 | October 28, 2026 | 1.0.21 |',
    ].join('\n'),
  );
});

test('a release that names an installer missing from the list fails', () => {
  assert.throws(() => releaseTable([{ version: '1.4.0', date: '2027-01-01', installer: '9.9.9' }], installers), /1\.4\.0.*9\.9\.9/);
});

test('every Access Analyzer 26.1 release names an installer in the list', () => {
  for (const release of accessAnalyzer261Releases) {
    assert.ok(accessAnalyzer261Installers.some((i) => i.version === release.installer), release.version);
  }
});

test('tokens are replaced in prose, inline code, and code blocks', () => {
  const content = 'Latest is {{appVersion}}, for example `{{appVersion}}`.\n\n```bash\nVERSION=\'{{appVersion}}\'\n```\n';
  assert.equal(
    replaceDocVariables(content, { appVersion: '1.2.0' }, 'page.md'),
    'Latest is 1.2.0, for example `1.2.0`.\n\n```bash\nVERSION=\'1.2.0\'\n```\n',
  );
});

test('an unknown token fails with the page and the known names', () => {
  assert.throws(
    () => replaceDocVariables('{{appVersoin}}', { appVersion: '1.2.0' }, 'docs/page.md'),
    /docs\/page\.md: unknown variable \{\{appVersoin\}\}.*appVersion/,
  );
});

test('only Access Analyzer 26.1 pages get variables', () => {
  assert.ok(variablesForDoc(join(aa261Dir, 'install/run-the-installer.md')));
  assert.equal(variablesForDoc(join(siteDir, 'docs/accessanalyzer/12.0/index.md')), undefined);

  const fileContent = 'Release {{appVersion}}';
  const outside = join(siteDir, 'docs/accessanalyzer/12.0/index.md');
  assert.equal(docVariablesPreprocessor({ filePath: outside, fileContent }), fileContent);
  assert.doesNotMatch(
    docVariablesPreprocessor({ filePath: join(aa261Dir, 'index.md'), fileContent }),
    /\{\{/,
  );
});

function markdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return /\.mdx?$/.test(entry.name) ? [path] : [];
  });
}

// The preprocessor sees the body only, and the anchor check slugifies raw
// headings, so a token there would reach readers or break anchors unreplaced.
test('Access Analyzer 26.1 pages use only known tokens, never in front matter or headings', () => {
  const variables = variablesForDoc(join(aa261Dir, 'index.md'));
  for (const file of markdownFiles(aa261Dir)) {
    const content = readFileSync(file, 'utf8');
    const page = relative(siteDir, file);
    replaceDocVariables(content, variables, page);

    const frontMatter = content.match(/^---\n[\s\S]*?\n---\n/)?.[0] ?? '';
    assert.doesNotMatch(frontMatter, /\{\{/, `${page}: token in front matter`);
    const headings = content.split('\n').filter((line) => /^#{1,6} /.test(line));
    for (const heading of headings) {
      assert.doesNotMatch(heading, /\{\{/, `${page}: token in heading "${heading}"`);
    }
  }
});
