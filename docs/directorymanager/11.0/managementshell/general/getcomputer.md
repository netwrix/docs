---
title: "Get-Computer Cmdlet in GroupID"
description: "Retrieve information about a computer object, such as a domain controller or Exchange server, from the connected identity store."
keywords:
  - Get-Computer
  - computer object
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 10
---

# Get-Computer Cmdlet in GroupID

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

This example retrieves a computer with the name _computer01_.

```
Get-computer -Identity computer01
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID General Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
