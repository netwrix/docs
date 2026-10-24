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

{/* TODO verify: whether the All Historical tab lists only the sessions in your Users and Resources scope, or every session with recordings limited to your scope. The lab tour used an administrator account. */}

{/* TODO verify: the left navigation items an auditor sees. The lab tour used one administrator account. */}

## Find a session

1. Select **Dashboard** in the left navigation.
2. Select the **Historical** tile.
3. Narrow the list with the filters.

{/* TODO verify: how an auditor without the Administrator role lists other users' historical sessions; in 26.07.3 the All Historical tab renders only for the Admin role (HistoricalSessionsTable.tsx). */}

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
2. Open its recording. A session can have several recordings, one for each sign-in.

{/* TODO verify: how to open a recording from a Historical row. Expanding a Completed row shows a one-line summary in the lab, and Failed rows have a grey chevron. The Track your sessions page describes the same row actions. */}

The Replay Viewer opens. See [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md) for the controls, the timeline, and the viewer for each resource type.

## Watch a live session

If your role includes **Live Session Viewer**, you can watch an active session as it happens. You can also lock or terminate the session if your role includes **Lock Session** or **Terminate Session**. See [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md).

{/* TODO verify: how an auditor finds active sessions to watch. The Active tile lists sessions, but the lab had no active sessions and no auditor account. */}

## Related topics

- [Review historical sessions](/docs/privilegesecure/26.07/admin/sessions/historical-sessions.md)
- [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md)
- [Reports and subscriptions](/docs/privilegesecure/26.07/admin/audit-reporting/reports.md)
