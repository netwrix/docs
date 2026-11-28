---
title: "SQL Server Authentication Modes for GroupID"
description: "Choose between SQL Server Authentication and Windows Authentication for the GroupID database, and learn the permissions each mode requires."
keywords:
  - directory manager sql server authentication
  - directory manager windows authentication
  - directory manager database permissions
  - db_creator role
  - sql server account
sidebar_position: 40
---

# SQL Server Authentication Modes for GroupID

While setting up GroupID, you must select an authentication mode for connecting to the SQL
Server instance that hosts the GroupID database. There are two possible modes:

- [SQL Server Authentication](#sql-server-authentication)
- [Windows Authentication](#windows-authentication)

## SQL Server Authentication

Create a new SQL Server account for GroupID. You must add the account to the _db_creator_
server role so that it can create and maintain the GroupID database.

The account must also be part of the _db_owner_ database role so that it can run DDL (Data
Definition Language) and DML (Data Manipulation Language) commands. However, unlike in Windows
Authentication mode, you don't need to add the account to the _db_owner_ role because SQL Server
maps _db_creator_ to the _db_owner_ database role by default.

:::note
For SQL Server 2016, 2017, 2019, and 2022 families, every SQL Server account is assigned the
_public_ role. Therefore, the GroupID SQL account belongs to two server roles:
_db_creator_ and _public_.
:::

To add the GroupID SQL account to the _db_creator_ role:

1. Launch SQL Server Management Console.
2. Create a new account for GroupID 11, if needed.
3. Connect to the server using your new GroupID SQL account.
4. Right-click the database server node and click **Properties**.
5. On the **Properties** dialog box, select the **Permissions** page.
6. On the **Explicit** tab, scroll down to the **Connect SQL** permission and select its **Grant**
   checkbox.
7. Click the **Effective** tab. The following permissions should be listed:

    - Connect SQL
    - Create any database
    - View any database

8. Click **OK**.

## Windows Authentication

GroupID works with SQL Server (which hosts the GroupID database) using the
Windows Authentication mode in the context of the account configured in `GroupIDAppPool11` (when
SQL Server is available locally or remotely). GroupID detects this account and
authenticates with it on SQL Server through Windows Authentication.

You can configure a domain account in `GroupIDAppPool11` and use it to connect GroupID to
SQL Server, provided that it has the following permissions on SQL Server:

- The user account type on SQL Server must be a Windows account with db_owner permissions on the
  GroupID database.
- To create a new database, the user account must have the db_creator role and db_owner permissions
  on the master database.

Use a domain account when SQL Server is available remotely or locally. A local Windows account works
only when GroupID and SQL Server are running on the same machine.

The domain account used to connect GroupID with SQL Server must:

- Be a member of the IIS_IUSR and Backup Operators groups.
- Have read/write permissions on the GroupID 11 installation folder:
  `[GroupID installation drive]:\Program Files\Imanami\GroupID 11.0`.

See Also

- [Run the GroupID Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
