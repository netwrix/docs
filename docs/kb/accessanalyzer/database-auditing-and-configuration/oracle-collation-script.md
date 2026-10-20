---
description: >-
  This article provides a script to properly update the oracle schema if the collation causes an error.
keywords:
  - Access Analyzer
  - SQL Server
  - Oracle
  - database permissions
sidebar_label: Cannot Resolve the Collation Conflict
tags: []
title: "Cannot Resolve the Collation Conflict Between SQL_Latin1_General_CP1_CI_AS and SQL_Latin1_General_CP1_CS_AS"
products:
  - accessanalyzer
---
# Cannot Resolve the Collation Conflict Between SQL_Latin1_General_CP1_CI_AS and SQL_Latin1_General_CP1_CS_AS

## Related Queries

- Cannot resolve the collation conflict between `SQL_Latin1_General_CP1_CI_AS` and `SQL_Latin1_General_CP1_CS_AS`
- `0-Oracle_Servers` job succeeds but other Oracle collection jobs fail
- `SA_Oracle_Columns` collation conflict
- `SA_Oracle_SDD_MatchHits hit_column` collation issue

## Symptom

In Netwrix Access Analyzer, Oracle collection jobs fail with the following SQL exception, while the `0-Oracle_Servers` job may still complete successfully:

```
Error while running script : Script Name [] , portion [66] : System.Data.SqlClient.SqlException (0x80131904): Cannot resolve the collation conflict between "SQL_Latin1_General_CP1_CI_AS" and "SQL_Latin1_General_CP1_CS_AS" in the equal to operation.
```

You may also observe that other database-related collection jobs fail with the same error if using Access Analyzer v11.6.

## Cause

Access Analyzer uses a case-insensitive (CI) database collation by default, while Oracle’s data dictionary is case-sensitive. Certain Oracle-related columns must therefore use case-sensitive (CS) collation.

Schema updates that enforce this are managed through the `SA_SQL_Patches` table. If the required update is not applied or fails to update properly, those columns remain in CI collation, leading to a collation conflict during Oracle data collection.

## Resolution

> **IMPORTANT:** Back up the Access Analyzer database before making schema changes in SQL Server.
1. Run the following SQL script against the Access Analyzer database to update the affected Oracle collection table columns to the required case-sensitive collation:

```sql
SET ANSI_PADDING ON  
  
/****** SA_Oracle_Columns ******/  
IF EXISTS (  
SELECT 1  
FROM sys.columns c  
WHERE c.object_id = OBJECT_ID('[dbo].[SA_Oracle_Columns]')  
AND c.name = 'column_name'  
AND c.collation_name <> 'SQL_Latin1_General_CP1_CS_AS' )  
BEGIN  
-- Drop the existing constraint  
IF EXISTS (  
SELECT 1  
FROM sys.indexes i  
INNER JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id  
INNER JOIN sys.columns c ON ic.object_id = c.object_id AND ic.column_id = c.column_id  
WHERE i.object_id = OBJECT_ID('[dbo].[SA_Oracle_Columns]') AND i.name = 'UQ_SA_Oracle_Columns_names' )  
BEGIN  
ALTER TABLE [dbo].[SA_Oracle_Columns] DROP CONSTRAINT [UQ_SA_Oracle_Columns_names];  
END  
  
-- Alter the column collation  
ALTER TABLE  COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL;  
  
-- Recreate the constraint  
ALTER TABLE [dbo].[SA_Oracle_Columns] ADD CONSTRAINT [UQ_SA_Oracle_Columns_names] UNIQUE NONCLUSTERED  
(  
[sa_table_id] ASC,  
[column_id] ASC,  
[column_name] ASC  
);  
END  
  
  
/****** SA_Oracle_SDD_MatchHits ******/  
IF EXISTS (  
SELECT 1  
FROM sys.columns c  
WHERE c.object_id = OBJECT_ID('[dbo].[SA_Oracle_SDD_MatchHits]')  
AND c.name = 'hit_column'  
AND c.collation_name <> 'SQL_Latin1_General_CP1_CS_AS' )  
BEGIN  
-- Alter the column collation  
ALTER TABLE [dbo].[SA_Oracle_SDD_MatchHits] ALTER COLUMN [hit_column] [nvarchar](max) COLLATE SQL_Latin1_General_CP1_CS_AS NULL;  
END  
  
GO
```

2. After running the script, run the Oracle collection jobs again and confirm that the collation conflict does not reoccur.
