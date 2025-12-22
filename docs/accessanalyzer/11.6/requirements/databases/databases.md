---
title: "Databases Solution"
description: "Databases Solution"
sidebar_position: 50
---

# Databases Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/requirements/overview.md)
topic for the core requirements.

In addition to these, integration with either the Netwrix Activity Monitor is required for event
activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for installation requirements and information on collecting activity data.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

See the following topics for target environment requirements:

- [Target Db2 Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/db2.md)
- [Target MongoDB Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/mongodb.md)
- [Target MySQL Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/mysql.md)
- [Target Oracle Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/oracle/oracle.md)
- [Target PostgreSQL Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/postgresql.md)
- [Target Redshift Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/redshift.md)
- [Target SQL Server Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/sql/sql.md)

## Databases Solution Requirements on the Enterprise Auditor Console

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment:

| Environment | Extra-Large          | Large                    | Medium                | Small                |
| ----------- | -------------------- | ------------------------ | --------------------- | -------------------- |
| Definition  | > 1 TB database size | Up to 1 TB database size | ~250 GB database size | ~50 GB database size |
| RAM         | 24 GB                | 16 GB                    | 12 GB                 | 4 GB                 |
| Cores       | 8 CPU                | 8 CPU                    | 4 CPU                 | 2 CPU                |
| Disk Space  | 460 GB               | 280 GB                   | 160 GB                | 80 GB                |

:::note
If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).
:::


**Additional Server Considerations for Oracle Scans**

For scanning Oracle databases, the following are additional requirements for the Console server:

- Windows Management Framework 3+ installed
- PowerShell 3.0+ installed
- NMAP installed
- For Instance Discovery, NMAP installed

**Additional Server Considerations for SQL Server Scans**

For scanning SQL databases, the following are additional requirements for the Console server:

- Windows Management Framework 3+ installed
- PowerShell 3.0+ installed

**Sensitive Data Discovery Auditing Requirement**

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.
:::


## Databases Solution Requirements on the SQL Server

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment.

| Environment              | Extra-Large          | Large                    | Medium                | Small                |
| ------------------------ | -------------------- | ------------------------ | --------------------- | -------------------- |
| Definition               | > 1 TB database size | Up to 1 TB database size | ~250 GB database size | ~50 GB database size |
| RAM                      | 64 GB                | 32 GB                    | 16 GB                 | 8 GB                 |
| Cores                    | 16 CPU               | 12 CPU                   | 8 CPU                 | 4 CPU                |
| Number of Disks          | 4                    | 4                        | 4                     | 4                    |
| Operating System Disk    | 160 GB               | 160 GB                   | 160 GB                | 160 GB               |
| SQL Database Disk        | 500 GB               | 320 GB                   | 240 GB                | 100 GB               |
| SQL Transaction Log Disk | 120 GB               | 100 GB                   | 80 GB                 | 40 GB                |
| SQL TEMP DB Disk         | 320 GB               | 240 GB                   | 160 GB                | 80 GB                |
