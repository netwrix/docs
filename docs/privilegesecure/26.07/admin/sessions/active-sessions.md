---
title: "Manage active and scheduled sessions"
description: "End, lock, unlock, and inspect sessions in progress, and find sessions that are scheduled to start later, from the Active and Scheduled dashboard tiles."
sidebar_position: 20
---

# Manage active and scheduled sessions

The **Active** tile lists sessions that are provisioning, ready, or in progress. The **Scheduled** tile lists sessions set to start later. From these tables you can create, end, lock, unlock, and inspect sessions.

To open them, click **Dashboard** in the left navigation, then click the **Active** or **Scheduled** tile. For an overview of all tiles, see [Dashboard](/docs/privilegesecure/26.07/admin/sessions/dashboard.md).

## Active tab

### Tabs and filters

The **Active** tile has two tabs:

- **All Active** (the default) shows sessions for all users.
- **Mine** shows sessions for the signed-in user.

The filters are **Search**, **Resource name**, **User name**, and **Recording data**. The **Mine** tab has no **User name** filter. The **Recording data** filter works on keystroke data and, when the Remote Desktop Monitor is installed on the target hosts, on Windows event activity from RDP sessions. See [Install the Remote Desktop Monitor on target hosts](/docs/privilegesecure/26.07/install/rdp-monitor.md).

### Toolbar

| Button | What it does |
|---|---|
| **Create Session** | Opens the **Activity Request** dialog. See [Request a session](/docs/privilegesecure/26.07/user-guide/request-session.md). |
| **End Session** | Cancels the selected sessions. You need the Terminate Session permission. |
| **View Logs** | Opens the session logs for the selected session. See [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md). |
| **Lock Activity** | Opens the lock dialog for the selected session. You need the Lock Session permission. |
| **Unlock Activity** | Unlocks the selected session. Administrators can unlock any session. Auditors and read-only users need the Lock Session permission. |

All buttons except **Create Session** stay disabled until you select a row. **Refresh** reloads the table.

### Columns

| Column | Shows |
|---|---|
| Checkbox | Selects the row. |
| **STATUS** | The state of the session. See [Session statuses](#session-statuses). |
| **REQUESTED** | When the session was created. |
| **REQUESTED BY** | The user who requested the session. Click the name to open the user's details. |
| **HOST** | The resource the activity runs on. Click the name to open the resource's details. |
| **LOGIN ACCOUNT** | The account used to sign in to the resource. |
| **ACTIVITY** | The name of the activity. Click the name to see its details. |
| **START** | When the activity's actions began running. This isn't the time the user signed in to the resource. |
| **END** | When the session is scheduled to end: the start time plus the maximum session duration set in the access policy's connection profile. |
| **NOTES** | Notes the requester entered. |
| **TICKET NUMBER** | The ticket number the requester entered. |

Click the expand icon on a row to show more about the session. The expanded row has the live session viewer for a session in progress, and a replay viewer when a recording is available. If the user signed in more than once, the row lists one recording for each sign-in. See [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md) and [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md).

## Scheduled tab

The **Scheduled** tile has no tabs and one filter, **Search**. The toolbar has only **Create Session** and **End Session**. The columns are the same as on the **Active** tab. A scheduled session has the status **Pending** until its start time.

## Session statuses

The **Status** column uses these values on both tiles:

| Status | Meaning |
|---|---|
| **Provisioning** | Privilege Secure is assigning permissions to the login account before the session. |
| **Pending** | The scheduled start time is still in the future. Scheduled tab only. |
| **Waiting for Approval** | The session needs approval before it can begin. |
| **Available** | The session is ready. The user can start it or sign in through a client. |
| **Failed** | The provisioning stage encountered an error. |
| **Logged In** | The user is signed in to the resource, either directly or through the proxy. Privilege Secure detects a direct sign-in by polling the resource at regular intervals, so the status can lag. |
| **Canceling** | The session expired, or the user or an administrator canceled it. |
| **Locked** | An administrator locked the session. |

## End a session

End a session to cancel it before its scheduled end time.

1. Open the **Active** or **Scheduled** tile.
2. Select the checkbox for each session to end.
3. Click **End Session**.

The status of each selected session changes to **Canceling**. When the session ends, it moves to the **Historical** tile.

For example, to stop a contractor's session that is still running after the change window, select its row on the **Active** tile and click **End Session**. The status changes to **Canceling**.

If you don't have the Terminate Session permission, the console shows "You need 'Terminate Session' permission to end sessions".

:::note
If the session has a ServiceNow ticket, the console asks "End Session - How should the ServiceNow ticket be updated?" Choose **Keep In Progress**, **On Hold**, or **Resolved**. The prompt links to the ticket. For setup, see [Use ServiceNow tickets with sessions](/docs/privilegesecure/26.07/user-guide/servicenow-tickets.md).
:::

## Lock a session

Lock a session when you see suspicious or unauthorized activity. A locked session stays active, but the user can't work on the host.

1. Open the **Active** tile.
2. Select the session.
3. Click **Lock Activity**.
4. Enter a lock title and message. The user sees them in their RDP or SSH client.
5. Choose what to prevent the user from doing, and click **Okay**.

The status of the session changes to **Locked**. For the dialog options, see [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md).

To unlock a session, select it and click **Unlock Activity**. Administrators can unlock any session. Auditors and read-only users need the **Lock Session** permission. The console shows "Session successfully unlocked.", the lock icon leaves the status column, and the row shows its normal status again, for example **Active**.

If you selected **Any further activity with this account (Unlock via Users & Groups)**, the account stays locked after you unlock the session. Unlock it on the user's details page. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).

## Inspect a session

1. Select a session and click **View Logs** to see what happened while the session was provisioned.
2. Click the expand icon on the row to watch the session live.

{/* TODO screenshot: Active tab with a session selected and the toolbar enabled. */}
