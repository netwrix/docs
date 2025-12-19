---
title: "Set-Object"
description: "Set-Object"
sidebar_position: 50
---

# Set-Object

The **Set-Object** commandlet modifies any object such as a user, contact, group (managed or
unmanaged), or mailbox in Directory.

## Syntax

```
Set-Object
-Identity <String>
[-Department <String>]
[-Company <String>]
[-Assistant <String>]
[-HomePage <String>]
[-Alias <String>]
[-EmailAddress <String>]
[-Description <String>]
[-Notes <String>]
[-AdministrativeNotes <String>]
[-DisplayName <String>]
[-SimpleDisplayName <String>]
[-CustomAttribute1 <String>]
[-CustomAttribute2 <String>]
[-CustomAttribute3 <String>]
[-CustomAttribute4 <String>]
[-CustomAttribute5 <String>]
[-CustomAttribute6 <String>]
[-CustomAttribute7 <String>]
[-CustomAttribute8 <String>]
[-CustomAttribute9 <String>]
[-CustomAttribute10 <String>]
[-CustomAttribute11 <String>]
[-CustomAttribute12 <String>]
[-CustomAttribute13 <String>]
[-CustomAttribute14 <String>]
[-CustomAttribute15 <String>]
[-Delimiter <String>]
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <PSCredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following example modifies description of a user specified user against the Identity parameter.

```
Set-object -identity "Sonia Iqbal" -Description TestUser
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Membership Commands](/docs/directorymanager/11.0/managementshell/membership/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
