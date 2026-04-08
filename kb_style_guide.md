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
  - Capitalize all words except: articles (a, an, the), coordinating conjunctions (and, but, or, nor, for, so, yet), and prepositions of four letters or fewer (in, on, at, by, for, to, up, as, of, off, per) — unless they open or close the heading.
  - Capitalize prepositions that are part of a phrasal verb (for example, "Set Up", "Log In").
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

The following example shows a Symptom Resolution article.

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

## AI Retrieval Optimization

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
