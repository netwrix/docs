---
title: "Sql Server Entitlements"
description: "Sql Server Entitlements"
sidebar_position: 310
---

# Sql Server Entitlements

This connector exports entitlements from [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/).

This page is about [SQL Server Entitlements](../../../integration-guide/connectors/references-packages/sql-server-entitlements).

![Package: Database/Microsoft SQL Server Entitlements](/images/identitymanager/integration-guide/connectors/references-connectors/sqlserverentitlements/packages_sqlservermanagement_v603.webp)

## Overview

Identity Manager can manage permissions within Microsoft SQL Server, by exporting the server's and databases' principals, i.e. entities that can request Microsoft SQL Server's resources.

SQL Server supports three types of principals:

- logins at the server level;
- users at the database level;
- roles (if any) at either level.

Every principal includes a security identifier (SID).

## Prerequisites

Implementing this connector requires:

- the configuration of a Microsoft SQL Server system;

    > For example, for Microsoft SQL Server 2017, see Microsoft's documentation for
    > [planning a SQL Server installation](https://docs.microsoft.com/en-us/sql/sql-server/install/planning-a-sql-server-installation?view=sql-server-2017),
    > the
    > [SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2017)
    > and (optionally)
    > [downloading SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15);

- understanding the concept of principals, roles and permissions;

    > A little help on that with:
>
    > > [Principals (Database Engine)](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/principals-database-engine?view=sql-server-2017);
>
    > > [Create a Login](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-login?view=sql-server-2017);
>
    > > [Server-Level Roles](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-2017);
>
    > > [Create a Database User](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-database-user?view=sql-server-2017);
>
    > > [Database-Level Roles](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-2017);
>
    > > [Permissions (Database Engine)](https://docs.microsoft.com/en-us/sql/relational-databases/security/permissions-database-engine?view=sql-server-2017);
>
    > > [Permissions Hierarchy (Database Engine)](https://docs.microsoft.com/en-us/sql/relational-databases/security/permissions-hierarchy-database-engine?view=sql-server-2017).

- a `ConnectionString` with a `Login` to connect to the SQL Server, where either the login has the
**sysadmin** role, or:

    - the login has the **securityadmin** role, in order to export **server principals**;
    - each database to export has a database user attached to the login with at least one role among
**db_accessadmin**, **db_owner** and **db_securityadmin**, in order to export **database principals**.

[Securables](https://docs.microsoft.com/en-us/sql/relational-databases/security/securables?view=sql-server-2017) can also be defined manually for both the server and **database principals**, but this is more complicated and hence not recommended.

## Export

This connector exports from one or several databases to CSV files the following tables:

- `sys.server_principals`;
- `sys.server_role_members`;
- `sys.database_principals`;
- `sys.database_role_members`.

This connector exports only in complete mode.

### Configuration

This process is configured through a [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) in the UI and/or the XML configuration, and in the `*appsettings.agent.json* > Connections` section:

```json
*appsettings.agent.json*
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example connects Identity Manager to Microsoft SQL Server and exports the principals
> from the databases `UsercubeDemo` and `AdventureWorks2017`:
>
> ```
> *appsettings.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "SqlServerEntitlementsExport": {
>       "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;",
>       "Databases": ["UsercubeDemo", "AdventureWorks2017"]
>     }
>   }
> }
> ```

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | ConnectionString required | **Type** String **Description** Connection string of the database. See the [specific syntax](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0). | 
 | Timeout optional | **Type** Int32 **Description** Time period (in seconds) after which the request attempt is terminated and an error is generated. | 
 | --- | --- | 
 | --- | --- | 
 | Databases optional | **Type** String List **Description** List of databases to be exported. **Note:** when not specified, all databases from the SQL Server are exported. | 

### Output details

This connector is meant to generate to the [Application Settings](../../../integration-guide/network-configuration/agent-configuration/appsettings)Export Output folder the following CSV files:

- `<connectionIdentifier>_serverPrincipals.csv`;
- `<connectionIdentifier>_serverRoleMembers.csv`;
- `<connectionIdentifier>_databasePrincipals.csv`;
- `<connectionIdentifier>_databaseRoleMembers.csv`.

> For example, if the connection identifier is **SqlServerEntitlementsExport**, then the file names
> are `SqlServerEntitlementsExport_serverPrincipals.csv`, etc.

The output files' columns are the columns returned by the SQL query.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection), configured in
the `appsettings.encrypted.agent.json` file;
- An [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) safe;

 | Attribute | Naming Convention for the Key in Azure Key Vault | 
 | --- | --- | 
 | ConnectionString | `Connections--<identifier>--ConnectionString` | 
 | Timeout | `Connections--<identifier>--Timeout` | 

[Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) is not available for this connector.

