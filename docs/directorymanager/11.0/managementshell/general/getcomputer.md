---
title: "Get-Computer"
description: "Get-Computer"
sidebar_position: 10
---

# Get-Computer

The **Get-Computer** commandlet retrieves the information about a computer object from the connected
identity store. The computer can be a domain controller or an exchange server or just a simple
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

This example retrieves a computer with a name _arsalanahmadsvm_.

```
Get-computer -Identity arslanahmadsvm
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [General Commands](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
