---
name: audit-fix
description: "Apply a documentation-audit correction written with docs-audit/template.md's Document Review form (Version / Source Path / Duplicated in header, plus Error/Fix correction blocks). Trigger this whenever someone pastes a filled-out Document Review template, or otherwise hands over a page's source path plus one or more error/fix corrections — usually alongside an instruction like 'Apply these documentation audit findings to `docs/accessanalyzer/11.6/admin/foo.md`' — even if they never say the word 'audit' or invoke this skill by name. If the input doesn't match the template shape, ask conversationally for the same fields instead of guessing. Locates the file, cross-references the product's docs-audit review-list.csv to find exact-duplicate sibling versions and check near-duplicate ones for the same problem text, applies the fix, and — only after the reviewer confirms the diff looks right — runs vale and /dale until clean. Finishes with a report and reminds the reviewer to update the page's Document Review doc and the shared spreadsheet."
---

# Audit Fix

Triggered by a filled-out `docs-audit/template.md` Document Review, or by an equivalent source-path-plus-corrections handoff.

A reviewer worked through the Document Review template's checklist against a live page, found one or more problems, and wrote them up as Error/Fix blocks. Your job: find every file the correction applies to, make exactly the described change, and only run the linters once the reviewer has confirmed the edit itself is right.

Read `docs/CLAUDE.md` before starting — it has the Netwrix writing standards your edits must follow.

## Model sizing

Most corrections here are a spot substitution: find a quoted sentence, change one fact, done — well within reach of a fast, cheap model. Reserve escalating to a more capable model for corrections that require real judgment: an ambiguous `Fix` description, a rewrite spanning more than the quoted `Error`, or reconciling conflicting corrections in the same paste. If you're running this on a heavier model than the correction warrants, it's fine to say so — the reviewer can restart the chat on a lighter one. Don't let this slow down or gate the actual fix.

## Why the "ask, don't guess" posture matters here

This session's own audit of near-duplicate pages across versions (same page, different version, not byte-identical) found that most differences are cosmetic — but a meaningful minority are real: a requirement that only applies to one version, a feature added or removed, a config value that changed. Mechanically copying a fix into every version that merely *looks* similar risks silently corrupting a version where the surrounding content is genuinely different. That's why this skill only auto-propagates to versions `review-list.csv` has already proven byte-identical, and always asks before touching anything else — never assume, check.

The same posture applies to the corrections themselves: a `Fix` is a reviewer's description of what's wrong, not always a drop-in replacement string (see Step 1). Composing the actual wording is your job, and getting it wrong is exactly the kind of silent error this skill exists to avoid — so when a `Fix` doesn't give you enough to compose a confident, specific edit, stop and ask rather than write something plausible-sounding.

## Step 1: Parse the input

The expected shape is `docs-audit/template.md`'s Document Review template:

- A header with **Version**, **Source Path**, and **Duplicated in** fields.
- A **Corrections** section with one or more blocks, each an `Error (quote the exact text if possible):` line and a `Fix:` line.

If the reviewer pastes something close to this, extract:

- **The source path** from the `Source Path` field. If it's missing, ask for it — don't guess which file they mean from context.
- **The version**, from the `Version` field — cross-check it against what Step 2's script reports for the source path, and flag any mismatch to the reviewer rather than silently trusting one over the other.
- **The `Duplicated in` field**, if filled in — carry it into Step 2 as something to reconcile against `review-list.csv`, not as the source of truth on its own (reviewers fill this in by hand from the spreadsheet, so it can be stale).
- **One or more correction blocks**, each an `Error` quote and a `Fix`. Read the `Error` as a literal string to locate — treat it as a paraphrase only if it isn't found verbatim (see Step 4). Read the `Fix` for what it is: sometimes literal replacement text, often a description of what's wrong and what the product actually does (see `template.md`'s good examples — a `Fix` like "the parameter is `-SubCategory`, not `-Category`" describes the correction, it isn't drop-in text). Composing the actual edit from that description is your job in Step 4.

**If the input doesn't match this shape** — a bare instruction, a different correction format, a live URL instead of a source path — don't try to force-fit a parser onto it. Ask conversationally for the same information: which page (source path or live URL — if it's a URL, look it up against the relevant product's `review-list.csv` `live_page_url` column to resolve the source path), and each problem as an exact quote plus what's wrong with it. Getting these fields right matters more than accepting whatever shape the reviewer happened to paste.

A single paste can contain corrections for more than one page — see "Handling multiple pages in one paste" below.

## Step 2: Resolve siblings

Run the bundled script, passing the source path and the `Error` quotes (as a JSON array on stdin) from every correction block in this paste:

```bash
echo '["exact error text 1", "exact error text 2"]' | node .claude/skills/audit-fix/scripts/find-siblings.mjs <source_path>
```

This reads `docs-audit/<product>/review-list.csv` and reports, for every other version of the product:

- `exact-duplicate` — listed in the CSV's `duplicates` column (byte-identical aside from version strings). Safe to apply the same fix verbatim, no need to ask.
- `quote-found` — not a duplicate, but this file literally contains one of your `Error` quotes. The surrounding page may differ, but this specific problem text is present too.
- `quote-not-found` — the quote isn't there. Almost always means this version's wording is genuinely different at that spot; leave it alone.
- `file-missing` — no file at that path for this version (nothing to do).

Reconcile this against the template's own `Duplicated in` field from Step 1: if the reviewer listed a version the script doesn't confirm as `exact-duplicate` (or vice versa), mention the discrepancy when you ask about scope in Step 3 — trust the script's CSV-based answer for what gets auto-applied, but don't silently drop what the reviewer wrote.

If the script errors because the source path isn't in `review-list.csv` (it can happen — pages are excluded from the audit list for recent churn, draft status, or product-exclusion reasons), tell the user and ask how to proceed rather than silently skipping or guessing.

## Step 3: Confirm scope with the reviewer

- **Exact duplicates**: no need to ask — the CSV already proved these are the same page. Include them in Step 4 automatically.
- **`quote-found` siblings**: ask the reviewer, once, listing every such sibling: "This exact text also appears in `<version>`'s copy — apply the same fix there too?" Let them answer per-file or all-at-once. Don't touch these until they say yes.
- **`quote-not-found` and `file-missing`**: don't mention these unless the reviewer asks — they're not actionable.

## Step 4: Apply the fix(es)

For the primary file, every approved exact-duplicate, and every sibling the reviewer approved in Step 3:

1. Locate the `Error` text with the Edit tool's exact-match search.
2. If it isn't found verbatim (including in the *primary* file — reviewers sometimes paraphrase instead of quoting exactly), stop and ask for the precise quote. Don't fuzzy-match or guess at the closest paragraph.
3. Work out the concrete replacement from the `Fix`. If it's already literal replacement text, use it as-is. If it's a description (the common case — see Step 1), compose the smallest edit to the `Error` text that resolves what the `Fix` describes, in Netwrix voice per `docs/CLAUDE.md`. If the `Fix` doesn't give you enough to compose a specific, confident edit — it's vague about what should change, or it reads like a placeholder rather than a real description (compare `template.md`'s bad example: an unquoted `Error` and a `Fix` that just says "fix the wrong button name" without saying what the right name is) — stop and ask the reviewer what the replacement should actually say. Don't guess at specifics you weren't given.
4. Apply every correction block from this paste to a given file in the same pass.

Fix only what the correction describes. If a `Fix` would change something well beyond the quoted `Error` (e.g. it reads more like a request to rewrite the whole section than to correct a specific error), stop and confirm scope with the reviewer before proceeding — this is a reviewer-approved correction, not free rein to edit.

**On a `quote-found` sibling, replace only the matched substring, not the whole line or heading.** The sibling isn't a proven duplicate, so the text around your `Error` quote can differ — an extra anchor tag, a longer sentence, a different heading suffix. Editing the exact substring the script matched avoids clobbering that surrounding content; editing the whole line/paragraph you saw in the *primary* file risks overwriting something in the sibling that was never part of the correction.

## Step 5: Show the diff, wait for confirmation

Summarize what changed, per file (don't reprint entire documents). Explicitly ask the reviewer to confirm the edit looks right before continuing. **Do not run Vale or Dale yet** — linting only happens after the reviewer accepts, so you're not iterating on wording they haven't approved.

## Step 6: Lint, once accepted

Once the reviewer confirms, for every edited file:

```bash
vale <file>
```

Then:

```
/dale <file>
```

Both linters will very likely report violations that have nothing to do with your edit — these are older audited pages, and pre-existing issues elsewhere in the file are the norm, not the exception. Sort every reported violation into exactly one of these, in order:

1. **Inside the text you just wrote for the `Fix`** (even if it's on a line your edit touched) — don't fix it and don't ignore it either. Go back to the reviewer with the specific violation and ask how they want to handle it (e.g. an undefined acronym you introduced). Don't silently rewrite wording they're about to sign off on.
2. **On a line your edit touched, but outside the text you wrote** (e.g. surrounding punctuation or a word your edit's surgery incidentally affected) — fix it, then re-run until that line is clean.
3. **Everywhere else** — pre-existing and unrelated to your edit. Leave it alone and just list it in your summary. Don't expand the edit to clean up the whole file — the reviewer approved a specific correction in Step 5, not a general cleanup pass.

Re-run each linter after any fix until the lines you touched are clean, then report what was fixed and what pre-existing issues you left alone, per file.

## Step 7: Report and wrap-up

Give the reviewer a brief report: for the primary file and every duplicate you actually touched, what changed and why. Always name the duplicates you fixed alongside the primary — that's the whole point of the sibling-resolution step, don't bury it in a per-file diff they have to reconstruct themselves.

This skill doesn't touch the shared spreadsheet, the Document Review doc, or open PRs itself — remind the reviewer to:

- Open a pull request against `dev` with the changes.
- Once it merges (or once they've confirmed no fix was actually needed), go back to this page's Document Review doc in Xchange and fill in its **Status** section (`Audited`, `Accurate`, `Complete`) and paste your report into its **Fix Summary** section.
- Set `audited` (and, if this was the first pass on the page, `accurate`/`complete`) in the shared `review-list.csv`/workbook row too, for the primary version and every duplicate actually touched — the Document Review doc and the spreadsheet track different things (per-page narrative vs. cross-product rollup) and both need updating.

Then ask whether they want to continue with another document.

## Handling multiple pages in one paste

If the reviewer pastes corrections for more than one page in a single message, treat each source path as its own pass through Steps 1–6 (still one combined confirmation ask if that reads more naturally), and give one wrap-up covering every file touched.

## When something doesn't add up

Ask rather than guess, always — this reuses guidance from `docs-audit/template.md`'s checklist itself:

- Source path missing, ambiguous, or not found in `review-list.csv`.
- `Error` text not found verbatim in the target file.
- A `Fix` too vague to compose a confident, specific edit from.
- A `Fix` that reads like a broader rewrite than the `Error` quote justifies.
- A sibling the script can't resolve (e.g. `find-siblings.mjs` itself errors) — report the error, don't fall back to manual guessing about which versions share this page.
