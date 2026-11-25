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

This cmdlet helps you create a new Smart Group (managed group) in the directory. A Smart Group is
a conventional distribution or security group that dynamically maintains its membership based on the
rules applied by a user-defined LDAP query.

A Smart Group can also be defined as a Password Expiry group. A Password Expiry group is a dynamic
group whose membership is based on password policy conditions defined by the administrator. The LDAP
query defined for a Smart Group can be updated at any time using the [Set-SmartGroup Cmdlet](/docs/directorymanager/11.1/managementshell/smartgroup/setsmartgroup.md)
cmdlet. When the LDAP query is changed, you must update the group once to modify its membership
according to the changes made to the query. For information about updating a group, see
[Update-Group Cmdlet](/docs/directorymanager/11.1/managementshell/smartgroup/updategroup.md).

You can view events related to this cmdlet in the Directory Manager portal, under the History node
in the left panel.

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

## Required Parameters

- SamAccountName
- Name
- OrganizationalUnit
- GroupScope
- Type
- SecurityType

Example 1:

The following command creates a new mail-enabled, universal, distribution Smart Group in the
container specified by the **OrganizationalUnit** parameter, using the credentials of the current user
logged on to the identity store.

```
New-SmartGroup  -OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Name "Smart_Training" -GroupAlias "Smart_Training" -MailEnable True -SamAccountName "Smart_Training" -GroupScope "Universal Group" -Type "Distribution"
```

:::note
In Microsoft Exchange 2007 and later, mail-enabled groups are created with _Universal Group
Scope_.
:::

Example 2:

The following command creates a new universal, distribution Smart Group in the container specified
by the **OrganizationalUnit** parameter and builds its membership by retrieving those objects from
the containers specified in the **SearchContainers** parameter excluding sub-containers that have
**Display Names** matching the Names in a text file.

```
New-SmartGroup -OrganizationalUnit "OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Name "Smart_Enrollment" -SamAccountName "Smart_Enrollment" -GroupScope "Universal Group" -Type "Distribution" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US" -SearchContainersScopeList "1","1" -LdapFilter "(displayName=Database.[Name])" -DataSourceType "Microsoft Text Driver (*.txt,*.csv)" -FilePath "D:\Inputs\Names.txt" -DataSourceQuery "SELECT [Name] FROM [Names.txt]"
```

Example 3:

The following command creates a new local, distribution, Password Expiry group, using the
credentials set in the **$Credentials** environment variable. Users who have passwords aged 20 days
or older become members of the group. Disabled users are also included in the membership.

```
New-SmartGroup -OrganizationalUnit "OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Name "Password_Expiry" -GroupAlias "Password_Expiry" -SamAccountName "Password_Expiry" -GroupScope "Domain Local" -Type "Distribution" -IsPasswordExpiryGroup -DomainExpiration 30 -ExpirationRange 10 -IncludeDisabledUsers True -Credential $Cred
```
