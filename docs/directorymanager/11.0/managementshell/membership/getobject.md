---
title: "Get-Object Cmdlet for GroupID"
description: "Retrieve objects that match your criteria from one or more containers in a domain using the Get-Object cmdlet."
keywords:
  - Get-Object
  - search directory objects
  - LDAP filter
  - search container
  - GroupID cmdlets
sidebar_position: 30
---

# Get-Object Cmdlet for GroupID

Use this cmdlet to retrieve objects from one or more containers in a domain that match the given
criteria.

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

## Required Parameter

- None

Example 1:

The following command retrieves all objects from the domain you're connected to.

```
Get-Object
```

Example 2:

The command below retrieves the object **Event Management** starting from the container
**Recruiting**, excluding its subcontainers, using the credentials set in the **$Credentials**
environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Get-Object -Identity "HR.Imanami.US\Event Management" -SearchContainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "1" -Credential $Cred
```

Example 3:

The following command searches all objects in the specified containers including subcontainers, with
display names starting with the letter S.

```
Get-Object -SearchContainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -LdapFilter "(DisplayName = S*)"
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Group Membership Cmdlets](/docs/directorymanager/11.0/managementshell/membership/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
