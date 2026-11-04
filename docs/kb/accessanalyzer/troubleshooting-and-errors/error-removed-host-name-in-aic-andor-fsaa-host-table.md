---
description: >-
  Explains why Access Information Center and the SA_FSAA_Hosts table show a !REMOVED_<GUID> machine name after a host data removal job times out, and how to fix it.
keywords:
  - Access Information Center
  - AIC
  - File Server
  - host data removal
  - "!REMOVED_"
  - SA_FSAA_Hosts
  - Remove host data
  - Timeout minutes
  - removed hostname
sidebar_label: Host Name Issue in AIC and FSAA
tags:
  - kb
  - troubleshooting-and-errors
title: "Error: !REMOVED- Host Name in AIC and/or FSAA Host Table"
knowledge_article_id:
  - kA0Qk0000001qxRKAQ
  - kA0Qk0000004Pe9KAE
products:
  - accessanalyzer
---

# Error: !REMOVED- Host Name in AIC and/or FSAA Host Table

## Symptom

After you drop data for a File Server, Access Information Center and/or the [`SA_FSAA_Hosts` table](/docs/accessanalyzer/12_0/admin/datacollector/fsaa/standardtables) in the SQL database display a machine name such as `!REMOVED_<GUID>`.

## Cause

You used the [Remove host data](/docs/accessanalyzer/12_0/admin/datacollector/fsaa/workflows) option in the FileSystemAccess Data Collector to remove host data, but the job timed out or errored.

The first step of the host removal process sets `!REMOVED_<GUID>` as the host name in the `SA_FSAA_Hosts` table. Because the job times out before it finishes, that new name remains, and the removal must run against it. The incomplete cleanup also leaves the database records for the host in a partial state.

## Resolution

Re-run the job used to remove the host data against the full `!REMOVED_<GUID>` name.

- You typically ran a custom job. If you are unsure which job you ran, see [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data) for steps to create a custom job to drop File Server host data.

- If you have already rerun the job and it times out, extend the job timeout and rerun the job by completing the following steps.

> **IMPORTANT:** Before running large bulk import or cleanup jobs in a production environment, make sure you have a recent backup of your audit database and configuration.

1. Right-click the job that timed out (for example, the remove host job or the bulk import job), select **Properties**, and open the **General** tab. For more information, see [General Tab](/docs/accessanalyzer/12_0/admin/jobs/job/properties/general).
2. Set **Timeout minutes** to `1440` (24 hours) to avoid premature timeouts on long-running operations.
3. Rerun the remove host job against the `!REMOVED_<GUID>` name as it shows in Access Information Center, not the original hostname.

    > **NOTE:** These jobs can run for a long time when the database is large or many objects are being processed. Do not assume a job has failed until it exceeds the extended timeout.

4. If a bulk import or scan affected the entry, repeat steps 1 and 2 for that job, and then rerun it so the inventory and cleanup operations complete.

If you are unsure about running these jobs, contact [Netwrix Support](https://www.netwrix.com/support.html) and provide the job logs and a description of recent activities that may have affected the host entry.

## Related Links

- [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data)
- [Additional FSAA Workflows](/docs/accessanalyzer/12_0/admin/datacollector/fsaa/workflows)
- [Standard Reference Tables & Views for the FSAA Data Collector](/docs/accessanalyzer/12_0/admin/datacollector/fsaa/standardtables)
- [General Tab](/docs/accessanalyzer/12_0/admin/jobs/job/properties/general)
