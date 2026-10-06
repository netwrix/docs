/**
 * Constrained edits. The model never returns a page. It returns small typed
 * edits against masked sentences, and this module proves each one is safe
 * before anything is written:
 *
 *   drop    removes one run of words the gates flagged; never a number,
 *           negation, modal, proper noun, or markup
 *   swap    one word or phrase from a fixed table; the replacement text is
 *           computed here, not taken from the model
 *   reword  free rewrite; applied after a meaning check, and flagged for review if the check doubts it
 *
 * Markup (inline code, links, bold, images, HTML) is masked as placeholders
 * before the model sees the text, so it cannot be altered.
 */
import { lockedMask } from './preserve.mjs';

const PH = /⟦\d+⟧/g;
const TOKEN = /⟦\d+⟧|[\p{L}\p{N}]+(?:['’][\p{L}]+)*/gu;

// Inline spans replaced with placeholders. Order matters: longest constructs first.
const MASKS = [
  /!\[[^\]]*\]\([^)]*\)/g,
  /\[[^\]]*\]\([^)]*\)/g,
  /`[^`\n]+`/g,
  /\*\*[^*\n]+\*\*/g,
  /<[^>\n]+>/g,
  /https?:\/\/[^\s)]+/g,
  /\{[^}\n]*\}/g,
  /(?<![*\w])\*[^*\n]+\*(?!\*)/g,
];

const NEGATIONS = new Set(['not', 'no', 'never', 'cannot', 'without', 'unless', 'only', 'except', 'neither', 'nor', 'none', 'nothing']);
const MODALS = new Set(['must', 'should', 'may', 'might', 'can', 'could', 'will', 'shall', 'would', 'required', 'requires', 'require', 'optional', 'recommended', 'need', 'needs', 'always', 'all', 'any', 'every', 'both', 'either', 'if', 'when', 'before', 'after', 'until']);

// Unambiguous plain-language swaps. Keys are lowercase token sequences.
export const SWAPS = new Map([
  ['utilize', 'use'], ['utilizes', 'uses'], ['utilized', 'used'], ['utilizing', 'using'],
  ['leverage', 'use'], ['leverages', 'uses'], ['leveraged', 'used'], ['leveraging', 'using'],
  ['in order to', 'to'], ['prior to', 'before'], ['subsequent to', 'after'],
  ['due to the fact that', 'because'], ['in the event that', 'if'], ['at this point in time', 'now'],
  ['commence', 'start'], ['commences', 'starts'], ['endeavor', 'try'],
]);

const BASIC_CHARS = /^[\p{L}\p{N}\s⟦⟧.,;:!?()'’"“”–—\-/%&]$/u;

/** Symbols beyond basic punctuation (a literal "+", say) may stay but never be added, so markup cannot be introduced. */
function addsSymbols(before, after) {
  const count = t => {
    const m = new Map();
    for (const ch of t) if (!BASIC_CHARS.test(ch)) m.set(ch, (m.get(ch) || 0) + 1);
    return m;
  };
  const b = count(before);
  for (const [ch, n] of count(after)) if (n > (b.get(ch) || 0)) return true;
  return false;
}

export const tokens = s => (s.match(TOKEN) || []);
const lower = s => tokens(s).map(t => t.toLowerCase());
const eq = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

function sentencesOf(text) {
  return text.split(/(?<=[.!?])\s+(?=[\p{Lu}⟦"“(])/u).filter(s => s.trim());
}

function mask(line) {
  const spans = [];
  let out = line;
  for (const re of MASKS) {
    out = out.replace(re, m => {
      spans.push(m);
      return `⟦${spans.length - 1}⟧`;
    });
  }
  return { masked: out, spans };
}

const unmask = (text, spans) => text.replace(PH, m => spans[Number(m.slice(1, -1))] ?? m);

const PREFIX = /^(?:\s*(?:[-*+]|\d+[.)])\s+|\s*>\s?)*/;

/** Split a page into editable lines with masked prose. Line numbers are 1-based and match the gates. */
const ITEM = /^\s*(?:[-*+]|\d+[.)])\s+/;
const BREAK = /(?:\s{2,}|\\)$/;

/**
 * Split a page into editable units. A unit is one paragraph or list item:
 * hard-wrapped lines are joined so sentences that cross a line break are whole.
 * `line` is the 1-based number of the unit's first line, matching the gates.
 */
export function prepare(markdown) {
  const lines = markdown.split('\n');
  const locked = lockedMask(markdown);
  const groups = [];
  let cur = null;
  lines.forEach((line, i) => {
    if (locked[i] || !line.trim()) {
      cur = null;
      return;
    }
    if (cur && !ITEM.test(line) && !cur.broken) {
      cur.indices.push(i);
    } else {
      cur = { indices: [i], broken: false };
      groups.push(cur);
    }
    if (BREAK.test(line)) cur.broken = true;
  });

  const editable = [];
  for (const g of groups) {
    const first = lines[g.indices[0]];
    const prefix = first.match(PREFIX)[0];
    const rest = g.indices.slice(1).map(i => lines[i].replace(/^\s*(?:>\s?)*/, '').trim());
    const flat = [first.slice(prefix.length).trim(), ...rest].join(' ');
    const { masked, spans } = mask(flat);
    if (!lower(masked).filter(t => !/^⟦/.test(t)).length) continue;
    const second = g.indices[1] !== undefined ? lines[g.indices[1]].match(/^\s*(?:>\s?)*/)[0] : null;
    const cont = second ?? (prefix.includes('>') ? prefix : ' '.repeat(prefix.length));
    const width = Math.max(100, ...g.indices.map(i => lines[i].length));
    editable.push({ indices: g.indices, index: g.indices[0], line: g.indices[0] + 1, prefix, cont, width, masked, spans });
  }
  return { lines, editable };
}

/** Re-wrap a unit. Words are split on spaces in the masked text; each placeholder counts at its real length and is never broken. */
function wrap(target, maskedText) {
  const words = maskedText.split(' ').filter(Boolean);
  const out = [];
  let line = target.prefix;
  let empty = true;
  for (const w of words) {
    const real = unmask(w, target.spans);
    if (!empty && line.length + 1 + real.length > target.width) {
      out.push(line);
      line = target.cont + real;
    } else {
      line += (empty ? '' : ' ') + real;
    }
    empty = false;
  }
  out.push(line);
  return out;
}

/** The text sent to the model: one masked line per row, tagged with its line number. */
export function promptView(ctx) {
  return ctx.editable.map(e => `L${e.line}: ${e.masked}`).join('\n');
}

function findUnique(ctx, before) {
  const hits = ctx.editable.filter(e => e.masked.includes(before));
  if (hits.length !== 1) return null;
  if (hits[0].masked.split(before).length !== 2) return null;
  return hits[0];
}

const capitalizedMidSentence = (sentence, span) => {
  const all = sentence.match(TOKEN) || [];
  return span.some(t => {
    const idx = all.findIndex((x, i) => x.toLowerCase() === t && i > 0);
    return idx > 0 && /^\p{Lu}/u.test(all[idx]);
  });
};

// Sentence-opening filler that carries no information. Removing it is safe without a finding.
const FILLER = ['obviously', 'clearly', 'of course', 'needless to say'];

/** Drop edits for "Obviously, the ..." style openers, computed here so no model call is needed. */
export function fillerEdits(ctx) {
  const re = new RegExp(`(?:^|(?<=[.!?]\\s))(${FILLER.join('|')}),\\s+(\\p{L}\\S*)`, 'giu');
  const out = [];
  for (const e of ctx.editable) {
    for (const m of e.masked.matchAll(re)) {
      const next = m[2];
      out.push({ type: 'drop', before: m[0], after: next[0].toUpperCase() + next.slice(1) });
    }
  }
  return out;
}

/** Strings the gates flagged, as tests over a span of text. */
export function flaggedMatchers(findings) {
  const tests = [span => FILLER.includes(span)];
  for (const f of findings) {
    if (f.quote) {
      const q = lower(f.quote).join(' ');
      tests.push(span => q.includes(span));
    } else if (f.rule?.startsWith('slop-lexical:')) {
      try {
        const re = new RegExp(f.rule.slice('slop-lexical:'.length), 'i');
        tests.push((span, raw) => re.test(raw));
      } catch { /* not a regex; skip */ }
    }
  }
  return tests;
}

/** Names and acronyms: capitalized words not opening a sentence, and all-caps words anywhere. */
function properTokens(text) {
  const out = [];
  for (const sentence of sentencesOf(text)) {
    (sentence.match(TOKEN) || []).forEach((t, i) => {
      if (t.startsWith('⟦')) return;
      if (/^\p{Lu}{2,}$/u.test(t) || (i > 0 && /\p{Lu}/u.test(t))) out.push(t);
    });
  }
  return out;
}

function keepsCase(before, after) {
  const have = new Map();
  for (const t of tokens(after)) have.set(t, (have.get(t) || 0) + 1);
  for (const t of properTokens(before)) {
    if (!have.get(t)) return false;
    have.set(t, have.get(t) - 1);
  }
  return true;
}

function fail(reason) {
  return { ok: false, reason };
}

function sameRun(before, after) {
  // Returns the removed run if `after` is `before` minus one contiguous run.
  if (after.length >= before.length) return null;
  let start = 0;
  while (start < after.length && before[start] === after[start]) start++;
  const removed = before.length - after.length;
  const tail = before.slice(start + removed);
  return eq(tail, after.slice(start)) ? { start, run: before.slice(start, start + removed) } : null;
}

/**
 * Validate one edit against the page. Returns { ok, reason } or, when valid,
 * { ok: true, kind, line, before, after } with the final masked `after`.
 */
export function validateEdit(edit, ctx, matchers = []) {
  const hit = edit.before ? findUnique(ctx, edit.before) : null;
  if (!hit) return fail('"before" is not one exact, unique span of a single prose line');

  const beforeSentences = sentencesOf(hit.masked);
  const container = beforeSentences.find(s => s.includes(edit.before)) ?? edit.before;
  const beforeTok = lower(edit.before);

  if (edit.type === 'swap') {
    const from = (edit.from || '').toLowerCase().trim();
    const to = SWAPS.get(from);
    if (!to) return fail(`"${edit.from}" is not in the approved swap table`);
    const re = new RegExp(`\\b${from.replace(/\s+/g, '\\s+')}\\b`, 'i');
    const m = edit.before.match(re);
    if (!m) return fail('swap word not in "before"');
    const cased = /^\p{Lu}/u.test(m[0]) ? to[0].toUpperCase() + to.slice(1) : to;
    const after = edit.before.replace(re, cased);
    return { ok: true, kind: 'auto', type: 'swap', line: hit.line, before: edit.before, after };
  }

  const after = (edit.after ?? '').replace(/\s{2,}/g, ' ').replace(/\s+([.,;:!?])/g, '$1').trim();
  if (edit.type !== 'drop' && !after.trim()) return fail('empty "after"');
  if (after && addsSymbols(edit.before, after)) return fail('"after" contains characters the checker does not allow (markup or symbols)');
  const afterTok = lower(after);

  // Placeholders must survive in the same order in every edit type.
  const ph = a => a.filter(t => t.startsWith('⟦'));
  if (!eq(ph(beforeTok), ph(afterTok))) return fail('inline code, links, bold text, or images were changed');

  if (edit.type === 'reword') {
    // A free rewrite may not lose a number, a negation, or a requirement or condition word.
    const count = (toks, keep) => toks.filter(keep).reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
    const guarded = t => /\d/.test(t) || NEGATIONS.has(t) || MODALS.has(t) || /n['’]t$/.test(t);
    const need = count(beforeTok, guarded);
    const have = count(afterTok, guarded);
    for (const [t, n] of need) if ((have.get(t) || 0) < n) return fail(`reword drops "${t}", which can carry meaning`);
    return { ok: true, kind: 'auto', type: 'reword', line: hit.line, before: edit.before, after };
  }

  if (edit.type === 'drop') {
    const res = sameRun(beforeTok, afterTok);
    if (!res) return fail('drop must remove exactly one contiguous run of words');
    const { run } = res;
    if (run.length > 15) return fail('drop removes more than 15 words');
    const bad = run.find(t => /\d/.test(t) || t.startsWith('⟦') || NEGATIONS.has(t) || MODALS.has(t) || /n['’]t$/.test(t));
    if (bad) return fail(`drop would remove "${bad}", which can carry meaning`);
    if (capitalizedMidSentence(container, run)) return fail('drop would remove a capitalized name');
    if (!keepsCase(container, after ? container.replace(edit.before, after) : container.replace(edit.before, ''))) return fail('drop changed the capitalization of a name or acronym');
    const span = run.join(' ');
    const rawSpan = run.join(' ');
    if (!matchers.some(t => t(span, rawSpan))) return fail('removed words were not flagged by the gates');
    const remaining = hit.masked.replace(edit.before, after);
    if (!lower(remaining).filter(t => !t.startsWith('⟦')).length) return fail('drop would empty the line');
    return { ok: true, kind: 'auto', type: 'drop', line: hit.line, before: edit.before, after };
  }

  return fail(`unknown edit type "${edit.type}"`);
}

/** Apply validated edits. Text outside the edited spans is never touched. Returns the new page. */
export function applyEdits(ctx, edits) {
  const byLine = new Map();
  for (const e of edits) {
    const target = ctx.editable.find(x => x.line === e.line);
    const list = byLine.get(target.index) ?? { target, items: [] };
    list.items.push(e);
    byLine.set(target.index, list);
  }
  const replace = new Map();
  const drop = new Set();
  for (const [index, { target, items }] of byLine) {
    let text = target.masked;
    for (const e of items) {
      if (text.split(e.before).length !== 2) continue; // overlapped by an earlier edit in the same unit
      text = text.replace(e.before, () => e.after);
    }
    if (text === target.masked) continue;
    replace.set(index, wrap(target, text));
    target.indices.slice(1).forEach(i => drop.add(i));
  }
  const out = [];
  ctx.lines.forEach((line, i) => {
    if (drop.has(i)) return;
    if (replace.has(i)) out.push(...replace.get(i));
    else out.push(line);
  });
  return out.join('\n');
}

/** Unmasked before/after for a verified edit, for the meaning check and for suggestions. */
export function readable(ctx, e) {
  const target = ctx.editable.find(x => x.line === e.line);
  return { before: unmask(e.before, target.spans), after: unmask(e.after, target.spans) };
}
