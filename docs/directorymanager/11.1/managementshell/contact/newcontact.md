---
title: "New-Contact"
description: "New-Contact"
sidebar_position: 20
---

# New-Contact

Use the New-Contact cmdlet to create a new contact in the directory. Most contact properties can be
directly added by using the parameters supported by this cmdlet.

## Syntax

```
New-Contact
-Name <string>
-OrganizationalUnit <string>
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
- FirstName
- LastName
- DisplayName

Example:

The following command creates a new contact in the container specified by the _OrganizationalUnit_
parameter. The command also specifies the logon name, first name, last name and display name of the
new contact.

```
New-Contact -Name "OsamaContact" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -FirstName "OsamaContact" -LastName "OsamaContact" -DisplayName "OsamaContact"
```
