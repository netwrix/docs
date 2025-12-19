---
title: "Target SQL Server Requirements, Permissions, and Ports"
description: "Target SQL Server Requirements, Permissions, and Ports"
sidebar_position: 70
---

# Target SQL Server Requirements, Permissions, and Ports

The Access Analyzer for Databases Solution provides the ability to audit and monitor SQL Server
database environments to collect permissions, sensitive data, and activity events. It scans:

- Azure SQL

- SQL Server 2022
- SQL Server 2019
- SQL Server 2017
- SQL Server 2016

**Target SQL Server Requirements**

The following are requirements for the SQL Server to be scanned:

- WINRM Service installed
- Ensure the following rights are in the `ROOT\Microsoft\SQLServer` and `ROOT\Interop` WMI
  NameSpaces:

    - Execute Methods
    - Enable Account
    - Remote Enable

        :::note
        Restart WMI after applying changes.
        :::


- For Activity Auditing – SQL Server Audit:

    - SQL Server Audit Specifications to be configured on the target databases
    - Audit destination must be a binary file
    - See the Microsoft
      [Create a server audit and database audit specification](https://learn.microsoft.com/en-us/sql/relational-databases/security/auditing/create-a-server-audit-and-database-audit-specification)
      article.

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/overview.md)
- [SMARTLog Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/smartlog/overview.md)
- [SQL Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/sql/overview.md)

## Permissions

**For .Active Directory Inventory Prerequisite**

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

    :::note
    See the Microsoft
    [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
    article and the Microsoft
    [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for
    additional information.
    :::


**For SMARTLog Data Collection**

- Member of the local Administrators group

**For SQL Server Data Collection**

- For Instance Discovery, local rights on the target SQL Servers:

    - Local group membership to Remote Management Users
    - Permissions on the following WMI NameSpaces: `root\Microsoft\SQLServer, root\interop`

- For permissions for data collection:

    - Read access to SQL instance
    - Requires SQL Full-Text and Semantic Extractions for Search feature to be installed on the
      target SQL instance(s) when using the **Scan full rows for sensitive data** option on the
      Options wizard page
    - Grant Authenticate Server to [DOMAIN\USER]
    - Grant Connect SQL to [DOMAIN\USER]
    - Grant View any database to [DOMAIN\USER]
    - Grant View any definition to [DOMAIN\USER]
    - Grant View server state to [DOMAIN\USER]
    - Grant Control Server to [DOMAIN\USER] (specifically required for the Weak Passwords Job)

See the [Azure SQL Auditing Configuration](/docs/accessanalyzer/12.0/requirements/databases/sql/azuresqlaccess.md) topic for additional
information.

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For SMARTLog Data Collector**

- TCP 135
- TCP 445
- Randomly allocated high TCP ports

**For SQL Data Collector**

- Specified by Instances table (default is 1433)
