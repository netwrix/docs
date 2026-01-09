---
title: "File System Changes"
description: "File System Changes Event Type"
sidebar_position: 110
---

# File System Changes Event Type

The File System Changes event type generates events for selected actions on selected files, such as
create/read/write/delete/rename, attribute/permission changes, and share operations for NTFS/VSS.

The event filters for the File System Changes event type are:

- File System
- Paths
- Additional Agents
- AD Perpetrator
- Success

![Policy window - File System Changes Event Type](/images/threatprevention/8.0/admin/policies/eventtype/filesystemchanges.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

You must select paths/collections to be included or excluded on the **Paths** filter within the
target file system. The policy monitors the path/collection from the Agent used to select it; the
Agent is indicated in the parenthesis after the path/collection. The path/collection can be
monitored by other Agents that you can select on the Additional Agents filter.

:::note
Any files or folders to be excluded need to be a subset of a folder identified in the
Include Paths section.
:::


If no path is provided, an error message is displayed when the policy is enabled: The policy must
have at least one path defined.

Example:

- Paths filter – Paths identified:

  - C:\Documents and Settings (EXAMPLE\server1)
  - C:\Users\All Users (EXAMPLE\server2)

The above configuration in a policy results in the Agent on server1 monitoring only the C:\Documents
and Settings folder and the Agent on server2 monitoring only the C:\Users\All Users folder.

- Paths filter – Paths identified:

  - C:\Documents and Settings (EXAMPLE\server1)
  - C:\Users\All Users (EXAMPLE\server2)

- Additional Agents filter – Agents selected:

  - EXAMPLE\server1
  - EXAMPLE\server3

By adding the Agents on server1 and server3 in the Additional Agents filter, server1 and server3
will monitor both folder paths, but server2 still only monitors the C:\Users\All Users folder.

Event data collected by the policies with this event type are also available for consumption by
Netwrix Access Analyzer (formerly Enterprise Auditor) if the File System Enterprise Auditor Event
Type is used by the same enabled policy.

## File System Filter

Use the File System filter for monitoring to select the types of file system events to be monitored
by the policy.

![Policy window - File System filter for monitoring](/images/threatprevention/8.0/admin/policies/eventtype/filesystem.webp)

**Access Operations area**

In the Access Operations area, check the **All** box at the top to include all operations or select
specific operations:

- Create
- Read
- Write
- Delete
- Rename

**Property Operations area**

In the Property Operations area, check the **All** box at the top to include all operations or
select specific operations:

- Attribute
- Permission (DACL)
- Audit (SACL)
- Owner

**Share Operations area**

In the Share Operations area, check the **All** box at the top to include all operations or select
specific operations:

- Add
- Delete
- Update
- Permission change

**I/O Type area**

In the I/O Type area, check the **All** box at the top to include all types or select specific
types:

- Native File System – For scoping to NTFS and NAS native activity

  - Applies to all Access Operations

- Shadow Copy (VSS) – For scoping to Shadow Copy (A.K.A. Volume Snapshot Service, Volume Shadow Copy
  Service, or VSS)

  - Only applies to Read and Create Access Operations

**Wildcards area**

The **Wildcards** boxes are to scope the policy using an asterisk (\*) or question mark (?) as the
wildcard. Files that match the wildcard in the include box are monitored. Files that match the
wildcard in the exclude box are ignored.

:::tip
Remember, adding an include filter scopes the policy to monitor only matching files. Adding an
exclude filter scopes the policy to monitor all files that do not match. If both include and exclude
filters are applied to a single policy, the exclude filter takes precedence. If the boxes are left
blank, all files are monitored according to all the policy filter selections.
:::


**Enable Automatic Lockdown option**

Adding a wildcard to the policy allows the policy to use the **Enable Automatic Lockdown** option.
When checked, perpetrators of this policy are locked down, i.e. denied access to files and folders
monitored by this policy. When this option is checked, no other event types can be added to the
policy. If other event types were previously assigned to the policy, the option is grayed-out.

If the **Enable Automatic Lockdown** option is enabled, the File System Lockdown Event Type is added
to the policy when the configuration is saved. The perpetrator of the monitored event is added to
the File System Lockdown event type’s AD Perpetrator filter as a blocked security principal. If the
perpetrator should be granted access to files and folders monitored by this policy, remove them from
the blocked perpetrators list on the File System Lockdown event type’s AD Perpetrator filter and add
the perpetrator to the Exclude Perpetrator’s list on the File System Changes event type’s AD
Perpetrator filter.

## Paths Filter

Use the Paths filter to set the scope of the policy to only monitor specific file system paths or to
exclude specific file system paths from being monitored.

![Policy window - Paths filter](/images/threatprevention/8.0/admin/policies/eventtype/paths.webp)

The Include Paths section defines the top level folder or individual files for monitoring. Use the
Exclude Paths section to refine and remove any child items from being monitored. Any files or
folders to be excluded need to be a subset of a folder identified in the Include Paths section. This
is also where the NAS device paths are added.

Use the buttons in the Include Paths, Include Collections, Exclude Paths, and Exclude Collections
areas to edit the lists.

- The Path **Add** (+) button opens the
  [Select File System Objects Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/selectfilesystemobjects.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


**Sub Folder**

![Paths filter - Sub Folder checkbox](/images/threatprevention/8.0/admin/policies/eventtype/subfolder.webp)

When paths are added, a Sub-Folder checkbox displays. If checked, the filter is applied to the
parent and all child content (files and folders). If unchecked, the filter is only applied to the
listed folder and its first-level contents.

## Additional Agents Filter

Use the Additional Agents filter to set the scope of the policy to specific Agents and/or domains.

![Policy window - Additional Agents filter](/images/threatprevention/8.0/admin/policies/eventtype/additionalagents.webp)

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

## AD Perpetrator Filter

Use the AD Perpetrator filter for monitoring to set the scope of the policy to only monitor specific
security principals committing changes or to exclude specific security principals committing changes
from being monitored.

![Event Type - AD Perpetrator Monitoring filter](/images/threatprevention/8.0/admin/policies/eventtype/adperpetratormonitoring.webp)

Use the buttons in the Include Perpetrators, Include Collections, Exclude Perpetrators, and Exclude
Collections areas to edit the lists.

- The Perpetrators Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/perpetrators.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


**Sub Tree**

![Sub-Tree option in event type filters](/images/threatprevention/8.0/admin/policies/eventtype/subtree.webp)

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent
and all child contexts. Uncheck it to apply the filter to the listed context only.

## Success Filter

The Success filter is where the policy is set to only monitor successful events, failed events, or
both.

![Event Type – Success filter](/images/threatprevention/8.0/admin/policies/eventtype/success.webp)

Select the radio button for the desired monitoring filter:

- Success – Only monitors successful events
- Failure – Only monitors failed events
- Both Success and Failure – Monitors all events that are within the scope of the respective filters
  for the event type
