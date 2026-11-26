---
title: "Remove-User Cmdlet in Directory Manager"
description: "Delete a user from the directory by identity with the Remove-User cmdlet."
keywords:
  - Remove-User
  - Directory Manager Management Shell
  - delete user
  - remove directory user
sidebar_position: 40
---

# Remove-User Cmdlet in Directory Manager

Use the Remove-User cmdlet to delete a user from the directory.

## Syntax

```
Remove-User
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

## Parameter notes

- `-Identity` accepts a distinguished name, GUID, SID, `sAMAccountName`, or name.
- The cmdlet doesn't prompt you to confirm the deletion, and it doesn't support `-WhatIf` or `-Confirm`.

## Example

This command deletes the user with the specified name.

```
Remove-User -Identity "sample"
```
