---
title: "Get-IdentityStoreRoles Cmdlet"
description: "Get the security roles of a GroupID identity store, including role priority, criteria, and permissions, with the Get-IdentityStoreRoles cmdlet."
keywords:
  - Get-IdentityStoreRoles
  - security roles
  - role permissions
  - identity store
  - PowerShell cmdlet
sidebar_position: 70
---

# Get-IdentityStoreRoles Cmdlet

The Get-IdentityStoreRoles cmdlet retrieves information about the security roles associated with an
identity store. The information includes the role name, role priority, role criteria, and role
permissions.

## Syntax

```
Get-IdentityStoreRoles
[-IdentityStoreName] <String> [[-RoleName] <String>]
[[-Subset] <String>]
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

- IdentityStoreName

Example 1:

This example retrieves information about the customrole1 role in the AdStore1 identity store.

```
Get-IdentityStoreRoles -IdentityStoreName AdStore1 -RoleName customrole1
```

Example 2:

This example provides information about all roles in the adstore1 identity store.

```
Get-IdentityStoreRoles -IdentityStoreName adstore1
```

Example 3:

This example retrieves information about two security roles (customrole1 and customrole2) in the
AdStore1 identity store through the pipeline operator.

```
'customrole1', 'customrole2' | Get-IdentityStoreRoles -IdentityStoreName AdStore1
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
