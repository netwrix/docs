---
title: "New-Contact Cmdlet in Directory Manager"
description: "Create a contact in the directory from the Directory Manager Management Shell and set its properties with cmdlet parameters."
keywords:
  - New-Contact
  - create contact
  - Directory Manager Management Shell
  - contact cmdlet
sidebar_position: 20
---

# New-Contact Cmdlet in Directory Manager

Use the New-Contact cmdlet to create a contact in the directory. You can add most contact properties
directly by using the parameters supported by this cmdlet.

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

The following command creates a contact in the container specified by the _OrganizationalUnit_
parameter. The command also specifies the logon name, first name, last name, and display name of the
new contact.

```
New-Contact -Name "OsamaContact" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -FirstName "OsamaContact" -LastName "OsamaContact" -DisplayName "OsamaContact"
```
