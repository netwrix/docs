---
title: "Get-Status Cmdlet for GroupID"
description: "Check a user's status against the identity store's profile validation criteria and see the days left to validate with the Get-Status cmdlet."
keywords:
  - Get-Status
  - user status
  - profile validation
  - user lifecycle
  - Management Shell
sidebar_position: 20
---

# Get-Status Cmdlet for GroupID

Use the **Get-Status** cmdlet to check the status of a specified user according to the profile
validation criteria defined for the identity store.

## Syntax

```
Get-Status
-Manager <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Manager

Example:

The following command provides information about the status of the specified user according to the
criteria defined for user lifecycle for the connected identity store. It also provides information
on the number of days left to validate the profile again.

```
Get-Status –Manager "Richard"
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Lifecycle Cmdlets for GroupID ](/docs/directorymanager/11.0/managementshell/userlifecycle/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
