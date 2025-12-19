---
title: "FS_MigrateSchema Job"
description: "FS_MigrateSchema Job"
sidebar_position: 40
---

# FS_MigrateSchema Job

The FS_Migrate_Schema Job migrates the schema in order to support the use of 64-bit ResourceID's
without affecting data. It is available through the Instant Job Library under the File System
library. See the [Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for instructions to add this instant job
into the Jobs tree.

For installing the job, select **Local host** on the Hosts page of the Instant Job Wizard.

![FS_MigrateSchema job in the Jobs tree](/images/accessanalyzer/12.0/admin/jobs/instantjobs/jobstree.webp)

Runtime Details:

- Dependencies – None
- Target Hosts – None
- Scheduling – This job should be scheduled to run as desired
- History Retention – Not supported and should be turned off
- Multi-console Support – Not supported
- Additional Notes – None

The FS_Migrate Schema Job migrates the schema in order to support the use of 64-bit ResourceID's
without affecting data.

## Analysis Tasks for the FS_MigrateSchema Job

Navigate to the **Jobs** > **FS_MigrateSchema** > **Configure** node and select **Analysis** to view
the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Default Analysis tasks for the job](/images/accessanalyzer/12.0/admin/jobs/instantjobs/analysistasks.webp)

The default analysis tasks are:

- 1.Migrate Resources – Migrates the SA_FSAA_Resources table to leverage 64-bit IDs
- 2.Migrate UnixRights – Migrates the SA_FSAA_UnixRights table to leverage 64-bit IDs
- 3.Migrate Gates – Migrates the SA_Gates table to leverage 64-bit IDs
- 4.Migrate GatesProxy – Migrates the SA_FSAA_GatesProxy table to leverage 64-bit IDs
- 5.Migrate Exceptions – Migrates the SA_FSAA_Exceptions table to leverage 64-bit IDs
- 6.Migrate ProbableOwners – Migrates the SA_FSAA_ProbableOwners table to leverage 64-bit IDs
- 7.Migrate FileSizes – Migrates the SA_FSAA_FileSizes table to leverage 64-bit IDs
- 8.Migrate FileTypes – Migrates the SA_FSAA_FileTypes table to leverage 64-bit IDs
- 9.Migrate FileAges – Migrates the SA_FSAA_FileAges table to leverage 64-bit IDs
- 10.Migrate FileTags – Migrates the SA_FSAA_FileTags table to leverage 64-bit IDs
- 11.Migrate DFS Links – Migrates the SA_FSDFS_Links table to leverage 64-bit IDs
- 12.Migrate DLP Matches – Migrates the SA_FSDLP_Matches table to leverage 64-bit IDs
- 13.Migrate DLP MatchHits – Migrates the SA_FSDLP_MatchHits table to leverage 64-bit IDs
- 14.Migrate DLP MatchHits Subject Profile – Migrates the SA_FSDLP_MatchHits_SubjectProfile table to
  leverage 64-bit IDs
- 15.Migrate FSAC ActivityEvents – Migrates the SA_FSAC_ActivityEvents table to leverage 64-bit IDs
- 16.Migrate DailyActivity – Migrates the SA_FSAC_DailyActivity table to leverage 64-bit IDs
- 17.Migrate FSAC RenameTargets – Migrates the SA_FSAC_RenameTargets table to leverage 64-bit IDs
- 18.Migrate FSAC Exceptions – Migrates the SA_FSAC_Exceptions table to leverage 64-bit IDs
- 19.Refresh Views – Updates viewable metadata
