---
title: "Permissions for Qumulo Auditing"
description: "Permissions for Qumulo Auditing"
sidebar_position: 30
---

# Permissions for Qumulo Auditing

Before you start creating a monitoring plan to audit your Qumulo or Synology file servers, plan for
the account that will be used for data collection – it should meet the requirements listed below.
Then you will provide this account in the monitoring plan wizard (or monitored item settings).

Starting with version 9.96, you can use group Managed Service Accounts (gMSA) as data collecting
accounts.

See the [Use Group Managed Service Account (gMSA)](/docs/auditor/10.7/requirements/gmsa.md) topic and the
[Group Managed Service Accounts Overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)
Microsoft article for additional information.

These group Managed Service Accounts should meet the related requirements, as listed below.

**On the target server:**

1. The account requires Read share permission on the audited shared folders.
2. The account requires Read NTFS permission on all objects in the audited folders.
3. The account requires the following permissins on Qumulo Cluster:
   - **FILE_READ_ACCESS**: Provides read access to all files regardless of permissions
   - **FS_ATTRIBUTES_READ**: Read file system statistics
   - **FS_SETTINGS_READ**: View file system permissions settings
   - **SMB_SHARE_READ**: View configuration of SMB shares and SMB server settings

To assign permissions from point 3 to the account:
- In the Qumulo web UI, select "_Cluster -> Role Management_".
- Click the "_Create Role_" button.
- Enter the role name "_Netwrix_role_".
- Select the necessary permissions from the list, then click Save.
- Find the role "_Netwrix_role_" in the role list, click the "_Add Member_" button.
- Add the account to the role.
