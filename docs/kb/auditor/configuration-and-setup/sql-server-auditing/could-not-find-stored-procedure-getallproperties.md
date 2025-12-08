---
description: >-
  The ReportServer database is corrupted and must be rebuilt. This article
  describes steps to delete and regenerate the ReportServer and ReportServerTemp
  databases when you encounter the GetAllProperties stored procedure error.
keywords:
  - ReportServer
  - GetAllProperties
  - stored procedure
  - SSRS
  - ReportServerTemp
  - SQL Server
  - Netwrix Auditor
  - report server database
  - SSMS
products:
  - auditor
  - Netwrix_Auditor_SQL_Databases
visibility: public
sidebar_label: Could Not Find Stored Procedure GetAllProperties
tags: []
title: "Could Not Find Stored Procedure GetAllProperties"
knowledge_article_id: kA04u00000110zQCAQ
---

# Could Not Find Stored Procedure GetAllProperties

## Symptom

You've encountered the following error running reports:

```
An error occurred within the report server database.
This may be due to a connection failure, timeout or low disk condition within the database. (rsReportServerDatabaseError)
Could not find stored procedure 'GetAllProperties'
```

## Cause

The ReportServer database is corrupted and has to be rebuilt.

## Resolution

1. In your Netwrix Auditor server, disable **Netwrix Auditor Archive Service** and **Netwrix Auditor Management Service** via **Services**.
2. Open the SQL server instance used by Netwrix Auditor via SQL Server Management Studio, and delete both the `ReportServer` and `ReportServerTemp` databases.
   1. Once you've opened SSMS, unfold the **Databases** folder in the **Object Explorer** pane on the left.
   2. Right-click each (`ReportServer` and `ReportServerTemp`) database and select **Delete**.
   3. Before confirming the deletion, make sure to check the **Close existing connections** checkbox.
3. Once the databases are deleted, regenerate the `ReportServer` database. Refer to the following article for additional information: [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)
4. After you've configured the `ReportServer` database, grant the roles to the SSRS service account the roles required. Refer to the following article for additional information: [Configure SSRS Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserverreportingservice#configure-ssrs-account)
5. Restart **Netwrix Auditor Archive Service** and **Netwrix Auditor Management Service** via **Services**.




