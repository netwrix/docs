---
title: "Control Session Timeouts with GPO"
description: "Use Group Policy to log off disconnected and idle Remote Desktop sessions so that privileged sessions don't outlive access."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: The Group Policy steps were added from Microsoft's standard Remote Desktop Session Host policy names, and the old page only linked to third-party and archived Microsoft pages. Confirm the steps and add a current Microsoft Learn link. Evidence: none.
:::

A Windows session that was established with privilege keeps that privilege for as long as the session is active, until the user explicitly signs out. This page explains the behavior and how to use Group Policy to end disconnected and idle sessions.

## Background

Windows controls the user logon session. The method that starts the session doesn't change the permissions of the session. Users can sign in with Remote Desktop, PowerShell, the console, direct logon, remote procedure calls (RPC), scheduled tasks, and other methods. Remote Desktop is only a way to connect, and Windows decides which permissions the user has during the session.

When a user signs in with administrator rights, Windows caches the credentials in memory for an indefinite time and associates them with the user's account. The cached credentials are removed when the user signs out or the system restarts. They are generally valid until the user changes the password.

For remote connections, this means a session ends only when the user signs out. Disconnecting doesn't end it, regardless of the method that connects to the Windows endpoint.

## The problem

When a user disconnects from a privileged remote session without signing out, the disconnected session stays available for reconnection until the user signs out or the system security policy ends the session. The default time-out value for this token is often long, such as 2 days, and can be longer if customized.

While the token is valid, adding a user to the Remote Desktop Users group and starting a session reconnects that user to the session that was established earlier with privilege. This is a potential gap in privileged access. ensure that you can't exploit it accidentally or intentionally.

## Solutions

Use one or more of the following approaches:

- Control Remote Desktop Protocol (RDP) access only through the local Administrators group, which is the default approach of Privilege Secure for Discovery.
- Enforce a GPO policy that treats a disconnect as a sign-out. This removes the token for the admin session whenever the user signs out or disconnects.
- Configure Remote Desktop to sign out users after a period of inactivity.

:::warning
Treating a disconnect as a sign-out isn't a complete solution for every remote sign-in use case, and it can disrupt operations. Plan the change carefully.
:::

## Configure the Group Policy settings

1. Open **Group Policy Management Editor** and create or edit a GPO for the target systems.
2. Go to **Computer Configuration** > **Policies** > **Administrative Templates** > **Windows Components** > **Remote Desktop Services** > **Remote Desktop Session Host** > **Session Time Limits**.
3. Enable **Set time limit for disconnected sessions** and set the time limit. To end disconnected sessions immediately, select **End a disconnected session**.
4. Enable **Set time limit for active but idle Remote Desktop Services sessions** and set the time limit.
5. Link the GPO to the OUs that contain the target systems.
