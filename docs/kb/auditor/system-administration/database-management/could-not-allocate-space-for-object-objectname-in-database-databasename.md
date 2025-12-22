---
description: >-
  Explains the "Could not allocate space for object" error in Netwrix Auditor,
  lists possible causes, and provides long-term and short-term resolutions
  including steps to recreate the database.
keywords:
  - Netwrix Auditor
  - SQL Server
  - PRIMARY filegroup
  - database full
  - autogrowth
  - SQL Server Express
  - Monitoring Plan
  - SSMS
  - disk space
products:
  - auditor
sidebar_label: Could Not Allocate Space for Object (ObjectName) i
tags: []
title: "Could Not Allocate Space for Object (ObjectName) in Database (DatabaseName)"
knowledge_article_id: kA00g000000H9WsCAK
---

# Could Not Allocate Space for Object (ObjectName) in Database (DatabaseName)

## Symptom

The following error message appears in the Netwrix Auditor Health Log or under the database status on the Database Statistics page:

```text
Error in reports stating Could not allocate space for object '*' in database '*' because the 'PRIMARY' filegroup is full.
Create disk space by deleting unneeded files, dropping objects in the filegroup, adding additional files to the filegroup,
or setting autogrowth on for existing files in the filegroup
```

## Cause

SQL Server is preventing Netwrix Auditor from writing data to the Monitoring Plan Audit Database due to storage constraints. The following factors may contribute to this issue:

- SQL Server Express Edition is being used for Netwrix Auditor and the database has reached the 10GB limitation.
- The disk where the database's files are stored is full.
- Autogrowth is not properly set for the database.

> **NOTE:** If the issue is related to Autogrowth, refer to the following resources:
>
> - 'PRIMARY' Filegroup Is Full: https://learn.microsoft.com/en-us/answers/questions/555422/primary-filegroup-is-full
> - Resolving SQL Server Errors: The Primary Filegroup Is Full: https://www.sqlshack.com/resolving-sql-server-errors-the-primary-filegroup-is-full/
> - Considerations for the Autogrow and Autoshrink Settings in SQL Server: https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/database-file-operations/considerations-autogrow-autoshrink

## Resolution

### Long-Term Solutions

To help prevent recurring database storage issues and support long-term stability, please refer to the solutions below:

- Upgrade the **SQL Server edition** from Express to Standard or Enterprise.

  > **NOTE:** This is the only long-term option to prevent database size limitations from disrupting Netwrix Auditor data collection.

- Split the problematic **Monitoring Plan** into several plans, each assigned to its own database.

  > **NOTE:** Ensure when splitting the plan that you do not monitor the same item in multiple plans for the same data source.

- Narrow the auditing scope by disabling auditing options that generate larger amounts of data, such as **Successful Reads for File Servers** or **Non-interactive logons for Logon Activity** in the monitoring plan settings (**Edit monitoring plan** > **Edit Data Source**).

### Short-Term Solutions

The following solutions can temporarily offer more database storage and disk space but do not address the root cause of database size constraints.

- Disable state-in-time data collection for the File Server monitoring plan by unselecting the **Collect data for state-in-time reports** option in the monitoring plan settings (**Edit monitoring plan** > **Edit Data Source**).
- Allocate additional disk space to Netwrix Auditor and SQL Server. [Hardware Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/console)
- Change the **Database Retention** period via the Netwrix Auditor Console (**Settings** > **Audit Database**) to reduce the amount of time collected data is stored.
- Recreate the database associated with the problematic Monitoring Plan. Since all collected data is also stored in the Long-Term Archive, no data loss is expected. However, recreating the database will remove its data from Searching and Reporting. To access this data, use the [Netwrix Auditor Settings – Investigations (v10.6) feature](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/investigations).

To recreate the database, follow these steps:

1. Open **SQL Server Management Studio (SSMS)** > Connect to the SQL instance > Expand the **Databases** folder > Right-click the problematic database > **Delete**.
2. Check the box **Close existing connections**, and click **OK** to confirm the deletion.
3. Restart **Netwrix Auditor Management Service** on the Netwrix Auditor Server.
4. Refresh or close out **SSMS** and reconnect to the SQL instance to verify that the database was recreated with the same name.
5. Once confirmed, navigate to **Netwrix Auditor Console** > **Health Status** > **Database Statistics** and check the status of the recreated database.

> **NOTE:** It may take several minutes for the recreated database to go into an **OK** state.

## Related Articles

- 'PRIMARY' Filegroup Is Full: https://learn.microsoft.com/en-us/answers/questions/555422/primary-filegroup-is-full
- Resolving SQL Server Errors: The Primary Filegroup Is Full: https://www.sqlshack.com/resolving-sql-server-errors-the-primary-filegroup-is-full/
- Considerations for the Autogrow and Autoshrink Settings in SQL Server: https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/database-file-operations/considerations-autogrow-autoshrink
- [Hardware Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/console)
- [Netwrix Auditor Settings – Investigations (v10.6) feature](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/investigations)
- [SQL Server Express Database Size Reached 10GB](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/sql-server-express-database-size-reached-10gb)
