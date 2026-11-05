#!/usr/bin/env node
/**
 * author-report.mjs — build the report for the page author from a run's state.
 *
 *   node scripts/doc-set/author-report.mjs <run-dir> <out.html> [--title "Page title"]
 *
 * The report is organized by what happened to each page: new, rewritten, updated, restyled only,
 * or unchanged. It reads meta.json, manifest.json, facts.json, claims.json, results/*.json and, when
 * present, scope.json, plan.json, lintpass/result-*.json, lintpass/integrity-keep.json (the content
 * integrity check on the pages that were not given new content), and lintpass/final-recheck.txt (the last
 * style check of every page). The output is an HTML fragment ready to publish as an Artifact.
 */
import fs from 'fs';
import path from 'path';
import { readJson, readResults } from './manifest.mjs';
import { buildCoverage } from './coverage.mjs';
import { isAlign, readOldText, runLabel, shortPath } from './docs-paths.mjs';
import { alignRows, stats } from './review-html.mjs';
import { BASE_CSS, FONT_LINK } from './page-style.mjs';

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const short = (p, meta) => shortPath(meta, p);
const clip = (s, n = 190) => (String(s).length > n ? String(s).slice(0, n - 1) + '…' : String(s));

export const GROUP_DEFS = [
  { key: 'NEW', title: 'New pages', blurb: 'No page existed in the previous version. Each was drafted from the code facts, and a verifier traced every statement to a fact. These need a careful read.' },
  { key: 'REWRITE', title: 'Rewritten pages', blurb: 'Most of the previous text was replaced because it no longer described the product.' },
  { key: 'UPDATE', title: 'Updated pages', blurb: 'The previous page is kept. Statements that the new code changes were edited, and new facts were added. Some old sentences were also reworded to pass the style check.' },
  { key: 'RESTYLED', title: 'Restyled only', blurb: 'Wording and typo fixes with no change in content.' },
];

/** What the author must look at, from manifest pages and their results. Pure; no file access. */
export function collectAttention({ manifest, results, facts }) {
  const seen = new Map();
  for (const r of results) for (const p of r.pages || []) seen.set(p.path, p);
  const live = new Set((facts.facts || []).filter(f => !f.internal && !f.duplicateOf && !f.outOfScope && f.status !== 'removed').map(f => f.id));
  const rows = [];
  for (const page of manifest.pages) {
    if (page.action === 'KEEP' || page.action === 'RETIRE') continue;
    const res = seen.get(page.path);
    const status = res ? res.status : 'not started';
    const covered = new Set(res?.factsCovered || []);
    const assigned = (page.facts || []).filter(id => live.has(id));
    rows.push({
      path: page.path, action: page.action, status, title: page.title || '', reason: page.reason || '', type: page.type || '',
      assigned: assigned.length, covered: assigned.filter(id => covered.has(id)).length,
      missing: status === 'done' ? assigned.filter(id => !covered.has(id)) : [],
      todos: res?.todos || [], untraced: res?.untraced || [], reworded: res?.preexistingFindings || 0,
      note: res?.note || '', renamedFrom: page.renamedFrom || '', quality: typeof res?.checks?.quality === 'string' ? res.checks.quality : '',
    });
  }
  const need = [];
  for (const r of rows) {
    if (r.status === 'failed') need.push({ path: r.path, kind: 'Failed', text: r.untraced.length ? `${r.untraced.length} sentence(s) the verifier could not trace to a fact.` : r.quality.startsWith('fail') ? `Style check: ${r.quality}` : 'The drafter did not finish this page.' });
    for (const t of r.todos) need.push({ path: r.path, kind: 'TODO on the page', text: t });
    for (const u of r.untraced) if (r.status === 'done') need.push({ path: r.path, kind: 'Untraced', text: u });
    if (r.note) need.push({ path: r.path, kind: 'Note', text: r.note });
    if (r.missing.length) need.push({ path: r.path, kind: 'Assigned but not stated', text: r.missing.join(', ') });
    if (r.reworded) need.push({ path: r.path, kind: 'Old wording changed', text: `${r.reworded} old sentence(s) were reworded only to pass the style check.` });
    if (r.renamedFrom) need.push({ path: r.path, kind: 'Renamed', text: `Was ${r.renamedFrom}. Update inbound links and add a redirect.` });
  }
  return { rows, need };
}

/** Split the manifest pages into the four groups the author reads, plus the unchanged ones. `diffs` maps a path to { add, del, oldLines, newLines }. */
export function groupPages({ manifest, rows, diffs }) {
  const byPath = new Map(rows.map(r => [r.path, r]));
  const groups = { NEW: [], REWRITE: [], UPDATE: [], RESTYLED: [], UNCHANGED: [], UNVERIFIABLE: [] };
  for (const p of manifest.pages) {
    if (p.action === 'RETIRE') continue;
    if (p.action === 'KEEP' && p.unverifiable) {
      // A page the code cannot verify is left exactly as it is, and the report says why.
      groups.UNVERIFIABLE.push({ path: p.path, reason: p.unverifiable });
    } else if (p.action === 'KEEP' || p.action === 'RESTYLE') {
      const d = diffs[p.path] || { add: 0, del: 0 };
      (d.add + d.del > 0 ? groups.RESTYLED : groups.UNCHANGED).push({ path: p.path, ...d });
    } else if (groups[p.action]) groups[p.action].push({ ...(byPath.get(p.path) || { path: p.path }), ...(diffs[p.path] || {}) });
  }
  for (const k of Object.keys(groups)) groups[k].sort((a, b) => a.path.localeCompare(b.path));
  return groups;
}

/** Parse the table output of scripts/quality/check.mjs: { pages, pass, fail, failing: [{ path, findings, rules }] }. */
export function parseRecheck(text) {
  const failing = [];
  let cur = null, pass = 0, fail = 0;
  for (const line of String(text).split('\n')) {
    const m = line.match(/^(PASS|FAIL)\s+(\S+)/);
    if (m) {
      if (m[1] === 'PASS') { pass++; cur = null; } else { fail++; cur = { path: m[2], findings: 0, rules: {} }; failing.push(cur); }
      continue;
    }
    const f = line.match(/^\s+(?:\d+|-)\s+([a-zA-Z]+:[a-z0-9-]+)/);
    if (cur && f) { cur.findings++; cur.rules[f[1]] = (cur.rules[f[1]] || 0) + 1; }
  }
  return { pages: pass + fail, pass, fail, failing };
}

export const REPORT_CSS = `
.status{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:0 0 24px}
.status>div{background:var(--surface);border:1px solid var(--rule);border-radius:6px;padding:12px 16px;min-width:0}
.status b{display:block;font-family:var(--font-display);font-size:1.6rem;line-height:1.15}
.status span{color:var(--muted);font-size:.86rem}
.tag.ok{background:var(--ok-soft);color:var(--ok)}.tag.warn{background:var(--warn-soft);color:var(--warn)}.tag.bad{background:var(--bad-soft);color:var(--bad)}
h2{margin:44px 0 12px;padding-top:20px;border-top:1px solid var(--rule)}h3{font-size:1.05rem;margin:22px 0 8px}
ul{margin:0 0 14px;padding-left:20px}td ul{margin:0;padding-left:16px}ul.flags{padding-left:16px;font-size:.88rem}ul.flags li{margin-bottom:3px}
ul.guide li{margin-bottom:6px}ul.cols{columns:2;column-gap:24px;font-size:.88rem}
.none{color:var(--muted)}
.note-line{border-left:3px solid var(--warn);background:var(--warn-soft);padding:8px 12px;max-width:72ch}details{margin:0 0 20px}summary{cursor:pointer}
.ok-line{border-left:3px solid var(--ok);background:var(--ok-soft);padding:8px 12px;max-width:72ch}
.bad-line{border-left:3px solid var(--bad);background:var(--bad-soft);padding:8px 12px;max-width:72ch}
`;

export const slugOf = (p, meta) => short(p, meta).replace(/[^a-z0-9]+/gi, '-').replace(/-+$/, '');

/** Everything after the page title. opts.reviewLinks adds a Compare link and a review badge to each page row. */
export function reportBody({ title, meta, cov, rows, need, claims, scope, lint, plan, proposals, recheck, actions, groups, integrity, recheckNote }, opts = {}) {
  const rv = p => (opts.reviewLinks ? `<td><a href="#${slugOf(p, meta)}">Compare</a> <span class="rvbadge" data-slug="${slugOf(p, meta)}">Not reviewed</span></td>` : '');
  const H = arr => (opts.reviewLinks ? [...arr, 'Review'] : arr);
  const table = (head, body, cls = '') => `<div class="tablewrap"><table class="${cls}"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;
  const code = p => `<code>${esc(short(p, meta))}</code>`;
  const byPathNeed = new Map();
  for (const n of need) { if (!byPathNeed.has(n.path)) byPathNeed.set(n.path, []); byPathNeed.get(n.path).push(n); }
  const flags = p => {
    const list = (byPathNeed.get(p) || []).filter(n => n.kind !== 'Old wording changed' && n.kind !== 'Renamed');
    return list.length ? `<ul class="flags">${list.map(n => `<li><strong>${esc(n.kind)}:</strong> ${esc(clip(n.text))}</li>`).join('')}</ul>` : '<span class="none">None</span>';
  };
  const g = groups;
  const count = k => g[k].length;
  const statusStrip = `<div class="status">
  <div><b>${count('NEW')}</b><span>new pages to review</span></div>
  <div><b>${count('REWRITE')}</b><span>rewritten pages</span></div>
  <div><b>${count('UPDATE')}</b><span>updated pages (content changed)</span></div>
  <div><b>${count('RESTYLED')}</b><span>restyled only (no content change)</span></div>
  <div><b>${count('UNCHANGED')}</b><span>unchanged pages</span></div>
  ${count('UNVERIFIABLE') ? `<div><b>${count('UNVERIFIABLE')}</b><span>left untouched: the code cannot verify them</span></div>` : ''}
</div>`;
  const guide = `<ul class="guide">
  <li><strong>New:</strong> ${esc(GROUP_DEFS[0].blurb)}</li>
  <li><strong>Rewritten:</strong> ${esc(GROUP_DEFS[1].blurb)}</li>
  <li><strong>Updated:</strong> ${esc(GROUP_DEFS[2].blurb)}</li>
  <li><strong>Restyled only:</strong> Wording and typo fixes. Facts, numbers, links, images, code and labels are unchanged, and a check confirms it.</li>
  <li><strong>Unchanged:</strong> ${isAlign(meta) ? 'Identical to the page on origin/dev.' : `Identical to the previous version apart from links that now point at ${esc(meta.version)}.`}</li>
</ul>`;
  const newRows = g.NEW.map(r => `<tr><td>${code(r.path)}<br><span class="meta">${esc(r.title)}</span></td><td>${esc(r.type)}</td><td class="num">${r.covered}/${r.assigned}</td><td class="num">${r.newLines ?? ''}</td><td>${flags(r.path)}</td>${rv(r.path)}</tr>`).join('');
  const rewriteRows = g.REWRITE.map(r => `<tr><td>${code(r.path)}${r.renamedFrom ? `<br><span class="meta">Renamed from <code>${esc(short(r.renamedFrom, meta))}</code></span>` : ''}</td><td class="num">${r.oldLines ?? ''} to ${r.newLines ?? ''}</td><td>${esc(clip(r.reason || '', 220))}</td><td class="num">${r.covered}/${r.assigned}</td><td>${flags(r.path)}</td>${rv(r.path)}</tr>`).join('');
  const updateRows = g.UPDATE.map(r => `<tr><td>${code(r.path)}</td><td class="num">${r.covered}/${r.assigned}</td><td class="num">+${r.add ?? 0} / &minus;${r.del ?? 0}</td><td class="num">${r.reworded || 0}</td><td>${flags(r.path)}</td>${rv(r.path)}</tr>`).join('');
  const restyleRows = g.RESTYLED.map(r => `<tr><td>${code(r.path)}</td><td class="num">${r.add + r.del ? Math.max(r.add, r.del) : 0}</td>${rv(r.path)}</tr>`).join('');
  const integrityLine = integrity
    ? (integrity.ok ? `<p class="ok-line">Content-integrity check: passed on all ${integrity.pages} pages that were not given new content. Facts, numbers, links, images, inline code, bold labels and admonitions are the same as in the previous version.</p>` : `<p class="bad-line">Content-integrity check: ${integrity.violations} violation(s). See the run folder.</p>`)
    : '';
  const unchangedList = g.UNCHANGED.length ? `<details><summary>${g.UNCHANGED.length} unchanged pages</summary><ul class="cols">${g.UNCHANGED.map(r => `<li>${code(r.path)}</li>`).join('')}</ul></details>` : '';

  const unverifiableBlock = count('UNVERIFIABLE') ? `<h2>Left untouched (${count('UNVERIFIABLE')}): pages the code cannot verify</h2>
<p>These pages describe things the product's code repository does not contain: setup on the customer's own systems, the on-premises agent and installer, and security and privacy policy statements. doc-set checks every page against the code, so it cannot confirm or correct them. By the writer's decision they were left exactly as they are, with no wording or style changes. They are listed so a reviewer who knows the subject can check them, and so that nobody assumes they were reviewed against the code.</p>
${table(['Page', 'Why it was not changed'], g.UNVERIFIABLE.map(r => `<tr><td>${code(r.path)}</td><td>${esc(r.reason)}</td></tr>`).join(''))}` : '';

  const attention = need.filter(n => !['Renamed'].includes(n.kind));
  const needRows = attention.map(n => `<tr><td>${code(n.path)}</td><td>${esc(n.kind)}</td><td>${esc(clip(n.text, 260))}</td></tr>`).join('');
  const diffRows = claims.claims.filter(c => (c.differences || []).length).map(c => `<tr><td>${esc(c.key || c.id)}</td><td>${esc(c.summary || '')}</td><td><ul>${c.differences.map(d => `<li>${esc(d)}</li>`).join('')}</ul></td></tr>`).join('');
  const claimStatus = {};
  for (const c of claims.claims) claimStatus[c.status] = (claimStatus[c.status] || 0) + 1;
  const flagged = claims.claims.filter(c => ['jira-only', 'not-shipped', 'contradicted', 'cancelled'].includes(c.status)).map(c => `<tr><td>${esc(c.key || c.id)}</td><td><span class="tag warn">${esc(c.status)}</span></td><td>${esc(c.summary || '')}${c.note ? `<br><span class="meta">${esc(c.note)}</span>` : ''}</td></tr>`).join('');
  const uncoveredByArea = {};
  for (const f of cov.uncovered) uncoveredByArea[f.area] = (uncoveredByArea[f.area] || 0) + 1;
  const topUncovered = Object.entries(uncoveredByArea).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const decisions = scope?.decisions ? Object.entries(scope.decisions).map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${esc(v)}</li>`).join('') : '';
  const lintBlock = lint ? `<p>Restyle passes: ${lint.typos} suspected typos listed, ${lint.unfixed} flagged sentences left as written, ${lint.suppressions} Vale suppression(s).</p>` : '';
  const proposalBlock = proposals.length ? `<h3>Structural changes</h3><ul>${proposals.map(p => `<li><strong>${esc(p.kind)}:</strong> ${esc((p.paths || []).join(', '))}. ${esc(p.recommendation || '')}</li>`).join('')}</ul>` : '';
  const recheckBlock = recheck ? `<h2>Style check on every page</h2>
<p>Final recheck of all ${recheck.pages} pages in the new version: ${recheck.pass} pass and ${recheck.fail} fail. Dale is model-based, so a page can pass on one run and fail on another. These pages failed on the last run.</p>
${recheckNote ? `<p class="note-line">${esc(recheckNote)}</p>` : ''}
${recheck.failing.length ? table(['Page', 'Group', 'Findings', 'Rules'], recheck.failing.map(f => `<tr><td>${code(f.path)}</td><td>${esc(actions?.[f.path] || '')}</td><td class="num">${f.findings}</td><td>${esc(Object.entries(f.rules).map(([k, v]) => `${k} ${v}`).join(', '))}</td></tr>`).join('')) : '<p class="none">Every page passes.</p>'}` : '';

  return `<p class="meta">${esc(runLabel(meta))}. Code: <code>${esc(String(meta.refSha).slice(0, 9))}</code> against merge base <code>${esc(String(meta.baselineSha).slice(0, 9))}</code>. The side-by-side comparison shows the old and new text of every page below.</p>
${statusStrip}
${guide}

<h2>New pages (${count('NEW')}): review these first</h2>
<p>${esc(GROUP_DEFS[0].blurb)} Check each statement against the product, and resolve any TODO marker on the page.</p>
${count('NEW') ? table(H(['Page', 'Type', 'Facts stated', 'Lines', 'Open flags']), newRows) : '<p class="none">No new pages.</p>'}

<h2>Rewritten pages (${count('REWRITE')})</h2>
<p>${esc(GROUP_DEFS[1].blurb)}</p>
${count('REWRITE') ? table(H(['Page', 'Lines (old to new)', 'Why', 'Facts stated', 'Open flags']), rewriteRows) : '<p class="none">No rewritten pages.</p>'}
${proposalBlock}

<h2>Updated pages (${count('UPDATE')}): content changed</h2>
<p>${esc(GROUP_DEFS[2].blurb)} "Facts stated" is how many of the facts assigned to a page it states. "Old sentences reworded" counts sentences changed only to pass the style check.</p>
${count('UPDATE') ? table(H(['Page', 'Facts stated', 'Lines added / removed', 'Old sentences reworded', 'Open flags']), updateRows) : '<p class="none">No updated pages.</p>'}

<h2>Restyled only (${count('RESTYLED')}): no content change</h2>
<p>These pages kept their facts and structure. Only sentences that failed the style check were reworded, and typos were corrected. The comparison shows each change.</p>
${integrityLine}
${lintBlock}
${count('RESTYLED') ? table(H(['Page', 'Lines changed']), restyleRows) : '<p class="none">No restyled pages.</p>'}
${unchangedList}
${unverifiableBlock}

<h2>Open items for the author</h2>
<p>Everything that was flagged during drafting, in one list: TODO markers left on pages, sentences the verifier could not trace, notes where a fix was made by hand, and facts assigned to a page that the page does not state.</p>
${attention.length ? table(['Page', 'What', 'Detail'], needRows) : '<p class="none">Nothing is flagged on the drafted pages.</p>'}

<h2>Where Jira and the code disagree</h2>
<p>The code decides what shipped. Ticket details that the code contradicts are listed so you can check the spec against the product.</p>
${diffRows ? table(['Ticket', 'Title', 'Differences'], diffRows) : '<p class="none">No ticket details were recorded as contradicted.</p>'}
<h3>Tickets that are not documented</h3>
<p>Claims: ${Object.entries(claimStatus).map(([k, v]) => `${v} ${esc(k)}`).join(', ')}.</p>
${flagged ? table(['Ticket', 'Status', 'Detail'], flagged) : '<p class="none">Every claim is confirmed or internal.</p>'}

${recheckBlock}

<h2>Coverage and scope</h2>
<p>${cov.covered} of ${cov.total} in-scope customer-visible facts appear on a drafted or kept page.${cov.uncovered.length ? ` ${cov.uncovered.length} are not yet stated anywhere${topUncovered.length ? ', mostly in: ' + topUncovered.map(([a, n]) => `${esc(a)} (${n})`).join(', ') : ''}.` : ''}</p>
${decisions ? `<h3>Scope decisions</h3><ul>${decisions}</ul>` : ''}
<p>${cov.internals.length} facts are internal and ${cov.dropped.length} were dropped. They never reach a page.</p>
`;
}

export function buildAuthorPage(args, opts = {}) {
  return `<title>${esc(args.title)}</title>
<meta name="claude:viewport-fit-sides" content="cover">
${FONT_LINK}
<style>${BASE_CSS}
${REPORT_CSS}</style>
<main>
<h1>${esc(args.title)}</h1>
${reportBody(args, opts)}</main>
`;
}

/** Read the run state and assemble everything reportBody needs. */
export function loadReportArgs(dir, title) {
  const meta = readJson(dir, 'meta.json');
  const manifest = readJson(dir, 'manifest.json');
  const facts = readJson(dir, 'facts.json');
  const claims = readJson(dir, 'claims.json', { claims: [] });
  const results = readResults(dir);
  const { rows, need } = collectAttention({ manifest, results, facts });
  const cov = buildCoverage({ facts, claims, manifest, results });
  const scope = readJson(dir, 'scope.json', null);
  const plan = readJson(dir, 'plan.json', { proposals: [] });
  // Line-level change counts against the previous version, with its links rewritten so only real edits count.
  const diffs = {};
  for (const p of manifest.pages) {
    if (p.action === 'RETIRE') continue;
    const file = path.join(meta.docsWorktree, p.path);
    if (!fs.existsSync(file)) continue;
    const newText = fs.readFileSync(file, 'utf8');
    const oldText = readOldText(meta, p);
    const st = stats(alignRows(oldText, newText));
    diffs[p.path] = { add: st.add, del: st.del, oldLines: oldText === null ? null : oldText.split('\n').length, newLines: newText.split('\n').length };
  }
  const groups = groupPages({ manifest, rows, diffs });
  let lint = null;
  const lintDir = path.join(dir, 'lintpass');
  if (fs.existsSync(lintDir)) {
    const files = fs.readdirSync(lintDir).filter(f => /^result-.+\.json$/.test(f));
    if (files.length) {
      lint = { typos: 0, unfixed: 0, suppressions: 0 };
      for (const f of files) {
        const r = JSON.parse(fs.readFileSync(path.join(lintDir, f), 'utf8'));
        lint.typos += (r.typos || []).length;
        for (const p of r.pages || []) { lint.unfixed += (p.unfixed || []).length; lint.suppressions += (p.suppressions || []).length; }
      }
    }
  }
  const rc = path.join(lintDir, 'final-recheck.txt');
  const recheck = fs.existsSync(rc) ? parseRecheck(fs.readFileSync(rc, 'utf8')) : null;
  const ik = path.join(lintDir, 'integrity-keep.json');
  let integrity = null;
  if (fs.existsSync(ik)) {
    const j = JSON.parse(fs.readFileSync(ik, 'utf8'));
    integrity = { ok: !!j.ok, violations: (j.violations || []).length, pages: groups.RESTYLED.length + groups.UNCHANGED.length };
  }
  const actions = Object.fromEntries(manifest.pages.map(p => [p.path, p.action === 'KEEP' ? 'Restyled or unchanged' : p.action]));
  const nf = path.join(lintDir, 'recheck-note.txt');
  const recheckNote = fs.existsSync(nf) ? fs.readFileSync(nf, 'utf8').trim() : '';
  const args = { title: title || `${meta.product} ${meta.version} author report`, meta, cov, rows, need, claims, scope, lint, plan, proposals: plan.proposals || [], recheck, actions, groups, integrity, recheckNote };
  return { args, groups, need };
}

export function run(argv) {
  const ti = argv.indexOf('--title');
  const title = ti >= 0 ? argv[ti + 1] : null;
  const [dir, out] = argv.filter((a, i) => !a.startsWith('--') && i !== ti + 1);
  if (!dir || !out) {
    console.error('Usage: node scripts/doc-set/author-report.mjs <run-dir> <out.html> [--title "..."]');
    return 2;
  }
  const { args, groups, need } = loadReportArgs(dir, title);
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, buildAuthorPage(args));
  console.log(`Wrote the author report to ${out}: new ${groups.NEW.length}, rewritten ${groups.REWRITE.length}, updated ${groups.UPDATE.length}, restyled only ${groups.RESTYLED.length}, unchanged ${groups.UNCHANGED.length}; ${need.length} open items`);
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
