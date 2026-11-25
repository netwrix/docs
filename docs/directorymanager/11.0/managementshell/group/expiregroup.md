---
title: "Expire-Group"
description: "Temporarily expire a group in the identity store with the Expire-Group cmdlet, which stops all notifications to the expired group."
keywords:
  - Expire-Group
  - expire group
  - group expiry
  - Directory Manager PowerShell
sidebar_position: 20
---

# Expire-Group

The **Expire-Group** commandlet expires a group temporarily. The commandlet stops all notifications to the
expired group.

You can view events related to this commandlet in the Directory Manager portal, under the
**History** node in the left pane.

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

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Group Cmdlets](/docs/directorymanager/11.0/managementshell/group/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
