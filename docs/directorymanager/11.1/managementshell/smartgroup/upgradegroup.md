---
title: "Upgrade-Group"
description: "Upgrade-Group"
sidebar_position: 60
---

# Upgrade-Group

The Upgrade-Group commandlet upgrades managed (Smart Groups and Dynasties) and non-managed Groups of
GroupID 10 to Directory Manager 11.1 version. Before running this commandlet, make sure the
configurations and history have been upgraded through the Directory Manager Upgrade wizard, only
then this commandlet will upgrade the specified groups and their history successfully. See the
[Upgrade to Directory Manager 11](/docs/directorymanager/11.1/install/upgrade/upgrade.md) topic for additional information
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

By default, this commandlet upgrades group from the connected identity store, in case , you want to
upgrade group(s) from an OU of another identity store, specify the id of that identity store in the
_IdentityStoreId_ parameter and OU in the _SearchContainer_ parameter.

The following commandlet upgrades groups of an identity store having id 2 and from the _Jobs_
container in that identity store.

```
Upgrade-Group -IdentityStoreId "2" SearchContainer "OU=Jobs,DC=Demo1,DC=com" 
```

Example 2:

If you want to upgrade groups from a parent OU only, use the _SearchContainerScopeList_ and
_SearchContainern_ parameters. The _SearchContainerScopeList_ parameter with value 1 indicates that
the commandlet will not look into the nested OUs but the parent OU only.

The following commandlet upgrades dynasties residing in the _Jobs_ OU from their parent OU only. If
_SearchContainerScopeList_ parameter is not specified then this commandlet upgrades dynasties from
the parent OU as well as from its child OUs as well.

```
Upgrade-Group -SearchContainerScopeList "1" -SearchContainer "GIDsmart1""OU=Jobs,DC=Demo1,DC=com" GroupType "3"
```

:::note
The group types 4 and 5 which are for middle and leaf dynasties are not supported in this
commandlet. See the [Parameters](/docs/directorymanager/11.1/managementshell/parameters.md) topic for additional information on
the supported parameters. See the [Parameters](/docs/directorymanager/11.1/managementshell/parameters.md) topic to get information
about the parameters which you can use in the Directory Manager Management Shell commandlets.

:::
