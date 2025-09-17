---
description: >-
  Explains how Netwrix Auditor for SQL Server collects configuration and
  database content change data, the traces and triggers it uses, and where audit
  data is stored.
keywords:
  - netwrix
  - sql server
  - auditing
  - traces
  - triggers
  - Netwrix Auditor
  - .trc
  - NetwrixSQLaudit
  - sqlcr_db.sql
products:
  - auditor
sidebar_label: How Netwrix Auditor for SQL Server Collects Data
tags: []
title: "How Netwrix Auditor for SQL Server Collects Data"
knowledge_article_id: kA00g000000H9VMCA0
---

# How Netwrix Auditor for SQL Server Collects Data

## Question
How does Netwrix Auditor for SQL Server work? What is the data source for it?

## Answer
There are two options for monitoring SQL servers within Netwrix Auditor.

**1. Audit SQL server configuration changes**  
To find these changes Netwrix Auditor for SQL Server collects a state snapshot from the server, compares it with the previously taken snapshot, and determines what was changed. To get WHO CHANGED WHEN CHANGED information for found changes the product uses internal SQL Server traces.

**If there is no tracing enabled**, changes will be reported as made by the system. That is why the product checks if internal SQL audit mechanism is enabled and enables it if needed during every data collection as follows:

When enabling internal SQL traces, the following parameters are used:

```
@pathtolog = retrieved from SQL server.
@option_value = 2
@max_file_size = 100
@max_rollover_files = 6
@on=1
@create_trace = 0
@create_filter_trace = 0
@create_filter_stmt_trace = 0
@traceName = @pathtolog + N'netwrix sql cr trace'
@traceFilterName = @pathtolog + N'netwrix sql cr filter trace'
@traceFilterStmtName = @pathtolog + N'netwrix sql cr stmt trace'
```

Then audit traces are enabled by means of the `exec sp_trace_setevent @traceName_id,%eventID%, @current_num,@on` command. The following traces are enabled:

- 102 -- Audit Statement GDR Event
- 103 -- Audit Object GDR Event
- 104 -- Audit AddLogin Event
- 105 -- Audit Login GDR Event
- 106 -- Audit Login Change Property Event
- 108 -- Audit Add Login to Server Role Event
- 109 -- Audit Add DB User Event
- 110 -- Audit Add Member to DB Role Event
- 128 -- Audit Database Management Event
- 129 -- Audit Database Object Management Event
- 130 -- Audit Database Principal Management Event
- 131 -- Audit Schema Object Management Event
- 135 -- Audit Database Object Take Ownership Event
- 152 -- Audit Change Database Owner
- 170 -- Audit Server Scope GDR Event
- 171 -- Audit Server Object GDR Event
- 172 -- Audit Database Object GDR Event
- 176 -- Audit Server Object Management Event
- 177 -- Audit Server Principal Management Event

The list of variables and events can be easily found in the `sqlcr_db.sql` file located in the program installation directory (by default - `C:\Program Files (x86)\Netwrix Auditor\SQL Server Auditing`).

All internal traces are stored in `.trc` files in the SQL Server logs folder - by default, it is `C:\Program Files\Microsoft SQLServer\MSSQL.2\MSSQLLOG`. There is a size limit for these files - 100 Mb per file. It is allowed to create 6 trace files so the maximum log size is **600 Mb.** The oldest one gets automatically removed once the size limit is reached.

More information about internal SQL Server audit can be found in the following Microsoft article: https://learn.microsoft.com/en-us/previous-versions/sql/sql-server-2008-r2/ms191006(v=sql.105)?redirectedfrom=MSDN

Also, the detailed list of monitored objects can be found in the following article: https://docs.netwrix.com/docs/auditor/10_8/configuration/sqlserver/overview

**2. Audit database content changes**  
For more in-depth auditing of SQL databases, Netwrix Auditor for SQL Server — database content auditing can be enabled. If the **Monitor changes to data in the database tables** option is enabled, the product performs the following steps:

- For each database, it checks for the corresponding owner record in the Master database and on current database and enables `TRUSTWORTHY` property (review the following for more information: https://learn.microsoft.com/en-us/sql/relational-databases/security/trustworthy-database-property?view=sql-server-ver16&redirectedfrom=MSDN) for the current database.
- Creates an additional database - **NetwrixSQLCRaudit**, that is used to store information about all changes to other databases.
- Creates a trigger called `Netwrix_audit_trg_%tablename%` in every table of monitored databases that logs transaction info to the `NetwrixSQLaudit` database.
- Creates additional table - `dbo.Netwrix_Audit_errors` - in each database and is used to store info about all errors that occurred during the audit process.

Data on **Who changed** is again got from internal SQL traces. The product itself runs on scheduled tasks, gathers all `.trc` files and information from `NetwrixSQLaudit` DB, and generates reports based on this information. All `dbo.Netwrix_Audit_errors` tables and `NetwrixSQLaudit` database get cleared once data is collected from them. By default, it is done once a day. All changes which are performed within the 2nd option (enabling database content auditing) can be reverted by running the `sqlcr_remove_audit_from_db.sql` script located in the program installation directory against each affected database. To run this script, open it in SQL Server Management Studio, connect to the target SQL Server instance, type the target database name in square parentheses `[]` and click the **Execute** button.

### 2.1 Triggerless Collection
Triggerless collection is another method of collecting database content changes, which uses SQL Trace Log instead of triggers. It checks the event called **Audit Schema Object Access** with filter **Permissions** = 1 (SELECT ALL) or 2 (UPDATE ALL) | 8 (INSERT) | 16 (DELETE) on the database logs. Collector gathers new information from SQL trace log every 5 minutes. Event filtration happens on the trace log level i.e. Events that are either omitted from logging or outside of the scope of the collector will not be gathered.
