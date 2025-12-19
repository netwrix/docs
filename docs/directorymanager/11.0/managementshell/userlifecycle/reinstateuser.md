---
title: "Reinstate-User"
description: "Reinstate-User"
sidebar_position: 30
---

# Reinstate-User

Use the **Reinstate-User** command to activate or disable a user. Users can be disabled for any of
the following reasons:

- Users that have been disabled for not validating their profiles within the required period.
- Users that have been terminated or disabled by their respective managers.
- Users that are disabled in the directory.

An administrator or member of Helpdesk role can reinstate a disabled user.

## Syntax

```
Reinstate-User
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command reinstates the specified disabled user of the connected identity store.

```
Reinstate-User -Identity "Farzana Jafar"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/managementshell/userlifecycle/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
