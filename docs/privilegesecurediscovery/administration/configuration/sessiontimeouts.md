---
title: "Controlling Session Timeouts with GPO"
description: "Controlling Session Timeouts with GPO"
sidebar_position: 210
---

# Controlling Session Timeouts with GPO

Controlling Session Timeouts with GPO

# Controlling Session Timeouts with GPO

Summary

- Microsoft's Windows operating systems are designed such that a session established with privilege
  retains that level of privilege as long as the session is active, i.e. the user has not explicitly
  logged out.  There are many methods a user can interface with a Windows OS:  Remote Desktop,
  Powershell, console, direct logon, rpc, scheduled tasks, etc.
- Windows handles the user logon sessions, and the user logon session is not restricted by the
  method it was initiated.  For example, Remote Desktop is a method of interfacing, but Remote
  Desktop itself does not define what permissions a user has during the initiated session, Windows
  does.  When a user signs on with admin rights, credentials are cached in memory for an indefinite
  amount of time and associated with the user's account. Cached credentials are removed from memory
  when the user is logged out or the system reboots. Cached credentials are generally valid until
  the user password is changed.
- This behavior can create confusion because with respect to remote connections, the session must be
  explicitly logged out and not simply disconnected in order for the session with the privilege to
  truly be terminated, **regardless** of the method used to interface with the Windows endpoint.

Problem Statement

In the last bullet example above, where a remote session with privilege is disconnected and not
logged out of, that disconnected session remains available to re-establish connection until that
user logs off or the system security policy terminates the session.  The default
time-out/termination value of this token is often long-lasting: a default of 2 days, sometimes
longer if customized.  While this token is still valid, adding a user to the Remote Desktop Users
group and establishing a session will reconnect this user to the same session previously established
with privilege.  Clearly, this presents a potential loophole for privileged access; it is critical
to make sure cannot be accidentally or intentionally exploited.

Solutions

There are three primary paths for solving this problem:

- Controlling RDP access exclusively via the management of the Local Administrators Group, in line
  with Privilege Secure's default approach in every way.
- Enforcing a GPO policy that equates a disconnect event with a log-off event, thereby ensuring that
  the token associated with the admin session is removed every time both a log-off and disconnect to
  a session takes place.  **DISCLAIMER**:  This approach is not a comprehensive solution for every
  remote login use case, and can potentially be very operationally disruptive.  As such, it should
  be approached strategically and with caution.
- Configure Remote Desktop to log off users after a period of inactivity: 
  [https://techexpert.tips/windows/gpo-logoff-remote-desktop-user-after-inactivity-logoff/](https://techexpert.tips/windows/gpo-logoff-remote-desktop-user-after-inactivity-logoff/)

Microsoft has designed RDP to have incredibly granular controls regarding specific policies and
actions which can be explored for additional layers of control over the RDP interface, specifically:

- [https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754272(v=ws.11)?redirectedfrom=MSDN](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754272(v=ws.11)?redirectedfrom=MSDN)

In this context, it is important to set a policy that forces a disconnected or idle session to also
log off.
