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

## Port Requirements

The following firewall ports are required for the Active Directory connector:

| Port | Protocol | Description |
| --- | --- | --- |
| 389 | TCP | LDAP |
| 135–139 | TCP | RPC |
| Randomly allocated high TCP ports | TCP | RPC dynamic ports |
