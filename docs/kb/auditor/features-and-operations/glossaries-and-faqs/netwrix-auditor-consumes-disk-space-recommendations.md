---
description: >-
  Explains why Netwrix Auditor can consume a lot of disk space and provides
  detailed recommendations to reduce disk usage, move archives and working
  folders, and inspect page file and local DB usage.
keywords:
  - netwrix auditor
  - disk space
  - long-term archive
  - working folder
  - page file
  - local db
  - backups
  - performance monitor
products:
  - auditor
sidebar_label: Netwrix Auditor Consumes Disk Space — Recommendati
tags: []
title: "Netwrix Auditor Consumes Disk Space — Recommendations"
knowledge_article_id: kA04u00000111I3CAI
---

# Netwrix Auditor Consumes Disk Space — Recommendations

## Question

Netwrix Auditor takes up a lot of disk space and once it gets to around a minimum of free disk space, the Netwrix services stop, and all monitoring plans have the **Stops Responding** status. Which are Netwrix recommendations for adequate hardware resource consumption?

## Answer

The following recommendations will allow you to reduce disk space consumption:

1. Netwrix recommends upgrading to the latest version. For each updated version, Netwrix improves performance and tends avoiding disk space consumption.

   For additional information on upgrade procedure, refer to the following article: Installation — Upgrade to the Latest Version — v10.6.

2. Move your Long-Term Archive to another logical disk and/or modify its retention settings. **Long-Term Archive** is a file-based storage where Netwrix Auditor saves the collected activity records.

   By default, it is located on the system drive at `%PROGRAMDATA%\Netwrix Auditor\Data` and keeps data for `120 months (10 years)` and the product informs you if you are running out of space on a system disk where it is stored.

   Once the free disk space starts approaching the minimum level, you will see events in the **Netwrix Auditor System Health** log. When the free disk space is less than `3GB`, the Netwrix services responsible for audit data collection will be stopped, which means that the data collection also stops.

   Follow these Knowledge Base articles for additional information:

   - [How to Move Long-Term Archive to a New Location](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location)
   - [How to Prevent Long-Term Archive Overflow](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-prevent-long-term-archive-overflow)

3. Migrate Working Folder to a new location.

   The size of your Working Folder may grow significantly (normally, up to `10 – 20GB`) depending on the workload, especially during activity peaks. If your system drive capacity is limited, you might want to keep the temporary files and trace logs on another drive, i.e. change the Working Folder default location.

   For additional information on how to move the Working Folder, refer to the following article: [How to Migrate Netwrix Auditor Working Folder to a New Location](/docs/kb/auditor/system-administration/migration-and-upgrade/how-to-migrate-netwrix-auditor-working-folder-to-a-new-location).

4. Remove the **Netwrix Backup** folder. Netwrix strongly recommends keeping the backups for supported product versions.

   For additional information about the Backup folder, refer to the following article: [Backups Folder in Netwrix Auditor](/docs/kb/auditor/system-administration/backup-and-recovery/backups-folder-in-netwrix-auditor).

5. Additional space might be consumed by the **Local DB** in the **ShortTerm** folder; this can occur when the SQL communication is not working properly or the DB files getting corrupted. Follow the resolution steps in the article: [Netwrix Auditor System Health Log Contains EventID 2002](https://docs.netwrix.com/docs/kb/auditor/features-and-operations/glossaries-and-faqs/netwrix-auditor-health-log-contains-eventid-2002).

6. Check the size of the Windows page file. If it grows big, this indicates lack of RAM and Windows tries to compensate it with disk space. Adding more RAM helps fixing disk space consumption by page files.

   Follow the steps to inspect page file usage using **Performance Monitor**

   1. On the Auditor Server, open **Administrative Tools** -> **Performance Monitor**.
   2. Expand **Monitoring Tools** and select **Performance Monitor**.
   3. Right-click the graph and select **Add Counters...**.
   4. In the **Available counters** list, select **Paging File.**
   5. Click the down-arrow icon to the right of Paging File.
   6. Select `% Usage` under Paging File and then click the **Add** button.
   7. Click **OK** to close the dialog.

   Now the **Paging File** counter is displayed in the **Performance Monitor**.

## Related Articles

- [Error: Netwrix Auditor for File Servers Audit Service Terminated Unexpectedly](/docs/kb/auditor/configuration-and-setup/file-server-auditing/error-netwrix-auditor-for-file-servers-audit-service-terminated-unexpectedly)
- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
- [How to Add Additional Space to Long-Term Archive](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-add-additional-space-to-long-term-archive)
- [Netwrix Auditor System Health Log Contains EventID 2002](https://docs.netwrix.com/docs/kb/auditor/features-and-operations/glossaries-and-faqs/netwrix-auditor-health-log-contains-eventid-2002)
