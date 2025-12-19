---
description: >-
  Provides T-SQL queries to identify active transactions that are consuming
  TempDB and guidance about a temporary restart as a workaround.
keywords:
  - TempDB
  - SQL Server
  - transactions
  - DBCC OPENTRAN
  - DBCC SQLPERF
  - sys.databases
  - sys.dm_tran_active_transactions
products:
  - access-analyzer
sidebar_label: How to Identify Active Transactions Filling the Te
tags:
  - database-auditing-and-configuration
title: "How to Identify Active Transactions Filling the TempDB"
knowledge_article_id: kA0Qk0000001sETKAY
---

# How to Identify Active Transactions Filling the TempDB

## Related Query

- "Our application is not functioning, and we are receiving reports that the TempDB is full. What is filling up the TempDB?"

## Question

How can you identify which transactions are active and clogging the TempDB?

## Answer

The following statements will help to identify which transactions are active and filling the TempDB. Analysis of these results will help to isolate which transactions are at fault.

> **NOTE:** The data in TempDB is retained until the restart of the server. If you are in critical need of space after running the below queries, please restart your SQL Server as a temporary fix.

- Determines Size and Usage of Transaction Log:
```sql
DBCC SQLPERF(LOGSPACE);
```

- Checks for Active Transactions:
```sql
SELECT 
    database_id,
    DB_NAME(database_id) AS DatabaseName,
    log_reuse_wait_desc
FROM 
    sys.databases;
```

- Finds Open Transactions:
```sql
DBCC OPENTRAN;
```

- Checks for Uncommitted Transactions
```sql
SELECT 
    transaction_id,
    transaction_state,
    name AS TransactionName,
    transaction_begin_time
FROM 
    sys.dm_tran_active_transactions;
```
