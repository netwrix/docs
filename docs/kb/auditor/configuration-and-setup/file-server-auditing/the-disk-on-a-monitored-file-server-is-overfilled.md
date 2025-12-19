---
description: >-
  Describes causes and resolution steps when a monitored file server disk is
  filled by Security event log auto archives.
keywords:
  - security event log
  - auto archives
  - disk space
  - CleanAutoBackupLogs
  - ProcessBackupLogs
  - Netwrix Auditor
  - audit archives
  - Event Viewer
  - registry
products:
  - auditor
sidebar_label: The disk on a monitored file server is overfilled
tags: []
title: "The disk on a monitored file server is overfilled"
knowledge_article_id: kA00g000000H9ZcCAK
---

# The disk on a monitored file server is overfilled

The disk on a monitored file server is overfilled with Security event log auto archives.

## Possible causes

Disk overfilling can be caused by the following reasons:

- Removal of processed auto archives is not configured.
- The maximum size of the Security event log does not meet [Microsoft](http://support.microsoft.com/kb/957662) recommendations, so Netwrix Auditor cannot process auto archives and remove them.
- The disk where auto archives are stored is too small to contain all archives accumulated between two Netwrix Auditor data collections.

## Resolution

1. Check whether the automatic removal is configured. On the computer where Netwrix Auditor is installed, perform the following:
   1. Navigate to **Start -> Run** and type `regedit`.
   2. Expand `HKEY_LOCAL_MACHINE/SOFTWARE/(Wow6432Node)/Netwrix/File Server Change Reporter.`
   3. Make sure `ProcessBackupLogs` is set to `1`.
   4. Make sure `CleanAutoBackupLogs` is set to X - a positive integer number (the archive is removed when all events are older than `X` hours).

Refer to [Netwrix Auditor Installation and Configuration Guide](http://www.netwrix.com/download/documents/Netwrix_Auditor_Installation_Configuration_Guide.pdf) for more information.

2. If the automatic removal option is enabled, check the audit archives creation date.
   - If archives are stored longer than it is defined by the limiting `CleanAutoBackupLogs` parameter, make sure that `Security` event log can be reached by Netwrix Auditor, and the log"s size meets [Microsoft](http://support.microsoft.com/kb/957662) requirements.
   - If archives are not stored longer than it is defined by the limiting `CleanAutoBackupLogs` parameter, and `Security` event log can be reached by Netwrix Auditor, and the log"s size meets [Microsoft](http://support.microsoft.com/kb/957662) requirements, it means that audit archives fill the free disk space before Netwrix Auditor removes them. To resolve this issue, do one of the following:
     - Change location of the Event Viewer log files. Move them to a disk with more free space available. Audit archives will be accumulated on the disk and removed after the data collection. **Note**: For information on how to do this for Windows 2000 and Windows Server 2003, refer to the following [Microsoft technical article](http://support.microsoft.com/kb/315417). For Windows Server 2008 and above, log location can be changed under the log properties. It is recommended to reboot your server after this manipulations.
     - Configure Netwrix Auditor to run data collection more frequently and decrease the value of the `CleanAutoBackupLogs` parameter. If the task runs frequently enough to prevent the Security event log from being overfilled, you can disable the automatic archiving option (the disk will not be overfilled, but this can lead to audit data loss). To adjust the data collection schedule, in Netwrix Auditor, navigate to **Settings -> Data Collection**, click **Modify** next to **Default data collection and Change Summary generation schedule.** In the **Modify Schedule** dialogue select **Advanced** and adjust the schedule as necessary.

**Note:** Before updating the `CleanAutoBackupLogs` parameter, make sure that Netwrix Auditor has enough time to process audit archives for other audited systems before the archives are removed.
