---
title: "Upgrade-Group Cmdlet in Directory Manager"
description: "Upgrade managed and non-managed groups and their history from GroupID 10 SR2 to Directory Manager 11.1 with the Upgrade-Group cmdlet."
keywords:
  - Upgrade-Group
  - Directory Manager Management Shell
  - upgrade Smart Groups
  - upgrade Dynasties
  - group history upgrade
sidebar_position: 60
---

# Upgrade-Group Cmdlet in Directory Manager

The Upgrade-Group cmdlet upgrades managed groups (Smart Groups and Dynasties) and non-managed groups
from GroupID 10 SR2 to Directory Manager 11.1.

Before you run this cmdlet, ensure the Directory Manager Upgrade wizard has upgraded the
configurations and history. Only then does this cmdlet upgrade the specified groups and their history
successfully. For more information on upgrading, see
[Upgrade to Directory Manager 11 with the Wizard](/docs/directorymanager/11.1/install/upgrade/upgrade.md).

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

## Required parameters

- None

## Examples

### Example 1

By default, this cmdlet upgrades groups from the connected identity store. To upgrade groups from an
OU of another identity store, specify the ID of that identity store in the _IdentityStoreId_
parameter and the OU in the _SearchContainer_ parameter.

This command upgrades groups from the _Jobs_ container of the identity store with ID 2.

```
Upgrade-Group -IdentityStoreId "2" -SearchContainer "OU=Jobs,DC=Demo1,DC=com" 
```

### Example 2

To upgrade groups from a parent OU only, use the _SearchContainerScopeList_ and _SearchContainer_
parameters. The value 1 in _SearchContainerScopeList_ tells the cmdlet to look in the parent OU only,
not in nested OUs.

This command upgrades Dynasties in the _Jobs_ OU from their parent OU only. If you don't specify the
_SearchContainerScopeList_ parameter, this cmdlet upgrades Dynasties from the parent OU and its child
OUs.

```
Upgrade-Group -SearchContainerScopeList "1" -SearchContainer "OU=Jobs,DC=Demo1,DC=com" -GroupType "3"
```

:::note
This cmdlet doesn't support group types 4 and 5, which are for middle and leaf Dynasties. For the
supported parameters and the parameters you can use in Directory Manager Management Shell cmdlets,
see
[Directory Manager Management Shell Parameters](/docs/directorymanager/11.1/managementshell/parameters.md).
:::
