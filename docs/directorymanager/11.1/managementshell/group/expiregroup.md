---
title: "Expire-Group"
description: "Expire-Group"
sidebar_position: 20
---

# Expire-Group

The Expire-Group commandlet expires a group temporarily. All notifications to the expired group will
be stopped.

You can view events related to this commandlet in Directory Manager portal, against the History node
in the left panel.

## Syntax

```
Expire-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command expires the specified group from the connected identity store.

```
Expire-Group –Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```
