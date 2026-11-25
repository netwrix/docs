---
title: "Set-Mailbox Cmdlet in Directory Manager"
description: "Modify mailbox properties, such as name, address, and custom attributes, with the Set-Mailbox cmdlet."
keywords:
  - Set-Mailbox
  - modify mailbox
  - mailbox properties
  - PowerShell cmdlet
sidebar_position: 40
---

# Set-Mailbox Cmdlet in Directory Manager

The Set-Mailbox cmdlet modifies a mailbox in the directory. Use its parameters to modify most mailbox properties directly.

## Syntax

```
Set-MailBox
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
[-CustomAttribute6   <string>]
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

## Required parameter

- Identity

## Example

This command modifies the country value of the specified mailbox in the connected identity store.

```
Set-MailBox -Identity "OsamaMailBox" -Country "Pakistan"
```
