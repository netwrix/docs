---
title: "Set-Dynasty Cmdlet in Directory Manager"
description: "Modify a Dynasty or its child groups with the Set-Dynasty cmdlet, including syntax, required parameters, and examples."
keywords:
  - Set-Dynasty
  - Dynasty
  - Management Shell
  - PowerShell cmdlet
  - group-by attributes
sidebar_position: 20
---

# Set-Dynasty Cmdlet in Directory Manager

Use the Set-Dynasty cmdlet to modify a Dynasty or its children in the directory.

Directory Manager maintains a history for this cmdlet. You can view it under the **History** node in the left pane.

## Syntax

```
Set-Dynasty
-Identity <string>
[-GroupBy <string[]>]
[-AliasTemplate <string>]
[-DisplayNameTemplate <string>]
[-InheritanceBehaviour
{InheritSelectedAttributeOnCreation |
AlwaysInheritSelectedAttributes |
NeverInheritSelectedAttributes}]
[-TopManager <string>]
[-ChildContainer <string[]>]
[-ExcludeNestedLists <string>]
[-CreateFlatManagerialList <string>]
[-IncludeManagerAsMember <string>]
[-Filters <string[]>]
[-Separator <string[]>]
[-SearchContainers <string[]>]
[-SearchContainersScopeList <string[]>]
[-ObjectTypes <string[]>]
[-LdapFilter <string>]
[-IncludeRecipients <string[]>]
[-ExcludeRecipients <string[]>]
[-Storage <string>]
[-DataSourceType <string>]
[-SystemDSN <string>]
[-TableOrView <string>]
[-DataSourceUserName <string>]
[-DataSourcePassword <string>]
[-FilePath <string>]
[-Server <string>]
[-Port <int>]
[-LDAPSearchContainer <string>]
[-DataSourceName <string>]
[-DataSourceQuery <string>]
[-WindowsAuthentication]
[-EnableUpdate <string>]
[-IsPasswordExpirySmartDL]
[-ExpirationRange <int>]
[-DomainExpiration <int>]
[-MaximumPasswordAge <int>]
[-MinimumPasswordAge <int>]
[-IncludeDisabledUsers <string>]
[-IncludePasswordNeverExpireUsers <string>]
[-SendEmail <string>]
[-EmailTemplatePath <string>]
[-Script <string>]
[-ScriptFilePath <string>]
[-Provider_Container <string>]
[-PowerTools <ArrayList>]
[-KeyMapAD <string>]
[-KeyMapDB <string>]
[-ExtendGroupLife]
[-ExpirationPolicy <int>]
[-MsExchCoManagedByLink <string[]>]
[-IsExpired <string>]
[-GroupScope <string>]
[-Type <string>]
[-Prefix <string>]
[-SecurityType <string>]
[-ManagedBy <string[]>]
[-MaxSendSize <int>]
[-AcceptMessagesOnlyFrom <string[]>]
[-RejectMessagesFrom <string[]>]
[-AcceptMessagesOnlyFromGroups <string[]>]
[-RejectMessagesFromGroup <string[]>]
[-AdditionalOwners <string[]>]
[-NotifyOptOutAdditionalOwners <string[]>]
[-ExpansionServer <string>]
[-BypassOwnersPolicy <string>]
[-MsExchRequireAuthToSendTo <string>]
[-HiddenFromAddressListEnabled <string>]
[-SendOofMessageToOriginatorEnabled <string>]
[-HideMembershipFromAddressListEnabled <string>]
[-ReportToManagerEnabled <string>]
[-ReportToOriginatorEnabled <string>]
[-UpdateMembershipByManagerEnabled <string>]
[-Add <hashtable[]>]
[-Remove <hashtable[]>]
[-Replace <hashtable[]>]
[-Clear <string[]>]
[-Department <string>]
[-Company <string>]
[-Assistant <string>]
[-HomePage <string>]
[-Alias <string>]
[-EmailAddress <string>]
[-Description <string>]
[-Notes <string>]
[-AdministrativeNotes <string>]
[-DisplayName <string>]
[-SimpleDisplayName <string>]
[-CustomAttribute1 <string>]
[-CustomAttribute2 <string>]
[-CustomAttribute3 <string>]
[-CustomAttribute4 <string>]
[-CustomAttribute5 <string>]
[-CustomAttribute6 <string>]
[-CustomAttribute7 <string>]
[-CustomAttribute8 <string>]
[-CustomAttribute9 <string>]
[-CustomAttribute10 <string>]
[-CustomAttribute11 <string>]
[-CustomAttribute12 <string>]
[-CustomAttribute13 <string>]
[-CustomAttribute14 <string>]
[-CustomAttribute15 <string>]
[-Delimiter <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- Identity

## Examples

### Example 1

This command modifies the Departmental Dynasty by changing the Group-by attributes list. It uses the credentials of the current user signed in to the identity store.

```
Set-Dynasty -Identity "CN=DepartmentalOU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupBy "Department","Company","Title"
```

### Example 2

This command modifies the Top Manager of a Managerial Dynasty and changes the alias name and display name templates for the Dynasty children. It also sets the scope to search Dynasty children in the containers specified in the Add parameter, excluding sub-containers. It uses the credentials set in the $Credentials environment variable. To set credentials in an environment variable, see [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md).

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -TopManager "CN=Administrator,CN=Users,DC=HR,DC=Imanami,DC=US" -Add @{ SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#1","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#1"}-ExcludeNestedLists False -ChildContainer "" -AliasTemplate "%Manager% -DirectReports" -DisplayNameTemplate "Direct reports of %Manager%" -Credential $Cred
```

### Example 3

This command modifies the search criteria for the Managerial Dynasty to retrieve all mail-enabled objects that are members of the Training group.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectTypes "ExchangeUsers","ExternalUsers","ExternalContacts","EmailGroups" -LdapFilter "(MemberOf=Training)"
```

### Example 4

This command adds three group-by levels to an Organizational Dynasty.

```
Set-Dynasty -Identity "CN=Organizational,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Add @{GroupBy="Company#OU=Recruiting,DC=HR,DC=Imanami,DC=US#Left 3#-","Department#OU=Recruiting,DC=HR,DC=Imanami,DC=US#Right 5#-","OU=Recruiting,DC=HR,DC=Imanami,DC=US#With %GROUPBY%\*#^"}
```

### Example 5

This command modifies the additional owners, Includes, and Excludes lists and replaces the Search Scope of a Managerial Dynasty.

```
Set- Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Add @{AdditionalOwners="CN=Roger Manson,OU=Recruiting,OU=HR,DC=Imanami,DC=US","Robin Soto"; Includes="USWing","PKWing"; Excludes="UAEWing"} -Replace @{SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#1","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#1"}
```

### Example 6

This command clears the groups specified in the Includes list of a Managerial Dynasty.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Clear "Includes"
```
