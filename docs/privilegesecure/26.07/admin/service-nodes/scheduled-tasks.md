---
title: "Scheduled tasks"
description: "See which recurring system jobs Privilege Secure runs, when each last ran and runs next, and whether each succeeded."
sidebar_position: 20
---

# Scheduled tasks

The **Scheduled Tasks** page lists the recurring jobs that Privilege Secure runs, such as host scans, password rotation and verification, and Active Directory sync. Use it to check that a job ran and whether it succeeded.

To open it, select **Configuration** > **Scheduled Tasks**.

{/* TODO screenshot: Scheduled Tasks page with the task list and the result count */}

## Read the list

Version 26.07.3 fixes task schedules that shifted by an hour after a daylight saving time change.

{/* TODO verify: whether existing tasks correct themselves after upgrade or need their schedule saved again */}

The toolbar has these controls:

| Control | Description |
|---|---|
| **Search** | Filters the list by task name. |
| **View Logs** | Shows the log for the selected task. The button is disabled until you select a row. |
| **Refresh** | Reloads the list. |

The toolbar shows the number of tasks. You can sort the columns.

| Column | Description |
|---|---|
| **TASK NAME** | The name of the task. |
| **LAST RUN TIME** | When the task last ran. |
| **NEXT RUN TIME** | When the task runs next. |
| **RECURRENCE** | How often the task repeats. |
| **LAST STATUS** | The result of the last run. |
| **STATUS** | The state of the task. |

**LAST STATUS** shows Complete, Completed with errors, Failed, or Unknown. **STATUS** shows Scheduled, Failed, or Unknown.

{/* TODO verify: the full list of LAST STATUS and STATUS values. The lab showed only the values listed here */}

## Task names

Task names follow patterns such as these:

| Pattern | Task |
|---|---|
| `Scan host <host-name>` | Scans a host. |
| `Rotate password for <account>` | Rotates the password of an account. |
| `Verify password for <account>` | Checks that the stored password still works. |
| `Sync AD <domain>` | Syncs a domain with Active Directory. |

For example, `Rotate password for <account>` can repeat every 24 hours or every hour, depending on the schedule that applies to the account.

## Change when a task runs

The page is read-only. A task takes its schedule from the item that created it. To change when a task runs, change the schedule on that item, for example on the domain, the platform, or the protection policy. Schedule policies define the recurrence for several of them.

{/* TODO verify: the list of settings that control each task type, and add a link to the Schedule Policies page when it exists */}

## Troubleshoot a failed task

1. Select the task.
1. Click **View Logs**.
1. Read the log lines for the last run.

The log shows the steps the task completed. If the log has no error text, check the related page for the cause, for example the **Sync Errors** tab of a domain for an Active Directory sync.

To check whether the services that run tasks are healthy, see [Monitor service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md).
