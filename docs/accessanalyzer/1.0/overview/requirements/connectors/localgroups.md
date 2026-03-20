---
title: "Local Groups"
description: "PowerShell Remoting and target machine permissions"
sidebar_position: 50
---

# Local Groups

The Local Groups connector enumerates local users and group memberships on Windows machines using PowerShell Remoting (WinRM).

## Network Requirements

| Port | Protocol | Direction | Description |
| --- | --- | --- | --- |
| 5985 | TCP | Access Analyzer → Target Machine | WinRM over HTTP |
| 5986 | TCP | Access Analyzer → Target Machine | WinRM over HTTPS |

## Service Account Requirements

| Requirement | Details |
| --- | --- |
| **Account type** | Local administrator or member of Remote Management Users group |
| **Authentication** | Username and password |
| **WinRM** | PowerShell Remoting must be enabled on target machines |

## Enabling WinRM on Target Machines

PowerShell Remoting must be enabled on each target machine:

```powershell
Enable-PSRemoting -Force
```

For domain-joined machines, this can be configured via Group Policy:

1. Open **Group Policy Management**
2. Navigate to **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Windows Remote Management (WinRM)** > **WinRM Service**
3. Enable **Allow remote server management through WinRM**

## Credential Type

| Field | Value |
| --- | --- |
| **Type** | Username / Password |
| **Username format** | `MACHINE\username` or `DOMAIN\username` |

## Connector Capabilities

| Operation | Description |
| --- | --- |
| **Test connection** | Validates WinRM connectivity and authentication |
| **Sync** | Enumerates local users, groups, and group memberships |
