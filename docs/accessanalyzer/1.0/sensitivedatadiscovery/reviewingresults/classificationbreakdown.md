---
title: "Classification Breakdown"
description: "Analyzing results by classification category"
sidebar_position: 20
---

# Classification Breakdown

The classification breakdown view organizes sensitive data scan results by taxonomy group and compliance framework. This view helps you assess regulatory exposure and prioritize remediation efforts based on the frameworks most relevant to your organization.

## Viewing the Breakdown

To access the classification breakdown:

1. Navigate to the **Scans** section and select a completed scan.
2. Open the **Results** tab.
3. Select the **Classification Breakdown** view.

The breakdown displays a summary of matches grouped by each applicable compliance framework.

## Framework Summary

| Column | Description |
| --- | --- |
| **Framework** | The compliance standard (GDPR, CCPA, HIPAA, PCI DSS, GLBA, CMMC) |
| **Total Matches** | Aggregate count of sensitive data matches mapped to this framework |
| **Files Affected** | Number of distinct files containing matches for this framework |
| **Top Patterns** | The most frequently triggered detection patterns within the framework |

## Interpreting Results

- A file may appear under multiple frameworks if its contents match classification rules mapped to different taxonomy groups.
- The **Top Patterns** column highlights which data types contribute the most matches, helping you identify the most common exposure areas.
- Use the breakdown to generate framework-specific remediation plans by focusing on the frameworks with the highest match counts.

:::note
Classification breakdown results depend on the [taxonomy groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/taxonomygroups) and [classification rules](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/classificationrules) configured at the time of the scan. Update your taxonomy mappings and re-scan to reflect new compliance requirements.
:::

## Next Steps

- [Export findings](/docs/accessanalyzer/1_0/dashboards/metabase/exportingdata) for compliance reporting
- [View dashboards](/docs/accessanalyzer/1_0/dashboards/overview) for a high-level risk summary
