---
description: >-
  This article outlines the steps to create a backup of all settings, rights, policies, and integrations for disaster recovery or migration purposes.
keywords:
  - system backup
  - disaster recovery
  - migration
sidebar_label: Create a System Backup
tags:
  - deployment-and-installation
  - kb
title: "Create a System Backup V2"
knowledge_article_id: kA0Qk0000002B6gKAE
products:
  - endpointprotector
---

# Create a System Backup V2

## Overview

This article outlines how to create a backup of all settings, rights, policies, and integrations. Creating a system backup is recommended for disaster recovery or when migrating to a new appliance.

For the full reference, see [System Backup](/docs/endpointprotector/admin/systemmaintenance/backup).

:::note
If you're creating this backup as part of a migration to a new appliance, review the full migration readiness checklist — including source and target appliance prerequisites — in [Migration readiness checklist (preflight validation)](/docs/endpointprotector/admin/systemmaintenance/backup#migration-readiness-checklist-preflight-validation).
:::

## Instructions

1. Open the **Endpoint Protector Console** and navigate to **System Maintenance > System Backup V2**.
2. Click **Create** to begin the backup process.
3. Enter a backup name and a description for the backup, then click **Save**.
4. After saving, a pop-up will display the backup key. Record and take note of this key because it is required for importing the backup.
5. The backup will appear in the list and begin running. Once complete, download the backup locally for safekeeping.

:::warning
For security purposes, Endpoint Protector doesn't store the backup key. If you lose it, you can't recover it and won't be able to restore this backup.
:::

:::info
The Endpoint Protector Server can't process backup files larger than 200 MB. If your backup exceeds this limit, contact Netwrix Customer Support for assistance.
:::

## Related Links

- [System Backup](/docs/endpointprotector/admin/systemmaintenance/backup)
- [How to Perform a Backup Restore](/docs/kb/endpointprotector/deployment-and-installation/how_to_perform_a_backup_restore)