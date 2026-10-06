#!/usr/bin/env node
/**
 * fix-loop.mjs — optional local helper: clear AI-isms from the lines a change
 * adds or edits, without changing what they say. The required gates are the
 * pre-commit hook and the Claude Code Stop hook; this only automates the easy fixes.
 *
 *   node scripts/quality/fix-loop.mjs [--staged | --base origin/dev] [--files list.txt]
 *                                     [--max-passes 3] [--summary out.json]
 *                                     [--suggestions out.patch] [--dry-run]
 *
 * The model never returns a page. Per pass it proposes small typed edits
 * (drop, swap, reword) against masked sentences. Each edit must pass a
 * deterministic validator (lib/edits.mjs); drops and rewords also get an
 * independent meaning check (lib/verify.mjs). A drop the check doubts is not
 * applied: it goes to one patch file. A reword the check doubts is applied and
 * printed as "review", because the writer sees the diff before committing.
 *
 * A page that passes has its judge verdict cached so the hooks accept it
 * without a second model call. Never runs git commit or push.
 *
 * Summary shape (formerly read by the vale-autofix workflow, now removed):
 * { results: [{ path, passes, status: pass|unchanged|stalled, findings_before,
 *               findings_after, applied, rejected, suggestions }] }
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { discoverChanges, rangesFor, inRanges } from './lib/scope.mjs';
import { scorePage } from './score.mjs';
import { checkPreserved } from './lib/preserve.mjs';
import { prepare, promptView, validateEdit, applyEdits, readable, flaggedMatchers, fillerEdits } from './lib/edits.mjs';
import { mapPool } from './lib/pool.mjs';
import { verifyMeaning } from './lib/verify.mjs';
import { getClient, textOf, hasApiKey } from './lib/llm.mjs';
import { runGate as valeGate } from '../doc-draft/vale-gate.mjs';
import { renderFindingsTable } from '../doc-draft/lib/report.mjs';

const config = JSON.parse(fs.readFileSync(new URL('./config.json', import.meta.url), 'utf8'));

const SYSTEM = `You edit one Netwrix documentation page so it passes an automated check for signs of AI-generated writing, without changing what it says.

You see the page's paragraphs and list items, each on one line tagged "L<number>:". Inline code, links, bold text, and images appear as placeholders like ⟦3⟧. Leave placeholders exactly where they are.

Return a list of small edits. Every edit's "before" must be copied exactly from one line, and must appear only once on the page. Use only these types:

- drop: delete a run of words (at most 15) that the findings flag as filler or AI phrasing. Give the whole sentence again in "after" without those words. Never delete a number, a negation, a requirement word, a condition (if, when, before, after, until), a name, or a placeholder.
- swap: replace one word or phrase with a plain one. "from" must be one of: utilize, leverage, in order to, prior to, subsequent to, due to the fact that, in the event that, at this point in time, commence, endeavor (and their -s, -ed, -ing forms). Put the original wording in "before", leave "after" empty.
- reword: a free rewrite of one sentence when neither of the above can fix it, for example a sentence that is only hype. Write plain, specific, instructional wording, or state the plain fact the sentence implies. Keep every fact, number, condition, and requirement. The writer reviews the result in the diff.

Prefer drop and swap. Go through every finding: propose an edit for it if one is safe, otherwise a reword. Do not leave a finding without an edit. House style: impersonal, instructional, second person ("you"). Set unused fields to an empty string.`;

const EDIT_SCHEMA = {
  type: 'object',
  properties: {
    edits: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['drop', 'swap', 'reword'] },
          before: { type: 'string' },
          after: { type: 'string' },
          from: { type: 'string' },
        },
        required: ['type', 'before', 'after', 'from'],
        additionalProperties: false,
      },
    },
  },
  required: ['edits'],
  additionalProperties: false,
};

const problemCount = r => r.deterministic.findings.length + r.judge.findings.length;

function findingsText(r) {
  const parts = [];
  if (r.deterministic.findings.length) parts.push(renderFindingsTable(r.deterministic.findings));
  for (const f of r.judge.findings) parts.push(`Line ${f.line}: pattern ${f.pattern} - ${f.reason}\n> ${f.quote}`);
  return parts.join('\n\n');
}

async function propose(ctx, r, feedback) {
  const response = await getClient().messages.create({
    model: config.models.rewrite,
    max_tokens: 8000,
    system: SYSTEM,
    messages: [
      {
        role: 'user',
        content: `Findings to clear:\n\n${findingsText(r)}${feedback ? `\n\nLast round, these edits were rejected: ${feedback}` : ''}\n\nPage prose:\n\n${promptView(ctx)}`,
      },
    ],
    output_config: { format: { type: 'json_schema', schema: EDIT_SCHEMA } },
  });
  return JSON.parse(textOf(response)).edits;
}

const verify = pairs => verifyMeaning(pairs, { model: config.models.verify });

/** Unified diff of `content` against the file on disk, applicable with `git apply`. */
function patchFor(file, content) {
  const tmp = path.join(os.tmpdir(), `q-${process.pid}-${path.basename(file)}`);
  fs.writeFileSync(tmp, content);
  let out = '';
  try {
    out = execFileSync('git', ['diff', '--no-index', '--no-color', '--', file, tmp], { encoding: 'utf8' });
  } catch (e) {
    out = e.stdout || ''; // exit 1 means "differences found"
  } finally {
    fs.rmSync(tmp, { force: true });
  }
  return out.split(tmp.replace(/^\//, '')).join(file).replace(/^(diff --git a\/.+ b\/).+$/m, `$1${file}`);
}

/** Keep only the paragraphs and list items that touch a changed line. A null `ranges` (a new page) keeps everything. */
function restrict(ctx, ranges) {
  if (ranges) ctx.editable = ctx.editable.filter(e => e.indices.some(i => inRanges(i + 1, ranges)));
  return ctx;
}

/**
 * `where` is { mode, base } for a page that existed before the change: only the
 * lines the change adds or rewrites are checked and edited. Omit it for a new page.
 */
export async function fixPage(file, { where = null, maxPasses = config.loop.maxPasses, dryRun = false, proposeFn = propose, verifyFn = verify, judgeFn } = {}) {
  const rangesNow = () => (where ? rangesFor(file, where) : null);
  const original = fs.readFileSync(file, 'utf8');
  const valeBefore = valeGate(file).findings.length;
  const score = () => scorePage(file, { ranges: rangesNow(), judgeFn });
  let current = await score();
  const before = problemCount(current);
  if (current.pass) return { path: file, passes: 0, status: 'unchanged', findings_before: before, findings_after: 0, applied: 0, rejected: 0, suggestions: 0, review: [], patch: '' };

  let passes = 0;
  let feedback = '';
  let applied = 0;
  let rejected = 0;
  const held = []; // drops the meaning check doubted: not applied, offered as a patch
  const review = []; // rewords that were applied although the meaning check doubted them

  while (!current.pass && passes < maxPasses) {
    passes++;
    const markdown = fs.readFileSync(file, 'utf8');
    const ctx = restrict(prepare(markdown), rangesNow());
    const matchers = flaggedMatchers([...current.deterministic.findings, ...current.judge.findings]);

    const proposed = [...fillerEdits(ctx), ...(await proposeFn(ctx, current, feedback))];
    const reasons = [];
    const auto = [];
    for (const e of proposed) {
      const v = validateEdit(e, ctx, matchers);
      if (!v.ok) {
        rejected++;
        reasons.push(`"${(e.before || '').slice(0, 50)}": ${v.reason}`);
        if (process.env.QUALITY_VERBOSE) console.error(`  rejected [${e.type}] ${v.reason}\n    before: ${e.before}\n    after:  ${e.after}`);
      } else auto.push(v);
    }

    const toCheck = auto.filter(e => e.type !== 'swap');
    const verdicts = await verifyFn(toCheck.map((e, id) => ({ id, ...readable(ctx, e) })));
    const accepted = [];
    auto.forEach(e => {
      if (e.type === 'swap') return accepted.push(e);
      const v = verdicts.get(toCheck.indexOf(e));
      if (v?.ok) accepted.push(e);
      else if (e.type === 'reword') {
        // The writer reviews the diff; flag the line so the doubt is not lost.
        accepted.push(e);
        review.push({ line: e.line, before: e.before, after: e.after, note: v?.difference || 'not certain' });
        if (process.env.QUALITY_VERBOSE) console.error(`  reword applied, flagged [${v?.difference}]\n    before: ${e.before}\n    after:  ${e.after}`);
      } else {
        rejected++;
        held.push({ ...e, note: `meaning check: ${v?.difference || 'not certain'}` });
        if (process.env.QUALITY_VERBOSE) console.error(`  held [${e.type}] ${v?.difference}\n    before: ${e.before}\n    after:  ${e.after}`);
      }
    });

    if (!accepted.length) {
      feedback = reasons.slice(0, 6).join('; ');
      continue;
    }

    const candidate = applyEdits(ctx, accepted);
    const violations = checkPreserved(markdown, candidate);
    if (violations.length) {
      feedback = `the result changed locked content (${violations[0]})`;
      continue;
    }
    fs.writeFileSync(file, candidate);
    const next = await score();
    const valeAfter = valeGate(file).findings.length;
    if (valeAfter > valeBefore) {
      fs.writeFileSync(file, markdown);
      feedback = `the edits added ${valeAfter - valeBefore} Vale style finding(s)`;
      continue;
    }
    if (next.deterministic.findings.length > current.deterministic.findings.length) {
      fs.writeFileSync(file, markdown);
      feedback = 'the edits made the AI-isms findings worse';
      continue;
    }
    applied += accepted.length;
    feedback = reasons.slice(0, 6).join('; ');
    current = next;
  }

  const after = problemCount(current);
  if (!current.pass && after >= before) {
    fs.writeFileSync(file, original);
    applied = 0;
    review.length = 0;
  }

  // Held edits become one patch against whatever the file is now. Ones whose text no longer matches are dropped.
  let patch = '';
  let suggestions = 0;
  if (!current.pass && held.length) {
    const finalText = fs.readFileSync(file, 'utf8');
    const ctx = restrict(prepare(finalText), rangesNow());
    const relocated = [...new Map(held.map(h => [h.before, h])).values()]
      .map(h => validateEdit({ type: 'reword', before: h.before, after: h.after }, ctx))
      .filter(v => v.ok);
    if (relocated.length) {
      suggestions = relocated.length;
      patch = patchFor(file, applyEdits(ctx, relocated));
    }
  }
  if (dryRun) fs.writeFileSync(file, original);
  return {
    path: file,
    passes,
    status: current.pass ? 'pass' : 'stalled',
    findings_before: before,
    findings_after: current.pass ? 0 : Math.min(after, before),
    applied,
    rejected,
    suggestions,
    review,
    patch,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const val = n => (args.includes(n) ? args[args.indexOf(n) + 1] : undefined);
  if (!hasApiKey()) {
    console.error('No ANTHROPIC_API_KEY and no `claude` CLI on PATH; cannot run the rewrite loop.');
    process.exit(2);
  }
  const staged = args.includes('--staged');
  // Edits land in the working tree, so between passes changed lines are measured against HEAD, not the index.
  const where = { mode: 'base', base: staged ? 'HEAD' : val('--base') || 'origin/dev' };
  let files = val('--files')
    ? fs.readFileSync(val('--files'), 'utf8').split('\n').map(s => s.trim()).filter(Boolean).map(file => ({ file, ranges: null }))
    : discoverChanges({ ...(staged ? { mode: 'staged' } : where), scope: config.scope });

  const results = await mapPool(files, config.scope.concurrency ?? 3, async ({ file: f, ranges }) => {
    const r = await fixPage(f, { where: ranges ? where : null, maxPasses: Number(val('--max-passes')) || config.loop.maxPasses, dryRun: args.includes('--dry-run') });
    console.log(`${r.status.padEnd(9)} ${r.path}  passes=${r.passes}  findings ${r.findings_before} -> ${r.findings_after}  applied=${r.applied} rejected=${r.rejected} suggestions=${r.suggestions}`);
    for (const x of r.review) console.log(`  review ${r.path}:${x.line}: reworded; meaning check doubts it (${x.note})\n    was: ${x.before}\n    now: ${x.after}`);
    return r;
  });
  if (val('--summary')) fs.writeFileSync(val('--summary'), JSON.stringify({ results: results.map(({ patch, ...r }) => r) }, null, 2));
  const patch = results.map(r => r.patch).filter(Boolean).join('\n');
  if (val('--suggestions') && patch) fs.writeFileSync(val('--suggestions'), patch);
  process.exit(results.some(r => r.status === 'stalled') ? 3 : 0);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
