# Anchor Link Update Test Plan

Push these files to a PR targeting dev. The vale-autofix workflow should:

## Scenario 1: Contraction fix (Phase 1)

- **Heading:** `## Do Not Use the Legacy Method` → `## Don't Use the Legacy Method`
- **Slug change:** `#do-not-use-the-legacy-method` → `#dont-use-the-legacy-method`
- **Links to check:**
  - `setup.md` same-file link (line 15)
  - `guide.md` cross-file link (line 5)
  - `admin/reference.md` cross-directory link (line 5)
- **Expected:** All three links updated to `#dont-use-the-legacy-method`

## Scenario 2: Filler removal (Phase 1)

- **Heading:** `## Please Configure the Agent` → `## Configure the Agent`
- **Slug change:** `#please-configure-the-agent` → `#configure-the-agent`
- **Links to check:**
  - `setup.md` same-file link (line 17)
  - `guide.md` cross-file link (line 7)
  - `admin/reference.md` cross-directory link (line 7)
- **Expected:** All three links updated to `#configure-the-agent`

## Scenario 3: Same-file anchor link

- Covered by Scenarios 1 and 2 — `setup.md` has links to its own headings

## Scenario 4: Cross-file and cross-directory links

- Covered by Scenarios 1 and 2 — `guide.md` (same dir) and `admin/reference.md` (subdirectory)

## Scenario 5: Slug unchanged (no-op)

- **Heading:** `## checkbox Options` — body text has "checkbox" which triggers Netwrix.Checkbox
- **But:** The heading itself becomes `## Checkbox Options` → slug changes from `#check-box-options` to `#checkbox-options`
- **Links to check:** `guide.md` link to `#check-box-options` (line 9)
- **Expected:** Link updated to `#checkbox-options`
- **Note:** This actually DOES change the slug, so it tests another substitution case

## Scenario 6: Custom anchor ID (no-op)

- **Heading:** `## Advanced Tuning {#tuning}` — body has "Don't" which triggers contractions
- **But:** The heading text may change but the anchor is `{#tuning}`, so the slug stays `tuning`
- **Links to check:** `guide.md` and `admin/reference.md` links to `#tuning`
- **Expected:** Links unchanged — custom ID means slug doesn't change regardless of heading text fix
