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

Use the Set-User cmdlet to modify a user in the directory. You can modify most user properties directly with the parameters this cmdlet supports.

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

## Parameter notes

- `-Address` sets the home postal address.
- `-Assistant` takes the assistant's distinguished name.
- `-Zip` and `-Business` accept digits only.
- `-Clear` takes the names of the attributes to clear.
- `-Replace` replaces a value of a multivalued attribute. In the list of values, specify the value to remove first, followed by the values to add. For example, `-Replace @{otherTelephone=@("555-0100","555-0199")}` removes `555-0100` and adds `555-0199`.

## Example

This command changes the display name of the specified user.

```
Set-User -Identity "Osama" -DisplayName "Osama123"
```
