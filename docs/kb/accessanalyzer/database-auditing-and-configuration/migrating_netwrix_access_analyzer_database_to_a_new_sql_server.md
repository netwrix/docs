---
description: >-
  This article provides step-by-step instructions for migrating the Netwrix Access Analyzer database to a new SQL Server, including necessary permissions and storage configuration updates.
keywords:
  - Access Analyzer
  - SQL Server migration
  - database permissions
sidebar_label: Migrate Access Analyzer Database
tags: []
title: "Migrating Netwrix Access Analyzer Database to a New SQL Server"
knowledge_article_id: kA0Qk0000002xgjKAA
products:
  - accessanalyzer
---

# Migrating Netwrix Access Analyzer Database to a New SQL Server

## Related Queries

- "How do I move the Access Analyzer database to a new SQL Server?"
- "What permissions do Access Analyzer service accounts need after a database migration?"
- "Why does Access Analyzer fail to connect after restoring the database on a new server?"

## Overview

This article provides step-by-step instructions for migrating the Netwrix Access Analyzer (formerly Enterprise Auditor) database from an existing Microsoft SQL Server instance to a new one. It includes post-migration SQL permissions required for Windows and SQL accounts used by Access Analyzer and steps for updating storage configuration in the Access Analyzer console.

> **IMPORTANT:** The migration steps below assume you are familiar with [Microsoft’s standard best practices for SQL Server database migration ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/data-migration/) and have prepared your environment accordingly.

## Instructions

### 1. Prepare for Migration

- Back up your Netwrix Access Analyzer database.
- Document all service accounts and Windows accounts used by Access Analyzer for console access, scheduled tasks, and services.
- If Role-Based Access is enabled, ensure you have a record of any custom database roles.

### 2. Migrate the Database

- Follow [Microsoft’s best practices for moving SQL databases ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/data-migration/) to detach, copy, and attach or back up and restore your Access Analyzer database to the new SQL Server.

### 3. Assign Required Permissions

After migration, assign the following permissions for every Windows account or SQL Server account used by Access Analyzer. Replace `<SA User ID>` and `<SA Database>` with your actual user and database names.

```sql
USE [master]
GRANT VIEW ANY DEFINITION TO [<SA User ID>]
GO
USE [<SA Database>]
GO
EXEC sp_addrolemember 'db_datareader', '<SA User ID>'
GO
EXEC sp_addrolemember 'db_datawriter', '<SA User ID>'
GO
GRANT CREATE TABLE TO [<SA User ID>]
GO
GRANT CREATE VIEW TO [<SA User ID>]
GO
GRANT CREATE PROCEDURE TO [<SA User ID>]
GO
GRANT CREATE FUNCTION TO [<SA User ID>]
GO
GRANT CREATE TYPE TO [<SA User ID>]
GO
GRANT REFERENCES ON SCHEMA::dbo TO [<SA User ID>]
GO
GRANT ALTER ON SCHEMA::dbo TO [<SA User ID>]
GO
GRANT EXECUTE ON SCHEMA::dbo TO [<SA User ID>]
GO
GRANT INSERT ON SCHEMA::dbo TO [<SA User ID>]
GO
GRANT UPDATE ON SCHEMA::dbo TO [<SA User ID>]
GO

ALTER USER [<SA User ID>] WITH DEFAULT_SCHEMA = dbo
```

> **NOTE:** If Role-Based Access is used, make sure all required database roles are copied or recreated in the new database. For more information, see [Configuring Roles in Access Analyzer](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/access/rolebased/configureroles).

### 4. Update Access Analyzer Storage Configuration

After restoring the database and setting permissions, follow these steps to reconnect Access Analyzer:

1. Launch **Access Analyzer** on a server where the user has `dbo` access to the new database.
2. When the console opens, an error message may appear stating the database cannot be reached. This is expected.
3. Close the error window.
4. Select **Add New Storage Profile**.  
   > **NOTE:** For more details, see [Add a Storage Profile](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/storage/add).
5. Enter the connection details for the new SQL Server and database.
6. Test connectivity and ensure the console connects successfully.
7. Select the **Set as Default** option on the new storage profile.  
   > **NOTE:** For more details, see [Set a Default Storage Profile](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/storage/default).
8. Close and reopen **Access Analyzer** to verify persistent connectivity.
9. Once you have confirmed successful reconnection, delete the old storage profile.  
   > **NOTE:** For more details, see [Delete a Storage Profile](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/storage/delete).

## Related Links

- [Configuring Roles in Access Analyzer](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/access/rolebased/configureroles)
- [Managing Storage in Access Analyzer](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/storage/overview)
- [Move a Database ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/data-migration/)
- [Add a Storage Profile](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/storage/add)
- [Set a Default Storage Profile](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/storage/default)
- [Delete a Storage Profile](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/storage/delete)