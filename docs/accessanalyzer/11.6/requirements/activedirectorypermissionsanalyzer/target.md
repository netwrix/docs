---
title: "Domain Target Requirements, Permissions, and Ports"
description: "Domain Target Requirements, Permissions, and Ports"
sidebar_position: 10
---

# Domain Target Requirements, Permissions, and Ports

The Enterprise Auditor for Active Directory Permissions Analyzer Solution is compatible with the
following Active Directory versions as targets:

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

:::note
See the Microsoft
[Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support)
article for additional information.
:::


**Domain Controller Requirements**

The following are requirements for the domain controllers to be scanned:

- .NET Framework 4.5+ installed
- WINRM Service installed

**Data Collectors**

Successful use of the Enterprise Auditor Active Directory Permissions Analyzer solution requires the
necessary settings and permissions in a Microsoft® Active Directory® environment described in this
topic and its subtopics. This solution employs the following data collectors to scan the domain:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/overview.md)
- [ADPermissions Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adpermissions/overview.md)

## Permissions

- LDAP Read permissions
- Read on all AD objects
- Read permissions on all AD Objects

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For ADPermissions Data Collector**

- TCP 389
- TCP 135 – 139
- Randomly allocated high TCP ports
