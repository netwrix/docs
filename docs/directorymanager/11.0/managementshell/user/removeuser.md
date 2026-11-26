---
title: "Remove-User Cmdlet in Directory Manager"
description: "Delete a user from the directory by identity with the Remove-User cmdlet."
keywords:
  - Remove-User
  - Directory Manager Management Shell
  - delete user
  - remove directory user
sidebar_position: 40
---

# Remove-User Cmdlet in Directory Manager

Use the **Remove-User** cmdlet to delete a user from the directory.

## Syntax

```
Remove-User
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command deletes a user with the specified name.

```
Remove-User -Identity "sample"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Cmdlets in Directory Manager](/docs/directorymanager/11.0/managementshell/user/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
