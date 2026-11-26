---
title: "Set-IdentityStoreRole"
description: "Use the Set-IdentityStoreRole cmdlet to rename a security role, change its priority, criteria and filters, or grant and deny its permissions."
keywords:
  - Set-IdentityStoreRole
  - security role
  - role permissions
  - role criteria filters
  - Management Shell cmdlet
sidebar_position: 170
---

# Set-IdentityStoreRole

Use the Set-IdentityStoreRole cmdlet to modify the properties of a security role in an identity store.

## Syntax

```
Set-IdentityStoreRole
-RoleName <string>
[-IdentityStoreName <string>]
[-NewName <string>]
[-Description <string>]
[-Priority <int>]
[-Enabled <bool>]
[-CriteriaScope {Group | Container}]
[-DistinguishedName <string>]
[-Operator {Or | And}]
[-CriteriaFilters <string[][]>]
[-FilterOperation {Add | Remove | RemoveAll}]
[-Permissions <string[]>]
[-PermissionOperation {GrantAll | GrantExcept | Grant | Deny | DenyExcept | DenyAll}]
[<CommonParameters>]
```

## Required Parameters

- RoleName

If you omit IdentityStoreName, the cmdlet uses the connected identity store. The Priority parameter accepts values from 1 to 99.

## Examples

### Example 1

This command modifies properties of the DemoRole1 role in the AdStore9 identity store. It renames the role to DemoRole1_Renamed and sets its priority to 45.

```
Set-IdentityStoreRole -RoleName DemoRole1 -IdentityStoreName AdStore9 -NewName DemoRole1_Renamed -Priority 45 -Enabled $True
```

### Example 2

This command modifies the DemoRole2 role in the AdStore9 identity store. The scope of the role is
set to a container, and the cmdlet removes the filters specified in the CriteriaFilters parameter.

```
Set-IdentityStoreRole -RoleName DemoRole2 -IdentityStoreName AdStore9 -CriteriaScope Container -DistinguishedName 'ou=workingou,dc=pucit,dc=local' -FilterOperation Remove -CriteriaFilters @('type', 'is not', 'managementshell')
```

### Example 3

This command modifies the permissions assigned to the DemoRole2 role. It assigns two permissions: _Manage any
group_ and _Create Smart Group_.

```
Set-IdentityStoreRole -RoleName DemoRole2 -IdentityStoreName AdStore9 -PermissionOperation Grant -Permissions 'Manage any group', 'create smart group'
```
