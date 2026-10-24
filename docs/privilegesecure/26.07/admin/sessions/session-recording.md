---
title: "Session recording"
description: "Learn what Privilege Secure records during RDP, SSH, and website sessions, where recordings are stored, and how long they are kept."
sidebar_position: 70
---

# Session recording

Privilege Secure can record the sessions that users start through an access policy. Administrators and auditors watch the recordings live or replay them later. See [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md) and [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md).

## Recording settings

The connection profile on the access policy controls recording. These settings are in the **Proxy** section of the profile, and the website audio setting is in the **Website** section. See [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md).

| Setting | Effect |
|---|---|
| **Record Proxy Session** | Records the session so that an administrator can watch it live or review it later |
| **Record Keystrokes and Metadata** | Records keystrokes and metadata. When you clear it, the session video is still recorded. |
| **Record Session Audio** | Records the computer audio during the session |

## What is recorded

| Session type | What the recording holds |
|---|---|
| RDP | The session video. Keystrokes and metadata are included when **Record Keystrokes and Metadata** is on. Windows events are included when the Remote Desktop Monitor service runs on the target host. |
| SSH | The input and output of the session. Keystrokes are included when **Record Keystrokes and Metadata** is on. |
| Website | A video of the browser session, captured by the browser extension. Audio is included when **Record Session Audio** is on. |

For SSH, the proxy can also record commands that run without an interactive shell and SFTP file operations.

{/* TODO verify: whether recording of SSH commands run without a shell and of SFTP operations is on or off by default, and where a customer turns it on. */}

When a user types at a password prompt in an SSH session, the recording hides the keystrokes.

To capture Windows events in RDP recordings, install the Remote Desktop Monitor on the target hosts. See [Install the Remote Desktop Monitor](/docs/privilegesecure/26.07/install/rdp-monitor.md).

## Where recordings are stored

The proxy service stores recordings on the proxy server, in the `iolog` folder under the proxy data folder. The default location is:

```text
C:\ProgramData\Stealthbits\PAM\ProxyService\iolog
```

Each proxy node stores the recordings of the sessions it handled. Protect this folder and include it in your backups. To move it, for example when the drive runs low on space, see the Knowledge Base article [Changing the Path Where Session Recordings Are Stored](/docs/kb/privilegesecure/session-management-and-recording/how-to-change-the-path-where-session-recordings-are-stored).

{/* TODO verify: that each proxy node keeps its own recordings in a multi-node deployment, and the backup and high availability behavior for recordings. */}

## Recording retention

Recordings stay on disk until you delete them or turn on log retention for recordings. In **System Settings**, the **Data Retention** panel has **Enable I/O Log Retention** and **I/O Log Retention Days**. The option is off by default and the default is 90 days. When you turn it on, Privilege Secure deletes recordings older than the number of days you set. Deletion removes the recordings and doesn't archive them.

{/* TODO verify: that the retention setting deletes recordings on each proxy node. The console stores the setting, and the proxy service reads it to delete recordings. */}

For all retention settings, see [Configure data retention](/docs/privilegesecure/26.07/configuration/system-settings/data-retention.md).

To stop keystroke and metadata logging for all sessions, or to delete existing recordings for a time window, see the Knowledge Base article [Disable Keystroke Logging](/docs/kb/privilegesecure/session-management-and-recording/disable-keystroke-logging). The article states the change doesn't affect existing recordings.

## Remote sessions in the browser

Users of the Remote Access Gateway portal start sessions in the browser. Recording and command restrictions still apply to these sessions. The portal doesn't offer replay, so view the recordings in the console.

## Related topics

- [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md)
- [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md)
