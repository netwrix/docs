---
title: "Running and Stopping Scans"
description: "Executing scans and graceful stop"
sidebar_position: 40
---

# Running and Stopping Scans

Administrators can manually trigger scan execution and control running scans through the web interface. These controls are available from the scan detail view and the scan list.

## Running a Scan Manually

To start a scan immediately:

1. Navigate to **Scans** in the sidebar.
2. Locate the scan and click **Run** (or open the detail view and click **Run Now**).
3. The scan status changes to **Running** and progress is displayed in real time.

## Scan Controls

While a scan is running, the following controls are available:

| Action | Description |
|---|---|
| **Pause** | Temporarily suspends scan execution. The scan can be resumed from where it stopped. |
| **Resume** | Continues a paused scan from its last checkpoint. |
| **Stop** | Initiates a graceful stop. The scan finishes processing the current item and then terminates. |

## Scan Status Values

| Status | Meaning |
|---|---|
| **Pending** | The scan is queued and waiting to start |
| **Running** | The scan is actively processing |
| **Paused** | The scan is suspended and can be resumed |
| **Completing** | The scan is finishing its current work unit after a stop request |
| **Completed** | The scan finished successfully |
| **Failed** | The scan terminated due to an error |

:::warning
Stopping a scan does not roll back any data already collected. Partial results are retained and visible in the scan history.
:::
