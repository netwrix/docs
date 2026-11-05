export const meta = {
  name: 'doc-set',
  description: 'Draft every non-KEEP page of an approved /doc-set manifest in zone batches, then verify each batch against the fact pack',
  whenToUse: 'Called by the /doc-set skill after the writer approves manifest.json. args: { runDir: "<absolute path to .doc-set/<product>-<version>>", pathPrefixes?: ["<prefix relative to the pages folder>"], zone?: "<manifest zone to draft; omit for all>" }',
  phases: [
    { title: 'Plan', detail: 'group manifest pages into batches' },
    { title: 'Draft', detail: 'one agent per batch writes pages and runs the style checks' },
    { title: 'Verify', detail: 'trace every factual sentence to a fact id; retry a failed batch once' },
  ],
}

const runDir = args && args.runDir
if (!runDir) throw new Error('args.runDir is required: the absolute path to .doc-set/<product>-<version>')
const zone = args && args.zone
const prefixes = (args && args.pathPrefixes) || null

const BATCHES = {
  type: 'object',
  properties: {
    batches: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          pages: { type: 'array', items: { type: 'string' } },
        },
        required: ['name', 'pages'],
      },
    },
    skippedDone: { type: 'array', items: { type: 'string' } },
  },
  required: ['batches'],
}

const VERDICT = {
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    problems: { type: 'array', items: { type: 'string' } },
  },
  required: ['ok', 'problems'],
}

phase('Plan')
const plan = await agent(
  `Read ${runDir}/manifest.json and the files in ${runDir}/results/ (if any). ` +
    `Return the pages to draft: every page whose action is NEW, REWRITE, UPDATE, or RESTYLE and that has no result with status "done"` +
    (zone ? `, limited to pages whose manifest zone is "${zone}"` : '') +
    (prefixes ? `, and only pages whose path starts with one of these prefixes (relative to the pages' folder: docs/<product>/<version>/, or docs/<product>/ in an align run): ${prefixes.map((p) => `"${p}"`).join(', ')}` : '') + '. ' +
    `Group them by zone (the manifest's zone field), splitting a zone into chunks of at most 4 pages. ` +
    `Never include a path under a kb/ folder. Name each batch "<zone>-<path of its first page relative to the zone folder, without .md, with / replaced by ->" (for example "administration-threats-threatdetails-overview"), so runs on different folders and later runs with different batching never reuse a name. Pages are manifest paths. List already-done paths in skippedDone. Do not draft anything.`,
  { label: 'plan batches', phase: 'Plan', schema: BATCHES, effort: 'low' },
)
if (!plan || !plan.batches.length) {
  log('Nothing to draft: every non-KEEP page already has a done result.')
  return { batches: 0 }
}
log(`${plan.batches.length} batch(es); ${(plan.skippedDone || []).length} page(s) already done`)

const common = (b) =>
  `Run state is in ${runDir}; meta.json there names the docs worktree (docsWorktree) and the code worktree (worktree). Every page path in the manifest is relative to the docs worktree: read, create, and edit pages ONLY under <docsWorktree>/<path>, never in the main docs checkout, and run commands with the docs worktree as the working directory. Your batch is "${b.name}" with these manifest pages:\n${b.pages.map((p) => `- ${p}`).join('\n')}\n\n` +
  `Schemas are in .claude/skills/doc-set/references/fact-pack.md. Use only the facts and claims that manifest.json assigns to each page, read from ${runDir}/facts.json and claims.json.`

const draftPrompt = (b, problems) =>
  `${common(b)}\n\n` +
  `This is a CONTENT job, not a lint pass: for every UPDATE, REWRITE, and NEW page you must write the facts the manifest assigns to it (the manifest page's "facts" list, resolved in facts.json; its "stale" list quotes old statements to replace). A page whose factsCovered is empty is a failure. Style fixes are the last step, never the job. Draft each page, finishing every step on a page before the next. Confirm any fact you are unsure of in the code worktree (meta.json) before you write it; the code wins over the fact text, the fact text over the old page, and a Jira claim is never a fact. Pages already in the docs worktree may carry small wording edits from an earlier style pass; keep them and build on the current text:\n` +
  `- NEW and REWRITE: follow the doc-draft skill's drafting steps (.claude/skills/doc-draft/SKILL.md, "Draft new documentation"). For NEW, create the file at the manifest path with the manifest's page type and sidebar_position. For REWRITE, replace the page; when the manifest page has renamedFrom, read that old file, write the new path, and delete the old file from the docs worktree. A NEW page needs a frontmatter title, description (about 120 characters, never over 160), and sidebar_position.\n` +
  `- UPDATE: edit only the statements the assigned facts show are stale (the manifest page's stale list quotes them) and add what the assigned facts add. Leave every other line byte-for-byte, including existing wording. Also apply any note on the manifest page, such as a link to retarget.\n` +
  `- RESTYLE: follow .claude/skills/doc-restyle/SKILL.md steps 1-8 for that page, including node scripts/doc-restyle/integrity.mjs. Add no facts. The page content is its own source.\n` +
  `Rules for every page: write only what a fact states, and cite nothing on the page. A claim marked jira-only becomes a {/* TODO */} marker, never a statement. Never print a ticket key or customer name. Leave internal facts off the page.\n` +
  `Then run npm run quality:check -- --file <page> from the docs worktree, at most 3 fix rounds. Pages in this folder are new files, so the check reads the whole page. Fix every finding on the page. On a line you did not otherwise change (old 3.3 wording), reword only the flagged sentence, minimally, without changing any fact; make a passive sentence active only when the actor is stated or obvious, and never add "you", "someone" or the product as the actor of a past or completed action (leave such a sentence as written and list it in the page's untraced notes as "past or completed action, actor not stated"), number, code span, link, bold label, or quoted message; count those old-line fixes in preexistingFindings. Don't commit.\n` +
  `Write ${runDir}/results/${b.name}.json in the results shape from fact-pack.md, with factsCovered listing only fact ids the final page states. Set status "done" only when quality:check passes on the whole page.` +
  (problems && problems.length
    ? `\n\nA previous attempt failed verification. Fix exactly these problems:\n${problems.map((p) => `- ${p}`).join('\n')}`
    : '')

const verifyPrompt = (b) =>
  `${common(b)}\n\n` +
  `Verify the drafted pages in ${runDir}/results/${b.name}.json. Try to refute them. Read ${runDir}/meta.json first. ` +
  `If it says "versionless": true (an align run: pages are edited in place and an updated page keeps most of its old text), check only the sentences the draft ADDED or CHANGED: get them with "git diff <meta.oldRef> -- <page>" run in meta.docsWorktree. For each added or changed factual sentence (requirements, steps' outcomes, defaults, limits, option names, UI labels), trace it to an assigned fact id and its cite in the code worktree. A sentence the draft left as it was is out of scope: flag it only if it directly contradicts an assigned fact, and name that fact. ` +
  `Otherwise (a versioned run), for each page with status "done", read the file and trace every factual sentence to an assigned fact id and its cite in the code worktree. ` +
  `A sentence with no fact, or one that disagrees with its cite, is a problem. A jira-only claim stated as fact is a problem. A ticket key on the page is a problem. ` +
  `Return ok:false with one problem per line (file, quoted sentence, why) if there is any. Also update that page's "untraced" list in the results file to match, and set a page's status to "failed" if it has a problem. Don't fix the page.`

phase('Draft')
const results = await pipeline(
  plan.batches,
  (b) => agent(draftPrompt(b), { label: `draft ${b.name}`, phase: 'Draft' }).then(() => b),
  (b) =>
    agent(verifyPrompt(b), { label: `verify ${b.name}`, phase: 'Verify', schema: VERDICT }).then(async (v) => {
      if (!v || v.ok) return { batch: b.name, ok: !!v && v.ok, problems: v ? v.problems : ['verifier returned nothing'], retried: false }
      log(`${b.name}: ${v.problems.length} problem(s); retrying once`)
      await agent(draftPrompt(b, v.problems), { label: `redraft ${b.name}`, phase: 'Draft' })
      const again = await agent(verifyPrompt(b), { label: `reverify ${b.name}`, phase: 'Verify', schema: VERDICT })
      return { batch: b.name, ok: !!again && again.ok, problems: again ? again.problems : ['verifier returned nothing'], retried: true }
    }),
)

const done = results.filter(Boolean)
const failed = done.filter((r) => !r.ok)
log(`${done.length - failed.length}/${plan.batches.length} batch(es) verified${failed.length ? `; failed: ${failed.map((r) => r.batch).join(', ')}` : ''}`)
if (results.some((r) => !r)) log('At least one batch agent died or was skipped; rerun the workflow to pick up its pages.')
return { batches: plan.batches.length, verified: done.length - failed.length, failed }
