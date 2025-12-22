---
title: "New-Group"
description: "New-Group"
sidebar_position: 50
---

# New-Group

Use the **New-Group** commandlet to create a new unmanaged group in a particular container in
directory.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

## Syntax

```
New-Group
-SamAccountName <string>
-Name <string>
-OrganizationalUnit <string>
-GroupScope <string>
-Type <string>
-SecurityType <string>
[-GroupAlias <string>]
[-ManagedBy <string[]>]
[-DisplayName <string>]
[-MailEnabled <string>]
[-Description <string>]
[-AdditionalOwners <string[]>]
[-NotifyOptOutAdditionalOwners <string[]>]
[-Members <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- SamAccountName
- Name
- OrganizationalUnit
- GroupScope
- Type
- SecurityType

Example 1:

The following command creates a new unmanaged, mail-disabled, global, distribution group in the
container specified by the **OrganizationalUnit** parameter, using the credentials of current user
logged-on to the identity store.

```
New-Group -Name "Event Management" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "EventManagement" -SamAccountName "Event Management" -GroupScope "Global Group" -Type "Distribution"
```

Example 2:

The command below creates a new mail-enabled, domain-local, semi-private, security group in the
container specified by the **OrganizationalUnit** parameter, using the credentials set in the
**$Credentials** environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
New-Group -Name "Enrollment" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "Enrollment" -MailEnable True -SamAccountName "Enrollment" -GroupScope "Domain Local" -Type "Security" -SecurityType "Semi_Private"
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Group Commands](/docs/directorymanager/11.0/managementshell/group/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
