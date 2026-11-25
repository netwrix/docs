---
title: "Get-Contact"
description: "Retrieves basic information about a contact from an identity store, filtered by identity, container, or LDAP filter."
keywords:
  - Get-Contact
  - Management Shell
  - retrieve contact
  - contact cmdlet
sidebar_position: 10
---

# Get-Contact

Use the Get-Contact cmdlet to retrieve basic information about a contact.

## Syntax

```
Get-Contact
[[-Identity] <string[]>]
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

## Example

This command retrieves a contact from the specified container of the identity store.

```
Get-Contact -SearchContainer "OU=osamamu,DC=naveed,DC=local"
```
