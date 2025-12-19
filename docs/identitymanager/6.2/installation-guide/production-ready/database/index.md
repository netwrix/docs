---
title: "Install the Database"
description: "Install the Database"
sidebar_position: 20
---

# Install the Database

The Identity Manager Database can be installed on the Server workstation or on a separate machine.

Please make sure that the [Database](/docs/identitymanager/6.2/installation-guide/requirements/database-requirements/index.md) requirements
are met before going further.

## Steps

### 1. Install SQL server

Microsoft's extensive documentation can be used to get help
[installing a SQL Server 2016 or later](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server).

### 2. Create the database

The recommended naming convention is `Usercube<Organization>`, where `<Organization>` is the name of
the organization targeted by this installation.

> **FAQ**:
> [How to create a database in SQL Server?](https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database?view=sql-server-ver15)

The database name is of no technical importance, but following the naming convention will make it
easier to read the guide.

### 3. Initialize the database

The database scheme can be initialized by running the `Usercube.sql` script (found in the
`SQL_<version>.zip` archive) on the newly created database.

Preferred methods include
[SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
and
[command line](https://docs.microsoft.com/en-us/sql/ssms/scripting/sqlcmd-use-the-utility?view=sql-server-ver15).

#### Example of procedure for SQL Server Management Studio 2019

- Open SQL Server Management Studio.
- Connect to your SQL Server instance.
- In the top left corner, select **File** > **Open** > **File**.
- Select the `Usercube.sql` file.
- Open the file. The file is now open in the main SQL Server Management Studio window.
- Locate the database name dropdown, next to the **Execute** button in the top left section of the
  screen.

![Execute Query](/images/identitymanager/saas/installation-guide/production-ready/database/execute_query.webp)

- From the dropdown, select the newly created database.
- Click **Execute**.

#### Example using the sqlcmd CLI

```
sqlcmd -S <ComputerName>\<InstanceName> -d Usercube<Organization_name> -i <Usercube.sql>
```

## What's Next?

The next step will consist in:

- Setting up the Identity Manager Server as an IIS website.
- Creating a custom service account.
- Granting the necessary database permissions for this account.

It will also show how to test the Identity Manager Database connection. See the
[Install the Server](/docs/identitymanager/6.2/installation-guide/production-ready/server/index.md) topic for additional information.
