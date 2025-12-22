---
title: "Renew-Group"
description: "Renew-Group"
sidebar_position: 70
---

# Renew-Group

The **Renew-Group** re-activates an expired group.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

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

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Group Commands](/docs/directorymanager/11.0/managementshell/group/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
