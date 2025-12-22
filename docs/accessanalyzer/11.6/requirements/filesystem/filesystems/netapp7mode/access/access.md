---
title: "NetApp Data ONTAP 7-Mode Access & Sensitive Data Auditing Configuration"
description: "NetApp Data ONTAP 7-Mode Access & Sensitive Data Auditing Configuration"
sidebar_position: 10
---

# NetApp Data ONTAP 7-Mode Access & Sensitive Data Auditing Configuration

This topic provides instructions for configuring API calls and bypassing NTFS security for NetApp
Data ONTAP 7-Mode devices.

## Share Enumeration – API Calls for 7-Mode

To enumerate the shares on a NetApp Data ONTAP 7-Mode device, File System scans require a credential
provisioned with access to (at minimum) the following API calls:

```
login-http-admin
api-system-api-list
api-system-get-version
api-cifs-share-list-iter-*
```

If the query configuration option to “Exclude system shares” is deselected, the credential must also
have the ability to run the following command, which is also configuration-specific:

```
api-volume-list-info-iter-*
```

## Bypass NTFS Security for 7-Mode

In order to bypass NTFS, the credential needs to at least have the following permissions on the
NetApp device:

- Group membership in both of the following groups:

    - Power Users
    - Backup Operators

If the query configuration option to “Exclude system shares” is deselected, the credential must
have:

- Group membership in the local Administrators group

:::note
All NetApp groups are assigned an RID. Built-in NetApp groups such as Power Users and
Backup Operators are assigned specific RID values. On 7-Mode NetApp devices, system access checks
for a group are identified by the RID assigned to the group and not by the role it has. Therefore,
application’s ability to bypass access checks with the Power Users and Backup Operators group has
nothing to do with the power role or the backup role. Neither role is required. For example, the
built-in Power User group, even when stripped of all roles, still has more file system access
capabilities than any other non-built-in group.
:::


If only running the Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, proceed
to the
[Provision Account](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/netapp7mode/access/provisionaccess.md)
topic for instructions. If also running Activity Auditing (FSAC) scan, then the FPolicy Account
Provisioned for the Netwrix Activity Monitor will meet the needs of the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans. Proceed to the
[NetApp Data ONTAP 7-Mode Activity Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/netapp7mode/activity/activity.md)
topic for instructions.

This credential is used within the Connection Profile assigned to the File System scans.
