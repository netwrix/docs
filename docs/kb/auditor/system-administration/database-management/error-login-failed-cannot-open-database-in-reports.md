---
description: >-
  Shows how to resolve the "Cannot open database ... The login failed" error
  when opening Netwrix Auditor reports by assigning the db_owner role to the
  Audit Database Account.
keywords:
  - Netwrix Auditor
  - SQL Server
  - login failed
  - db_owner
  - Audit Database Account
  - reports
  - rsProcessingAborted
  - rsErrorOpeningConnection
products:
  - auditor
sidebar_label: 'Error: Login Failed—Cannot Open Database in Report'
tags: []
title: 'Error: Login Failed—Cannot Open Database in Reports'
knowledge_article_id: kA00g000000H9Z1CAK
---

# Error: Login Failed—Cannot Open Database in Reports

## Symptom

When you attempt to open a Netwrix Auditor report, you see the following error:

```text
An error has occurred during report processing. 
(rsProcessingAborted) 
Cannot create a connection to data source ‘DS’. 
(rsErrorOpeningConnection) 
"Cannot open database <%Database_name%> requested by the login. 
The login failed. Login failed for user <%User_name%>"
```

## Cause

The Audit Database Account used to connect to SQL Server does not have the required permissions to access the target SQL database `%database_name%.`

## Resolution

Verify that the **db_owner** role for the target database is assigned to the default Audit Database Account by following the steps below:

1. Navigate to **Start > All Programs > Microsoft SQL Server > SQL Server Management Studio**.
2. In the **Object Explorer** pane of SQL Server Management Studio, navigate to **Security > Logins >** ` %Audit_Database_account%`. Right-click the account and select **Properties**.
3. In the **User Mapping** tab, locate the affected database and verify that the **db_owner** role is assigned. Click **OK** to save the changes.

For additional information on required access rights, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 Audit Database Account — Requirements for SQL Server to Store Audit Data · v10.7).

> **IMPORTANT:** If your account lacks the correct permissions to assign the roles, you can run your SSMS instance in the single-user mode. Learn more in https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/start-sql-server-in-single-user-mode?view=sql-server-ver16 (Single-user Mode for SQL Server · Microsoft &#129125;).

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 Audit Database Account — Requirements for SQL Server to Store Audit Data · v10.7)
- https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/start-sql-server-in-single-user-mode?view=sql-server-ver16 (Single-user Mode for SQL Server · Microsoft &#129125;)
