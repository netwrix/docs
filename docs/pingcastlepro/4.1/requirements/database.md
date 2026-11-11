---
title: "Database requirements"
description: "Review the database types that PingCastle Pro supports and the permissions its database account needs."
sidebar_position: 20
---

# Database

PingCastle Pro uses a database to store its data.

The supported databases are:

- **SQL Server**: Any supported edition, including SQL Server Express
  - **SQL Server Express**: Suitable for testing and small environments
  - **SQL Server Standard**: Recommended for production environments
  - **SQL Server Enterprise**: Supported for high-availability production environments
- **PostgreSQL**: Any supported edition. PingCastle Pro provides partial support for PostgreSQL on a best-effort basis.

:::note
Netwrix may support other databases that Entity Framework Core supports, such as SQLite and MySQL, on demand. Contact Netwrix to request support for a specific database.
:::

## General database requirements

Database backups are your responsibility.

PingCastle Pro requires a database user account with database owner permissions. The application creates and updates its database tables during initial setup and software updates.

## SQL Server permissions

When you connect to an existing database, the account PingCastle Pro uses requires database owner permissions. If PingCastle Pro runs under the IIS application pool's Windows account, grant the permissions with the following SQL:

```sql
IF NOT EXISTS (SELECT loginname FROM master.dbo.syslogins
WHERE loginname = 'IIS APPPOOL\PingCastlePro')
BEGIN
    CREATE LOGIN [IIS APPPOOL\PingCastlePro] FROM WINDOWS;
END

USE PingCastlePro;
EXEC sp_addrolemember 'db_owner', 'IIS APPPOOL\PingCastlePro';
```

Replace `PingCastlePro` with your application pool name and database name.
