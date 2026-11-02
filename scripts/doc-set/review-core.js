/* Pure logic for the doc-set review page: review state, suggested edits, Markdown block splitting,
   block alignment, word diffs, and the sidebar tree. No DOM access, so the tests can run it in Node.
   review-package.mjs inlines this file ahead of review-client.js. */

/** The review state of one page. list: [{ uid, status, at, hash }]; hash: the page's current fingerprint.
 *  A vote without a hash predates fingerprints and counts as current. */
function stateFor(list, hash) {
  var fresh = [], stale = [];
  list.forEach(function (v) { (v.hash && hash && v.hash !== hash ? stale : fresh).push(v); });
  var hasChanges = fresh.some(function (v) { return v.status === 'changes'; });
  var hasApproved = fresh.some(function (v) { return v.status === 'approved'; });
  var state = hasChanges ? 'changes' : hasApproved ? 'approved' : stale.length ? 'stale' : 'none';
  return { state: state, fresh: fresh, stale: stale };
}

/** Suggested edits that still apply. docs: { uid: { items: { key: { slug, line, hash, op, original, proposed, withdrawn, at } } } };
 *  hashes: { slug: current fingerprint }. Returns { slug: [{ uid, key, line, endLine, op, scope, original, proposed, at }] } sorted by line.
 *  op is 'edit' (replace the text at line, the default), 'delete' (remove a block) or 'add' (insert after the block at line).
 *  Skips withdrawn suggestions, edits that change nothing, and suggestions made on an earlier version of the page. */
function liveSuggestions(docs, hashes) {
  var out = {};
  Object.keys(docs).forEach(function (uid) {
    var items = (docs[uid] && docs[uid].items) || {};
    Object.keys(items).forEach(function (k) {
      var s = items[k];
      if (!s || !s.slug || s.withdrawn) return;
      var op = s.op || 'edit';
      if (op === 'edit' && (!s.proposed || s.proposed === s.original)) return;
      if (op === 'add' && !String(s.proposed || '').trim()) return;
      if (s.hash && hashes[s.slug] && s.hash !== hashes[s.slug]) return;
      (out[s.slug] = out[s.slug] || []).push({
        uid: uid, key: k, line: s.line, endLine: s.endLine || s.line, op: op, scope: s.scope || 'line',
        original: s.original || '', proposed: s.proposed || '', at: s.at || 0
      });
    });
  });
  Object.keys(out).forEach(function (slug) { out[slug].sort(function (a, b) { return a.line - b.line || a.at - b.at; }); });
  return out;
}

var LIST_ITEM = /^ {0,3}([-*+]|\d+[.)])\s/;
var BLANK = /^\s*$/;

/** Split Markdown (MDX) into the blocks a reviewer edits: frontmatter, headings, paragraphs, list items, tables,
 *  code fences, admonitions, quotes and comments. Lines are 1-based. Blank lines belong to no block. */
function splitBlocks(text) {
  var lines = String(text).split('\n');
  var out = [];
  var i = 0;
  function push(s, e, kind) { out.push({ start: s + 1, end: e + 1, kind: kind, text: lines.slice(s, e + 1).join('\n') }); }
  if (lines[0] === '---') {
    var f = 1;
    while (f < lines.length && lines[f] !== '---') f++;
    if (f < lines.length) { push(0, f, 'frontmatter'); i = f + 1; }
  }
  while (i < lines.length) {
    var l = lines[i];
    if (BLANK.test(l)) { i++; continue; }
    var m = l.match(/^\s*(`{3,}|~{3,})/);
    if (m) {
      var ch = m[1][0], len = m[1].length, j = i + 1;
      var close = new RegExp('^\\s*' + (ch === '`' ? '`' : '~') + '{' + len + ',}\\s*$');
      while (j < lines.length && !close.test(lines[j])) j++;
      push(i, Math.min(j, lines.length - 1), 'code');
      i = j + 1;
      continue;
    }
    if (/^:::\w/.test(l)) {
      var a = i + 1;
      while (a < lines.length && !/^:::\s*$/.test(lines[a])) a++;
      push(i, Math.min(a, lines.length - 1), 'admonition');
      i = a + 1;
      continue;
    }
    if (/^#{1,6}\s/.test(l)) { push(i, i, 'heading'); i++; continue; }
    if (/^\s*\|/.test(l)) {
      var t = i;
      while (t + 1 < lines.length && /^\s*\|/.test(lines[t + 1])) t++;
      push(i, t, 'table');
      i = t + 1;
      continue;
    }
    if (LIST_ITEM.test(l)) {
      var e = i;
      while (e + 1 < lines.length) {
        var n = lines[e + 1];
        if (BLANK.test(n)) {
          var k = e + 1;
          while (k < lines.length && BLANK.test(lines[k])) k++;
          if (k < lines.length && /^\s{2,}\S/.test(lines[k]) && !LIST_ITEM.test(lines[k])) { e = k; continue; }
          break;
        }
        if (LIST_ITEM.test(n)) break;
        if (/^\s{2,}\S/.test(n)) { e++; continue; }
        break;
      }
      push(i, e, 'list');
      i = e + 1;
      continue;
    }
    if (/^\s*\{\/\*.*\*\/\}\s*$/.test(l)) { push(i, i, 'comment'); i++; continue; }
    if (/^import\s/.test(l)) { push(i, i, 'code'); i++; continue; }
    if (/^\s*>/.test(l)) {
      var q = i;
      while (q + 1 < lines.length && /^\s*>/.test(lines[q + 1])) q++;
      push(i, q, 'quote');
      i = q + 1;
      continue;
    }
    var p = i;
    while (p + 1 < lines.length && !BLANK.test(lines[p + 1]) && !/^(#{1,6}\s|:::\w|\s*\||\s*`{3}|\s*~{3}| {0,3}([-*+]|\d+[.)])\s)/.test(lines[p + 1])) p++;
    push(i, p, 'para');
    i = p + 1;
  }
  return out;
}

function wordSet(s) {
  var set = {};
  (String(s).toLowerCase().match(/[a-z0-9_]+/g) || []).forEach(function (w) { set[w] = 1; });
  return set;
}

/** Similarity of two blocks, 0 to 1, from their shared words. */
function blockSim(a, b) {
  var x = wordSet(a.text), y = wordSet(b.text);
  var xs = Object.keys(x), inter = 0;
  xs.forEach(function (w) { if (y[w]) inter++; });
  var union = xs.length + Object.keys(y).length - inter;
  return union ? inter / union : 1;
}

var SIM_MIN = 0.3;

/** Align the blocks of the old and new text. Returns [{ kind: 'eq'|'chg'|'ins'|'del', a?, b? }] in reading order.
 *  Identical blocks are 'eq'. Between them, changed blocks that share enough words pair up as 'chg'. */
function alignBlocks(A, B) {
  var key = function (blk) { return blk.text.replace(/\s+/g, ' ').trim(); };
  var n = A.length, m = B.length;
  var t = [];
  for (var i = 0; i <= n; i++) t.push(new Uint16Array(m + 1));
  for (i = n - 1; i >= 0; i--) for (var j = m - 1; j >= 0; j--) t[i][j] = key(A[i]) === key(B[j]) ? t[i + 1][j + 1] + 1 : Math.max(t[i + 1][j], t[i][j + 1]);
  var items = [], dels = [], inss = [];
  function flush() {
    if (dels.length || inss.length) pairRun(dels, inss).forEach(function (it) { items.push(it); });
    dels = []; inss = [];
  }
  i = 0; j = 0;
  while (i < n && j < m) {
    if (key(A[i]) === key(B[j])) { flush(); items.push({ kind: 'eq', a: A[i], b: B[j] }); i++; j++; }
    else if (t[i + 1][j] >= t[i][j + 1]) dels.push(A[i++]);
    else inss.push(B[j++]);
  }
  while (i < n) dels.push(A[i++]);
  while (j < m) inss.push(B[j++]);
  flush();
  return items;
}

function pairRun(D, I) {
  var n = D.length, m = I.length;
  var dp = [];
  for (var i = 0; i <= n; i++) dp.push(new Uint16Array(m + 1));
  var ok = [];
  for (i = 0; i < n; i++) { ok.push([]); for (var j = 0; j < m; j++) ok[i].push(blockSim(D[i], I[j]) >= SIM_MIN); }
  for (i = 1; i <= n; i++) for (j = 1; j <= m; j++) dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], ok[i - 1][j - 1] ? dp[i - 1][j - 1] + 1 : 0);
  var rev = [];
  i = n; j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && ok[i - 1][j - 1] && dp[i][j] === dp[i - 1][j - 1] + 1) { rev.push({ kind: 'chg', a: D[i - 1], b: I[j - 1] }); i--; j--; }
    else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) { rev.push({ kind: 'ins', b: I[j - 1] }); j--; }
    else { rev.push({ kind: 'del', a: D[i - 1] }); i--; }
  }
  return rev.reverse();
}

/** Word-level diff of two strings. Returns [{ op: 'eq'|'ins'|'del', text }]. Whitespace is kept inside the tokens. */
function wordOps(a, b) {
  var x = String(a).match(/\s+|\S+/g) || [], y = String(b).match(/\s+|\S+/g) || [];
  if (x.length * y.length > 4000000) return [{ op: 'del', text: String(a) }, { op: 'ins', text: String(b) }];
  var n = x.length, m = y.length, t = [];
  for (var i = 0; i <= n; i++) t.push(new Uint16Array(m + 1));
  for (i = n - 1; i >= 0; i--) for (var j = m - 1; j >= 0; j--) t[i][j] = x[i] === y[j] ? t[i + 1][j + 1] + 1 : Math.max(t[i + 1][j], t[i][j + 1]);
  var ops = [];
  function add(op, text) {
    var last = ops[ops.length - 1];
    if (last && last.op === op) last.text += text; else ops.push({ op: op, text: text });
  }
  i = 0; j = 0;
  while (i < n && j < m) {
    if (x[i] === y[j]) { add('eq', y[j]); i++; j++; }
    else if (t[i + 1][j] >= t[i][j + 1]) add('del', x[i++]);
    else add('ins', y[j++]);
  }
  while (i < n) add('del', x[i++]);
  while (j < m) add('ins', y[j++]);
  return ops;
}

/** Where a word diff lands on the NEW text: ranges to mark as inserted, and deleted text to show at an offset.
 *  Whitespace-only changes are skipped. Returns { ins: [[start, end]], del: [{ at, text }] }. */
function diffMarks(a, b) {
  var ins = [], del = [], pos = 0;
  wordOps(a, b).forEach(function (o) {
    if (o.op === 'eq') pos += o.text.length;
    else if (o.op === 'ins') {
      if (o.text.trim()) ins.push([pos, pos + o.text.length]);
      pos += o.text.length;
    } else if (o.text.trim()) del.push({ at: pos, text: o.text });
  });
  return { ins: ins, del: del };
}

var GROUP_ORDER = ['NEW', 'REWRITE', 'UPDATE', 'RESTYLED'];
var GROUP_LABEL = { NEW: 'Highest priority: new pages', REWRITE: 'High priority: rewritten pages', UPDATE: 'Medium priority: updated pages', RESTYLED: 'Lowest priority: restyled only' };

/** Review priority. Weights, scope and consequence values, and band thresholds live here so they are easy to tune. */
var PRIORITY = {
  change: { NEW: 1, REWRITE: 0.9, updateBase: 0.5, updateSpan: 0.4 },
  scopes: ['edge', 'sub-feature', 'feature', 'product'],
  reach: { product: 1, feature: 0.7, 'sub-feature': 0.45, edge: 0.25 },
  consequence: { high: 1, medium: 0.6, low: 0.3 },
  weights: { reach: 0.4, consequence: 0.35, uncertainty: 0.25 },
  uncertaintyDivisor: 3,
  bands: { P1: 55, P2: 35 }
};
var BAND_ORDER = ['P1', 'P2', 'P3', 'P4'];
var BAND_LABEL = { P1: 'P1 Review first', P2: 'P2 Review next', P3: 'P3 If time allows', P4: 'P4 Restyled only' };

/** Move a scope one level toward product (used for pages many other pages link to). */
function boostScope(scope) {
  var i = PRIORITY.scopes.indexOf(scope);
  return i < 0 ? scope : PRIORITY.scopes[Math.min(i + 1, PRIORITY.scopes.length - 1)];
}

/** Raise a consequence to at least medium when the page text signals risk: a task page with code, or risky words. */
function floorConsequence(consequence, text, type) {
  if (consequence === 'high' || consequence === 'medium') return consequence;
  var risky = /\b(uninstall|delete|restore|keys?|certificates?|passwords?|permissions?)\b/i.test(text || '');
  var code = type === 'task' && /```/.test(text || '');
  return risky || code ? 'medium' : consequence;
}

function bandOf(score, action) {
  if (action === 'RESTYLED') return 'P4';
  return score >= PRIORITY.bands.P1 ? 'P1' : score >= PRIORITY.bands.P2 ? 'P2' : 'P3';
}

/** Score one changed page. in: { action, changedShare (0-1), scope, consequence, uncertain (count) }.
 *  Returns { score, band, C, R, Q, U }. A restyled-only page is always P4. */
function scorePage(inp) {
  var P = PRIORITY;
  var C = inp.action === 'NEW' ? P.change.NEW : inp.action === 'REWRITE' ? P.change.REWRITE
    : P.change.updateBase + P.change.updateSpan * Math.max(0, Math.min(1, inp.changedShare || 0));
  var R = P.reach[inp.scope] != null ? P.reach[inp.scope] : P.reach.feature;
  var Q = P.consequence[inp.consequence] != null ? P.consequence[inp.consequence] : P.consequence.medium;
  var U = Math.min(1, (inp.uncertain || 0) / P.uncertaintyDivisor);
  var score = Math.round(100 * C * (P.weights.reach * R + P.weights.consequence * Q + P.weights.uncertainty * U) * 10) / 10;
  if (inp.action === 'RESTYLED') return { score: 0, band: 'P4', C: 0, R: R, Q: Q, U: U };
  return { score: score, band: bandOf(score, inp.action), C: C, R: R, Q: Q, U: U };
}

/** The sidebar tree. pages: [{ slug, short, group, title }]. mode 'zone' nests pages by their folders;
 *  mode 'change' ranks them by priority (new, rewritten, updated, restyled only), then by folder.
 *  Nodes: { type: 'folder', key, name, children, count } and { type: 'leaf', slug, page }. */
function buildTree(pages, mode) {
  function folderTree(list, prefix) {
    var root = { type: 'folder', key: prefix, name: '', children: [], count: 0 };
    list.forEach(function (pg) {
      var parts = pg.short.split('/');
      var node = root;
      for (var i = 0; i < parts.length - 1; i++) {
        var seg = parts[i], key = prefix + '/' + parts.slice(0, i + 1).join('/');
        var next = node.children.filter(function (c) { return c.type === 'folder' && c.key === key; })[0];
        if (!next) { next = { type: 'folder', key: key, name: seg, children: [], count: 0 }; node.children.push(next); }
        node = next;
      }
      node.children.push({ type: 'leaf', slug: pg.slug, page: pg });
    });
    sortAndCount(root);
    return root.children;
  }
  function sortAndCount(node) {
    node.count = 0;
    node.children.forEach(function (c) { if (c.type === 'folder') { sortAndCount(c); node.count += c.count; } else node.count++; });
    node.children.sort(function (x, y) {
      if (x.type !== y.type) return x.type === 'folder' ? -1 : 1;
      var xn = x.type === 'folder' ? x.name : x.page.short, yn = y.type === 'folder' ? y.name : y.page.short;
      return xn < yn ? -1 : xn > yn ? 1 : 0;
    });
  }
  if (mode === 'change') {
    var ranked = pages.some(function (p) { return p.band; });
    var order = ranked ? BAND_ORDER : GROUP_ORDER, label = ranked ? BAND_LABEL : GROUP_LABEL;
    return order.map(function (g) {
      var list = pages.filter(function (p) { return (ranked ? p.band : p.group) === g; });
      if (!list.length) return null;
      if (ranked) list.sort(function (x, y) { return (y.score || 0) - (x.score || 0) || (x.short < y.short ? -1 : 1); });
      var kids = ranked ? list.map(function (pg) { return { type: 'leaf', slug: pg.slug, page: pg }; }) : folderTree(list, 'g:' + g);
      return { type: 'folder', key: 'g:' + g, name: label[g], group: g, children: kids, count: list.length };
    }).filter(Boolean);
  }
  return folderTree(pages, 'z');
}

/** Keep only the leaves that pass keep(page); drop folders left empty. Counts follow the leaves that remain. */
function filterTree(nodes, keep) {
  var out = [];
  nodes.forEach(function (n) {
    if (n.type === 'leaf') { if (keep(n.page)) out.push(n); return; }
    var kids = filterTree(n.children, keep);
    if (kids.length) {
      var count = 0;
      kids.forEach(function (c) { count += c.type === 'folder' ? c.count : 1; });
      var copy = {};
      Object.keys(n).forEach(function (k) { copy[k] = n[k]; });
      copy.children = kids; copy.count = count;
      out.push(copy);
    }
  });
  return out;
}

function zoneOf(short) { var i = short.indexOf('/'); return i < 0 ? '(top level)' : short.slice(0, i); }

/** Numbers for the dashboard. pages: [{ slug, short, group, hash }]; votes: { uid: { pages: { slug: { status, at, hash } } } };
 *  live: the result of liveSuggestions. Returns totals, progress by priority group and by folder, the pages that need attention,
 *  one row per reviewer, and the latest activity. A vote made on an earlier version of a page counts as outdated, not as a review. */
function dashboardStats(pages, votes, live) {
  var hashOf = {}, per = {}, reviewers = {}, events = [];
  pages.forEach(function (p) { hashOf[p.slug] = p.hash; per[p.slug] = []; });
  function rv(uid) { return reviewers[uid] || (reviewers[uid] = { uid: uid, approved: 0, changes: 0, stale: 0, suggestions: 0, last: 0 }); }
  Object.keys(votes).forEach(function (uid) {
    var pg = (votes[uid] && votes[uid].pages) || {};
    Object.keys(pg).forEach(function (slug) {
      var v = pg[slug];
      if (!per[slug] || !v || !v.status) return;
      per[slug].push({ uid: uid, status: v.status, at: v.at || 0, hash: v.hash || '' });
      var r = rv(uid), fresh = !(v.hash && hashOf[slug] && v.hash !== hashOf[slug]);
      if (!fresh) r.stale++; else if (v.status === 'approved') r.approved++; else if (v.status === 'changes') r.changes++;
      r.last = Math.max(r.last, v.at || 0);
      if (fresh) events.push({ uid: uid, slug: slug, kind: v.status, at: v.at || 0 });
    });
  });
  var totals = { total: pages.length, none: 0, approved: 0, changes: 0, stale: 0, suggestions: 0, suggestionPages: 0 };
  var byGroup = {}, zones = {}, attention = { changes: [], stale: [], suggested: [] };
  function blank() { return { total: 0, approved: 0, changes: 0, stale: 0, none: 0 }; }
  pages.forEach(function (p) {
    var s = stateFor(per[p.slug], p.hash);
    totals[s.state]++;
    var gk = p.band || p.group, g = byGroup[gk] || (byGroup[gk] = blank()); g.total++; g[s.state]++;
    var zn = zoneOf(p.short), z = zones[zn] || (zones[zn] = (function () { var b = blank(); b.zone = zn; return b; })()); z.total++; z[s.state]++;
    if (s.state === 'changes') {
      var ch = s.fresh.filter(function (v) { return v.status === 'changes'; });
      attention.changes.push({ slug: p.slug, uids: ch.map(function (v) { return v.uid; }), at: Math.max.apply(null, ch.map(function (v) { return v.at; })) });
    }
    if (s.state === 'stale') attention.stale.push({ slug: p.slug, uids: s.stale.map(function (v) { return v.uid; }) });
    var sg = (live && live[p.slug]) || [];
    if (sg.length) {
      totals.suggestions += sg.length; totals.suggestionPages++;
      attention.suggested.push({ slug: p.slug, count: sg.length });
      sg.forEach(function (x) { var r = rv(x.uid); r.suggestions++; r.last = Math.max(r.last, x.at || 0); events.push({ uid: x.uid, slug: p.slug, kind: 'suggestion', at: x.at || 0 }); });
    }
  });
  attention.changes.sort(function (a, b) { return b.at - a.at; });
  attention.suggested.sort(function (a, b) { return b.count - a.count; });
  var byZone = Object.keys(zones).sort().map(function (k) { return zones[k]; });
  var list = Object.keys(reviewers).map(function (k) { return reviewers[k]; }).sort(function (a, b) { return b.last - a.last; });
  events.sort(function (a, b) { return b.at - a.at; });
  return { totals: totals, byGroup: byGroup, byZone: byZone, attention: attention, reviewers: list, activity: events.slice(0, 20) };
}

/** Slugs of the leaves in reading order. */
function leafOrder(nodes) {
  var out = [];
  nodes.forEach(function (n) { if (n.type === 'leaf') out.push(n.slug); else leafOrder(n.children).forEach(function (s) { out.push(s); }); });
  return out;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    stateFor: stateFor, liveSuggestions: liveSuggestions, splitBlocks: splitBlocks, alignBlocks: alignBlocks,
    blockSim: blockSim, wordOps: wordOps, diffMarks: diffMarks, buildTree: buildTree, filterTree: filterTree, leafOrder: leafOrder, dashboardStats: dashboardStats, zoneOf: zoneOf,
    PRIORITY: PRIORITY, BAND_ORDER: BAND_ORDER, BAND_LABEL: BAND_LABEL, scorePage: scorePage, bandOf: bandOf, boostScope: boostScope, floorConsequence: floorConsequence
  };
}
