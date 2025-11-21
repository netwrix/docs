---
description: >-
  Describes Event ID 6131 "The security descriptor of the file share is empty"
  and provides troubleshooting steps to restore share and NTFS permissions so
  Netwrix Auditor can access the file share.
keywords:
  - file share
  - security descriptor
  - Event ID 6131
  - share permissions
  - NTFS permissions
  - File Storage Audit Service
  - Netwrix Auditor
  - troubleshooting
  - file servers
products:
  - auditor
sidebar_label: File Servers — Security Descriptor of File Share I
tags: []
title: "File Servers — Security Descriptor of File Share Is Empty"
knowledge_article_id: kA04u00000110sKCAQ
---

# File Servers — Security Descriptor of File Share Is Empty

## Symptom

Your event log contains the following entries for your Windows File Servers:

```
Source:File Storage Audit Service
Event ID:6131
Snapshot processing for the server %SERVERNAME% completed with errors:
Object: \%SERVERNAME%\%FILESHARENAME%, Error: 0x80049611 The security descriptor of the file share is empty
```

## Cause

The error indicates the file share Netwrix Auditor is trying to access does not have security permissions assigned to it. The issue occurs when the security settings for the file share are misconfigured or corrupted.

## Resolution

1. Restart your file server. A restart can resolve permission-related issues — try restarting the server to check if the error persists.

2. Check the share permissions. Ensure the share permissions are properly configured:
   1. Right-click the affected shared folder, select **Properties**, and navigate to the **Sharing** tab.
   2. Click the **Advanced Sharing** button to verify the correct permissions are set for the intended users (e.g., the data collection account) or groups.

3. Verify NTFS permissions. NTFS permissions control access to the files and folders within the shared folder.
   1. Right-click the affected shared folder, select **Properties**, and navigate to the **Security** tab.
   2. Ensure the appropriate users (e.g., the data collection account) or groups have the sufficient permissions to access the files.

4. Verify the file share path. Log in to the Netwrix Auditor server using the data collection account for the File Server monitoring plan and try accessing the affected file server.
