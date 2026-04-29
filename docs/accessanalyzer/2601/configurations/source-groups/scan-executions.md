---
title: "Scan Executions"
description: "Understanding scan execution status and history in Access Analyzer"
sidebar_position: 3
---

# Scan Executions

A scan execution is a single run of a scan at a specific point in time. Each time Access Analyzer runs a scan — whether triggered by a schedule or manually — it creates a new scan execution record. Execution history is retained per source so you can review past run outcomes.

Scan executions are distinct from scan configurations. The [scan configuration](scans.md) defines what to collect and when. The scan execution records what happened during a specific run.

## Execution status values

| Status | Meaning |
| --- | --- |
| **Pending** | The execution is queued and waiting to start. This occurs when the Max Concurrent Scans limit is reached and additional executions are waiting their turn. |
| **Running** | The scanner is actively collecting data from the source. |
| **Pausing** | A pause was requested. The execution is finishing its current operation before pausing. |
| **Paused** | The execution has paused mid-run and can be resumed. |
| **Resuming** | A resume was requested. The execution is restarting from where it paused. |
| **Stopping** | A stop was requested. The execution is finishing its current operation before terminating. |
| **Post-processing** | Data collection is complete. Results are being processed and written to the database. |
| **Completed** | The execution finished successfully. |
| **Stopped** | The execution was manually stopped before completing. Partial results may have been collected. |
| **Cancelled** | The execution was cancelled before it started or early in the run. No results were collected. |
| **Failed** | The execution encountered an error and did not complete. Check the execution log for details. |

## Source group scan status

The source groups list displays an aggregate scan status for each group. This is computed from the most recent scan execution across all sources in the group, using the following priority order:

1. **Paused** — One or more sources has a paused execution, and none are running.
2. **Running** — One or more sources has an execution in a pending, running, pausing, resuming, stopping, or post-processing state.
3. **Failed** — One or more sources has a failed execution, and none are running or paused.
4. **Completed** — All sources have completed their most recent execution successfully.
5. **Completed with errors** — One or more sources has a stopped or cancelled execution, and none meet the criteria above.
6. **Not run yet** — No scan executions exist for any source in the group.

This means a group shows **Running** even if only one source is actively scanning, and it shows **Failed** only when no scans are still in progress.

## Blocked operations during active executions

Several operations are blocked while a source has an execution in an active state (pending, running, pausing, paused, resuming, stopping, or post-processing):

- **Deleting a source group** — Stop all active scans before deleting the group.
- **Removing a source from a group** — Stop the source's active scan before removing it.

Wait for the execution to reach a terminal state (completed, stopped, cancelled, or failed), or use the **Stop** action to terminate it, before proceeding with the blocked operation.
