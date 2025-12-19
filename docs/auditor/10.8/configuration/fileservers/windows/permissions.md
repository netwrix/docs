---
title: "Permissions for Windows File Server Auditing"
description: "Permissions for Windows File Server Auditing"
sidebar_position: 70
---

# Permissions for Windows File Server Auditing

Before creating a monitoring plan to audit your Windows file servers, plan for the account that will
be used for data collection . This account should meet the requirements listed below. You will
provide this account in the monitoring plan wizard or monitored item settings.

Data Collection Accounts should meet the following policies and permissions:

- Data collecting account on the target server must be a member of the local Administrators group.
- The **Manage auditing and security log** and Backup files and directories policies must be defined
  for this account. See the
  [Permissions for Active Directory Auditing](/docs/auditor/10_8/configuration/activedirectory/permissions#configure-the-manage-auditing-and-security-log-policy) and topics for
  additional more information.
- The **Read** share permission on the audited shared folders.
- The Read NTFS permission on all objects in the audited folders.

## Considerations for gMSA Account

You can use group Managed Service Accounts (gMSA) as data collecting accounts.

**NOTE:** On the Netwrix Auditor Server, the gMSA account must be a member of the local
Administrators group.

For more information on gMSA, see the following:

- [Use Group Managed Service Account (gMSA)](/docs/auditor/10.8/requirements/gmsa.md)

- Microsoft article:
  [Group Managed Service Accounts Overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)
