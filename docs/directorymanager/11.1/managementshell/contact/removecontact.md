---
title: "Remove-Contact"
description: "Remove-Contact"
sidebar_position: 30
---

# Remove-Contact

Use the Remove-Contact cmdlet to delete a contact from the directory.

## Syntax

```
Remove-Contact
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command deletes the specified contact from the identity store.

```
Remove-Contact -Identity "OsamaContact"
```
