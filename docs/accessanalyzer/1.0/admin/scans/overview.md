---
title: "Scan Management"
description: "Creating and managing scans"
sidebar_position: 10
---

# Scan Management

Scans are the core operational unit in Access Analyzer. A scan defines what sources to analyze, what type of analysis to perform, and when to execute. Administrators create and manage scans from the **Scans** section.

## Creating Scans

Scans are typically created as part of the **Connect Source** wizard (Step 3), where you configure scan types, options, and scheduling alongside the source group. The wizard creates all scans atomically with the source group and sources.

Scans can also be managed independently after creation:

1. Navigate to **Scans** in the sidebar.
2. Select a scan to view or edit its configuration.
3. Modify the schedule, scan options, or other settings.
4. Click **Save**.

## Scan List

The scan list displays all configured scans with their name, type, target sources, schedule, last execution status, and next scheduled run time. Use the data table controls to filter and sort.

## Related Topics

- [Scan Types](/docs/accessanalyzer/1_0/admin/scans/scantypes)
- [Scheduling Scans](/docs/accessanalyzer/1_0/admin/scans/scheduling)
- [Running and Stopping Scans](/docs/accessanalyzer/1_0/admin/scans/runningstop)
- [Scan Execution History](/docs/accessanalyzer/1_0/admin/scans/executionhistory)
