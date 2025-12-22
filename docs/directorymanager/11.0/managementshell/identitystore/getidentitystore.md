---
title: "Get-IdentityStore"
description: "Get-IdentityStore"
sidebar_position: 60
---

# Get-IdentityStore

The commandlet **Get-IdentityStore** retrieves information about the specified identity store or
retrieves information of identity store(s) as per the given switches such as _All_, _Connected_,
_Enabled_ or _Disabled_.

The information includes identity store name, description, connection string, notification status,
roles in identity store, and so on.

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

This example retrieves information of AdStore1 identity store.

```
Get-IdentityStore -IdentityStoreName AdStore1
```

Example 2:

This example retrieves information of two identity stores – AdStore1 and AdStore2 – through the
pipeline operator.

```
'AdStore1','AdStore2' | Get-IdentityStore
```

Example 3:

This example retrieves information of all identity stores available on the GroupID machine.

```
Get-IdentityStore -All
```

Example 4:

This example retrieves information of identity store connected to the current instance of the
GroupID Management Shell.

```
Get-IdentityStore -Connected
```

Example 5:

This example displays information of all enabled identity store(s).

```
Get-IdentityStore -Enabled
```

Example 6:

This example is for getting information of all disabled identity store(s).

```
Get-IdentityStore -Disabled
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Identity Store Commands](/docs/directorymanager/11.0/managementshell/identitystore/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
