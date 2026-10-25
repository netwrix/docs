---
title: "Review historical sessions"
description: "Find past sessions by user, resource, or date, search recording data, replay recordings, and export the session list to a CSV file."
sidebar_position: 30
---

# Review historical sessions

The **Historical** tile lists every session that has ended, with its final status. Use it to find a past session, open its logs or recording, or export the list.

To open it, click **Dashboard** in the left navigation, then click the **Historical** tile.

## Tabs and toolbar

The tile has two tabs:

- **All Historical** (the default) shows sessions for all users.
- **Mine** shows sessions for the signed-in user.

The toolbar has two buttons:

- **Export as CSV** creates a CSV file of the table and downloads it to your browser's default download folder. The file name shows which table you exported.
- **Refresh** reloads the table.

## Filters

| Filter | Narrows the list by | Tab |
|---|---|---|
| **Search** | Any column value. Partial matches count. | Both |
| **Resource name** | The value in the **Host** column. | Both |
| **User name** | The value in the **Session User** column. | **All Historical** |
| **User type** | The type of user: **All**, **User**, **Application**, or **Local User**. | **All Historical** |
| **Recording data** | Text in the session recordings, such as keystroke data and, when the Remote Desktop Monitor is installed, Windows event activity from RDP sessions. Enter the text to search for. Available to administrators and auditors. | Both |
| **Start date** | A start date, an end date, or both. | Both |

Search and filters cover live and recorded sessions. They match partial strings. Within the filtered list, you can search any column, including **Login Account**, **Activity**, **Notes**, and **Ticket Number**.

When you search recording data and open the matching recording, playback jumps to the first point where the text appears.

For the Remote Desktop Monitor, see [Install the Remote Desktop Monitor on target hosts](/docs/privilegesecure/26.07/install/rdp-monitor.md).

## Columns

| Column | Shows |
|---|---|
| **ACTIONS** | The expand icon, the logs icon, and, on your own sessions, the quick launch icon. See [Row actions](#row-actions). |
| **REQUESTED** | When the session was created. |
| **STATUS** | The final state of the session. See [Statuses](#statuses). |
| **SESSION USER** | The user who requested the session. Click the name to open the user's details. |
| **HOST** | The resource the activity ran on. Click the name to open the resource's details. |
| **LOGIN ACCOUNT** | The account used to sign in to the resource. |
| **ACTIVITY** | The name of the activity. Click the name to see its details. |
| **START** | When the activity's actions began running. This isn't the time the user signed in to the resource. |
| **DURATION** | How long the activity ran, until it reached its scheduled end or someone canceled it. |
| **NOTES** | Notes entered when the session was created. |
| **TICKET NUMBER** | The ticket number entered when the session was created. |

You can resize the columns and sort them in ascending or descending order.

### Statuses

| Status | Meaning |
|---|---|
| **Completed** | The activity reached its scheduled end, or the requester ended it early. |
| **Canceled** | An administrator canceled the activity before its scheduled end. |
| **Failed** | The provisioning stage encountered an error. |

### Row actions

- **Expand icon:** Shows a one-line summary of a completed session, for example `RDP Session completed at <time>.` When a recording exists, the expanded row also has the replay viewer. If the user signed in more than once, the row lists one recording for each sign-in. See [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md). A failed session has no summary.
- **Quick launch icon:** The first icon in the **ACTIONS** column, to the left of the logs icon. Starts the same activity again on the same resource. It appears only on your own sessions, and not for Credential Release or File Release activities. Hover over it to see the activity and resource. If you no longer have access to the activity, the console shows an error.
- **Logs icon:** Opens the session logs. See [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md).

## Who can view recordings

Administrators can view recordings of historical sessions. Auditors can view recordings through the **View Recordings** permission. A recording opens only when both the user of the session and its resource are in the scope of the Auditors role, either added on the **Users** and **Resources** tabs or covered by **All Users** and **All Resources**. Auditors can also open recordings of their own sessions. When an auditor holds more than one role, the scopes add together.

A user who holds **Admin View Read Only** doesn't open recordings as an Administrator. Give that user the **View Recordings** permission as well. Other roles, such as **Users** and **Reviewers**, can't open recordings. See [Roles and permissions](/docs/privilegesecure/26.07/admin/roles/roles.md).

{/* TODO screenshot: Historical tab toolbar and filters, with host names redacted. */}
