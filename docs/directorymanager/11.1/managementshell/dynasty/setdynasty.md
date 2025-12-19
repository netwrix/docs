---
title: "Set-Dynasty"
description: "Set-Dynasty"
sidebar_position: 20
---

# Set-Dynasty

The Set-Dynasty commandlet lets you to modify a Dynasty or its children in Directory.

Directory Manager maintains a history for this commandlet, which you can view against the History
node in the left panel.

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

## Required Parameter

- Identity

Example 1:

The following command modifies the Departmental Dynasty by changing the Group-by attributes list
using the credentials of current user logged-on to the identity store.

```
Set-Dynasty -Identity "CN=DepartmentalOU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupBy "Department","Company","Title"
```

Example 2:

The command below modifies the Top Manager of a Managerial Dynasty, changes the alias name and
display name templates for the Dynasty children, sets the scope to search Dynasty children in the
containers specified in the Add parameter excluding sub-containers using the credentials set in the
$Credentials environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -TopManager "CN=Administrator,CN=Users,DC=HR,DC=Imanami,DC=US" -Add @{ SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#1","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#1"}-ExcludeNestedLists False -ChildContainer "" -AliasTemplate "%Manager% -DirectReports" -DisplayNameTemplate "Direct reports of %Manager%" -Credential $Cred
```

Example 3:

The following command modifies the search criteria for the Managerial Dynasty to retrieve all
mail-enabled objects who are the member of the Training group.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectTypes "ExchangeUsers","ExternalUsers","ExternalContacts","EmailGroups" -LdapFilter "(MemberOf=Training)"
```

Example 4:

The following command adds three group-by levels to an Organizational Dynasty.

```
Set-Dynasty -Identity "CN=Organizational,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Add @{GroupBy="Company#OU=Recruiting,DC=HR,DC=Imanami,DC=US#Left 3#-","Department#OU=Recruiting,DC=HR,DC=Imanami,DC=US#Right 5#-","OU=Recruiting,DC=HR,DC=Imanami,DC=US#With %GROUPBY%\*#^"}
```

Example 5:

The following command modifies additional owners, Includes and Excludes lists and replaces Search
Scope of a Managerial Dynasty.

```
Set- Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Add @{AdditionalOwners="CN=Roger Manson,OU=Recruiting,OU=HR,DC=Imanami,DC=US","Robin Soto"; Includes="USWing","PKWing"; Excludes="UAEWing"} -Replace @{SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#1","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#1"}
```

Example 6:

The following command clears the groups specified in the Includes list of a Managerial Dynasty.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Clear "Includes"
```
