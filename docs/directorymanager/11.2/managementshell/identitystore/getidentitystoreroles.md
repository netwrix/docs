---
title: "Get-IdentityStoreRoles Cmdlet"
description: "Get the security roles of a Directory Manager identity store, including role priority, criteria, and permissions, with the Get-IdentityStoreRoles cmdlet."
keywords:
  - Get-IdentityStoreRoles
  - security roles
  - role permissions
  - identity store
  - PowerShell cmdlet
sidebar_position: 70
---

# Get-IdentityStoreRoles Cmdlet

Use the Get-IdentityStoreRoles cmdlet to retrieve information about the security roles associated with an identity store. The information includes the role name, role priority, role criteria, and role permissions.

## Syntax

```
Get-IdentityStoreRoles
[[-IdentityStoreName] <String>] [[-RoleName] <String>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameter

- None

If you omit IdentityStoreName, the cmdlet uses the connected identity store.

## Examples

### Example 1

This example retrieves information about the customrole1 role in the AdStore1 identity store.

```
Get-IdentityStoreRoles -IdentityStoreName AdStore1 -RoleName customrole1
```

### Example 2

This example provides information about all roles in the adstore1 identity store.

```
Get-IdentityStoreRoles -IdentityStoreName adstore1
```

### Example 3

This example retrieves information about two security roles (customrole1 and customrole2) in the AdStore1 identity store through the pipeline operator.

```
'customrole1', 'customrole2' | Get-IdentityStoreRoles -IdentityStoreName AdStore1
```
