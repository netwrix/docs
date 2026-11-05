#!/usr/bin/env node
/**
 * review-html.mjs — build a side-by-side review page of old vs new for every drafted non-KEEP page.
 *
 *   node scripts/doc-set/review-html.mjs <run-dir> <out.html> [--title "Page title"]
 *
 * Old text is the previous version's page (or `renamedFrom`), with its /docs/<id>/<from>/ links
 * rewritten to the new version so only real edits show. NEW pages show only the new text.
 * The output is an HTML fragment (title, style, body) ready to publish as an Artifact.
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { readJson, readResults } from './manifest.mjs';
import { readOldText, shortPath, versionLabels } from './docs-paths.mjs';
import { BASE_CSS, FONT_LINK } from './page-style.mjs';

/** Longest-common-subsequence diff of two arrays; returns [{op:'eq'|'del'|'ins', a?, b?}]. */
export function lcsDiff(a, b) {
  const n = a.length, m = b.length;
  const t = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) t[i][j] = a[i] === b[j] ? t[i + 1][j + 1] + 1 : Math.max(t[i + 1][j], t[i][j + 1]);
  const out = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { out.push({ op: 'eq', a: a[i], b: b[j] }); i++; j++; }
    else if (t[i + 1][j] >= t[i][j + 1]) out.push({ op: 'del', a: a[i++] });
    else out.push({ op: 'ins', b: b[j++] });
  }
  while (i < n) out.push({ op: 'del', a: a[i++] });
  while (j < m) out.push({ op: 'ins', b: b[j++] });
  return out;
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Word-level marks for a changed line pair. Returns [oldHtml, newHtml]. */
export function wordMarks(oldLine, newLine) {
  const tok = s => s.split(/(\s+)/).filter(x => x !== '');
  const d = lcsDiff(tok(oldLine), tok(newLine));
  let l = '', r = '';
  for (const x of d) {
    if (x.op === 'eq') { l += esc(x.a); r += esc(x.b); }
    else if (x.op === 'del') l += /^\s+$/.test(x.a) ? esc(x.a) : `<del>${esc(x.a)}</del>`;
    else r += /^\s+$/.test(x.b) ? esc(x.b) : `<ins>${esc(x.b)}</ins>`;
  }
  return [l, r];
}

/**
 * Align old and new lines into display rows. Adjacent delete and insert runs are paired line by line
 * as "chg" rows. Row: { kind: 'eq'|'chg'|'del'|'ins', oldNo, newNo, oldHtml, newHtml }.
 */
export function alignRows(oldText, newText) {
  const A = oldText === null ? [] : oldText.split('\n');
  const B = newText.split('\n');
  const ops = lcsDiff(A, B);
  const rows = [];
  let oi = 0, ni = 0, k = 0;
  while (k < ops.length) {
    if (ops[k].op === 'eq') { rows.push({ kind: 'eq', oldNo: ++oi, newNo: ++ni, oldHtml: esc(ops[k].a), newHtml: esc(ops[k].b) }); k++; continue; }
    const dels = [], inss = [];
    while (k < ops.length && ops[k].op !== 'eq') { (ops[k].op === 'del' ? dels : inss).push(ops[k]); k++; }
    const pairs = Math.min(dels.length, inss.length);
    for (let p = 0; p < pairs; p++) {
      const [l, r] = wordMarks(dels[p].a, inss[p].b);
      rows.push({ kind: 'chg', oldNo: ++oi, newNo: ++ni, oldHtml: l, newHtml: r });
    }
    for (let p = pairs; p < dels.length; p++) rows.push({ kind: 'del', oldNo: ++oi, newNo: null, oldHtml: `<del>${esc(dels[p].a)}</del>`, newHtml: '' });
    for (let p = pairs; p < inss.length; p++) rows.push({ kind: 'ins', oldNo: null, newNo: ++ni, oldHtml: '', newHtml: `<ins>${esc(inss[p].b)}</ins>` });
  }
  return rows;
}

/** Keep `ctx` unchanged rows around each change; collapse longer unchanged runs. */
export function collapse(rows, ctx = 3) {
  const keep = new Array(rows.length).fill(false);
  rows.forEach((r, i) => { if (r.kind !== 'eq') for (let j = Math.max(0, i - ctx); j <= Math.min(rows.length - 1, i + ctx); j++) keep[j] = true; });
  const out = [];
  for (let i = 0; i < rows.length; i++) {
    if (keep[i]) { out.push(rows[i]); continue; }
    let j = i;
    while (j < rows.length && !keep[j]) j++;
    out.push({ kind: 'skip', count: j - i });
    i = j - 1;
  }
  return out;
}

export function stats(rows) {
  let add = 0, del = 0;
  for (const r of rows) { if (r.kind === 'chg') { add++; del++; } else if (r.kind === 'ins') add++; else if (r.kind === 'del') del++; }
  return { add, del };
}

export const GROUPS = [
  { key: 'NEW', title: 'New pages', blurb: 'No page existed in the previous version. Drafted from the code facts. Review these first.' },
  { key: 'REWRITE', title: 'Rewritten pages', blurb: 'Most of the previous text was replaced because it no longer described the product.' },
  { key: 'UPDATE', title: 'Updated pages', blurb: 'The previous page is kept. Statements the new code changes were edited and new facts were added.' },
  { key: 'RESTYLED', title: 'Restyled only', blurb: 'Wording and typo fixes with no content change. The integrity check confirms that facts, numbers, links, images, code and labels are unchanged.' },
];

const rowHtml = r => {
  if (r.kind === 'skip') return `<div class="skip">${r.count} unchanged line${r.count === 1 ? '' : 's'}</div>`;
  const cell = (no, html, side) => `<div class="c ${side}"><span class="ln">${no ?? ''}</span><span class="tx">${html || '&nbsp;'}</span></div>`;
  return `<div class="row ${r.kind}">${cell(r.oldNo, r.oldHtml, 'o')}${cell(r.newNo, r.newHtml, 'n')}</div>`;
};

export const CMP_CSS = `
.tag.UPDATE{background:var(--warn-soft);color:var(--warn)}
.tag.REWRITE{background:var(--chg-bg);color:var(--warn)}
.tag.NEW{background:var(--new-soft);color:var(--new)}
.tag.RESTYLED{background:var(--accent-soft);color:var(--accent)}
tr.grp td{background:var(--accent-soft);font-weight:500;font-size:.88rem}
h3{font-family:var(--font-display);font-size:1.05rem;margin:0 0 6px;overflow-wrap:anywhere}
section{margin:0 0 44px;scroll-margin-top:12px}
.sbs{overflow-x:auto;border:1px solid var(--rule);border-radius:6px;background:var(--surface)}
.grid{min-width:760px}
.head,.row{display:grid;grid-template-columns:1fr 1fr}
.head div{font-size:.76rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600;padding:8px 12px;border-bottom:1px solid var(--rule)}
.head div+div,.c.n{border-left:1px solid var(--rule)}
.c{display:flex;gap:10px;padding:2px 12px;min-width:0;font-family:var(--font-mono);font-size:.8rem;line-height:1.5}
.ln{flex:0 0 2.2em;text-align:right;color:var(--muted);user-select:none;opacity:.7}
.tx{white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}
.row.chg .o,.row.del .o{background:var(--del-bg)}
.row.chg .n,.row.ins .n{background:var(--ins-bg)}
.row.chg.sep{background:var(--chg-bg)}
del{background:var(--del-strong);text-decoration:none;border-radius:2px}
ins{background:var(--ins-strong);text-decoration:none;border-radius:2px}
.skip{padding:4px 12px;text-align:center;font-size:.8rem;color:var(--muted);background:var(--accent-soft);border-block:1px solid var(--rule)}
.none{color:var(--muted);font-style:italic;font-family:var(--font-body)}
`;

/** The summary table body and the page sections. opts.reviewBars adds a review bar to every page and a review column to the summary. */
export function comparisonBody(entries, opts = {}) {
  const rb = !!opts.reviewBars;
  const summaryRows = (list) => list.map(e => `<tr><td><a href="#${e.id}">${esc(e.short)}</a></td><td><span class="tag ${e.action}">${e.action}</span></td><td class="num">${e.oldLines ?? 'new'}</td><td class="num">${e.newLines}</td><td class="num">+${e.add} / &minus;${e.del}</td><td class="num">${e.action === 'RESTYLED' ? '' : `${e.covered}/${e.assigned}`}</td>${rb ? `<td><span class="rvbadge" data-slug="${e.id}">Not reviewed</span></td>` : ''}</tr>`).join('');
  const reviewBar = e => `<div class="rv" data-slug="${e.id}"><span class="rv-state">Not reviewed</span><span class="rv-who"></span><span class="rv-btns"><button type="button" data-act="approved">Approve</button><button type="button" data-act="changes">Request changes</button><button type="button" data-act="clear">Clear my review</button><button type="button" data-act="comment">Comment on this page</button></span></div>`;
  const sectionOf = e => `<section id="${e.id}" data-slug="${e.id}" data-group="${e.action}" data-state="none"><h3>${esc(e.short)} <span class="tag ${e.action}">${GROUPS.find(g => g.key === e.action).title.replace(/ pages$/, '')}</span></h3><p class="meta">${e.renamed ? `Renamed from <code>${esc(e.renamed)}</code>. ` : ''}${e.action === 'RESTYLED' ? `Wording and typo fixes only. ` : `${e.assigned} assigned facts, ${e.covered} stated. `}${e.add} lines added, ${e.del} removed.</p>${rb ? reviewBar(e) : ''}<div class="sbs"><div class="grid"><div class="head"><div>${e.oldLabel}</div><div>${esc(e.newLabel || 'New')}</div></div>${e.rows.map(rowHtml).join('')}</div></div></section>`;
  const sections = GROUPS.map(g => { const list = entries.filter(e => e.action === g.key); return list.length ? `<h2 id="group-${g.key}">${g.title} (${list.length})</h2><p>${g.blurb}</p>${list.map(sectionOf).join('')}` : ''; }).join('');
  const summary = GROUPS.map(g => { const list = entries.filter(e => e.action === g.key); return list.length ? `<tr class="grp"><td colspan="${rb ? 7 : 6}"><a href="#group-${g.key}">${g.title} (${list.length})</a>: ${g.blurb}</td></tr>${summaryRows(list)}` : ''; }).join('');
  return { summary, sections, pages: entries.map(e => ({ id: e.id, html: sectionOf(e) })) };
}

/** The one-line description of a page's changes, shown under its title. */
export function metaText(e) {
  return `${e.renamed ? `Renamed from ${e.renamed}. ` : ''}${e.action === 'RESTYLED' ? 'Wording and typo fixes only. ' : `${e.assigned} assigned facts, ${e.covered} stated. `}${e.add} lines added, ${e.del} removed.`;
}

export function buildPage({ title, entries, meta = {} }) {
  const css = BASE_CSS + CMP_CSS;
  const { summary, sections } = comparisonBody(entries);
  return `<title>${esc(title)}</title>
<meta name="claude:viewport-fit-sides" content="cover">
${FONT_LINK}
<style>${css}</style>
<main>
<h1>${esc(title)}</h1>
<p class="meta">Each page shows the ${esc(meta.versionless ? 'current' : meta.from || 'previous')} text on the left and the drafted ${esc(meta.versionless ? 'code-aligned' : meta.version || 'new')} text on the right, as Markdown source. Changed lines are shaded and the changed words are marked. Long unchanged runs are collapsed to three lines of context. ${meta.versionless ? 'The old text is the page on origin/dev.' : `Links in the old text are rewritten to ${esc(meta.version || 'the new version')} so that only real edits show.`}</p>
<div class="tablewrap"><table><thead><tr><th>Page</th><th>Action</th><th class="num">Old lines</th><th class="num">New lines</th><th class="num">Change</th><th class="num">Facts stated</th></tr></thead><tbody>${summary}</tbody></table></div>
${sections}
</main>
`;
}

/** Read the run state and build one comparison entry per changed page. */
export function loadEntries(dir) {
  const meta = readJson(dir, 'meta.json');
  const manifest = readJson(dir, 'manifest.json');
  const done = new Map();
  for (const r of readResults(dir)) for (const p of r.pages || []) if (p.status === 'done') done.set(p.path, p);
  const labels = versionLabels(meta);
  const entries = [];
  for (const p of manifest.pages) {
    if (p.action === 'RETIRE') continue;
    const restyled = p.action === 'KEEP' || p.action === 'RESTYLE';
    if (p.action !== 'KEEP' && !done.has(p.path)) continue;
    const newText = fs.readFileSync(path.join(meta.docsWorktree, p.path), 'utf8');
    const oldText = readOldText(meta, p);
    const rows = alignRows(oldText, newText);
    const st = stats(rows);
    const short = shortPath(meta, p.path);
    const res = done.get(p.path) || {};
    if (restyled && st.add + st.del === 0) continue;
    entries.push({
      id: short.replace(/[^a-z0-9]+/gi, '-').replace(/-+$/, ''), short, oldText, newText, title: (newText.match(/^---\n(?:[\s\S]*?\n)?title:\s*"?(.*?)"?\s*\n/) || [])[1] || '', hash: crypto.createHash('sha256').update(newText).digest('hex').slice(0, 12), action: restyled ? 'RESTYLED' : p.action,
      renamed: p.renamedFrom ? shortPath(meta, p.renamedFrom) : null,
      oldLines: oldText === null ? null : oldText.split('\n').length, newLines: newText.split('\n').length,
      add: st.add, del: st.del, assigned: restyled ? 0 : (p.facts || []).length, covered: (res.factsCovered || []).length,
      newLabel: labels.new,
      oldLabel: oldText === null ? labels.oldMissing : `${labels.old}${p.renamedFrom ? ' ' + esc(path.basename(p.renamedFrom)) : ''}`,
      rows: oldText === null ? rows : collapse(rows),
    });
  }
  const order = { NEW: 0, REWRITE: 1, UPDATE: 2, RESTYLED: 3 };
  const prio = readJson(dir, 'priority.json', null);
  if (prio) for (const e of entries) {
    const r = prio.pages && prio.pages[e.short];
    if (r) { e.band = r.band; e.score = r.score; e.why = (r.reasons || []).join(' · '); }
  }
  const bandRank = { P1: 0, P2: 1, P3: 2, P4: 3 };
  entries.sort((x, y) => (x.band ? bandRank[x.band] : 0) - (y.band ? bandRank[y.band] : 0) || (y.score || 0) - (x.score || 0) || order[x.action] - order[y.action] || x.short.localeCompare(y.short));
  return { meta, entries };
}

export function run(argv) {
  const ti = argv.indexOf('--title');
  const title = ti >= 0 ? argv[ti + 1] : null;
  const [dir, out] = argv.filter((a, i) => !a.startsWith('--') && i !== ti + 1);
  if (!dir || !out) {
    console.error('Usage: node scripts/doc-set/review-html.mjs <run-dir> <out.html> [--title "..."]');
    return 2;
  }
  const { meta, entries } = loadEntries(dir);
  fs.writeFileSync(out, buildPage({ title: title || `${meta.product} ${meta.version} side by side`, entries, meta }));
  console.log(`Wrote ${entries.length} page comparisons to ${out}`);
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
