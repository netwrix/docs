---
title: "Proxy settings reference"
description: "Look up the Privilege Secure SSH and RDP proxy settings, including listen ports 4422 and 4489, connection string separators, and recording limits."
sidebar_position: 60
---

# Proxy settings reference

The Proxy Service reads its settings from JSON files on the proxy server. This page lists the files, the settings you are most likely to change, and their defaults. It also says whether you must restart the service after a change.

## Locate the settings files

The Proxy Service data folder is:

```text
C:\ProgramData\Stealthbits\PAM\ProxyService
```

The service reads these files:

| File | Holds |
| --- | --- |
| `sbpam_ssh.json` | SSH proxy settings |
| `sbpam.rdp.json` | RDP proxy settings. The installer doesn't create the file. The RDP proxy uses built-in defaults until you create it. |
| `sbpam_api.json` | How the proxy calls the Privilege Secure API, including `insecureskipverify` |
| `sbpam_log.json` | Proxy log settings |
| `sbpam.profile.json` | The features the proxy enables, for example `["Rest", "Registry", "RDP", "SSH"]` |
| `sbpam_node.json` | The names and addresses the node advertises |
| `appsettings.user.json` | The REST URL and the refresh token that bind the proxy to the application server |

An upgrade keeps your copies of these files. The Proxy Service watches these files and reloads one when you save it. See [Apply a change](#apply-a-change).

## Connection string settings

These settings control how the proxy splits the connection string that a user sends as the user name. They are in `sbpam_api.json`.

| Setting | Default | Effect |
| --- | --- | --- |
| `DirectConnectSeparator` | `+@` | The characters that separate the parts of the connection string. The proxy splits on whichever character occurs more often in the string. |
| `TargetUserSeparator` | `:` | Separates your user name from the alternate target user name |
| `SpaceReplacement` | `_` | Replaces spaces in the activity name |

For the connection string format, see [Connect with your own RDP or SSH client](/docs/privilegesecure/26.07/user-guide/connect-own-client.md).

## SSH proxy settings

These settings are in `sbpam_ssh.json`.

| Setting | Default | Effect |
| --- | --- | --- |
| `ListenAddress` | `0.0.0.0:4422` | The address and port that the SSH proxy listens on |
| `Banner` | (a Netwrix banner) | The text that the proxy shows before the sign-in prompt |
| `TwoFactorSeparator` | `,` | Separates the password from the multi-factor authentication (MFA) code. The proxy splits on the last one. |
| `DisconnectSession` | `true` | Ends the session when the access policy's time runs out |
| `StripDomainPrefix` | `false` | Removes the domain prefix from the user name before the proxy signs in to the target |
| `InsecureSkipVerify` | `false` | Skips the certificate check when the proxy calls the Privilege Secure API |
| `ActivityParameters` | `false` | Lets the activity use parameters from the connection string |
| `RecordExec` | `false` | Records commands that run without an interactive shell |
| `RecordSFTP` | `false` | Records SFTP file operations |
| `RecordLimit` | `65536` | Caps the recorded size, in bytes, of a single channel |
| `ConnectTimeout` | `30s` | How long the proxy waits for the connection to the Privilege Secure API |
| `ExtendKey` | `Ctrl+X` | The key that a user presses to extend the session |
| `ExtendNotification` | (text with `{{.Remaining}}` and `{{.ExtendKey}}`) | The message that the proxy shows before the session ends |
| `EndNotification` | `Your session will expire in {{.Remaining}}` | The message that the proxy shows when the session ends |
| `ExecExcludes` | `[]` | Commands that the proxy doesn't record when `RecordExec` is on |
| `OverridePort` | `[]` | Per-resource port overrides |
| `Multiplex` | `false` | Lets a user pick from several resources in one SSH connection |
| `MultiplexActivity` | (empty) | The activity that the multiplex menu uses |
| `ServerSettings.MaxAuthTries` | `3` | The sign-in attempts the target allows |

`sbpam_ssh.json` also holds the `Replay.RequestFilter`, the `ServerSettings` key exchange, cipher, and MAC lists, and the `ClientSettings` host key, key exchange, cipher, and MAC lists. To change the algorithms, see [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md).

## RDP proxy settings

These settings are in `sbpam.rdp.json`. The installer doesn't create the file, so the RDP proxy uses the defaults in the following table until you create the file and set a value.

| Setting | Default | Effect |
| --- | --- | --- |
| `ListenAddress` | `0.0.0.0:4489` | The address and port that the RDP proxy listens on |
| `TwoFactorSeparator` | `,` | Separates the password from the MFA code |
| `StartupTimeout` | `30s` | How long the proxy waits for the RDP connection to start |
| `ConnectDelay` | `[0,2,2,2,2,2,5,5]s` | The delay before each connection retry |
| `AutoReconnectionEnabled` | `true` | Reconnects the session when the connection drops |
| `AutoReconnectMaxRetries` | `30` | The number of times the proxy retries the connection |
| `DisconnectSession` | `true` | Ends the session when the access policy's time runs out |
| `ClipboardCapabilities` | `0x001e` | The clipboard formats the proxy accepts |
| `EnableMultiMon` | `false` | Lets the session use more than one monitor |
| `LimitColorDepth` | `false` | Limits the color depth to 16 bits per pixel |
| `OverlayProcessDelay` | `5s` | How long the proxy waits before it draws an overlay |

## Session overlays in RDP

The RDP proxy draws four overlays over the session. Each one has its own settings under `Overlay` in `sbpam.rdp.json`.

| Overlay | When it appears |
| --- | --- |
| `countdown` | Shows the time left before the session ends |
| `recording` | Shows that the session is being recorded |
| `locked` | Shows that an administrator locked the session |
| `extension` | Shows that the session was extended |

## Proxy log settings

These settings are in `sbpam_log.json`.

| Setting | Default | Effect |
| --- | --- | --- |
| Log file | `PAM-Proxy.log` | The proxy log, in `C:\ProgramData\Stealthbits\PAM\Log` |
| Level | `error` | The lowest level the proxy writes to the log |
| File size limit | 104857600 bytes (100 MB) | The size at which the proxy rolls the log |
| Retained files | `10` | The number of rolled logs the proxy keeps |
| Rolling interval | `Day` | The proxy starts a new log each day |

A failed sign-in writes an entry to `PAM-Proxy.log`. Raise the level to `info` or `debug` while you troubleshoot, then set it back to reduce the log size.

## Apply a change

The Proxy Service watches its JSON files. When you save a change to a file such as `sbpam_ssh.json`, `sbpam.rdp.json`, `sbpam_api.json`, or `sbpam_log.json`, the service reloads the file and writes a line to `PAM-Proxy.log`. The new settings apply to sessions that start after the change. You don't restart the service.

To confirm the port that the SSH proxy listens on, run `netstat -ano` and look for the address in `ListenAddress`.

## Related topics

- [Connect with your own RDP or SSH client](/docs/privilegesecure/26.07/user-guide/connect-own-client.md)
- [Session recording](/docs/privilegesecure/26.07/admin/sessions/session-recording.md)
- [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md)
- [Install a proxy service on another server](/docs/privilegesecure/26.07/install/remote-proxy.md)
- [Replace the proxy RDP certificate](/docs/privilegesecure/26.07/configuration/certificates.md#replace-the-proxy-rdp-certificate)