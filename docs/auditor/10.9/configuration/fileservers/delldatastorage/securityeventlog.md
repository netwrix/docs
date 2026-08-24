---
title: "Configure Security Event Log"
description: "Configure Event Log path, maximum size, and retention on Dell Data Storage devices"
sidebar_position: 20
---

# Configure Security Event Log

Configure the security event log path, maximum size, and retention on your Dell Data Storage device so that you don't lose audit data when the log fills. Configure the settings in Registry Editor, then verify them in the Computer Management console.

## Configure Event Log path, maximum size, and retention in Registry Editor

**Step 1 –** In the Dell **Web UI**, navigate to **Storage → File → File System** and click **+** to create a file system. Name it `events` and set its size to at least 4 GB. This file system stores the security log.

**Step 2 –** Confirm that the data collection account can read the share at `\\<file_server_name>\C$\events`.

**Step 3 –** On the computer that hosts Auditor Server, open **Registry Editor**: navigate
to **Start → Run** and type `regedit`.

**Step 4 –** Navigate to **File → Connect Network Registry** and specify `<file_server_name>`.

**Step 5 –** Navigate to **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security**.

**Step 6 –** Set the **File** value to `C:\events\security.evt`.

**Step 7 –** Set the **MaxSize** value to `ffff0000` (hexadecimal) or `4294901760` (decimal). Select the matching **Base** option in the **Edit DWORD Value** dialog before you enter the value.

**Step 8 –** Set the **Retention** value to `0` (hex or decimal). This configures the log to overwrite events as needed instead of retaining them.

## Verify Event Log settings in the Computer Management console

**Step 1 –** On the computer that hosts Auditor Server, open **Computer Management**: navigate
to **Start → Run** and type `compmgmt.msc /computer=<file_server_name>`, or right-click **Start** and select **Computer Management**.

**Step 2 –** Navigate to **System Tools → Event Viewer → Windows Logs**, then right-click **Security** and select **Properties**.

**Step 3 –** Confirm the following values: **Log name** shows `C:\events\security.evt`, **Maximum log size** shows `4,194,240 KB`, and **Overwrite events as needed** is selected. If any value doesn't match, correct it in **Registry Editor** and reopen this dialog.

:::note
The **Security Properties** dialog fields map to the following registry values:

| Security Properties field | Registry value |
|---|---|
| Log name | `File` |
| Maximum log size | `MaxSize` (`4,294,901,760 bytes = 4,194,240 KB`) |
| Overwrite events as needed | `Retention = 0` |

Registry Editor displays **Maximum log size** in bytes, while Security Properties displays it in KB. You can't change **Log name** from the **Security Properties** dialog — use **Registry Editor** instead.
:::
