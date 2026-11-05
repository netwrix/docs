# Lint-only pass for KEEP pages

A KEEP page keeps its facts and structure. It is not exempt from the style check. Pre-commit checks copied pages as new files, whole, so old wording that passed in the previous version can fail in the new folder. In the Threat Manager 3.4 pilot, 62 of 72 KEEP pages failed with 142 findings, mostly passive voice. The lint-only pass fixes those findings and nothing else.

## Procedure

1. From the docs worktree, run `npm run quality:check -- --files <run-dir>/lintpass/all-keep.txt` (or a smaller list). If every page passes, stop.
2. `node scripts/doc-set/lint-batches.mjs <run-dir>` splits the KEEP pages into batches of up to 15 (`lintpass/batch-N.txt`).
3. Launch one agent per batch, in parallel, with the prompt below. Each takes 30 to 65 minutes because the model-based check is slow.
4. `node scripts/doc-set/lint-batches.mjs <run-dir> --summary` totals the results. The agents' before and after counts are estimates, because Dale flags different sentences between runs.
5. Run the check on all KEEP pages again for the real count. Report it.
6. Show the writer what is left (below) and ask them to confirm the typo list in one batch. Apply confirmed typo fixes in a second pass, then recheck.

## Agent prompt

Give each agent these instructions, filling in the batch number and paths.

> You are doing a lint-only pass on pages of the <product> <version> docs that are otherwise unchanged from <previous version> (in an align run: unchanged from origin/dev). The content is the source of truth and must not change; you only reword sentences that the style check flags. Read `.claude/skills/doc-restyle/SKILL.md` (the sections "The original is the source of truth" and "Typos and wording errors"), `.claude/skills/doc-draft/style-reference.md`, and `.claude/references/lint-rules.md`.
>
> Work in the docs worktree <docsWorktree> (cd there; never edit files in the main checkout). Your pages are listed in `<run-dir>/lintpass/batch-N.txt`. `<seedBaseline>` is the commit in `meta.json` that holds the seeded pages; it is the baseline for the integrity check. In an align run there is no seed: use `oldRef` from `meta.json` (the `origin/dev` commit) in its place.
>
> For each page: (1) Run `npm run quality:check -- --file <page>` from the worktree. If it passes, leave the page untouched. (2) For each finding, reword only the flagged sentence, minimally: spell out an acronym on first use only when the page or its neighbours give the expansion, shorten a wordy phrase, replace a positional reference with a link or a name, and make a passive sentence active only under the voice rules below. Keep every fact, number, condition, qualifier, and warning. Code blocks, inline code, link targets, image paths, bold labels, quoted product messages, and admonitions stay exactly as they are. Follow the voice rules in this section, and never invent an actor. Never reword a bold label or quoted message to clear a finding. A Vale suppression is allowed only on text that must stay exactly as the product shows it; list each one. (3) Re-run the check, at most 3 rounds per page. Then run `node <repo>/scripts/doc-restyle/integrity.mjs --base <seedBaseline> <page>` (the commit recorded in `meta.json`) from the worktree. It fails when a code block, inline code, link or image target, bold label, number, or admonition changed. Undo the offending edit; never work around a violation. (4) If you see what looks like a typo or an obvious wording error, do not fix it. List it with the line number and your suggested fix.
>
> Edit only your batch's pages. Don't commit or stage anything. Write `<run-dir>/lintpass/result-N.json` and return a short summary.

## Voice rules

Use active voice where it is accurate. These rules decide what "accurate" means:

- **Procedures** are commands: "Click **Save**." Do not add "you" to a step.
- **Possibilities** depend on who can do the thing. When it is about what the reader can do, use "you can": "You can assign a role to a user." When it is about what a tool can do, name the tool: "Threat Manager can send the report by email." Never write "you can" for something the tool does, and never turn "X can be configured" into "you can configure X" unless the reader is the one configuring it.
- **Statements about what the product does now** may name the product when the page already makes the actor clear: "Threat Manager sends the email."
- **Past or completed actions, and the states they leave, keep their passive form when no actor is stated.** "This was pre-created in the Credential Profiles page" must not become "You pre-created this": the reader may not have created it, and someone else may have. The same goes for "has been configured", "have been modified", "was added", "is assigned to", and "as supplied when it was added".
- Never add "you", "someone", or the product as the actor of a past or completed action to clear a finding. If a sentence of this kind is flagged, leave it as written and list it under `unfixed` with the reason "past or completed action, actor not stated". The writer decides.
- A passive that only shortens harmlessly is fine to change ("objects that were deleted" to "objects deleted"), because it names no new actor.

## Result file

```json
{ "batch": 1,
  "pages": [ { "path": "docs/<product>/<version>/<page>.md", "before": 4, "after": 0,
               "integrity": "pass", "suppressions": [], "unfixed": [ "line 79: sentence and why" ] } ],
  "typos": [ "path:line: suspected error and fix" ] }
```

## What is left, and why

Present these four groups to the writer, not a list per page:

- **Sentences inside admonitions.** The integrity check guards admonitions, so the agent can't reword them. The writer can reword them or accept the finding.
- **Undefined acronyms.** An agent may not invent an expansion. The writer or the code supplies it.
- **Typos that block a fix.** For example, rewording "threats generated by it's members" would also fix "it's". Agents list typos and don't fix them. Ask the writer to confirm the whole list at once.
- **False positives and unstable flags.** Dale sometimes flags a sentence that is already active, or flags different sentences on each run. After a final recheck, list what remains and let the writer decide to accept it.

A page with no frontmatter in the previous version may need a `title` and `description` added because lint requires a description. Tell the writer.
