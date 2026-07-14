// Very small markdown -> HTML renderer. Full markdown-it would work but pulls
// a lot of surface area; the answers here are small enough that a hand-rolled
// pass covers headings, paragraphs, fenced code, inline code, links, lists,
// bold/italic, and (via KaTeX) LaTeX math.
//
// LaTeX pipeline:
//   1. Pre-process the raw markdown to lift `$$...$$` and `$...$` segments
//      into opaque placeholders (KATEX_BLOCK_<n> / KATEX_INLINE_<n>) so the
//      regex passes for links/bold/italic don't chew on `$`s.
//   2. Render the markdown normally.
//   3. Post-process to swap the placeholders back in as KaTeX-rendered HTML.

import katex from 'katex';

function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Attribute-context URL escape. inline() runs esc() over the whole string
// first, so by the time a URL is captured by a link regex `& < >` are already
// entity-encoded. The one attribute-breaker still slipping through is `"`
// (and `'` if we ever switch to single-quoted attributes). Without this a
// URL like `https://x/a"onmouseover="alert\`1\`` closes the href attribute
// and injects an event handler in the rendered <a>.
function urlAttr(u) {
  return String(u).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Fenced-code language identifier goes into `class="language-…"`. Whitelist
// safe characters instead of trusting esc() (which misses `"`). Anything
// non-conforming falls back to no class — Prism/highlighter just skips it.
// `#` is included specifically so `c#` / `f#` / `q#` survive intact —
// `#` has no delimiter role in HTML attribute values or class strings, so
// allowing it doesn't reopen the attribute-injection surface (which was
// only `"` / `'` / `<` / `>` / `&`).
function safeLang(s) {
  const m = /^[A-Za-z0-9_+.#-]{1,32}$/.exec(String(s || '').trim());
  return m ? m[0] : '';
}

function renderKatex(tex, displayMode) {
  try {
    return katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      output: 'html',
      strict: 'ignore',
    });
  } catch (e) {
    // Fall back to escaped source so a bad expression is still visible.
    return `<code>${esc(tex)}</code>`;
  }
}

// Lift LaTeX out of the input string, returning [scrubbed, blocks].
// Displays `$$…$$` first, then inline `$…$`.
// Anchors on inline math:
//   - opening `$` must NOT be preceded by a digit or backslash
//     (avoids mangling "$5" prices or escaped "\$")
//   - closing `$` must NOT be followed by a digit
//   - no space adjacent to either `$`
//   - middle capped at INLINE_MATH_MAX chars: a delimiter rule, not a content
//     filter. Inline math is by convention short (KaTeX's own guidance); this
//     stops a stray unpaired `$` from sweeping across an entire paragraph and
//     dragging any `[markdown](links)` inside it into the math extraction. If
//     a model emits malformed math, the `$` signs render literally — that IS
//     the evaluation signal we want to surface, not hide.
function extractLatex(md) {
  const INLINE_MATH_MAX = 80;
  const blocks = [];
  let out = md.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    const idx = blocks.length;
    blocks.push({ mode: 'display', tex });
    return `\x00KATEX_${idx}\x00`;
  });
  const inlineRe = new RegExp(
    // eslint-disable-next-line prefer-template
    '(^|[^\\\\$\\d])\\$([^\\s$][^$\\n]{0,' + (INLINE_MATH_MAX - 2) + '}?[^\\s$])\\$(?!\\d)',
    'g',
  );
  out = out.replace(inlineRe, (_, pre, tex) => {
    const idx = blocks.length;
    blocks.push({ mode: 'inline', tex });
    return `${pre}\x00KATEX_${idx}\x00`;
  });
  // Single-token `$x$` (start and end anchors would otherwise need a middle char).
  out = out.replace(/(^|[^\\$\d])\$([^\s$])\$(?!\d)/g, (_, pre, tex) => {
    const idx = blocks.length;
    blocks.push({ mode: 'inline', tex });
    return `${pre}\x00KATEX_${idx}\x00`;
  });
  return [out, blocks];
}

function restoreLatex(html, blocks) {
  return html.replace(/\x00KATEX_(\d+)\x00/g, (_, i) => {
    const b = blocks[Number(i)];
    if (!b) return '';
    return renderKatex(b.tex, b.mode === 'display');
  });
}

// A pipe row: `| a | b | c |` (allows leading/trailing pipe optional but must
// contain at least one internal pipe once trimmed of leading/trailing `|`).
function splitPipeRow(line) {
  let t = line.trim();
  if (!t) return null;
  if (t.startsWith('|')) t = t.slice(1);
  if (t.endsWith('|')) t = t.slice(0, -1);
  const cells = t.split('|').map((c) => c.trim());
  if (cells.length < 2) return null;
  return cells;
}

// Header separator row: each cell is a run of `-` optionally prefixed/suffixed
// with `:` for alignment. Some models emit `-` counts as low as 1.
function isSeparatorRow(line) {
  const cells = splitPipeRow(line);
  if (!cells) return false;
  return cells.every((c) => /^:?-+:?$/.test(c));
}

function isTableStart(lines, i) {
  // Header on lines[i], separator on the next non-blank line.
  const header = splitPipeRow(lines[i]);
  if (!header) return false;
  let j = i + 1;
  while (j < lines.length && lines[j].trim() === '') j++;
  if (j >= lines.length) return false;
  return isSeparatorRow(lines[j]);
}

function parseTable(lines, i) {
  const start = i;
  const header = splitPipeRow(lines[i]);
  // skip to separator
  let j = i + 1;
  while (j < lines.length && lines[j].trim() === '') j++;
  const alignCells = splitPipeRow(lines[j]) || [];
  const aligns = alignCells.map((c) => {
    const left = c.startsWith(':');
    const right = c.endsWith(':');
    if (left && right) return 'center';
    if (right) return 'right';
    if (left) return 'left';
    return null;
  });
  j++;
  const bodyRows = [];
  while (j < lines.length) {
    const row = splitPipeRow(lines[j]);
    if (!row) break;
    bodyRows.push(row);
    j++;
  }
  const styleFor = (idx) => (aligns[idx] ? ` style="text-align:${aligns[idx]}"` : '');
  const thead = `<thead><tr>${header.map((c, k) => `<th${styleFor(k)}>${inline(c)}</th>`).join('')}</tr></thead>`;
  const tbody = bodyRows.length
    ? `<tbody>${bodyRows
        .map(
          (r) =>
            `<tr>${r.map((c, k) => `<td${styleFor(k)}>${inline(c)}</td>`).join('')}</tr>`,
        )
        .join('')}</tbody>`
    : '';
  return { html: `<table>${thead}${tbody}</table>`, consumed: j - start };
}

function inline(text) {
  let out = esc(text);
  // inline code
  out = out.replace(/`([^`\n]+)`/g, (_, c) => `<code>${c}</code>`);

  // Citation-numbered links: [[N]](url) -> superscript pill.
  // Only when N is a well-formed numeric ID AND a URL follows. Malformed
  // variants ([[1.2.1]], [[1.1.2],], [[7]] with no URL) render as literal
  // text — that's a MODEL output signal for the evaluator, not a rendering
  // bug for us to paper over.
  out = out.replace(
    /\[\[(\d{1,3})\]\]\s*\((https?:\/\/[^\s)]+)\)/g,
    (_, n, u) => `<a class="pilot-cite" href="${urlAttr(u)}" target="_blank" rel="noopener noreferrer"><sup>[${n}]</sup></a>`,
  );

  // Markdown links [text](url), allowing single-level nested brackets in text.
  out = out.replace(
    /\[((?:\[[^\[\]]*\]|[^\[\]])+)\]\s*\((https?:\/\/[^\s)]+)\)/g,
    (_, t, u) => `<a href="${urlAttr(u)}" target="_blank" rel="noopener noreferrer">${t}</a>`,
  );

  // autolinks
  out = out.replace(/(^|\s)(https?:\/\/[^\s<]+)/g, (_, pre, u) => `${pre}<a href="${urlAttr(u)}" target="_blank" rel="noopener noreferrer">${u}</a>`);
  // bold **x**
  out = out.replace(/\*\*([^*\n]+)\*\*/g, (_, t) => `<strong>${t}</strong>`);
  // italic *x*
  out = out.replace(/(^|\W)\*(\S(?:[^*\n]*\S)?)\*(?=\W|$)/g, (_, pre, t) => `${pre}<em>${t}</em>`);
  return out;
}

export function renderMarkdown(md) {
  if (!md) return '';
  // Cleanup: strip a stray trailing lone underscore some models emit at end of
  // paragraph (looks like unmatched italic markup to the reader).
  md = md.replace(/([?.!])_(\s*)$/, '$1$2').replace(/(\S)_(\s*\n)/g, '$1$2');

  // Lift LaTeX out BEFORE markdown parsing so its `$` and `\` characters
  // don't collide with bold/italic/escape passes.
  const [scrubbed, latexBlocks] = extractLatex(md);
  md = scrubbed;

  const lines = md.split('\n');
  const out = [];
  let i = 0;
  const flushPara = (buf) => {
    if (!buf.length) return;
    // Respect markdown hard-breaks (two-or-more trailing spaces = <br />).
    const parts = buf.map((line) => inline(line.replace(/\s+$/, '')));
    let html = parts[0];
    for (let i = 1; i < parts.length; i++) {
      const hardBreak = /  +$/.test(buf[i - 1]);
      html += (hardBreak ? '<br />' : ' ') + parts[i];
    }
    out.push(`<p>${html}</p>`);
  };
  let paraBuf = [];

  while (i < lines.length) {
    const line = lines[i];

    if (/^```/.test(line)) {
      flushPara(paraBuf); paraBuf = [];
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      const code = esc(codeLines.join('\n'));
      const cls = safeLang(lang);
      out.push(`<pre><code${cls ? ` class="language-${cls}"` : ''}>${code}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushPara(paraBuf); paraBuf = [];
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      i++;
      continue;
    }

    // ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      flushPara(paraBuf); paraBuf = [];
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
        i++;
      }
      out.push(`<ol>${items.map((t) => `<li>${inline(t)}</li>`).join('')}</ol>`);
      continue;
    }

    // unordered list
    if (/^\s*[-*+]\s+/.test(line)) {
      flushPara(paraBuf); paraBuf = [];
      const items = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*+]\s+/, ''));
        i++;
      }
      out.push(`<ul>${items.map((t) => `<li>${inline(t)}</li>`).join('')}</ul>`);
      continue;
    }

    // horizontal rule
    if (/^\s*---+\s*$/.test(line)) {
      flushPara(paraBuf); paraBuf = [];
      out.push('<hr />');
      i++;
      continue;
    }

    // GitHub-flavored table:
    //   | col1 | col2 |
    //   | :--- | :--- |
    //   | a    | b    |
    // Also accepts inline-collapsed form some models emit (no newlines between
    // rows). We detect a header row followed by a separator row on the next
    // non-empty line.
    if (isTableStart(lines, i)) {
      flushPara(paraBuf); paraBuf = [];
      const { html, consumed } = parseTable(lines, i);
      out.push(html);
      i += consumed;
      continue;
    }

    // blockquote
    if (/^\s*>\s?/.test(line)) {
      flushPara(paraBuf); paraBuf = [];
      const buf = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*>\s?/, ''));
        i++;
      }
      out.push(`<blockquote>${buf.map((t) => inline(t)).join('<br />')}</blockquote>`);
      continue;
    }

    if (line.trim() === '') {
      flushPara(paraBuf); paraBuf = [];
      i++;
      continue;
    }

    paraBuf.push(line);
    i++;
  }
  flushPara(paraBuf);
  const html = out.join('\n');
  return restoreLatex(html, latexBlocks);
}
