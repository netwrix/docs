---
title: "New-Dynasty"
description: "New-Dynasty"
sidebar_position: 10
---

# New-Dynasty

The **New-Dynasty** cmdlet creates a new Dynasty in Directory. A Dynasty is a Smart Group that can
create and maintain the membership of other Smart Groups. A Dynasty retrieves data from Directory in
the same manner as a Smart Group, but it divides the result set into child groups based on group-by
field values.

You can specify multiple group-by fields. For instance, with the group-by fields Country, State, and
City, this commandlet creates a group for every distinct country value, then for each state within a
country, and finally for each city in that state. All created child groups inherit those attributes
of the parent that are set in the **InheritedAttrs** option.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

## Syntax

```
New-Dynasty
-TopManager <string>
-SamAccountName <string>
-Name <string>
-OrganizationalUnit <string>
-GroupScope <string>
-Type <string>
-SecurityType <string>
[-ChildContainer <string[]>]
[-Filters <string[]>]
[-Separator <string[]>]
[-ExcludeNestedLists <string>]
[-CreateFlatManagerialList <string>]
[-IncludeManagerAsMember <string>]
[-ChildPath <string>]
[-DynastyInheritance <bool>]
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

- TopManager
- SamAccountName
- Name
- OrganizationalUnit
- GroupScope
- Type
- SecurityType

Example 1:

The following command creates a new mail-enabled, universal, distribution Dynasty and constructs its
child groups for every distinct department value in the container specified by the
**OrganizationalUnit** parameter using the credentials of current user logged-on to the identity
store.

```
New-Dynasty -OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Name "Departmental" -SamAccountName  "Departmental" -Type "Distribution" -GroupScope "Universal Group" -MailEnable True -GroupAlias "Departmental" -GroupBy  "Department"
```

Example 2:

The following command creates a new mail-enabled, universal, distribution, multi-level Dynasty with
the group-by attributes **Country, State** and **City** based on the specified filters and
separator, using the credentials set in the **$Credentials** environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
New-Dynasty -OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Name "Geographical" -GroupAlias "Geographical" -MailEnable True -SamAccountName "Geographical" -GroupScope "Universal Group" -Type "Distribution" -GroupBy "co","st","l" -Filters "Left 3","Left 3","%GROUPBY%\*" -Separator "_","_","_" -Credential $Cred
```

Example 3:

The following command creates a new universal, distribution Managerial Dynasty in the container
specified by the **OrganizationalUnit** parameter, searches the direct reports of the top manager in
the containers specified in the **SearchContainers** parameter including sub containers and creates
them in the same container where the Top Manager resides.

```
New-Dynasty -OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Name "Managerial" -SamAccountName "Managerial" -GroupScope "Universal Group" -Type "Distribution" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US" -SearchContainersScopeList "2","2" -TopManager "CN=BrianRegan,CN=Users,DC=HR,DC=Imanami,DC=US" -ExcludeNestedLists False -ChildContainer ""
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Dynasty Commands](/docs/directorymanager/11.0/managementshell/dynasty/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
