---
title: "Get-ConnectedUser Cmdlet"
description: "Display the logon name, lock status, identity store, roles, and ObjectGuid of the user connected to Management Shell."
keywords:
  - Get-ConnectedUser
  - connected user
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 30
---

# Get-ConnectedUser Cmdlet

The **Get-ConnectedUser** cmdlet retrieves general information about the user connected to
the current instance of Management Shell.

## Syntax

```
Get-ConnectedUser
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <PSCredential>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

This example displays the logon name of the connected user, account locked information, identity
store name, role names, and ObjectGuid.

```
Get-ConnectedUser
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID General Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
