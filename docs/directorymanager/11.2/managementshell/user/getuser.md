---
title: "Get-User Cmdlet in Directory Manager"
description: "Retrieve basic information about users that match your criteria from an identity store with the Get-User cmdlet."
keywords:
  - Get-User
  - Directory Manager Management Shell
  - retrieve user
  - user search filters
sidebar_position: 10
---

# Get-User Cmdlet in Directory Manager

Use the Get-User cmdlet to retrieve basic information about users that match your criteria.

## Syntax

```
Get-User
[[-Identity] <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string[]>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-LdapFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-Resolved]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- None

## Parameter notes

- `-Identity` accepts a distinguished name, GUID, SID, `sAMAccountName`, `DOMAIN\name`, or name. It doesn't support wildcards.
- `-SearchContainersScopeList` accepts `1` to search only the container, or `2` to also search its subcontainers. The default is `2`. Specify one value to apply to all containers, or one value for each container in `-SearchContainer`.
- The cmdlet returns up to 1,000 results by default. Use `-MaxItemsToDisplay` to change the limit.

## Example

This command retrieves the specified user from the connected identity store.

```
Get-User -Identity "Sample"
```
