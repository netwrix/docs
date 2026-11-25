---
title: "Renew-Group"
description: "Reactivate an expired group in the connected identity store with the Renew-Group cmdlet."
keywords:
  - Renew-Group
  - reactivate expired group
  - group expiration
  - Directory Manager PowerShell
sidebar_position: 70
---

# Renew-Group

The Renew-Group cmdlet reactivates an expired group.

You can view events related to this cmdlet in the Directory Manager portal, under the History node
in the left pane.

## Syntax

```
Renew-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command renews the specified group in the connected identity store.

```
Renew-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Group Cmdlets](/docs/directorymanager/11.0/managementshell/group/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
