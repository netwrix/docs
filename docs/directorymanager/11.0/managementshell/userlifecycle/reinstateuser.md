---
title: "Reinstate-User Cmdlet for GroupID"
description: "Reinstate a disabled user, whether disabled for not validating their profile, terminated by a manager, or disabled in the directory."
keywords:
  - Reinstate-User
  - reinstate disabled user
  - user lifecycle
  - Helpdesk role
  - Management Shell
sidebar_position: 30
---

# Reinstate-User Cmdlet for GroupID

Use the **Reinstate-User** cmdlet to activate or disable a user. Users can be disabled for any of
the following reasons:

- They were disabled for not validating their profiles within the required period.
- Their managers terminated or disabled them.
- They are disabled in the directory.

An administrator or a member of the Helpdesk role can reinstate a disabled user.

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

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Lifecycle Cmdlets for GroupID ](/docs/directorymanager/11.0/managementshell/userlifecycle/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
