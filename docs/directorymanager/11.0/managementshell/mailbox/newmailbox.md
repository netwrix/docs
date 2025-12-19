---
title: "New-Mailbox"
description: "New-Mailbox"
sidebar_position: 20
---

# New-Mailbox

Use the **New-Mailbox** commandlet to create a new mailbox in Directory. Most mailbox properties can
be directly added by using the parameters of this commandlet.

## Syntax

```
New-MailBox
-MailBoxStore <string>
-Alias <string>
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

- MailBoxStore
- Alias
- Name
- OrganizationalUnit
- SAMAccountName
- Password
- FirstName
- LastName
- DisplayName

Example:

The following command creates a new mailbox in the container specified by the **OrganizationalUnit**
parameter of specified mailbox store. The command also specifies the logon name, password, first
name, last name and display name of the new mailbox.

```
New-MailBox -MailBoxStore "OsamaMailBoxDb120435" -Name "OsamaMailBox" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -SAMAccountName "OsamaMailBoxUser" -Password "webdir123R" -FirstName "OsamaMailBox" -LastName "MailBoxuser" -DisplayName "OsamaMailBox" -Alias "OsamaMailBox
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Mailbox Commands](/docs/directorymanager/11.0/managementshell/mailbox/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
