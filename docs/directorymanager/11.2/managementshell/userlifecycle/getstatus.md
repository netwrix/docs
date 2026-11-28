---
title: "Get-Status Cmdlet for Directory Manager"
description: "Check a user's status against the identity store's profile validation criteria and see the days left to validate with the Get-Status cmdlet."
keywords:
  - Get-Status
  - user status
  - profile validation
  - user lifecycle
  - Management Shell
sidebar_position: 20
---

# Get-Status Cmdlet for Directory Manager

Use the Get-Status cmdlet to check the status of a specified user according to the profile
validation criteria defined for the identity store.

## Syntax

```
Get-Status
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- Identity

## Example

The following command returns the status of the specified user, according to the criteria defined for
user lifecycle for the connected identity store. It also returns the number of days left to validate
the profile again.

```
Get-Status -Identity "Richard"
```
