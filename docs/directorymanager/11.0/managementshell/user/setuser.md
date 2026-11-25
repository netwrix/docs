---
title: "Set-User Cmdlet for Directory Manager"
description: "Modify user properties in the directory with the Set-User cmdlet, including names, contact details, custom attributes, and display names."
keywords:
  - Set-User
  - modify user
  - user properties
  - custom attributes
  - Management Shell
sidebar_position: 50
---

# Set-User Cmdlet for Directory Manager

The **Set-User** cmdlet modifies a user in the directory. You can modify most user properties
directly by using the parameters of this cmdlet.

## Syntax

```
Set-User
-Identity <string>
[-FirstName <string>]
[-LastName <string>]
[-Title <string>]
[-City <string>]
[-State <string>]
[-Zip <string>]
[-Country <string>]
[-Initials <string>]
[-Address <string>]
[-Office <string>]
[-Business <string>]
[-Add <hashtable[]>]
[-Remove <hashtable[]>]
[-Replace <hashtable[]>]
[-Clear <string[]>]
[-Department <string>]
[-Company <string>]
[-Assistant <string>]
[-HomePage <string>]
[-Alias <string>]
[-EmailAddress <string>]
[-Description <string>]
[-Notes <string>]
[-AdministrativeNotes <string>]
[-DisplayName <string>]
[-SimpleDisplayName <string>]
[-CustomAttribute1 <string>]
[-CustomAttribute2 <string>]
[-CustomAttribute3 <string>]
[-CustomAttribute4 <string>]
[-CustomAttribute5 <string>]
[-CustomAttribute6 <string>]
[-CustomAttribute7 <string>]
[-CustomAttribute8 <string>]
[-CustomAttribute9 <string>]
[-CustomAttribute10 <string>]
[-CustomAttribute11 <string>]
[-CustomAttribute12 <string>]
[-CustomAttribute13 <string>]
[-CustomAttribute14 <string>]
[-CustomAttribute15 <string>]
[-Delimiter <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command modifies the display name of the specified user.

```
Set-User -Identity "Osama" -DisplayName "Osama123"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Cmdlets in Directory Manager](/docs/directorymanager/11.0/managementshell/user/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
