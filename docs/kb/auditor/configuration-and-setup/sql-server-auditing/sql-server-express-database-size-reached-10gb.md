---
description: >-
  Explains why SQL Server Express encounters a 10 GB limit with Netwrix Auditor
  and provides step-by-step actions to recreate the database, stop/start
  services, and optimize data collection to continue using Express edition.
keywords:
  - SQL Server Express
  - 10GB limit
  - database size
  - Netwrix Auditor
  - monitoring plan
  - Archive Service
  - database deletion
  - Database Statistics
  - retention period
products:
  - auditor
  - SQL_Server
sidebar_label: SQL Server Express Database Size Reached 10GB
tags: []
title: "SQL Server Express Database Size Reached 10GB"
knowledge_article_id: kA04u00000110wRCAQ
---

# SQL Server Express Database Size Reached 10GB

## Question

Database size reached 10GB − the following database state is prompted:

```
Failed to store data
```

```
Unable to allocate additional space to save data to the Audit Database
```

Is it still possible to use SQL Server Express instead of the Standard or Enterprise editions?

## Answer

While it is highly recommended to implement either a SQL Server Standard or Enterprise edition in a production environment, you can still use SQL Server Express. Due to the 10GB database size limitation, you may encounter errors related to the inability to store data in the **Health Status** dashboard. Refer to the following steps to optimize the use of Express edition in your environment:

- Recreate the database for the monitoring plan:

  > **IMPORTANT:** The monitoring plan data collected previously will be available in the Long-Term Archive. Refer to the following article for additional information on investigations:[Investigations](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/investigations)

  1. Confirm the name of the affected database − it should be stated both in the error message and **Database Statistics**. The **Database Statistics** data will also include the affected monitoring plan name.
  2. Disable the data collection for the affected monitoring plan − in the main Netwrix Auditor screen, select **Monitoring Plans** > **%affected_monitoring_plan%** > **Edit** > **Edit data source** > switch the **Monitor this data source and collect activity data** switch off > click **Save & Close**.

     > **NOTE:** To confirm the affected database is used in the monitoring plan, click **Edit settings** under the **Monitoring Plan** section in the monitoring plan view, and click the **Audit Database** tab.
  3. In your Netwrix Auditor server, run the following line in elevated PowerShell to stop `Netwrix Auditor Archive Service`:

     ```powershell
     Stop-Service -DisplayName "Netwrix Auditor Archive Service"
     ```
  4. In your SQL server, open **Microsoft SQL Server Management Studio**. Connect to your SQL instance and locate the **Databases** subfolder under the server node in the left pane.
  5. Locate the affected database, right-click it and select **Delete**.
  6. In the **Delete Object** window, check the **Close existing connections** checkbox, and click **OK**.
  7. In your Netwrix Auditor server, run the following lines in elevated PowerShell to start `Netwrix Auditor Archive Service` and restart `Netwrix Auditor Management Service`:

     ```powershell
     Start-Service -DisplayName "Netwrix Auditor Archive Service"
     Restart-Service -DisplayName "Netwrix Auditor Management Service"
     ```
  8. Enable the data collection − in the affected monitoring plan view, click **Edit data source** > in the **General** tab, switch the **Monitor this data source and collect activity data** switch on. Click **Save & Close**.

- Split items in multiple monitoring plans to decrease the amount of data written to a single database.

- Decrease the database retention period. Refer to the following article for additional information: [How to Reduce Audit Database Size for Netwrix Auditor](/docs/kb/auditor/system-administration/database-management/how-to-reduce-audit-database-size-for-netwrix-auditor)

## Related Articles

- [Investigations](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/investigations)
- [How to Reduce Audit Database Size for Netwrix Auditor](/docs/kb/auditor/system-administration/database-management/how-to-reduce-audit-database-size-for-netwrix-auditor) 
- [Could Not Allocate Space for Object (ObjectName) in Database (DatabaseName)](/docs/kb/auditor/system-administration/database-management/could-not-allocate-space-for-object-objectname-in-database-databasename)

