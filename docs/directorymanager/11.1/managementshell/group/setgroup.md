---
title: "Set-Group"
description: "Modify an unmanaged group, or the native group attributes of a Smart Group, in the directory with the Set-Group cmdlet."
keywords:
  - Set-Group
  - modify unmanaged group
  - group expiration policy
  - additional owners
  - Directory Manager PowerShell
sidebar_position: 80
---

# Set-Group

The Set-Group cmdlet modifies an unmanaged group in the directory. You can also use this
cmdlet to modify the parameters of a Smart Group that are native attributes of an unmanaged
group in the directory. To modify Smart Group-specific attributes, use the
[Set-SmartGroup Cmdlet](/docs/directorymanager/11.1/managementshell/smartgroup/setsmartgroup.md) cmdlet.

You can view events related to this cmdlet in the Directory Manager portal, under the History node
in the left panel.

## Syntax

```
Set-Group
-Identity <string>
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

The following command changes the expiration policy of the Training group to 60 days and assigns a
manager to the group, using the credentials of the current user signed in to the identity store.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ExpirationPolicy "60" -ExtendGroupLife -ManagedBy "CN=John Smith,CN=Users,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command expires the group Training, using the credentials set in the $Credentials
environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IsExpired True -Credential $Cred
```

Example 3:

The following command gets all groups in the container Recruiting, clears their additional owner
lists and sets their expiration policy to Never Expire. The OUT-NULL cmdlet prevents
the retrieved group information from appearing on the console.

```
Get-Group -searchcontainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" | Set-Group -AdditionalOwners "" -ExpirationPolicy "0" -ExtendGroupLife | OUT-NULL
```

Example 4:

The following command removes two additional owners from the Training group, adds three new
additional owners to the group, and excludes an additional owner from receiving email notifications.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Remove @{AdditionalOwners = "CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US","KillenEdward"} -Add @{AdditionalOwners = "RobinSoto","MeganFox","DollyChan"} -NotifyOptOutAdditionalOwners "RobinSoto"
```
