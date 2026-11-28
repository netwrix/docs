---
title: "New-User Cmdlet in GroupID"
description: "Create a user in the directory and set properties such as name, password, and contact details with the New-User cmdlet."
keywords:
  - New-User
  - GroupID Management Shell
  - create user
  - user properties
sidebar_position: 30
---

# New-User Cmdlet in GroupID

Use the **New-User** cmdlet to create a user in the directory. Most user properties can be
directly added by using the parameters of this cmdlet.

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

Example:

The following command creates a new user in the container specified by the OrganizationalUnit
parameter. The command also specifies the logon name, password, first name, last name, and display
name of the new user.

```
New-User -Name "SampleUser" -OrganizationalUnit "OU=SalesOU,DC=example,DC=com" -SAMAccountName "SampleUser11" -Password "webdir123R" -FirstName "Sample" -LastName "User" -DisplayName "Sample"
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Cmdlets in GroupID](/docs/directorymanager/11.0/managementshell/user/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
