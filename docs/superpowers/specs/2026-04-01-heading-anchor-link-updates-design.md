# Heading Anchor Link Updates — Design Spec

## Problem

The vale-autofix workflow (Phase 1 script, Phase 2 Claude, Phase 3 Dale) can modify heading text in markdown files. When heading text changes, the Docusaurus-generated anchor slug changes too. Any links referencing the old anchor — within the same file or elsewhere in the product/version folder — silently break. Because Docusaurus is configured with `onBrokenAnchors: 'throw'`, this causes build failures.

## Goal

Whenever the auto-fix process changes a heading, automatically find and update all anchor links referencing the old heading slug within the same product/version folder.

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Which phases | All three | Phase 1 makes the most heading changes (contractions, filler removal); AI phases also rewrite headings |
| Search scope | Product/version folder | Cross-product links are rare; same-file-only would miss common inter-page links |
| Include non-PR files | Yes | A heading change in `install.md` can break a link in `overview.md` even if `overview.md` wasn't in the PR |
| Slug generation (Phase 1) | Inline bash function | Simple enough for tr/sed; consistency between old and new slug matters more than exact Docusaurus parity |
| AI prompt detail level | Detailed step-by-step | CI Claude has no conversation history; explicit instructions reduce missed links |

## Architecture

### Phase 1: Bash script changes (`scripts/vale-autofix.sh`)

#### `slugify()` function

Converts a markdown heading line to a Docusaurus-style anchor slug.

Algorithm:
1. Check for custom anchor ID suffix `{#custom-id}` — if present, extract and return `custom-id`
2. Strip markdown heading prefix (`##`, `###`, etc.) and leading/trailing whitespace
3. Lowercase
4. Strip everything except `[a-z0-9 -]`
5. Replace spaces with hyphens
6. Collapse consecutive hyphens into one
7. Trim leading/trailing hyphens

Examples:
- `## Don't Click Here` → `dont-click-here`
- `### Setup the Application {#setup}` → `setup`
- `## Step 1: Install the Agent` → `step-1-install-the-agent`

#### `update_heading_anchors()` function

Runs after Phase 1 commits. Detects heading changes and updates anchor links.

Steps:
1. Run `git diff HEAD~1 HEAD -- '*.md'` to get the unified diff
2. Parse the diff to find changed heading lines — lines starting with `#` (markdown headings) that appear in both `-` and `+` hunks within the same hunk block
3. Pair old (`-`) and new (`+`) headings positionally within each hunk
4. For each pair, compute old and new slugs using `slugify()`
5. If old slug equals new slug, skip (heading text changed but slug didn't)
6. Determine the product/version folder from the file path:
   - Try `docs/<product>/<version>/` first (multi-version products)
   - Fall back to `docs/<product>/` (single-version/SaaS products)
7. Search all `.md` files in that folder for these patterns:
   - `](#old-slug)` — same-page anchor links
   - `](filename#old-slug)` — relative file links with anchor
   - `](path/to/filename#old-slug)` — deeper relative links
8. Replace `#old-slug` with `#new-slug` using `sed -i`
9. If any replacements were made, stage and commit: `fix(vale): update anchor links for changed headings`

#### Product/version folder detection

Given a file path like `docs/accessanalyzer/12.0/install/setup.md`:
- Split on `/` after `docs/`
- If the second segment matches a version pattern (digits, dots, underscores), folder is `docs/<product>/<version>/`
- Otherwise, folder is `docs/<product>/`

### Phase 2: Claude prompt additions (`vale-autofix.yml`)

The following instructions are appended to the existing Phase 2 prompt:

> **Heading anchor updates:** When you modify a heading line (any line starting with `#`), you MUST update all anchor links that reference the old heading.
>
> 1. Record the original heading text before editing
> 2. Compute the old anchor slug: strip the `#` prefix and whitespace, lowercase, remove everything except `[a-z0-9 -]`, replace spaces with hyphens, collapse consecutive hyphens, trim leading/trailing hyphens. If the heading has a `{#custom-id}` suffix, use `custom-id` as the slug instead.
> 3. After editing, compute the new anchor slug the same way
> 4. If the slug changed, determine the product/version folder from the file path:
>    - Multi-version: `docs/<product>/<version>/` (e.g., `docs/accessanalyzer/12.0/`)
>    - Single-version: `docs/<product>/` (e.g., `docs/threatprevention/`)
> 5. Search ALL `.md` files in that folder (not just PR-changed files) for these link patterns:
>    - `](#old-slug)` — same-page links
>    - `](filename#old-slug)` — relative links
>    - `](path/to/filename#old-slug)` — deeper relative links
> 6. Replace `#old-slug` with `#new-slug` in all matches
> 7. Include each anchor update in the `fixed` array of your summary JSON, using the same `check` value as the heading fix that caused it, with action describing the anchor change (e.g., `"updated anchor link from #do-not-use to #dont-use"`)

### Phase 3: Dale prompt additions (`vale-autofix.yml`)

Identical instructions to Phase 2, with the only difference being the summary format uses `"rule"` instead of `"check"`:

> 7. Include each anchor update in the `fixed` array of your summary JSON, using the same `rule` value as the heading fix that caused it, with action describing the anchor change (e.g., `"updated anchor link from #do-not-use to #dont-use"`)

### Workflow changes (`vale-autofix.yml`)

One new step added after "Commit Phase 1 fixes":

```yaml
- name: Update heading anchors (Phase 1)
  if: steps.phase1-commit.outputs.committed == 'true'
  run: |
    # Source the function from vale-autofix.sh
    source scripts/vale-autofix.sh --anchors-only
    # Or: a dedicated call that runs update_heading_anchors
```

Implementation note: The `update_heading_anchors` function needs to be callable standalone from the workflow. Options: export it from `vale-autofix.sh` behind a flag, or extract to a separate callable section at the end of the script. The implementation plan will determine the cleanest approach.

## Edge Cases

| Case | Handling |
|------|----------|
| Custom anchor IDs (`{#custom-id}`) | `slugify()` detects `{#...}` suffix and returns the custom ID. Both old and new headings checked. |
| Single-version (SaaS) products | Folder detection falls back to `docs/<product>/` when no version segment found |
| Duplicate headings | Docusaurus appends `-1`, `-2` for duplicates. Phase 1 does best-effort exact slug match; Phases 2/3 Claude can use judgment |
| Slug unchanged after heading fix | Skip anchor update (e.g., removing "please" from `## Please See Overview` changes text but slug `please-see-overview` → `see-overview` does change; however `## The Setup` → `## The Set Up` both slug to `the-set-up` — no update needed) |
| No headings changed | Anchor-update step is a no-op |
| Heading deleted entirely | Not an auto-fix scenario — Vale/Dale fix text, they don't delete headings |
| Links in code blocks | Phase 1 sed operates on all matches; risk is low since anchor patterns inside fenced code blocks are rare. Phases 2/3 Claude can use judgment to skip code blocks. |

## Files Modified

| File | Change |
|------|--------|
| `scripts/vale-autofix.sh` | Add `slugify()` and `update_heading_anchors()` functions |
| `.github/workflows/vale-autofix.yml` | Add anchor-update step after Phase 1 commit; update Phase 2 and Phase 3 prompts |

## Out of Scope

- Updating anchors in files outside the product/version folder
- Handling anchor changes caused by manual edits (outside the auto-fix workflow)
- Updating Docusaurus sidebar or navbar references (these don't use heading anchors)
