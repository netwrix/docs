---
title: "Review sessions as an auditor"
description: "Find the sessions you are allowed to audit, replay recordings, watch live sessions, and search recorded keystrokes and commands."
sidebar_position: 120
---

# Review sessions as an auditor

Auditors review what other users did in their sessions. You can find past sessions, replay their recordings, and search the recorded data. With the right permissions, you can also watch live sessions.

## What you can see

An administrator gives you the Auditors role and sets what it covers. The role controls what you can do and which sessions you can see.

| Permission | Lets you |
|---|---|
| **View Recordings** | Review recordings of historical sessions for the assigned users and resources. |
| **Live Session Viewer** | Watch live sessions for the assigned users and resources. |
| **Terminate Session** | Stop a live session. The user can start a new session. Requires **Live Session Viewer**. |
| **Lock Session** | Stop a live session and prevent new sessions from starting. Requires **Live Session Viewer**. |
| **Reporting** | Create, change, delete, and run reports. |
| **Admin View Read Only** | See every administration page without changing anything. |

**Admin View Read Only** is a permission in the Auditors role, not a separate role. See [Give auditors read-only console access](/docs/privilegesecure/26.07/admin/roles/admin-view-read-only.md).

The **Users** and **Resources** tabs of the role limit the sessions you can view. For how an administrator sets this, see [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).

The sessions you can list are the ones in your **Users** and **Resources** scope, plus your own sessions. Any other session outside that scope doesn't appear.

In the left navigation, an auditor sees at least **Dashboard** and **My Activities**. Other permission groups in the role add their own items. If the role includes reporting access, the **Auditing & Reporting** section also shows **Activity Log**, **DB Change History**, **Events**, **Log Files**, and **Reporting**. **Access Certification** appears only for reviewers.

## Find a session

1. Select **Dashboard** in the left navigation.
2. Select the **Historical** tile.
3. Narrow the list with the filters.

The **All Historical** and **Mine** tabs appear only for administrators. An auditor sees one list on the **Historical** tile, showing the sessions in the role's **Users** and **Resources** scope plus the auditor's own sessions.

| Filter | Narrows the list by |
|---|---|
| **Search** | Any column value. Partial matches count. |
| **Resource name** | The value in the **Host** column. |
| **User name** | The value in the **Session User** column. |
| **User type** | The type of user: All, User, Application, or Local User. |
| **Recording data** | Keystroke data and, when the Remote Desktop Monitor is installed, Windows event activity from RDP sessions. |
| **Start date** | A start date, an end date, or both. |

You can also search the **Login Account**, **Activity**, **Notes**, and **Ticket Number** columns. **Export as CSV** downloads the table to your browser's default download folder.

For the columns and statuses, see [Review historical sessions](/docs/privilegesecure/26.07/admin/sessions/historical-sessions.md).

{/* TODO screenshot: the Historical tile on the All Historical tab with the filters visible */}

## Search recorded data

Search and filters cover live and recorded sessions. When you search recorded data, such as a command, and open a matching recording, playback jumps to the first point where the text appears.

For example, enter a command name in **Search**, and then open a recording from the results to see where the user ran it.

The recording data includes keystrokes. In SSH sessions, keystrokes typed at a password prompt are hidden in the viewer. See [Session recording](/docs/privilegesecure/26.07/admin/sessions/session-recording.md).

## Replay a recording

A session has a recording only when the connection profile on its access policy has **Record Proxy Session** selected.

1. On the **Historical** tile, find the session.
2. Expand the row. Each recording appears as an entry such as `<type> Session completed at <date>.` A session can have several recordings, one for each sign-in.
3. Click the entry. If your role doesn't include **View Recordings**, the entry is disabled.

A row without a recording has nothing to expand.

The Replay Viewer opens. See [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md) for the controls, the timeline, and the viewer for each resource type.

## Watch a live session

If your role includes **Live Session Viewer**, you can watch an active session as it happens. You can also lock or terminate the session if your role includes **Lock Session** or **Terminate Session**. See [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md).

To find a session to watch, select **Dashboard** in the left navigation, and then select the **Active** tile. With **Live Session Viewer**, the tile lists active sessions for the users and resources in your scope. Without it, the tile lists only your own sessions. Expand a row, and click the `<type> Session is live now.` entry to watch.

## Related topics

- [Review historical sessions](/docs/privilegesecure/26.07/admin/sessions/historical-sessions.md)
- [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md)
- [Reports and subscriptions](/docs/privilegesecure/26.07/admin/audit-reporting/reports.md)
