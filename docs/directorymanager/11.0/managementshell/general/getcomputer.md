---
title: "Get-Computer Cmdlet in Directory Manager"
description: "Retrieve information about a computer object, such as a domain controller or Exchange server, from the connected identity store."
keywords:
  - Get-Computer
  - computer object
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 10
---

# Get-Computer Cmdlet in Directory Manager

The **Get-Computer** cmdlet retrieves information about a computer object from the connected
identity store. The computer can be a domain controller or an Exchange server, or a simple
client connected to the domain.

## Syntax

```
Get-Computer
[-Identity <string>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

This example retrieves a computer with the name _arslanahmadsvm_.

```
Get-computer -Identity arslanahmadsvm
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager General Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
