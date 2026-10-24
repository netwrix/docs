---
title: "Connect to a session in the browser"
description: "Request a session in the Remote Access Gateway portal, open it in the Live Sessions page, and use the resolution, Ctrl+Alt+Delete, and Close controls."
sidebar_position: 20
---

# Connect to a session in the browser

In the Remote Access Gateway portal, you request a session for an activity and connect to the target system in your browser. The session opens on the **Live Sessions** page, with no VPN or client software.

## Before you begin

- Sign in to the portal. See [Sign in to the portal](/docs/privilegesecure/26_07/remote-access-gateway/user-guide/sign-in).
- Belong to at least one access policy that includes the activity and the resource. If you belong to none, the **Activity Request** wizard shows an error. See [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26_07/remote-access-gateway/troubleshooting#a-user-belongs-to-no-access-policy).
- If the target asks for a password when the session opens, know the password of the account that the activity uses on the target.

## Dashboard

After you sign in, the portal opens the dashboard. It shows four tiles:

| Tile | Shows |
|---|---|
| **Active** | Sessions that you requested to start now |
| **Scheduled** | Sessions with a later start time |
| **Approvals** | Requests that wait for an approver to decide. Approvers use this tile. |
| **Historical** | Sessions that have ended |

{/* TODO verify: the contents of each tile on the portal, and which users see the Approvals tile. The descriptions follow the console dashboard pages. The Historical description is unconfirmed. */}

The dashboard also has the **Create Session**, **End Session**, **Lock Activity**, and **Unlock Activity** buttons, and a table of sessions. You can't connect to a locked session.

{/* TODO verify: what End Session, Lock Activity, and Unlock Activity do on the portal. */}

![Portal dashboard with the Active, Scheduled, Approvals, and Historical tiles and an empty session table](/images/privilegesecure/26.07/remote-access-gateway/portal-dashboard-signed-in.webp)

## Request a session

1. On the dashboard, click **Create Session**. The **Activity Request** wizard opens.
2. On the **Activity Selection** step, search for and select an activity. Click **Next >**.

   ![Activity Selection step of the Activity Request wizard](/images/privilegesecure/26.07/remote-access-gateway/portal-activity-request-step1.webp)

3. If the **Group Selection** step appears, select the groups or roles. Click **Next >**.

   {/* TODO verify: when the portal shows or skips Group Selection. The lab skipped it when the user had one activity. The console request page has the same open question. */}

4. On the **Resource Selection** step, select one or more resources. Click **Next >**.
5. On the **Notes** step, enter notes and a ticket number. Click **Next >**.

   ![Notes step with the Notes for this session and Ticket number for this session fields](/images/privilegesecure/26.07/remote-access-gateway/portal-wizard-notes.webp)

6. On the **Scheduling** step, select **Now**, or select **Choose a time** and set a start time. Click **Next >**.

   ![Scheduling step with the Now and Choose a time options](/images/privilegesecure/26.07/remote-access-gateway/portal-wizard-scheduling.webp)

   {/* TODO verify: the default session length. The lab screen showed that the session expires 120 minutes after the start. Confirm whether that is a default or a setting of the activity. */}

7. On the **Review** step, check the summary. Click **Finish** to submit the request.

The wizard has five steps when the portal skips **Group Selection**, and six when it shows that step.

The new session appears in the session table. If the access policy requires approval, the **Status** column shows **Waiting for approval** until an approver decides. When the session is ready, the status changes to **Available**.

For the fields on each step, see [Request a session](/docs/privilegesecure/26_07/user-guide/request-session).

## Open the session

1. In the session table, find the row with the **Available** status.
2. Click the monitor icon. The **Live Sessions** page opens.

   The row also has a connection-file icon. {/* TODO verify: what the connection-file icon does when you use the portal from outside the network, and whether users should use it. */}

3. At the prompt from the target system, enter the password of the target account.

The prompt asks for a password only. The account name comes from the activity's login account. If the target rejects the sign-in, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26_07/remote-access-gateway/troubleshooting#errconnect_logon_failure-after-you-enter-the-target-password).

{/* TODO verify: that the password prompt appears only when Proxy Auto-connect is off on the access policy, and what the user sees when it is on. */}

{/* TODO verify: SSH sessions in the portal. Code opens a terminal in the browser for SSH targets. The lab tested only RDP. */}

## Use the Live Sessions page

The page shows the target desktop. A toolbar at the top has these controls:

| Control | What it does |
|---|---|
| **Resolution** | Sets the size of the remote display. Choose **Dynamic**, **1280x720**, **1920x1080**, **2560x1440**, or **3840x2160**. |
| **Ctrl+Alt+Delete** | Sends the Ctrl+Alt+Delete key combination to the target. |
| **Close** | Closes the session window. |

{/* TODO verify: whether Close also ends the activity session, and whether Ctrl+Alt+Delete appears for SSH sessions. Code sends it for RDP only. */}

The page also shows:

- A banner with the target name and the time left, in the form `<resource> [Remaining: <time>]`.
- A blue **REC** indicator in the top right corner. It shows that Privilege Secure is recording the session.

![Live Sessions toolbar with the Resolution list open and the REC indicator](/images/privilegesecure/26.07/remote-access-gateway/portal-resolution-menu.webp)

Large mouse pointers on Windows 11 and Windows Server 2025 targets display correctly.

{/* TODO verify: the large mouse pointer behavior on 26.07.3 targets. */}

{/* TODO verify: clipboard and audio in the browser session. Code copies text between the browser and the target after the browser grants clipboard permission, and supports audio. */}

## Switch between sessions

While a browser session is open, the left navigation shows **Live Sessions**. When more than one session is open, select the session name at the top of the page and choose another session from the list. A second session to the same resource shows a number, such as (2).

{/* TODO verify: the Live Sessions label, the session name list, and the duplicate-session count on 26.07.3. */}

## Related topics

- [Sign in to the portal](/docs/privilegesecure/26_07/remote-access-gateway/user-guide/sign-in)
- [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26_07/remote-access-gateway/troubleshooting)
