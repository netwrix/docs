---
title: "Database"
description: "Database"
sidebar_position: 20
---

# Database

This section identifies hardware and software requirements for Identity Manager's database.

## Hardware

The database disk storage requirements depend on multiple factors as the database lifespan and the
number of entries, for example 100,000 users can take up appropriately 10 GB of storage

:::note
The maximum SQL Express database is 10 GB.
:::


## Software

Identity Manager uses a
[SQL Server database](https://www.microsoft.com/en-us/sql-server/sql-server-2019) and supports SQL
Server 2016 or later.

The
[database requirements](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server?view=sql-server-ver15)
may depend on the chosen SQL Server edition and version.

### Recommended features

The following features are also highly recommended:

- [Always On availability groups](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/always-on-availability-groups-sql-server):
  only available in the Enterprise edition of SQL Server 2016 or later

    > **FAQ**:
    > [How to enable Always On availability groups in SQL Server?](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/enable-and-disable-always-on-availability-groups-sql-server?view=sql-server-ver15)

- [Database Mirroring](https://docs.microsoft.com/en-us//sql/database-engine/database-mirroring/database-mirroring-sql-server?view=sqlallproducts-allversions):
  available in all editions of SQL Server 2016 or later

    > **FAQ**:
    > [How to enable database mirroring in SQL Server?](https://docs.microsoft.com/en-us/sql/database-engine/database-mirroring/setting-up-database-mirroring-sql-server?view=sql-server-ver15)

- [Table Partitioning](https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes?view=sql-server-ver15)

    The data history feature introduced in Identity Manager v5.1.0, might cause some tables to grow
    significantly.

    Database performance is greatly improved by enabling the
    [Table Partitioning](https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes?view=sql-server-ver15)
    feature for the `UR_Resource` and `UP_Assigned*` tables:

    | `UP_Assigned*` Tables      |
    | -------------------------- |
    | UP_AssignedResourceTypes   |
    | UP_AssignedSingleRoles     |
    | UP_AssignedCompositeRoles  |
    | UP_AssignedNavigationRules |
    | UP_AssignedScalarRules     |

    This feature is available and enabled by default in SQL Server 2016 or later.

    > **FAQ**:
    > [How to create partitioned tables and indexes?](https://docs.microsoft.com/en-us/sql/relational-databases/partitions/create-partitioned-tables-and-indexes?view=sql-server-ver15)

### Additional tools

The installation and setup of the database require using either
[SQL server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
or the
[`sqlcmd` command line tool](https://docs.microsoft.com/en-us/sql/ssms/scripting/sqlcmd-use-the-utility?view=sql-server-ver15).

## SQL Server Authentication

Identity Manager can authenticate to SQL Server using either a SQL Server authentication login or a
Windows authentication login.

Netwrix recommends using the
[Windows authentication login](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15)
to avoid storing a plain text password in the technical configuration files.

## SQL Server Roles

The database administrator must be able to assign the following roles to the service account used by
Identity Manager to access the SQL Server database:

- `db_owner` which is a
  [database-level role](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver15).
  This role grants its owner the authorization to perform all configuration and maintenance
  activities on the database, and to drop the database in SQL Server.
- `bulkadmin` which is a
  [server-level role](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15).
  This role grants its owner the authorization to perform bulk operations on the database.

    Although `bulkadmin` is a server-level role, it still requires Identity Manager to have
    database-level permissions granted by the `db_owner` role. It means that bulk operations can be
    performed on the database only if Identity Manager has been granted the `db_owner` role.

    Granting `bulkadmin` role to the server's service account requires access to an account member
    of the `sysadmin` or `securityadmin` server-level role on the target SQL Server. See the
    [Install the Server](/docs/identitymanager/saas/installation-guide/production-ready/server/index.md) topic for additional information.

For more information about identity and permission management in SQL Server, see
[Microsoft's documentation](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/getting-started-with-database-engine-permissions?view=sql-server-ver15).

## Shared SQL Server and Dedicated Database

Identity Manager's SQL Server installation can be used to host other database applications.

Identity Manager's database itself must be used exclusively for Identity Manager.

## Connection to the Server

SQL feed must be open from Identity Manager's server to SQL Server.

## Optimization

The
[max degree of parallelism (MAXDOP)](https://learn.microsoft.com/en-us/azure/azure-sql/database/configure-max-degree-of-parallelism?view=azuresql-db)
must be set to 1 in the SQL database.

## What's Next?

Let's move on to the requirements for Identity Manager's server. See the
[Server](/docs/identitymanager/saas/installation-guide/requirements/server-requirements/index.md) topic for additional information.
