---
description: >-
  This article explains how to resolve the "Database owner SID mismatch" error
  that prevents data change monitoring in Netwrix Auditor. It includes the
  cause, the exact ALTER AUTHORIZATION command to run, and steps to prevent the
  issue from recurring.
keywords:
  - database owner
  - SID mismatch
  - SQL Server
  - Netwrix Auditor
  - ALTER AUTHORIZATION
  - triggers
  - data changes monitoring
  - master database
  - Health Log
  - database owner account
products:
  - auditor
sidebar_label: 'Error: Database Owner SID Mismatch'
tags: []
title: 'Error: Database Owner SID Mismatch'
knowledge_article_id: kA00g000000H9YICA0
---

# Error: Database Owner SID Mismatch

## Symptoms

All of the following symptoms are present in your Netwrix Auditor environment:

- Netwrix Auditor monitors changes to data in the database tables in your environment.
- The **Use triggers for detailed monitoring** option is enabled.
- Auditor prompts the following error in Health Log for your SQL Server monitoring plan

```text
Monitoring plan: %SQL_Server_Monitoring_plan_name%
Database owner SID stored in %DB_Name% database differs from database owner SID stored in the master database.
Data changes monitoring will not work.
```

## Cause

Refer to the possible causes:

- The owner account of the affected database is no longer valid. Learn more about possible causes in MSSQLSERVER_15517 ⸱ Microsoft: http://support.microsoft.com/kb/913423/en-us

## Resolution

To resolve the issue and assign a new owner to the affected database, execute the following command in SQL Server Management Studio:

```sql
ALTER AUTHORIZATION ON DATABASE:: DBName TO [NewLogin]
```

Replace the `DBName` value with the name of the affected database. Replace the `NewLogin` value with the new owner value as listed in **Security** > **Logins** of your SQL Server Object Explorer. Refer to the following example:

```sql
ALTER AUTHORIZATION ON DATABASE:: Netwrix_Auditor_AD TO [SQLAdmin]
```

Learn more about the `ALTER AUTHORIZATION` command in ALTER AUTHORIZATION (Transact-SQL) ⸱ Microsoft: https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-authorization-transact-sql?view=sql-server-ver16

To prevent this issue from recurring, refer to the following steps:

1. Verify the database properties. If the **Owner** property is empty, the database owner account is no longer valid.
2. When you restore databases to be audited from backup, verify the database owners specified in the **master** and affected databases match.

## Related Articles

- MSSQLSERVER_15517 ⸱ Microsoft: http://support.microsoft.com/kb/913423/en-us
- ALTER AUTHORIZATION (Transact-SQL) ⸱ Microsoft: https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-authorization-transact-sql?view=sql-server-ver16
