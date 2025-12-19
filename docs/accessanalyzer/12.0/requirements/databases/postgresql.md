---
title: "Target PostgreSQL Requirements, Permissions, and Ports"
description: "Target PostgreSQL Requirements, Permissions, and Ports"
sidebar_position: 50
---

# Target PostgreSQL Requirements, Permissions, and Ports

The Access Analyzer for Databases Solution provides the ability to audit and monitor PostgreSQL
database environments to collect permissions and sensitive data. It scans:

- Open Source PostgreSQL 9x through 12x
- Enterprise DB PostgreSQL (10x trhough 12x)
- Amazon AWS Aurora PostgreSQL Engine (all versions supported by Amazon AWS)
- Azure PostgreSQL (9.6)

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/overview.md)
- [SQL Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/sql/overview.md)

## Requirements

- Read access to all databases contained within each PostgreSQL instance
- Domain Admin or Local Admin privilege (Windows only)
- Login account for each instance of PostgreSQL to be audited

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


**For PostgreSQL Data Collection**

- Read access to all the databases in PostgreSQL cluster or instance
- Windows Only — Domain Admin or Local Admin privilege

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For SQL Data Collector**

- Specified by Instances table (default is 5432)
