---
title: "NTFS Permission Scanning"
description: "Scanning NTFS access control lists"
sidebar_position: 30
---

# NTFS Permission Scanning

The CIFS/SMB connector reads NTFS access control lists (ACLs) on files and folders to identify who has access and what level of access they hold.

## What Gets Collected

| Data | Description |
| --- | --- |
| **ACL entries** | Each access control entry (ACE) on a file or folder, including the principal (user or group), access type (allow/deny), and permission level |
| **Permission types** | Read, Write, Modify, Full Control, and other standard NTFS permissions |
| **Inheritance** | Whether permissions are inherited from a parent folder or explicitly set |
| **Owner** | The owner of each file or folder |

## How It Works

1. The connector traverses the folder hierarchy on each share
2. For each file and folder, it reads the NTFS security descriptor
3. ACL entries are parsed and stored in the Access Analyzer database
4. Identities referenced in ACLs are matched to synced identities from IAM connectors

## Access Path Analysis

By combining NTFS permissions with identity data from Active Directory or Local Groups, Access Analyzer builds **access paths** that show:

- Which users and groups have access to each file or folder
- Whether access is granted directly or through nested group membership
- Which permissions are explicitly set versus inherited
