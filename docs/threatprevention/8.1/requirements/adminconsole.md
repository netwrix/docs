---
title: "Remote Administration Console Requirements"
description: "Remote Administration Console Requirements"
sidebar_position: 40
---

# Remote Administration Console Requirements

This topic lists the requirements for the machine where you want to install a remote instance of the
Threat Prevention Administration Console.

**Windows Requirements**

The Windows Server can be physical or virtual. Threat Prevention supports the following Windows
Server operating systems:

- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

- Windows 10
- Windows 11

Additionally the server or workstation must meet these requirements:

- U.S. English language installation
- Domain member

**RAM, CPU, and Disk Space**

|            |       |
| ---------- | ----- |
| RAM        | 8 GB  |
| Cores      | 4 CPU |
| Disk Space | 4 GB  |

**Additional Platform Requirements**

The following are additional requirements for the Threat Prevention Administration Console machine:

- .NET 4.7.2 or .NET 4.8.x installed. If the installer doesn't find it already installed, it will
  install .NET Framework 4.7.2.

**Permissions for Installation and Application Use**

You need the following permissions to install and use the application:

- Membership in the local Administrators group

## Virtual Environment Recommendations

While physical machines are always preferred, Threat Prevention fully supports the use of virtual
machines. Consider the following when leveraging virtualization.

- VMWare ESX – If using ESX, the following specifications are recommended:

  - ESX 4.0 / ESXi 4.1 or higher
  - Virtual hardware 7 or higher
  - All virtual machines installed on the same datacenter / rack
