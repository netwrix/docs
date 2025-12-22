---
title: "Extend-User"
description: "Extend-User"
sidebar_position: 10
---

# Extend-User

Use the **Extend-User** commandlet to extend the user lifecycle of an expired user for specified
period of days.

## Syntax

```
Extend-User
-Identity <string[]>
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <PSCredential>]
[<CommonParameters>]

```

## Required Parameter

- Identity

Example:

The following cmdlet extends the profile validation period for the specified user. The period is
extended up to the specified days for the identity store.

```
Extend-User -Identity "CN=ImanamiUser100,OU=BulkUsers,DC=gid,DC=local"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/managementshell/userlifecycle/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
