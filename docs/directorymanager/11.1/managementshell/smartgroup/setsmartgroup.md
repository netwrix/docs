---
title: "Set-SmartGroup"
description: "Set-SmartGroup"
sidebar_position: 40
---

# Set-SmartGroup

The Set-SmartGroup commandlet modifies a Smart Group in Directory. Attributes that are common to
both Smart Groups and unmanaged groups can also be modified using the
[Set-Group](/docs/directorymanager/11.1/managementshell/group/setgroup.md) commandlet.

You can view events related to this commandlet in Directory Manager portal, against the History node
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
[-Credential  <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following command modifies a Smart Group by adding **Administrator** statically in the group
membership, regardless of whether it is returned by the query, using the credentials of current user
logged-on to the identity store.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IncludeRecipients "CN=Administrator,CN=Users,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command modifies the LDAP query of a Smart Group to retrieve all mail-enabled objects
that are members of the group **Training**, using the credentials set in the **$Credentials**
environment variable.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectTypes "ExchangeUsers","ExternalUsers","ExternalContacts","EmailGroups" -LdapFilter "(MemberOf=Training)" -Credential $Cred
```

Example 3:

The following command modifies the Password Expiry group using the credentials of current user
logged-on to the identity store. To be added are those users who reside in the containers specified
in the **Add** parameter (including sub-containers) and whose password is 20 days or more older and
set to never expire.

```
Set-SmartGroup -Identity "CN=Password_Expiry,OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Add @{SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#2","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#2" -IsPasswordExpirySmartDL -DomainExpiration 30 -ExpirationRange 10 -IncludePasswordNeverExpireUsers True]
```

Example 4:

The following command modifies the membership of a Smart Group based on the script given in the
script file.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" –ScriptFilePath "c:\MembershipUpdateScript.vb"
```

Example 5:

The following command overwrites the **Includes** and **Excludes** lists of a Smart Group by adding
two groups in the Includes list and one group in the Excludes list.

```
Set-SmartGroup -Identity "CN=imrantest, OU=Testit, DC=minion,DC=local" –Replace @{Includes = "CN=Shizasss,CN=Users,DC=minion,DC=Local","CN=ShezaOfc,CN=Users,DC=minion,DC=Local" ; Excludes="CN=Administrator,CN=Users,DC=minion,DC=local" , "CN=TestMailbox,CN=Users,DC=minion,DC=local"]

```

Exampe 6:

The following command modifies lists of members a Smart Group can accept and reject messages from.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" –Add @{ RejectMessagesFrom = "CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US"} -Add @(AcceptMessageOnlyFrom = "CN=PKWing,OU=Recruiting,DC=HR,DC=Imanami,DC=US","CN=USWing,OU=Recruiting,DC=HR,DC=Imanami,DC=US")
```
