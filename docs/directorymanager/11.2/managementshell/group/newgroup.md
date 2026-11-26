---
title: "New-Group"
description: "Create a new unmanaged group in a container in the directory with the New-Group cmdlet, including scope, type, and security type."
keywords:
  - New-Group
  - create unmanaged group
  - group scope
  - SecurityType
  - Directory Manager PowerShell
sidebar_position: 50
---

# New-Group

Use the New-Group cmdlet to create a new unmanaged group in a particular container in the directory.

You can view events related to this cmdlet in the Directory Manager portal, under the **History** node
in the left pane.

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

## Required parameters

- SamAccountName
- Name
- OrganizationalUnit
- GroupScope
- Type
- SecurityType

:::note
Only universal groups can be mail-enabled.
:::

## Examples

### Example 1

The following command creates a new unmanaged, mail-disabled, global, public, distribution
group in the container specified by the **OrganizationalUnit** parameter. It uses the credentials of
the current user signed in to the identity store.

```
New-Group -Name "Event Management" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "EventManagement" -SamAccountName "Event Management" -GroupScope "Global Group" -Type "Distribution" -SecurityType "Public"
```

### Example 2

The following command creates a new mail-enabled, universal, semi-private, security group in the
container specified by the **OrganizationalUnit** parameter. It uses the credentials set in the
**$Credentials** environment variable. To set credentials in an environment variable, see
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md).
To run the command as another user, use the Credential parameter together with the IdentityStoreId
parameter.

```
New-Group -Name "Enrollment" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "Enrollment" -MailEnabled True -SamAccountName "Enrollment" -GroupScope "Universal Group" -Type "Security" -SecurityType "Semi_Private" -IdentityStoreId 2 -Credential $Credentials
```
