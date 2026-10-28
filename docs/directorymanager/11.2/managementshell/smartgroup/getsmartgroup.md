---
title: "Get-SmartGroup"
description: "Get-SmartGroup"
sidebar_position: 20
---

# Get-SmartGroup

Use this commandlet to retrieve Smart Groups and Dynasties that match your given criteria in one or
more containers in a domain.

## Syntax

```
Get-SmartGroup
[[-Identity] <string[]>]
[-SmartGroupType <string>]
[-TopLevelOnly <bool>]
[-GroupIDVersion <string>]
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

Example 1:

The following command retrieves only Smart Groups (not Dynasties) in the base container specified by
the **SearchContainer** parameter including sub-containers, using the credentials of current user
logged-on to the identity store.

```
Get-SmartGroup -SmartGroupType "SmartGroup" -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command retrieves both Smart Groups and Dynasties that have display names starting
with S in the containers specified by the **SearchContainer** parameter including sub-containers of
the first base container and excluding sub-containers of the second one, using the credentials
specified in the **$Credentials** environment variable.

```
Get-SmartGroup -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "2","1" -LdapFilter "(DisplayName = S*)" -Credential $Cred

```
