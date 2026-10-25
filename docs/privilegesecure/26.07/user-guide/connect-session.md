---
title: "Connect to a session"
description: "Launch, extend, and end an available session from the console, and view or copy its password."
sidebar_position: 60
---

# Connect to a session

When a session is ready, its row shows the status **Available**. You launch it from the **Active** tile on the dashboard, or from the activity card on **My Activities**. This page covers launching, signing in, extending, and ending a session.

## Launch a session

An **Available** row shows these icons:

- The copy password icon copies the password.
- The view password icon shows the password as plain text.
- The **connect** icon in the **Status** column starts the session.

Which icons appear depends on the connection profile. See [View or copy the password](#view-or-copy-the-password).

Click the **connect** icon. What happens next depends on the session type:

| Session type | What the console does |
|---|---|
| RDP | Downloads an `.rdp` file named `<host>--<id>.rdp`. Open it with your Remote Desktop client. If the download fails, the console shows "Unable to download RDP file." |
| SSH | Opens an `ssh://` link in your SSH client. |
| Web | Opens the website in a new browser tab. |
| File | Downloads the encrypted file. |

The console hands the `ssh://` link to your operating system, so an SSH client must be registered for the `ssh://` protocol on your computer. To register one, see [Launch a local SSH client from the console](/docs/privilegesecure/26.07/user-guide/connect-own-client.md#launch-a-local-ssh-client-from-the-console).

A locked session can't be launched. If an administrator locked your session, contact them.

If you prefer to use PuTTY, MobaXterm, or Remote Desktop yourself, see [Connect with your own RDP or SSH client](/docs/privilegesecure/26.07/user-guide/connect-own-client.md). To open a session in a browser from outside the network, see [Connect to a session in the browser](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/browser-sessions.md).

{/* TODO screenshot: an Available row on the Active tile showing the password and connect icons. */}

## Sign in to the resource

The activity decides which account you use on the resource.

With **Requester** as the login account, you sign in as your own account. The sign-in uses your account name in the format that the activity sets. The default is `Domain\SamAccountName`. The prompt at the resource asks only for your password.

:::warning
A local Privilege Secure console user can't sign in to a Windows resource that is joined to a domain. The sign-in uses the console account name, and the domain doesn't know that account. The connection fails with a message such as "Failed to connect to target server. Logon failed." To use a **Requester** activity on a domain-joined Windows resource, sign in to the console with a domain account.
:::

Other activities use an account that Privilege Secure manages. For these, you can view or copy the password from the session row when the connection profile allows it.

## View or copy the password

When the connection profile has **Allow User to Access Password** selected, the session row shows a copy icon. The eye icon, which shows the password as plain text, also needs **Enable 'Show Password' option in user interface and browser extension** to be selected in the profile. The password is valid only while the session is active. To view it, click the eye icon. The password shows for the time set in **View Password Timeout (seconds)** in the connection profile. If that field is empty or 0, the password shows for 20 seconds.

If the icons are missing, ask your administrator to turn on **Allow User to Access Password** and **Enable 'Show Password' option in user interface and browser extension** in the connection profile. For credential-based activities, you can always view the password.

On **My Activities**, the **...** menu on a session card also has options to stop the session, add notes, view the password, copy the password, and copy the user name.

## Extend a session

Each session ends when the **Max Duration (minutes)** of its connection profile passes. The profile's session extension settings decide whether you can add time:

| Setting | Default | Effect |
|---|---|---|
| **Enable Session Extension** | Off | When off, you can't extend a session. |
| **Extend By (minutes)** | 30 | The time each extension adds. |
| **Session Extension Limit** | 2 | The most times you can extend one session. |
| **Session End Notification (minutes)** | 5 | How long before the end the session warns you. |

The extension option appears when the remaining time reaches the end notification time or less. In an RDP session, a pop-up message appears in the session window. In an SSH session, type **Ctrl+X** when the prompt tells you to.

When you can't extend, the console shows one of these messages:

- "This session does not allow the user to extend"
- "No more extensions remaining for this user"

These limits apply to every user, including users with the Administrator role. The server rejects an extension when the profile doesn't allow it, when no extensions remain, or when the request is longer than **Extend By (minutes)**.

## End a session

End a session when you finish, so the permissions that Privilege Secure granted are removed.

1. Click **Dashboard** in the left navigation, then click the **Active** tile.
2. Select the checkbox for one or more sessions.
3. Click **End Session**.

**End Session** ends the selected sessions at once, with no confirmation. On **My Activities**, use the **...** menu on the session card and choose the stop option.

If the session has a ServiceNow ticket, the console asks how to update the ticket first. See [Use ServiceNow tickets with sessions](/docs/privilegesecure/26.07/user-guide/servicenow-tickets.md).

If you hold the Auditors role, you need the **Terminate Session** permission to end sessions. Otherwise the console shows "You need 'Terminate Session' permission to end sessions". After the session ends, it moves to the **Historical** tile. See [Track your sessions](/docs/privilegesecure/26.07/user-guide/my-sessions.md).

## Troubleshoot SSH key exchange errors

When you connect to an older network device, such as a legacy Cisco device, the session can fail with the message "ssh: handshake failed: ssh: no common algorithm for key exchange". The device offers only algorithms that aren't in the proxy's configured list. Ask your administrator to review the algorithms. See [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md).
