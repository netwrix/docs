---
title: "Scan Execution History"
description: "Viewing scan status and execution history"
sidebar_position: 50
---

# Scan Execution History

Every scan execution is recorded with detailed status information, timing, and result summaries. The execution history provides a complete audit trail of all scan activity.

## Viewing Execution History

To view a scan's history:

1. Navigate to **Scans** and click the target scan.
2. Select the **History** tab in the detail view.

The history table displays each execution with the following columns:

| Column | Description |
|---|---|
| **Run ID** | Unique identifier for the execution |
| **Status** | Final status (Completed, Failed, Stopped) |
| **Started At** | Timestamp when the execution began |
| **Completed At** | Timestamp when the execution ended |
| **Duration** | Total elapsed time |
| **Items Processed** | Number of resources scanned |
| **Findings** | Count of access entries or sensitive data matches found |

## Execution Details

Click a specific execution row to view detailed results including:

- Per-source breakdown of items scanned and findings
- Error messages for failed executions
- Resource utilization metrics

## Retention

Execution history records are retained indefinitely. To manage storage, administrators can export and archive older records through the [Audit Logs](/docs/accessanalyzer/1_0/admin/auditlogs/overview) export feature.

:::note
Execution history for deleted scans is also removed. Export any needed data before deleting a scan.
:::
