---
title: "Get-IdentityStore Cmdlet in GroupID"
description: "Get details about one or more GroupID identity stores, filtered by name, connection, or enabled state, with the Get-IdentityStore cmdlet."
keywords:
  - Get-IdentityStore
  - identity store information
  - connected identity store
  - Management Shell
  - PowerShell cmdlet
sidebar_position: 60
---

# Get-IdentityStore Cmdlet in GroupID

The Get-IdentityStore cmdlet retrieves information about the specified identity store or
about identity stores that match the given switches, such as _All_, _Connected_,
_Enabled_, or _Disabled_.

The information includes the identity store name, description, connection string, notification
status, roles in the identity store, and so on.

## Syntax

```
Get-IdentityStore 
  -IdentityStoreName <String>
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

```
Get-IdentityStore
  -All 
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

```
Get-IdentityStore
  -Connected 
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

```
Get-IdentityStore
  -Enabled 
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

```
Get-IdentityStore
  -Disabled 
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

- IdentityStoreName or a switch `{ All | Connected | Enabled | Disabled }`

Example 1:

This example retrieves information about the AdStore1 identity store.

```
Get-IdentityStore -IdentityStoreName AdStore1
```

Example 2:

This example retrieves information about two identity stores (AdStore1 and AdStore2) through the
pipeline operator.

```
'AdStore1','AdStore2' | Get-IdentityStore
```

Example 3:

This example retrieves information about all identity stores available on the GroupID
machine.

```
Get-IdentityStore -All
```

Example 4:

This example retrieves information about the identity store connected to the current instance of the
GroupID Management Shell.

```
Get-IdentityStore -Connected
```

Example 5:

This example displays information about all enabled identity stores.

```
Get-IdentityStore -Enabled
```

Example 6:

This example gets information about all disabled identity stores.

```
Get-IdentityStore -Disabled
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Identity Store Cmdlets](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
