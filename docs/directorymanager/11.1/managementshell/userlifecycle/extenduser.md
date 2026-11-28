---
title: "Extend-User Cmdlet for Directory Manager"
description: "Extend the user lifecycle of an expired user for a specified period with the Extend-User cmdlet."
keywords:
  - Extend-User
  - extend user lifecycle
  - expired user
  - profile validation
  - Management Shell
sidebar_position: 10
---

# Extend-User Cmdlet for Directory Manager

Use the Extend-User cmdlet to extend the user lifecycle of an expired user for a specified number
of days.

## Syntax

```
Extend-User
-Identity <string>
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <PSCredential>]
[<CommonParameters>]

```

## Required parameter

- Identity

## Example

The following cmdlet extends the profile validation period for the specified user. The period is
extended by the number of days specified for the identity store.

```
Extend-User -Identity "CN=ImanamiUser100,OU=BulkUsers,DC=gid,DC=local"
```
