---
title: "Set-Object Cmdlet in Directory Manager"
description: "Use the Set-Object cmdlet to change attributes of a user, contact, group, or mailbox, such as department, description, or custom attributes."
keywords:
  - Set-Object
  - modify directory object
  - Management Shell cmdlet
  - custom attributes
sidebar_position: 50
---

# Set-Object Cmdlet in Directory Manager

The **Set-Object** cmdlet modifies any object, such as a user, contact, group (managed or
unmanaged), or mailbox, in the directory.

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

The following example modifies the description of the user specified by the Identity parameter.

```
Set-object -identity "Sonia Iqbal" -Description TestUser
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Group Membership Cmdlets](/docs/directorymanager/11.0/managementshell/membership/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
