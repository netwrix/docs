---
title: "Application Server Requirements"
description: "Application Server Requirements"
sidebar_position: 10
---

# Application Server Requirements

This topic lists the requirements for the Threat Prevention server, where Enterprise Manager has to
be installed.

**Windows Server Requirements**

The Windows Server can be physical or virtual. The following Windows Server operating systems are
supported:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2025

Additionally the server must meet these requirements:

- US English language installation
- Domain member

**RAM, CPU, and Disk Space**

These depend on the size of the target environment and whether Analytics will be used.

| Environment | Large with Analytics           | Large without Analytics        | Small with Analytics        | Small without Analytics     |
| ----------- | ------- | ------------- | ------------- | --------- |
| Definition  | 2,000 - 15,000 AD user objects | 2,000 - 15,000 AD user objects | Up to 2,000 AD user objects | Up to 2,000 AD user objects |
| RAM         | 128+ GB       | 32 GB        | 32 GB     | 16 GB      |
| Cores       | 4+ CPU        | 4 CPU        | 4 CPU     | 4 CPU      |
| Disk Space  | 67 GB         | 67 GB        | 67 GB     | 35 GB      |

:::info
For large environments with Analytics, a physical machine is strongly
recommended.
:::


:::note
The disk space calculation formula is: Enterprise Manager GBs + 2(RAM size):
:::


- 1 GB minimum for the Enterprise Manager / Administration Console
- Double the RAM size for log files (e.g. if 64 GB RAM, then 124 GB disk space)
- Minimum needed disk space: 1 GB + 124 GB = 125 GB disk space

**Additional Enterprise Password Enforcement Solution Requirements**

The Have I Been Pwnd (HIBP) database, which is an optional feature of the Enterprise Password
Enforcement solution, is deployed on the server where the Enterprise Manager resides. It requires:

- Additional 66 GB of disk space to deploy

**Additional Server Requirements**

The following are additional requirements for the Threat Prevention server:

- .NET 4.7.2 or .NET 4.8.x installed. If the installer does not find it already installed, it will
  install .NET Framework 4.7.2.

**Additional Server Considerations**

The following are recommended for the Administration Console server:

- (Optional) SQL Server Management Studio installed
- When using separate machines for the SQL Server and the Threat Prevention Enterprise Manager, both
  machines should be on the same subnet with high speed connectivity between them. The Enterprise
  Manager can generate a high volume of SQL activity, which is directly proportional to the volume
  of events the Enterprise Manager receives from all Agents.

  :::info
  Install the Threat Prevention Enterprise Manager and Microsoft SQL Server on
  different machines.
  :::


**Permissions for Installation and Application Use**

The following permissions are required to install and use the application:

- Membership in the local Administrators group

- SQL Server credential and/or Windows credential with sufficient rights on the SQL Server to create
  and modify the Threat Prevention databases.

## Virtual Environment Recommendations

While physical machines are always preferred, Threat Prevention fully supports the use of virtual
machines. Consider the following when leveraging virtualization.

- VMWare ESX – If using ESX, the following specifications are recommended:

  - ESX 4.0 / ESXi 4.1 or higher
  - Virtual hardware 7 or higher
  - All virtual machines installed on the same datacenter / rack

- Virtual Storage Consideration – In the server requirements, when separate disks are required for
  the servers, that should translate to separate data stores on the VM host machine.
