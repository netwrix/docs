---
description: >-
  This article provides step-by-step instructions for performing a backup restore for Endpoint Protector, ensuring data security and system integrity.
keywords:
  - backup restore
  - Endpoint Protector
  - data security
sidebar_label: Backup Restore
tags:
  - enforced-encryption-and-easylock
title: "How to Perform a Backup Restore"
knowledge_article_id: kA0Qk0000002BAfKAM
products:
  - endpoint-protector
---

# How to Perform a Backup Restore

## Overview

Performing a backup restore for Endpoint Protector is essential for maintaining data security and system integrity, especially when using the eDiscovery module. This article outlines the steps and considerations for a successful backup and restore process.

## Instructions

### Backup Process

1. On the Endpoint Protector Server, navigate to **System Maintenance** > **System Backup v2** > **System Backup Information**.
2. Click **Create** to access System Backup Information.
3. Provide a name and a brief description for the backup.
4. Click **Save** to initiate the backup process.
5. When prompted, securely store the System Backup Key displayed in the pop-up window. This key is required for importing and restoring the backup.
6. Confirm that you have saved the System Backup Key by selecting **Yes, I saved the System Backup Key**.
7. The system backup (excluding logs) will be created and listed in the **List of System Backups**. You can view, download, or delete the backup as needed.

### Restore Process

> **NOTE:** Before restoring, use the Audit Log Backup feature because logs will not be retained. Download any previous system backups, as only the backup you import and restore will remain.

1. On the Endpoint Protector Server, navigate to **System Maintenance** > **System Backup v2** > **System Backup Information**.
2. Click **Import and Restore (Migrate)**.
3. From **Import**, choose **File...** and select the System Backup v2 file saved during the backup process.
4. Enter the System Backup Key in the provided field.
5. Click **Import** to begin the restore process.
6. Monitor the status in the **List of System Backups**. The status will display as "Generating" in red letters for the backup in progress.
7. When prompted, log back into the Endpoint Protector Console.
8. If necessary, use the Audit Log Backup feature to restore logs.
9. For eDiscovery module users: After restoring the backup, use the **re-read rights and settings for all computers** feature (**Dashboard** > **System Status** > **System Functionality**). This ensures accurate correlation between previously discovered items and actions (such as Encrypt, Decrypt, Delete, etc.) that can be performed on these files.

By following these steps, you can successfully perform a backup and restore for Endpoint Protector, ensuring data accuracy and integrity throughout the process.

## Related Links

- [System Backup V2](https://docs.netwrix.com/docs/endpointprotector/5_9_4_2/admin/systemmaintenance/backup)
- [Create a System Backup V2](/docs/kb/endpointprotector/enforced-encryption-and-easylock/create_a_system_backup_v2)