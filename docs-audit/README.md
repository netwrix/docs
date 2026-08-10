# Documentation audit

This directory tracks a manual accuracy audit of the Netwrix docs site. Product
experts review each page against the live product and record what they find.
Nothing here is part of the published docs site — it's internal tooling and
lives outside `docs/` on purpose, so it never ships to `docs.netwrix.com` and
never triggers the Vale/Dale or editorial-review CI on `docs/**`.

Review status lives in a shared spreadsheet, not in this repo. This directory
only holds the generated CSVs you import and the shared review guide.

## Layout

```
docs-audit/
  template.md              # read this once — the checklist and correction-writing form
  _orphans.csv              # tracked doc files that belong to no registered product version
  <product>/
    review-list.csv          # import this as one tab per product
    activity.csv               # repo change counts since the audit started for this product
    _meta.json                  # generator bookkeeping (why a page was included/excluded)
```

## One-time setup: the shared workbook

1. Create one Google Sheets file or Excel Online workbook (on SharePoint or
   OneDrive) for the audit — either works the same way, and both support
   real-time multi-reviewer editing.
2. Import each product's `review-list.csv` as its own tab: **File → Import →
   Insert new sheet** (Google Sheets) or **Data → From Text/CSV** (Excel).
3. Add a **Dashboard** tab with formulas referencing each product tab, for
   example:
   ```
   Google Sheets:  =COUNTIF(AccessAnalyzer!G:G,"Done")
   Excel:          =COUNTIF(AccessAnalyzer!G:G,"Done")
   ```
   (column `G` is `audited` in the schema below — adjust to `fixed` or your
   sheet's actual column letters). This updates instantly as reviewers edit
   status cells — no refresh, no script, no export needed. (The generated
   workbook from `npm run audit:workbook` builds this Dashboard tab for you,
   with dropdown-restricted `audited`/`fixed` columns on every product tab.)

## Review-list columns

| Column | Filled in by | Meaning |
|---|---|---|
| `document_title` | generator | Page title |
| `version` | generator | Product version this row belongs to |
| `live_page_url` | generator | Link to the published page |
| `source_path` | generator | Markdown file path in this repo |
| `duplicates` | generator | Blank for a normal row. If other versions of this product have an identical page, lists those versions — there's no separate row for them, this row covers all of them |
| `reviewer` | you | Your name or initials |
| `audited` | you | Blank, `In progress`, or `Done` |
| `fixed` | you | Blank, `In progress`, `Done`, or `No fix necessary` |
| `notes` | you | Anything else worth flagging |

## Running an audit

1. Read `template.md` once before you start — it has the full checklist and
   the form for writing up corrections.
2. Pick a row. Fill in `reviewer`. Open the live page (`live_page_url`) and
   the product side by side. Work through the checklist in `template.md`.
3. If `duplicates` is filled in, this page is byte-identical (aside from
   version strings) to the same page in the versions listed there — those
   versions don't get their own row. Auditing this row audits all of them.
4. If you found no problems, set `audited` to `Done` and move on. If you
   found problems, fill out the `Where / Fix / Why` form in `template.md` and
   paste it into Claude Code — don't write it in the spreadsheet. Follow the
   closing instructions in `template.md` to get the fix applied, then set
   `audited` and `fixed` once it's merged (or `fixed` to `No fix necessary` if
   no code change was needed).

## Regenerating the lists

```bash
npm run audit:generate -- --product=<id>
```

Every run produces a fresh, complete `review-list.csv`. Status lives in the
spreadsheet, not in this file, so regenerating never risks losing reviewer
data — but it also means you decide how to merge a regenerated list into an
already-imported tab (usually: only regenerate before the initial import, or
manually diff in new/removed rows if the doc set changed significantly).
`_meta.json` records why any given page was included or excluded (recent
churn, KB path, no registered version, etc.).

To refresh how much a page has changed in the repo since the audit started,
without touching anything in your spreadsheet:

```bash
npm run audit:generate -- --product=<id> --activity-only
```

This only rewrites `activity.csv`, which holds no reviewer data. Import it
into a small companion tab and pull the numbers into your main tab with
`VLOOKUP`/`INDEX`+`MATCH` on `source_path`, so a re-import never risks a
status cell.
