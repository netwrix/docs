---
title: "Computer Auditing"
description: "Computer Auditing"
sidebar_position: 60
---

# Computer Auditing

Before adding a Computer source, plan for the account that will be used for data collection. You
will provide this account when adding the source.

Data Collection Accounts should meet the following policies and permissions:

- The \_**\_Manage auditing and security log\_\_**and Backup files and directories policies must be
  defined for this account. See the
  [Configure the Manage Auditing and Security Log Policy](/docs/1secure/admin/datacollection/activedirectoryauditing/manageauditingsecuritylog.md)
  and [Configure the Back up Files and Directories Policy](/docs/1secure/admin/datacollection/computer/backupfilesdirectories.md) topics for
  additional information.
- The **Read** share permission on the audited shared folders.
- The **Read** NTFS permission on all objects in the audited folders.

:::note
If you want to use network traffic compression, data collecting account on the target
server must be a member of the local Administrators group.
:::


You can also use group Managed Service Accounts (gMSA) as a data collecting account. For more
information on gMSA, see the following:

- [Using Group Managed Service Account (gMSA)](/docs/1secure/admin/datacollection/gmsa.md)

- Microsoft article:
  [Group Managed Service Accounts Overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)

On the **Netwrix Cloud Agent**'s host, the gMSA account must be a member of the local Administrators
group.
