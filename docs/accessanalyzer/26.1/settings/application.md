---
title: Application settings
description: Deployment-wide defaults for classification and Netwrix Activity Monitor on the Settings > Application tab, with each setting's default, range, and effect.
sidebar_position: 1
---

## What the Application tab holds

**Settings > Application** is where deployment-wide defaults live. There are two cards: **Classification** and **Netwrix Activity Monitor**. At the bottom of the Netwrix Activity Monitor card, Admins also see an **Enrollment token** panel. Admins can change everything on the tab. Viewers can open the tab and edit fields, but their saves fail with the message **Some settings weren't saved**.

![Application settings tab, full page](/images/accessanalyzer/26.1/settings/application-full.webp)

Each row is one setting. The row label is the setting's key, exactly as the following tables give it, with a one-line description underneath. Two badges can appear next to the key:

- **Overridden** means the saved value differs from the shipped default.
- **Modified** means you've edited the value but haven't saved yet.

Number fields show their allowed range as a hint under the field. Any row whose value differs from the shipped default also gets a reset icon; see [Reset a setting to its default](#reset-a-setting-to-its-default).

As soon as you edit a row, a bar appears at the bottom of the page. It counts your edits (**1 unsaved change**, **3 unsaved changes**) or, if a value is invalid, names the field (**1 field has an invalid value:** followed by the key). You can't save while a field is invalid.

## Change a setting

1. Go to **Settings > Application**.
2. Edit the setting. For a number, enter the new value; for an extension list, see [Edit an extension list](#edit-an-extension-list).
3. Correct any field the bar flags as invalid.
4. Click **Save changes**, or press Ctrl+S (Cmd+S on a Mac).

A message confirms the result: **1 setting saved** or **3 settings saved**. If any value fails to save, the message reads **Some settings weren't saved**.

To drop every unsaved edit, click **Discard**. If you navigate away with unsaved edits, an **Unsaved changes** dialog asks "You have unsaved changes that will be lost if you leave. Are you sure you want to leave?" Click **Stay** to keep editing or **Leave** to drop the edits.

### Validation messages

| Message | Cause |
|---|---|
| **Value is required** | The field is empty. |
| **Must be a whole number** | The value has a decimal point or non-numeric characters. |
| **Must be between `{min}` and `{max}`** | The value is outside the setting's range. |

### Edit an extension list

The extension lists are chip editors: each extension is a separate chip in the field.

To add an extension:

1. Click the field.
2. Enter the extension, for example `.bak`.
3. Press Enter.

To remove an extension, click the remove icon on its chip, or press Backspace.

Pasting text separated by spaces, commas, or semicolons adds one chip per extension. The editor drops duplicates, ignoring case, so `.PDF` and `.pdf` count as the same entry.

### Reset a setting to its default

When a value differs from the shipped default, a reset icon appears on the row. Its tooltip reads **Reset to default**, followed by the default value in parentheses for number settings.

1. Click the reset icon on the row. The default value appears in the field. If the row shows **Overridden**, it also shows **Modified** until you save.
2. Click **Save changes**.

## Classification

These defaults govern how Sensitive data scans classify content. You can override one of them, the worker count, per scan; the rest apply everywhere.

| Setting | Default | Range | What it affects |
|---|---|---|---|
| `classification_workers_default` | 15 | 1–50 | Default number of concurrent classification workers per scan. Applies when a Sensitive data scan doesn't set its own **Workers** value. |
| `file_server_excluded_extensions` | See the default list | — | File extensions to skip when classifying File Server content. Matching is case-insensitive. An empty list excludes nothing. |
| `file_server_file_size_max_mb` | 10 | 1–100 | Maximum file size, in MB, to classify for File Server sources. Scans skip larger files. |
| `sharepoint_excluded_extensions` | See the default list | — | File extensions to skip when classifying SharePoint Online content. Matching is case-insensitive. |
| `sharepoint_file_size_max_mb` | 10 | 1–100 | Maximum file size, in MB, to classify for SharePoint Online sources. Scans skip larger files. |

A Sensitive data scan on a File Server source has its own **Workers** field (1–20), which shows 3 by default. If you leave it at 3, the scan uses `classification_workers_default`. If you change it, the scan saves your value and uses it instead of the global default. See [Scan types](../scans/scan-types.md).

The two extension lists ship with media, binaries, fonts, disk images, and similar files that rarely carry text worth classifying. The SharePoint Online list adds web-page formats on top of the File Server list.

<details>
<summary>Default value of `file_server_excluded_extensions`</summary>

```text
.aac .aiff .asd .avi .bat .bin .bmp .cab .cdf-ms .chm .cmd .com .cpl .cur .dib
.dll .dmg .dmp .drv .eot .exe .flac .flv .gfa .gif .giff .heic .heif .hlp .ico
.img .iso .jfi .jfif .jif .jpe .jpeg .jpg .lnk .m4a .m4v .mkv .mov .mp3 .mp4
.mpeg .mpg .msi .msp .otf .ova .ovf .pdb .png .qcow2 .scr .svn-base .sys .tif
.tiff .tmp .ttf .vdi .vhd .vhdx .vmdk .wav .wbk .webm .webp .wim .wma .wmv
.woff .woff2
```

</details>

<details>
<summary>Default value of `sharepoint_excluded_extensions`</summary>

Everything in the File Server list, plus:

```text
.asp .aspx .css .htm .html .url .xaml
```

</details>

## Netwrix Activity Monitor

These settings tune the listener that Netwrix Activity Monitor agents connect to. For the integration itself, see [Netwrix Activity Monitor](../integrations/netwrix-activity-monitor.md).

| Setting | Default | Range | What it affects |
|---|---|---|---|
| `activitymonitor_connection_timeout` | 900 | 5–3600 | Seconds of inactivity before the listener drops an idle Netwrix Activity Monitor client. |
| `activitymonitor_enrollment_ban_duration_seconds` | 10 | 5–300 | Seconds to ban a source IP after it presents an invalid enrollment code. |
| `activitymonitor_enrollment_first_message_timeout_seconds` | 10 | 5–60 | Seconds to wait for the first message from a newly connected Netwrix Activity Monitor agent. |
| `activitymonitor_max_message_size` | 16777216 | 65536–67108864 | Maximum size in bytes of a single Netwrix Activity Monitor message. The default is 16 MB. |

### Enrollment token

Only Admins see the **Enrollment token** panel. Click **Generate token** to issue a token. The token appears in a read-only field with a copy icon, followed by **Expires:** and the expiry time. A token is valid for 1 hour.

After the first token, the button reads **Generate new token**. Each new token invalidates the one before it, so give the current token to the person enrolling the agent before you generate another.

If the panel is disabled and shows **NAM listener certificate isn't configured on this server**, the Netwrix Activity Monitor (NAM) listener has no TLS certificate yet. [Netwrix Activity Monitor](../integrations/netwrix-activity-monitor.md) covers that setup and how the agent uses the token.

## When changes take effect

You don't need to restart anything. Services pick up new values within 5 minutes. Classification settings apply to Sensitive data scans that start after the services pick up the new value, which can take up to 5 minutes; a running scan keeps the values it started with. Netwrix Activity Monitor settings apply to connections opened after the change; Activity Monitor agents already connected keep their current session.
