# Product briefs

One short file per product, named `<product id from src/config/products.js>.md`. The `doc-draft` skill reads the brief before it reads a PR, so it starts out knowing what the product is and where things live in the code.

Keep each brief to about two pages. Describe what stays true across releases: don't list features or version-specific behavior. The code wins over the brief; when they disagree, fix the brief.

Start from this shape:

```markdown
---
product: <id>
repo: <owner/name>
local_clone: <suggested path, per machine; optional. The agent searches common folders, then offers to clone>
last_reviewed: YYYY-MM-DD
---

## What it is
Who uses it and what it does, in a few sentences. Editions or tiers, if any.

## Code layout
| Path | Role | User-visible behavior |
|---|---|---|

## Vocabulary
| Code says | UI and docs say |
|---|---|

## Where a change usually lands
The files a typical PR touches for: a new setting, a new option or switch, a new report field, a new check or rule.

## Docs map
Where each area is documented under `docs/<product>/`, and which page types exist.

## Watch out for
Things that trip up a reader of the code: dead code, flags that look user-facing but aren't, naming that differs from the docs.
```
