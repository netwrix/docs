---
title: "Running and Monitoring a Scan"
description: "Execute a scan and monitor its progress"
sidebar_position: 40
---

# Running and Monitoring a Scan

Once a scan is created, you can run it immediately or let it execute on its configured schedule.

## Running a Scan

There are two ways to start a scan:

- **From the scan creation wizard** — Select **Create & Run Immediately** in the final step
- **From the Scans list** — Navigate to **Configuration** > **Scans**, click the menu button on the scan row, and select **Run**

## Monitoring Scan Progress

Navigate to **Configuration** > **Scan Executions** to view all scan runs.

Each execution displays:

| Field | Description |
| --- | --- |
| **Scan Name** | The name of the scan |
| **Scan Type** | Access or Sensitive Data |
| **Source** | The data source being scanned |
| **Status** | Running, Completed, Failed, or Paused |
| **Start Time** | When the scan execution began |
| **Duration** | Elapsed time since the scan started |

You can filter executions by scan type, source, status, date range, and duration.

## Scan Execution Actions

While a scan is running, the following actions are available from the execution row menu:

| Action | Description |
| --- | --- |
| **Stop** | Cancel the running scan |
| **Pause** | Pause the scan (CIFS/SMB sources only) |
| **Resume** | Resume a paused scan (CIFS/SMB sources only) |

## Scan Statuses

| Status | Meaning |
| --- | --- |
| **Running** | Scan is actively processing |
| **Completed** | Scan finished successfully |
| **Failed** | Scan encountered an error — check the execution logs |
| **Paused** | Scan has been paused and can be resumed |

## Next Step

[Viewing Results](/docs/accessanalyzer/1_0/gettingstarted/firstscan/viewingresults) — Review the findings from your completed scan.
