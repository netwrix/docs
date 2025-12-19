---
title: "Get-RolePermissionNames"
description: "Get-RolePermissionNames"
sidebar_position: 90
---

# Get-RolePermissionNames

The commandlet **Get-RolePermissionNames** helps user to see the names of the permissions that can
be assigned to / revoked from a security role in an identity store.

## Syntax

```
Get-RolePermissionNames
[-IncludeEntityTypes]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

This example provides a list of permission names for a security role.

```
Get-RolePermissionNames
```

Example 2:

This example provides a list of permission names along with the category of a permission.

```
Get-RolePermissionNames -IncludeEntityTypes
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
