---
title: "Sql"
description: "Sql"
sidebar_position: 300
---

# Sql

This connector exports data from one of various
[Database Management Systems](https://en.wikipedia.org/wiki/Database#database-management-systems).

This page is about:

- Database/[Generic SQL](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/generic-sql/index.md);
- Database/[SQL Server](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/sql-server/index.md);
- Database/[MySQL](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/mysql/index.md);
- Database/[ODBC](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/odbc/index.md);
- Database[Oracle Database](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/oracle-database/index.md);
- Database/[PostgreSQL](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/postgresql/index.md);
- [SAP ASE](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/sapase/index.md).

![Package: Directory/Database/Generic SQL](/images/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlgeneric_v603.webp)

![Package: Directory/Database/Microsoft SQL Server](/images/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlserver_v603.webp)

![Package: Directory/Database/MySQL](/images/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlmy_v603.webp)

![Package: Directory/Database/ODBC](/images/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlodbc_v603.webp)

![Package: Directory/Database/Oracle](/images/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqloracle_v603.webp)

![Package: Directory/Database/PostgreSQL](/images/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlpostgre_v603.webp)

![Package: Directory/Database/SAP ASE](/images/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlsap_v603.webp)

## Overview

A database is a collection of relational data which represents some aspects of the real world. A
database system is designed to be built and populated with data for a specific task.

A Database Management System (DBMS) is a software for storing and retrieving users' data while
considering appropriate security measures.

> Some popular DBMS systems are Microsoft SQL Server, MySQL, Oracle, PostgreSQL, etc.

The goal of this connector is to connect to a DBMS and execute a query in order to export a table.

## Prerequisites

Implementing this connector requires:

- the configuration of a DBMS system;
    > For example for Microsoft SQL Server 2017, see Microsoft's documentation for
    > [planning a SQL Server installation](https://docs.microsoft.com/en-us/sql/sql-server/install/planning-a-sql-server-installation?view=sql-server-2017),
    > the
    > [SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2017)
    > and (optionally)
    > [downloading SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15).
- creating a database `MyDb` with several tables and data so the user can query on the database, for
  testing purposes.

## Export

This connector exports the content of any table from an SQL database and writes it to a CSV file.

### Configuration

This process is configured through a
[Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
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

> The following example configures the connection to Microsoft SQL Server and exports the table
> `UC_Connectors` from the database `MyDb`:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SqlExport": {
>       "ConnectionString" : "data source=.;Database=MyDb;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;",
>       "SqlCommand": "SELECT * FROM [MyDb].[dbo].[UC_Connectors]"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                          | Details                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ConnectionString required                     | **Type** String **Description** Connection string of the database. See the [specific syntax](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0).                                                                                                                             |
| Timeout optional                              | **Type** Int32 **Description** Time period (in seconds) after which the request attempt is terminated and an error is generated.                                                                                                                                                                                                                     |
|                                               |                                                                                                                                                                                                                                                                                                                                                      |
| ---                                           | ---                                                                                                                                                                                                                                                                                                                                                  |
| SqlCommand optional                           | **Type** String **Description** SQL request to be executed. **Note:** when not specified and `SqlFile` neither, then all the[Entity Type Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) of this connector will be exported.                                                                                    |
| SqlFile optional                              | **Type** String **Description** Path of the file containing the SQL request to be executed. **Note:** ignored when `SqlCommand` is specified. **Note:** when not specified and `SqlFile` neither, then all the [Entity Type Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) of this connector will be exported. |
| CsvEncoding default value: UTF-8              | **Type** String **Description** Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                  |
| ProviderClassFullName optional                | **Type** String **Description** Invariant name to register the provider. **Note:** required when querying a DBMS other than Microsoft SQL Server.                                                                                                                                                                                                    |
| ProviderDllName optional                      | **Type** String **Description** DLL, i.e. name and extension, to be loaded by the connector. **Note:** the DLL must be in the `Runtime` folder. **Note:** required when querying a DBMS other than Microsoft SQL Server.                                                                                                                             |
| IsolationLevel default value: ReadUncommitted | **Type** String **Description** Locking behavior of the transaction: `ReadUncommitted`; `ReadCommitted` - used for the databases that do not support the ReadUncommitted level, like Oracle databases.                                                                                                                                               |

### Connect to other DBMS

Connect to a DBMS other than Microsoft SQL Server by proceeding as follows:

1. Download and extract the package.
    > For MySQL, download the package from [MySql.Data](https://www.nuget.org/packages/MySql.Data/).
    >
    > ![MySQL: Download Package](/images/identitymanager/integration-guide/connectors/references-connectors/sql/sql_downloadpackage.webp)
2. Copy the DLL file (corresponding to the correct .Net version) to the `Runtime` folder.
    > For MySQL, the DLL is `MySql.Data.dll`.
3. Get the value required for `ProviderClassFullName` and `ProviderDllName`:

    - for a DBMS handled by Identity Manager's packages, by accessing the
      [References: Packages](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/index.md);

        > For MySQL:
        >
        > ![Package Characteristics Example](/images/identitymanager/integration-guide/connectors/references-connectors/sql/sql_packagecharacteristics.webp)

    - for another DBMS, by accessing the DBMS' documentation for .Net and finding a class with
      **Factory** in its name.

        > If MySQL were not part of Identity Manager's packages, you would see
        > [MySqlClientFactory](https://dev.mysql.com/doc/dev/connector-net/latest/api/data_api/MySql.Data.MySqlClient.MySqlClientFactory.html).

        The **Factory** class must derive from **DbProviderFactory**. After verification, the
        `ProviderClassFullName` can be found in the **Inheritance Hierarchy** of the class.

        > For MySQL, here `ProviderDllName` is **MySql.Data.dll** and `ProviderClassFullName` is
        > **MySql.Data.MySqlClient.MySqlClientFactory**.
        >
        > Then the following example configures the connection to MySQL and exports the table
        > `UC_Connectors` from the database `MyDb` (the SQL command is inside `mySql.sql`):
        >
        > ```
        > appsettings.agent.json
        > {
        >   ...
        >   "Connections": {
        >     ...
        >     "SqlExport": {
        >       "ConnectionString" : "Server=localhost;Database=MyDb;Uid=root;Pwd=secret",
        >       "SqlFile": "C:/identitymanagerDemo/Conf/Sql/mySql.sql",
        >       "ProviderClassFullName": "MySql.Data.MySqlClient.MySqlClientFactory",
        >       "ProviderDllName": "MySql.Data.dll"
        >     }
        >   }
        > }
        > ```
        >
        > Another example for ODBC:
        >
        > ```
        > appsettings.agent.json
        > {
        >   ...
        >   "Connections": {
        >     ...
        >     "SqlExport": {
        >       "ConnectionString": "Driver=ODBC Driver 17 for SQL Server;Server={YOUR-PC}\\SQLEXPRESS;Database={Database Name};Hostname=Localhost;DBALIAS={Database Alias};trusted_connection=Yes",
        >       "ProviderClassFullName": "System.Data.Odbc.OdbcFactory",
        >       "ProviderDllName": "System.Data.Odbc.dll",
        >       "SqlCommand": "SELECT * FROM {Table Name}",
        >       "IsolationLevel": null
        >     }
        >   }
        > }
        > ```

### Output details

This connector is meant to generate to the
[Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)Export
Output folder one CSV file, named `<connectionIdentifier>.csv` whose columns correspond to the
columns returned by the SQL query.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe;

| Attribute             | Naming Convention for the Key in Azure Key Vault   |
| --------------------- | -------------------------------------------------- |
| ConnectionString      | `Connections--<identifier>--ConnectionString`      |
| SqlCommand            | `Connections--<identifier>--SqlCommand`            |
| SqlFile               | `Connections--<identifier>--SqlFile`               |
| CsvEncoding           | `Connections--<identifier>--CsvEncoding`           |
| ProviderClassFullName | `Connections--<identifier>--ProviderClassFullName` |
| ProviderDllName       | `Connections--<identifier>--ProviderDllName`       |
| Timeout               | `Connections--<identifier>--Timeout`               |

[](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)[Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)
is not available for this connector.
