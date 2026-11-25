---
title: "New-User Cmdlet in Directory Manager"
description: "Create a user in the directory and set properties such as name, password, and contact details with the New-User cmdlet."
keywords:
  - New-User
  - Directory Manager Management Shell
  - create user
  - user properties
sidebar_position: 30
---

# New-User Cmdlet in Directory Manager

Use the New-User cmdlet to create a user in the directory. You can add most user properties directly with the parameters this cmdlet supports.

## Syntax

```
New-User
-Name <string>
-OrganizationalUnit <string>
-SAMAccountName <string>
-Password <string>
-FirstName <string>
-LastName <string>
-DisplayName <string>
[-UPNSuffix <string>]
[-Title <string>]
[-City <string>]
[-State <string>]
[-Zip <string>]
[-Country <string>]
[-Initials <string>]
[-Address <string>]
[-Office <string>]
[-Business <string>]
[-Business2 <string>]
[-Alias <string>]
[-EmailAddress <string>]
[-Department <string>]
[-Company <string>]
[-Mobile <string>]
[-Home <string>]
[-AccountDisabled <string>]
[-PasswordNeverExpires <string>]
[-PasswordForceChange <string>]
[-Manager <string[]>]
[-HomePage <string>]
[-Assistant <string>]
[-Notes <string>]
[-MailEnabled <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- Name
- OrganizationalUnit
- SAMAccountName
- Password
- FirstName
- LastName
- DisplayName

## Example

This command creates a user in the container specified by the _OrganizationalUnit_ parameter. The command also specifies the logon name, password, first name, last name, and display name of the new user.

```
New-User -Name "OsamaUser" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -SAMAccountName "OsamaUser11" -Password "password123" -FirstName "Osama" -LastName "Shahbaz" -DisplayName "Osama"
```
