---
title: "Get-TombStoneObject"
description: "Get-TombStoneObject"
sidebar_position: 60
---

# Get-TombStoneObject

When you delete an object from Directory, the object is not physically removed from the database.
Instead, Directory marks the object as deleted, strips most of the properties from the object and
moves it to a special container. The object becomes invisible to normal directory operations and is
referred to as a tombstone object.

The **Get-TomStoneObject** commandlet let you view the information of these tombstone objects.

## Syntax

```
Get-TombstoneObject
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

Example 1:

The following command retrieves all tombstone objects from Directory, using the credentials of
current user logged-on to the identity store.

```
Get-TombStoneObject
```

Example 2:

The following command retrieves the tombstone group _Event Management_, using the credentials set in
the $Credentials environment variable. For information about setting credentials, see Appendix A.

```
Get-TombStoneObject -identity "Event Management" -Credential $Cred
```

Example 3:

The following command retrieves all tombstone objects with display names starting with the letter S.

```
Get-TombStoneObject -LdapFilter "(CN = S*)"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [General Commands](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
