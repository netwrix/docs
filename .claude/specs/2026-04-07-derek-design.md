# Derek Skill — Design Spec

**Date:** 2026-04-07  
**Status:** Approved

---

## Summary

Derek is a Claude skill that lints KB articles against the Netwrix KB style guide. It is the KB equivalent of dale — pure input/output, no conversation. Invoked with `/derek <kb-file>`.

Two deliverables:
1. `kb_style_guide.md` — new file at repo root, authoritative style reference for KB articles
2. `.claude/skills/derek/` — the skill itself

---

## Context

- KB articles live in `docs/kb/<product>/`
- They are written by TSEs (technical support engineers), not the docs team
- They follow a different style guide than regular product docs
- The `feature/frontmatter-autoinjection` script explicitly skips KB files (`docs/kb/*`) because their frontmatter schema is more complex — derek handles it instead
- Dale enforces the docs style guide (`netwrix_style_guide.md`). Derek enforces the KB style guide (`kb_style_guide.md`). **The two guides conflict on contractions and heading case — do not run `/dale` on KB files.**

---

## Deliverable 1: `kb_style_guide.md`

Created at the repo root alongside `netwrix_style_guide.md`.

**Source:** Internal wiki KB style guide (`knowledge-style-guide-markdown.md`), with the following additions and overrides.

### Additions (from docs style guide — apply universally)

- No "please" in instructions — be direct
- No "simply", "just", "easily", "basically", "obviously"
- No inline "note that" / "please note" — use admonition blocks
- No impersonal constructions: "it is recommended / necessary / possible / required / advised / suggested"
- Active voice — with examples
- Define technical terms and acronyms on first use
- Descriptive link text — never "click here", "read more", "learn more", "see more"

### Overrides (wiki rule takes precedence over docs style guide)

| Topic | KB rule |
|---|---|
| Contractions | Write out in full: "do not", "cannot", "you will" |
| Heading case | Title case (Chicago style, capitalizemytitle.com) |

### Tags field — required, must include `kb`

The wiki marks `tags` as optional. **This is overridden for the Netwrix repo:** `tags` must be present and must include `kb`. This enables KB article filtering in Algolia search — Algolia indexes the `tags` field automatically, no Algolia config changes required.

### Frontmatter schema

All KB articles must have this frontmatter:

```yaml
---
description: >-
  Short, SEO-friendly summary of the article (1–2 sentences).
keywords:
  - keyword one
  - keyword two
  - (8–12 items total)
products:
  - product-id
sidebar_label: 'Article Title'
tags:
  - kb
title: "Full Article Title"
knowledge_article_id: kA0Qk000000XXXXKAA
---
```

**Required fields:**

| Field | Format |
|---|---|
| `title` | Quoted string — full article title |
| `description` | Non-empty string or `>-` multiline block |
| `sidebar_label` | Quoted string — matches or shortens the title |
| `keywords` | YAML list of 8–12 technical/product search terms |
| `products` | YAML list of product IDs (see product names table) |
| `tags` | YAML list; **must include `kb`** |
| `knowledge_article_id` | Salesforce KB article ID matching `kA[0-9A-Za-z]+` |

---

## Deliverable 2: `.claude/skills/derek/`

### Architecture

Mirrors dale exactly: `SKILL.md` + `rules/*.yml` + `references/rule-schema.yml`. Option A chosen over Option B (split `rules/` and `checks/`) because the output and invocation are identical, and the added complexity of two processing loops in SKILL.md provides no user-facing benefit. The `reason` field in rule files describes what to look for — equally valid for prose patterns and structural assertions.

### File layout

```
.claude/skills/derek/
  SKILL.md
  rules/
    frontmatter-title.yml
    frontmatter-description.yml
    frontmatter-sidebar-label.yml
    frontmatter-keywords-count.yml
    frontmatter-products.yml
    frontmatter-tags-kb.yml
    frontmatter-knowledge-article-id.yml
    structure-article-type.yml
    no-please.yml
    minimizing-difficulty.yml
    no-note-that.yml
    impersonal-constructions.yml
    passive-voice.yml
    undefined-jargon.yml
    descriptive-links.yml
    contractions.yml
    title-case-headings.yml
    business-jargon.yml
  references/
    rule-schema.yml
```

18 rules total: 7 frontmatter, 1 structure, 10 prose.

### SKILL.md behavior

- Pure linter — no conversation, no explanation beyond the output table
- Creates a Todo for each rule file
- For each rule: reads `reason`, checks the document, notes violations
- Outputs a single table at the end (or "no issues found")
- Includes a warning: **do not run `/dale` on KB files** — the KB style guide and docs style guide conflict on contractions and heading case

### Output format (same as dale)

```
| Line | Rule | Message | Offending Text |
|------|------|---------|----------------|
```

- Frontmatter violations where a field is missing: Line is `1` (frontmatter block start)
- Structure violations: Line is the line number of the first mismatched or missing heading
- Structure violations where sections are entirely missing: message includes the expected heading template the writer can copy in

---

## Rules detail

### Frontmatter rules

| File | Level | Checks |
|---|---|---|
| `frontmatter-title.yml` | error | `title` present and is a quoted string |
| `frontmatter-description.yml` | error | `description` present and non-empty |
| `frontmatter-sidebar-label.yml` | error | `sidebar_label` present and non-empty |
| `frontmatter-keywords-count.yml` | warning | `keywords` present and contains 8–12 items |
| `frontmatter-products.yml` | error | `products` present with at least one item |
| `frontmatter-tags-kb.yml` | error | `tags` present and includes `kb` |
| `frontmatter-knowledge-article-id.yml` | error | `knowledge_article_id` present and matches `kA[0-9A-Za-z]+` |

### Structure rule

| File | Level | Checks |
|---|---|---|
| `structure-article-type.yml` | warning | Infers article type from title, validates required H2 headings are present |

**Type inference logic:**
- Title starts with `"Error:"` → Error Resolution → expects `## Symptom/Symptoms`, `## Cause/Causes`, `## Resolution/Resolutions`
- Title starts with a gerund or `"How to"` → How-To → expects `## Overview` + `## Instructions`, or `## Question` + `## Answer`
- Everything else → Symptom Resolution → expects `## Symptom/Symptoms`, `## Cause/Causes`, `## Resolution/Resolutions`

When required headings are missing, the violation message outputs the expected heading template for the inferred type.

### Prose rules

| File | Level | Checks |
|---|---|---|
| `passive-voice.yml` | warning | Passive voice constructions in body text |
| `no-please.yml` | warning | "please" in instructions |
| `minimizing-difficulty.yml` | warning | "simply", "just", "easily", "basically", "obviously" |
| `no-note-that.yml` | warning | Inline "note that" or "please note" |
| `impersonal-constructions.yml` | warning | "it is recommended/necessary/possible/required/advised/suggested" |
| `contractions.yml` | warning | Contractions (don't, can't, you'll, etc.) — write out in full in KB articles |
| `title-case-headings.yml` | warning | Headings not in title case (Chicago style) |
| `business-jargon.yml` | warning | "utilize/utilise", "leverage" (non-financial), "synergy" |
| `descriptive-links.yml` | warning | Generic link text: "click here", "read more", "learn more", "see more", "this link" |
| `undefined-jargon.yml` | warning | Technical terms or acronyms used without definition on first use |

`undefined-jargon.yml` is `warning` (not `error`) because it requires the most judgment and is the most likely source of false positives.

---

## Branch

New feature branch off `dev`: `feature/derek-skill`

---

## Notes on existing articles

Article scan (15 articles across 6+ products) found:
- **Tags**: All articles have either `tags: []` or category-based tags — no article has `kb` in tags. `frontmatter-tags-kb` will fire on every existing article.
- **Keyword count**: Range 3–9 across sampled articles, below the 8–12 requirement. `frontmatter-keywords-count` will fire frequently.
- **Missing sidebar_label**: One article found without it.
- These are expected and reflect the remediation work derek is meant to surface.
