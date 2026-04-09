---
title: "Active Directory"
description: "LDAP connectivity, service account permissions, and network ports"
sidebar_position: 30
---

# Active Directory

Access Analyzer scans Active Directory domains to enumerate users, groups, group memberships, permissions, and sensitive data.

## Supported Versions

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

## Domain Controller Requirements

The following must be installed on each domain controller to be scanned:

- .NET Framework 4.5 or later
- WINRM Service

## Permissions

- Member of the **Domain Administrators** group

:::info
Use Domain Administrator or Local Administrator privileges when running Access Analyzer against an Active Directory domain controller.
:::

A least privilege model can be configured based on your auditing needs. See the [Least Privilege Model](#least-privilege-model) section for additional information.

## Port Requirements

The following firewall ports are required for the Active Directory connector:

| Port | Protocol | Description |
| --- | --- | --- |
| 389 | TCP | LDAP |
| 636 | TCP | LDAPS |
| 135–139 | TCP | RPC |
| Randomly allocated high TCP ports | TCP | RPC dynamic ports |

## Least Privilege Model

The following minimum permissions must be configured at the domain level in Active Directory:

- Read access to directory tree
- List Contents and Read Property on the Deleted Objects Container

:::note
See the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx) article and the Microsoft [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for additional information.
:::
