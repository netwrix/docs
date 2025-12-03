---
description: >-
  Shows how to configure SQL Server auditing in Netwrix Auditor to capture
  updates and deletions while ignoring insertions by modifying trigger and
  stored procedure scripts and using exclusion rules.
keywords:
  - SQL Server
  - auditing
  - triggers
  - netwrix auditor
  - sp_Netwrix_WriteEvent
  - ignore insert
  - update
  - delete
products:
  - auditor
sidebar_label: Configure SQL Server Auditing to Ignore Addition
tags: []
title: "Configure SQL Server Auditing to Ignore Addition"
knowledge_article_id: kA00g000000H9VoCAK
---

# Configure SQL Server Auditing to Ignore Addition

## Question

How to configure SQL Server Auditing to monitor modifications and deletion, and ignore addition of data?

## Answer

> **IMPORTANT:** An elevated server role in SQL Server is required to perform the following actions. The `sysadmin` role will allow you to follow the instructions.

1. In your SQL Server monitoring plan, click **Edit data source** in the right pane > select the **Data** tab > switch the **Monitor changes to data in the database tables** switch on.
2. Enable the **Use triggers for detailed monitoring** switch.
3. Add inclusion rules for target databases, tables and columns. Click **Save & Close**.
4. Update your SQL Server monitoring plan by clicking **Update** in the right pane.
5. Once the status switches to **Ready**, open SQL Server Management Studio and connect to your SQL Server instance.
6. In the left pane, select **Databases** > **%target_data_base%** > **%target_table%** > the **Triggers** folder > right-click the **netwrix_audit_trg_%table_name%** trigger > **Script Trigger as** > **CREATE To** > **New Query Editor Window**.
7. Locate the following line:

```sql
AFTER INSERT, UPDATE, DELETE
```

   Modify it to read as follows:

```sql
AFTER UPDATE, DELETE
```

   Keep the query window open.
8. In the left pane, select **%target_data_base%** > **Programmability** > **Stored Procedures** > right-click **dbo.sp_Netwrix_WriteEvent** and select **Script Stored Procedure** > **CREATE To** > **New Query Editor Window**. Keep the new query window open.
9. Return to your SQL Server monitoring plan menu in Netwrix Auditor. Click **Edit data source** in the right pane > select the **Data** tab > edit the inclusion rule type for the target database, table, etc. > modify the **Type** field to state **Exclude**. Click **Save & Close**.
10. Update your SQL Server monitoring plan by clicking **Update** in the right pane.
11. Once the status switches to **Ready**, return to SQL Server Management Studio, select the **dbo.sp_Netwrix_WriteEvent** query window and click **Execute**.

> **NOTE:** The **dbo.sp_Netwrix_WriteEvent** query window will contain the `CREATE PROCEDURE [dbo].[sp_Netwrix_WriteEvent]` line.

The `Commands completed successfully` message will confirm the successful query execution.

12. Select the **netwrix_audit_trg_%table_name%** query window and click **Execute**.

> **NOTE:** The **netwrix_audit_trg_%table_name%** query window will contain the `CREATE TRIGGER [dbo].[Netwrix_audit_trg_%table_name%]` line.

The `Commands completed successfully` message will confirm the successful query execution.

To run the query against each table, modify the following line in the `CREATE TRIGGER` query window:

1. Locate the following line:

```sql
SET @table_name = N'%target_table_name%'
```

   The placeholder could be represented by any table name (e.g., `dbo.AzureDirectoryRoles`).
2. Replace the placeholder with the target table name.
3. Run the query once you replace the table name.
4. Repeat for every target table.

While the target database, table, or column will be shown as excluded in Netwrix Auditor, audit data will be collected.
