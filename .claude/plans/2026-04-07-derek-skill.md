# Derek Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `kb_style_guide.md` at the repo root and the `.claude/skills/derek/` linter skill that enforces it against KB articles in `docs/kb/`.

**Architecture:** Derek mirrors the dale skill exactly — `SKILL.md` drives a loop over `rules/*.yml` files, each defining one check via `message`, `level`, and `reason` fields. Rules cover frontmatter validation (7), article structure (1), and prose (10). `kb_style_guide.md` is the human-readable source of truth that derek's rules enforce.

**Tech Stack:** Markdown, YAML, Claude skill conventions (same pattern as `.claude/skills/dale/`)

**Spec:** `.claude/specs/2026-04-07-derek-design.md`

---

## File map

| Action | Path |
|---|---|
| Create | `kb_style_guide.md` |
| Create | `.claude/skills/derek/SKILL.md` |
| Create | `.claude/skills/derek/references/rule-schema.yml` |
| Create | `.claude/skills/derek/rules/frontmatter-title.yml` |
| Create | `.claude/skills/derek/rules/frontmatter-description.yml` |
| Create | `.claude/skills/derek/rules/frontmatter-sidebar-label.yml` |
| Create | `.claude/skills/derek/rules/frontmatter-keywords-count.yml` |
| Create | `.claude/skills/derek/rules/frontmatter-products.yml` |
| Create | `.claude/skills/derek/rules/frontmatter-tags-kb.yml` |
| Create | `.claude/skills/derek/rules/frontmatter-knowledge-article-id.yml` |
| Create | `.claude/skills/derek/rules/structure-article-type.yml` |
| Create | `.claude/skills/derek/rules/passive-voice.yml` |
| Create | `.claude/skills/derek/rules/no-please.yml` |
| Create | `.claude/skills/derek/rules/minimizing-difficulty.yml` |
| Create | `.claude/skills/derek/rules/no-note-that.yml` |
| Create | `.claude/skills/derek/rules/impersonal-constructions.yml` |
| Create | `.claude/skills/derek/rules/contractions.yml` |
| Create | `.claude/skills/derek/rules/title-case-headings.yml` |
| Create | `.claude/skills/derek/rules/business-jargon.yml` |
| Create | `.claude/skills/derek/rules/descriptive-links.yml` |
| Create | `.claude/skills/derek/rules/undefined-jargon.yml` |

---

## Task 1: Create feature branch

**Files:** none

- [ ] **Step 1: Verify you are on dev and it is up to date**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git checkout dev
git pull origin dev
```

Expected: `Already up to date.` or a list of pulled commits.

- [ ] **Step 2: Create and check out the feature branch**

```bash
git checkout -b feature/derek-skill
```

Expected: `Switched to a new branch 'feature/derek-skill'`

- [ ] **Step 3: Verify**

```bash
git branch
```

Expected: `* feature/derek-skill` is the active branch.

---

## Task 2: Create `kb_style_guide.md`

**Files:**
- Create: `kb_style_guide.md` (repo root, alongside `netwrix_style_guide.md`)

This file is the authoritative style reference for KB articles. Derek's rules enforce it. It is based on the internal wiki KB style guide with documented additions and overrides.

- [ ] **Step 1: Create `kb_style_guide.md`**

Write the following content to `kb_style_guide.md` at the repo root:

````markdown
# Netwrix KB Style Guide

This guide establishes writing standards for Netwrix Knowledge Base (KB) articles. KB articles are written by Technical Support Engineers (TSEs) and live in `docs/kb/<product>/` in the documentation repository.

This guide is enforced by the `derek` linter skill (`/derek <kb-file>`).

> **Important for documentation contributors:** This guide conflicts with the Netwrix docs style guide (`netwrix_style_guide.md`) on two points — contractions and heading case. Do not apply docs style guide rules to KB articles. Do not run `/dale` on KB files.

| Topic | KB rule | Docs rule |
|---|---|---|
| Contractions | Write out in full: "do not", "cannot", "you will" | Use contractions: "don't", "can't", "you'll" |
| Heading case | Title case (Chicago style) | Sentence case |

---

## Article Types

KB articles follow one of two primary types.

### How-To Articles

How-to articles provide step-by-step guidance for accomplishing specific tasks.

**Title format:** `[Action Gerund] [Specific Task]` — start with a gerund, no "How to" prefix, no question mark.

- Good: `Modifying SSRS Report Timeouts`
- Good: `Auditing a Non-trusted Domain`
- Bad: `How to Modify SSRS Report Timeouts?` (starts with "How to", ends with question mark)
- Bad: `Auditing a non-trusted domain` (sentence case)

**Formats:**

- **Instructions format** — for complex procedures: sections are `## Overview` and `## Instructions`
- **Question and Answer format** — for simple procedures: sections are `## Question` and `## Answer`

### Resolution Articles

Resolution articles help customers troubleshoot specific errors or unexpected behavior.

**Error Resolution** — for specific error codes or messages.

- Title format: `Error: [Unique Error Code/Message]`
- Include only the most unique part of the error message in the title. If the error message itself contains the word "error," do not start the title with "Error:".
- Good: `Error: Event Collection Failed 0x80004005`
- Bad: `Error: Can't Process Request` (too generic)

**Symptom Resolution** — for unexpected behavior that does not produce an explicit error.

- Title format: `[Feature or Component] [Symptom or Issue] [Optional: Condition or Context]`
- Good: `Active Directory Users Missing from Search Results`
- Bad: `AD not working right` (too vague)

Both resolution article formats use sections: `## Symptom` (or `## Symptoms`), `## Cause` (or `## Causes`), `## Resolution` (or `## Resolutions`).

---

## Article Structure

### Section limits

Articles should not exceed five main H2 headings.

### Optional sections for all article types

**Related Query / Related Queries** — place as the first section when applicable. Include exact wording from customer support ticket subjects (correcting only typos). Helps with searchability and surfaces real customer language.

**Related Links** — place at the end. List all relevant links referenced in the article.

### Heading hierarchy

- The article title is always H1 (`#`)
- Main section headings are H2 (`##`)
- Subsections are H3 (`###`) and H4 (`####`)
- Do not skip heading levels

---

## Article Titles

- **Use title case.** Use [capitalizemytitle.com](https://capitalizemytitle.com/) (Chicago style) if you are unsure.
- **Do not include product names in titles.** Product names belong in the `products` frontmatter field.
- **Use keywords customers will search for,** especially words from customer ticket subjects.
- **Include unique identifiers** like error codes.
- **Avoid vague or generic titles.** The clearer the title, the more findable it is.

---

## Voice and Tone

### General principles

- Use second person ("you") when addressing the reader.
- Write in active voice rather than passive voice.
  - Do: "The agent collects the log."
  - Do not: "The log is collected by the agent."
- Be direct, clear, and concise.
- Maintain a professional but approachable tone.
- Do not use humor — it rarely translates across cultures.

### Words and phrases to avoid

- **Minimize difficulty:** Do not use "simply," "just," "easily," "basically," or "obviously." These minimize the difficulty of what the reader is trying to do.
  - Do: "Configure the monitoring plan."
  - Do not: "Simply configure the monitoring plan."

- **"Please":** Do not use "please" in instructions. Be direct.
  - Do: "Enter your credentials."
  - Do not: "Please enter your credentials."

- **Inline "note that" / "please note":** Do not use these inline in body text. Use a blockquote callout instead.
  - Do: `> **NOTE:** The redirect URI is case-sensitive.`
  - Do not: "Note that the redirect URI is case-sensitive."
  - Do not: "Please note that the redirect URI is case-sensitive."

- **Impersonal constructions:** Avoid "it is recommended," "it is necessary," "it is possible," "it is required," "it is advised," and "it is suggested." Rewrite with an active subject or a direct imperative.
  - Do: "Netwrix recommends running the server as an IIS website."
  - Do: "Restrict the maximum server memory value to prevent performance issues."
  - Do not: "It is recommended to run the server as an IIS website."
  - Do not: "It is necessary to restrict the maximum server memory value."

- **Business jargon:** Do not use "utilize" or "utilise" (use "use"), "leverage" as a verb in non-financial contexts, or "synergy."

- **Colloquialisms and idioms:** Avoid phrases that may not translate across cultures (for example, use "stop loading" instead of "hang").

### Jargon and acronyms

Define technical terms and acronyms on first use. Do not assume the reader knows product-specific abbreviations.

- Do: "Configure the File System Access Audit (FSAA) monitoring plan. FSAA collects data from file servers."
- Do not: "Configure the FSAA monitoring plan."

---

## Contractions

**Write contractions out in full.** This is a KB-specific rule that differs from the Netwrix docs style guide.

- Do: "do not", "cannot", "you will", "it is", "there is", "that is", "is not", "are not", "was not", "were not", "has not", "have not", "had not", "does not", "did not", "would not", "should not", "could not"
- Do not: "don't", "can't", "you'll", "it's", "there's", "that's", "isn't", "aren't", "wasn't", "weren't", "hasn't", "haven't", "hadn't", "doesn't", "didn't", "wouldn't", "shouldn't", "couldn't"

---

## Article Length

- Focus on one topic per article.
- Place the most important information first.
- Keep paragraphs to 3–4 sentences maximum.
- Use bullet points and numbered lists for readability.
- One idea per paragraph.
- Use meaningful subheadings every 200–300 words.

---

## Headings and Subheadings

- **Use title case.** This is a KB-specific rule that differs from the Netwrix docs style guide, which uses sentence case.
  - Capitalize all words except: articles (a, an, the), coordinating conjunctions (and, but, or, nor, for, so, yet), and prepositions of four letters or fewer — unless they open or close the heading.
  - Capitalize prepositions that are part of a phrasal verb (for example, "Set Up").
  - Use [capitalizemytitle.com](https://capitalizemytitle.com/) (Chicago style) to check.
- Avoid passive voice in headings.
- Avoid punctuation marks in headings.
- H2 for main article sections. H3 and H4 for subsections. Do not skip levels.

---

## Frontmatter

All KB articles must begin with a frontmatter block.

### Required fields

| Field | Description |
|---|---|
| `title` | The full article title, as a quoted string. Must match the H1 heading exactly. |
| `description` | A short, SEO-friendly summary (1–2 sentences). Use `>-` for multiline values. |
| `sidebar_label` | Matches the article title. May be shortened if the title is very long. |
| `keywords` | 8–12 relevant technical and product search terms, as a YAML list. |
| `products` | One or more product IDs from the product names table, as a YAML list. |
| `tags` | YAML list. **Must include `kb`.** See note below. |
| `knowledge_article_id` | The Salesforce Knowledge Article ID. Format: `kA` followed by alphanumeric characters (for example, `kA0Qk000000XXXXKAA`). |

### The `tags: [kb]` requirement

The wiki KB style guide marks `tags` as optional. **This is overridden for the Netwrix documentation repository.** The `tags` field must be present and must include `kb` for all KB articles.

This requirement exists because Algolia (the site's search provider) indexes the `tags` field automatically. Including `kb` in every KB article's tags enables KB-specific filtering in search results. No Algolia configuration changes are required — the crawler picks up the field automatically.

### Example frontmatter block

```yaml
---
description: >-
  When the 2-FSAA Bulk Import job returns a SQL logic error, the database
  structure map is likely corrupted. This article describes causes and
  provides two resolutions.
keywords:
  - bulk import
  - SQL logic error
  - strucmap
  - 2-FSAA
  - FileSystem
  - reset hosts
  - repair database
  - Netwrix Access Analyzer
  - NEA
products:
  - enterprise_auditor
sidebar_label: 'Bulk Import Error: SQL Logic Error Unknown Database Strucmap'
tags:
  - kb
title: "Bulk Import Error: SQL Logic Error Unknown Database Strucmap"
knowledge_article_id: kA0Qk0000001msDKAQ
---
```

---

## Punctuation

Follow Chicago Manual of Style (CMOS) for all punctuation.

- **Serial comma:** Use a comma before "and" or "or" in a series of three or more items.
- **Contractions:** Write out in full (see Contractions section above).
- **Exclamation marks:** Avoid, even in warnings.
- **Colons:** Use only at the end of complete sentences to introduce lists or explanations. Capitalize the first word after a colon only if it begins a complete sentence.
- **Semicolons:** Use to separate closely related independent clauses, or to separate complex list items that contain commas.
- **Hyphens:** Use for compound modifiers before nouns (for example, "well-known feature").
- **En dashes:** Use for ranges (for example, "pages 10–15").
- **Em dashes:** Use for abrupt changes in thought or emphasis. Do not add spaces around em dashes.
- **Parentheses:** Use sparingly for supplementary information that would interrupt the main text.
- **List items:** End each item with consistent punctuation. If items are complete sentences, end with a period. If items are fragments, omit periods from all items.

---

## Markup Conventions

- `##`, `###`, `####` for H2, H3, H4 headings (the article title is always H1)
- `[Link text](URL)` for hyperlinks
- `![alt text](image_url)` for images
- `1.` for ordered lists, `-` or `*` for unordered lists
- Fenced code blocks (triple backticks) for block-level code, commands, error messages, and paths to be copied. Specify the language after the opening backticks when possible.
- Single backticks for inline code when content does not need to be copied
- `**bold**` for UI elements, buttons, menu items, tabs, checkboxes, dropdown options, navigation steps, and form field names
- Blockquote callouts for notes and warnings:

```markdown
> **NOTE:** Supplementary information the reader should be aware of.

> **IMPORTANT:** Critical information that could cause issues if ignored.
```

Do not use inline "note that" or "please note" in body text. Use a blockquote callout instead.

---

## Links

### Internal links

- Do not use generic link text such as "click here," "read more," "learn more," "see more," or "this link." Write text that describes where the link goes.
  - Do: `See [Configuring the Data Collection Account](../config.md) for setup steps.`
  - Do not: `Click [here](../config.md) for details.`
- Link to the latest version of any referenced article.
- When referring to a subsection, name the subsection and its parent section.

### External links

Format external links with a middot and arrow after the company name:

```markdown
[SMB Security Enhancements ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-security)
```

---

## Screenshots

- Use red rectangles only for markup. No arrows, circles, or highlights.
- No more than two shapes per screenshot.
- Add descriptive alt text to all images. Alt text formula: `[Action being shown] + [Key UI elements visible]`.
  - Example: `Dialog box for selecting monitoring plan settings with the Schedule tab active`
- Write all steps clearly in the article body. The article must be followable without screenshots.
- Images work poorly inside lists due to platform formatting constraints. Place images after the list ends where possible.

---

## Lists

- Capitalize the first word of each list item.
- Use consistent punctuation across all items: either all items end with a period, or none do.
- Use unordered lists for unordered recommendations or options.
- Use ordered lists for sequential steps.
- Minimize nesting. Second-level lists are rarely needed — start a new paragraph instead.

---

## Accessibility

- Maintain a logical heading structure. Do not skip heading levels.
- Use descriptive link text (see Links section).
- Add alt text to all images (see Screenshots section).
- Do not use color alone to convey meaning.

---

## Optimizing for AI Retrieval (RAG)

- Define technical terms clearly on first use.
- Use consistent terminology throughout — do not use synonyms for technical terms.
- Create logical, self-contained sections that can be understood independently.
- Use descriptive subheadings that convey the main point of each section.
- Avoid ambiguous pronoun references ("it," "this," "that") — use the noun instead.

---

## Product Names

Use the following names in KB articles. Do not use abbreviations such as "NA" for Netwrix Auditor.

| Full Product Name | Short Product Name | Product ID (for `products` field) |
|---|---|---|
| Netwrix Activity Monitor | Activity Monitor | `activity_monitor` |
| Netwrix 1Secure | 1Secure | `onesecure` |
| Netwrix Auditor | Auditor | `auditor` |
| Netwrix Change Tracker | Change Tracker | `change_tracker` |
| Netwrix Data Classification | Data Classification | `data_classification` |
| Netwrix Directory Manager | Directory Manager | `groupid` |
| Netwrix Endpoint Protector | Endpoint Protector | `endpoint_protector` |
| Netwrix Log Tracker | Log Tracker | `log_tracker` |
| Netwrix Password Policy Enforcer | Password Policy Enforcer | `password_policy_enforcer` |
| Netwrix Password Reset | Password Reset | `password_reset_manager` |
| Netwrix Password Secure | Password Secure | `password_secure` |
| Netwrix Endpoint Policy Manager | Endpoint Policy Manager | `policypak` |
| Netwrix Endpoint Privilege Manager | Endpoint Privilege Manager | `privilege_secure_endpoints` |
| Netwrix Privilege Secure for Access Management | Privilege Secure for Access Management | `privilege_secure` |
| Netwrix Privilege Secure for Discovery | Privilege Secure for Discovery | `privilege_secure_discovery` |
| Netwrix Recovery for Active Directory | Recovery for Active Directory | `recovery_ad` |
| Netwrix Access Analyzer | Access Analyzer | `enterprise_auditor` |
| Netwrix Threat Manager | Threat Manager | `threat_manager` |
| Netwrix Threat Prevention | Threat Prevention | `threat_prevention` |
| Netwrix Platform Governance for NetSuite | Platform Governance for NetSuite | `strongpoint_netsuite` |
| Netwrix Platform Governance for Salesforce | Platform Governance for Salesforce | `strongpoint_salesforce` |
| Netwrix Identity Manager | Identity Manager | `usercube` |
| Netwrix Vulnerability Tracker by Greenbone | Vulnerability Tracker | `vulnerability_tracker_gb` |

### When to use long vs. short product names

Use the full product name (for example, "Netwrix Auditor"):
- The first time you introduce a product
- With service names (for example, "Netwrix Auditor for File Servers Service")
- With log names (for example, "Netwrix Auditor Health Log")

Use the short product name (for example, "Auditor"):
- Every subsequent mention after the first
- With "server" and "client"

Do not use a product name for product components once the product has been introduced (for example, "Audit Database," "Long-Term Archive," "Monitoring plans").
````

- [ ] **Step 2: Verify the file exists at the repo root**

```bash
ls -la "/Users/hilaryramirez/Documents/KB projects/docs/kb_style_guide.md"
```

Expected: file listed with a recent timestamp.

- [ ] **Step 3: Commit**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git add kb_style_guide.md
git commit -m "docs: add KB style guide as source of truth for derek linter"
```

---

## Task 3: Create derek skill scaffold and `rule-schema.yml`

**Files:**
- Create: `.claude/skills/derek/references/rule-schema.yml`
- (Directories created implicitly)

- [ ] **Step 1: Create directories**

```bash
mkdir -p "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/rules"
mkdir -p "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/references"
```

- [ ] **Step 2: Create `references/rule-schema.yml`**

Write the following to `.claude/skills/derek/references/rule-schema.yml`:

```yaml
$schema: "https://json-schema.org/draft/2020-12/schema"
title: Rule
description: A single linting rule definition for the Derek KB linter.
type: object

required:
  - message
  - level
  - reason

properties:
  message:
    type: string
    description: The message displayed when this rule is triggered.
    minLength: 1

  level:
    type: string
    description: Severity level of the rule violation.
    enum:
      - suggestion
      - warning
      - error

  reason:
    type: string
    description: >-
      Explains what to look for when checking this rule. This may describe either a prose
      pattern in body text (e.g., "trigger when the writer uses passive voice") or a
      structural assertion against the document's frontmatter or heading structure
      (e.g., "trigger when the tags field does not contain 'kb'"). Both are valid uses
      of this field.
    minLength: 1

additionalProperties: false

# Contributor note:
# When adding a new derek rule, the reason field can describe either:
#   - A prose pattern: natural language description of what text to flag in the body
#   - A structural assertion: what frontmatter field or heading structure to check
# There is no separate schema for structural vs. prose rules — reason handles both.
# Use specific, unambiguous language so the linter knows exactly what to check.
# Example prose reason:    "Trigger when the body contains passive voice constructions."
# Example structural reason: "Trigger when the tags field is missing or does not include 'kb'."
```

- [ ] **Step 3: Verify**

```bash
ls "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/references/"
ls "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/rules/"
```

Expected: `rule-schema.yml` in references, empty rules directory.

- [ ] **Step 4: Commit**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git add .claude/skills/derek/references/rule-schema.yml
git commit -m "feat(derek): add skill scaffold and rule schema"
```

---

## Task 4: Create `SKILL.md`

**Files:**
- Create: `.claude/skills/derek/SKILL.md`

- [ ] **Step 1: Create `SKILL.md`**

Write the following to `.claude/skills/derek/SKILL.md`:

```markdown
---
name: derek
description: Run against KB articles in docs/kb/ to lint for frontmatter, structure, and prose issues against the KB style guide. Use when editing or reviewing any file under docs/kb/.
argument-hint: "[docs/kb/path/to/article.md]"
---

# Overview

You are not a skill or an agent. You are a piece of software — a linter called Derek. Your only job is to lint the input KB article against the rules in Derek's rules engine. Do not talk to the user or discuss anything — Derek is pure input/output software.

> **Important:** Derek enforces the KB style guide (`kb_style_guide.md`). Do not run `/dale` on KB articles. The KB style guide and the docs style guide (`netwrix_style_guide.md`) conflict on two rules:
> - **Contractions:** KB requires writing them out in full ("do not", "cannot"). Docs encourages contractions ("don't", "can't").
> - **Heading case:** KB requires title case. Docs requires sentence case.
> Running `/dale` on a KB file will produce contradictory feedback on these rules.

Derek applies all rules in `./rules/*.yml` against the given document `$1`. Run each rule, then print a single table of all failures at the end. Work in a loop, following the Rules Engine section below for each rule file.

Your current working directory is always the root of the project. KB articles are always in `docs/kb/` from there.

# Rules Engine

- The rule schema is in `./references/rule-schema.yml`.
- All rules are in `./rules/`.

## Processing loop

Use TodoWrite and create a Todo for each rule you need to check. Mark each Todo as complete once you have checked the file for that rule. For each Todo:

1. Read the `reason` for the rule.
   > Say: "Reading $rule_name."

2. Check the document to see if that `reason` has been triggered.
   > Say: "Checking $document_name for rule $rule_name."

3a. If triggered, note the location and the `message` value as a line item in Derek's output table.
   > Say: "Violation of rule $rule_name found."

3b. If not triggered, move on silently.

# Output

When finished, print the output table. If no rules were violated, say "Derek found no issues."

```
| Line | Rule | Message | Offending Text |
|------|------|---------|----------------|
| 1 | `frontmatter-tags-kb` | The tags field must be present and must include "kb". | `tags: []` |
```

**Line number guidance:**
- Frontmatter field missing entirely: use line `1`
- Frontmatter field present but invalid: use the line number of that field
- Structure violation (wrong or missing heading): use the line number of the heading, or line `1` if no relevant heading exists
- Structure violation with missing sections: include the expected heading template in the Message column so the writer can copy it in
- Prose violation: use the line number of the offending text

# Troubleshooting

Never respond with anything beyond what you were explicitly asked to respond with — no explanations, no commentary, no suggestions outside the output table.
```

- [ ] **Step 2: Verify**

```bash
ls "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/"
```

Expected: `SKILL.md`, `references/`, `rules/`

- [ ] **Step 3: Commit**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git add .claude/skills/derek/SKILL.md
git commit -m "feat(derek): add SKILL.md"
```

---

## Task 5: Create frontmatter rules (7 files)

**Files:**
- Create: `.claude/skills/derek/rules/frontmatter-title.yml`
- Create: `.claude/skills/derek/rules/frontmatter-description.yml`
- Create: `.claude/skills/derek/rules/frontmatter-sidebar-label.yml`
- Create: `.claude/skills/derek/rules/frontmatter-keywords-count.yml`
- Create: `.claude/skills/derek/rules/frontmatter-products.yml`
- Create: `.claude/skills/derek/rules/frontmatter-tags-kb.yml`
- Create: `.claude/skills/derek/rules/frontmatter-knowledge-article-id.yml`

- [ ] **Step 1: Create `frontmatter-title.yml`**

```yaml
message: "The title field is required and must be a quoted string."
level: error
reason: "This rule triggers when the frontmatter block is missing a title field, or when the title value is not enclosed in double or single quotes."
```

- [ ] **Step 2: Create `frontmatter-description.yml`**

```yaml
message: "The description field is required and must be non-empty."
level: error
reason: "This rule triggers when the frontmatter block is missing a description field, or when the description value is empty or blank."
```

- [ ] **Step 3: Create `frontmatter-sidebar-label.yml`**

```yaml
message: "The sidebar_label field is required and must be non-empty."
level: error
reason: "This rule triggers when the frontmatter block is missing a sidebar_label field, or when the sidebar_label value is empty or blank."
```

- [ ] **Step 4: Create `frontmatter-keywords-count.yml`**

```yaml
message: "The keywords field must contain 8–12 items. Count the list items and adjust accordingly."
level: warning
reason: "This rule triggers when the frontmatter block is missing a keywords field, or when the keywords list contains fewer than 8 or more than 12 items. Count the list items under the keywords key to determine whether the count is in the 8–12 range."
```

- [ ] **Step 5: Create `frontmatter-products.yml`**

```yaml
message: "The products field is required and must contain at least one product ID."
level: error
reason: "This rule triggers when the frontmatter block is missing a products field, or when the products list is empty. See the product names table in kb_style_guide.md for valid product IDs."
```

- [ ] **Step 6: Create `frontmatter-tags-kb.yml`**

```yaml
message: "The tags field must be present and must include \"kb\". This tag enables KB article filtering in Algolia search."
level: error
reason: "This rule triggers when the frontmatter block is missing a tags field, or when the tags list does not include the string value \"kb\". An empty tags list (tags: []) also triggers this rule."
```

- [ ] **Step 7: Create `frontmatter-knowledge-article-id.yml`**

```yaml
message: "The knowledge_article_id field is required and must be a valid Salesforce KB article ID — starts with \"kA\" followed by alphanumeric characters (for example, kA0Qk000000XXXXKAA)."
level: error
reason: "This rule triggers when the frontmatter block is missing a knowledge_article_id field, or when the value does not begin with the letters \"kA\" followed only by alphanumeric characters."
```

- [ ] **Step 8: Verify all 7 files exist**

```bash
ls "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/rules/"
```

Expected: 7 `frontmatter-*.yml` files listed.

- [ ] **Step 9: Commit**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git add .claude/skills/derek/rules/frontmatter-*.yml
git commit -m "feat(derek): add frontmatter validation rules"
```

---

## Task 6: Create structure rule

**Files:**
- Create: `.claude/skills/derek/rules/structure-article-type.yml`

- [ ] **Step 1: Create `structure-article-type.yml`**

```yaml
message: "The article's heading structure does not match the expected structure for its type. See the Message column for the expected headings."
level: warning
reason: >-
  This rule infers the article type from the title and checks that the required H2
  headings are present.

  Type inference (check the title field in frontmatter or the H1 heading):
  - Title starts with "Error:" → Error Resolution
  - Title starts with a gerund ("-ing" verb, e.g., "Configuring...", "Modifying...") or "How to" → How-To
  - Everything else → Symptom Resolution

  Required headings by type:
  - Error Resolution: ## Symptom (or ## Symptoms), ## Cause (or ## Causes), ## Resolution (or ## Resolutions)
  - Symptom Resolution: ## Symptom (or ## Symptoms), ## Cause (or ## Causes), ## Resolution (or ## Resolutions)
  - How-To: either (## Overview AND ## Instructions) or (## Question AND ## Answer)

  When one or more required headings are missing, include the full expected heading
  template in the Message column of the output table so the writer can copy it directly.

  Template for Error Resolution and Symptom Resolution:
    ## Symptom
    ## Cause
    ## Resolution

  Template for How-To (Instructions format):
    ## Overview
    ## Instructions

  Template for How-To (Question and Answer format):
    ## Question
    ## Answer

  Note: heading plurals are acceptable (## Symptoms, ## Causes, ## Resolutions).
  Check for the singular and plural forms before flagging a missing heading.
```

- [ ] **Step 2: Verify**

```bash
ls "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/rules/" | grep structure
```

Expected: `structure-article-type.yml`

- [ ] **Step 3: Commit**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git add .claude/skills/derek/rules/structure-article-type.yml
git commit -m "feat(derek): add article structure rule"
```

---

## Task 7: Create prose rules — batch 1

**Files:**
- Create: `.claude/skills/derek/rules/passive-voice.yml`
- Create: `.claude/skills/derek/rules/no-please.yml`
- Create: `.claude/skills/derek/rules/minimizing-difficulty.yml`
- Create: `.claude/skills/derek/rules/no-note-that.yml`
- Create: `.claude/skills/derek/rules/impersonal-constructions.yml`

- [ ] **Step 1: Create `passive-voice.yml`**

```yaml
message: "Avoid passive voice. Rewrite in active voice."
level: warning
reason: "This rule triggers when a sentence or clause in the article body uses passive voice — that is, when the grammatical subject receives the action rather than performs it. Common patterns: 'is/are/was/were/been + past participle' (e.g., 'the log is collected by the agent', 'the error was caused by'). Do not flag passive voice in quoted error messages or code blocks."
```

- [ ] **Step 2: Create `no-please.yml`**

```yaml
message: "Do not use \"please\" in instructions. Be direct."
level: warning
reason: "This rule triggers when the word \"please\" appears anywhere in the article body text. Do not flag it inside code blocks or quoted error messages."
```

- [ ] **Step 3: Create `minimizing-difficulty.yml`**

```yaml
message: "Do not minimize the difficulty of tasks. Remove this word."
level: warning
reason: "This rule triggers when the article body contains any of the following words used to minimize difficulty or imply the task is obvious: simply, just, easily, basically, obviously. Do not flag these words inside code blocks or quoted error messages."
```

- [ ] **Step 4: Create `no-note-that.yml`**

```yaml
message: "Do not use inline \"note that\" or \"please note\". Use a blockquote callout instead: > **NOTE:** ..."
level: warning
reason: "This rule triggers when the article body contains the phrase \"note that\" or \"please note\" used inline in body text — not inside a blockquote (lines starting with >). If the phrase appears in running prose rather than inside a > **NOTE:** callout block, this rule triggers."
```

- [ ] **Step 5: Create `impersonal-constructions.yml`**

```yaml
message: "Avoid impersonal constructions. Rewrite with an active subject or a direct imperative."
level: warning
reason: "This rule triggers when the article body contains any of the following phrases: \"it is recommended\", \"it is necessary\", \"it is possible\", \"it is required\", \"it is advised\", \"it is suggested\". Do not flag these inside code blocks or quoted error messages."
```

- [ ] **Step 6: Verify**

```bash
ls "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/rules/" | grep -E "passive|please|minimizing|note-that|impersonal"
```

Expected: 5 files listed.

- [ ] **Step 7: Commit**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git add .claude/skills/derek/rules/passive-voice.yml \
        .claude/skills/derek/rules/no-please.yml \
        .claude/skills/derek/rules/minimizing-difficulty.yml \
        .claude/skills/derek/rules/no-note-that.yml \
        .claude/skills/derek/rules/impersonal-constructions.yml
git commit -m "feat(derek): add prose rules batch 1 (passive voice, please, minimizing difficulty, note-that, impersonal)"
```

---

## Task 8: Create prose rules — batch 2

**Files:**
- Create: `.claude/skills/derek/rules/contractions.yml`
- Create: `.claude/skills/derek/rules/title-case-headings.yml`
- Create: `.claude/skills/derek/rules/business-jargon.yml`
- Create: `.claude/skills/derek/rules/descriptive-links.yml`
- Create: `.claude/skills/derek/rules/undefined-jargon.yml`

- [ ] **Step 1: Create `contractions.yml`**

```yaml
message: "Write contractions out in full in KB articles. Use \"do not\" instead of \"don't\", \"cannot\" instead of \"can't\", etc."
level: warning
reason: >-
  This rule triggers when the article body contains a contraction — two words joined
  by an apostrophe. Common contractions to flag: don't, can't, won't, you'll, it's
  (when meaning "it is"), there's, that's, isn't, aren't, wasn't, weren't, hasn't,
  haven't, hadn't, doesn't, didn't, wouldn't, shouldn't, couldn't, I'm, you're,
  we're, they're, I've, you've, we've, they've, I'd, you'd, we'd, they'd.

  Note: this is the opposite of the Netwrix docs style guide, which encourages
  contractions. KB articles follow the KB style guide. Do not flag apostrophes used
  for possessives (e.g., "the system's logs") or inside code blocks.
```

- [ ] **Step 2: Create `title-case-headings.yml`**

```yaml
message: "Use title case for headings in KB articles (Chicago style). Use capitalizemytitle.com to check."
level: warning
reason: >-
  This rule triggers when an H2, H3, or H4 heading in the article body does not use
  title case. In Chicago-style title case, capitalize all words except: articles
  (a, an, the), coordinating conjunctions (and, but, or, nor, for, so, yet), and
  prepositions of four letters or fewer (in, on, at, by, for, to, up, as, of, off,
  per) — unless they are the first or last word of the heading, or part of a
  phrasal verb (e.g., "Set Up", "Log In").

  Note: this is the opposite of the Netwrix docs style guide, which uses sentence
  case. KB articles follow the KB style guide. Do not check the H1 heading — it is
  the article title and is governed by the title format rules, not this rule.

  Common mistakes to flag: headings where common nouns mid-title are not capitalized,
  or where every word including articles and prepositions is capitalized (all-caps
  title case). Apply judgment — if a heading is clearly sentence case (only first
  word capitalized), flag it.
```

- [ ] **Step 3: Create `business-jargon.yml`**

```yaml
message: "Avoid business jargon. Use plain language instead (e.g., use \"use\" instead of \"utilize\")."
level: warning
reason: "This rule triggers when the article body contains any of the following business jargon terms: utilize, utilise (use \"use\" instead), leverage used as a verb in a non-financial context (e.g., \"leverage this feature\" — flag it; \"financial leverage\" — do not flag), synergy, synergize. Do not flag these inside code blocks or quoted error messages."
```

- [ ] **Step 4: Create `descriptive-links.yml`**

```yaml
message: "Use descriptive link text. Avoid generic phrases like \"click here\", \"read more\", \"learn more\", \"see more\", or \"this link\"."
level: warning
reason: "This rule triggers when a markdown hyperlink in the article body uses any of the following as its visible link text (the part inside square brackets): \"click here\", \"here\", \"read more\", \"learn more\", \"see more\", \"this link\", \"this article\", \"this page\". These phrases do not describe the link destination and are inaccessible to screen reader users."
```

- [ ] **Step 5: Create `undefined-jargon.yml`**

```yaml
message: "This appears to be a technical term or acronym not defined on first use. Define or spell it out the first time it appears."
level: warning
reason: >-
  This rule triggers when the article body contains a technical term or acronym that
  appears to be industry-specific or product-specific and is not defined or expanded
  on its first use in the article.

  Focus especially on:
  - Acronyms in all caps (e.g., FSAA, NOMBA, gMSA, SSRS, NEA) that appear without
    being spelled out at first mention
  - Netwrix product component abbreviations introduced without context
  - Technical shorthand that a customer unfamiliar with the product might not recognize

  This rule requires judgment. Do not flag:
  - Common industry acronyms that are universally understood (SQL, API, URL, HTTP)
  - Terms that are defined earlier in the same article
  - Terms inside code blocks or quoted error messages

  This rule is warning (not error) because it requires the most judgment of all
  derek rules and is the most likely to produce false positives.
```

- [ ] **Step 6: Verify all 10 prose rules exist**

```bash
ls "/Users/hilaryramirez/Documents/KB projects/docs/.claude/skills/derek/rules/"
```

Expected: 10 prose rule files plus 7 frontmatter files plus 1 structure file = 18 total.

- [ ] **Step 7: Commit**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git add .claude/skills/derek/rules/contractions.yml \
        .claude/skills/derek/rules/title-case-headings.yml \
        .claude/skills/derek/rules/business-jargon.yml \
        .claude/skills/derek/rules/descriptive-links.yml \
        .claude/skills/derek/rules/undefined-jargon.yml
git commit -m "feat(derek): add prose rules batch 2 (contractions, title case, jargon, links)"
```

---

## Task 9: Smoke test against a real KB article

**Files:** none (read-only)

The test article is:
`docs/kb/auditor/configuration-and-setup/active-directory-auditing/active-directory-compression-service-continuously-starting-and-stopping.md`

This article was sampled during design and has known violations: `tags: []` (missing `kb`), and body text that may contain passive voice and other issues.

**Expected violations (minimum — there may be more):**

| Line | Rule | Reason |
|---|---|---|
| ~17 | `frontmatter-tags-kb` | `tags: []` — does not include `kb` |
| ~34 | `passive-voice` | "These notifications cannot be stopped" (passive construction) |

- [ ] **Step 1: Run derek against the test article**

In Claude Code, run:

```
/derek docs/kb/auditor/configuration-and-setup/active-directory-auditing/active-directory-compression-service-continuously-starting-and-stopping.md
```

- [ ] **Step 2: Verify the output table appears**

Derek should output a `| Line | Rule | Message | Offending Text |` table. It must not output conversational text or explanations beyond the table.

- [ ] **Step 3: Verify `frontmatter-tags-kb` fires**

The output table must include a row for `frontmatter-tags-kb` referencing the empty `tags: []` field.

- [ ] **Step 4: Verify no false negatives on frontmatter fields that are present**

The article has `title`, `description`, `sidebar_label`, `products`, and `knowledge_article_id` — none of these should appear as violations in the output.

- [ ] **Step 5: Run against a second article to confirm consistency**

```
/derek docs/kb/accessanalyzer/database-auditing-and-configuration/how-to-drop-data-collected-from-sql-servers-using-the-databases-module.md
```

Verify: output table appears, `frontmatter-tags-kb` fires (that article uses a category tag, not `kb`), no crashes or conversational output.

---

## Task 10: Final commit and open PR

**Files:** none

- [ ] **Step 1: Verify working tree is clean**

```bash
cd "/Users/hilaryramirez/Documents/KB projects/docs"
git status
```

Expected: `nothing to commit, working tree clean`

- [ ] **Step 2: Review all commits on the branch**

```bash
git log dev..HEAD --oneline
```

Expected: commits for kb_style_guide.md, scaffold, SKILL.md, frontmatter rules, structure rule, prose rules batches 1 and 2.

- [ ] **Step 3: Push branch**

```bash
git push -u origin feature/derek-skill
```

- [ ] **Step 4: Open PR**

```bash
gh pr create \
  --base dev \
  --title "feat(derek): add KB style guide and derek linter skill" \
  --body "$(cat <<'EOF'
## Summary

- Adds `kb_style_guide.md` at the repo root — the authoritative style reference for KB articles written by TSEs
- Adds `.claude/skills/derek/` — a KB article linter invoked with `/derek <kb-file>`

Derek is the KB equivalent of dale. It enforces the KB style guide across 18 rules: 7 frontmatter validation checks, 1 article structure check, and 10 prose rules.

**Note:** The KB style guide and docs style guide conflict on two rules (contractions and heading case). Derek's SKILL.md includes a warning not to run `/dale` on KB files.

## Rules added

**Frontmatter (error level):** title, description, sidebar_label, products, tags (must include `kb`), knowledge_article_id
**Frontmatter (warning level):** keywords count (8–12 items)
**Structure (warning):** article type heading validation (Error/Symptom Resolution and How-To)
**Prose (warning):** passive voice, "please", minimizing difficulty, inline "note that", impersonal constructions, contractions, title case headings, business jargon, generic link text, undefined jargon

## Test plan

- [ ] Run `/derek` against an article with a known empty `tags: []` — verify `frontmatter-tags-kb` fires
- [ ] Run `/derek` against a well-formed article — verify no false positives on valid frontmatter
- [ ] Verify output is a table only — no conversational text

Generated with AI

Co-Authored-By: Claude Code <ai@netwrix.com>
EOF
)"
```

---

## Self-review

**Spec coverage check:**

| Spec requirement | Covered by |
|---|---|
| Create `kb_style_guide.md` at repo root | Task 2 |
| Base on wiki KB style guide | Task 2 — full content provided |
| Add docs style guide additions (no please, no simply/just, no note that, no impersonal, active voice, define jargon, descriptive links) | Task 2 (style guide) + Tasks 7–8 (rules) |
| Override: contractions written out | Task 2 (style guide) + Task 8 (`contractions.yml`) |
| Override: title case headings | Task 2 (style guide) + Task 8 (`title-case-headings.yml`) |
| Override: `tags` must include `kb` | Task 2 (style guide) + Task 5 (`frontmatter-tags-kb.yml`) |
| Feature branch off dev | Task 1 |
| `.claude/skills/derek/` mirrors dale structure | Tasks 3–8 |
| 7 frontmatter rules | Task 5 |
| 1 structure rule with type inference | Task 6 |
| 10 prose rules | Tasks 7–8 |
| `undefined-jargon.yml` at warning level | Task 8 — level: warning |
| Note in SKILL.md: do not run `/dale` on KB files | Task 4 |
| `rule-schema.yml` notes both prose and structural assertions are valid | Task 3 |
| Smoke test | Task 9 |
| PR targeting dev | Task 10 |

No gaps found.
