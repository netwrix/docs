import { test } from 'node:test';
import assert from 'node:assert/strict';
import { summarize } from './lib/log-summary.mjs';

test('clean build', () => {
  const s = summarize('[SUCCESS] Generated static files', { exitCode: 0, durationMs: 90000, product: 'pingcastle' });
  assert.match(s, /Result: SUCCESS/);
  assert.match(s, /Duration: 90s/);
  });

test('broken links and anchors are listed with source and target', () => {
  const log = [
    'Exhaustive list of all broken links found:',
    '- On source page path = /docs/a/page:',
    '   -> linking to /docs/a/missing',
    'Broken anchors found:',
    '- Broken anchor on source page path = /docs/b/page:',
    '   -> linking to /docs/b/other#nope',
  ].join('\n');
  const s = summarize(log, { exitCode: 1 });
  assert.match(s, /Broken links \(1\)[\s\S]*\/docs\/a\/page -> \/docs\/a\/missing/);
  assert.match(s, /Broken anchors \(1\)[\s\S]*\/docs\/b\/page -> \/docs\/b\/other#nope/);
});

test('mdx error names the file', () => {
  const log = 'Error: MDX compilation failed for file "/x/docs/a.md"\nCause: Unexpected token\nDetails: line 4';
  assert.match(summarize(log, { exitCode: 1 }), /MDX errors \(1\)[\s\S]*docs\/a\.md/);
});

test('out of memory gives the fix', () => {
  const s = summarize('FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory', { exitCode: 134 });
  assert.match(s, /narrow the scope/);
});

test('single-product build ignores links from other products', () => {
  const log = [
    'Exhaustive list of all broken links found:',
    '- On source page path = /docs/kb/auditor/x:',
    '   -> linking to /docs/pingcastle/y',
    '- On source page path = /docs/pingcastle/4_0/p:',
    '   -> linking to /docs/pingcastle/4_0/gone',
  ].join('\n');
  const s = summarize(log, { exitCode: 0, product: 'pingcastle' });
  assert.match(s, /Broken links \(1\)[\s\S]*4_0\/p -> .*gone/);
  assert.match(s, /Ignored 1 broken link/);
});
