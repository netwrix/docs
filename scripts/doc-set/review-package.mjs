#!/usr/bin/env node
/**
 * review-package.mjs — build ONE review page for a run: the author report and the side-by-side
 * comparison together, with shared review controls for the team.
 *
 *   node scripts/doc-set/review-package.mjs <run-dir> <out.html> [--title "Page title"]
 *
 * Reviewers can approve or request changes per page (shared status, with names), comment on a page,
 * a line, or selected text (the platform's own comment threads), and filter by review state.
 * Writes <out.html> and <out>.capabilities.json (the `capabilities` to pass when publishing the page).
 * The review data lives in the published artifact, not in the run folder:
 *   - status:   db collection `votes`, one document per reviewer: { pages: { <slug>: { status, at } } }
 *   - comments: the artifact's comment threads
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BASE_CSS, FONT_LINK } from './page-style.mjs';
import { loadEntries, comparisonBody, metaText, CMP_CSS } from './review-html.mjs';
import { loadReportArgs, reportBody, REPORT_CSS } from './author-report.mjs';
import { runLabel } from './docs-paths.mjs';

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Prefix every top-level rule of a plain stylesheet (no at-rules) with a scope selector. */
export function scopeCss(css, scope) {
  return css.split('}').map(chunk => {
    const i = chunk.indexOf('{');
    if (i < 0) return '';
    const sel = chunk.slice(0, i).trim();
    if (!sel) return '';
    const scoped = sel.split(',').map(s => `${scope} ${s.trim()}`).join(',');
    return `${scoped}{${chunk.slice(i + 1)}}`;
  }).join('\n');
}

export const CAPABILITIES = {
  db: { rules: [{ path: 'votes', read: 'view', write: 'owner' }, { path: 'votes/{self}', write: 'interact' }, { path: 'suggestions', read: 'view', write: 'owner' }, { path: 'suggestions/{self}', write: 'interact' }] },
  user: { scopes: ['profile'] },
  comments: { composer_only: true },
};

const PKG_CSS = `
body{padding-block:16px 56px}
.app{display:grid;grid-template-columns:minmax(260px,330px) minmax(0,1fr);gap:28px;max-width:1560px;margin-inline:auto;align-items:start}
.app>main{max-width:none;min-width:0;margin:0}
.side{position:sticky;top:16px;height:calc(100vh - 32px);display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--rule);border-radius:10px;overflow:hidden}
.side-head{padding:14px 14px 10px;border-bottom:1px solid var(--rule);display:flex;flex-direction:column;gap:10px}
.brand{font-family:var(--font-display);font-weight:800;font-size:1.05rem;line-height:1.25;color:var(--fg);text-decoration:none}
.brand:hover{color:var(--accent)}
.sb-reviewed{margin:6px 0 0;font-size:.82rem}
#sb-q{font:inherit;font-size:.9rem;padding:7px 10px;border:1px solid var(--rule);border-radius:6px;background:var(--bg);color:var(--fg);width:100%;box-sizing:border-box}
#sb-state{font:inherit;font-size:.85rem;padding:5px 8px;border:1px solid var(--rule);border-radius:6px;background:var(--bg);color:var(--fg);min-width:0}
.sb-filters{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.seg{display:inline-flex;border:1px solid var(--rule);border-radius:6px;overflow:hidden}
.seg button{border:0;border-radius:0;background:var(--bg);padding:4px 11px}
.seg button+button{border-left:1px solid var(--rule)}
.seg button[aria-pressed=true]{background:var(--accent);color:var(--on-accent)}
#sb-count{font-size:.8rem;margin:0}
.tree{flex:1;min-height:0;overflow:auto;padding:8px 8px 16px;overscroll-behavior:contain}
.side>.rv-note{padding:6px 14px 10px;margin:0;font-size:.8rem;border-top:1px solid var(--rule)}
.side>.rv-note:empty{display:none}
.pad{padding:8px}
.fold>summary{display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:6px;cursor:pointer;list-style:none;font-size:.88rem;font-weight:600}
.fold>summary::-webkit-details-marker{display:none}
.fold>summary::before{content:"";flex:0 0 7px;height:7px;border-right:2px solid var(--muted);border-bottom:2px solid var(--muted);transform:rotate(-45deg);transition:transform .12s}
.fold[open]>summary::before{transform:rotate(45deg)}
.fold>summary:hover{background:var(--accent-soft)}
.fname{flex:1;min-width:0;overflow-wrap:anywhere}
.fcount{color:var(--muted);font-size:.76rem;font-weight:500;font-variant-numeric:tabular-nums}
.kids{margin-left:10px;padding-left:8px;border-left:1px solid var(--rule)}
.leaf{display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:6px;text-decoration:none;color:var(--fg);font-size:.86rem;line-height:1.3}
.leaf:hover{background:var(--accent-soft)}
.leaf[aria-current]{background:var(--accent-soft);box-shadow:inset 3px 0 0 var(--accent);font-weight:600}
.leaf .lt{flex:1;min-width:0;overflow-wrap:anywhere}
.dot{flex:0 0 10px;height:10px;border-radius:50%;border:2px solid var(--muted);box-sizing:border-box}
.dot[data-state=approved]{background:var(--ok);border-color:var(--ok)}
.dot[data-state=changes]{background:var(--warn);border-color:var(--warn)}
.dot[data-state=rejected]{background:var(--bad,#c0392b);border-color:var(--bad,#c0392b)}
.dot[data-state=stale]{background:var(--new);border-color:var(--new)}
.tg{font-size:.68rem;font-weight:600;padding:0 6px;border-radius:8px;white-space:nowrap}
.tg-NEW,.tag.NEW{background:var(--new-soft);color:var(--new)}
.tg-REWRITE,.tag.REWRITE{background:var(--chg-bg);color:var(--warn)}
.tg-UPDATE,.tag.UPDATE{background:var(--warn-soft);color:var(--warn)}
.tg-RESTYLED,.tag.RESTYLED{background:var(--accent-soft);color:var(--accent)}
.tag.band-P1{background:var(--chg-bg);color:var(--warn);font-weight:600}.tag.band-P2{background:var(--warn-soft);color:var(--warn)}.tag.band-P3,.tag.band-P4{background:var(--accent-soft);color:var(--accent)}
.why{margin:.25rem 0 .5rem;font-size:.9rem;opacity:.8}
.sgn{font-size:.68rem;font-weight:600;padding:0 6px;border-radius:8px;background:var(--accent);color:var(--on-accent);white-space:nowrap}
.side-toggle{display:none}
.app button,.panel button{font:inherit;font-size:.85rem;padding:3px 11px;border-radius:5px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);cursor:pointer}
.app button:hover:not(:disabled){border-color:var(--accent)}
.app button:disabled{opacity:.5;cursor:not-allowed}
button:focus-visible,a:focus-visible,summary:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.panel{background:var(--surface);border:1px solid var(--rule);border-radius:8px;padding:14px 16px;margin:0 0 24px}
.panel h2{margin:0 0 8px;padding:0;border:0;font-size:1.1rem}
.panel p{margin:0 0 8px}
.bar2{display:flex;height:8px;border-radius:4px;overflow:hidden;background:var(--rule)}
.bar2 i{display:block;height:100%}
.bar2 .ap{background:var(--ok)}
.bar2 .ch{background:var(--warn)}
.bar2 .st{background:var(--new)}
.rvbadge{display:inline-block;font-size:.76rem;font-weight:600;padding:1px 8px;border-radius:10px;background:var(--rule);color:var(--muted);white-space:nowrap}
.rvbadge[data-state=approved]{background:var(--ok-soft);color:var(--ok)}
.rvbadge[data-state=changes]{background:var(--warn-soft);color:var(--warn)}
.rvbadge[data-state=rejected],.rv-state[data-state=rejected]{background:var(--bad,#c0392b);color:#fff}
.rvbadge[data-state=stale]{background:var(--new-soft);color:var(--new)}
.rv{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin:0 0 14px;padding:8px 12px;border:1px solid var(--rule);border-radius:8px;background:var(--surface)}
.rv button[aria-pressed=true]{border-color:var(--accent);background:var(--accent-soft)}
.rv-state{font-weight:600;font-size:.88rem}
.rv-state[data-state=approved]{color:var(--ok)}
.rv-state[data-state=changes]{color:var(--warn)}
.rv-state[data-state=stale]{color:var(--new)}
.rv-who{color:var(--muted);font-size:.84rem;flex:1 1 200px}
.rv-btns{display:flex;flex-wrap:wrap;gap:8px}
.no-comments .rv button[data-act=comment],.no-comments .hint-comment,.no-comments .bt-b-comment{display:none}
.no-review .rv button[data-act=approved],.no-review .rv button[data-act=changes],.no-review .rv button[data-act=rejected],.no-review .rv button[data-act=clear]{display:none}
.no-edit .blk-tools .bt-b-edit,.no-edit .blk-tools .bt-b-del,.no-edit .blk-tools .bt-b-add,.no-edit .sg-edit{display:none}
.how{margin:0 0 24px}
.how li{margin-bottom:6px}
.pg-head{margin:0 0 14px}
.pg-top{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between;margin-bottom:6px}
.crumbs{font-family:var(--font-mono);font-size:.78rem;color:var(--muted);overflow-wrap:anywhere;min-width:0}
.pg-nav{display:flex;gap:8px}
.pg-head h2{font-size:1.6rem;margin:0 0 10px;font-weight:800}
.pg-row{display:flex;flex-wrap:wrap;gap:10px 16px;align-items:center}
.allchk{font-size:.86rem;color:var(--muted);display:inline-flex;align-items:center;gap:4px}
.rsec{min-width:0}
.rsec>.meta{margin:0 0 10px}
.doc.single{max-width:860px}
.bhead{position:sticky;top:0;z-index:5;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0 20px;background:var(--bg);border-bottom:1px solid var(--rule);margin-bottom:6px}
.bhead>div{font-size:.74rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);padding:8px 14px}
.brow{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0 20px}
.brow.single{grid-template-columns:minmax(0,1fr)}
.bcell{position:relative;min-width:0;margin:2px 0;padding:6px 14px;border-left:3px solid transparent;border-radius:6px}
.bo.empty,.bn.empty{background:repeating-linear-gradient(135deg,transparent 0 7px,var(--rule) 7px 8px);opacity:.45}
.bo.blk-del{background:var(--del-bg);border-left-color:var(--bad)}
.bo.blk-oldchg{border-left-color:var(--bad)}
.md-doc .bo del{background:var(--del-strong);text-decoration:none;border-radius:2px;padding:0 1px}
.brow-eq>.bo{opacity:.9}
.blk{position:relative;margin:2px 0;padding:6px 14px 6px 14px;border-left:3px solid transparent;border-radius:6px}
.blk:hover,.blk:focus-within,.blk.editing{background:var(--surface);border-left-color:var(--rule)}
.blk-ins{background:var(--ins-bg);border-left-color:var(--ok)}
.blk-ins.blk-cont,.bo.blk-del.blk-cont{margin-top:0;padding-top:2px}
.blk-chg{border-left-color:var(--warn)}
.blk-del{background:var(--del-bg);border-left-color:var(--bad)}
.blk-ins:hover,.blk-ins:focus-within{background:var(--ins-bg);border-left-color:var(--ok)}
.blk-chg:hover,.blk-chg:focus-within{border-left-color:var(--warn)}
.blk-del:hover{background:var(--del-bg);border-left-color:var(--bad)}
.blk-flag{font-size:.66rem;text-transform:uppercase;letter-spacing:.07em;font-weight:700;color:var(--muted);margin-bottom:2px}
.blk-ins>.blk-flag{color:var(--ok)}
.blk-chg>.blk-flag{color:var(--warn)}
.blk-del>.blk-flag{color:var(--bad)}
.struck{text-decoration:line-through;opacity:.85}
.blk-tools{position:absolute;top:4px;right:8px;display:flex;gap:6px;opacity:0;pointer-events:none;background:var(--surface);padding:2px;border-radius:6px;box-shadow:0 1px 0 var(--rule)}
.blk:hover>.blk-tools,.blk:focus-within>.blk-tools{opacity:1;pointer-events:auto}
.blk.editing>.blk-tools{display:none}
@media (hover:none){.blk-tools{opacity:1;pointer-events:auto;position:static;margin-top:4px;box-shadow:none;padding:0}}
.md{font-size:1rem;line-height:1.65;overflow-wrap:anywhere}
.md>:first-child{margin-top:0}
.md>:last-child{margin-bottom:0}
.md p{margin:0 0 .6em;max-width:none}
.md h1,.md h2,.md h3,.md h4,.md h5,.md h6{font-family:var(--font-display);line-height:1.25;margin:.2em 0 .4em;font-weight:800;border:0;padding:0}
.md h1{font-size:1.75rem}
.md h2{font-size:1.35rem}
.md h3{font-size:1.15rem}
.md h4,.md h5,.md h6{font-size:1rem}
.md ul,.md ol{margin:0 0 .5em;padding-left:1.4em}
.md li{margin:.15em 0}
.md li>p{margin:0 0 .3em}
.md pre{font-family:var(--font-mono);font-size:.84rem;background:var(--accent-soft);padding:10px 12px;border-radius:6px;overflow-x:auto;margin:0 0 .6em}
.md pre code{background:none;padding:0;font-size:inherit}
.md blockquote{margin:0 0 .6em;padding:2px 14px;border-left:3px solid var(--rule);color:var(--muted)}
.md table{display:block;max-width:100%;overflow-x:auto;border-collapse:collapse;font-size:.92rem;margin:0 0 .6em}
.md th,.md td{border:1px solid var(--rule);padding:6px 10px;text-align:left;vertical-align:top}
.md th{background:var(--accent-soft);font-size:.8rem;text-transform:none;letter-spacing:0;color:var(--fg)}
.md-doc ins,.sg ins,.blk-form ins{background:var(--ins-strong);text-decoration:none;border-radius:2px;padding:0 1px}
.md-doc del,.sg del,.blk-form del{background:var(--del-strong);text-decoration:line-through;border-radius:2px;padding:0 1px}
.md .xl{color:var(--accent);text-decoration:underline dotted}
.md .imgph{display:inline-block;border:1px dashed var(--rule);border-radius:4px;padding:1px 8px;color:var(--muted);font-size:.84rem}
.md .todo{display:inline-block;background:var(--warn-soft);color:var(--warn);border:1px dashed var(--warn);border-radius:4px;padding:0 7px;font-family:var(--font-mono);font-size:.82rem}
.md .todo.cm{opacity:.7}
.md-frontmatter{background:var(--surface);border:1px solid var(--rule);border-radius:6px;padding:8px 12px}
.fm-t{font-size:.7rem;text-transform:uppercase;letter-spacing:.07em;font-weight:700;color:var(--muted);margin-bottom:4px}
.fm{display:grid;grid-template-columns:max-content 1fr;gap:2px 14px;margin:0;font-size:.86rem}
.fm dt{color:var(--muted);font-family:var(--font-mono)}
.fm dd{margin:0}
.adm{border-left:4px solid var(--new);background:var(--new-soft);border-radius:6px;padding:8px 12px;margin:0 0 .6em}
.adm-t{font-weight:700;font-size:.85rem;margin-bottom:2px}
.adm-warning,.adm-caution{border-left-color:var(--warn);background:var(--warn-soft)}
.adm-danger{border-left-color:var(--bad);background:var(--bad-soft)}
.adm-tip,.adm-success{border-left-color:var(--ok);background:var(--ok-soft)}
.skipbar{display:block;width:100%;margin:6px 0;padding:5px 8px;border:1px dashed var(--rule);background:transparent;color:var(--muted);font-size:.82rem}
.sg{margin-top:8px;padding:8px 12px;border:1px dashed var(--accent);border-radius:8px;background:var(--accent-soft)}
.sg-who{font-size:.76rem;color:var(--muted);margin-bottom:4px}
.sg-body.raw{font-family:var(--font-mono);font-size:.8rem;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere}
.sg>button{margin-top:6px}
.sg-form{display:flex;flex-direction:column;gap:6px;padding:8px 12px;margin-top:8px;border:1px solid var(--rule);border-radius:8px;background:var(--surface)}
.sg-form textarea{font-family:var(--font-mono);font-size:.82rem;line-height:1.5;padding:8px;border:1px solid var(--rule);border-radius:6px;background:var(--bg);color:var(--fg);width:100%;box-sizing:border-box;resize:vertical}
.blk-preview{padding:8px 10px;border:1px solid var(--rule);border-radius:6px;background:var(--bg)}
.form-btns{display:flex;flex-wrap:wrap;gap:8px}
.form-btns button:first-child,.sg-form>button:first-of-type{background:var(--accent);color:var(--on-accent);border-color:var(--accent)}
.cmp .row{position:relative}
.cmp .row>.sg,.cmp .row>.sg-form{grid-column:1/-1;margin:0;border-radius:0;border-width:1px 0 0}
.sg-edit{position:absolute;right:8px;top:2px;font-size:.72rem!important;padding:0 8px!important;opacity:0}
.cmp .row:hover .sg-edit,.sg-edit:focus-visible{opacity:1}
@media (hover:none){.sg-edit{opacity:1}}
.cmp .c.n .ln{cursor:pointer}
.cmp .c.n .ln:hover{opacity:1;color:var(--accent);text-decoration:underline}
.sb-nav{display:flex;gap:6px}
.sb-nav a{flex:1;text-align:center;padding:5px 8px;border:1px solid var(--rule);border-radius:6px;text-decoration:none;color:var(--fg);font-size:.86rem;font-weight:600;background:var(--bg)}
.sb-nav a:hover{border-color:var(--accent)}
.sb-nav a[aria-current]{background:var(--accent);color:var(--on-accent);border-color:var(--accent)}
.livebar{display:flex;align-items:center;gap:8px;margin:0 0 16px}
.livebar::before{content:"";flex:0 0 9px;height:9px;border-radius:50%;background:var(--ok)}
.livebar[data-live=off]::before{background:var(--muted)}
.dash{display:flex;flex-direction:column;gap:20px}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.tile{background:var(--surface);border:1px solid var(--rule);border-radius:8px;padding:12px 14px;min-width:0}
.tl{display:flex;align-items:center;gap:7px;font-size:.8rem;font-weight:600;color:var(--muted)}
.tv{font-family:var(--font-display);font-weight:800;font-size:2rem;line-height:1.15;font-variant-numeric:tabular-nums}
.ts{font-size:.8rem;color:var(--muted)}
.swatch{display:inline-block;width:10px;height:10px;border-radius:3px;flex:0 0 10px}
.st-approved{background:var(--ok)}
.st-changes{background:var(--warn)}
.st-rejected{background:var(--bad,#c0392b)}
.st-stale{background:var(--new)}
.st-none{background:var(--rule)}
.legend{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:.84rem}
.legend .lg{display:inline-flex;align-items:center;gap:6px}
.dgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:20px}
.dpanel{margin:0}
.dpanel h3{font-size:.95rem;margin:16px 0 6px}
.drow{display:grid;grid-template-columns:minmax(120px,38%) minmax(0,1fr) auto;gap:12px;align-items:center;width:100%;text-align:left;padding:5px 6px!important;border:0!important;border-radius:6px!important;background:transparent!important}
.drow:hover{background:var(--accent-soft)!important}
.dl{font-size:.88rem;overflow-wrap:anywhere}
.dn{font-size:.8rem;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap;min-width:5.2em;text-align:right}
.sbar{display:flex;gap:2px;height:10px;border-radius:5px;overflow:hidden;background:var(--rule)}
.sbar i{display:block;min-width:4px;height:100%;border-radius:2px}
.alist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;font-size:.9rem}
.alist .meta{margin-left:4px}
.rep h2{font-family:var(--font-display)}
.app code,.rep li,.rep p,.rep td{overflow-wrap:anywhere}
.rep .tablewrap td code{white-space:normal}
@media (max-width:1200px){
  .bhead{display:none}
  .brow{grid-template-columns:minmax(0,1fr);gap:0}
  .bo.empty,.bn.empty{display:none}
  .brow-eq>.bo{display:none}
  .brow>.bo::before{content:"Old";display:block;font-size:.66rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);margin-bottom:2px}
  .brow-chg>.bn::before{content:"New";display:block;font-size:.66rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);margin-bottom:2px}
}
@media (max-width:900px){
  .app{grid-template-columns:minmax(0,1fr)}
  .side{position:fixed;inset:0 auto 0 0;height:100%;width:min(88vw,340px);z-index:30;border-radius:0 10px 10px 0;transform:translateX(-104%);transition:transform .18s;padding-left:env(safe-area-inset-left,0px)}
  body.side-open .side{transform:none;box-shadow:0 0 0 100vmax rgba(26,21,54,.45)}
  .side-toggle{display:block;position:fixed;left:max(16px,env(safe-area-inset-left,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));z-index:20;background:var(--accent)!important;color:var(--on-accent)!important;border:0!important;padding:9px 18px!important;border-radius:22px!important;font-weight:600}
  .blk{padding-inline:8px}
}
@media (prefers-reduced-motion:reduce){.side,.fold>summary::before{transition:none}}
`;

function pageMeta(e) { return metaText(e); }

export function buildPackage({ title, meta, entries, reportArgs }) {
  const css = [BASE_CSS, scopeCss(REPORT_CSS, '.rep'), scopeCss(CMP_CSS, '.cmp'), PKG_CSS].join('\n');
  const { summary, pages } = comparisonBody(entries, { reviewBars: true });
  const data = entries.map(e => ({ slug: e.id, short: e.short, title: e.title, group: e.action, band: e.band, score: e.score, why: e.why, hash: e.hash, old: e.oldText, new: e.newText, meta: pageMeta(e), oldLabel: e.oldLabel.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'), newLabel: e.newLabel || `New (${meta.version})` }));
  const here = path.dirname(fileURLToPath(import.meta.url));
  const script = ['review-core.js', 'review-client.js'].map(f => fs.readFileSync(path.join(here, f), 'utf8')).join('\n');
  const total = entries.length;
  const templates = pages.map(p => `<template id="t-${p.id}">${p.html}</template>`).join('\n');
  return `<title>${esc(title)}</title>
<meta name="claude:viewport-fit-sides" content="cover">
${FONT_LINK}
<style>${css}</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js" integrity="sha512-xeUh+KxNyTufZOje++oQHstlMQ8/rpyzPuM+gjMFYK3z5ILJGE7l2NvYL+XfliKURMpBIKKp1XoPN/qswlSMFA==" crossorigin="anonymous"></script>
<div class="app">
<aside class="side" id="side" aria-label="Pages">
<div class="side-head">
<a class="brand" href="#overview">${esc(title)}</a>
<nav class="sb-nav" aria-label="Pages overview"><a href="#overview" data-nav="overview">Overview</a><a href="#dashboard" data-nav="dashboard">Dashboard</a></nav>
<div><div class="bar2" role="img" aria-label="Review progress"><i class="rv-bar-ap ap" style="width:0%"></i><i class="rv-bar-ch ch" style="width:0%"></i><i class="rv-bar-st st" style="width:0%"></i></div><p class="sb-reviewed meta">0 of ${total} reviewed</p></div>
<input id="sb-q" type="search" placeholder="Find a page" aria-label="Find a page" autocomplete="off">
<div class="sb-filters"><select id="sb-state" aria-label="Filter by review state"><option value="all">All pages</option><option value="none">Not reviewed</option><option value="changes">Changes requested</option><option value="rejected">Rejected</option><option value="approved">Approved</option><option value="stale">Changed since review</option></select>
<div class="seg" id="sb-mode" role="group" aria-label="Order pages by"><button type="button" data-mode="change" aria-pressed="true">Priority</button><button type="button" data-mode="zone" aria-pressed="false">Folders</button></div></div>
<p id="sb-count" class="meta">${total} pages</p>
</div>
<nav id="tree" class="tree" aria-label="Pages"></nav>
<p class="rv-note meta"></p>
</aside>
<main id="pane"></main>
</div>
<button type="button" id="side-toggle" class="side-toggle">Pages</button>
<template id="tpl-overview">
<h1>${esc(title)}</h1>
<p class="meta">${esc(runLabel(meta))}. ${total} pages changed. Everyone with access sees the same review status, comments, and suggested edits.</p>
<section id="progress" class="panel" aria-live="polite">
<h2>Review progress</h2>
<p class="rv-summary">${total} pages to review. Nobody has recorded a review yet.</p>
<div class="bar2" role="img" aria-label="Review progress"><i class="rv-bar-ap ap" style="width:0%"></i><i class="rv-bar-ch ch" style="width:0%"></i><i class="rv-bar-st st" style="width:0%"></i></div>
<p class="rv-sg-count meta"></p>
<p class="rv-note meta"></p>
</section>
<div class="how">
<h2 style="margin-top:0">How to review</h2>
<ol>
<li>Pick a page in the sidebar. <strong>Priority</strong> ranks the pages: new pages first, then rewritten, updated, and style-fix-only pages. Use <strong>Folders</strong> to browse by the docs structure instead. Search by name, or filter by review state.</li>
<li>The <strong>Rendered</strong> view shows the page as readers will see it, with the old text on the left and the new text on the right. Added words are green, removed words are red, and a bar marks each changed block. Use <strong>Show the whole page</strong> to read the unchanged blocks too. The <strong>Markdown</strong> view shows the old and new source side by side.</li>
<li>Use <strong>Approve</strong> or <strong>Request changes</strong> on each page you review. Use <strong>Reject</strong> when a new, rewritten, or updated page shouldn't ship: the author proposes removing it from the PR (a new page is dropped, a rewritten or updated page goes back to its old text). Add a comment saying why.</li>
<li>To change the text, hover over a block and select <strong>Edit</strong>, <strong>Delete</strong>, or <strong>Add below</strong>. These are suggestions. Claude checks each one against the code before it goes into the page.</li>
<li class="hint-comment">To comment, select <strong>Comment</strong> on a block, <strong>Comment on this page</strong>, or a line number in the Markdown view.</li>
</ol>
</div>
<div class="rep" id="overview">${reportBody(reportArgs, { reviewLinks: true })}</div>
<div class="cmp">
<h2>All pages</h2>
<div class="tablewrap"><table><thead><tr><th>Page</th><th>Action</th><th class="num">Old lines</th><th class="num">New lines</th><th class="num">Change</th><th class="num">Facts stated</th><th>Review</th></tr></thead><tbody>${summary}</tbody></table></div>
</div>
</template>
${templates}
<script type="application/json" id="rv-data">${JSON.stringify(data).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')}</script>
<script>${script.replace(/<\/script/gi, '<\\/script')}</script>
`;
}

export function run(argv) {
  const ti = argv.indexOf('--title');
  const title = ti >= 0 ? argv[ti + 1] : null;
  const [dir, out] = argv.filter((a, i) => !a.startsWith('--') && i !== ti + 1);
  if (!dir || !out) {
    console.error('Usage: node scripts/doc-set/review-package.mjs <run-dir> <out.html> [--title "..."]');
    return 2;
  }
  const { meta, entries } = loadEntries(dir);
  const { args } = loadReportArgs(dir, title);
  const finalTitle = title || `${meta.product} ${meta.version} Review`;
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, buildPackage({ title: finalTitle, meta, entries, reportArgs: { ...args, title: finalTitle } }));
  fs.writeFileSync(`${out}.capabilities.json`, JSON.stringify(CAPABILITIES, null, 2) + '\n');
  console.log(`Wrote the review package to ${out} (${entries.length} pages) and ${out}.capabilities.json`);
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
