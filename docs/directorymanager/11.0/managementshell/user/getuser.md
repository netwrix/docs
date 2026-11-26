---
title: "Get-User Cmdlet in Directory Manager"
description: "Retrieve basic information about users that match your criteria from an identity store with the Get-User cmdlet."
keywords:
  - Get-User
  - Directory Manager Management Shell
  - retrieve user
  - user search filters
sidebar_position: 10
---

# Get-User Cmdlet in Directory Manager

Use the **Get-User** cmdlet to retrieve basic information about users that match your
criteria.

## Syntax

```
Get-User
[[-Identity] <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-ObjectType <string[]>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example:

The following command retrieves the specified user from the connected identity store.

```
Get-User -Identity "Sample"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Cmdlets in Directory Manager](/docs/directorymanager/11.0/managementshell/user/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
