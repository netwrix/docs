---
description: >-
  How to restore a GPO's actual settings from a Netwrix Recovery for Active
  Directory GPO backup using the Group Policy Management Console (GPMC).
keywords:
  - GPO backup
  - GPO restore
  - GPMC
  - Group Policy Management Console
  - manifest.xml
  - Restore from Backup
  - Netwrix Recovery for Active Directory
products:
  - recovery-active-directory
sidebar_label: "Restoring a GPO from Backup Using GPMC"
tags:
  - kb
title: "Restoring a GPO from Backup Using GPMC"
---

# Restoring a GPO from Backup Using GPMC

## Question

How do you restore a GPO's actual settings from a Netwrix Recovery for Active Directory GPO backup?

## Answer

Use the Group Policy Management Console (GPMC) directly, pointed at the Netwrix Recovery for Active Directory GPO backup path. This restores the GPO's actual settings, not just its AD-side permissions or linking — rollback/recovery actions inside the Netwrix Recovery for Active Directory console only ever restore AD attributes, never settings content.

### Before You Start

- You'll need permissions to manage Group Policy in the target domain.
- Locate the backup share/path configured for GPO backups on the domain configuration page in Netwrix Recovery for Active Directory.
- Know which GPO you need to restore.

> **Note:** Folder names under the backup path are not the GPO's own GUID — they're a separate ID per backup instance. To match a folder to a GPO, check `manifest.xml` in the root of the backup location; each `<BackupInst>` entry lists the backup instance ID (matches the folder name), the real `<GPOGuid>`, and the `<GPODisplayName>`.

### Steps

1. Open **GPMC** on a machine with access to the target domain.

   ![GPMC console with domain selected](./0-images/gporestore-gpmc-console.png)

2. Expand your domain and click **Group Policy Objects**.

   ![Group Policy Objects list](./0-images/gporestore-gpo-list.png)

3. **If the GPO still exists:** right-click it and select **Restore from Backup**.

   ![Restore from Backup context menu](./0-images/gporestore-restore-from-backup-menu.png)

   **If the GPO was deleted** (including reanimated from the AD Recycle Bin and showing as broken/unmodifiable): right-click **Group Policy Objects** and select **Manage Backups** instead.

   ![Manage Backups context menu](./0-images/gporestore-manage-backups-menu.png)

4. Click **Browse** and point it at the backup path for this domain.

   ![Manage Backups dialog](./0-images/gporestore-manage-backups-dialog.png)

5. GPMC lists the available backups at that location. If you're restoring a still-existing GPO via **Restore from Backup**, the list is already filtered to that GPO. Via **Manage Backups**, you'll see every backed-up GPO — use name/timestamp, or the GUID lookup above, to find the right one.

   ![Populated backup list](./0-images/gporestore-populated-backup-list.png)

6. Select the backup you want and click **Restore**.

   ![Backup selected, Restore button enabled](./0-images/gporestore-backup-selected.png)

7. Confirm the restore.

   ![Restore confirmation prompt](./0-images/gporestore-confirmation-prompt.png)

   ![Restore progress and completion status](./0-images/gporestore-progress-complete.png)

8. Open the GPO in the Group Policy Management Editor to confirm the settings match the expected backup point.

### What This Does and Doesn't Restore

- **Restores:** the GPO's settings content, its ACL/permissions, and its WMI filter link.
- **Does not restore:** where the GPO is linked (links live on the OU/domain/site, not the GPO itself). If the GPO shows up unlinked after this restore, re-link it manually in GPMC (right-click the OU/domain → **Link an Existing GPO...**, or `Set-GPLink` in PowerShell).

> **Note:** Don't use Netwrix Recovery for Active Directory's rollback feature to restore a lost link by rolling back the OU's `gPLink` attribute. `gPLink` is a plain string, but its contents are a specific bracketed format GPMC expects (`[LDAP://<GPO DN>;<link options>]`) — writing it back through a generic attribute rollback can result in AD accepting the value while GPMC still doesn't recognize the link, even after `gpupdate /force`. Re-linking manually in GPMC is the reliable path.

### If the Backup Location Is Empty or the GPO Isn't Listed

The backup for this GPO likely doesn't exist yet. Confirm with your Netwrix Recovery for Active Directory administrator that GPO backups are working for this domain before troubleshooting the restore itself further.

## Related Links

- [Identifying Service Accounts and Required Permissions](/docs/kb/recoveryad/configuration-and-administration/identifying-service-accounts-and-required-permissions)
