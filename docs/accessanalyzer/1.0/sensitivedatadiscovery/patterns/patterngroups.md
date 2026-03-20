---
title: "Pattern Groups"
description: "Organizing patterns into logical groups"
sidebar_position: 30
---

# Pattern Groups

Pattern groups organize individual detection patterns into logical collections. Grouping patterns by category or purpose simplifies scan configuration and makes it easier to apply consistent detection policies across multiple scans.

## How Pattern Groups Work

A pattern group is a named container that holds one or more detection patterns (built-in or custom). When you configure a sensitive data scan, you select pattern groups rather than individual patterns, which reduces configuration complexity.

Common grouping strategies include:

- **By data type** — Group all PII patterns together, all credential patterns together, and so on.
- **By compliance framework** — Group patterns that satisfy a specific regulation such as HIPAA or PCI DSS.
- **By business unit** — Group patterns relevant to a particular department or data domain.

## Managing Pattern Groups

To create or edit a pattern group:

1. Navigate to **Sensitive Data Discovery** > **Patterns**.
2. Select the **Pattern Groups** tab.
3. Click **Add Group** to create a new group, or select an existing group to edit it.
4. Provide a **Name** and optional **Description**.
5. Add or remove patterns from the group using the pattern selector.
6. Click **Save**.

:::note
A single pattern can belong to multiple groups. Changes to a pattern are reflected in all groups that reference it.
:::

## Next Steps

- [Configure taxonomy groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/taxonomygroups) to map pattern groups to compliance frameworks
- [Run a sensitive data scan](/docs/accessanalyzer/1_0/sensitivedatadiscovery/runningscan) using your configured pattern groups
