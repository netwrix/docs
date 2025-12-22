---
title: "Get-Contact"
description: "Get-Contact"
sidebar_position: 10
---

# Get-Contact

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
Get-Contact -SearchContainer "OU=osamamu,DC=naveed,DC=local"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Contact Commands](/docs/directorymanager/11.0/managementshell/contact/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
