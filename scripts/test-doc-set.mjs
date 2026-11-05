import fs from 'fs';
import os from 'os';
import path from 'path';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateManifest, statusSummary } from './doc-set/manifest.mjs';
import { buildCoverage } from './doc-set/coverage.mjs';
import { addVersion, findProductBlock, parseVersions, rewriteDocLinks } from './doc-set/seed-version.mjs';

const facts = { facts: [
  { id: 'F1', statement: 'a', cite: 'x.cs:1', status: 'new' },
  { id: 'F2', statement: 'b', cite: 'x.cs:2', status: 'unchanged' },
  { id: 'F3', statement: 'c', status: 'unchanged', internal: true },
] };
const claims = { claims: [{ id: 'C1', status: 'jira-only' }, { id: 'C2', status: 'contradicted' }] };
const page = (over) => ({ path: 'p/a.md', action: 'NEW', type: 'task', facts: ['F1', 'F2'], claims: ['C1'], ...over });

test('valid manifest passes', () => {
  assert.deepEqual(validateManifest({ facts, claims, manifest: { pages: [page()] } }), []);
});

test('unassigned fact, bad action, missing facts, collision are reported', () => {
  const m = { pages: [page({ facts: ['F1'], sidebar_position: 1 }), page({ path: 'p/b.md', action: 'BOGUS', facts: ['F1'], sidebar_position: 1 }), page({ path: 'p/c.md', facts: [], sidebar_position: 1 })] };
  const out = validateManifest({ facts, claims, manifest: m }).join('\n');
  assert.match(out, /Fact F2 is neither assigned/);
  assert.match(out, /unknown action "BOGUS"/);
  assert.match(out, /p\/c.md: NEW page has no assigned facts/);
  assert.match(out, /sidebar_position 1 collides/);
});

test('KB paths are rejected', () => {
  const out = validateManifest({ facts, claims, manifest: { pages: [page({ path: 'docs/p/1.0/kb/x.md' }), page({ path: 'p/a.md' })] } });
  assert.equal(out.filter(p => /KB articles/.test(p)).length, 1);
});

test('dropped facts and contradicted claims need no page', () => {
  const m = { pages: [page({ facts: ['F1'] })], dropped: [{ id: 'F2', reason: 'out of scope' }] };
  assert.deepEqual(validateManifest({ facts, claims, manifest: m }), []);
});

test('coverage counts only done or kept pages', () => {
  const manifest = { pages: [page(), page({ path: 'p/k.md', action: 'KEEP', facts: [], claims: [] })] };
  const none = buildCoverage({ facts, claims, manifest, results: [] });
  assert.equal(none.covered, 0);
  assert.equal(none.uncovered.length, 2);
  const done = buildCoverage({ facts, claims, manifest, results: [{ pages: [{ path: 'p/a.md', status: 'done', factsCovered: ['F1', 'F2'], todos: ['t'] }] }] });
  assert.equal(done.covered, 2);
  assert.equal(done.uncovered.length, 0);
  assert.equal(done.todos.length, 1);
  assert.equal(done.contradicted.length, 1);
});

test('status summary counts progress', () => {
  const s = statusSummary({ pages: [page(), page({ path: 'p/b.md' })] }, [{ pages: [{ path: 'p/a.md', status: 'done' }, { path: 'p/b.md', status: 'failed' }] }]);
  assert.deepEqual(s.NEW, { total: 2, done: 1, failed: 1 });
});

const SAMPLE = `const x = [
  {
    id: 'demo',
    name: 'Demo',
    path: 'docs/demo',
    versions: [
      {
        version: '2.0',
        label: '2.0',
        isLatest: true,
        sidebarFile: './sidebars/demo/2.0.js',
      },
    ],
    defaultVersion: '2.0',
  },
  {
    id: 'other',
    path: 'docs/other',
    versions: [
      {
        version: '1.0',
        label: '1.0',
        isLatest: true,
        sidebarFile: './sidebars/other/1.0.js',
      },
    ],
    defaultVersion: '1.0',
  },
];
`;

test('addVersion edits only the named product', () => {
  const out = addVersion(SAMPLE, 'demo', '3.0');
  const demo = findProductBlock(out, 'demo').block;
  assert.deepEqual(parseVersions(demo), [{ version: '3.0', isLatest: true }, { version: '2.0', isLatest: false }]);
  assert.match(demo, /defaultVersion: '3.0'/);
  assert.deepEqual(parseVersions(findProductBlock(out, 'other').block), [{ version: '1.0', isLatest: true }]);
});

test('addVersion refuses duplicates and single-version products', () => {
  assert.throws(() => addVersion(SAMPLE, 'demo', '2.0'), /already has/);
  assert.throws(() => addVersion(SAMPLE.replace(/'1\.0'/g, "'current'"), 'other', '2.0'), /single-version/);
});

import { mergeAreas, problems as factProblems, suspectedDuplicates } from './doc-set/merge-facts.mjs';

test('merge assigns ids and flags cross-area duplicates only', () => {
  const merged = mergeAreas([
    { area: 'a', facts: [{ statement: 'The Export Signing Keys action copies the JWT key to another host', cite: 'x.cs:1', area: 'keys', status: 'new' }, { statement: 'Unrelated port 55558 firewall rule', cite: 'y.cs:2', area: 'fw', status: 'new' }] },
    { area: 'b', facts: [{ statement: 'Export Signing Keys action copies the JWT key to another host', cite: 'z.cs:3', area: 'keys', status: 'new' }] },
  ]);
  assert.deepEqual(merged.map(f => f.id), ['F001', 'F002', 'F003']);
  const d = suspectedDuplicates(merged);
  assert.equal(d.length, 1);
  assert.deepEqual([d[0].a, d[0].b], ['F001', 'F003']);
});

test('merge problems catch missing cites and bad statuses', () => {
  const out = factProblems([{ id: 'F001', statement: 's', cite: '', area: 'x', status: 'new', internal: false }, { id: 'F002', statement: 's', cite: 'a:1', area: 'x', status: 'weird', internal: false }]);
  assert.equal(out.length, 2);
});

import { clusterDuplicates } from './doc-set/merge-facts.mjs';

test('duplicate clusters pick the longest statement and exempt duplicates from assignment', () => {
  const fs2 = [{ id: 'F001', statement: 'short', source: 'a' }, { id: 'F002', statement: 'a much longer statement', source: 'b' }, { id: 'F003', statement: 'other', source: 'c' }];
  const dup = clusterDuplicates(fs2, [{ a: 'F001', b: 'F002', sim: 0.7 }, { a: 'F001', b: 'F003', sim: 0.3 }]);
  assert.deepEqual([...dup], [['F001', 'F002']]);
  const f = { facts: [{ id: 'F001', statement: 's', cite: 'a:1', status: 'new', duplicateOf: 'F002' }, { id: 'F002', statement: 'l', cite: 'a:2', status: 'new' }] };
  const out = validateManifest({ facts: f, claims: { claims: [] }, manifest: { pages: [page({ facts: ['F002'], claims: [] })] } });
  assert.deepEqual(out, []);
});

test('out-of-scope facts need no page and are listed in the report', () => {
  const f = { facts: [{ id: 'F001', statement: 's', cite: 'a:1', status: 'new', outOfScope: 'beta' }, { id: 'F002', statement: 'l', cite: 'a:2', status: 'new' }] };
  assert.deepEqual(validateManifest({ facts: f, claims: { claims: [] }, manifest: { pages: [page({ facts: ['F002'], claims: [] })] } }), []);
  const cov = buildCoverage({ facts: f, claims: { claims: [] }, manifest: { pages: [page({ facts: ['F002'], claims: [] })] }, results: [{ pages: [{ path: 'p/a.md', status: 'done', factsCovered: ['F002'] }] }] });
  assert.equal(cov.total, 1);
  assert.equal(cov.uncovered.length, 0);
  assert.equal(cov.outOfScope.length, 1);
});

test('internal and cancelled claims need no page', () => {
  const c = { claims: [{ id: 'C1', status: 'internal' }, { id: 'C2', status: 'cancelled' }, { id: 'C3', status: 'confirmed', facts: ['F1'] }] };
  const out = validateManifest({ facts: { facts: [] }, claims: c, manifest: { pages: [page({ facts: [], claims: [], action: 'KEEP' })] } });
  assert.deepEqual(out, ['Claim C3 is neither assigned to a page nor dropped']);
});

test('report lists ticket differences', () => {
  const cov = buildCoverage({ facts: { facts: [] }, claims: { claims: [{ id: 'C1', key: 'T-1', status: 'confirmed', differences: ['x differs'] }, { id: 'C2', key: 'T-2', status: 'confirmed' }] }, manifest: { pages: [] }, results: [] });
  assert.equal(cov.differences.length, 1);
});

test('rewriteDocLinks retargets doc links to the new version and leaves images and other versions', () => {
  const t = '[a](/docs/demo/3.3/admin/x.md) [b](/docs/demo/3_3/admin/y#h) ![i](/images/demo/3.3/a.webp) [c](/docs/demo/3.2/z.md) [d](/docs/other/3.3/q.md) [e](/docs/demo/3.30/w.md)';
  assert.equal(rewriteDocLinks(t, 'demo', '3.3', '3.4'), '[a](/docs/demo/3.4/admin/x.md) [b](/docs/demo/3_4/admin/y#h) ![i](/images/demo/3.3/a.webp) [c](/docs/demo/3.2/z.md) [d](/docs/other/3.3/q.md) [e](/docs/demo/3.30/w.md)');
});

import { combine, unassigned } from './doc-set/triage-to-manifest.mjs';

test('triage combine flags mechanical updates and finds unassigned in-scope facts', () => {
  const { pages, problems: pr } = combine([{ pages: [{ path: 'a.md', action: 'UPDATE', type: 'concept', facts: [] }, { path: 'b.md', action: 'KEEP', facts: ['F1'] }] }, { pages: [{ path: 'a.md', action: 'KEEP' }] }]);
  assert.equal(pages.length, 2);
  assert.equal(pages[0].mechanical, true);
  assert.equal(pr.length, 1);
  const f = { facts: [{ id: 'F1', area: 'x', status: 'new' }, { id: 'F2', area: 'y', status: 'new', statement: 's', cite: 'c' }, { id: 'F3', area: 'y', status: 'new', outOfScope: 'n' }, { id: 'F4', area: 'z', status: 'removed' }] };
  assert.deepEqual(Object.keys(unassigned(f, pages)), ['y']);
});

test('sidebar_position collisions are reported only when a NEW page is involved', () => {
  const f = { facts: [] };
  const old = { facts: [], claims: [], type: 'task' };
  const keep = validateManifest({ facts: f, claims: { claims: [] }, manifest: { pages: [{ ...old, path: 'd/a.md', action: 'KEEP', sidebar_position: 1 }, { ...old, path: 'd/b.md', action: 'KEEP', sidebar_position: 1 }] } });
  assert.deepEqual(keep, []);
  const nw = validateManifest({ facts: { facts: [{ id: 'F1', statement: 's', cite: 'c', status: 'new' }] }, claims: { claims: [] }, manifest: { pages: [{ ...old, path: 'd/a.md', action: 'KEEP', sidebar_position: 1 }, { ...old, path: 'd/n.md', action: 'NEW', facts: ['F1'], sidebar_position: 1 }] } });
  assert.equal(nw.length, 1);
});

import { applyPlan } from './doc-set/apply-plan.mjs';

test('apply-plan attaches facts, creates NEW pages, never touches proposals, and is idempotent', () => {
  const m = { pages: [{ path: 'a.md', action: 'KEEP', facts: ['F1'], claims: [] }, { path: 'b.md', action: 'UPDATE', mechanical: true, facts: [], claims: [] }], dropped: [] };
  const plan = { attach: [{ page: 'a.md', facts: ['F2'], claims: ['C1'] }, { page: 'b.md', facts: ['F3'] }, { page: 'zz.md', facts: ['F9'] }], newPages: [{ path: 'n.md', title: 'N', type: 'task', zone: 'x', sidebar_position: 5, facts: ['F4'] }], dropped: [{ id: 'F7', reason: 'cosmetic' }], proposals: [{ kind: 'rename' }] };
  const one = applyPlan(m, plan);
  assert.deepEqual(one.problems, ['attach: zz.md is not in the manifest']);
  assert.equal(one.manifest.pages[0].action, 'UPDATE');
  assert.deepEqual(one.manifest.pages[0].facts, ['F1', 'F2']);
  assert.equal(one.manifest.pages[1].mechanical, undefined);
  assert.equal(one.manifest.pages.find(p => p.path === 'n.md').action, 'NEW');
  assert.deepEqual(one.manifest.dropped, [{ id: 'F7', reason: 'cosmetic' }]);
  const two = applyPlan(one.manifest, plan);
  assert.equal(two.manifest.pages.length, one.manifest.pages.length);
  assert.deepEqual(two.manifest.pages[0].facts, ['F1', 'F2']);
});

import { alignRows, collapse, wordMarks, stats } from './doc-set/review-html.mjs';

test('review alignment pairs changed lines, marks words, and collapses long unchanged runs', () => {
  const oldT = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'The page is saved.', 'z'].join('\n');
  const newT = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'Threat Manager saves the page.', 'z', 'new tail'].join('\n');
  const rows = alignRows(oldT, newT);
  assert.deepEqual(stats(rows), { add: 2, del: 1 });
  const chg = rows.find(r => r.kind === 'chg');
  assert.match(chg.oldHtml, /<del>/);
  assert.match(chg.newHtml, /<ins>Threat<\/ins>/);
  const c = collapse(rows, 2);
  assert.equal(c[0].kind, 'skip');
  assert.equal(c[0].count, 7);
  const [l, r] = wordMarks('keep this', 'keep that');
  assert.equal(l, 'keep <del>this</del>');
  assert.equal(r, 'keep <ins>that</ins>');
  assert.equal(alignRows(null, 'x\ny').every(r => r.kind === 'ins'), true);
});

import { collectAttention } from './doc-set/author-report.mjs';

test('author report collects what needs attention and ignores KEEP pages', () => {
  const manifest = { pages: [
    { path: 'a.md', action: 'UPDATE', facts: ['F1', 'F2'] },
    { path: 'b.md', action: 'REWRITE', facts: ['F3'], renamedFrom: 'old.md' },
    { path: 'c.md', action: 'NEW', facts: ['F4'] },
    { path: 'k.md', action: 'KEEP', facts: [] },
  ] };
  const facts = { facts: [{ id: 'F1', status: 'new' }, { id: 'F2', status: 'new' }, { id: 'F3', status: 'new' }, { id: 'F4', status: 'new', outOfScope: 'x' }] };
  const results = [{ pages: [
    { path: 'a.md', status: 'done', factsCovered: ['F1'], todos: ['confirm port'], preexistingFindings: 2, note: 'Verifier flag overridden.' },
    { path: 'b.md', status: 'failed', untraced: ['One sentence.'], factsCovered: [] },
  ] }];
  const { rows, need } = collectAttention({ manifest, results, facts });
  assert.equal(rows.length, 3);
  assert.equal(rows.find(r => r.path === 'c.md').status, 'not started');
  assert.equal(rows.find(r => r.path === 'c.md').assigned, 0);
  const kinds = need.map(n => n.kind).sort();
  assert.deepEqual(kinds, ['Assigned but not stated', 'Failed', 'Note', 'Old wording changed', 'Renamed', 'TODO on the page']);
});

import { splitBatches, summarize } from './doc-set/lint-batches.mjs';

test('lint batches split evenly and the summary totals the results', () => {
  const paths = Array.from({ length: 31 }, (_, i) => `p${String(i).padStart(2, '0')}.md`);
  const b = splitBatches(paths, 15);
  assert.equal(b.length, 3);
  assert.equal(b.flat().length, 31);
  assert.ok(Math.max(...b.map(x => x.length)) - Math.min(...b.map(x => x.length)) <= 2);
  const s = summarize([{ pages: [{ path: 'a', before: 3, after: 1, integrity: 'pass', unfixed: ['x'] }, { path: 'b', before: 0, after: 0, integrity: 'pass' }, { path: 'c', before: 2, after: 0, integrity: 'fail' }], typos: ['t1', 't2'] }]);
  assert.deepEqual([s.pages, s.clean, s.changed, s.before, s.after, s.typos.length, s.unfixed.length, s.integrityFails], [3, 1, 2, 5, 1, 2, 1, ['c']]);
});

import { run as lintRun } from './doc-set/lint-batches.mjs';

test('lint-batches finds the run dir with and without --size', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lintb-'));
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify({ pages: [{ path: 'a.md', action: 'KEEP' }, { path: 'b.md', action: 'UPDATE' }, { path: 'c.md', action: 'KEEP' }] }));
  assert.equal(lintRun([dir]), 0);
  assert.equal(lintRun([dir, '--size', '1']), 0);
  assert.equal(fs.readdirSync(path.join(dir, 'lintpass')).filter(f => /^batch-\d+\.txt$/.test(f)).length, 2);
  assert.equal(lintRun([dir, '--summary']), 0);
  fs.rmSync(dir, { recursive: true });
});

test('author report explains a page that failed only the style check', () => {
  const { need } = collectAttention({ manifest: { pages: [{ path: 'a.md', action: 'UPDATE', facts: [] }] }, facts: { facts: [] }, results: [{ pages: [{ path: 'a.md', status: 'failed', checks: { quality: 'fail: 2 dale findings' } }] }] });
  assert.match(need[0].text, /Style check: fail: 2 dale findings/);
});

import { parseRecheck } from './doc-set/author-report.mjs';

test('author report parses the final style recheck output', () => {
  const out = ['PASS  docs/p/a.md  (vale: pass, dale: pass)', 'FAIL  docs/p/b.md  (vale: pass, dale: fail)', '   12  dale:passive-voice  Don\'t use passive voice.', '   -  dale:wordiness  This sentence is wordy.', '   40  dale:passive-voice  Again.', 'PASS  docs/p/c.md  (vale: pass, dale: cached-pass)', 'exit=1'].join('\n');
  const r = parseRecheck(out);
  assert.deepEqual([r.pages, r.pass, r.fail], [3, 2, 1]);
  assert.equal(r.failing[0].findings, 3);
  assert.deepEqual(r.failing[0].rules, { 'dale:passive-voice': 2, 'dale:wordiness': 1 });
});

import { groupPages } from './doc-set/author-report.mjs';

test('pages are grouped by what happened to them', () => {
  const manifest = { pages: [{ path: 'n.md', action: 'NEW' }, { path: 'r.md', action: 'REWRITE' }, { path: 'u.md', action: 'UPDATE' }, { path: 'k1.md', action: 'KEEP' }, { path: 'k2.md', action: 'KEEP' }, { path: 'x.md', action: 'RETIRE' }] };
  const rows = [{ path: 'n.md', covered: 2 }, { path: 'r.md' }, { path: 'u.md' }];
  const diffs = { 'k1.md': { add: 3, del: 3 }, 'k2.md': { add: 0, del: 0 }, 'u.md': { add: 5, del: 1 } };
  const g = groupPages({ manifest, rows, diffs });
  assert.deepEqual([g.NEW.length, g.REWRITE.length, g.UPDATE.length, g.RESTYLED.length, g.UNCHANGED.length], [1, 1, 1, 1, 1]);
  assert.equal(g.UPDATE[0].add, 5);
  assert.equal(g.RESTYLED[0].path, 'k1.md');
});

import { scopeCss, CAPABILITIES } from './doc-set/review-package.mjs';

test('review package scopes stylesheets and declares only the needed capabilities', () => {
  const out = scopeCss('h2{margin:0}.a,.b{color:red}', '.rep');
  assert.match(out, /\.rep h2\{margin:0\}/);
  assert.match(out, /\.rep \.a,\.rep \.b\{color:red\}/);
  assert.deepEqual(Object.keys(CAPABILITIES).sort(), ['comments', 'db', 'user']);
  assert.equal(CAPABILITIES.comments.composer_only, true);
  assert.deepEqual(CAPABILITIES.db.rules.map(r => r.path), ['votes', 'votes/{self}', 'suggestions', 'suggestions/{self}']);
});

import { createRequire } from 'module';
const requireCjs = createRequire(import.meta.url);

test('a review counts only while the page text is unchanged', () => {
  const { stateFor } = requireCjs('./doc-set/review-core.js');
  const v = (uid, status, hash) => ({ uid, status, at: 1, hash });
  assert.equal(stateFor([], 'h1').state, 'none');
  assert.equal(stateFor([v('a', 'approved', 'h1')], 'h1').state, 'approved');
  assert.equal(stateFor([v('a', 'approved', 'h1')], 'h2').state, 'stale');
  assert.equal(stateFor([v('a', 'changes', 'h1')], 'h2').state, 'stale');
  assert.equal(stateFor([v('a', 'approved', 'h1'), v('b', 'approved', 'h2')], 'h2').state, 'approved');
  assert.equal(stateFor([v('a', 'approved', 'h1'), v('b', 'changes', 'h2')], 'h2').state, 'changes');
  assert.equal(stateFor([v('a', 'approved', '')], 'h2').state, 'approved');
  const mixed = stateFor([v('a', 'approved', 'h1'), v('b', 'approved', 'h2')], 'h2');
  assert.deepEqual([mixed.fresh.length, mixed.stale.length], [1, 1]);
});

test('every package entry carries a page fingerprint that changes with the text', () => {
  const crypto = requireCjs('crypto');
  const h = s => crypto.createHash('sha256').update(s).digest('hex').slice(0, 12);
  assert.notEqual(h('a page'), h('a page.'));
  assert.equal(h('same'), h('same'));
});

test('a suggested edit applies only to the page text it was made on', () => {
  const { liveSuggestions } = requireCjs('./doc-set/review-core.js');
  const s = (slug, line, hash, original, proposed) => ({ slug, line, hash, original, proposed, at: 1 });
  const docs = {
    a: { items: { 'p:5': s('p', 5, 'h1', 'old', 'new'), 'p:2': s('p', 2, 'h1', 'x', 'y'), 'p:9': s('p', 9, 'h1', 'x', '') } },
    b: { items: { 'p:7': s('p', 7, 'h0', 'x', 'y'), 'p:8': s('p', 8, 'h1', 'same', 'same') } },
  };
  const out = liveSuggestions(docs, { p: 'h1' });
  assert.deepEqual(out.p.map(x => x.line), [2, 5]);
  assert.deepEqual(liveSuggestions({}, { p: 'h1' }), {});
});

test('progress marks the first unfinished phase as current', async () => {
  const { phaseStatus, render } = await import('./doc-set/progress.mjs');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'progress-'));
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ refSha: 'abcdef1234567' }));
  fs.writeFileSync(path.join(dir, 'facts.json'), JSON.stringify({ facts: [{}, {}] }));
  const ph = phaseStatus(dir);
  assert.deepEqual(ph.slice(0, 4).map(p => p.status), ['done', 'done', 'current', 'pending']);
  assert.match(render(ph), /You are here: phase 3 of 9, Claims/);
});


test('splitBlocks splits MDX into editable blocks with source line numbers', () => {
  const { splitBlocks } = requireCjs('./doc-set/review-core.js');
  const md = ['---', 'title: "T"', '---', '', '# Head', '', 'One line', 'wraps here.', '', '- a', '  more a', '- b', '', '1. step', '', '```bash', 'x', '', 'y', '```', '', ':::note', 'Careful.', ':::', '', '| a | b |', '|---|---|', '| 1 | 2 |', '', '{/* TODO: confirm */}'].join('\n');
  const b = splitBlocks(md);
  assert.deepEqual(b.map(x => [x.kind, x.start, x.end]), [
    ['frontmatter', 1, 3], ['heading', 5, 5], ['para', 7, 8], ['list', 10, 11], ['list', 12, 12], ['list', 14, 14],
    ['code', 16, 20], ['admonition', 22, 24], ['table', 26, 28], ['comment', 30, 30]]);
  assert.equal(b[2].text, 'One line\nwraps here.');
});

test('alignBlocks keeps identical blocks, pairs reworded ones, and reports adds and removes', () => {
  const { splitBlocks, alignBlocks } = requireCjs('./doc-set/review-core.js');
  const A = splitBlocks('# Title\n\nInstall the service on the server and start it.\n\nOld paragraph about nothing else.\n\nKept.');
  const B = splitBlocks('# Title\n\nInstall the service on the server, then start it.\n\nKept.\n\nBrand new text here.');
  const kinds = alignBlocks(A, B).map(x => x.kind);
  assert.deepEqual(kinds, ['eq', 'chg', 'del', 'eq', 'ins']);
});

test('diffMarks locates inserted and deleted words on the new text', () => {
  const { diffMarks, wordOps } = requireCjs('./doc-set/review-core.js');
  const m = diffMarks('Run the old tool now', 'Run the new tool now');
  assert.deepEqual(m.del, [{ at: 8, text: 'old' }]);
  assert.deepEqual(m.ins, [[8, 11]]);
  assert.deepEqual(wordOps('same', 'same'), [{ op: 'eq', text: 'same' }]);
  assert.deepEqual(diffMarks('a b', 'a b c').ins, [[3, 5]]);
});

test('liveSuggestions handles edit, delete, add and withdrawn suggestions', () => {
  const { liveSuggestions } = requireCjs('./doc-set/review-core.js');
  const s = (o) => ({ slug: 'p', hash: 'h1', at: 1, original: 'x', proposed: 'y', line: 1, ...o });
  const docs = { a: { items: {
    e: s({ line: 3 }), d: s({ line: 5, op: 'delete', proposed: '' }), n: s({ line: 7, op: 'add', original: '', proposed: 'New para' }),
    w: s({ line: 9, withdrawn: true }), same: s({ line: 11, proposed: 'x' }), empty: s({ line: 13, op: 'add', original: '', proposed: '  ' }), old: s({ line: 15, hash: 'h0' }) } } };
  const out = liveSuggestions(docs, { p: 'h1' }).p;
  assert.deepEqual(out.map(x => [x.line, x.op]), [[3, 'edit'], [5, 'delete'], [7, 'add']]);
});

test('buildTree nests by folder or by change type, and filterTree prunes', () => {
  const { buildTree, filterTree, leafOrder } = requireCjs('./doc-set/review-core.js');
  const pages = [
    { slug: 'a', short: 'install/b.md', group: 'NEW' }, { slug: 'b', short: 'install/up/a.md', group: 'UPDATE' },
    { slug: 'c', short: 'index.md', group: 'RESTYLED' }, { slug: 'd', short: 'admin/x.md', group: 'UPDATE' }];
  const zone = buildTree(pages, 'zone');
  assert.deepEqual(zone.map(n => n.type === 'folder' ? n.name : n.slug), ['admin', 'install', 'c']);
  assert.equal(zone[1].count, 2);
  assert.deepEqual(leafOrder(zone), ['d', 'b', 'a', 'c']);
  const change = buildTree(pages, 'change');
  assert.deepEqual(change.map(n => n.group), ['NEW', 'UPDATE', 'RESTYLED']);
  assert.deepEqual(leafOrder(filterTree(zone, p => p.group === 'UPDATE')), ['d', 'b']);
});


test('dashboardStats counts reviews by group and folder, and keeps outdated votes apart', () => {
  const { dashboardStats } = requireCjs('./doc-set/review-core.js');
  const pages = [
    { slug: 'a', short: 'install/a.md', group: 'NEW', hash: 'h1' }, { slug: 'b', short: 'install/b.md', group: 'UPDATE', hash: 'h2' },
    { slug: 'c', short: 'admin/c.md', group: 'UPDATE', hash: 'h3' }, { slug: 'd', short: 'index.md', group: 'RESTYLED', hash: 'h4' }];
  const votes = {
    u1: { pages: { a: { status: 'approved', at: 10, hash: 'h1' }, b: { status: 'changes', at: 20, hash: 'h2' }, c: { status: 'approved', at: 5, hash: 'old' } } },
    u2: { pages: { a: { status: 'approved', at: 30, hash: 'h1' }, d: { status: '', at: 40, hash: 'h4' } } } };
  const live = { b: [{ uid: 'u2', at: 50, line: 1 }, { uid: 'u2', at: 60, line: 2 }] };
  const d = dashboardStats(pages, votes, live);
  assert.deepEqual([d.totals.approved, d.totals.changes, d.totals.stale, d.totals.none], [1, 1, 1, 1]);
  assert.equal(d.totals.suggestions, 2);
  assert.deepEqual([d.byGroup.UPDATE.total, d.byGroup.UPDATE.changes, d.byGroup.UPDATE.stale], [2, 1, 1]);
  assert.deepEqual(d.byZone.map(z => [z.zone, z.total]), [['(top level)', 1], ['admin', 1], ['install', 2]]);
  assert.deepEqual(d.attention.changes.map(x => x.slug), ['b']);
  assert.deepEqual(d.attention.stale.map(x => x.slug), ['c']);
  const u1 = d.reviewers.find(r => r.uid === 'u1'), u2 = d.reviewers.find(r => r.uid === 'u2');
  assert.deepEqual([u1.approved, u1.changes, u1.stale], [1, 1, 1]);
  assert.deepEqual([u2.approved, u2.suggestions, u2.last], [1, 2, 60]);
  assert.equal(d.reviewers[0].uid, 'u2');
  assert.equal(d.activity[0].kind, 'suggestion');
});

test('scorePage ranks by change, reach, consequence and uncertainty; restyled is always P4', () => {
  const { scorePage, boostScope, floorConsequence, bandOf } = requireCjs('./doc-set/review-core.js');
  const top = scorePage({ action: 'NEW', scope: 'product', consequence: 'high', uncertain: 3 });
  assert.equal(top.score, 100);
  assert.equal(top.band, 'P1');
  const restyled = scorePage({ action: 'RESTYLED', scope: 'product', consequence: 'high', uncertain: 9 });
  assert.equal(restyled.band, 'P4');
  assert.equal(bandOf(99, 'RESTYLED'), 'P4');
  // A new edge page ranks below an update to a product-wide page.
  const edgeNew = scorePage({ action: 'NEW', scope: 'edge', consequence: 'low', uncertain: 0 });
  const productUpdate = scorePage({ action: 'UPDATE', changedShare: 0.5, scope: 'product', consequence: 'high', uncertain: 1 });
  assert.ok(productUpdate.score > edgeNew.score);
  assert.equal(edgeNew.band, 'P3');
  assert.equal(boostScope('edge'), 'sub-feature');
  assert.equal(boostScope('product'), 'product');
  assert.equal(floorConsequence('low', 'Export the signing key.', 'task'), 'medium');
  assert.equal(floorConsequence('low', '```\nrun\n```', 'task'), 'medium');
  assert.equal(floorConsequence('low', '```\nrun\n```', 'reference'), 'low');
  assert.equal(floorConsequence('high', 'plain', 'task'), 'high');
});

test('buildTree ranks by band when pages carry one, and falls back to change type without', () => {
  const { buildTree, leafOrder } = requireCjs('./doc-set/review-core.js');
  const pages = [
    { slug: 'a', short: 'x/a.md', group: 'UPDATE', band: 'P2', score: 40, title: 'a' },
    { slug: 'b', short: 'y/b.md', group: 'NEW', band: 'P3', score: 20, title: 'b' },
    { slug: 'c', short: 'x/c.md', group: 'UPDATE', band: 'P2', score: 50, title: 'c' },
    { slug: 'd', short: 'x/d.md', group: 'RESTYLED', band: 'P4', score: 0, title: 'd' },
  ];
  const ranked = buildTree(pages, 'change');
  assert.deepEqual(ranked.map(n => n.group), ['P2', 'P3', 'P4']);
  assert.deepEqual(leafOrder(ranked), ['c', 'a', 'b', 'd']);
  const plain = buildTree(pages.map(({ band, score, ...rest }) => rest), 'change');
  assert.deepEqual(plain.map(n => n.group), ['NEW', 'UPDATE', 'RESTYLED']);
});

test('dashboardStats counts progress by band when pages carry one', () => {
  const { dashboardStats } = requireCjs('./doc-set/review-core.js');
  const d = dashboardStats([{ slug: 'a', short: 'x/a.md', group: 'UPDATE', band: 'P1', hash: 'h' }, { slug: 'b', short: 'x/b.md', group: 'NEW', hash: 'h' }], {}, {});
  assert.equal(d.byGroup.P1.total, 1);
  assert.equal(d.byGroup.NEW.total, 1);
});

test('findProductBlock treats the product id as text, not as a pattern', () => {
  const text = "const products = [\n  {\n    id: 'axb',\n    name: 'X',\n  },\n];\n";
  assert.throws(() => findProductBlock(text, 'a.b'), /not found/);
  assert.throws(() => findProductBlock(text, '.*'), /not found/);
  assert.ok(findProductBlock(text, 'axb').block.includes("id: 'axb'"));
});

test('rewriteSidebar points version-specific paths at the new version and leaves others alone', async () => {
  const { rewriteSidebar } = await import('./doc-set/seed-version.mjs');
  const old = "items: ['threatmanager/3.3/install', 'threatmanager/3_3/x', 'other/3.3/y', 'threatmanager/3.30/z']";
  const out = rewriteSidebar(old, 'threatmanager', '3.3', '3.4');
  assert.match(out, /threatmanager\/3\.4\/install/);
  assert.match(out, /threatmanager\/3_4\/x/);
  assert.match(out, /other\/3\.3\/y/);
  assert.match(out, /threatmanager\/3\.30\/z/);
  assert.equal(rewriteSidebar("sidebar: [{ type: 'autogenerated', dirName: '.' }]", 'threatmanager', '3.3', '3.4'), "sidebar: [{ type: 'autogenerated', dirName: '.' }]");
});

test('a RESTYLE page lands in the restyled group of the author report and the review page', async () => {
  const { groupPages } = await import('./doc-set/author-report.mjs');
  const manifest = { pages: [{ path: 'p/a.md', action: 'RESTYLE' }, { path: 'p/b.md', action: 'RESTYLE' }] };
  const g = groupPages({ manifest, rows: [], diffs: { 'p/a.md': { add: 2, del: 1 }, 'p/b.md': { add: 0, del: 0 } } });
  assert.deepEqual(g.RESTYLED.map(x => x.path), ['p/a.md']);
  assert.deepEqual(g.UNCHANGED.map(x => x.path), ['p/b.md']);

  const { loadEntries } = await import('./doc-set/review-html.mjs');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'docset-'));
  const wt = path.join(dir, 'wt');
  const rel = 'docs/prod/2.0/a.md';
  fs.mkdirSync(path.join(wt, 'docs/prod/2.0'), { recursive: true });
  fs.mkdirSync(path.join(wt, 'docs/prod/1.0'), { recursive: true });
  fs.writeFileSync(path.join(wt, rel), '---\ntitle: A\n---\n\nUse the thing.\n');
  fs.writeFileSync(path.join(wt, 'docs/prod/1.0/a.md'), '---\ntitle: A\n---\n\nThe thing can be used.\n');
  fs.mkdirSync(path.join(dir, 'results'));
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ product: 'prod', version: '2.0', from: '1.0', docsWorktree: wt }));
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify({ pages: [{ path: rel, action: 'RESTYLE', type: 'task', facts: [] }] }));
  fs.writeFileSync(path.join(dir, 'results', 'r.json'), JSON.stringify({ pages: [{ path: rel, status: 'done' }] }));
  const { entries } = loadEntries(dir);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].action, 'RESTYLED');
  assert.equal(entries[0].oldLabel, 'Old (1.0)');
  assert.equal(entries[0].newLabel, 'New (2.0)');
});

test('review page labels use the run versions, and the client builds its review bar without innerHTML and filters stored prefs', async () => {
  const { buildPage } = await import('./doc-set/review-html.mjs');
  const html = buildPage({ title: 't', entries: [], meta: { from: '9.1', version: '9.2' } });
  assert.match(html, /9\.1 text on the left and the drafted 9\.2 text/);
  assert.doesNotMatch(html, /\b3\.3\b|\b3\.4\b/);
  const src = fs.readFileSync(new URL('./doc-set/review-client.js', import.meta.url), 'utf8');
  assert.match(src, /PREF_TYPES/);
  assert.doesNotMatch(src, /\.innerHTML = rvBarHtml/);
});

// ---- align mode (versionless products)
import { execFileSync } from 'child_process';

/** A throwaway git repo with an origin/dev ref, so align code can read "before" text from git. */
function alignRepo(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'align-'));
  const git = (...a) => execFileSync('git', a, { cwd: dir, encoding: 'utf8' }).trim();
  git('init', '-q');
  git('config', 'user.email', 't@example.com');
  git('config', 'user.name', 't');
  for (const [f, text] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, f)), { recursive: true });
    fs.writeFileSync(path.join(dir, f), text);
  }
  git('add', '-A');
  git('commit', '-q', '-m', 'base');
  const sha = git('rev-parse', 'HEAD');
  git('update-ref', 'refs/remotes/origin/dev', sha);
  return { dir, sha, git };
}

test('docsPrefix and shortPath follow the run type', async () => {
  const { docsPrefix, shortPath, runLabel, versionLabels } = await import('./doc-set/docs-paths.mjs');
  const versioned = { product: 'tm', version: '3.4', from: '3.3' };
  const align = { product: '1secure', version: 'current', versionless: true };
  assert.equal(docsPrefix(versioned), 'docs/tm/3.4/');
  assert.equal(docsPrefix(align), 'docs/1secure/');
  assert.equal(shortPath(versioned, 'docs/tm/3.4/install/a.md'), 'install/a.md');
  assert.equal(shortPath(align, 'docs/1secure/install/a.md'), 'install/a.md');
  assert.equal(runLabel(versioned), 'tm 3.3 to 3.4');
  assert.match(runLabel(align), /aligned to the deployed code/);
  assert.equal(versionLabels(versioned).old, 'Old (3.3)');
  assert.equal(versionLabels(align).old, 'Old (origin/dev)');
});

test('readOldText reads the page from git at oldRef in an align run', async () => {
  const { readOldText } = await import('./doc-set/docs-paths.mjs');
  const { dir, sha } = alignRepo({ 'docs/p/a.md': 'old a\n', 'docs/p/old-name.md': 'renamed old\n' });
  fs.writeFileSync(path.join(dir, 'docs/p/a.md'), 'new a\n');
  const meta = { product: 'p', version: 'current', versionless: true, oldRef: sha, docsWorktree: dir };
  assert.equal(readOldText(meta, { path: 'docs/p/a.md', action: 'UPDATE' }), 'old a\n');
  assert.equal(readOldText(meta, { path: 'docs/p/new-name.md', renamedFrom: 'docs/p/old-name.md', action: 'UPDATE' }), 'renamed old\n');
  assert.equal(readOldText(meta, { path: 'docs/p/missing.md', action: 'UPDATE' }), null);
  assert.equal(readOldText(meta, { path: 'docs/p/a.md', action: 'NEW' }), null);
});

test('loadEntries on an align run diffs each page against origin/dev', async () => {
  const { loadEntries } = await import('./doc-set/review-html.mjs');
  const { dir: repo, sha } = alignRepo({ 'docs/p/a.md': '---\ntitle: A\n---\n\nThe thing can be used.\n' });
  fs.writeFileSync(path.join(repo, 'docs/p/a.md'), '---\ntitle: A\n---\n\nUse the thing.\n');
  fs.writeFileSync(path.join(repo, 'docs/p/b.md'), '---\ntitle: B\n---\n\nA brand new page.\n');
  const run = fs.mkdtempSync(path.join(os.tmpdir(), 'alignrun-'));
  fs.mkdirSync(path.join(run, 'results'));
  fs.writeFileSync(path.join(run, 'meta.json'), JSON.stringify({ product: 'p', version: 'current', versionless: true, oldRef: sha, docsWorktree: repo }));
  fs.writeFileSync(path.join(run, 'manifest.json'), JSON.stringify({ pages: [
    { path: 'docs/p/a.md', action: 'UPDATE', type: 'task', facts: ['F1'] },
    { path: 'docs/p/b.md', action: 'NEW', type: 'task', facts: ['F2'] },
  ] }));
  fs.writeFileSync(path.join(run, 'results', 'r.json'), JSON.stringify({ pages: [{ path: 'docs/p/a.md', status: 'done' }, { path: 'docs/p/b.md', status: 'done' }] }));
  const { entries } = loadEntries(run);
  const a = entries.find(e => e.short === 'a.md');
  const b = entries.find(e => e.short === 'b.md');
  assert.ok(a.add > 0 && a.del > 0, 'the update shows a real diff, not an empty one');
  assert.equal(a.oldLabel, 'Old (origin/dev)');
  assert.equal(a.newLabel, 'New (aligned to code)');
  assert.equal(b.oldText, null);
  assert.equal(b.action, 'NEW');
});

test('align-init refuses a versioned product and sets up a versionless one', async () => {
  const { isVersionless, run } = await import('./doc-set/align-init.mjs');
  assert.equal(isVersionless("versions: [\n      {\n        version: 'current',\n        label: 'current',\n        isLatest: true,\n"), true);
  assert.equal(isVersionless("versions: [\n      {\n        version: '2.0',\n        label: '2.0',\n        isLatest: true,\n      },\n      {\n        version: '1.0',\n        label: '1.0',\n        isLatest: false,\n"), false);
  const products = [
    "module.exports = [",
    "  {\n    id: 'solo',\n    name: 'Solo',\n    path: 'docs/solo',\n    versions: [\n      {\n        version: 'current',\n        label: 'current',\n        isLatest: true,\n        sidebarFile: './sidebars/solo/current.js',\n      },\n    ],\n  },",
    "  {\n    id: 'multi',\n    name: 'Multi',\n    path: 'docs/multi',\n    versions: [\n      {\n        version: '2.0',\n        label: '2.0',\n        isLatest: true,\n      },\n      {\n        version: '1.0',\n        label: '1.0',\n        isLatest: false,\n      },\n    ],\n  },",
    "];\n",
  ].join('\n');
  const { dir, sha } = alignRepo({ 'src/config/products.js': products, 'docs/solo/a.md': 'a\n', 'docs/multi/2.0/a.md': 'a\n' });
  const quiet = fn => { const log = console.log, err = console.error; console.log = console.error = () => {}; try { return fn(); } finally { console.log = log; console.error = err; } };
  assert.equal(quiet(() => run(['multi', '--root', dir])), 1);
  assert.equal(quiet(() => run(['solo', '--root', dir])), 0, 'a dry run succeeds and creates nothing');
  assert.equal(fs.existsSync(path.join(dir, '.doc-set')), false);
  const wt = path.join(os.tmpdir(), `align-wt-${Date.now()}`);
  assert.equal(quiet(() => run(['solo', '--root', dir, '--worktree', wt, '--apply'])), 0);
  assert.ok(fs.existsSync(path.join(wt, 'docs/solo/a.md')));
  const meta = JSON.parse(fs.readFileSync(path.join(dir, '.doc-set/solo-align/meta.json'), 'utf8'));
  assert.deepEqual([meta.versionless, meta.docsPrefix, meta.oldRef, meta.docsWorktree], [true, 'docs/solo/', sha, wt]);
  assert.equal(quiet(() => run(['solo', '--root', dir, '--worktree', wt, '--apply'])), 1, 'refuses to overwrite an existing worktree');
});

test('progress counts an align run as set up once oldRef is recorded', async () => {
  const { phaseStatus } = await import('./doc-set/progress.mjs');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'prog-'));
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ product: 'p', versionless: true, oldRef: 'abc1234', refSha: 'def5678abc' }));
  fs.writeFileSync(path.join(dir, 'facts.json'), JSON.stringify({ facts: [] }));
  fs.writeFileSync(path.join(dir, 'claims.json'), JSON.stringify({ claims: [] }));
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify({ pages: [] }));
  const seed = phaseStatus(dir).find(p => /Seed/.test(p.name));
  assert.equal(seed.status, 'done');
  assert.match(seed.detail, /set up/);
});

test('the doc-set workflow script parses as JavaScript', () => {
  // A stray apostrophe in a single-quoted string once broke it, and `node --check` on a .js file did not notice.
  const src = fs.readFileSync(new URL('../.claude/workflows/doc-set.js', import.meta.url), 'utf8');
  // The Workflow tool runs the body inside an async function, so check it the same way.
  const check = text => {
    const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'wf-')), 'doc-set.mjs');
    fs.writeFileSync(tmp, `async function workflow() {\n${text.replace(/^export const meta/m, 'const meta')}\n}\n`);
    execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' });
  };
  assert.doesNotThrow(() => check(src));
  assert.throws(() => check(src.replace('pages folder>', "pages' folder>")), 'the check catches a stray apostrophe');
});

test('the report generators create the output folder when it does not exist', async () => {
  const { run } = await import('./doc-set/review-package.mjs');
  const { dir: repo, sha } = alignRepo({ 'docs/p/a.md': '---\ntitle: A\n---\n\nOld text.\n' });
  fs.writeFileSync(path.join(repo, 'docs/p/a.md'), '---\ntitle: A\n---\n\nNew text.\n');
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'outdir-'));
  fs.mkdirSync(path.join(runDir, 'results'));
  fs.writeFileSync(path.join(runDir, 'meta.json'), JSON.stringify({ product: 'p', version: 'current', versionless: true, oldRef: sha, docsWorktree: repo, refSha: 'abc1234567', baselineSha: '' }));
  fs.writeFileSync(path.join(runDir, 'facts.json'), JSON.stringify({ facts: [{ id: 'F1', statement: 's', cite: 'x:1', area: 'a', status: 'unchanged', internal: false }] }));
  fs.writeFileSync(path.join(runDir, 'claims.json'), JSON.stringify({ claims: [] }));
  fs.writeFileSync(path.join(runDir, 'manifest.json'), JSON.stringify({ pages: [{ path: 'docs/p/a.md', action: 'UPDATE', type: 'task', zone: 'z', facts: ['F1'] }], dropped: [] }));
  fs.writeFileSync(path.join(runDir, 'results', 'r.json'), JSON.stringify({ pages: [{ path: 'docs/p/a.md', status: 'done', factsCovered: ['F1'], todos: [], untraced: [] }] }));
  const out = path.join(runDir, 'review', 'nested', 'page.html');
  const log = console.log; console.log = () => {};
  try { assert.equal(run([runDir, out, '--title', 'T']), 0); } finally { console.log = log; }
  assert.ok(fs.existsSync(out));
  assert.ok(fs.existsSync(`${out}.capabilities.json`));
});

test('mergeAreas keeps existing fact ids when an area is added or the merge is rerun', async () => {
  const { mergeAreas } = await import('./doc-set/merge-facts.mjs');
  const fact = (statement, area) => ({ statement, cite: `x.cs:${statement.length}`, area, status: 'unchanged', internal: false });
  const first = mergeAreas([{ area: 'b', facts: [fact('one', 'b'), fact('two', 'b')] }]);
  assert.deepEqual(first.map(f => f.id), ['F001', 'F002']);
  // An area that sorts before 'b' is added: the old facts keep F001 and F002.
  const second = mergeAreas([{ area: 'a', facts: [fact('three', 'a')] }, { area: 'b', facts: [fact('one', 'b'), fact('two', 'b')] }], first);
  assert.equal(second.find(f => f.statement === 'one').id, 'F001');
  assert.equal(second.find(f => f.statement === 'two').id, 'F002');
  assert.equal(second.find(f => f.statement === 'three').id, 'F003');
  // Rerunning changes nothing, and a dropped fact's id is not reused.
  const third = mergeAreas([{ area: 'a', facts: [fact('three', 'a')] }, { area: 'b', facts: [fact('two', 'b'), fact('four', 'b')] }], second);
  assert.equal(third.find(f => f.statement === 'four').id, 'F004');
  assert.deepEqual(mergeAreas([{ area: 'b', facts: [fact('one', 'b')] }]).map(f => f.id), ['F001']);
});
