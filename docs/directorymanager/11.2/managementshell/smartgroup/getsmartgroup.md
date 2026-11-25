---
title: "Get-SmartGroup Cmdlet"
description: "Retrieve the Smart Groups and Dynasties that match your criteria in one or more containers of a domain in Directory Manager."
keywords:
  - Get-SmartGroup
  - retrieve Smart Groups
  - list Dynasties
  - Directory Manager cmdlet
  - Management Shell
sidebar_position: 20
---

# Get-SmartGroup Cmdlet

Use this cmdlet to retrieve the Smart Groups and Dynasties that match your criteria in one or more containers of a domain.

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

## Required parameter

None.

## Examples

### Example 1

This command retrieves only Smart Groups, not Dynasties. It searches the base container in the **SearchContainer** parameter and its sub-containers. It uses the credentials of the current user logged on to the identity store.

```
Get-SmartGroup -SmartGroupType "SmartGroup" -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US"
```

### Example 2

This command retrieves both Smart Groups and Dynasties whose display names start with S. It searches the containers in the **SearchContainer** parameter, including the sub-containers of the first base container and excluding those of the second. It uses the credentials in the **$Credentials** environment variable.

```
Get-SmartGroup -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "2","1" -LdapFilter "(DisplayName = S*)" -Credential $Cred

```
