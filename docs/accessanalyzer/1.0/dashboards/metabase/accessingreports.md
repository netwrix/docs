---
title: "Accessing Embedded Reports"
description: "Using Metabase embedded reports in Access Analyzer"
sidebar_position: 10
---

# Accessing Embedded Reports

Access Analyzer embeds Metabase reports directly into the application interface. You can view, filter, and interact with reports without leaving the platform.

## Opening a Report

1. Navigate to the **Dashboards** section in the left navigation menu.
2. Select a dashboard from the list of available dashboards (for example, **Data Security Dashboard**).
3. The embedded Metabase report loads within the Access Analyzer interface.

## Authentication

Report access uses JWT-based single sign-on between the Access Analyzer Core API and Metabase. No separate Metabase credentials are required. Your Access Analyzer user permissions determine which dashboards and data you can view.

## Interacting with Reports

Once a report is loaded, you can:

- **Apply filters** — Use the filter controls at the top of the dashboard to narrow results by date range, data source, compliance framework, or data type.
- **Drill down** — Click on chart elements or table rows to view detailed breakdowns of the underlying data.
- **Adjust time ranges** — Modify the reporting period to compare findings across different scan windows.

:::note
Dashboards display data from the most recent completed scans. If you do not see expected results, verify that a [sensitive data scan](/docs/accessanalyzer/1_0/sensitivedatadiscovery/runningscan) has been run against the target data sources.
:::

## Next Steps

- [Save reports](/docs/accessanalyzer/1_0/dashboards/metabase/savedreports) for repeated access
- [Export report data](/docs/accessanalyzer/1_0/dashboards/metabase/exportingdata) for external use
