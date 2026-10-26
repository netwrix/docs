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

**LAST STATUS** and **STATUS** use the same set of labels: Scheduled, Pending, Queued, Running, Complete, Completed with errors, Failed, Cancelled, and Unknown. A task in any other internal state, such as paused, shows as Unknown.

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

The page is read-only. A task takes its schedule from the item that created it. To change when a task runs, change the schedule on that item:

| Task | Where to change the schedule |
|---|---|
| `Scan host <host-name>` | **Scan Schedule** on the platform of the resource. |
| `Rotate password for <account>` | **Scheduled Change Policy** on the platform, or a credential policy override. |
| `Verify password for <account>` | **Verification Schedule** on the platform, or a credential policy override. |
| `Sync AD <domain>` | The schedule row on the details page of the domain. |

The platform schedules are schedule policies. See [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md), [Schedule policies](/docs/privilegesecure/26.07/resources/platforms/schedule-policies.md), [Credential policy overrides](/docs/privilegesecure/26.07/admin/credentials/policy-overrides.md), and [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md#schedule-synchronization). Protection policies run on the **Protection Policy Schedule** of the platform.

## Check task times after a daylight saving time change

Version 26.07.3 fixes task schedules that shifted by an hour after a daylight saving time change.

If a task still starts an hour off after you upgrade, open the schedule that drives the task and save it again. Saving recalculates the next start time.

## Troubleshoot a failed task

1. Select the task.
1. Click **View Logs**.
1. Read the log lines for the last run.

The log shows the steps the task completed. If the log has no error text, check the related page for the cause, for example the **Sync Errors** tab of a domain for an Active Directory sync.

To check whether the services that run tasks are healthy, see [Monitor service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md).
