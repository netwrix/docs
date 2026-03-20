---
title: "File-Level vs Share-Level Permissions"
description: "Understanding file-level and share-level permission scanning"
sidebar_position: 50
---

# File-Level vs Share-Level Permissions

Windows file shares have two layers of access control: **share-level permissions** and **NTFS file-level permissions**. The effective access for a user is the most restrictive combination of both.

## Share-Level Permissions

Share-level permissions are set on the share itself and apply to all network access:

- **Read** — View files and subfolders
- **Change** — Read, add, modify, and delete files
- **Full Control** — All Change permissions plus the ability to modify share permissions

## NTFS File-Level Permissions

NTFS permissions are set on individual files and folders and provide granular control:

- **Read** — View file contents and attributes
- **Write** — Create files and write data
- **Modify** — Read, write, and delete
- **Full Control** — All permissions including permission changes and ownership

## Effective Access

The effective access for a user connecting over the network is determined by the **intersection** (most restrictive) of share-level and NTFS permissions.

For example:
- Share permission: **Full Control**
- NTFS permission: **Read**
- Effective access: **Read**

## Enabling File-Level Permission Scanning

By default, Access Analyzer scans share-level permissions only. To include file-level (NTFS) permission data:

1. During source group creation, proceed to Step 3 (scan setup)
2. Enable the **Access** scan type
3. In the access scan options, check **Include file-level permission data in scan results**

When enabled, the connector reads the NTFS security descriptor for each file and folder in addition to the share-level ACL. This provides more detailed access path analysis but increases scan duration.

:::note
File-level permission scanning is disabled by default because it significantly increases scan time on large file servers. Enable it when you need detailed per-file permission analysis.
:::

## What Access Analyzer Scans

The CIFS/SMB connector collects NTFS permissions at the file and folder level. Combined with share-level permission data, Access Analyzer reports the effective access path from user to file.
