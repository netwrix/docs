---
title: "Get-ConnectedStoreInformation Cmdlet"
description: "Display the connected identity store name, last Elasticsearch replication time, and configured messaging servers."
keywords:
  - Get-ConnectedStoreInformation
  - identity store
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 20
---

# Get-ConnectedStoreInformation Cmdlet

The **Get-ConnectedStoreInformation** cmdlet retrieves information about the identity store
connected to the current instance of the Management Shell.

## Syntax

```
Get-ConnectedStoreInformation
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

This example displays the name of the connected identity store, the last replication time to
Elasticsearch, and messaging servers configured in the connected identity store.

```
Get-ConnectedStoreInformation
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID General Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
