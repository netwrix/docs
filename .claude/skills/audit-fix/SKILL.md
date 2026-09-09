---
name: audit-fix
description: "Apply a documentation-audit correction to one or more doc pages — normally written with docs-audit/template.md's Document Review form (Version / Source Path header, plus Error/Fix correction blocks), but also handles freeform prose describing what's wrong and what it should say instead. Trigger this whenever someone pastes a filled-out Document Review template or any docs-audit correction alongside a source path — usually alongside an instruction like 'Apply these documentation audit findings to `docs/accessanalyzer/11.6/admin/foo.md`' — even if they never say the word 'audit' or invoke this skill by name, and even if they paste corrections for several documents at once. Sets up a `doc-audit/{product}/{detail}` branch off dev, locates each file, cross-references the product's docs-audit review-list.csv to find exact-duplicate sibling versions and check near-duplicate ones for the same problem text, fans out to a subagent per document for batches, applies the fix(es), and — only after the reviewer confirms the diff looks right — checks Vale is installed and runs vale and /dale until clean, then writes a fix summary for the commit message and offers to commit and open a PR."
---

# Audit Fix

Triggered by a filled-out `docs-audit/template.md` Document Review, a freeform docs-audit correction, or an equivalent source-path-plus-corrections handoff.

A reviewer worked through the Document Review template's checklist against a live page, found one or more problems, and wrote them up — usually as Error/Fix blocks, sometimes as plain prose. Your job: find every file the correction applies to, make exactly the described change, and only run the linters once the reviewer has confirmed the edit itself is right.

Read `docs/CLAUDE.md` before starting — it has the Netwrix writing standards your edits must follow.

## Model sizing

Most corrections here are a spot substitution: find a quoted sentence, change one fact, done — well within reach of a fast, cheap model. Reserve escalating to a more capable model for corrections that require real judgment: an ambiguous `Fix` description, a rewrite spanning more than the quoted `Error`, or reconciling conflicting corrections in the same paste. If you're running this on a heavier model than the correction warrants, it's fine to say so — the reviewer can restart the chat on a lighter one. Don't let this slow down or gate the actual fix.

## Why the "ask, don't guess" posture matters here

This session's own audit of near-duplicate pages across versions (same page, different version, not byte-identical) found that most differences are cosmetic — but a meaningful minority are real: a requirement that only applies to one version, a feature added or removed, a config value that changed. Mechanically copying a fix into every version that merely *looks* similar risks silently corrupting a version where the surrounding content is genuinely different. That's why this skill only auto-propagates to versions `review-list.csv` has already proven byte-identical, and always asks before touching anything else — never assume, check.

The same posture applies to the corrections themselves: a `Fix` is a reviewer's description of what's wrong, not always a drop-in replacement string (see Step 1). Composing the actual wording is your job, and getting it wrong is exactly the kind of silent error this skill exists to avoid — so when a `Fix` doesn't give you enough to compose a confident, specific edit, stop and ask rather than write something plausible-sounding.

## Step 1: Parse the input

The expected shape is `docs-audit/template.md`'s Document Review template:

- A header with **Version** and **Source Path** fields.
- A **Corrections** section with one or more blocks, each an `Error (quote the exact text if possible):` line and a `Fix:` line.

If the reviewer pastes something close to this, extract:

- **The source path** from the `Source Path` field. If it's missing, ask for it — don't guess which file they mean from context.
- **The version**, from the `Version` field — cross-check it against what Step 2's script reports for the source path, and flag any mismatch to the reviewer rather than silently trusting one over the other.
- **One or more correction blocks**, each an `Error` quote and a `Fix`. Read the `Error` as a literal string to locate — treat it as a paraphrase only if it isn't found verbatim (see Step 5). Read the `Fix` for what it is: sometimes literal replacement text, often a description of what's wrong and what the product actually does (see `template.md`'s good examples — a `Fix` like "the parameter is `-SubCategory`, not `-Category`" describes the correction, it isn't drop-in text). Composing the actual edit from that description is your job in Step 5.

Reviewers don't always use the template, though. Two other shapes to handle:

- **Freeform prose** — no `Error`/`Fix` labels, just a description like "the section on X says Y but that's actually Z." Read the target file, find the specific sentence/step/snippet being described, and work out your own `Error` (the exact quote you'll search for) and `Fix` (what it should say instead) from it. Then **echo these back to the reviewer and get explicit confirmation before proceeding to Step 2** — something like "I read this as: replace `<Error>` with `<Fix>` — is that right?" This matters because the exact-match safety mechanism in Step 5 depends on `Error` being a literal quote; with freeform input, you chose that quote rather than the reviewer, so confirm it before it drives an edit.
- **Anything else** — a bare instruction, a different correction format, a live URL instead of a source path. Don't try to force-fit a parser onto it. Ask conversationally for the same information: which page (source path or live URL — if it's a URL, look it up against the relevant product's `review-list.csv` `live_page_url` column to resolve the source path), and each problem as an exact quote plus what's wrong with it. Getting these fields right matters more than accepting whatever shape the reviewer happened to paste.

A single paste can contain corrections for more than one page — see "Handling multiple pages in one paste" below.

## Step 2: Resolve siblings

Run the bundled script, passing the source path and the `Error` quotes (as a JSON array on stdin) from every correction block in this paste. Use a quoted heredoc, not `echo '...' |` — audit `Error` quotes are prose lifted straight from doc pages, and any apostrophe (a contraction, a possessive) inside a single-quoted `echo` string terminates it early:

```bash
node .claude/skills/audit-fix/scripts/find-siblings.mjs <source_path> <<'JSONEOF'
["exact error text 1", "exact error text 2"]
JSONEOF
```

This reads `docs-audit/<product>/review-list.csv` and reports, for every other version of the product:

- `exact-duplicate` — listed in the CSV's `duplicates` column (byte-identical aside from version strings). Safe to apply the same fix verbatim, no need to ask.
- `quote-found` — not a duplicate, but this file literally contains one of your `Error` quotes. The surrounding page may differ, but this specific problem text is present too.
- `quote-not-found` — the quote isn't there. Almost always means this version's wording is genuinely different at that spot; leave it alone.
- `file-missing` — no file at that path for this version (nothing to do).

If the script exits non-zero — because the source path isn't in `review-list.csv` (it can happen — pages are excluded from the audit list for recent churn, draft status, or product-exclusion reasons), or because the quotes JSON on stdin was malformed — tell the reviewer and ask how to proceed rather than silently skipping, guessing, or retrying with no quotes.

## Step 3: Confirm scope with the reviewer

- **Exact duplicates**: no need to ask — the CSV already proved these are the same page. Include them in Step 5 automatically. (The duplicate detection is version-normalized — see the version-token warning in Step 5 before writing the replacement into one of these.)
- **`quote-found` siblings**: ask the reviewer, once, listing every such sibling: "This exact text also appears in `<version>`'s copy — apply the same fix there too?" Let them answer per-file or all-at-once. Don't touch these until they say yes.
- **`quote-not-found` and `file-missing`**: don't mention these unless the reviewer asks — they're not actionable.

## Step 4: Set up a branch

Before touching any files, check the current branch (`git branch --show-current`) and working tree state (`git status`):

- If you already created a branch for this audit session earlier in the conversation, reuse it — don't create a new branch per page or per correction. A single branch can carry several audited pages' fixes.
- Otherwise, offer to create one: fetch an up-to-date `dev` (`git fetch origin dev`), then branch off it using the standard naming convention `doc-audit/<product>/<detail>` (e.g. `git checkout -b doc-audit/accessanalyzer/admin-fixes origin/dev`). Propose the name and get the reviewer's go-ahead before creating it — don't create or switch branches silently.
- If the current branch already has uncommitted changes that don't look like they're from this session, stop and ask how to proceed rather than switching out from under someone's in-progress work.

## Step 5: Apply the fix(es)

For the primary file, every approved exact-duplicate, and every sibling the reviewer approved in Step 3:

1. Locate the `Error` text with the Edit tool's exact-match search.
2. If it isn't found verbatim (including in the *primary* file — reviewers sometimes paraphrase instead of quoting exactly), stop and ask for the precise quote. Don't fuzzy-match or guess at the closest paragraph.
3. Work out the concrete replacement from the `Fix`. If it's already literal replacement text, use it as-is. If it's a description (the common case — see Step 1), compose the smallest edit to the `Error` text that resolves what the `Fix` describes, in Netwrix voice per `docs/CLAUDE.md`. If the `Fix` doesn't give you enough to compose a specific, confident edit — it's vague about what should change, or it reads like a placeholder rather than a real description (compare `template.md`'s bad example: an unquoted `Error` and a `Fix` that just says "fix the wrong button name" without saying what the right name is) — stop and ask the reviewer what the replacement should actually say. Don't guess at specifics you weren't given.
4. Apply every correction block from this paste to a given file in the same pass.

Fix only what the correction describes. If a `Fix` would change something well beyond the quoted `Error` (e.g. it reads more like a request to rewrite the whole section than to correct a specific error), stop and confirm scope with the reviewer before proceeding — this is a reviewer-approved correction, not free rein to edit.

**On a `quote-found` sibling, replace only the matched substring, not the whole line or heading.** The sibling isn't a proven duplicate, so the text around your `Error` quote can differ — an extra anchor tag, a longer sentence, a different heading suffix. Editing the exact substring the script matched avoids clobbering that surrounding content; editing the whole line/paragraph you saw in the *primary* file risks overwriting something in the sibling that was never part of the correction.

**Before writing a composed replacement into ANY sibling (exact-duplicate or quote-found), check it for version-bearing tokens.** `exact-duplicate` only means the two files hash equal after the generator strips out version strings — it does not mean the files are byte-identical. Every version-specific path or link still differs between them (an image under `/images/<product>/<primary-version>/...`, an internal doc link like `/docs/<product>/<primary-version>/...md`, a version number written out in prose). If the text you're about to write contains one of these, substitute the sibling's own version (reported by the script as that sibling's `version` field) for the primary version's before applying the edit — never carry the primary file's version tokens into a sibling. This matters most when a `Fix` adds a new link or image reference, since that's exactly the house style most likely to embed a version string.

## Step 6: Show the diff, wait for confirmation

Summarize what changed, per file (don't reprint entire documents). Explicitly ask the reviewer to confirm the edit looks right before continuing. **Do not run Vale or Dale yet** — linting only happens after the reviewer accepts, so you're not iterating on wording they haven't approved.

## Step 7: Lint, once accepted

Before running `vale` for the first time this session, confirm it's installed:

```bash
vale --version
```

If it's missing, briefly tell the reviewer why it matters (it catches Netwrix style-guide violations before a human reviewer or CI does) and how to install it for their platform, per `docs/CLAUDE.md`:

- macOS: `brew install vale`
- Linux: `sudo snap install vale`
- Windows: `choco install vale`
- Any platform: download a binary from the [Vale releases page](https://github.com/errata-ai/vale/releases)

Offer to run the install command yourself if one applies to their platform (e.g. `brew`/`snap`/`choco` is available); otherwise give them the command and wait for them to install it before continuing.

Once Vale is available and the reviewer has confirmed the diff, for every edited file:

```bash
vale <file>
```

Then:

```
/dale <file>
```

Both linters will very likely report violations that have nothing to do with your edit — these are older audited pages, and pre-existing issues elsewhere in the file are the norm, not the exception. Sort every reported violation into exactly one of these, in order:

1. **Inside the text you composed for the `Fix`** (even if it's on a line your edit touched) — don't fix it and don't ignore it either. Go back to the reviewer with the specific violation and ask how they want to handle it (e.g. an undefined acronym you introduced). Don't silently rewrite wording they're about to sign off on.
2. **On a line your edit touched, but outside the text you wrote** (e.g. surrounding punctuation or a word your edit's surgery incidentally affected) — fix it, then re-run until that line is clean.
3. **Everywhere else** — pre-existing and unrelated to your edit. Leave it alone and don't mention it — these are older audited pages with plenty of pre-existing lint debt, and reporting it here is just noise against a scope the reviewer never asked you to touch. Don't expand the edit to clean up the whole file — the reviewer approved a specific correction in Step 6, not a general cleanup pass.

Re-run each linter after any fix until the lines you touched are clean, then report what was fixed, per file.

## Step 8: Wrap-up

Once linting is clean for every edited file:

1. **Write a fix summary.** One or two plain-language sentences per file — whether the page was inaccurate, incomplete, or both, and what changed. This is what goes into the commit message (step 2), so write it there directly rather than describing that a summary exists. If this fix touched a batch of documents, give each file its own line rather than one blended paragraph, so the commit message tells someone at a glance which files changed for which reason. Always name every duplicate you actually touched alongside the primary file — that's the whole point of the sibling-resolution step, don't bury it in a per-file diff they have to reconstruct themselves.
2. **Offer to commit.** Ask whether to commit now. If yes, stage only the files this correction touched (never a blanket `git add`) and commit with a message whose body is the fix summary from step 1.
3. **Ask what's next:**
   - If they're done auditing for this session: offer to open a pull request against `dev` (covering everything committed on this branch so far).
   - If they have more pages to audit: prompt them to paste the next correction. Stay on the same branch — no need to restart Step 4 unless they say otherwise.
4. **Remind them about the one place status still lives** — this skill doesn't update it directly: once the PR merges, mark the workbook's **Audited** column `Done` for the primary page and every duplicate actually touched. There's no per-page Xchange status field or separate accurate/complete columns anymore — the fix summary now lives in the commit/PR instead. Don't edit the committed `docs-audit/<product>/review-list.csv` file itself for this — per `generate-audit-list.mjs`, the next `npm run audit:generate` regenerates it from scratch, silently discarding anything written into it directly.

## Handling multiple pages in one paste

If the reviewer pastes corrections for more than one source path in a single message, don't work through them yourself one at a time — fan out:

1. Do Step 1 (parse) once for the whole paste, splitting it into one correction set per source path.
2. Do Step 4 (branch) once, before spawning anything — every document's fix needs to land on the same branch, and creating one per document would fragment the fix across branches the reviewer didn't ask for.
3. For each document, spawn a fork (`Agent` tool, `subagent_type: "fork"`) with a directive covering Steps 2, 3, 5, 6, and 7 for that document only: its exact source path and its `Error`/`Fix` blocks verbatim, plus an explicit instruction to run `find-siblings.mjs`, apply the fix(es), and lint. Forks share your context, so the prompt only needs the per-document specifics, not a re-explanation of the process — but be explicit that the fork must **stop and report back a specific question, never guess or proceed past it**, whenever it hits any "ask, don't guess" trigger (quote not found, vague `Fix`, sibling scope to confirm, a lint violation inside composed text).
4. Launch every document's fork in the same message so they run concurrently.
5. As forks complete, collect their diffs and any open questions. Batch every open question across every fork into as few rounds as possible back to the reviewer (e.g. "these 3 documents have sibling versions with the same text — apply there too?") rather than interrupting once per fork.
6. Once you have an answer, resume the specific fork with `SendMessage` rather than re-spawning it — it already has the file open and the edit in progress.
7. Once every fork reports a reviewer-approved diff and clean lint, do one combined Step 6 confirmation summary (per file, not full documents) and one combined Step 8 wrap-up covering every file touched across every document.

For a single document, none of this applies — just work through Steps 1–7 yourself as written above; forking one document for one file is pure overhead.

## When something doesn't add up

Ask rather than guess, always — this reuses guidance from `docs-audit/template.md`'s checklist itself:

- Source path missing, ambiguous, or not found in `review-list.csv`.
- `Error` text not found verbatim in the target file.
- A `Fix` too vague to compose a confident, specific edit from.
- A `Fix` that reads like a broader rewrite than the `Error` quote justifies.
- A sibling the script can't resolve (e.g. `find-siblings.mjs` itself errors) — report the error, don't fall back to manual guessing about which versions share this page.
- Uncommitted changes already on the current branch that don't look like they're from this session — ask before creating or switching branches.
- A fork working on one document in a batch hits one of these triggers — relay its question to the reviewer yourself; don't answer on the fork's behalf just to keep the batch moving.
