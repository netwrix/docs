---
title: "Match Counts and Locations"
description: "Viewing match counts per file and location details"
sidebar_position: 10
---

# Match Counts and Locations

After a sensitive data scan completes, the results view displays match counts that summarize how many sensitive data instances were detected, organized by file, pattern, and compliance framework.

## Understanding Match Counts

Match counts are reported at three levels:

| Level | Description |
| --- | --- |
| **Per File** | Total number of sensitive data matches found in each scanned file |
| **Per Pattern** | Number of matches attributed to each detection pattern (for example, SSN, credit card number) |
| **Per Framework** | Aggregate match count grouped by compliance framework (GDPR, HIPAA, PCI DSS, and others) |

## Viewing Match Details

To review match counts for a completed scan:

1. Navigate to the **Scans** section and select the completed scan.
2. Open the **Results** tab to view the summary.
3. Use the **Files** view to see match counts per file, sorted by the number of matches in descending order.
4. Click on a specific file to view the individual pattern matches detected within it.
5. Use the **Patterns** view to see total matches per detection pattern across all scanned files.

:::note
Match counts reflect the number of pattern matches, not the number of unique sensitive data values. A single file containing the same SSN in multiple locations is counted as multiple matches.
:::

## Filtering Results

Use the filter controls to narrow results by:

- **Data type** — PII, Credentials, PHI, or Financial Records
- **Pattern group** — Filter by a specific pattern group applied during the scan
- **Severity** — Focus on high-priority findings

## Next Steps

- [View classification breakdowns](/docs/accessanalyzer/1_0/sensitivedatadiscovery/reviewingresults/classificationbreakdown) to analyze results by compliance framework
- [Access dashboards](/docs/accessanalyzer/1_0/dashboards/overview) for a visual summary of findings
