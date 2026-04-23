---
description: >-
  [One sentence. Keyword-rich, SEO-friendly summary of what problem this
  article solves or what task it covers. Example: "When the Access Analyzer
  scan job fails with error X, the host is unreachable. This article describes
  the cause and provides steps to resolve the connectivity issue."]
keywords:
  - access analyzer
  - "[keyword 2 — use exact phrasing a customer would search for]"
  - "[keyword 3 — include error codes or unique identifiers when relevant]"
  - "[keyword 4]"
  - "[keyword 5]"
  - "[keyword 6]"
  - "[keyword 7]"
  - "[keyword 8 — aim for 8–12 total keywords]"
products:
  - access-analyzer
sidebar_label: "KB Article Template"
tags: []
title: "KB Article Template and Style Guide"
knowledge_article_id: kA0Qk000000XXXXKAA
---

# KB Article Template and Style Guide

This file is a placeholder and authoring guide for Access Analyzer v2601 knowledge base articles. Copy this file, rename it, and replace the placeholder content with the actual article. Remove this introduction paragraph before publishing.

---

<!--
TITLE RULES — pick the format that matches your article type:

  How-To:              [Action Gerund] [Specific Task]
                       Example: Configuring LDAP Authentication for Access Analyzer

  Error Resolution:    Error: [Unique Error Code or Message]
                       Example: Error: Host Unreachable During Scan Initialization

  Symptom Resolution:  [Feature or Component] [Symptom] [Optional Context]
                       Example: Scan Jobs Failing to Start After Upgrade

Rules:
  - Do NOT include the product name in the title — it is already in the metadata.
  - Use title case. See https://capitalizemytitle.com/ (Chicago style).
  - Avoid question marks, vague terms like "issue" or "problem", and punctuation.
-->

<!--
CHOOSE ONE ARTICLE STRUCTURE and delete the others before publishing.
===================================================================
STRUCTURE A — Error Resolution:    Symptom / Cause / Resolution
STRUCTURE B — Symptom Resolution:  Symptom / Cause / Resolution
STRUCTURE C — How-To (steps):      Overview / Instructions
STRUCTURE D — How-To (Q&A):        Question / Answer
===================================================================
-->

<!-- ═══════════════════════════════════════════════════════════
     STRUCTURE A / B — Error or Symptom Resolution
     Best for: specific error messages or unexpected behavior
     ═══════════════════════════════════════════════════════════ -->

## Symptom

<!--
Describe what the user observes. Use second person ("you"), active voice.
Keep to 1–3 sentences. If the symptom is an error message, use a code block.
-->

When running [specific job or action] in Netwrix Access Analyzer, the following error appears:

```text
[Paste the exact error message here, as it appears in the UI or log.]
```

[Optional: one additional sentence describing secondary symptoms, e.g., "The job fails immediately and no scan results are produced."]

## Cause

<!--
Explain the root cause in 1–3 plain-language sentences.
Avoid vague phrasing like "a known issue" unless that is the documented explanation.
-->

This error occurs when [plain-language explanation of the root cause].

## Resolution

<!--
Numbered steps, one action per step.
Bold all UI elements: buttons, tabs, menu items, fields, navigation paths.
Use backticks for command-line input.
If multiple resolutions exist, use ### subheadings for each.
-->

1. Navigate to **[Menu] > [Submenu]** in the Netwrix Access Analyzer console.
2. Select **[Option]** and click **[Button]**.
3. In the **[Field Name]** field, enter [description of required value].
4. Click **Save** to apply the changes.
5. Re-run the [job or scan] to confirm the issue is resolved.

> **NOTE:** [Use for important context that does not fit inline. Use **IMPORTANT:** instead for warnings about irreversible actions or data loss.]

## Related Links

- [Netwrix Access Analyzer Documentation — System Requirements](/docs/accessanalyzer/2601/install/system/requirements)
- [Link text describing destination — add a line for each relevant resource](#)

---

<!-- ═══════════════════════════════════════════════════════════
     STRUCTURE C — How-To (Instructions Format)
     Best for: complex procedures requiring context and steps
     ═══════════════════════════════════════════════════════════

## Overview

[1–2 sentences explaining what the reader will accomplish and why they would need to do this.]

## Instructions

1. Step one.
2. Step two.
3. Step three.

## Related Links

- [Link text](URL)

-->

<!-- ═══════════════════════════════════════════════════════════
     STRUCTURE D — How-To (Q&A Format)
     Best for: simple procedures with a single clear answer
     ═══════════════════════════════════════════════════════════

## Question

[State the question as a customer would ask it.]

## Answer

[Direct, complete answer. Use numbered steps if there are multiple actions.]

## Related Links

- [Link text](URL)

-->

---

## Style Quick Reference

Remove this section before publishing.

| Element | Format | Example |
|---|---|---|
| UI button / menu / tab / field | **Bold** | Click **Save** |
| Command-line input | `` `backtick` `` | Run `npm start` |
| Error message (full block) | ` ```text ``` ` fenced block | See Symptom section above |
| File path (inline) | `` `backtick` `` | Open `` `C:\Program Files\Netwrix` `` |
| Important callout | `> **IMPORTANT:** ...` | Warns of irreversible actions |
| Note callout | `> **NOTE:** ...` | Non-critical supplemental info |
| External link | `[Name ⸱ Company 🡥](URL)` | [SMB Security ⸱ Microsoft 🡥](https://example.com) |
| Image alt text | [Action shown] + [key UI elements] | "Dialog box for scan settings with Schedule tab active" |
| Product — first mention | Full name | Netwrix Access Analyzer |
| Product — subsequent mentions | Short name | Access Analyzer |

### Title Rules by Article Type

| Type | Format | Good Example | Bad Example |
|---|---|---|---|
| How-To | [Action Gerund] [Specific Task] | Configuring LDAP Authentication | How to Configure LDAP? |
| Error Resolution | Error: [Unique Code or Message] | Error: Host Unreachable 0x80070005 | Error: Something Went Wrong |
| Symptom Resolution | [Component] [Symptom] [Context] | Scan Jobs Failing After Upgrade | Scans Not Working |

### Voice and Tone

- Use "you" (second person) when addressing the reader.
- Write in active voice: "Click **Save**" not "**Save** should be clicked."
- Avoid: "simply," "just," "easy," "obviously," "leverage," "utilize."
- Write out contractions: "do not" not "don't," "cannot" not "can't."
- No exclamation marks, including in callouts.
- One idea per paragraph; paragraphs to 3–4 sentences maximum.
