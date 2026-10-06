/**
 * prose.mjs — strip a markdown page down to body prose.
 *
 * Used by readability.mjs and slop.mjs so neither scores content that was
 * never meant to read as prose: frontmatter, code fences, tables, JSX/import
 * lines, image references, and link URLs. See
 * .claude/references/doc-draft-conventions.md §7.1.
 *
 * Contract: extractProse() returns one prose line per surviving source line
 * (stripped lines are omitted, not blanked), plus a parallel array mapping
 * each returned line back to its 1-based line number in the original file.
 * Callers that report a finding against prose text use this map to recover
 * the line number a human would look up in the actual page.
 */

/** @typedef {{ text: string, lineNumbers: number[] }} ProseResult */

const FENCE_RE = /^\s*(```|~~~)/;
const ADMONITION_RE = /^\s*:::(note|warning|tip|danger)?\s*$/i;
const TABLE_ROW_RE = /^\s*\|.*\|\s*$/;
const IMPORT_EXPORT_RE = /^\s*(import|export)\s.+$/;
const JSX_LINE_ONLY_RE = /^\s*<\/?[A-Za-z][\w.]*(\s[^<>]*)?\/?>\s*$/;
const HEADING_PREFIX_RE = /^(#{1,6})\s+/;

/**
 * Strip YAML frontmatter (--- ... ---) from the top of a file.
 * @param {string[]} lines
 * @returns {{ body: string[], bodyStartLine: number }} body lines (1:1 with
 *   original numbering preserved via offset) and the 1-based line the body
 *   starts on.
 */
function stripFrontmatter(lines) {
  if (lines[0] !== '---') {
    return { body: lines, bodyStartLine: 1 };
  }
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      return { body: lines.slice(i + 1), bodyStartLine: i + 2 };
    }
  }
  // Unterminated frontmatter fence — treat the whole file as frontmatter.
  return { body: [], bodyStartLine: lines.length + 1 };
}

/**
 * Remove markdown image syntax entirely: ![alt](url "title").
 * Alt text is accessibility metadata, not body prose — unlike link text,
 * which stays (see stripLinkUrls).
 */
function stripImages(line) {
  return line.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
}

/**
 * Replace [text](url) with text — the link text is real prose, the URL isn't.
 */
function stripLinkUrls(line) {
  return line.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
}

/** Remove inline code spans, backticks and all — not prose, and code tokens
 * (flag names, paths) would otherwise skew sentence-length/readability
 * stats and get treated as words they aren't. */
function stripInlineCode(line) {
  return line.replace(/`[^`]*`/g, '');
}

/** Strip a leading admonition marker's own line; the content inside stays. */
function isAdmonitionMarkerLine(line) {
  return ADMONITION_RE.test(line);
}

/** Strip JSX/HTML tags but keep any inline text they wrap, e.g.
 * `<TabItem value="x" label="y">` on its own line is dropped entirely
 * (it carries no reader-facing prose), but `Some <strong>text</strong>.`
 * keeps "Some text." */
function stripJsxTags(line) {
  return line.replace(/<\/?[A-Za-z][\w.]*(\s[^<>]*)?\/?>/g, '');
}

function stripHeadingMarker(line) {
  return line.replace(HEADING_PREFIX_RE, '');
}

/**
 * @param {string} markdown
 * @returns {ProseResult}
 */
export function extractProse(markdown) {
  const rawLines = markdown.split('\n');
  const { body, bodyStartLine } = stripFrontmatter(rawLines);

  const outLines = [];
  const lineNumbers = [];
  let inFence = false;
  let inTable = false;

  for (let i = 0; i < body.length; i++) {
    const originalLineNo = bodyStartLine + i;
    const raw = body[i];

    if (FENCE_RE.test(raw)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    if (IMPORT_EXPORT_RE.test(raw)) continue;
    if (JSX_LINE_ONLY_RE.test(raw)) continue;
    if (isAdmonitionMarkerLine(raw)) continue;

    if (TABLE_ROW_RE.test(raw)) {
      inTable = true;
      continue;
    }
    if (inTable && raw.trim() === '') {
      inTable = false;
      continue;
    }
    if (inTable) continue;

    let text = raw;
    text = stripImages(text);
    text = stripLinkUrls(text);
    text = stripInlineCode(text);
    text = stripJsxTags(text);
    text = stripHeadingMarker(text);

    outLines.push(text);
    lineNumbers.push(originalLineNo);
  }

  return { text: outLines.join('\n'), lineNumbers };
}

/**
 * Split prose text into sentences for readability scoring.
 * Deliberately simple (period/question/exclamation boundary, guarding
 * against common abbreviations) — good enough for scoring body prose that
 * has already had code/tables/links stripped by extractProse().
 * @param {string} text
 * @returns {string[]}
 */
export function splitSentences(text) {
  const cleaned = text
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
    .join(' ');
  if (!cleaned) return [];

  const ABBREV_RE = /\b(e\.g|i\.e|etc|vs|Mr|Mrs|Ms|Dr|Inc|Ltd|Co|Fig|No)\.$/i;
  const parts = cleaned.split(/(?<=[.!?])\s+(?=[A-Z0-9"'(‘“])/);

  const sentences = [];
  let buffer = '';
  for (const part of parts) {
    buffer = buffer ? `${buffer} ${part}` : part;
    const trimmed = buffer.trim();
    const lastWord = trimmed.split(/\s+/).pop() || '';
    if (ABBREV_RE.test(lastWord)) continue;
    sentences.push(trimmed);
    buffer = '';
  }
  if (buffer.trim()) sentences.push(buffer.trim());
  return sentences.filter(s => /[A-Za-z0-9]/.test(s));
}

/**
 * Extract words for readability/lexical scoring: alphanumeric runs
 * (contractions kept whole, e.g. "don't").
 * @param {string} text
 * @returns {string[]}
 */
export function splitWords(text) {
  const matches = text.match(/[A-Za-z0-9]+(?:'[A-Za-z]+)?/g);
  return matches || [];
}
