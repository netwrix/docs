---
title: "SQL Server Databases"
description: "SQL Server Databases"
sidebar_position: 30
---

# SQL Server Databases

This report lists the properties of databases and database snapshots hosted on the selected SQL
Server instance. Use this report for your SQL Server database inventory.

![sqlserverdatabases_thumb_0_0](/images/auditor/10.9/admin/reports/types/stateintime/sqlserverdatabases_thumb_0_0.webp)

## Reported data

For each database, the following information is reported:

- **Database name**
- **Restrict access** mode— as set in the database properties **>Options>State**. Possible values
  are: _Multi_user_ (for _Multiple_), _Restricted_, _Single_. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15)
  for details.
- **State**— as set in the database properties**>Options>State**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-states?view=sql-server-ver15)
  for details
- **Size (MB)**
- **Shrink enabled**— as set in the database properties **>Options>Automatic>Auto Shrink**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15)
  for details.
- **Encryption status**— as set in the database properties **>Options>State**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15#this-microsoft-article)
  for details.
- **Last full backup date**— local date and time for the audited SQL Server instance.

In some cases, the backup time will be displayed in server ticks.

- **Data file path**— .MDF file path.
- **Log file path**— .LDF file path.

For each database snapshot, the following information is reported:

- **Database snapshot name**
- **Source database name**
- **Restrict access** mode — as set in the database properties at snapshot creation time.
- **State** — as set in the database properties at snapshot creation time.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server instance
  hosting the required database.
- **Item** — name of the item within your monitoring plan, here — SQL Server instance.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Database name** — database to report on. Default is all databases on selected SQL Server
  instance (_%_).

## Considerations and recommendations

Reporting for case-sensitive SQL Servers and databases is not supported.

## Usage example

Database administrators in the _Corp_ organization need to perform an inventory of the
**SQLSrv01\SQLServer2016** instance. This instance is included in the monitoring plan named _SQL
Servers Monitoring_.

To examine the relevant data, they generated the **SQL Server Databases** report with the default
filters.

