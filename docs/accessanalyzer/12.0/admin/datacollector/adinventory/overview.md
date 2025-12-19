---
title: "ADInventory Data Collector"
description: "ADInventory Data Collector"
sidebar_position: 40
---

# ADInventory Data Collector

The extraction and correlation of user, group, and computer attributes drastically transforms the
meaning of data collected across the many systems and applications that are linked to Active
Directory. The ADInventory Data Collector is designed as a highly scalable and useful data
collection mechanism to catalogue user, group, and computer object information that can be used by
other solutions within Access Analyzer.

The ADInventory Data Collector is a core component of Access Analyzer and has been preconfigured to
be used within the .Active Directory Inventory Solution. Both this data collector and the solution
are available with all Access Analyzer license options. See the
[.Active Directory Inventory Solution](/docs/accessanalyzer/12.0/solutions/activedirectoryinventory/overview.md)
topic for additional information.

**Protocols**

- LDAP

**Ports**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

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


## Functional Design of the ADInventory Data Collector

The ADInventory Data Collector has been designed to update incrementally. Once it has run against a
domain controller, additional collections gather changes made since the last scan. This enables the
ADInventory Data Collector to function efficiently within large environments. Each time it is run
against different domain controllers, it restarts the cycle.

## ADInventory Query Configuration

The ADInventory Data Collector is configured through the Active Directory Inventory DC Wizard, which
contains the following wizard pages:

- Welcome
- [ADInventory: Category](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/category.md)
- [ADInventory: Results](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/results.md)
- [ADInventory: Options](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/options.md)
- [ADInventory: Index Update Options](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/indexupdateoptions.md)
- [ADInventory: Custom Attributes](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/customattributes.md)
- [ADInventory: Summary](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/summary.md)

![Active Directory Inventory DC Wizard Welcome page](/images/accessanalyzer/12.0/admin/datacollector/adinventory/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
