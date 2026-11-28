---
title: "Get-RolePermissionNames Cmdlet in GroupID"
description: "List the permission names you can assign to or revoke from a security role in an identity store with the Get-RolePermissionNames cmdlet."
keywords:
  - Get-RolePermissionNames
  - role permissions
  - security role
  - identity store
  - PowerShell cmdlet
sidebar_position: 90
---

# Get-RolePermissionNames Cmdlet in GroupID

The Get-RolePermissionNames cmdlet helps you see the names of the permissions that you can assign to
or revoke from a security role in an identity store.

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

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
