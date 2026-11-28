---
title: "Get-RolePermissionNames Cmdlet in Directory Manager"
description: "List the permission names you can assign to or revoke from a security role in an identity store with the Get-RolePermissionNames cmdlet."
keywords:
  - Get-RolePermissionNames
  - role permissions
  - security role
  - identity store
  - PowerShell cmdlet
sidebar_position: 90
---

# Get-RolePermissionNames Cmdlet in Directory Manager

Use the Get-RolePermissionNames cmdlet to see the names of the permissions that you can assign to or revoke from a security role in an identity store.

## Syntax

```
Get-RolePermissionNames
[-IncludeEntityTypes]
[<CommonParameters>]
```

## Required Parameter

- None

## Examples

### Example 1

This example lists of permission names for a security role.

```
Get-RolePermissionNames
```

### Example 2

This example lists the permission names along with the category of each permission.

```
Get-RolePermissionNames -IncludeEntityTypes
```
