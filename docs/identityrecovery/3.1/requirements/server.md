---
title: "Application Server Requirements"
description: "Application Server Requirements"
sidebar_position: 10
---

# Application Server Requirements

The Windows Server can be physical or virtual. The following Windows Server operating systems are
supported:

- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012

Additionally the server must meet these requirements:

- Domain-joined server
- .NET 10.0.1 or above
- 2.0 GHz or faster dual core 64-bit (x64) processor

RAM and Disk Space

These are dependent upon the total number of Active Directory objects.

| Environment | Large                        | Medium                             | Small                    |
| ----------- | ---------------------------- | ---------------------------------- | ------------------------ |
| Definition  | Greater than 100,000 objects | Between 25,000 and 100,000 objects | Less than 25,000 objects |
| RAM         | 32 GB                        | 16 GB                              | 8 GB                     |
| Disk Space  | 1 TB \*SSD preferred         | 250 GB                             | 100 GB                   |

Additional Server Requirements

- The Identity Recovery installer checks if .NET 9.0.2 or higher is installed on the machine. If
  not, it is installed as part of the Recovery Application Server installation process.
- Install the `msoledbsql.msi` to enable the application server to connect to the SQL Server prior
  to starting installation

    :::note
    The latest `msoledbsql.msi` can be obtained from Microsoft's website. Netwrix does not
    redistribute this file.
    :::


- Group Policy Management Console (required to backup and to recover GPOs)
- _Optional_: SQL Server Management Studio installed on the application server

Permissions for Installation

The following permission is required to install the application:

- Membership in the local Administrators group
- Log on as a service right from the Local Security Policy (Local Policies > User Rights
  Assignment > Log on as a service policy)
- SQL Server permissions – Domain account needs to be granted SQL Server permissions.
- Recovery Configuration Utility – Must have Domain Admin rights to use all options in this utility

## Virtual Environment Recommendations

While physical machines are always preferred, we fully support the use of virtual machines.
Microsoft® Hyper-V® and VMWare® ESX®/ESXi™ are supported hyper visors.
