---
title: "SSH client settings reference"
description: "Look up the timing, retry, and log settings for the SSH client that Privilege Secure uses to run actions on managed devices."
sidebar_position: 55
---

# SSH client settings reference

Privilege Secure runs actions on managed devices, such as scans and password rotations, through an SSH client. The Action Service and the Host Scan Service start this client. Its settings are in `sbpam_sshclient.json`, and its log settings are in `sbpam_log.json`.

## Locate the settings file

The default location is:

```text
C:\Program Files\Stealthbits\PAM\ActionServiceWorker\sbpam_sshclient.json
```

Edit the file at its default location on every server that runs an Action Service or a Host Scan Service. The file is in the program folder, so an upgrade can replace it. Keep a copy of your edits. To change the SSH algorithms, see [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md).

## Timing and retry settings

These settings are in the `DefaultConfig` section. The defaults come from the 26.07.3 file.

| Setting | Default | What it controls |
| --- | --- | --- |
| `HungTimerSecs` | `180` | Seconds without any progress before the client aborts the action |
| `StalledTimerSecs` | `30` | Seconds without output before the client tries a recovery, such as sending a line break |
| `CommandTimerSecs` | `2` | Seconds that one command can take before the client treats it as slow |
| `CommitTimerSecs` | `90` | Seconds allowed for a PAN-OS commit |
| `MaxRetry` | `2` | Connection attempts for a dial or an API call |
| `TransientMaxRetry` | `5` | Extra connection attempts when the first failure looks like a slow authentication server |
| `GlobalTimeoutSecs` | `300` | Total seconds allowed for one action, after which the client records a timeout and stops |
| `DialTimeoutSecs` | `15` | Seconds allowed for the initial TCP and SSH handshake |
| `KeepaliveIntervalSecs` | `30` | Seconds between keepalive messages on an idle session |
| `PanosPollIntervalSecs` | `20` | Seconds between PAN-OS activation polls |
| `PanosPollMaxAttempts` | `9` | Number of PAN-OS activation poll attempts |
| `PanosCommitPollIntervalSecs` | `3` | Seconds between PAN-OS commit status polls |
| `PanosCommitPollMaxAttempts` | `60` | Number of PAN-OS commit status poll attempts |
| `SshLoginPollIntervalSecs` | `5` | Seconds between sign-in polls that confirm a new password works |
| `SshLoginPollMaxAttempts` | `6` | Number of sign-in poll attempts |
| `PromptList` | (six regular expressions) | The prompt patterns that tell the client a command finished |

Most of these values suit a typical network. Change `DialTimeoutSecs` when an unreachable host should fail faster, or when a slow authentication server needs longer to answer. Change `GlobalTimeoutSecs` when a long-running plan needs more than five minutes.

The Action Service and Host Scan Service start a new SSH client for each command plan, so a change to `sbpam_sshclient.json` needs no service restart. New actions use the saved settings.

## Log settings

The SSH client writes to `PAM-SSHClient.log`. Its settings are in `sbpam_log.json`, in the same folder as the SSH client file.

| Setting | Default | What it controls |
| --- | --- | --- |
| `Filename` | `%PROGRAMDATA%/Stealthbits/PAM/Log/PAM-SSHClient.log` | The log file |
| `MaxSize` | `100` | The size in MB at which the client rolls the log |
| `MaxAge` | `30` | The number of days the client keeps a rolled log |
| `MaxBackups` | `10` | The number of rolled logs the client keeps |
| `LogLevel` | `Info` | The lowest level the client writes |

Raise `LogLevel` to `Debug` while you troubleshoot a plan, then set it back. Each new SSH client reads the file when it starts, so a change needs no service restart.

The client redacts a value that follows a sensitive tag or the word `password` in a logged command, and writes `********` in its place. A secret that doesn't follow one of those words can still appear in the log. Check the log before you share it.

## Related topics

- [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md)
- [Device account and session actions](/docs/privilegesecure/26.07/resources/platforms/device-actions.md)
- [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md)