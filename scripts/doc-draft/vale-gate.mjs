#!/usr/bin/env node

/**
 * vale-gate.mjs — deterministic Vale findings gate (Phase 1).
 *
 * Phase 1 of the docdraft quality system: no model calls, no fact pack, no
 * extractor — this gate must run standalone against an arbitrary markdown
 * file, today. It reuses the repo's existing Vale install and full Netwrix
 * rule pack (.vale/styles/Netwrix/*.yml, 43 rules, all `level: warning`,
 * configured via .vale.ini at the repo root) rather than rebuilding any of
 * that. Every Netwrix rule is a warning, so Vale itself never "fails" a
 * file — this script is what turns "N warnings found" into a pass/fail
 * decision, by comparing the post-exclusion finding count against a
 * ceiling (.claude/references/doc-draft-conventions.md §6.1; known
 * false-positive exclusions are §6.2).
 *
 * Usage:
 *   node scripts/doc-draft/vale-gate.mjs <file.md> [--table] [--ceiling N] [--page-type TYPE]
 *
 * Default output is the shared JSON gate-result contract (lib/report.mjs).
 * --table prints the human-facing findings table instead. The ceiling is
 * per-page-type (§6.1) — the type is inferred from the file's path/name
 * (inferPageType() below) since Phase 1 has no fact-pack-driven template to
 * ask instead (same caveat as readability.mjs §4.2). --page-type lets a
 * caller state the type explicitly rather than rely on inference — the hook
 * a future template plugs into. --ceiling overrides the resolved ceiling
 * outright, for one-off calls.
 */

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { buildResult, printResult, exitForResult } from './lib/report.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '../..');

const GATE = 'vale-gate';

// ---------------------------------------------------------------------------
// §6.1 — per-page-type finding ceiling, calibrated against the 56-page
// docs/accessanalyzer/26.1 corpus:
//   git -C <repo> ls-files docs/accessanalyzer/26.1 | grep '\.md$' | grep -v '/kb/'
//
// Real vale --output=JSON was run against every one of those 56 pages, then
// run through the §6.2 false-positive exclusion logic below, bucketed by
// inferPageType(). Post-exclusion finding counts actually observed, by type:
//   landing (1 page):        max 0
//   area-index (10 pages):   max 0
//   whats-new (1 page):      max 0
//   concepts (1 page):       max 0
//   requirements (1 page):   max 0
//   reference (1 page):      max 0
//   procedure (6 pages):     max 0
//   feature (35 pages):      max 7  (service-accounts/client-id-certificate.md)
//
// That worst page (client-id-certificate.md, type "feature") carries 7 real,
// non-excluded Netwrix.FirstPerson hits on literal UI option labels
// ("Generate for me", "Upload my own") — accepted, shipped text that quotes
// an on-screen control name. Rewriting those to dodge the linter would
// misquote the UI, and "quoted first-person UI label" isn't one of the five
// documented false-positive classes this gate implements (see §6.2), so
// those findings are correctly left in, not excluded.
//
// Every other page type has zero real, non-excluded findings anywhere in
// the corpus — but zero headroom on a type with only 1-10 observed samples
// would make the gate maximally brittle for that type's very next real page
// (one incidental warning-level hit and the type's whole ceiling is blown).
// Phase 1 has no fact-pack-driven template (§4.2's caveat applies here too),
// so these numbers can't yet be split further than "type"; PAGE_TYPE_HEADROOM
// gives the zero-observed types the same small cushion §3.2/§4.2 give their
// thresholds, without matching feature's much higher real-world ceiling
// (driven specifically by literal first-person UI labels, a pattern that
// doesn't recur in the other seven types' shipped pages). Note the plan's C1
// pass-the-corpus bar formally binds readability.mjs/slop.mjs, not
// vale-gate.mjs — but calibrating against real accepted writing, by type, is
// still the right practice here.
// ---------------------------------------------------------------------------
const PAGE_TYPE_HEADROOM = 2;
const PAGE_TYPE_CEILINGS = {
  landing: 0 + PAGE_TYPE_HEADROOM,
  'area-index': 0 + PAGE_TYPE_HEADROOM,
  'whats-new': 0 + PAGE_TYPE_HEADROOM,
  concepts: 0 + PAGE_TYPE_HEADROOM,
  requirements: 0 + PAGE_TYPE_HEADROOM,
  reference: 0 + PAGE_TYPE_HEADROOM,
  procedure: 0 + PAGE_TYPE_HEADROOM,
  feature: 7,
};
// Fallback for a path inferPageType() can't place in the table above (an
// arbitrary file outside any recognized docs layout — G0c requires this
// gate to run standalone on any file path, recognized or not). Matches the
// corpus's real worst case across all types, so an unrecognized page isn't
// held to a stricter bar than the type that's actually allowed to be this
// noisy.
const DEFAULT_CEILING = 7;

/**
 * Infer a page's type from its path, the same vocabulary the plan's
 * `docset.<product>.json` template (§4.2, not built in Phase 1) uses:
 * landing, whats-new, concepts, requirements, reference, procedure,
 * area-index (an `index.md` that isn't the version root), feature (the
 * fallback — most pages in the real corpus are this type). Filename-pattern
 * based, not accessanalyzer-specific: `index.md`, `whats-new.md`, and an
 * `install/` directory are Docusaurus/house conventions this repo uses
 * across products (see docs/CLAUDE.md's versioning section), not literals
 * unique to one product.
 * @param {string} filePath absolute or repo-relative path
 * @returns {string}
 */
export function inferPageType(filePath) {
  const rel = path.relative(REPO_ROOT, path.resolve(filePath)).split(path.sep).join('/');
  const parts = rel.split('/').filter(Boolean);
  const base = (parts[parts.length - 1] || '').toLowerCase();

  if (base === 'whats-new.md') return 'whats-new';
  if (base === 'key-concepts.md') return 'concepts';
  if (base === 'requirements.md') return 'requirements';
  if (/reference\.md$/.test(base)) return 'reference';
  if (base === 'index.md') {
    // A version root is docs/<product>/index.md (single-version/SaaS) or
    // docs/<product>/<version>/index.md (versioned) — 3 or 4 path segments
    // starting at "docs". Anything deeper is a section/area index, not the
    // product landing page.
    const isVersionRoot = parts[0] === 'docs' && (parts.length === 3 || parts.length === 4);
    return isVersionRoot ? 'landing' : 'area-index';
  }
  if (parts.includes('install')) return 'procedure';
  return 'feature';
}

/**
 * Resolve the ceiling for a file: explicit --ceiling wins outright; else the
 * table above keyed by an explicit --page-type or, failing that,
 * inferPageType(); else DEFAULT_CEILING for a type the table doesn't cover.
 * @param {string} filePath
 * @param {{ ceiling?: number, pageType?: string }} [opts]
 * @returns {number}
 */
function resolveCeiling(filePath, { ceiling, pageType } = {}) {
  if (ceiling !== undefined) return ceiling;
  const type = pageType || inferPageType(filePath);
  return PAGE_TYPE_CEILINGS[type] ?? DEFAULT_CEILING;
}

// ---------------------------------------------------------------------------
// §6.2 — known false-positive classes.
// Source: .claude/agent-memory/tech-writer/vale_false_positives.md. Vale's
// Netwrix rules are regex existence/substitution checks with no grammar or
// context awareness, so a handful of documented patterns fire on text that
// isn't actually a violation. Findings matching one of these classes are
// excluded from the pass/fail count entirely (not just downweighted) and
// reported separately in metrics.excluded_false_positives so the exclusion
// stays visible instead of silently vanishing.
//
// Class 1 — Netwrix.FirstPerson matching the "I" inside "I/O". The token is
// \bI\b; a slash is a word boundary, so "disk I/O performance" trips it even
// though it's a standard technical term, not the pronoun.
//
// Class 2 — Netwrix.FirstPersonPlural matching "us" inside the country code
// "US" (e.g. an example value in a table) or the "en-us" locale segment of a
// URL. The token is \bus\b, ignorecase: true.
//
// Class 3 — Netwrix.OxfordComma firing on literal Windows/NetApp UI strings
// quoted verbatim from the product, most commonly "This folder, subfolders
// and files" (a real Windows Advanced Security Settings dropdown value).
// Adding a comma would misquote what the reader sees on screen.
//
// Classes 4/5 — Netwrix.OxfordComma's regex (`\w+,\s+\w+\s+and/or\b`) can't
// tell a genuine 3+-item series ("FQDN, NETBIOS or IPv4 address" — a real
// violation, still needs the comma) from a 2-item pattern that only looks
// like one: either (a) the comma is a clause boundary and what follows is a
// 2-item verb/participle list ("Prior to configuring your plan, read and
// complete the instructions"), or (b) the 2-item phrase is a comma-bounded
// appositive/parenthetical ("An account's type, local or federated, can't
// change..."), or (c) the leading segment's own comma introduces a "for
// example"/"e.g."/"for instance" parenthetical rather than a first list item
// ("The tool covers frameworks, for example, PCI and NIST 800-53
// requirements." — two items, PCI and NIST, not three). classifyOxfordComma()
// below distinguishes these from a real series by: an earlier comma already
// inside the leading segment that is NOT a "for example"-style parenthetical
// (already a 3+ series — never excluded, this is the "don't invent an
// alternatives-list exception" warning in the source doc); a clause-like
// leading segment (common instructional verb or a gerund/participle); or the
// 2-item phrase being immediately closed by another comma or ")" (appositive
// bound).
//
// Class 6 (Netwrix.Idioms / any rule) — a rule fires on a substring of a
// literal UI string quoted verbatim from the product (a bolded toggle name
// like "Leverage Integration API", a literal tab name like "APIs my
// organization uses", the Windows dropdown value "This folder, subfolders
// and files", or a real Microsoft domain pattern like
// "{TenantName}-my.sharepoint.com"). The rule that fires varies by string
// (Netwrix.Idioms on "Leverage", Netwrix.FirstPerson on "my",
// Netwrix.OxfordComma on the folder string's comma) but the reason is the
// same in every case: the string is quoted verbatim from the UI and editing
// it — for any rule, not just the one the source doc happened to name —
// would misquote what the customer sees on screen. isLiteralUiStringMatch()
// below is therefore rule-agnostic, checked ahead of every other
// classifier.
// ---------------------------------------------------------------------------

const KNOWN_LITERAL_UI_STRINGS = [
  'this folder, subfolders and files',
  'apis my organization uses',
  'leverage integration api',
];
const KNOWN_LITERAL_UI_DOMAIN_RE = /\{[^}]+\}-my\.sharepoint\.com/i;

/**
 * Class 6: a Vale match falling inside a known literal UI string, regardless
 * of which rule fired. Substring-contained, not position-anchored — these
 * are short, specific, curated phrases (not general text), so a same-line
 * substring check is enough without risking an unrelated match elsewhere on
 * the line.
 * @param {string} match
 * @param {string} lineText
 * @returns {boolean}
 */
function isLiteralUiStringMatch(match, lineText) {
  const lowerLine = lineText.toLowerCase();
  const lowerMatch = match.toLowerCase();
  for (const literal of KNOWN_LITERAL_UI_STRINGS) {
    if (lowerLine.includes(literal) && literal.includes(lowerMatch)) return true;
  }
  if (KNOWN_LITERAL_UI_DOMAIN_RE.test(lineText) && lowerMatch === 'my') return true;
  return false;
}

/** Class 1: "I" inside "I/O". */
function isIoFalsePositive(rule, match, lineText, matchIndex) {
  if (rule !== 'Netwrix.FirstPerson' || match !== 'I') return false;
  const before = lineText[matchIndex - 1];
  const after = lineText[matchIndex + match.length];
  return before === '/' || after === '/';
}

/** Class 2: "us" inside "US" (country code) or an "en-us" locale segment. */
function isUsCodeFalsePositive(rule, match, lineText, matchIndex) {
  if (rule !== 'Netwrix.FirstPersonPlural') return false;
  if (match.toLowerCase() !== 'us') return false;
  if (match === 'US') return true; // all-caps two-letter country code
  const before = lineText.slice(Math.max(0, matchIndex - 3), matchIndex);
  return /en-$/i.test(before); // ".../en-us/..." locale segment
}

// Common instructional/imperative verbs and participles that mark a leading
// segment as a clause rather than a bare list item — deliberately a curated
// list (plus a generic gerund/participle suffix check) rather than a full
// POS tagger; this is a heuristic, not a parser (see §6.2 classes 4/5).
const CLAUSE_VERB_SIGNALS = new Set([
  'go', 'goes', 'went', 'create', 'creates', 'created', 'click', 'clicks',
  'select', 'selects', 'selected', 'choose', 'chooses', 'chose', 'configure',
  'configures', 'configured', 'configuring', 'launch', 'launches', 'launched',
  'read', 'reads', 'reading', 'write', 'writes', 'writing', 'add', 'adds',
  'adding', 'added', 'open', 'opens', 'opened', 'opening', 'navigate',
  'navigates', 'navigated', 'navigating', 'enable', 'enables', 'enabled',
  'enabling', 'disable', 'disables', 'disabled', 'ensure', 'ensures',
  'ensured', 'use', 'uses', 'used', 'using', 'set', 'sets', 'setting', 'run',
  'runs', 'running', 'ran', 'check', 'checks', 'checked', 'checking',
  'verify', 'verifies', 'verified', 'verifying', 'leave', 'leaves', 'leaving',
  'left', 'provide', 'provides', 'provided', 'providing', 'collect',
  'collects', 'collected', 'collecting', 'prefilter', 'prefilters',
  'prefiltered', 'prefiltering', 'register', 'registers', 'registered',
  'registering', 'sign', 'signs', 'signed', 'signing', 'connect', 'connects',
  'connected', 'connecting', 'remove', 'removes', 'removed', 'removing',
  'upload', 'uploads', 'uploaded', 'uploading',
]);

function leadingSegmentReadsAsClause(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  for (const raw of words) {
    const word = raw.toLowerCase().replace(/[^a-z']/g, '');
    if (CLAUSE_VERB_SIGNALS.has(word)) return true;
    if (word.length > 4 && /(ing|ed)$/.test(word)) return true;
  }
  return false;
}

/**
 * Classify a Netwrix.OxfordComma finding as a real violation or one of the
 * documented false-positive classes (§6.2, classes 3/4/5).
 * @param {string} match
 * @param {string} lineText
 * @param {number} matchIndex
 * @returns {{ excluded: boolean, reason?: string }}
 */
function classifyOxfordComma(match, lineText, matchIndex) {
  // Literal-UI-string exclusion (class 6) is checked upstream in
  // classifyFinding() for every rule, not just this one — see
  // isLiteralUiStringMatch().

  const commaIdx = match.indexOf(',');
  if (commaIdx === -1) return { excluded: false };
  const absoluteCommaIdx = matchIndex + commaIdx;
  const before = lineText.slice(0, absoluteCommaIdx);
  const lastBoundaryIdx = Math.max(
    before.lastIndexOf('.'), before.lastIndexOf('!'), before.lastIndexOf('?'),
    before.lastIndexOf(';'), before.lastIndexOf(':'), before.lastIndexOf('|'),
  );
  const leadingSegment = before.slice(lastBoundaryIdx + 1);

  // Extend past the matched "and"/"or" to the word right after it, and look
  // at what immediately follows that word.
  const andOrMatch = match.match(/\b(and|or)\b/i);
  let nextChar = '';
  if (andOrMatch) {
    const afterMatchStart = matchIndex + match.length;
    const rest = lineText.slice(afterMatchStart);
    const wordMatch = rest.match(/^\s*([A-Za-z0-9'-]+)/);
    if (wordMatch) {
      const idxAfterWord = afterMatchStart + wordMatch[0].length;
      nextChar = lineText[idxAfterWord] || '';
    }
  }

  const appositiveBounded = nextChar === ',' || nextChar === ')';
  const leadingHasOwnComma = leadingSegment.includes(',');
  const leadingIsClause = leadingSegmentReadsAsClause(leadingSegment);

  // An earlier comma already inside the leading segment means an earlier
  // item already exists in this series — 3+ items, a genuine violation.
  // Do NOT exclude it just because it's an alternatives ("or") list; see the
  // source doc's explicit warning against inventing that exception. The one
  // exception to THAT: the earlier comma introduces a "for example"/"e.g."/
  // "for instance" parenthetical rather than a first list item (class 1) —
  // the leading segment ends with the introducer phrase itself, not with a
  // list item.
  if (leadingHasOwnComma) {
    if (/(?:^|[\s,])(?:for example|for instance|e\.g\.|i\.e\.)$/i.test(leadingSegment.trim())) {
      return { excluded: true, reason: 'oxfordcomma-for-example-parenthetical' };
    }
    return { excluded: false };
  }

  if (appositiveBounded || leadingIsClause) {
    return { excluded: true, reason: 'oxfordcomma-2item-clause-boundary' };
  }

  return { excluded: false };
}

/**
 * Run the real `vale` binary against a file and return its raw findings
 * array (Vale's JSON keys results by file path; a single-file invocation
 * has exactly one key). Must run with cwd at the repo root so Vale can find
 * .vale.ini — Vale has no ancestor-search fallback once StylesPath fails to
 * resolve, it just errors (E100 "no config file found").
 * @param {string} filePath
 * @returns {Array<Record<string, unknown>>}
 */
function runVale(filePath) {
  let stdout;
  try {
    stdout = execFileSync('vale', ['--output=JSON', filePath], {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
    });
  } catch (err) {
    // Vale's Netwrix rules are all `level: warning`, so a normal run with
    // findings still exits 0; a non-zero exit here means a real runtime
    // error (bad path, config problem). Some of those still print a JSON
    // error payload on stdout, so surface that if present.
    if (err.stdout) {
      stdout = err.stdout;
    } else {
      throw new Error(`vale invocation failed: ${err.message}`);
    }
  }

  const parsed = JSON.parse(stdout || '{}');
  const values = Object.values(parsed);
  return values[0] || [];
}

/**
 * Resolve each raw Vale finding's position within its source line, so the
 * false-positive classifiers can inspect surrounding text. Findings with
 * identical (line, rule, match) tuples (e.g. "US" appearing twice on one
 * line) are resolved to successive occurrences via a per-key cursor.
 * @param {Array<Record<string, unknown>>} rawFindings
 * @param {string[]} lines
 * @returns {Array<{ raw: Record<string, unknown>, lineText: string, matchIndex: number }>}
 */
function resolvePositions(rawFindings, lines) {
  const cursors = new Map();
  return rawFindings.map(raw => {
    const lineText = lines[raw.Line - 1] || '';
    const key = `${raw.Line}|${raw.Check}|${raw.Match}`;
    const fromIndex = cursors.get(key) || 0;
    const foundAt = lineText.indexOf(raw.Match, fromIndex);
    const matchIndex = foundAt === -1 ? 0 : foundAt;
    cursors.set(key, matchIndex + 1);
    return { raw, lineText, matchIndex };
  });
}

/**
 * @param {{ raw: Record<string, unknown>, lineText: string, matchIndex: number }} resolved
 * @returns {{ excluded: boolean, reason?: string }}
 */
function classifyFinding({ raw, lineText, matchIndex }) {
  if (isLiteralUiStringMatch(raw.Match, lineText)) {
    return { excluded: true, reason: 'literal-ui-string' };
  }
  if (isIoFalsePositive(raw.Check, raw.Match, lineText, matchIndex)) {
    return { excluded: true, reason: 'firstperson-io' };
  }
  if (isUsCodeFalsePositive(raw.Check, raw.Match, lineText, matchIndex)) {
    return { excluded: true, reason: 'firstpersonplural-us-code' };
  }
  if (raw.Check === 'Netwrix.OxfordComma') {
    return classifyOxfordComma(raw.Match, lineText, matchIndex);
  }
  return { excluded: false };
}

/**
 * Run the gate against a single markdown file.
 * @param {string} filePath
 * @param {{ ceiling?: number, pageType?: string }} [opts]
 * @returns {import('./lib/report.mjs').GateResult}
 */
export function runGate(filePath, { ceiling, pageType } = {}) {
  const resolvedCeiling = resolveCeiling(filePath, { ceiling, pageType });
  const markdown = fs.readFileSync(filePath, 'utf8');
  const lines = markdown.split('\n');
  const rawFindings = runVale(filePath);
  const resolved = resolvePositions(rawFindings, lines);

  const findings = [];
  const excludedFalsePositives = [];

  for (const item of resolved) {
    const classification = classifyFinding(item);
    const finding = {
      line: item.raw.Line,
      rule: item.raw.Check,
      message: item.raw.Message,
      text: item.raw.Match,
    };
    if (classification.excluded) {
      excludedFalsePositives.push({ ...finding, reason: classification.reason });
    } else {
      findings.push(finding);
    }
  }

  const overCeiling = findings.length > resolvedCeiling;
  // buildResult() derives pass from findings.length === 0, which doesn't
  // match this gate's ceiling-based pass/fail rule, so when the finding
  // count is within the ceiling but non-zero, report the same findings for
  // visibility but override pass back to true afterward.
  const result = buildResult({
    page: filePath,
    gate: GATE,
    metrics: {
      raw_finding_count: rawFindings.length,
      excluded_false_positive_count: excludedFalsePositives.length,
      remaining_finding_count: findings.length,
      page_type: pageType || inferPageType(filePath),
      ceiling: resolvedCeiling,
      excluded_false_positives: excludedFalsePositives,
    },
    findings,
  });
  result.pass = !overCeiling;

  return result;
}

function parseArgs(argv) {
  const useTable = argv.includes('--table');
  let ceiling;
  const ceilingIdx = argv.indexOf('--ceiling');
  if (ceilingIdx !== -1) {
    const value = Number(argv[ceilingIdx + 1]);
    if (!Number.isFinite(value) || value < 0) {
      console.error(`Invalid --ceiling value: ${argv[ceilingIdx + 1]}`);
      process.exit(2);
    }
    ceiling = value;
  }
  let pageType;
  const pageTypeIdx = argv.indexOf('--page-type');
  if (pageTypeIdx !== -1) {
    pageType = argv[pageTypeIdx + 1];
  }
  const consumedFlagValues = new Set();
  if (ceilingIdx !== -1) consumedFlagValues.add(ceilingIdx + 1);
  if (pageTypeIdx !== -1) consumedFlagValues.add(pageTypeIdx + 1);
  const filePath = argv.find((a, i) => !a.startsWith('--') && !consumedFlagValues.has(i));
  return { filePath, useTable, ceiling, pageType };
}

function main() {
  const { filePath, useTable, ceiling, pageType } = parseArgs(process.argv.slice(2));

  if (!filePath) {
    console.error('Usage: node scripts/doc-draft/vale-gate.mjs <file.md> [--table] [--ceiling N] [--page-type TYPE]');
    process.exit(2);
  }

  const resolved = path.resolve(filePath);
  const result = runGate(resolved, { ceiling, pageType });
  printResult(result, { format: useTable ? 'table' : 'json' });
  exitForResult(result);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  main();
}
