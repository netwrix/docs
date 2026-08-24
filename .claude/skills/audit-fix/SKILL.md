---
name: audit-fix
description: "Apply a documentation-audit correction to a doc page — whether written in docs-audit/template.md's Where/Fix/Why form, or as freeform prose describing what's wrong and what it should say instead. Trigger this whenever someone pastes a docs-audit correction alongside a source path — usually alongside an instruction like 'Apply these documentation audit findings to `docs/accessanalyzer/11.6/admin/foo.md`' — even if they never say the word 'audit', use the Where/Fix/Why labels, or invoke this skill by name. Locates the file, cross-references the product's docs-audit review-list.csv to find exact-duplicate sibling versions and check near-duplicate ones for the same problem text, applies the fix, and — only after the reviewer confirms the diff looks right — runs vale and /dale until clean."
---

# Audit Fix

Triggered by a pasted docs-audit correction, with the source path (see Step 1).

A reviewer worked through `docs-audit/template.md`'s checklist against a live page, found a problem, and pasted a correction — in Where/Fix/Why form, or just as prose describing what's wrong. Your job: find every file the correction applies to, make exactly the described change, and only run the linters once the reviewer has confirmed the edit itself is right.

Read `docs/CLAUDE.md` before starting — it has the Netwrix writing standards your edits must follow.

## Why the "ask, don't guess" posture matters here

This session's own audit of near-duplicate pages across versions (same page, different version, not byte-identical) found that most differences are cosmetic — but a meaningful minority are real: a requirement that only applies to one version, a feature added or removed, a config value that changed. Mechanically copying a fix into every version that merely *looks* similar risks silently corrupting a version where the surrounding content is genuinely different. That's why this skill only auto-propagates to versions `review-list.csv` has already proven byte-identical, and always asks before touching anything else — never assume, check.

## Step 1: Parse the input

From the pasted message, extract:

- **The source path.** Usually backtick-quoted in the instruction sentence (e.g. "Apply these documentation audit findings to `docs/accessanalyzer/11.6/admin/foo.md`"). If you can't find an unambiguous path under `docs/`, ask for it — don't guess which file they mean.
- **One or more correction blocks.** Reviewers don't always use the spreadsheet's labeled form — plenty just paste prose like "the section on X says Y but that's actually Z." Handle both:
  - **Labeled form** — `Where:` / `Fix:` / `Why:`. Use directly: `Where` is a literal string to find, not a paraphrase; `Fix` is the exact replacement text; `Why` is context only, not an edit instruction.
  - **Freeform prose** — no labels, just a description of what's wrong and (usually) what it should say instead. Read the target file, find the specific sentence/step/snippet the reviewer is describing, and work out your own `Where` (the exact quote you'll search for), `Fix` (the replacement), and `Why` (their stated or implied reasoning) from it. Then **echo these back to the reviewer and get explicit confirmation before proceeding to Step 2** — something like "I read this as: replace `<Where>` with `<Fix>` — is that right?" This step exists because the whole exact-match safety mechanism in Step 4 depends on `Where` being a literal quote; with freeform input, you chose that quote rather than the reviewer, so confirm it before it drives an edit.

A single paste can contain several correction blocks (labeled, freeform, or a mix) for the same page — handle all of them together in one pass over that file.

## Step 2: Resolve siblings

Run the bundled script, passing the source path and the `Where` quotes (as a JSON array on stdin) from every correction block in this paste:

```bash
echo '["exact where text 1", "exact where text 2"]' | node .claude/skills/audit-fix/scripts/find-siblings.mjs <source_path>
```

This reads `docs-audit/<product>/review-list.csv` and reports, for every other version of the product:

- `exact-duplicate` — listed in the CSV's `duplicates` column (byte-identical aside from version strings). Safe to apply the same fix verbatim, no need to ask.
- `quote-found` — not a duplicate, but this file literally contains one of your `Where` quotes. The surrounding page may differ, but this specific problem text is present too.
- `quote-not-found` — the quote isn't there. Almost always means this version's wording is genuinely different at that spot; leave it alone.
- `file-missing` — no file at that path for this version (nothing to do).

If the script errors because the source path isn't in `review-list.csv` (it can happen — pages are excluded from the audit list for recent churn, draft status, or product-exclusion reasons), tell the user and ask how to proceed rather than silently skipping or guessing.

## Step 3: Confirm scope with the reviewer

- **Exact duplicates**: no need to ask — the CSV already proved these are the same page. Include them in Step 4 automatically.
- **`quote-found` siblings**: ask the reviewer, once, listing every such sibling: "This exact text also appears in `<version>`'s copy — apply the same fix there too?" Let them answer per-file or all-at-once. Don't touch these until they say yes.
- **`quote-not-found` and `file-missing`**: don't mention these unless the reviewer asks — they're not actionable.

## Step 4: Apply the fix(es)

For the primary file, every approved exact-duplicate, and every sibling the reviewer approved in Step 3:

1. Locate the `Where` text with the Edit tool's exact-match search.
2. If it isn't found verbatim (including in the *primary* file — reviewers sometimes paraphrase instead of quoting exactly), stop and ask for the precise quote. Don't fuzzy-match or guess at the closest paragraph.
3. Replace it with the `Fix` text.
4. Apply every correction block from this paste to a given file in the same pass.

Fix only what the correction describes. If a `Fix` would change something well beyond the quoted `Where` (e.g. it reads more like a request to rewrite the whole section than to correct a specific error), stop and confirm scope with the reviewer before proceeding — this is a reviewer-approved correction, not free rein to edit.

**On a `quote-found` sibling, replace only the matched substring, not the whole line or heading.** The sibling isn't a proven duplicate, so the text around your `Where` quote can differ — an extra anchor tag, a longer sentence, a different heading suffix. Editing the exact substring the script matched avoids clobbering that surrounding content; editing the whole line/paragraph you saw in the *primary* file risks overwriting something in the sibling that was never part of the correction.

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

1. **Inside the `Fix` text itself** (even if it's on a line your edit touched) — don't fix it and don't ignore it either. Go back to the reviewer with the specific violation and ask how they want to handle it (e.g. an undefined acronym you introduced, or passive voice in wording they gave you). Don't silently rewrite what they just signed off on in Step 5.
2. **On a line your edit touched, but outside the `Fix` text** (e.g. surrounding punctuation or a word your edit's surgery incidentally affected) — fix it, then re-run until that line is clean.
3. **Everywhere else** — pre-existing and unrelated to your edit. Leave it alone and don't mention it — these are older audited pages with plenty of pre-existing lint debt, and reporting it here is just noise against a scope the reviewer never asked you to touch. Don't expand the edit to clean up the whole file — the reviewer approved specific replacement text in Step 5, not a general cleanup pass.

Re-run each linter after any fix until the lines you touched are clean, then report what was fixed, per file.

## Step 7: Wrap-up

Remind the reviewer of the rest of `docs-audit/template.md`'s existing closing steps — this skill doesn't touch the shared spreadsheet or open PRs itself:

- Open a pull request against `dev` with the changes.
- Once it merges, set `fixed` to `Done` (or `No fix necessary` if nothing needed changing) and `audited` to `Done` for every version row actually touched — the primary version, any exact duplicates, and any approved near-duplicate siblings.

## Handling multiple pages in one paste

If the reviewer pastes corrections for more than one page in a single message, treat each source path as its own pass through Steps 1–6 (still one combined confirmation ask if that reads more naturally), and give one wrap-up covering every file touched.

## When something doesn't add up

Ask rather than guess, always — this reuses guidance from `docs-audit/template.md`'s checklist itself:

- Source path missing, ambiguous, or not found in `review-list.csv`.
- `Where` text not found verbatim in the target file.
- A `Fix` that reads like a broader rewrite than the `Where` quote justifies.
- A sibling the script can't resolve (e.g. `find-siblings.mjs` itself errors) — report the error, don't fall back to manual guessing about which versions share this page.
