---
title: "File System Enterprise Auditor"
description: "File System Enterprise Auditor Event Type"
sidebar_position: 125
---

# File System Enterprise Auditor Event Type

The File System Enterprise Auditor event type is used to send File System activity to Netwrix Access
Analyzer (formerly Enterprise Auditor).

The event filters for the File System Enterprise Auditor event type are:

- File System Enterprise Auditor
- File System Agents
- Processes and Configuration
- Perpetrators to Exclude

![Policy window - File System Enterprise Auditor Event Type](/images/threatprevention/7.5/admin/policies/eventtype/filesystemaccessanalyzer.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

This event type is specifically designed to capture Windows file system activity events for
consumption by Netwrix Access Analyzer (formerly Enterprise Auditor), formerly StealthAUDIT.

These events are not captured in the Threat Prevention database, but are collected in a data file
that can be read by the File System collection. See the File System Solution topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
information on this collection component.

Event data collected by the policies with either the
[File System Changes Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/filesystemchanges/filesystemchanges.md) or the
[File System Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/filesystemlockdown.md) are also available for consumption by
Netwrix Access Analyzer (formerly Enterprise Auditor) if the File System Enterprise Auditor event
type is used by the same policy.

## File System Enterprise Auditor Filter

Use the File System Enterprise Auditor filter to set the scope of the policy to only monitor
specific file system paths or to exclude specific file system paths from being monitored.

![Policy window - File System Enterprise Auditor filter](/images/threatprevention/7.5/admin/policies/eventtype/filesystemaccessanalyzer_1.webp)

The Include Paths section defines the top level folder or individual files for monitoring. Use the
Exclude Paths section to refine and remove any child items from being monitored. Any files or
folders to be excluded need to be a subset of a folder identified in the Include Paths section. This
is also where the NAS device paths are added.

Use the buttons in the Include Paths, Include Collections, Exclude Paths, and Exclude Collections
areas to edit the lists.

- The Path **Add** (+) button opens the
  [Select File System Objects Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/selectfilesystemobjects.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


**Sub Folder**

![Paths filter - Sub Folder checkbox](/images/threatprevention/7.5/admin/policies/eventtype/subfolder.webp)

When paths are added, a Sub-Folder checkbox displays. If checked, the filter is applied to the
parent and all child content (files and folders). If unchecked, the filter is only applied to the
listed folder and its first-level contents.

## File System Agents Filter

Use the File System Agents filter to set the scope of the policy to specific Agents and/or domains.

![Policy window - File System Agents filter](/images/threatprevention/7.5/admin/policies/eventtype/filesystemagents.webp)

The Agents/Domains list on the left displays available Agents and domains. The Selected
Agents/Domains list on the right displays Agents and domains included in the policy.

- Use the **Refresh** button to update the lists.
- Use the arrow buttons to move individual Agents and/or domains between the lists.

  - The single arrow buttons will move the selected item to the other list.
  - The double arrows will move all items to the other list.

:::note
There is no impact if a selected path does not exist on the server where an Agent resides.
:::


When a domain is added to the Selected Agents\Domains list, all Agents deployed in that domain are
included in the policy. If a domain is specified, then any Agent later installed in that domain is
also included in this policy.

:::note
There must be at least one Agent in the Selected Agents/Domains list for policies using
the File System Enterprise Auditor Event Type.
:::


## Processes and Configuration Filter

Use the Processes and Configuration filter to set the scope of the policy to include Read operations
and exclude specific processes from being monitored. You can also set the number of days to retain
the activity logs.

![Policy window - Processes and Configuration filter](/images/threatprevention/7.5/admin/policies/eventtype/processesandconfiguration.webp)

- The **Record Read Operations** checkbox is checked by default. To configure the policy to ignore
  read operations, uncheck this option.
- In the [Number] **Days to Retain Log** box, specify a number to indicate the number of days the
  logs remain before Threat Prevention deletes them.
- In the Exclude Processes area, specify any processes that should be excluded from being monitored
  by this policy. Type the process in the Exclude Processes textbox. You must enter a process name
  exactly as is; for example, as it appears on the Details tab of Windows Task Manager. For example,
  to exclude the Windows Explorer actions like opening and closing of files, enter ‘explorer.exe’ in
  the textbox.

## Perpetrators to Exclude Filter

Use the Perpetrators to Exclude filter to exclude specific security principals committing changes
from being monitored.

![Policy window - Perpetrators to Exclude filter](/images/threatprevention/7.5/admin/policies/eventtype/perpetratorstoexclude.webp)

Use the buttons above the Exclude Perpetrators and Exclude Collections areas to edit the lists.

- The Perpetrators Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/perpetrators.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.
