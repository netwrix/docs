---
title: "Upgrade-Group Cmdlet in Directory Manager"
description: "Upgrade managed and non-managed groups and their history from Directory Manager 10 to version 11.1 with the Upgrade-Group cmdlet."
keywords:
  - Upgrade-Group
  - Directory Manager Management Shell
  - upgrade Smart Groups
  - upgrade Dynasties
  - group history upgrade
sidebar_position: 60
---

# Upgrade-Group Cmdlet in Directory Manager

The Upgrade-Group cmdlet upgrades managed (Smart Groups and Dynasties) and non-managed groups of
Directory Manager 10 to Directory Manager 11.1. Before running this cmdlet, ensure the
configurations and history have been upgraded through the Directory Manager Upgrade wizard. Only
then does this cmdlet upgrade the specified groups and their history successfully. See the
[Upgrade to Directory Manager 11 with the Wizard](/docs/directorymanager/11.1/install/upgrade/upgrade.md) topic for additional information
on upgrade.

## Syntax

```
Upgrade-Group  
[-IdentityStoreId <int>] 
[-SearchContainer <List[string]>] 
[-SearchContainerScopeList <List[int]>] 
[-Identity <List[string]>] 
[-GroupType <List[int]>]
[-KeepUserHistory]  
[-SecurityToken <CustomClaimsPrincipal>] 
[-Credential <pscredential>] 
[<CommonParameters>]
```

## Required Parameters

- None

Example 1:

By default, this cmdlet upgrades groups from the connected identity store. To upgrade groups
from an OU of another identity store, specify the ID of that identity store in the
_IdentityStoreId_ parameter and the OU in the _SearchContainer_ parameter.

The following cmdlet upgrades groups of an identity store with ID 2 and from the _Jobs_
container in that identity store.

```
Upgrade-Group -IdentityStoreId "2" SearchContainer "OU=Jobs,DC=Demo1,DC=com" 
```

Example 2:

To upgrade groups from a parent OU only, use the _SearchContainerScopeList_ and
_SearchContainer_ parameters. The _SearchContainerScopeList_ parameter with value 1 indicates that
the cmdlet doesn't look into the nested OUs but the parent OU only.

The following cmdlet upgrades dynasties residing in the _Jobs_ OU from their parent OU only. If
you don't specify the _SearchContainerScopeList_ parameter, this cmdlet upgrades dynasties from
the parent OU and its child OUs.

```
Upgrade-Group -SearchContainerScopeList "1" -SearchContainer "GIDsmart1""OU=Jobs,DC=Demo1,DC=com" GroupType "3"
```

:::note
This cmdlet doesn't support group types 4 and 5, which are for middle and leaf dynasties. See the
[Directory Manager Management Shell Parameters](/docs/directorymanager/11.1/managementshell/parameters.md) topic for additional information on
the supported parameters and the parameters you can use in the Directory Manager Management Shell
cmdlets.

:::
