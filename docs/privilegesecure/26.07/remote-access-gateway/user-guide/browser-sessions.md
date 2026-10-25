---
title: "Connect to a session in the browser"
description: "Request a session in the Remote Access Gateway portal, open it in the Live Sessions page, and use the resolution, Ctrl+Alt+Delete, and Close controls."
sidebar_position: 20
---

# Connect to a session in the browser

In the Remote Access Gateway portal, you request a session for an activity and connect to the target system in your browser. The session opens on the **Live Sessions** page, with no VPN or client software.

## Before you begin

- Sign in to the portal. See [Sign in to the portal](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/sign-in.md).
- Belong to at least one access policy that includes the activity and the resource. If you belong to none, the **Activity Request** wizard shows an error. See [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md#a-user-belongs-to-no-access-policy).
- If the target asks for a password when the session opens, know the password of the account that the activity uses on the target.

## Dashboard

After you sign in, the portal opens the dashboard. It shows four tiles:

| Tile | Shows |
|---|---|
| **Active** | Your sessions that are provisioning, available, or in progress |
| **Scheduled** | Your sessions with a later start time |
| **Approvals** | Your session requests that wait for an approver to decide |
| **Historical** | Your sessions that have completed, been canceled, or failed, and requests that were denied |

Every user who signs in sees all four tiles. Each tile shows a count of your own sessions. The portal doesn't have the **Approve** and **Deny** buttons. Approvers decide requests in the console. See [Approve or deny session requests](/docs/privilegesecure/26.07/user-guide/approve-requests.md).

The **Active** tile also has the **Create Session**, **End Session**, **Lock Activity**, and **Unlock Activity** buttons, and a table of sessions. You can't connect to a locked session.

- **End Session** ends the selected sessions. It stays unavailable until you select a row.
- **Lock Activity** and **Unlock Activity** require the **Lock Session** permission from the Auditors permission group, or the **Admin View Read Only** role with **Lock Session**. Without it, the buttons are unavailable and a tooltip names the missing permission.

![Portal dashboard with the Active, Scheduled, Approvals, and Historical tiles and an empty session table](/images/privilegesecure/26.07/remote-access-gateway/portal-dashboard-signed-in.webp)

## Request a session

1. On the dashboard, click **Create Session**. The **Activity Request** wizard opens.
2. On the **Activity Selection** step, search for and select an activity. Click **Next >**.

   ![Activity Selection step of the Activity Request wizard](/images/privilegesecure/26.07/remote-access-gateway/portal-activity-request-step1.webp)

3. If the **Group Selection** step appears, select the groups or roles. Click **Next >**.

   The portal shows this step only when the selected activity assigns users to groups or roles. For other activities, the wizard skips it.

4. On the **Resource Selection** step, select one or more resources. Click **Next >**.
5. On the **Notes** step, enter notes and a ticket number. Click **Next >**.

   ![Notes step with the Notes for this session and Ticket number for this session fields](/images/privilegesecure/26.07/remote-access-gateway/portal-wizard-notes.webp)

6. On the **Scheduling** step, select **Now**, or select **Choose a time** and set a start time. Click **Next >**.

   ![Scheduling step with the Now and Choose a time options](/images/privilegesecure/26.07/remote-access-gateway/portal-wizard-scheduling.webp)

   The wizard shows that the session expires after the **Max Duration (minutes)** of the connection profile in the access policy. The default is 120. See [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md).

7. On the **Review** step, check the summary. Click **Finish** to submit the request.

The wizard has five steps when the portal skips **Group Selection**, and six when it shows that step.

The new session appears in the session table. If the access policy requires approval, the **Status** column shows **Waiting for approval** until an approver decides. When the session is ready, the status changes to **Available**.

For the fields on each step, see [Request a session](/docs/privilegesecure/26.07/user-guide/request-session.md).

## Open the session

1. In the session table, find the row with the **Available** status.
2. Click the monitor icon. The **Live Sessions** page opens.

   The row also has icons to copy the account name and, when the connection profile lets users see passwords, to copy or view the password.

3. At the prompt from the target system, enter the password of the target account.

The prompt asks for a password only. The account name comes from the activity's login account. If the target rejects the sign-in, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md#errconnect_logon_failure-after-you-enter-the-target-password).

{/* TODO verify: whether the target password prompt appears in the portal when Allow Proxy Auto-connect is on. The backend sets prompt for credentials to 0 in the RDP settings when it is on and 1 when it is off, but the portal's getRdpConnection builds the guacd connection without that value and sets the password to not_used only for managed or activity-identity login accounts, so the login account type may decide whether the target asks for a password. This needs an RDP test. */}

For an SSH target, the monitor icon opens a terminal in the browser on the **Live Sessions** page.

## Use the Live Sessions page

The page shows the target desktop. A toolbar at the top has these controls:

| Control | What it does |
|---|---|
| **Resolution** | Sets the size of the remote display. Choose **Dynamic**, **1280x720**, **1920x1080**, **2560x1440**, or **3840x2160**. |
| **Ctrl+Alt+Delete** | Sends the Ctrl+Alt+Delete key combination to the target. |
| **Close** | Closes the session window. |

**Close** disconnects your browser from the target. It doesn't end the activity session. To end the session, use **End Session** on the dashboard. The **Ctrl+Alt+Delete** button appears only for RDP sessions, not for SSH sessions.

The page also shows:

- A banner with the target name and the time left, in the form `<resource> [Remaining: <time>]`.
- A blue **REC** indicator in the top right corner. It shows that Privilege Secure is recording the session.

![Live Sessions toolbar with the Resolution list open and the REC indicator](/images/privilegesecure/26.07/remote-access-gateway/portal-resolution-menu.webp)

{/* TODO verify: large mouse pointers on Windows 11 and Windows Server 2025 targets. The pointer is drawn by guacd, and the release code has no pointer handling that settles how large pointers display. */}

### Clipboard

The session copies plain text between the target and your browser. Text that you copy on the target goes to your browser clipboard. To send text from your browser clipboard to the target, click the session display. Your browser might ask for permission to read the clipboard. If it doesn't support clipboard reading, the toolbar shows "This browser does not support reading from the clipboard."

{/* TODO verify: audio playback from the target in the browser session. The browser page requests the audio formats it supports, but whether a target plays sound depends on the target and guacd settings that the release code doesn't show. */}

## Switch between sessions

While a browser session is open, the left navigation shows **Live Sessions**. When more than one session is open, select the session name at the top of the page and choose another session from the list. Each entry has the form `<account>@<resource>`. A second session to the same resource, even with a different account, shows a number after the name, such as (1).

## Related topics

- [Sign in to the portal](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/sign-in.md)
- [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md)
