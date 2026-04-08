---
title: "File System Lockdown"
description: "File System Lockdown Event Type"
sidebar_position: 120
---

# File System Lockdown Event Type

Based on policy rules, the File System Lockdown event type can prevent file activity on selected
files, such as create/read/write/delete/rename or security descriptor changes done via NTFS or VSS
access. An event is generated for each blocked activity.

The event filters for the File System Lockdown event type are:

- File System
- Additional Agents
- AD Perpetrator
- Rule Preview

![Policy window - File System Lockdown Event Type](/images/threatprevention/8.0/admin/policies/eventtype/filesystemlockdown_1.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::warning
Lockdown/blocking policies with blank filters result in everything being locked down or
blocked.
:::


It is necessary to select paths/collections to be locked down on the File System filter. The policy
will lockdown the path/collection from the SI Agent used to select it for the filter which is
indicated in the parenthesis after the path/collection. The path/collection can be locked down by
other SI Agents by selecting them on the **Additional Agents** filter.

If no path is provided, an error message displays when the analytic policy is enabled: The policy
must have at least one path to monitor defined.

Example:

- File System filter – Paths identified:

  - C:\Documents and Settings (EXAMPLE\server1)
  - C:\Users\All Users (EXAMPLE\server2)

The above configuration in a policy results in the SI Agent on server1 locking down only
C:\Documents and Settings folder and the SI Agent on server2 locking down only C:\Users\All Users
folder.

- File System filter – Paths identified:

  - C:\Documents and Settings (EXAMPLE\server1)
  - C:\Users\All Users (EXAMPLE\server2)

- Additional Agents filter – Agents selected:

  - EXAMPLE\server1
  - EXAMPLE\server3

By adding the SI Agents on server1 and server3 in the Additional Agents filter, then server1 and
server3 lockdown both folder paths, but server2 will only lockdown the C:\Users\All Users folder.

Event data collected by the policies with this event type are also available for consumption by
Netwrix Access Analyzer (formerly Enterprise Auditor) if the File System Enterprise Auditor Event
Type is used by the same enabled policy.

## File System Filter

Use the File System filter for lockdown to select the types of file system events to be locked down
by the policy. It is also where the policy is scoped to only lockdown specific file system paths or
to exclude specific file system paths from being locked down.

![Policy window - File System filter for lockdown](/images/threatprevention/8.0/admin/policies/eventtype/filesystemlockdown.webp)

**Access Operations area**

In the Access Operations area, check the **All** box at the top to include all operations or select
specific operations:

- Create
- Read
- Write
- Delete
- Rename

**Permissions area**

In the Permissions area, select the following option to block changes to the ACL or DACL:

- Security Descriptor

**I/O Type area**

In the I/O Type area, check the **All** box at the top to include all types or select specific
types:

- Native File System – For scoping to NTFS and NAS native activity

  - Applies to all Access Operations

- Shadow Copy (VSS) – For scoping to Shadow Copy (A.K.A. Volume Snapshot Service, Volume Shadow Copy
  Service, or VSS)

  - Only applies to Read and Create Access Operations

**Paths and Path Collections areas**

The Paths section defines the top level folder or individual files for lockdown. Use the buttons in
the Paths and Path Collections areas to edit the lists.

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

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific
security principals committing changes or to exclude specific security principals committing changes
from being locked down.

![AD Perpetrator Protect filter](/images/threatprevention/8.0/admin/policies/eventtype/adperpetratorprotect.webp)

Select the **Block** or **Allow** option button and then edit the list.

:::note
For the [Password Enforcement Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md), selecting **Allow**
means that this policy will not validate the new passwords for the accounts listed here. Selecting
**Block** means that this policy will validate the new passwords for the accounts listed here.
:::


Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

- Perpetrators area – The Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/perpetrators.md).
- Collections of Perpetrators area - The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used
for troubleshooting.

![Event Type - Rule Preview filter](/images/threatprevention/8.0/admin/policies/eventtype/rulepreview.webp)

The text displayed represents the rules created based on the policy’s selected filters. Each row is
a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple
rows so that all of it is visible.
