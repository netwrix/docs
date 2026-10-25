---
title: "Watch, lock, or terminate a live session"
description: "Watch an active session as it happens, lock the session to stop the user from working, or terminate it when you see suspicious activity."
sidebar_position: 40
---

# Watch, lock, or terminate a live session

The **Live Session Viewer** shows an active session as it happens. From the viewer you can lock the session to stop the user from working or terminate it. Use these actions when you see suspicious or unauthorized activity.

## Before you begin

A session appears in the viewer only when the [connection profile](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md) on its access policy has **Record Proxy Session** selected. You can watch only a user's current session live.

These people can use the viewer:

- Administrators.
- Users whose role includes the **Live Session Viewer** permission. This permission is available in the Auditors permission list. An Auditors role limits which sessions the user can watch with its **Users** and **Resources** scope tabs.

The **Terminate Session** and **Lock Session** permissions stay disabled until **Live Session Viewer** is turned on. See [Roles and permissions](/docs/privilegesecure/26.07/admin/roles/roles.md) and [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).

## Open the Live Session Viewer

1. Open the **Active** tile. See [Manage active and scheduled sessions](/docs/privilegesecure/26.07/admin/sessions/active-sessions.md).
2. Click the expand icon on the session's row. The row lists one entry for each sign-in, for example `RDP Session is live now.`
3. Click the entry with the eye icon to open the viewer. If the entry has no icon, the session isn't being recorded or you don't have permission to watch it.

{/* TODO screenshot: Active tile with a session row expanded to show the recording */}

If the user signed in to the session more than once, the row lists several recordings. Select the current one.

## Viewer types

The viewer depends on the protocol of the session.

| Viewer | Sessions |
|---|---|
| RDP | Remote Desktop sessions. The viewer shows the screen of the session. |
| SSH | SSH sessions. The viewer shows the terminal of the session. |

A website session has no live viewer. You can replay a website session after it ends. See [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md).

{/* TODO verify: which resource types start RDP, SSH, and website sessions, for example whether Active Directory domain and Microsoft Entra ID resources use RDP or website sessions. The console decides the viewer from the session protocol, not from the resource type. */}

{/* TODO screenshot: Live Session Viewer for an RDP session */}

Both viewers show these details in the header:

| Detail | Meaning |
|---|---|
| **User** | The account used to sign in to the resource |
| **logged on to** | The resource |
| **using** | The computer the session connects from |
| **Activity** | The name of the activity |
| **Proxy Session Started** | When the activity's actions began. This isn't when the user signed in to the resource. |

The RDP and SSH viewers also show a timeline of the session as it happens, in the pane to the left of the player. The timeline includes keystrokes. When the **Record Keystrokes and Metadata** setting of the connection profile is cleared, the session video is still recorded.

:::note
The RDP timeline also lists Windows events when the Remote Desktop Monitor service is installed on the target host. See [Install the Remote Desktop Monitor](/docs/privilegesecure/26.07/install/rdp-monitor.md).
:::

## Lock a session

Lock a session to stop the user from working without ending the session.

1. In the viewer, select **Lock**. You can also select the session on the **Active** tile and select **Lock Activity**.
2. In the **Lock Session** window, keep the **Lock Title** or replace it. For example, `Security review`.
3. Keep or replace the **Lock Message**. For example, `Your session is locked while the security team reviews it. Contact the help desk.`
4. Under **Prevent User From:**, select what to block:
   - **Opening new sessions on this activity**
   - **Opening new activities to this resource**
   - **Any further activity with this account (Unlock via Users & Groups)**
5. Click **Okay**.

The window opens with the title "Netwrix Privilege Secure" and the message "Your session has been temporarily locked, please see a Netwrix Privilege Secure administrator for more information." already filled in. Replace them with your own text. The user sees the title and message in the RDP or SSH client.

The first two options are selected when the window opens. The options build on each other. Selecting **Opening new activities to this resource** also selects **Opening new sessions on this activity**, and selecting **Any further activity with this account** selects both. When you lock from the **Active** tile, the window doesn't offer **Opening new sessions on this activity**.

{/* TODO screenshot: Lock Session window with a title, a message, and the Prevent User From options */}

To unlock the session, select **Unlock** in the viewer. You can also select the session on the **Active** tile and select **Unlock Activity**.

If you selected **Any further activity with this account**, the account stays locked after you unlock the session. Unlock the account from its details page: click **Unlock Account**, which replaces **Lock Account** while the account is locked. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).

## Terminate a session

Terminate a session to disconnect the user at once.

1. In the viewer, select **Terminate Session**.
2. In the **Terminate Proxy Session** window, confirm the prompt "Are you sure?".
3. Click **Cancel Activity Session** to also cancel the activity session in Privilege Secure. The user can't sign in again through the same session.
4. Confirm the termination.

{/* TODO screenshot: Terminate Proxy Session window */}

For example, a user runs an unapproved script during a session. Click **Terminate Session**, select **Cancel Activity Session**, and confirm. The user is disconnected and can't reconnect through that session.

Terminating a session doesn't stop the user from requesting a new one. To block that, lock the user's account with **Lock Account** on the [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md) page.

:::tip
A command restriction can also lock or end a session on its own. The **Block And Lock** and **Terminate** actions do this when a user runs a restricted command. See [Restrict SSH commands](/docs/privilegesecure/26.07/configuration/access-policies/command-restrictions.md).
:::

## Related topics

- [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md)
- [Session recording](/docs/privilegesecure/26.07/admin/sessions/session-recording.md)
- [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md)
