---
title: "Target Oracle Requirements, Permissions, and Ports"
description: "Target Oracle Requirements, Permissions, and Ports"
sidebar_position: 40
---

# Target Oracle Requirements, Permissions, and Ports

The Enterprise Auditor for Databases Solution provides the ability to audit and monitor Oracle
database environments to collect permissions, sensitive data, and activity events. It scans:

- Oracle Database 12c
- Oracle Database 18c
- Oracle Database 19c

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/overview.md)
- [PowerShell Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/powershell/overview.md)
- [SQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/sql/overview.md)

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


**For PowerShell Data Collection**

- Member of the Local Administrators group

**For Oracle Data Collection**

- User with SYSDBA role
- Local Administrator on the target servers – Only applies to Windows Servers and not on Linux or
  Unix operating systems

There is a least privilege model for scanning your domain. See the
[Oracle Target Least Privilege Model](/docs/accessanalyzer/11.6/requirements/databases/oracle/leastprivilege.md)
topic for additional information.

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For PowerShell Data Collector**

- Randomly allocated high TCP ports

**For SQL Data Collector**

- Specified by Instances table (default is 1521)
