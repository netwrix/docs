---
title: "Reporting Module Server Requirements"
description: "Reporting Module Server Requirements"
sidebar_position: 50
---

# Reporting Module Server Requirements

:::warning
You can't install Netwrix Threat Manager on the same server as Netwrix Threat Manager
Reporting Module.
:::


The Windows server can be physical or virtual. Threat Prevention supports the following Windows
server operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- U.S. English language installation

**RAM, CPU, and Disk Space**

Minimum hardware requirements:

- 8 GB RAM
- 4 CPU Cores

- 75 GB Disk Space

**Additional Server Requirements**

The following are additional requirements for the application server:

- .NET Framework 4.8+
- .NET Desktop Runtime 8.0.11
- ASP.NET Core 8.0.11
- VC++ redist v14.28.29914
- Python v3.10.8x64

**Permissions for Installation and Application Use**

You need the following permissions to install and use the application:

- Membership in the local Administrators group

**Permissions for Active Directory Sync**

The credentials that Netwrix Threat Manager Reporting Module uses for Active Directory Sync need the
following permissions:

| Object Type | Function            | Access Requirements         |
| ----------- | ---------------------- | ---------------- |
| Group    | Retrieve all deleted groups   | Read Access to group objects under the Deleted Objects Container  |
| Group    | Retrieve all groups        | Read Access to all group objects in the domain      |
| User     | Retrieve all deleted users    | Read Access to user objects under the Deleted Objects Container   |
| User     | Retrieve all users         | Read all user objects from the domain      |
| Computer    | Retrieve all deleted computer objects         | Read all computer objects under the Deleted Objects Container      |
| Computer    | Retrieve all computer objects       | Read all computer objects in the domain     |
| Group       | Used specifically for groups that have large memberships which the query automatically truncates | Read Access to memberof for all group objects in the domain    |
| GMSA        | Retrieve all Group Managed Service Accounts    | Read access to all msDS-groupmanagedserviceaccount objects in the domain |
| Secret      | Retrieve all DPAPI master backup keys (Secret objects)       | Read access to all secret objects in Active Directory                    |

## Client Requirements

Netwrix Threat Manager Reporting Module is a web service that you can access locally or remotely if
the server’s firewall permits. The supported browsers are:

- Google Chrome
- Apple Safari
- Microsoft Edge
- Mozilla Firefox
