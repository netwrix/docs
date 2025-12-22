---
title: "Target Db2 Requirements, Permissions, and Ports"
description: "Target Db2 Requirements, Permissions, and Ports"
sidebar_position: 10
---

# Target Db2 Requirements, Permissions, and Ports

The Enterprise Auditor for Databases Solution provides the ability to audit and monitor Db2 database
environments to collect permissions and sensitive data. It scans:

- DB2LUW 11+

**Target Db2 Requirements**

Successful installation of the IBM Data Server Client is required to run the Db2 Job Group. In
addition, the following clients and drivers must be installed:

- IBM Data Server Driver Package (DS Driver)
- IBM Data Server Driver for JDBC and SQLJ (JCC Driver)
- IBM Data Server Driver for ODBC and CLI (CLI Driver)
- IBM Data Server Runtime Client
- IBM Data Server Client
- IBM Database Add-Ins for Visual Studio
- IBM .NET Driver NuGet

:::note
All necessary clients and drivers can be found on IBM Support's
[Download initial version 11.5 clients and drivers](https://www.ibm.com/support/pages/download-initial-version-115-clients-and-drivers)
page. From the list of available packages, select the IBM Data Server Client, which is the
all-in-one client package. This package includes all of the client tools and available libraries, as
well as the add-ins for Visual Studio.
:::


**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/overview.md)
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


## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For SQL Data Collector**

- Specified by Instances table (default is 5000)
