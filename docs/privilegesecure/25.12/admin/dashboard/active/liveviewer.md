---
title: "Live Session Viewer Window"
description: "Live Session Viewer Window"
sidebar_position: 30
---

# Live Session Viewer Window

The Live Session Viewer window allows a user with the Administrator role to watch a live activity
session. Activity sessions are monitored when the Record Proxy Sessions checkbox is selected in the
connection profile assigned to the access policy. All SSH and RDP keystrokes and local commands are
recorded using a granular metadata search that works across both live and recorded sessions.

Click the expand icon for an active session on the [Active Dashboard](/docs/privilegesecure/25.12/admin/dashboard/active/active.md).

![Active Session expanded](/images/privilegesecure/25.12/accessmanagement/admin/dashboard/window/activesessionexpand.webp)

If the user has logged into the activity session more than once, multiple session recordings will
display. Only the current session can be viewed live. See the
[Replay Viewer Window](/docs/privilegesecure/25.12/admin/dashboard/historical/replayviewer.md) topic for additional information on recorded sessions.

There are two types of Live Session Viewer windows:

- RDP session
- Website host

Select the desired recording and the Live Session Viewer window opens.

## Live Session Viewer for RDP Sessions

The Live Session Viewer window for RDP sessions is applicable to all resources except the Websites.

![livesessionviewerrdp](/images/privilegesecure/25.12/accessmanagement/admin/dashboard/window/livesessionviewerrdp.webp)

The Live Session Viewer for RDP Sessions window has the following features:

Action options

- Terminate Session icon – Click the icon to disconnect the user and end the session. A confirmation
  window will appear. See the [Terminate Proxy Session Window](/docs/privilegesecure/25.12/admin/dashboard/active/terminateproxysession.md) topic for
  additional information.
- Lock icon – Opens the Lock Session window to prevent the user from interacting with the host but
  keeps the session active. See the [Lock Session](/docs/privilegesecure/25.12/admin/dashboard/active/locksession.md) topic for additional information.

Session Details

- User— Displays the account used to log onto the resource

    - logged on to — Displays the name of the resource
    - using — Displays the name of the resource the RDP session connects from

- Activity — Displays the name of the activity
- Proxy Session Started — Indicates when the activity started. This refers to when the activity’s
  actions were executed and not when the user was logged on to the resource.

Activity Details

- Time line — Displays activity as it occurs in real-time during the session in the pane to the left
  of the player. By default this time line will include keystroke activity.

    :::note
    If RDP Session Monitoring is enabled, then it will also include Windows metadata
    activity in the time line. This monitoring requires the Netwrix Privilege Secure Remote Desktop
    Monitor service to be installed on the target host. See the
    [Install Remote Desktop Monitor Service on Target RDP Hosts](/docs/privilegesecure/25.12/install/servicesonadditional/rdpmonitor.md)
    topic for additional information.
    :::


## Live Session Viewer for SSH Sessions

The Live Session Viewer for SSH sessions is applicable to Linux and Cisco resources.

![livesessionviewerssh](/images/privilegesecure/25.12/accessmanagement/admin/dashboard/window/livesessionviewerssh.webp)

The Live Session Viewer for SSH Sessions window has the following features:

Action options

- Terminate Session icon – Click the icon to disconnect the user and end the session. A confirmation
  window will appear. See the [Terminate Proxy Session Window](/docs/privilegesecure/25.12/admin/dashboard/active/terminateproxysession.md) topic for
  additional information.
- Lock icon – Opens the Lock Session window to prevent the user from interacting with the host but
  keeps the session active. See the [Lock Session](/docs/privilegesecure/25.12/admin/dashboard/active/locksession.md) topic for additional information.

Session Details

- User— Displays the account used to log onto the resource

    - logged on to — Displays the name of the resource
    - using — Displays the name of the resource the RDP session connects from

- Activity — Displays the name of the activity
- Proxy Session Started — Indicates when the activity started. This refers to when the activity’s
  actions were executed and not when the user was logged on to the resource.

Activity Details

- Time line — Displays activity as it occurs in real-time during the session in the pane to the left
  of the player. By default this time line will include keystroke activity.

Other Details

- Keystrokes are captured via STD in/out SSH communication
- No agent is required
- All data is indexed and searchable

## Recording Session Viewer for Website Host Sessions

The Recording Session Viewer window for Website host sessions is applicable only to Website hosts
and Microsoft Entra ID.

![recordingsessionviewer](/images/privilegesecure/25.12/accessmanagement/admin/dashboard/window/recordingsessionviewer.webp)

The Live Session Viewer for Recording Sessions window has the following features:

Action options

- Terminate Session icon – Click the icon to disconnect the user and end the session. A confirmation
  window will appear. See the [Terminate Proxy Session Window](/docs/privilegesecure/25.12/admin/dashboard/active/terminateproxysession.md) topic for
  additional information.
- Lock icon – Opens the Lock Session window to prevent the user from interacting with the host but
  keeps the session active. See the [Lock Session](/docs/privilegesecure/25.12/admin/dashboard/active/locksession.md) topic for additional information.

Recording Details

- User— Displays the account used to log onto the resource

    - logged on to — Displays the name of the resource
    - using — Displays the name of the resource the session connects from

- Activity — Displays the name of the activity
- Proxy Session Started — Indicates when the activity started. This refers to when the activity’s
  actions were executed and not when the user was logged on to the resource.
