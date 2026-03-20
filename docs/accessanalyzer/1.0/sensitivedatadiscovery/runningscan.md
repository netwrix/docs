---
title: "Running a Sensitive Data Scan"
description: "Executing a sensitive data scan and monitoring progress"
sidebar_position: 40
---

# Running a Sensitive Data Scan

Sensitive data scans analyze files across your connected data sources to detect content matching your configured detection patterns. Scans are configured and launched through the scan creation wizard.

## Prerequisites

Before running a sensitive data scan, ensure the following are in place:

- At least one data source is connected and accessible
- Detection [patterns](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/builtinpatterns) or [pattern groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/patterns/patterngroups) are configured
- [Taxonomy groups](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/taxonomygroups) and [classification rules](/docs/accessanalyzer/1_0/sensitivedatadiscovery/taxonomy/classificationrules) are defined for compliance mapping

## Launching a Scan

1. Navigate to the **Scans** section in Access Analyzer.
2. Click **Create Scan** to open the scan creation wizard.
3. Select the target **Data Source(s)** to scan.
4. Under **Scan Options**, enable **Sensitive Data Discovery**.
5. Choose the **Pattern Groups** to apply during the scan.
6. Review the scan configuration summary and click **Start Scan**.

## Monitoring Progress

Once a scan is running, you can monitor its status from the **Scans** page. The scan detail view displays:

- **Progress** — Percentage of files processed
- **Files Scanned** — Count of files analyzed so far
- **Matches Found** — Running total of sensitive data matches

:::warning
Sensitive data scans are resource-intensive. The `sensitive-data-scan` and `data-classification` serverless functions handle detection workloads. Schedule large scans during off-peak hours to minimize impact on system performance.
:::

## Next Steps

- [Review match counts](/docs/accessanalyzer/1_0/sensitivedatadiscovery/reviewingresults/matchcounts) after the scan completes
- [Analyze classification breakdowns](/docs/accessanalyzer/1_0/sensitivedatadiscovery/reviewingresults/classificationbreakdown) by compliance framework
