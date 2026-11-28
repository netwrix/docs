---
title: "Directory Manager Database Requirements"
description: "Check the supported SQL Server versions and editions for the Directory Manager database, and learn about the SQL Server Browser and certificate requirements."
keywords:
  - SQL Server requirements
  - supported SQL Server versions
  - SQL Server Browser service
  - Windows Authentication
  - Directory Manager database
sidebar_position: 40
---

# Directory Manager Database Requirements

Directory Manager requires an SQL Server database to store and retrieve data. The SQL database can reside on any SQL Server in your environment.

Directory Manager supports the following versions of SQL Server:

| Database Servers          | Editions                                                                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft SQL Server 2016 | Express, Standard, Enterprise <br />Express edition available at: <br />[SQL Server 2016 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=56840)  |
| Microsoft SQL Server 2017 | Express, Standard, Enterprise <br />Express edition available at: <br />[SQL Server 2017 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=55994)  |
| Microsoft SQL Server 2019 | Express, Standard, Enterprise <br />Express edition available at: <br />[SQL Server 2019 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=101064) |
| Microsoft SQL Server 2022 | Express, Standard, Enterprise <br />Express edition available at: <br />[SQL Server 2022 Express edition](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) |

## SQL Server Browser service

The SQL Server Browser service is required. During the installation of SQL Server, you can set its start mode to Automatic, Disabled, or Manual. If the service is disabled, SQL Servers aren't listed in the **SQL Server** box on the Database settings page of the Configuration Tool. In that case, enter the server name in the **SQL Server** box to select the server manually.

To enable the SQL Server Browser service, see [How to: Start and Stop the SQL Server Browser Service](http://technet.microsoft.com/en-us/library/ms189093(v=sql.105).aspx).

## SQL certificate

:::note
Directory Manager now uses .NET 8, so it requires a SQL certificate to access the database using Windows Authentication. To access the Directory Manager database using Windows Authentication, add a SQL certificate to the Trusted Root Certification Authorities certificate store on connecting clients or servers, such as Directory Manager. See the [Configure a SQL Certificate for Directory Manager](/docs/directorymanager/11.1/requirements/sqlcertificate.md) topic for more information.
:::
