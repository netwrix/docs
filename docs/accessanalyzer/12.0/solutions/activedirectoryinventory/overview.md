---
title: ".Active Directory Inventory Solution"
description: ".Active Directory Inventory Solution"
sidebar_position: 10
---

# .Active Directory Inventory Solution

Active Directory (AD) acts as the central nervous system of any Microsoft environment and plays a
vital role in granting access to resources such as Exchange, File Systems, SharePoint, and SQL
Server. The .Active Directory Inventory Solution is designed to provide essential user, group
membership, and computer details from the targeted domains to many Access Analyzer built-in
solutions. Key information includes user status, user attributes, and group membership. The
collected data is accessed by other Access Analyzer solutions and the Netwrix Access Information
Center for analysis.

:::note
This solution is required for using the Access Information Center.
:::


This topic covers information on using the ADInventory Data Collector and the .Active Directory
Inventory Job Group.

**Supported Platforms**

- Windows 2003 Forest level or higher

**Permissions**

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

    :::note
    See the Microsoft
    [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
    article and the Microsoft
    [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for
    additional information.
    :::


**Ports**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**Location**

The .Active Directory Inventory Solution is a core component of all Access Analyzer installations.
Typically this solution is instantiated during installation, but it can be installed from the
Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution:
**Jobs** > **.Active Directory Inventory**. This group has been named in such a way to keep it at
the top of the Jobs tree.

## Jobs

This Job Group is comprised of three jobs that collect, analyze, and report on data. The data
collection is conducted by the ADInventory Data Collector. See the
[Standard Reference Tables & Views for the ADInventory Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/standardtables.md)
topic for database table information.

![.Active Directory Inventory Solution Overview page](/images/accessanalyzer/12.0/solutions/activedirectoryinventory/overview.webp)

The .Active Directory Inventory Solution has the following jobs:

- [1-AD_Scan Job](/docs/accessanalyzer/12.0/solutions/activedirectoryinventory/1-ad_scan.md) – Collects data and generates the standard reference tables and
  views
- [2-AD_Changes Job](/docs/accessanalyzer/12.0/solutions/activedirectoryinventory/2-ad_changes.md) – Analyzes the collected data to track and alert on changes
  within all scanned domains that occurred since the last scan
- [3-AD_Exceptions Job](/docs/accessanalyzer/12.0/solutions/activedirectoryinventory/3-ad_exceptions.md) – Analyzes the collected data to identify security and
  provisioning concerns, such as circular nesting and stale membership
