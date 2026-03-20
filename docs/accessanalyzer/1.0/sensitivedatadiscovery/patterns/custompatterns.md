---
title: "Creating Custom Regex Patterns"
description: "Define custom regex patterns for sensitive data detection"
sidebar_position: 20
---

# Creating Custom Regex Patterns

Custom regex patterns allow you to extend sensitive data detection beyond the built-in library. Define patterns that match organization-specific data formats such as internal account numbers, proprietary identifiers, or region-specific document formats.

## Creating a Custom Pattern

To create a custom regex pattern:

1. Navigate to the **Sensitive Data Discovery** section in Access Analyzer.
2. Select **Patterns** and click **Add Pattern**.
3. Provide a **Name** and optional **Description** for the pattern.
4. Enter the **Regex Expression** that defines the match criteria.
5. Select the appropriate **Category** (PII, Credentials, PHI, or Financial Records).
6. Click **Save** to register the pattern.

:::note
Custom patterns can also be added programmatically via the Access Analyzer API. Refer to the API documentation for endpoint details and payload format.
:::

## Regex Best Practices

- **Be specific** — Overly broad patterns increase false positives. Use anchors, character classes, and quantifiers to narrow matches.
- **Test before deploying** — Validate your regex against sample data to confirm it captures the intended formats without excessive noise.
- **Use named groups** — Where supported, named capture groups improve readability and facilitate downstream processing.

## Example

A pattern to detect a custom internal employee ID formatted as `EMP-` followed by six digits:

```
EMP-\d{6}
```

:::warning
Poorly constructed regex patterns may degrade scan performance. Avoid unbounded quantifiers and excessive backtracking in pattern definitions.
:::

## Next Steps

- [Organize patterns into groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/patterngroups) for easier management
- [Map patterns to compliance frameworks](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/taxonomygroups) using taxonomy groups
