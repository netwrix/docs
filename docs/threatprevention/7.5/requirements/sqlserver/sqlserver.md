---
title: "SQL Server Requirements"
description: "SQL Server Requirements"
sidebar_position: 20
---

# SQL Server Requirements

Threat Prevention supports the following SQL Server versions:

- SQL Server 2016 through SQL Server 2022

The server must meet this requirement:

- US English language installation
- Windows Server can be physical or virtual. See the
  [Virtual Environment Recommendations](/docs/threatprevention/7.5/requirements/application.md#virtual-environment-recommendations)topic for
  additional information.

:::info
It is a best practice and strongly recommended to have a dedicated database
server.
:::


**RAM, CPU, and Disk Space**

These depend on the size of the target environment.

| Environment        | Large with Analytics     | Large without Analytics        | Small with Analytics        | Small without Analytics     |
| ---------- | ---------- | --------- | --------- | --------- |
| Definition       | 2,000 - 15,000 AD user objects | 2,000 - 15,000 AD user objects | Up to 2,000 AD user objects | Up to 2,000 AD user objects |
| RAM       | 32 GB     | 16 GB      | 16 GB      | 8 GB      |
| Cores     | 4 CPU     | 4 CPU      | 4 CPU      | 4 CPU     |
| Number of Disks      | 4      | 4      | 4      | 1-4       |
| Operating System Disk    | 10 GB       | 10 GB   | 10 GB    | 10 GB  |
| SQL Database Disk   | 500 GB    | 300 GB      | 150 GB    | 100 GB   |
| SQL Transaction Log Disk | 80 GB    | 80 GB     | 40 GB    | 20 GB   |
| SQL TEMP DB Disk   | 160 GB      | 160 GB      | 80 GB     | 40 GB   |

The disk sizes for the three SQL Server databases can be reduced if not utilizing all Threat
Prevention solutions.

**Additional SQL Server Requirements**

The following are additional requirements for the SQL Server:

- All SQL Server databases must be configured to use ‘Simple Recovery Model’.
- SQL Agent Service is needed to use the Database Maintenance feature in Threat Prevention.

**Additional SQL Server Considerations**

The following additional considerations are recommended for the SQL Server:

- The standard Autogrowth setting for the database can cause Threat Prevention delays. Database
  growth is computationally intensive. While SQL Server is growing the database, no other activity
  can occur. If this option is employed, please speak with a Netwrix engineer to determine an
  appropriate setting for best performance.

  :::info
  In the SQL Server Management Studio, set the Database Properties' File Growth
  Autogrowth setting for the NVMonitorData database to a few hundred MB instead of the default
  setting of 1MB. Use 10 percent of the database size to avoid unwanted fragmentation for indexes
  due to a small default setting for database growth.
  :::


- When using separate machines for the SQL Server and the Threat Prevention Enterprise Manager, both
  machines should be on the same subnet with high speed connectivity between them. The Enterprise
  Manager can generate a high volume of SQL activity, which is directly proportional to the volume
  of events the Enterprise Manager receives from all Agents.

  :::info
  Install the Threat Prevention Enterprise Manager and Microsoft SQL Server on
  different machines.
  :::


:::info
For large environments with Analytics, an SQL cluster is recommended for both
performance and fault tolerance.
:::


:::note
For SQL Server 2012+, it is necessary to restrict the maximum server memory value to
60-70% of the total physical RAM to avoid a situation where SQL Server will starve other
applications of memory. See the
[Restrict SQL Server Maximum Server Memory](/docs/threatprevention/7.5/troubleshooting/sqlserver.md) topic for additional
information.
:::


**Database Permissions**

The following permissions are required on the databases:

- Database Owner
- Provisioned to use Default Schema of ‘dbo’

Additional permissions are required for the optional Database Maintenance feature in Threat
Prevention. See the [Database Maintenance Feature Requirements](/docs/threatprevention/7.5/requirements/sqlserver/dbmaintenance.md) topic for
additional information.
