---
title: "Working Folder"
description: "Working Folder"
sidebar_position: 70
---

# Working Folder

The working folder is a file-based storage that also keeps operational information (configuration
files of the product components, log files, and other data). To ensure audit trail continuity,
Netwrix Auditor also caches some audit data locally in its working folder for a short period (up to
30 days) prior to storing it to the Long-Term Archive or audit database.

By default, the working folder is located at _%ProgramData%\Netwrix Auditor_.

In busy environments and during activity peaks, working folder size may grow significantly and
require up to 1 TB, so plan for this file-based storage accordingly. To track the working folder
capacity, you can use the Working Folder widget of the Health Status dashboard.

If you want to change the working folder default location, run the specially designed utility. See
the
[How to Migrate Netwrix Auditor Working Folder to a New Location](/docs/kb/auditor/system-administration/migration-and-upgrade/how-to-migrate-netwrix-auditor-working-folder-to-a-new-location)
Knowledge Base article for additional information.
