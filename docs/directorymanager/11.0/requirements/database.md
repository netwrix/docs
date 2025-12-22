---
title: "Database Requirements"
description: "Database Requirements"
sidebar_position: 40
---

# Database Requirements

GroupID requires an SQL Server database to store and retrieve data. The SQL database may reside on
any SQL Server in your environment.

GroupID supports the following versions of SQL Servers:

| Database Servers          | Editions                                                                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft SQL Server 2016 | Express, Standard, Enterprise Express edition available at: [SQL Server 2016 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=56840)  |
| Microsoft SQL Server 2017 | Express, Standard, Enterprise Express edition available at: [SQL Server 2017 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=55994)  |
| Microsoft SQL Server 2019 | Express, Standard, Enterprise Express edition available at: [SQL Server 2019 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=101064) |
| Microsoft SQL Server 2022 | Express, Standard, Enterprise Express edition available at: [SQL Server 2022 Express edition](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) |

The SQL Server Browser service is required and during the installation of SQL Server, you can set
its start mode either as Automatic, Disabled or Manual. If it is disabled, SQL Servers are not
listed in the **SQL Server** box on the **Database settings** page of the Configuration Tool. In
that case, you have to type the server name in the **SQL Server** box to select the required server
manually.

To enable the SQL Server Browser service, see
[How to: Start and Stop the SQL Server Browser Service](http://technet.microsoft.com/en-us/library/ms189093(v=sql.105).aspx).

See Also

- [Requirements](/docs/directorymanager/11.0/requirements/requirements.md)
