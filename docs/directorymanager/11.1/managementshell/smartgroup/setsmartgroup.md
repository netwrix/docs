---
title: "Set-SmartGroup Cmdlet"
description: "Modify a Smart Group in Directory Manager, including its LDAP query, includes and excludes, Password Expiry settings and mail attributes."
keywords:
  - Set-SmartGroup
  - modify Smart Group
  - Smart Group LDAP query
  - Password Expiry group
  - Directory Manager cmdlet
  - Management Shell
sidebar_position: 40
---

# Set-SmartGroup Cmdlet

The Set-SmartGroup cmdlet modifies a Smart Group in the directory. You can also modify attributes that Smart Groups and unmanaged groups share with the [Set-Group](/docs/directorymanager/11.1/managementshell/group/setgroup.md) cmdlet.

You can view events related to this cmdlet in the Directory Manager portal, under the History node
in the left panel.

## Syntax

```
Set-SmartGroup
-Identity <string>
[-SearchContainers <string[]>]
[-SearchContainersScopeList <string[]>]
[-ObjectTypes <string[]>]
[-LdapFilter <string>]
[-IncludeRecipients <string[]>]
[-ExcludeRecipients <string[]>]
[-Storage <string>]
[-DataSourceId <string>]
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
[-PowerTools <ArrayList>]
[-KeyMapAD <string>]
[-KeyMapDB <string>]
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
[-ResetQuickFilter]
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
[-Credential  <pscredential>]
[<CommonParameters>]
```

## Required parameter

- Identity

## Examples

### Example 1

This command modifies a Smart Group by adding **Administrator** statically to the group membership, even when the query doesn't return it. It uses the credentials of the current user logged on to the identity store.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IncludeRecipients "CN=Administrator,CN=Users,DC=HR,DC=Imanami,DC=US"
```

### Example 2

This command modifies the LDAP query of a Smart Group to retrieve all mail-enabled objects that are members of the group **Training**. It uses the credentials in the **$Credentials** environment variable. To run the command as another user, use the Credential parameter together with the IdentityStoreId parameter.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectTypes "ExchangeUsers","ExternalUsers","ExternalContacts","EmailGroups" -LdapFilter "(MemberOf=Training)" -IdentityStoreId 2 -Credential $Credentials
```

### Example 3

This command modifies a Password Expiry group. It uses the credentials of the current user logged on to the identity store. It adds users who reside in the containers in the **Add** parameter, including sub-containers, and whose password is 20 days old or older and set to never expire. The value 2 in the **SearchContainersScopeList** parameter includes the sub-containers of each container, in the same order as the containers.

```
Set-SmartGroup -Identity "CN=Password_Expiry,OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Add @{SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US"} -SearchContainersScopeList "2","2" -IsPasswordExpirySmartDL -DomainExpiration 30 -ExpirationRange 10 -IncludePasswordNeverExpireUsers True
```

### Example 4

This command modifies the membership of a Smart Group based on the script in the script file.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ScriptFilePath "c:\MembershipUpdateScript.vb"
```

### Example 5

This command replaces members in the **Includes** and **Excludes** lists of a Smart Group. For each list, the **Replace** parameter removes the first value and adds the remaining values. It doesn't overwrite the whole list. The command replaces JaneDoe with JohnDoe in the Includes list, and Administrator with TestMailbox in the Excludes list.

```
Set-SmartGroup -Identity "CN=SampleSmartGroup, OU=Testit, DC=example,DC=com" -Replace @{Includes = "CN=JaneDoe,CN=Users,DC=example,DC=com","CN=JohnDoe,CN=Users,DC=example,DC=com" ; Excludes="CN=Administrator,CN=Users,DC=example,DC=com" , "CN=TestMailbox,CN=Users,DC=example,DC=com"}

```

### Example 6

This command modifies the lists of members that a Smart Group accepts messages from and rejects messages from.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Add @{RejectMessagesFrom="CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US"; AcceptMessagesOnlyFrom="CN=PKWing,OU=Recruiting,DC=HR,DC=Imanami,DC=US","CN=USWing,OU=Recruiting,DC=HR,DC=Imanami,DC=US"}
```
