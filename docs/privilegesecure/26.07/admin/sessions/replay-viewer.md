---
title: "Replay a recorded session"
description: "Play back a recorded RDP, SSH, or website session, and learn which controls and details the Replay Viewer shows."
sidebar_position: 50
---

# Replay a recorded session

The **Replay Viewer** plays back a recorded session. Use it to review what a user did after the session ended.

## Before you begin

A session has a recording only when the [connection profile](/docs/privilegesecure/26_07/configuration/access-policies/connection-profiles) on its access policy has **Record Proxy Session** selected. See [Session recording](/docs/privilegesecure/26_07/admin/sessions/session-recording) for what is recorded and for how long recordings are kept.

These people can replay sessions:

- Administrators.
- Users whose role includes the **View Recordings** permission, which is available in the Auditors permission list. The **Users** and **Resources** scope tabs of an Auditors role limit which recordings the user can see.

Users of the Remote Access Gateway portal can't replay recordings. View recordings in the console.

## Open a replay

1. Open the **Historical** tile. See [Review historical sessions](/docs/privilegesecure/26_07/admin/sessions/historical-sessions).
2. Find the session. Use the **Recording data** filter to narrow the list.
3. Select the recording to open the Replay Viewer.

{/* TODO verify: the control that opens a replay from a Historical row, and what the Recording data filter lists. In the lab, expanding a Completed row showed only a completion message. */}

{/* TODO screenshot: Historical sessions dashboard showing a session that has a recording */}

A session can have several recordings. Select the one you want.

For example, to review what an administrator typed on `<server-name>` yesterday, filter **Recording data** for the command text, expand the row, and select the recording. Playback jumps to the first match.

## Viewer types

| Viewer | Resources |
|---|---|
| RDP | Windows resources and Active Directory domains |
| SSH | Linux and Cisco resources |
| Website | Websites and Microsoft Entra ID |

{/* TODO verify: resource types per viewer */}

{/* TODO screenshot: Replay Viewer for an RDP session */}

### Controls for RDP and SSH replays

| Control | Use |
|---|---|
| **Play**, **Pause**, **Rewind**, **Forward**, **Replay** | Start, stop, or move through the recording |
| **Playback** | Select a point on the bar to jump to that place in the recording |
| **Speed** | Change the playback speed |

### Controls for website replays

| Control | Use |
|---|---|
| Play and pause | Start or stop the recording |
| Playback bar | Select a point to jump to that place |
| Sound icon | Change the volume, when the recording has audio |
| Full screen icon | Open the player in full screen, or return to window size |
| **Options** menu | Change the playback speed, or turn on picture in picture |

{/* TODO verify: the website replay controls against a 26.07 website recording. The list comes from the 26.03 documentation. */}

## Recording details

| Detail | Meaning |
|---|---|
| **User** | The account used to sign in to the resource |
| **logged on to** | The resource |
| **using** | The computer the session connected from |
| **Activity** | The name of the activity |
| **Proxy Session Started** | When the activity's actions began. This isn't when the user signed in to the resource. |
| **Ended** | When the activity ended |
| **Duration** | How long the activity ran, until it reached its scheduled end or a user or administrator canceled it |

RDP and SSH replays also show a timeline of recorded events in the pane to the left of the player. The timeline starts with "Recording started." and includes keystrokes. When the Remote Desktop Monitor service runs on the target host, the RDP timeline also lists Windows events. See [Install the Remote Desktop Monitor](/docs/privilegesecure/26_07/install/rdp-monitor).

:::note
When a user types at a password prompt during an SSH session, the replay hides the keystrokes.
:::

## Related topics

- [Watch, lock, or terminate a live session](/docs/privilegesecure/26_07/admin/sessions/live-session-viewer)
- [Session recording](/docs/privilegesecure/26_07/admin/sessions/session-recording)
- [View session logs](/docs/privilegesecure/26_07/admin/sessions/session-logs)
