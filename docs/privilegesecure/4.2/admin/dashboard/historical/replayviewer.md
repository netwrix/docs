---
title: "Replay Viewer Window"
description: "Replay Viewer Window"
sidebar_position: 10
---

# Replay Viewer Window

The Replay Viewer window allows a user with the Administrator role to watch a recorded activity
session. Activity sessions are recorded when the Record Proxy Sessions checkbox is selected in the
connection profile assigned to the access policy. All SSH and RDP keystrokes and local commands are
recorded using a granular metadata search that works across both live and recorded sessions.

When recordings are available for a historical session, the expand icon is enabled on the
[Historical Dashboard](/docs/privilegesecure/4.2/admin/dashboard/historical/historical.md).

![Historical dashboard showing available recordings](/images/privilegesecure/4.2/accessmanagement/admin/dashboard/window/recordingavailable.webp)

Multiple recording can exist for a session. There are two types of Replay Viewer windows:

- RDP session
- Website host

Select the desired recording and the Replay Viewer window opens.

## Replay Viewer for RDP Sessions

The Replay Viewer window for RDP sessions is applicable to all resources except the Websites.

![Replay Viewer window for an RDP session](/images/privilegesecure/4.2/accessmanagement/admin/dashboard/window/replayviewerrdp.webp)

The Replay Viewer for RDP Sessions window has the following features:

**Play options**

- Control buttons — Play, pause, rewind, or fast forward the recording
- Playback bar — Click to jump to a specific place in the recording
- Speed slider — Use the slider to adjust the playback speed

**Recording Details**

- User— Displays the account used to log onto the resource

    - logged on to — Displays the name of the resource
    - using — Displays the name of the resource the RDP session connected from

- Activity — Displays the name of the activity
- Proxy Session Started — Indicates when the activity started. This refers to when the activity’s
  actions were executed and not when the user was logged on to the resource.
- Ended — Indicates when the activity ended.
- Duration — Indicates how long the Activity ran for until it either reached its scheduled end time
  or was manually canceled by the user or an Privilege Secure administrator

**Activity Details**

- Time line — Displays recorded activity that occurred during the session in the pane to the left of
  the player. By default this time line will include keystroke activity.

    :::note
    If RDP Session Monitoring is enabled, then it will also include Windows metadata
    activity in the time line. This monitoring requires the Netwrix Privilege Secure Remote Desktop
    Monitor service to be installed on the target host. See the
    [Install Remote Desktop Monitor Service on Target RDP Hosts](/docs/privilegesecure/4.2/install/servicesonadditional/rdpmonitor.md)
    topic for additional information.
    :::


## Replay Viewer for SSH Sessions

The Replay Viewer for SSH sessions is applicable to Linux and Cisco resources.

:::note
When a user enters input into a password prompt during an SSH session, the keystrokes will
be obscured in the Replay Viewer.
:::


![replayviewerssh](/images/privilegesecure/4.2/accessmanagement/admin/dashboard/window/replayviewerssh.webp)

The Replay Viewer for SSH Sessions window has the following features:

**Play options**

- Control buttons — Play, pause, rewind, or fast forward the recording
- Playback bar — Click to jump to a specific place in the recording
- Speed slider — Use the slider to adjust the playback speed

**Recording Details**

- User— Displays the account used to log onto the resource

    - logged on to — Displays the name of the resource
    - using — Displays the name of the resource the RDP session connected from

- Activity — Displays the name of the activity
- Proxy Session Started — Indicates when the activity started. This refers to when the activity’s
  actions were executed and not when the user was logged on to the resource.
- Ended — Indicates when the activity ended.
- Duration — Indicates how long the Activity ran for until it either reached its scheduled end time
  or was manually canceled by the user or an Privilege Secure administrator

**Activity Details**

- Time line — Displays recorded activity that occurred during the session in the pane to the left of
  the player. By default this time line will include keystroke activity.

## Replay Viewer for Website Host Sessions

The Replay Viewer window for Website host sessions is applicable only to Website hosts.

![Replay Viewer window for a Website host session](/images/privilegesecure/4.2/accessmanagement/admin/dashboard/window/replayviewerwebsite.webp)

The Replay Viewer for Website Host Sessions window has the following features:

**Play options**

- Control buttons — Play or pause the recording
- Playback bar — Click to jump to a specific place in the recording
- Sound icon — If available, click to adjust sound volume
- Full Screen icon — Click to open the player in full screen or return to window size
- Playback speed — Select Playback speed from the Options menu to adjust player speed
- Picture in picture — Select Picture in picture from the Options menu to enable feature

**Recording Details**

- User— Displays the account used to log onto the resource

    - logged on to — Displays the name of the resource
    - using — Displays the name of the resource the session connected from

- Activity — Displays the name of the activity
- Proxy Session Started — Indicates when the activity started. This refers to when the activity’s
  actions were executed and not when the user was logged on to the resource.
- Ended — Indicates when the activity ended.
- Duration — Indicates how long the Activity ran for until it either reached its scheduled end time
  or was manually canceled by the user or an Privilege Secure administrator
