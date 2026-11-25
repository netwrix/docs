---
title: "New-SmartGroup Cmdlet"
description: "Create a Smart Group or Password Expiry group in Directory Manager whose membership is maintained dynamically by an LDAP query."
keywords:
  - New-SmartGroup
  - create Smart Group
  - Password Expiry group
  - LDAP query membership
  - Directory Manager cmdlet
  - Management Shell
sidebar_position: 30
---

# New-SmartGroup Cmdlet

Use this cmdlet to create a Smart Group (managed group) in the directory. A Smart Group is a conventional distribution or security group. Its membership is maintained dynamically by the rules of a user-defined LDAP query.

A Smart Group can also be a Password Expiry group. A Password Expiry group is a dynamic group whose membership is based on password policy conditions that the administrator defines.

You can update the LDAP query of a Smart Group at any time with the [Set-SmartGroup Cmdlet](/docs/directorymanager/11.2/managementshell/smartgroup/setsmartgroup.md) cmdlet. After you change the LDAP query, update the group once to modify its membership according to the changes. For information about updating a group, see [Update-Group Cmdlet](/docs/directorymanager/11.2/managementshell/smartgroup/updategroup.md).

You can view events related to this cmdlet in the Directory Manager portal, under the History node in the left panel.

## Syntax

```
New-SmartGroup
-SamAccountName <string>
-Name <string>
-OrganizationalUnit <string>
-GroupScope <string>
-Type <string>
-SecurityType <string>
[-SearchContainers <string[]>]
[-SearchContainersScopeList <string[]>]
[-ObjectTypes <string[]>]
[-LdapFilter <string>]
[-IncludeRecipients <string[]>]
[-ExcludeRecipients <string[]>]
[-Storage <string>]
[-DataSourceType <string>]
[-SystemDSN <string>]
[-TableorView <string>]
[-DataSourceUserName <string>]
[-DataSourcePassword <string>]
[-FilePath <string>]
[-Server <string>]
[-Port <int>]
[-LDAPSearchContainer <string>]
[-DataSourceName <string>]
[-DataSourceConnection <string>]
[-DataSourceQuery <string>]
[-KeyMapDB <string>]
[-KeyMapAD <string>]
[-WindowsAthentication]
[-IsPasswordExpiryGroup]
[-DomainExpiration <int>]
[-ExpirationRange <int>]
[-IncludeDisabledUsers <string>]
[-IncludePasswordNeverExpireUsers <string>]
[-Script <string>]
[-ScriptFilePath <string>]
[-Sun_Container <string>]
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

## Examples

### Example 1

This command creates a mail-enabled, universal, distribution Smart Group in the container in the **OrganizationalUnit** parameter. It uses the credentials of the current user logged on to the identity store.

```
New-SmartGroup  -OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Name "Smart_Training" -GroupAlias "Smart_Training" -MailEnable True -SamAccountName "Smart_Training" -GroupScope "Universal Group" -Type "Distribution"
```

:::note
In Microsoft Exchange 2007 and later, mail-enabled groups are created with _Universal Group Scope_.
:::

### Example 2

This command creates a universal, distribution Smart Group in the container in the **OrganizationalUnit** parameter. It builds the membership from objects in the containers in the **SearchContainers** parameter. It excludes sub-containers whose **Display Names** match the names in a text file.

```
New-SmartGroup -OrganizationalUnit "OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Name "Smart_Enrollment" -SamAccountName "Smart_Enrollment" -GroupScope "Universal Group" -Type "Distribution" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US" -SearchContainersScopeList "1","1" -LdapFilter "(displayName=Database.[Name])" -DataSourceType "Microsoft Text Driver (*.txt,*.csv)" -FilePath "D:\Inputs\Names.txt" -DataSourceQuery "SELECT [Name] FROM [Names.txt]"
```

### Example 3

This command creates a local, distribution, Password Expiry group. It uses the credentials in the **$Credentials** environment variable. Users whose passwords are 20 days old or older become members of the group. Disabled users are also included in the membership.

```
New-SmartGroup -OrganizationalUnit "OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Name "Password_Expiry" -GroupAlias "Password_Expiry" -SamAccountName "Password_Expiry" -GroupScope "Domain Local" -Type "Distribution" -IsPasswordExpiryGroup -DomainExpiration 30 -ExpirationRange 10 -IncludeDisabledUsers True -Credential $Cred
```
