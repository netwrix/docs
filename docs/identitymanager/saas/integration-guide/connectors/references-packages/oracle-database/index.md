---
title: "Oracle Database"
description: "Oracle Database"
sidebar_position: 240
---

# Oracle Database

Export data from an Oracle database.

| Package Characteristics | Value                                               |
| ----------------------- | --------------------------------------------------- |
| Display Name            | Database/Oracle                                     |
| Identifier              | Usercube.SQL.Oracle@0000001                         |
| Export                  | Usercube-Export-Sql.dll                             |
| Fulfill                 | NONE                                                |
| Has Incremental Mode    | False                                               |
| Publisher               | Identity Manager                                    |
| ProviderClassFullName   | Oracle.ManagedDataAccess.Client.OracleClientFactory |
| ProviderDllName         | Oracle.ManagedDataAccess.Core                       |

For this package, the default isolation level is **ReadCommitted**.

To use this package, `Oracle.ManagedDataAccess.Core` needs to be
[downloaded from the Oracle website](https://www.oracle.com/database/technologies/net-downloads.html)
(selecting the `ODP.NET` release) and copied to the `Runtime` folder.

:::note
The DLL in the "Oracle.ManagedDataAccess" package isn't compatible with .NET 8

:::
