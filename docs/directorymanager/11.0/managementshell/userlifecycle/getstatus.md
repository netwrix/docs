---
title: "Get-Status"
description: "Get-Status"
sidebar_position: 20
---

# Get-Status

Use the **Get-Status** command to know the status of a specified user as per the profile validation
criteria defined for the identity store.

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

The following command provides information about the status of the specified user as per the
criteria defined for user lifecycle for the connected identity store. It also provides information
on the number of days left to validate the profile again.

```
Get-Status –Manager "Richard"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/managementshell/userlifecycle/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
