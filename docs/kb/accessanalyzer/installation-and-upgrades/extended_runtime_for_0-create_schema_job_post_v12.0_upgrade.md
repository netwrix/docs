---
description: >-
  This article addresses the extended runtime issue for the File System 0-Create Schema job after upgrading to v12.0 of Netwrix Access Analyzer.
keywords:
  - Netwrix Access Analyzer
  - 0-Create Schema job
  - extended runtime
  - data migration
  - SQL commands
sidebar_label: Extended Runtime for 0-Create Schema Job
tags: []
title: "Extended Runtime for 0-Create Schema Job Post v12.0 Upgrade"
knowledge_article_id: kA0Qk0000002TQvKAM
products:
  - accessanalyzer
---

# Extended Runtime for 0-Create Schema Job Post v12.0 Upgrade

## Symptom

After upgrading Netwrix Access Analyzer (formerly Enterprise Auditor) from **v11.6** to **v12.0**, the File System `0-Create Schema` job requires significantly more time to complete.

## Cause

When upgrading Access Analyzer from v11.6 to v12.0, the File System `0-Create Schema` job is expected to take longer than it has in previous versions. Analysis task **18. Data Migration** is moving IDs and metadata from the `SA_FSAA_Resources` table into separate, more organized tables, then removing the original columns. It also fixes table mappings for `SA_FSAA_Trustees` and `SA_FSAA_Gates` by replacing missing values with default values if they have not been filled yet. For large environments, or environments with large amounts of File System data, this can take 12 or more hours.

## Resolution

1. Schedule the File System `0-Create Schema` job (no trigger needed).
2. Disable all other File System jobs in the Schedules node.
3. From the Schedules node, right-click the **`0-Create Schema`** task and select **Run**.
4. Once the **`0-Create Schema`** job has completed, re-enable all other File System tasks.

> **IMPORTANT:** If the job runs for more than 24 hours, then proceed with the following steps:

1. Stop the task.
2. Close the console.
3. Run the following commands on the SQL database:
   - ```sql
     ALTER TABLE SA_FSAA_ResourcesScanTypeDetails NOCHECK CONSTRAINT ALL
     ```
   - ```sql
     ALTER TABLE SA_FSAA_ResourceMap NOCHECK CONSTRAINT ALL
     ```
4. Once the above commands complete successfully, run the **`0-Create Schema`** task.
5. Once the job completes, run the following commands:
   - ```sql
     ALTER TABLE SA_FSAA_ResourcesScanTypeDetails WITH CHECK CHECK CONSTRAINT ALL
     ```
   - ```sql
     ALTER TABLE SA_FSAA_ResourceMap WITH CHECK CHECK CONSTRAINT ALL
     ```