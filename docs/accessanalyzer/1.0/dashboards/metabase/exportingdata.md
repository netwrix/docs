---
title: "Exporting Report Data"
description: "Exporting report data for external use"
sidebar_position: 30
---

# Exporting Report Data

Access Analyzer allows you to export dashboard data from embedded Metabase reports for use in external tools, compliance documentation, or offline analysis.

## Exporting from a Dashboard

To export data from a dashboard or saved report:

1. Open the desired dashboard or [saved report](/docs/accessanalyzer/1_0/dashboards/metabase/savedreports).
2. Apply any filters to scope the data to your requirements.
3. Click the **Export** button in the dashboard toolbar.
4. Select the export format:
   - **CSV** — Comma-separated values for use in spreadsheets and data processing tools
   - **JSON** — Structured data format for programmatic consumption
   - **PDF** — Formatted report suitable for distribution and compliance documentation
5. Click **Download** to save the exported file.

## Export Scope

The exported data reflects the current dashboard view, including all applied filters. Only the data visible in the current report configuration is included in the export.

| Export Format | Best For |
| --- | --- |
| CSV | Importing into Excel, Google Sheets, or data analysis tools |
| JSON | Integration with APIs, scripts, or automated reporting pipelines |
| PDF | Sharing with stakeholders, auditors, or compliance teams |

:::warning
Exported reports may contain sensitive data findings. Handle exported files according to your organization's data handling and classification policies.
:::

## Next Steps

- [Configure saved reports](/docs/accessanalyzer/1_0/dashboards/metabase/savedreports) to streamline recurring exports
- [Review sensitive data scan results](/docs/accessanalyzer/1_0/sensitivedatadiscovery/reviewingresults/matchcounts) for detailed match-level data
