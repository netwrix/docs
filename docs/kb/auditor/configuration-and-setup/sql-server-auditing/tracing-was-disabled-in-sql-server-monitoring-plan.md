---
description: >-
  Explains why Netwrix Auditor logs indicate that SQL Server tracing was
  disabled for a monitoring plan, and provides troubleshooting steps to restore
  and preserve SQL tracing for accurate auditing.
keywords:
  - SQL Server tracing
  - Netwrix Auditor
  - sqlcr_sp.sql
  - sqlcr_startup.sql
  - SQL trace logs
  - antivirus exclusions
  - monitoring plan
products:
  - auditor
sidebar_label: Tracing Was Disabled in SQL Server Monitoring Plan
tags: []
title: "Tracing Was Disabled in SQL Server Monitoring Plan"
knowledge_article_id: kA00g000000H9YKCA0
---

# Tracing Was Disabled in SQL Server Monitoring Plan

## Symptoms

- Reports and Activity Summaries return the **System** value in the **Who** field.
- Activity Summaries and Health Log for the SQL Server monitoring plan contain the following errors:

```text
Tracing was disabled on the %SQL_Server_name% server.
As a result, SQL Server logon activity data may be lost.
SQL Server change reports may show incorrect data in the 'Who' and 'When' fields.
```

```text
Tracing is required for successful change and logon activity auditing, and it has been automatically enabled.
```

```text
The Who Changed and When Changed fields in the change report may show incorrect data
because tracing was disabled on the %SQL_Server_name% during report generation. 
Tracing is required for the change reporting process
and it has been automatically enabled for future reports.
```

## Causes

- If logged once upon the first data collection, Netwrix Auditor automatically detected the default SQL Server log path and enabled the tracing via this path. This is a standard notification sent after the first data collection. These errors can be ignored.
- If logged repeatedly upon each data collection, SQL Server is misconfigured as it does not return the default SQL server log path. Netwrix Auditor cannot enable the audit tracing.
- If logged repeatedly upon every SQL server restart, SQL Server tracing stops on every reboot.
- If logged every day, the antivirus exclusions in your environment may be misconfigured.

## Resolutions

### Resolution 1 − Include the traces folder to AV exclusions

Add the folder containing traces to exclusions of your antivirus suite. Refer to the following default path for traces storage:

```text
C:\Program Files\Microsoft SQL Server\MSSQL%V%.MSSQLSERVER\MSSQL\Log
```

Learn more in Configure antivirus software to work with SQL Server ⸱ Microsoft &#129125;:
https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/security/antivirus-and-sql-server

### Resolution 2 − Specify the default path to SQL Server trace logs

Refer to the following steps to specify the default path to SQL Server trace logs:

- Locate the `pathtotracelogs.txt` file in %Netwrix_Auditor_installation_folder%\SQL Server Auditing. Refer to the following default path:

```text
C:\Program Files (x86)\Netwrix Auditor\SQL Server Auditing
```

- Specify the UNC path to your SQL Server instance following the reference example:

```text
SQLSRV01\MSSQL2016|C:\Logs\SQL trace logs\
```

> **NOTE:** If you would like to specify trace logs locations for multiple instances of one SQL server, make sure the specified UNC paths are unique across these instances.

### Resolution 3 − Manually enable SQL tracing

Refer to the following prerequisites to comply with:

- The user must be a member of the Domain Admins group.
- The SQL Server instance stores logs in the default path:

```text
%Program Files%\Microsoft SQL Server\MSSQL\Log
```

To verify the path, refer to the following steps:

1. Launch **SQL Server Management Studio**.
2. Right-click the server in **Object Explorer**, and select **Properties**.
3. In the left pane, select **Database Settings**, and review the **Log** location in the **Database default locations** section.

> **IMPORTANT:** In case the **Log** path in your SQL Server instance differs from ` %Program Files%\Microsoft SQL Server\MSSQL\Log`, edit the `sqlcr_sp.sql` file. Change the path stated in the `SET @pathtolog =` line to the **Log** path before running the script.

Refer to the following steps to enable SQL tracing:

1. In your Netwrix Auditor server, navigate to `C:\Program Files(x86)\Netwrix Auditor\SQL Server Auditing`.
2. Locate the `sqlcr_sp.sql` and `sqlcr_startup.sql` script files.

> **IMPORTANT:** In case the **Log** path in your SQL Server instance differs from ` %Program Files%\Microsoft SQL Server\MSSQL\Log`, edit the `sqlcr_sp.sql` file. Change the path stated in the `SET @pathtolog =` line to the **Log** path before running the script.

3. Connect to the affected SQL server.
4. Run the `sqlcr_sp.sql` script file in the affected server to store a procedure with special settings.
5. Run the `sqlcr_startup.sql` script file in the affected server to create a special stored procedure for SQL server reboot instances.
6. Once completed, the special tracing settings will be enabled automatically each time your SQL server restarts.
7. Wait for the next data collection or launch it manually. In the main Netwrix Auditor screen, select **Monitoring Plans** > select your SQL monitoring plan and click **Edit** > click **Update** in the right pane.

## Related articles

- Configure antivirus software to work with SQL Server ⸱ Microsoft &#129125;  
  https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/security/antivirus-and-sql-server
