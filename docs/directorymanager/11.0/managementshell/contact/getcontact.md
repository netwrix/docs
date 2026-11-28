---
title: "Get-Contact Cmdlet in GroupID"
description: "Retrieves basic information about a contact from an identity store, filtered by identity, container, or LDAP filter."
keywords:
  - Get-Contact
  - Management Shell
  - retrieve contact
  - contact cmdlet
sidebar_position: 10
---

# Get-Contact Cmdlet in GroupID

Use the **Get-Contact** cmdlet to retrieve basic information about a contact.

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

Example:

The following command retrieves a contact from the specified container of the identity store.

```
Get-Contact -SearchContainer "OU=SalesOU,DC=example,DC=com"
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Contact Cmdlets](/docs/directorymanager/11.0/managementshell/contact/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
