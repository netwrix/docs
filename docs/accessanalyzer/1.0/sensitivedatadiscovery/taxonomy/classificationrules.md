---
title: "Classification Rules"
description: "Defining rules that combine patterns and taxonomy"
sidebar_position: 20
---

# Classification Rules

Classification rules connect detection patterns to taxonomy groups, determining how identified sensitive data is categorized and which compliance frameworks apply to each finding. A rule specifies the conditions under which a pattern match is classified under a particular taxonomy.

## Rule Components

Each classification rule consists of:

| Component | Description |
| --- | --- |
| **Name** | A descriptive label for the rule |
| **Pattern or Pattern Group** | The detection patterns that trigger the rule |
| **Taxonomy Group** | The compliance framework or category the match maps to |
| **Priority** | Determines precedence when multiple rules match the same data |

## Creating a Classification Rule

1. Navigate to **Sensitive Data Discovery** > **Taxonomy**.
2. Select the **Classification Rules** tab.
3. Click **Add Rule**.
4. Enter a **Name** for the rule.
5. Select the **Pattern** or **Pattern Group** that triggers this classification.
6. Choose the **Taxonomy Group** the rule maps to (for example, HIPAA, PCI DSS, or a custom group).
7. Set the **Priority** level to control rule precedence.
8. Click **Save**.

:::note
When a single file matches multiple classification rules, all applicable taxonomy groups are reported. Priority determines which classification is displayed first in summary views.
:::

## Next Steps

- [Review built-in versus custom classification](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/autovscustom) to decide which approach fits your needs
- [Run a scan](/docs/accessanalyzer/1_0/sensitivedatadiscovery/runningscan) to apply your classification rules against live data
