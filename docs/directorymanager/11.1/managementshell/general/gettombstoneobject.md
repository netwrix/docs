---
title: "Get-TombStoneObject cmdlet"
description: "Use the Get-TombStoneObject cmdlet to view information about deleted directory objects that are kept as tombstone objects."
keywords:
  - Get-TombStoneObject
  - tombstone objects
  - deleted objects
  - Management Shell
sidebar_position: 60
---

# Get-TombStoneObject cmdlet

When you delete an object from the directory, the object isn't physically removed from the database. Instead, the directory marks the object as deleted, strips most of the properties from the object, and moves it to a special container. The object becomes invisible to normal directory operations and is referred to as a tombstone object.

The `Get-TombStoneObject` cmdlet lets you view the information of these tombstone objects.

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

## Required parameters

- None

## Examples

### Example 1

The following command retrieves all tombstone objects from the directory, using the credentials of the current user signed in to the identity store.

```
Get-TombStoneObject
```

### Example 2

The following command retrieves the tombstone group _Event Management_, using the credentials set in the $Credentials environment variable. For information about setting credentials, see Appendix A.

```
Get-TombStoneObject -identity "Event Management" -Credential $Cred
```

### Example 3

The following command retrieves all tombstone objects with display names starting with the letter S.

```
Get-TombStoneObject -LdapFilter "(CN = S*)"
```
