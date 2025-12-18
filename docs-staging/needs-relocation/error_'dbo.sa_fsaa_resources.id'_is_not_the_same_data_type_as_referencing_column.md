---
description: >-
  This article provides troubleshooting steps for resolving the error related to data type mismatches in the Netwrix Access Analyzer.
keywords:
  - Netwrix Access Analyzer
  - data type mismatch
  - SQL script
  - foreign key error
  - FS_MigrateSchema
products:
  - accessanalyzer
sidebar_label: "Error: 'dbo.SA_FSAA_Resources.ID' Is Not the Same Data Type as Referencing Column"
tags: []
title: "Error: 'dbo.SA_FSAA_Resources.ID' Is Not the Same Data Type as Referencing Column"
knowledge_article_id: kA0Qk0000002RLtKAM
---

# Error: ‘dbo.SA_FSAA_Resources.ID’ Is Not the Same Data Type as Referencing Column

## Symptom

When running the File System `0-Create Schema` job in Netwrix Access Analyzer, the job fails with the following errors:

- `Column 'dbo.SA_FSAA_Resources.ID' is not the same data type as referencing column 'SA_FSAA_AzureFilesShares_ResourceID'. Could not create constraint or index.`
- `Foreign key 'FK_SA_FSAA_AzureFilesShareProperties_AzureShareID' references invalid table 'dbo.SA_FSAA_AzureFileShares'. Could not create constraint or index.`
- `Column 'dbo.SA_FSAA_Resources.ID' is not the same data type as referencing column 'SA_FSAA_ResourceMap_ID' in foreign key 'FK_SA_FSAA_ResourceMap_ID'. Could not create constraint or index.`
- `Column 'dbo.SA_FSAA_Resources.ID' is not the same data type as referencing column 'SA_FSAA_ResourcesScanTypeDetails.ID' in foreign key 'FK_SA_FSAA_ResourcesScanTypeDetails_ID'. Could not create constraint or index.`
- `Invalid object name 'dbo.SA_FSAA_ResourceMap'.`

## Cause

These errors may be caused by one of the following:

- The Access Analyzer database was originally created **before** StealthAUDIT v10.0.
- The ID column of the SA_FSAA_Resources table has a data type of **`int`** instead of **`bigint`**.

## Resolution

1. In the Access Analyzer database, run the following SQL script:

   ```sql
   SELECT 
       t.name AS TableName,
       c.name AS ColumnName,
       tp.name AS DataType,
       CASE 
           WHEN tp.name = 'bigint' THEN 'FS_MigrateSchema job not needed.'
           WHEN tp.name = 'int' THEN 'Run FS_MigrateSchema job from InstantJobs before running 0.CreateSchema job.'
           ELSE 'Unknown data type.'
       END AS ActionMessage
   FROM 
       sys.tables AS t
   INNER JOIN 
       sys.columns AS c ON t.object_id = c.object_id
   INNER JOIN 
       sys.types AS tp ON c.user_type_id = tp.user_type_id
   WHERE 
       t.name = 'SA_FSAA_Resources' AND 
       c.name = 'ID' AND
       tp.name IN ('int', 'bigint')
   ORDER BY 
       t.name, c.name;
   ```

2. If the script result says: **`Run FS_MigrateSchema job from InstantJobs before running 0-Create Schema job`**, then open the Access Analyzer console and add the **`FS_MigrateSchema`** job from the **InstantJob** Library.

   > **NOTE:** For more information on pulling jobs from the **InstantJob** Library, see [InstantJobs Overview in Netwrix Access Analyzer 12.0](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/jobs/instantjobs/overview).

3. Configure the job with the following runtime details:

   > **NOTE:** For more information on the **`FS_MigrateSchema`** job, see [FS_MigrateSchema Job in Netwrix Access Analyzer 12.0](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/jobs/instantjobs/fs_migrateschema).

   - **Hosts:** localhost
   - **Connection Profile:** Account with DBO permissions on the Access Analyzer database

4. Create a scheduled task for the **`FS_MigrateSchema`** job with the following criteria:

   - Do not include a schedule or trigger.
   - Ensure that the **Stop the task if it runs for** option is unchecked.

5. From the **Schedules** menu, right-click the **`FS_MigrateSchema`** scheduled task and select **Run**.

## Related Links

- [InstantJobs Overview in Netwrix Access Analyzer 12.0](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/jobs/instantjobs/overview)
- [FS_MigrateSchema Job in Netwrix Access Analyzer 12.0](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/jobs/instantjobs/fs_migrateschema)