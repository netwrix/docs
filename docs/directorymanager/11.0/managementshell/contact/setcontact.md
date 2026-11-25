---
title: "Set-Contact Cmdlet in Directory Manager"
description: "Modify the properties of an existing contact in the directory by using the Set-Contact cmdlet in the Directory Manager Management Shell."
keywords:
  - Set-Contact
  - modify contact
  - Directory Manager Management Shell
  - contact cmdlet
sidebar_position: 40
---

# Set-Contact Cmdlet in Directory Manager

The _Set-Contact_ cmdlet modifies a contact in the directory. You can modify most contact
properties directly by using the parameters supported by this cmdlet.

## Syntax

```
Set-Contact
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

The following command modifies the city of the specified contact.

```
Set-Contact -Identity "OsamaContact" -City "Islamabad"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Contact Cmdlets](/docs/directorymanager/11.0/managementshell/contact/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
