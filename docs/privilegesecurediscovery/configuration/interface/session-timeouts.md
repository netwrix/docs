---
title: "Control session timeouts with Group Policy"
description: "Use Group Policy to end disconnected and idle Remote Desktop sessions so that privileged sessions don't outlive the access that Privilege Secure for Discovery grants."
sidebar_position: 20
---

Netwrix Privilege Secure for Discovery grants administrator rights for a limited time. Windows, not the product, controls a user's logon session. A session that started with administrator rights keeps the permissions it received at sign-in until the user signs out or the system ends the session. This page explains the gap that this behavior creates and shows how to close it with Group Policy.

## Understand the gap

When a just-in-time access (JITA) session expires, the product removes the user from the local Administrators group. A Windows logon session that already exists doesn't pick up that change. If the user disconnects from a Remote Desktop session without signing out, Windows keeps the session running. The user can reconnect to it later, and it still has the administrator rights it had at sign-in.

Remote Desktop is only one way to start a session. Console, PowerShell, scheduled task, and other logons behave the same way: the session ends when the user signs out or when policy ends it. Disconnecting doesn't end it.

## Choose an approach

Use one or more of the following approaches:

- Allow Remote Desktop Protocol (RDP) access only through membership in the local Administrators group, which the product manages.
- End a disconnected session after a short time limit.
- Sign out users after a period of inactivity.

:::warning
Ending disconnected sessions can interrupt work that runs in a disconnected session. Test the policy on a small set of systems before you apply it widely.
:::

## Configure the Group Policy settings

1. Open the **Group Policy Management Editor** and create or edit a Group Policy Object (GPO) for the target systems.
2. Go to **Computer Configuration** > **Policies** > **Administrative Templates** > **Windows Components** > **Remote Desktop Services** > **Remote Desktop Session Host** > **Session Time Limits**.
3. Enable **Set time limit for disconnected sessions**.
4. Set **End a disconnected session** to the time limit you want. Select **Never** to turn the limit off, or **1 minute** to end the session almost immediately.
5. Enable **Set time limit for active but idle Remote Desktop Services sessions** and set the time limit.
6. Link the GPO to the organizational units (OUs) that contain the target systems.

For example, set **End a disconnected session** to **1 minute** and the idle limit to **30 minutes** on a GPO for your privileged servers. A user who closes the Remote Desktop window loses the session after a minute, and an unattended session ends after half an hour.

For the registry values and supported Windows versions behind these settings, see the Microsoft documentation for [Policy CSP - ADMX_TerminalServer](https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-admx-terminalserver).
