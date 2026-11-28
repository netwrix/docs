---
title: "Reinstate-User Cmdlet for Directory Manager"
description: "Reinstate a disabled user, whether disabled for not validating their profile, terminated by a manager, or disabled in the directory."
keywords:
  - Reinstate-User
  - reinstate disabled user
  - user lifecycle
  - Helpdesk role
  - Management Shell
sidebar_position: 30
---

# Reinstate-User Cmdlet for Directory Manager

Use the Reinstate-User cmdlet to reinstate (re-enable) a disabled user. Users can be disabled for these reasons:

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

## Required parameter

- Identity

## Example

The following command reinstates the specified disabled user of the connected identity store.

```
Reinstate-User -Identity "Farzana Jafar"
```
