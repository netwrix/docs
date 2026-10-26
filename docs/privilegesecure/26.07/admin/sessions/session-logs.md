---
title: "View session logs"
description: "Open the log for a session to see what happened while Privilege Secure provisioned it, then search, filter, and export the messages."
sidebar_position: 60
---

# View session logs

The **Session Logs** window shows the log messages for one session. Use it to see what happened while Privilege Secure provisioned and ended the session, for example when a session fails.

## Open the log

1. Open the **Active** tile. See [Manage active and scheduled sessions](/docs/privilegesecure/26.07/admin/sessions/active-sessions.md).
2. Select the session.
3. Select **View Logs**.

**View Logs** stays disabled until you select a row.

For example, a session shows **Failed**. Select it, select **View Logs**, and filter **Log Level** to errors to see which provisioning step failed.

{/* TODO screenshot: Active tile toolbar with a session selected and View Logs enabled */}

You can also open the log from other pages.

- On the **Historical** tile, select the logs icon in the **ACTIONS** column of the row.
- On the **Events** page, select an event that belongs to a session or an action, then select **View Logs**.

The Remote Access Gateway portal doesn't show the **Logs** button.

## Window controls

| Control | Use |
|---|---|
| **Search** | Filter the table to messages that match the text |
| **Filter** | Filter by **Log Level** or by **Requested date** (session start and end dates) |
| **Export as CSV** | Download the table as a CSV file to your browser's default download folder |
| **Refresh** | Reload the messages |
| **Action Service Version** | The version of the Privilege Secure action service that ran the activity |
| **Okay** | Close the window. The X in the upper-right corner also closes it. |

The **Log Level** filter lists **Debug**, **Info**, **Warn**, and **Error**. It starts on **Debug**. The table shows messages at the selected level and above, so **Debug** shows every message and **Error** shows only errors.

## Columns

| Column | Meaning |
|---|---|
| **Line** | The position of the message in the log |
| **DateTime** | When the message was recorded |
| **Status** | An icon that shows whether the action succeeded, and the log level of the message |
| **Message** | The logged details |

Resize a column by dragging its edge. Select a column heading to sort it in ascending or descending order.

## Related topics

- [Manage active and scheduled sessions](/docs/privilegesecure/26.07/admin/sessions/active-sessions.md)
- [Review historical sessions](/docs/privilegesecure/26.07/admin/sessions/historical-sessions.md)
- [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md)
