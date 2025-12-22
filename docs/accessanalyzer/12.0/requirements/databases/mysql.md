---
title: "Target MySQL Requirements, Permissions, and Ports"
description: "Target MySQL Requirements, Permissions, and Ports"
sidebar_position: 30
---

# Target MySQL Requirements, Permissions, and Ports

The Access Analyzer for Databases Solution provides the ability to audit and monitor MySQL database
environments to collect permissions and sensitive data. It scans:

- MySQL 5.x
- MySQL 8.x
- Amazon MySQL RDS
- Amazon Aurora MySQL Engine
- MariaDB 10.x

**Target MySQL Requirements**

The following are requirements for the MySQL to be scanned:

- WINRM Service installed and enabled — Required only if MySQL is running on Windows

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/overview.md)
- [SQL Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/sql/overview.md)

## Requirements

- Windows (Access Analyzer host) - Windows Management Framework 3+ installed on the Access Analyzer
  Console server (Windows 2012 and later)
- Windows (MySQL host)
    - WinRM enabled
- MySQL

    - Read access to all databases contained within each MySQL instance
    - Domain Admin or Local Admin privilege (Windows only)

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


**For MySQL Data Collection**

- Read access to MySQL instance to include all databases contained within each instance
- Windows Only — Domain Admin or Local Admin privilege

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For SQL Data Collector**

- Specified by Instances table (default is 3306)
