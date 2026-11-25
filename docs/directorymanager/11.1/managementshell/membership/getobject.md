---
title: "Get-Object Cmdlet for Directory Manager"
description: "Retrieve objects that match your criteria from one or more containers in a domain using the Get-Object cmdlet."
keywords:
  - Get-Object
  - search directory objects
  - LDAP filter
  - search container
  - Directory Manager cmdlets
sidebar_position: 30
---

# Get-Object Cmdlet for Directory Manager

Use the Get-Object cmdlet to retrieve objects that match your criteria from one or more containers in a domain.

## Syntax

```
Get-Object
[[-Identity] <string[]>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-ObjectType <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameters

- None

## Examples

### Example 1

This command retrieves all objects from the domain you're connected to.

```
Get-Object
```

### Example 2

This command retrieves the object Event Management, starting from the container Recruiting and excluding its subcontainers. It uses the credentials set in the $Credentials environment variable. To set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic.

```
Get-Object -Identity "HR.Imanami.US\Event Management" -SearchContainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "1" -Credential $Cred
```

### Example 3

This command searches all objects in the specified containers, including subcontainers, with display names that start with the letter S.

```
Get-Object -SearchContainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -LdapFilter "(DisplayName = S*)"
```
