/* Client for the doc-set review page. Needs review-core.js (inlined ahead of this file) and, for the rendered view,
   the marked library. Everything degrades: without a capability the matching controls are hidden, and without marked
   the rendered view falls back to plain text.
   Pages open one at a time from a sidebar tree. Each page has two views: Rendered (the page as readers see it, with
   the changes marked, editable block by block) and Markdown (old and new source side by side, editable line by line).
   Reviews and suggestions live in the page's database: votes/<reviewer> and suggestions/<reviewer>. */

if (typeof document !== 'undefined') (function () {
  'use strict';
  var DATA = JSON.parse(document.getElementById('rv-data').textContent);
  var BY = {};
  DATA.forEach(function (d) { BY[d.slug] = d; });
  var votes = {}, suggestions = {}, profiles = {};
  var stateOf = {}, live = {};
  var db = null, user = null, comments = null, myId = null, canWrite = null;
  var current = '';
  var order = [];
  var building = false;
  var queue = Promise.resolve();
  var renderSeq = 0;
  var LABEL = { changes: 'Changes requested', approved: 'Approved', stale: 'Changed since review', none: 'Not reviewed' };
  var TAG = { NEW: 'New', REWRITE: 'Rewritten', UPDATE: 'Updated', RESTYLED: 'Style fixes only' };
  var PREFS_KEY = 'doc-set-review-prefs';
  var prefs = { mode: 'change', view: 'rendered', all: false, old: false, open: { 'g:NEW': true }, last: '', q: '', st: 'all' };

  // Stored prefs are untrusted input: copy only known keys, and only values of the right type.
  var PREF_TYPES = { mode: 'string', view: 'string', all: 'boolean', old: 'boolean', open: 'object', last: 'string' };
  try {
    var saved = JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
    Object.keys(PREF_TYPES).forEach(function (k) {
      if (Object.prototype.hasOwnProperty.call(saved, k) && typeof saved[k] === PREF_TYPES[k] && saved[k] !== null) prefs[k] = saved[k];
    });
  } catch (e) { /* storage unavailable: defaults */ }
  function savePrefs() { try { localStorage.setItem(PREFS_KEY, JSON.stringify({ mode: prefs.mode, view: prefs.view, all: prefs.all, open: prefs.open, last: prefs.last })); } catch (e) { /* ignore */ } }

  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function note(msg) { $all('.rv-note').forEach(function (n) { n.textContent = msg || ''; }); }
  function nameOf(uid) {
    var p = profiles[uid];
    if (p && p.isMe) return 'you';
    return (p && p.name) || 'Someone';
  }
  function canEdit() { return !!(db && myId && canWrite !== false); }

  /* ---------- review state ---------- */

  function aggregate() {
    var per = {};
    DATA.forEach(function (d) { per[d.slug] = []; });
    Object.keys(votes).forEach(function (uid) {
      var pages = (votes[uid] && votes[uid].pages) || {};
      Object.keys(pages).forEach(function (slug) {
        var v = pages[slug];
        if (per[slug] && v && v.status) per[slug].push({ uid: uid, status: v.status, at: v.at || 0, hash: v.hash || '' });
      });
    });
    return per;
  }

  var lastPer = {};

  async function render() {
    var seq = ++renderSeq;
    lastPer = aggregate();
    var ids = Object.keys(votes).concat(Object.keys(suggestions));
    if (user && ids.length) {
      try { var p = await user.profiles(ids); Object.keys(p).forEach(function (k) { profiles[k] = p[k]; }); } catch (e) { /* names stay generic */ }
    }
    if (seq !== renderSeq) return;
    var n = { none: 0, approved: 0, changes: 0, stale: 0 };
    DATA.forEach(function (d) { var s = stateFor(lastPer[d.slug], d.hash); stateOf[d.slug] = s.state; n[s.state]++; });
    var total = DATA.length, reviewed = n.approved + n.changes;
    var text = reviewed + ' of ' + total + ' pages reviewed. ' + n.approved + ' approved, ' + n.changes + ' with changes requested, ' + n.stale + ' changed since review, ' + n.none + ' not yet reviewed.';
    $all('.rv-summary').forEach(function (e) { e.textContent = text; });
    $all('.rv-bar-ap').forEach(function (e) { e.style.width = (100 * n.approved / total) + '%'; });
    $all('.rv-bar-ch').forEach(function (e) { e.style.width = (100 * n.changes / total) + '%'; });
    $all('.rv-bar-st').forEach(function (e) { e.style.width = (100 * n.stale / total) + '%'; });
    $all('.sb-reviewed').forEach(function (e) { e.textContent = reviewed + ' of ' + total + ' reviewed'; });
    $all('.rvbadge[data-slug]').forEach(function (b) { var st = stateOf[b.getAttribute('data-slug')] || 'none'; b.textContent = LABEL[st]; b.setAttribute('data-state', st); });
    paintBars();
    renderTree();
    if (current === 'dashboard') paintDashboard();
  }

  function paintBars() {
    $all('.rv[data-slug]').forEach(function (bar) {
      var slug = bar.getAttribute('data-slug');
      var d = BY[slug];
      if (!d) return;
      var s = stateFor(lastPer[slug] || [], d.hash);
      $('.rv-state', bar).textContent = LABEL[s.state];
      $('.rv-state', bar).setAttribute('data-state', s.state);
      var parts = s.fresh.map(function (v) { return (v.status === 'changes' ? 'Changes requested by ' : 'Approved by ') + nameOf(v.uid); });
      if (s.stale.length) parts.push('Reviewed before the page changed: ' + s.stale.map(function (v) { return nameOf(v.uid) + ' (' + (v.status === 'changes' ? 'changes requested' : 'approved') + ')'; }).join(', '));
      $('.rv-who', bar).textContent = parts.join('; ');
      var mine = myId ? (s.fresh.filter(function (v) { return v.uid === myId; })[0] || {}).status : '';
      $all('button[data-act]', bar).forEach(function (b) {
        var act = b.getAttribute('data-act');
        if (act === 'approved' || act === 'changes') b.setAttribute('aria-pressed', String(mine === act));
      });
    });
    gateControls();
  }

  function gateControls() {
    document.body.classList.toggle('no-comments', !comments);
    document.body.classList.toggle('no-review', !(db && myId));
    document.body.classList.toggle('no-edit', !canEdit());
    var ro = !!(db && myId && canWrite === false);
    $all('.rv button[data-act="approved"], .rv button[data-act="changes"], .rv button[data-act="clear"]').forEach(function (b) {
      b.disabled = ro;
      b.title = ro ? 'Recording a review needs Contributor access. Ask the owner to change your access.' : '';
    });
  }

  function setStatus(slug, status) {
    if (!db || !myId) return;
    queue = queue.then(async function () {
      var ref = db.doc('votes/' + myId);
      var entry = {}; entry[slug] = { status: status, at: Date.now(), hash: BY[slug] ? BY[slug].hash : '' };
      try {
        var snap = await ref.get();
        if (snap.exists) await ref.update({ pages: entry }); else await ref.set({ pages: entry });
        note('');
      } catch (e) {
        note('Your review could not be saved' + (e && e.code ? ' (' + e.code + ')' : '') + '. You may need Contributor access to record a review.');
      }
    });
  }

  async function openComposer(target) {
    if (!comments) return;
    try { await comments.openComposer(target); } catch (e) { note('Commenting is not available in this view.'); }
  }

  /* ---------- sidebar ---------- */

  function slugsUnder(n) {
    if (n.type === 'leaf') return [n.slug];
    var out = [];
    n.children.forEach(function (c) { slugsUnder(c).forEach(function (s) { out.push(s); }); });
    return out;
  }

  function ancestorKeys(page) {
    var keys = [], parts = page.short.split('/');
    var base = prefs.mode === 'change' ? 'g:' + (page.band || page.group) : 'z';
    if (prefs.mode === 'change') keys.push(base);
    if (page.band && prefs.mode === 'change') return keys;
    for (var i = 0; i < parts.length - 1; i++) keys.push(base + '/' + parts.slice(0, i + 1).join('/'));
    return keys;
  }

  function leafEl(p) {
    var a = el('a', 'leaf');
    a.href = '#' + p.slug;
    a.setAttribute('data-slug', p.slug);
    if (p.slug === current) a.setAttribute('aria-current', 'page');
    var st = stateOf[p.slug] || 'none';
    var dot = el('span', 'dot'); dot.setAttribute('data-state', st); dot.title = LABEL[st];
    a.appendChild(dot);
    var name = el('span', 'lt', p.title || p.short.split('/').pop());
    name.title = p.short;
    a.appendChild(name);
    if (prefs.mode !== 'change' || p.band) a.appendChild(el('span', 'tg tg-' + p.group, TAG[p.group] === 'Style fixes only' ? 'Style fixes' : TAG[p.group]));
    var cnt = (live[p.slug] || []).length;
    if (cnt) a.appendChild(el('span', 'sgn', cnt + (cnt === 1 ? ' edit' : ' edits')));
    return a;
  }

  function nodeEl(n, filtering) {
    if (n.type === 'leaf') return leafEl(n.page);
    var d = document.createElement('details');
    d.className = 'fold';
    d.setAttribute('data-key', n.key);
    d.open = filtering || !!prefs.open[n.key];
    var s = document.createElement('summary');
    s.appendChild(el('span', 'fname', n.name));
    var slugs = slugsUnder(n);
    var done = slugs.filter(function (x) { return stateOf[x] === 'approved' || stateOf[x] === 'changes'; }).length;
    s.appendChild(el('span', 'fcount', done + '/' + slugs.length));
    d.appendChild(s);
    var kids = el('div', 'kids');
    n.children.forEach(function (c) { kids.appendChild(nodeEl(c, filtering)); });
    d.appendChild(kids);
    return d;
  }

  function renderTree() {
    var box = $('#tree');
    if (!box) return;
    var top = box.scrollTop;
    building = true;
    box.textContent = '';
    var q = prefs.q.toLowerCase(), sf = prefs.st;
    var keep = function (p) {
      if (sf !== 'all' && (stateOf[p.slug] || 'none') !== sf) return false;
      if (q && (p.short + ' ' + (p.title || '')).toLowerCase().indexOf(q) < 0) return false;
      return true;
    };
    var tree = filterTree(buildTree(DATA, prefs.mode), keep);
    order = leafOrder(tree);
    var filtering = !!q || sf !== 'all';
    tree.forEach(function (n) { box.appendChild(nodeEl(n, filtering)); });
    if (!tree.length) box.appendChild(el('p', 'meta pad', 'No pages match.'));
    box.scrollTop = top;
    building = false;
    var c = $('#sb-count'); if (c) c.textContent = order.length + ' of ' + DATA.length + ' pages';
    $all('#sb-mode button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === prefs.mode)); });
    $all('.sb-nav a').forEach(function (a) { if (a.getAttribute('data-nav') === current) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    var active = $('.leaf[aria-current]', box);
    if (active && active.scrollIntoView && box.dataset.reveal) { active.scrollIntoView({ block: 'nearest' }); delete box.dataset.reveal; }
  }

  function openAncestors(slug) {
    var d = BY[slug];
    if (!d) return;
    ancestorKeys(d).forEach(function (k) { prefs.open[k] = true; });
    savePrefs();
  }

  /* ---------- markdown rendering ---------- */

  var markedReady = false;
  function setupMarked() {
    if (markedReady || typeof marked === 'undefined') return markedReady;
    function tokText(t) { return typeof t === 'string' ? t : (t && (t.text || t.raw)) || ''; }
    marked.use({
      gfm: true,
      renderer: {
        html: function (h) { return esc(tokText(h)); },
        link: function (href, title, text) {
          if (href && typeof href === 'object') { var t = href; href = t.href; title = t.title; text = this.parser ? this.parser.parseInline(t.tokens) : t.text; }
          if (/^https?:\/\//i.test(href || '')) return '<a href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + text + '</a>';
          if (/^[\/#.]|^[\w-]+(\/|\.md)/.test(href || '')) return '<span class="xl" title="' + esc(href) + '">' + text + '</span>';
          return text;
        },
        image: function (href, title, text) {
          if (href && typeof href === 'object') { text = href.text; }
          return '<span class="imgph">Image: ' + esc(text || 'no alt text') + '</span>';
        }
      }
    });
    markedReady = true;
    return true;
  }

  function mdHtml(blk) {
    var text = blk.text;
    if (blk.kind === 'frontmatter') {
      var rows = text.split('\n').filter(function (l) { return l !== '---' && l.trim(); }).map(function (l) {
        var i = l.indexOf(':');
        return i < 0 ? '<dt></dt>\n<dd>' + esc(l) + '</dd>' : '<dt>' + esc(l.slice(0, i)) + '</dt>\n<dd>' + esc(l.slice(i + 1).trim().replace(/^"(.*)"$/, '$1')) + '</dd>';
      });
      return '<div class="fm-t">Page properties</div><dl class="fm">' + rows.join('\n') + '</dl>';
    }
    if (!setupMarked()) return '<pre class="plain">' + esc(text) + '</pre>';
    var notes = [];
    function pre(s) { return s.replace(/\{\/\*([\s\S]*?)\*\/\}/g, function (m, c) { notes.push(c.trim()); return '\u0001' + (notes.length - 1) + '\u0002'; }); }
    function post(h) {
      return h.replace(/\u0001(\d+)\u0002/g, function (m, i) {
        var c = notes[+i] || '';
        return '<span class="todo' + (/^TODO/i.test(c) ? '' : ' cm') + '">' + esc(c || 'comment') + '</span>';
      });
    }
    var adm = blk.kind === 'admonition' && text.match(/^:::(\w+)(?:\[(.*?)\])?[ \t]*\n?([\s\S]*?)\n?:::[ \t]*$/);
    if (adm) {
      var title = adm[2] || adm[1].charAt(0).toUpperCase() + adm[1].slice(1);
      return '<aside class="adm adm-' + esc(adm[1]) + '"><div class="adm-t">' + esc(title) + '</div>' + post(marked.parse(pre(adm[3]))) + '</aside>';
    }
    return post(marked.parse(pre(text)));
  }

  function renderBlock(blk) {
    var d = el('div', 'md md-' + blk.kind);
    d.innerHTML = mdHtml(blk);
    return d;
  }

  function renderText(text) {
    var d = el('div', 'md-multi');
    splitBlocks(text).forEach(function (b) { d.appendChild(renderBlock(b)); });
    return d;
  }

  /** Wrap inserted ranges in <ins> and show deleted text as <del>, on the text nodes of a rendered block. */
  function applyMarks(root, marks, opts) {
    opts = opts || {};
    var tag = opts.tag || 'ins';
    var delList = opts.noDel ? [] : marks.del;
    if (!marks.ins.length && !delList.length) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [], off = 0;
    while (walker.nextNode()) { var n = walker.currentNode; nodes.push({ n: n, start: off, end: off + n.nodeValue.length }); off += n.nodeValue.length; }
    nodes.forEach(function (nd, idx) {
      var last = idx === nodes.length - 1;
      var cuts = {}; cuts[nd.start] = 1; cuts[nd.end] = 1;
      marks.ins.forEach(function (r) { [r[0], r[1]].forEach(function (c) { if (c > nd.start && c < nd.end) cuts[c] = 1; }); });
      var dels = delList.filter(function (x) { return (x.at >= nd.start && x.at < nd.end) || (last && x.at >= nd.end); });
      dels.forEach(function (x) { if (x.at > nd.start && x.at < nd.end) cuts[x.at] = 1; });
      var pts = Object.keys(cuts).map(Number).sort(function (a, b) { return a - b; });
      var frag = document.createDocumentFragment();
      function putDels(at) {
        dels.forEach(function (x) {
          if (x.at === at || (at === nd.end && last && x.at >= nd.end)) { var dl = document.createElement('del'); dl.textContent = x.text; frag.appendChild(dl); }
        });
      }
      for (var i = 0; i < pts.length - 1; i++) {
        var a = pts[i], b = pts[i + 1];
        putDels(a);
        var piece = nd.n.nodeValue.slice(a - nd.start, b - nd.start);
        var inIns = marks.ins.some(function (r) { return r[0] <= a && b <= r[1]; });
        if (inIns) { var ie = document.createElement(tag); ie.textContent = piece; frag.appendChild(ie); } else frag.appendChild(document.createTextNode(piece));
      }
      if (last) putDels(nd.end);
      if (nd.n.parentNode) nd.n.parentNode.replaceChild(frag, nd.n);
    });
    if (!nodes.length) delList.forEach(function (x) { var dl = document.createElement('del'); dl.textContent = x.text; root.appendChild(dl); });
  }

  function diffFragment(a, b) {
    var frag = document.createDocumentFragment();
    wordOps(a, b).forEach(function (o) {
      if (o.op === 'eq') frag.appendChild(document.createTextNode(o.text));
      else if (o.op === 'ins') { var i = document.createElement('ins'); i.textContent = o.text; frag.appendChild(i); }
      else if (o.text.trim()) { var d = document.createElement('del'); d.textContent = o.text; frag.appendChild(d); }
    });
    return frag;
  }

  /* ---------- suggestions ---------- */

  function saveSuggestion(item) {
    if (!db || !myId) return;
    queue = queue.then(async function () {
      var ref = db.doc('suggestions/' + myId);
      var key = item.slug + ':' + item.line + (item.op === 'add' ? '+' : '');
      var items = {};
      items[key] = {
        slug: item.slug, line: item.line, endLine: item.endLine || item.line, hash: BY[item.slug] ? BY[item.slug].hash : '',
        op: item.op || 'edit', scope: item.scope || 'line', original: item.original || '', proposed: item.proposed || '', withdrawn: false, at: Date.now()
      };
      try {
        var snap = await ref.get();
        if (snap.exists) await ref.update({ items: items }); else await ref.set({ items: items });
        note('');
      } catch (e) {
        note('Your suggestion could not be saved' + (e && e.code ? ' (' + e.code + ')' : '') + '. You may need Contributor access.');
      }
    });
  }

  function withdrawSuggestion(key) {
    if (!db || !myId) return;
    queue = queue.then(async function () {
      var items = {}; items[key] = { withdrawn: true, at: Date.now() };
      try { await db.doc('suggestions/' + myId).update({ items: items }); note(''); } catch (e) { note('Your suggestion could not be withdrawn' + (e && e.code ? ' (' + e.code + ')' : '') + '.'); }
    });
  }

  function recomputeLive() {
    var hashes = {}; DATA.forEach(function (d) { hashes[d.slug] = d.hash; });
    live = liveSuggestions(suggestions, hashes);
    var total = 0; Object.keys(live).forEach(function (s) { total += live[s].length; });
    $all('.rv-sg-count').forEach(function (e) { e.textContent = total ? total + ' suggested edit' + (total === 1 ? '' : 's') + ' on the current text.' : ''; });
  }

  function sgBox(s, view) {
    var box = el('div', 'sg sgx-' + s.op);
    box.setAttribute('data-key', s.key);
    var who = el('div', 'sg-who');
    var what = s.op === 'delete' ? 'Suggested deletion' : s.op === 'add' ? 'Suggested addition' : 'Suggested edit';
    who.textContent = what + ' by ' + nameOf(s.uid) + (view === 'md' ? ' for line ' + s.line : '');
    box.appendChild(who);
    var body = el('div', 'sg-body');
    if (view === 'rendered' && s.scope === 'block') {
      if (s.op === 'delete') { var o = renderText(s.original); o.classList.add('struck'); body.appendChild(o); }
      else if (s.op === 'add') body.appendChild(renderText(s.proposed));
      else {
        var oldEl = renderText(s.original), newEl = renderText(s.proposed);
        applyMarks(newEl, diffMarks(oldEl.textContent, newEl.textContent));
        body.appendChild(newEl);
      }
    } else {
      body.classList.add('raw');
      if (s.op === 'delete') { var dl = document.createElement('del'); dl.textContent = s.original; body.appendChild(dl); }
      else if (s.op === 'add') { var ins = document.createElement('ins'); ins.textContent = s.proposed; body.appendChild(ins); }
      else body.appendChild(diffFragment(s.original, s.proposed));
    }
    box.appendChild(body);
    if (s.uid === myId) {
      var w = el('button', null, 'Withdraw'); w.type = 'button'; w.setAttribute('data-ui', 'withdraw'); w.setAttribute('data-key', s.key);
      box.appendChild(w);
    }
    return box;
  }

  function paintSuggestions() {
    $all('.sg').forEach(function (n) { n.remove(); });
    if (!current || !BY[current]) return;
    var view = prefs.view === 'md' ? 'md' : 'rendered';
    (live[current] || []).forEach(function (s) {
      if (view === 'md') {
        var row = rowFor(current, s.line);
        if (row) row.appendChild(sgBox(s, 'md'));
      } else {
        var target = $all('.blk[data-start]').filter(function (b) {
          var st = +b.getAttribute('data-start'), en = +b.getAttribute('data-end');
          return s.scope === 'block' ? st === s.line : (s.line >= st && s.line <= en);
        })[0];
        if (target) target.appendChild(sgBox(s, 'rendered'));
      }
    });
    renderTreeSoon();
  }

  var treeTimer = 0;
  function renderTreeSoon() { clearTimeout(treeTimer); treeTimer = setTimeout(renderTree, 50); }

  /* ---------- markdown view (side by side) ---------- */

  function lineText(row) { return $('.c.n .tx', row).textContent.replace(/ /g, ' '); }
  function rowFor(slug, line) {
    var rows = $all('#' + slug + ' .row');
    for (var i = 0; i < rows.length; i++) { var ln = $('.c.n .ln', rows[i]); if (ln && ln.textContent.trim() === String(line)) return rows[i]; }
    return null;
  }
  function addEditButtons() {
    $all('.row .c.n').forEach(function (cell) {
      var ln = $('.ln', cell), tx = $('.tx', cell);
      if (!ln || !ln.textContent.trim() || !tx || !tx.textContent.replace(/ /g, '').trim()) return;
      var b = el('button', 'sg-edit', 'Edit');
      b.type = 'button'; b.setAttribute('data-ui', 'line-edit'); b.title = 'Suggest a replacement for this line';
      cell.appendChild(b);
    });
  }
  function openLineEditor(row) {
    if ($('.sg-form', row)) return;
    var original = lineText(row);
    var f = el('div', 'sg-form');
    var ta = document.createElement('textarea');
    ta.value = original; ta.rows = Math.max(2, Math.ceil(original.length / 70)); ta.setAttribute('aria-label', 'Replacement text for this line');
    f.appendChild(ta);
    [['Suggest this edit', 'line-save'], ['Cancel', 'form-cancel']].forEach(function (x) { var b = el('button', null, x[0]); b.type = 'button'; b.setAttribute('data-ui', x[1]); f.appendChild(b); });
    row.appendChild(f);
    ta.focus();
  }

  /* ---------- rendered view ---------- */

  function blockTools() {
    var t = el('div', 'blk-tools');
    [['Edit', 'b-edit', 'Suggest a change to this block'], ['Delete', 'b-del', 'Suggest deleting this block'], ['Add below', 'b-add', 'Suggest new text after this block'], ['Comment', 'b-comment', 'Comment on this block']].forEach(function (x) {
      var b = el('button', 'bt-' + x[1], x[0]); b.type = 'button'; b.setAttribute('data-ui', x[1]); b.title = x[2]; t.appendChild(b);
    });
    return t;
  }

  function mkItem(it, single) {
    var row = el('div', 'brow brow-' + it.kind + (single ? ' single' : ''));
    var oldCell = null;
    if (!single) {
      oldCell = el('div', 'bcell bo');
      if (it.kind === 'ins') oldCell.classList.add('empty');
      else {
        if (it.kind === 'del') { oldCell.classList.add('blk-del'); if (it.cont) oldCell.classList.add('blk-cont'); else oldCell.appendChild(el('div', 'blk-flag', 'Removed')); }
        if (it.kind === 'chg') oldCell.classList.add('blk-oldchg');
        oldCell.appendChild(renderBlock(it.a));
      }
      row.appendChild(oldCell);
    }
    if (it.kind === 'del') {
      var gap = el('div', 'bcell bn empty');
      row.appendChild(gap);
      return row;
    }
    var box = el('div', 'bcell bn blk blk-' + it.kind + (it.cont ? ' blk-cont' : ''));
    box._blk = it.b;
    box.setAttribute('data-start', it.b.start);
    box.setAttribute('data-end', it.b.end);
    var body = renderBlock(it.b);
    var noMarks = false;
    if (it.kind === 'chg') {
      var oldBody = (oldCell && $('.md', oldCell)) || renderBlock(it.a);
      var ot = oldBody.textContent, nt = body.textContent;
      applyMarks(body, diffMarks(ot, nt), { noDel: true });
      if (oldCell) applyMarks(oldBody, diffMarks(nt, ot), { tag: 'del', noDel: true });
      noMarks = !$('ins', body) && !$('del', oldBody);
    }
    if (it.kind === 'ins' && !it.cont) box.appendChild(el('div', 'blk-flag', 'Added'));
    if (it.kind === 'chg') box.appendChild(el('div', 'blk-flag', noMarks ? 'Changed (formatting or link)' : 'Changed'));
    box.appendChild(body);
    box.appendChild(blockTools());
    row.appendChild(box);
    return row;
  }

  function rvBar(slug) {
    var bar = el('div', 'rv');
    bar.setAttribute('data-slug', slug);
    bar.appendChild(el('span', 'rv-state', 'Not reviewed'));
    bar.appendChild(el('span', 'rv-who'));
    var btns = el('span', 'rv-btns');
    [['approved', 'Approve'], ['changes', 'Request changes'], ['clear', 'Clear my review'], ['comment', 'Comment on this page']].forEach(function (x) {
      var b = el('button', null, x[1]); b.type = 'button'; b.setAttribute('data-act', x[0]); btns.appendChild(b);
    });
    bar.appendChild(btns);
    return bar;
  }

  function renderedView(d) {
    var sec = el('section', 'rsec');
    sec.id = d.slug;
    sec.setAttribute('data-slug', d.slug);
    sec.appendChild(el('p', 'meta', d.meta || ''));
    sec.appendChild(rvBar(d.slug));
    var A = d.old == null ? [] : splitBlocks(d.old), B = splitBlocks(d.new);
    var items = alignBlocks(A, B);
    // A rewritten page opens with the old text collapsed: the new text reads on its own, and removed blocks drop out.
    var hideOld = d.group === 'REWRITE' && d.old != null && !prefs.old;
    var removed = 0;
    if (hideOld) items = items.filter(function (it) { if (it.kind === 'del') { removed++; return false; } return true; });
    var sugLines = (live[d.slug] || []).map(function (s) { return s.line; });
    var changed = items.map(function (it) {
      if (it.kind !== 'eq') return true;
      return sugLines.some(function (l) { return it.b.start <= l && l <= it.b.end; });
    });
    var vis = items.map(function (it, i) {
      if (prefs.all || d.group === 'NEW') return true;
      return changed[i] || (i > 0 && changed[i - 1]) || (i < items.length - 1 && changed[i + 1]);
    });
    // A run of added blocks, or of removed blocks, carries one flag, on its first block.
    items.forEach(function (it, k) { it.cont = (it.kind === 'ins' || it.kind === 'del') && k > 0 && items[k - 1].kind === it.kind; });
    var single = d.old == null || hideOld;
    var wrap = el('div', 'doc md-doc' + (single ? ' single' : ' sbs'));
    if (hideOld) {
      var hint = el('button', 'skipbar', 'Old text hidden' + (removed ? ' (' + removed + ' removed block' + (removed === 1 ? '' : 's') + ')' : '') + '. Show it');
      hint.type = 'button'; hint.setAttribute('data-ui', 'old-show');
      wrap.appendChild(hint);
    }
    if (!single) {
      var head = el('div', 'bhead');
      head.appendChild(el('div', null, d.oldLabel || 'Old'));
      head.appendChild(el('div', null, d.newLabel || 'New'));
      wrap.appendChild(head);
    }
    var i = 0;
    while (i < items.length) {
      if (vis[i]) { wrap.appendChild(mkItem(items[i], single)); i++; continue; }
      var j = i;
      while (j < items.length && !vis[j]) j++;
      var skip = el('button', 'skipbar', (j - i) + ' unchanged block' + (j - i === 1 ? '' : 's'));
      skip.type = 'button';
      skip._range = items.slice(i, j);
      skip._single = single;
      skip.setAttribute('data-ui', 'expand');
      wrap.appendChild(skip);
      i = j;
    }
    if (!items.length) wrap.appendChild(el('p', 'meta', 'This page has no text.'));
    sec.appendChild(wrap);
    return sec;
  }

  function openBlockEditor(box, mode) {
    if ($('.sg-form', box)) return;
    var blk = box._blk;
    var f = el('div', 'sg-form blk-form');
    var lab = el('div', 'sg-who', mode === 'add' ? 'New text after this block (Markdown)' : 'Edit this block (Markdown)');
    var ta = document.createElement('textarea');
    ta.value = mode === 'add' ? '' : blk.text;
    ta.rows = Math.max(3, Math.min(14, (ta.value.match(/\n/g) || []).length + 2));
    ta.setAttribute('aria-label', lab.textContent);
    var prev = el('div', 'blk-preview');
    function upd() { prev.textContent = ''; prev.appendChild(renderText(ta.value)); }
    var timer = 0;
    ta.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(upd, 150); });
    f.appendChild(lab); f.appendChild(ta); f.appendChild(el('div', 'sg-who', 'Preview')); f.appendChild(prev);
    var row = el('div', 'form-btns');
    [['Suggest this ' + (mode === 'add' ? 'addition' : 'edit'), mode === 'add' ? 'b-save-add' : 'b-save'], ['Cancel', 'form-cancel']].forEach(function (x) { var b = el('button', null, x[0]); b.type = 'button'; b.setAttribute('data-ui', x[1]); row.appendChild(b); });
    f.appendChild(row);
    box.appendChild(f);
    box.classList.add('editing');
    upd();
    ta.focus();
  }

  /* ---------- dashboard ---------- */

  var lastSync = 0;
  var STATES = [['approved', 'Approved'], ['changes', 'Changes requested'], ['stale', 'Changed since review'], ['none', 'Not reviewed']];

  function ago(at) {
    if (!at) return 'never';
    var sec = Math.max(0, Math.round((Date.now() - at) / 1000));
    if (sec < 45) return 'just now';
    var m = Math.round(sec / 60);
    if (m < 60) return m + ' min ago';
    var h = Math.round(m / 60);
    if (h < 24) return h + ' h ago';
    var dd = Math.round(h / 24);
    return dd + (dd === 1 ? ' day ago' : ' days ago');
  }

  function stackBar(c, label) {
    var b = el('div', 'sbar');
    b.setAttribute('role', 'img');
    b.setAttribute('aria-label', label);
    STATES.forEach(function (x) {
      var n = c[x[0]] || 0;
      if (!n) return;
      var i = document.createElement('i');
      i.className = 'st-' + x[0];
      i.style.flexGrow = String(n);
      i.title = x[1] + ': ' + n;
      b.appendChild(i);
    });
    return b;
  }

  function progressRow(label, c, attrs) {
    var r = el(attrs ? 'button' : 'div', 'drow');
    if (attrs) { r.type = 'button'; Object.keys(attrs).forEach(function (k) { r.setAttribute(k, attrs[k]); }); }
    r.appendChild(el('span', 'dl', label));
    r.appendChild(stackBar(c, label + ': ' + STATES.map(function (x) { return (c[x[0]] || 0) + ' ' + x[1].toLowerCase(); }).join(', ')));
    r.appendChild(el('span', 'dn', ((c.approved || 0) + (c.changes || 0)) + ' of ' + c.total));
    return r;
  }

  function dpanel(title, note) {
    var p = el('section', 'panel dpanel');
    p.appendChild(el('h2', null, title));
    if (note) p.appendChild(el('p', 'meta', note));
    return p;
  }

  function pageLink(slug) {
    var a = el('a', null, (BY[slug] && (BY[slug].title || BY[slug].short)) || slug);
    a.href = '#' + slug;
    return a;
  }

  function nameList(uids) { return uids.map(nameOf).join(', '); }

  function paintDashboard() {
    var box = $('#dash');
    if (!box) return;
    var stats = dashboardStats(DATA, votes, live);
    var T = stats.totals, reviewed = T.approved + T.changes;
    var bar = $('.livebar');
    if (bar) {
      var on = !!db;
      bar.setAttribute('data-live', on ? 'on' : 'off');
      bar.textContent = on ? (lastSync ? 'Live. Updates as reviewers act. Last change received ' + ago(lastSync) + '.' : 'Live. Waiting for the first update.') : 'Not live. Sign in to the claude.ai organization to see reviews as they come in.';
    }
    box.textContent = '';
    var tiles = el('div', 'tiles');
    [['Reviewed', Math.round(100 * reviewed / T.total) + '%', reviewed + ' of ' + T.total + ' pages', ''],
      ['Approved', T.approved, 'pages', 'approved'], ['Changes requested', T.changes, 'pages', 'changes'],
      ['Changed since review', T.stale, 'pages', 'stale'], ['Not reviewed', T.none, 'pages', 'none'],
      ['Suggested edits', T.suggestions, T.suggestionPages + (T.suggestionPages === 1 ? ' page' : ' pages'), '']].forEach(function (x) {
      var t = el('div', 'tile');
      var l = el('div', 'tl');
      if (x[3]) { var sw = el('span', 'swatch st-' + x[3]); l.appendChild(sw); }
      l.appendChild(document.createTextNode(x[0]));
      t.appendChild(l); t.appendChild(el('div', 'tv', String(x[1]))); t.appendChild(el('div', 'ts', x[2]));
      tiles.appendChild(t);
    });
    box.appendChild(tiles);

    var legend = el('div', 'legend');
    STATES.forEach(function (x) { var i = el('span', 'lg'); i.appendChild(el('span', 'swatch st-' + x[0])); i.appendChild(document.createTextNode(x[1])); legend.appendChild(i); });
    box.appendChild(legend);

    var grid = el('div', 'dgrid');
    var pr = dpanel('Progress by priority', 'Select a row to open that group in the sidebar.');
    var ranked = DATA.some(function (x) { return x.band; });
    (ranked ? BAND_ORDER : GROUP_ORDER).forEach(function (g) { var c = stats.byGroup[g]; if (c) pr.appendChild(progressRow((ranked ? BAND_LABEL : GROUP_LABEL)[g], c, { 'data-ui': 'dash-group', 'data-group': g })); });
    grid.appendChild(pr);
    var zp = dpanel('Progress by folder', 'Select a row to open that folder in the sidebar.');
    stats.byZone.forEach(function (z) { zp.appendChild(progressRow(z.zone, z, { 'data-ui': 'dash-zone', 'data-zone': z.zone })); });
    grid.appendChild(zp);
    box.appendChild(grid);

    var att = dpanel('Needs attention');
    function group(title, rows, make) {
      att.appendChild(el('h3', null, title + ' (' + rows.length + ')'));
      if (!rows.length) { att.appendChild(el('p', 'meta', 'None.')); return; }
      var ul = el('ul', 'alist');
      rows.slice(0, 12).forEach(function (r) { var li = el('li'); li.appendChild(pageLink(r.slug)); li.appendChild(el('span', 'meta', make(r))); ul.appendChild(li); });
      att.appendChild(ul);
      if (rows.length > 12) att.appendChild(el('p', 'meta', (rows.length - 12) + ' more. Filter the sidebar by review state to see them all.'));
    }
    group('Changes requested', stats.attention.changes, function (r) { return ' ' + nameList(r.uids) + ', ' + ago(r.at); });
    group('Changed since review', stats.attention.stale, function (r) { return ' reviewed before the page changed by ' + nameList(r.uids); });
    group('Suggested edits waiting for a decision', stats.attention.suggested, function (r) { return ' ' + r.count + (r.count === 1 ? ' edit' : ' edits'); });
    box.appendChild(att);

    var rp = dpanel('Reviewers');
    if (!stats.reviewers.length) rp.appendChild(el('p', 'meta', 'No reviews yet. Reviewers appear here as they approve pages, request changes, or suggest edits.'));
    else {
      var wrap = el('div', 'tablewrap');
      var table = document.createElement('table');
      var thead = document.createElement('thead'), hr = document.createElement('tr');
      [['Reviewer', ''], ['Approved', 'num'], ['Changes requested', 'num'], ['Outdated', 'num'], ['Suggestions', 'num'], ['Last active', '']].forEach(function (c) { var th = el('th', c[1], c[0]); hr.appendChild(th); });
      thead.appendChild(hr); table.appendChild(thead);
      var tb = document.createElement('tbody');
      stats.reviewers.forEach(function (r) {
        var tr = document.createElement('tr');
        tr.appendChild(el('td', null, nameOf(r.uid)));
        [r.approved, r.changes, r.stale, r.suggestions].forEach(function (n) { tr.appendChild(el('td', 'num', String(n))); });
        tr.appendChild(el('td', null, ago(r.last)));
        tb.appendChild(tr);
      });
      table.appendChild(tb); wrap.appendChild(table); rp.appendChild(wrap);
    }
    box.appendChild(rp);

    var ap = dpanel('Recent activity');
    if (!stats.activity.length) ap.appendChild(el('p', 'meta', 'Nothing yet.'));
    else {
      var ul2 = el('ul', 'alist');
      stats.activity.slice(0, 12).forEach(function (ev) {
        var li = el('li');
        li.appendChild(el('span', null, nameOf(ev.uid) + (ev.kind === 'approved' ? ' approved ' : ev.kind === 'changes' ? ' requested changes on ' : ' suggested an edit on ')));
        li.appendChild(pageLink(ev.slug));
        li.appendChild(el('span', 'meta', ' ' + ago(ev.at)));
        ul2.appendChild(li);
      });
      ap.appendChild(ul2);
    }
    box.appendChild(ap);
  }

  function showDashboard() {
    current = 'dashboard';
    var pane = $('#pane');
    pane.textContent = '';
    pane.appendChild(el('h1', null, 'Review dashboard'));
    pane.appendChild(el('p', 'livebar meta'));
    var box = el('div', 'dash');
    box.id = 'dash';
    pane.appendChild(box);
    paintDashboard();
    render();
    renderTree();
    window.scrollTo(0, 0);
  }

  function revealFold(key) {
    $all('#tree .fold').forEach(function (f) { if (f.getAttribute('data-key') === key && f.scrollIntoView) f.scrollIntoView({ block: 'start' }); });
  }

  setInterval(function () { if (current === 'dashboard') paintDashboard(); }, 30000);

  /* ---------- pages and routing ---------- */

  function pageHead(d) {
    var h = el('header', 'pg-head');
    var top = el('div', 'pg-top');
    var parts = d.short.split('/');
    top.appendChild(el('div', 'crumbs', parts.join(' / ')));
    var nav = el('div', 'pg-nav');
    var idx = order.indexOf(d.slug);
    [['Previous', 'prev', idx > 0], ['Next', 'next', idx >= 0 && idx < order.length - 1]].forEach(function (x) {
      var b = el('button', null, x[0]); b.type = 'button'; b.setAttribute('data-ui', x[1]); b.disabled = !x[2]; nav.appendChild(b);
    });
    top.appendChild(nav);
    h.appendChild(top);
    h.appendChild(el('h2', null, d.title || parts[parts.length - 1]));
    var row = el('div', 'pg-row');
    if (d.band) row.appendChild(el('span', 'tag band-' + d.band, BAND_LABEL[d.band]));
    row.appendChild(el('span', 'tag ' + d.group, TAG[d.group]));
    var tabs = el('div', 'seg');
    tabs.setAttribute('role', 'group'); tabs.setAttribute('aria-label', 'View');
    [['Rendered', 'rendered'], ['Markdown', 'md']].forEach(function (x) {
      var b = el('button', null, x[0]); b.type = 'button'; b.setAttribute('data-ui', 'view'); b.setAttribute('data-view', x[1]); b.setAttribute('aria-pressed', String(prefs.view === x[1])); tabs.appendChild(b);
    });
    row.appendChild(tabs);
    if (prefs.view !== 'md' && d.group === 'REWRITE') {
      var olab = el('label', 'allchk');
      var ocb = document.createElement('input'); ocb.type = 'checkbox'; ocb.id = 'show-old'; ocb.checked = !!prefs.old; ocb.setAttribute('data-ui', 'old');
      olab.appendChild(ocb); olab.appendChild(document.createTextNode(' Show the old text'));
      row.appendChild(olab);
    }
    if (prefs.view !== 'md' && d.group !== 'NEW') {
      var lab = el('label', 'allchk');
      var cb = document.createElement('input'); cb.type = 'checkbox'; cb.id = 'show-all'; cb.checked = !!prefs.all; cb.setAttribute('data-ui', 'all');
      lab.appendChild(cb); lab.appendChild(document.createTextNode(' Show the whole page'));
      row.appendChild(lab);
    }
    h.appendChild(row);
    if (d.why) h.appendChild(el('p', 'why', 'Why this rank: ' + d.why));
    return h;
  }

  function showOverview() {
    current = 'overview';
    var pane = $('#pane');
    pane.textContent = '';
    pane.appendChild(document.getElementById('tpl-overview').content.cloneNode(true));
    recomputeLive();
    render();
    window.scrollTo(0, 0);
  }

  function showPage(slug) {
    var d = BY[slug];
    var pane = $('#pane');
    current = slug;
    prefs.last = slug;
    openAncestors(slug);
    savePrefs();
    $('#tree').dataset.reveal = '1';
    renderTree();
    pane.textContent = '';
    pane.appendChild(pageHead(d));
    if (prefs.view === 'md') {
      var wrap = el('div', 'cmp');
      wrap.appendChild(document.getElementById('t-' + slug).content.cloneNode(true));
      pane.appendChild(wrap);
      addEditButtons();
    } else pane.appendChild(renderedView(d));
    paintBars();
    paintSuggestions();
    document.body.classList.remove('side-open');
    window.scrollTo(0, 0);
  }

  function route() {
    var h = decodeURIComponent((location.hash || '').slice(1));
    if (h === 'dashboard') { showDashboard(); return; }
    if (h && BY[h]) { showPage(h); return; }
    if (/^group-/.test(h)) {
      var g = h.slice(6);
      prefs.mode = 'change'; prefs.open['g:' + g] = true; savePrefs();
      showOverview();
      renderTree();
      var t = $('#tree'); if (t) { var f = $('.fold[data-key="g:' + g + '"]', t); if (f && f.scrollIntoView) f.scrollIntoView({ block: 'start' }); }
      return;
    }
    if (!h && prefs.last && BY[prefs.last] && !route.started) { route.started = true; location.hash = prefs.last; return; }
    route.started = true;
    showOverview();
  }

  /* ---------- events ---------- */

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    var ui = t.closest('[data-ui]');
    if (ui) {
      var act = ui.getAttribute('data-ui');
      var box = ui.closest('.blk'), row = ui.closest('.row');
      if (act === 'prev' || act === 'next') { var i = order.indexOf(current); var n = order[i + (act === 'next' ? 1 : -1)]; if (n) location.hash = n; }
      else if (act === 'view') { prefs.view = ui.getAttribute('data-view'); savePrefs(); showPage(current); }
      else if (act === 'all') { prefs.all = ui.checked; savePrefs(); showPage(current); }
      else if (act === 'old') { prefs.old = ui.checked; showPage(current); }
      else if (act === 'old-show') { prefs.old = true; showPage(current); }
      else if (act === 'expand') { var r = ui._range, frag = document.createDocumentFragment(); r.forEach(function (it) { frag.appendChild(mkItem(it, ui._single)); }); ui.parentNode.replaceChild(frag, ui); paintSuggestions(); }
      else if (act === 'b-edit') openBlockEditor(box, 'edit');
      else if (act === 'b-add') openBlockEditor(box, 'add');
      else if (act === 'b-del') { var b = box._blk; saveSuggestion({ slug: current, line: b.start, endLine: b.end, op: 'delete', scope: 'block', original: b.text, proposed: '' }); }
      else if (act === 'b-comment') openComposer({ element: $('.md', box) || box });
      else if (act === 'b-save' || act === 'b-save-add') {
        var blk = box._blk, val = $('.sg-form textarea', box).value;
        if (act === 'b-save') { if (val !== blk.text) saveSuggestion({ slug: current, line: blk.start, endLine: blk.end, op: 'edit', scope: 'block', original: blk.text, proposed: val }); }
        else if (val.trim()) saveSuggestion({ slug: current, line: blk.start, endLine: blk.end, op: 'add', scope: 'block', original: '', proposed: val });
        $('.sg-form', box).remove(); box.classList.remove('editing');
      }
      else if (act === 'form-cancel') { var fm = ui.closest('.sg-form'); var bx = fm.closest('.blk'); fm.remove(); if (bx) bx.classList.remove('editing'); }
      else if (act === 'line-edit') openLineEditor(row);
      else if (act === 'line-save') {
        var tx = $('.sg-form textarea', row).value, orig = lineText(row);
        var line = parseInt($('.c.n .ln', row).textContent, 10);
        if (tx !== orig) saveSuggestion({ slug: current, line: line, op: 'edit', scope: 'line', original: orig, proposed: tx });
        $('.sg-form', row).remove();
      }
      else if (act === 'withdraw') withdrawSuggestion(ui.getAttribute('data-key'));
      else if (act === 'dash-group') { var gk = ui.getAttribute('data-group'); prefs.mode = 'change'; prefs.open['g:' + gk] = true; savePrefs(); renderTree(); revealFold('g:' + gk); }
      else if (act === 'dash-zone') { var zk = ui.getAttribute('data-zone'); prefs.mode = 'zone'; prefs.open['z/' + zk] = true; savePrefs(); renderTree(); revealFold('z/' + zk); }
      return;
    }
    var btn = t.closest('.rv button[data-act]');
    if (btn) {
      var slug = btn.closest('.rv').getAttribute('data-slug');
      var a2 = btn.getAttribute('data-act');
      if (a2 === 'comment') { var hd = $('#' + slug + ' h3') || $('.pg-head h2'); if (hd) openComposer({ element: hd }); }
      else setStatus(slug, a2 === 'clear' ? '' : a2);
      return;
    }
    var mode = t.closest('#sb-mode button[data-mode]');
    if (mode) { prefs.mode = mode.getAttribute('data-mode'); savePrefs(); if (BY[current]) openAncestors(current); renderTree(); return; }
    if (t.closest('#side-toggle')) { document.body.classList.toggle('side-open'); return; }
    var ln = t.closest('.c.n .ln');
    if (ln && ln.textContent.trim()) {
      var tx2 = $('.tx', ln.parentNode);
      if (tx2 && tx2.textContent.trim()) { var rg = document.createRange(); rg.selectNodeContents(tx2); openComposer({ range: rg }); }
      else openComposer({ element: ln.closest('.row') });
    }
  });

  document.addEventListener('input', function (ev) {
    if (ev.target && ev.target.id === 'sb-q') { prefs.q = ev.target.value; renderTree(); }
  });
  document.addEventListener('change', function (ev) {
    if (ev.target && ev.target.id === 'sb-state') { prefs.st = ev.target.value; renderTree(); }
  });
  document.addEventListener('toggle', function (ev) {
    var d = ev.target;
    if (building || !d || !d.classList || !d.classList.contains('fold')) return;
    if (!prefs.q && prefs.st === 'all') { prefs.open[d.getAttribute('data-key')] = d.open; savePrefs(); }
  }, true);
  window.addEventListener('hashchange', route);

  (async function init() {
    var c = window.claude;
    if (c && c.use) {
      try { user = await c.use('user'); } catch (e) { user = null; }
      try { db = await c.use('db'); } catch (e) { db = null; }
      try { comments = await c.use('comments'); } catch (e) { comments = null; }
    }
    if (user) {
      try { myId = await user.id(); } catch (e) { myId = null; }
      try { canWrite = await user.can('data.write'); } catch (e) { canWrite = null; }
    }
    gateControls();
    if (db && myId && canWrite === false) note('You can read reviews and comment, but recording a review or a suggestion needs Contributor access.');
    if (!(db && myId)) note('Sign in to the claude.ai organization to record a review or suggest edits. Review status is read-only here.');
    if (db) {
      db.collection('suggestions').onSnapshot(function (snap) {
        lastSync = Date.now();
        suggestions = {};
        snap.docs.forEach(function (d) { suggestions[d.id] = d.data() || {}; });
        recomputeLive();
        paintSuggestions();
        render();
      }, function (err) { note('Suggested edits are unavailable' + (err && err.code ? ' (' + err.code + ')' : '') + '.'); });
      db.collection('votes').onSnapshot(function (snap) {
        lastSync = Date.now();
        votes = {};
        snap.docs.forEach(function (d) { votes[d.id] = d.data() || {}; });
        render();
      }, function (err) { note('Review status is unavailable' + (err && err.code ? ' (' + err.code + ')' : '') + '.'); });
    }
  })();

  var q0 = $('#sb-q'); if (q0) q0.value = prefs.q;
  render();
  route();
})();
