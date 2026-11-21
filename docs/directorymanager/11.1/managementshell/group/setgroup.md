---
title: "Set-Group"
description: "Set-Group"
sidebar_position: 80
---

# Set-Group

The Set-Group commandlet modifies an unmanaged group in directory. However, you can use this
commandlet to modify those parameters of a Smart Group that are native attributes of an unmanaged
group in Directory. For modifying Smart Group-specific attributes, you can use the
[Set-SmartGroup](/docs/directorymanager/11.1/managementshell/smartgroup/setsmartgroup.md) commandlet.

You can view events related to this commandlet in Directory Manager portal, against the History node
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

## Clear Parameter

Use the Clear parameter to remove all current values of one or more group attributes. Enter the
attribute names without quotes, separated by commas:

```
-Clear ManagedBy,AdditionalOwners
```

Attribute names aren't case-sensitive.

:::warning
Don't enclose the list of attribute names in quotes. Set-Group reads `"ManagedBy,AdditionalOwners"`
as one attribute name and doesn't split it, so it clears nothing and doesn't show an error.
:::

The Clear parameter supports the following attributes:

- ManagedBy: the primary owner (manager) of the group in an Active Directory identity store
- Owners: the primary owner (manager) of the group in a Microsoft Entra ID identity store
- AdditionalOwners
- AcceptMessagesOnlyFrom (alias: authorig)
- AcceptMessagesOnlyFromGroups (alias: dlmemsubmitprems)
- RejectMessagesFrom (alias: unauthorig)
- RejectMessagesFromGroups (alias: dlmemrejectprems)

In a Microsoft Entra ID identity store, use `-Clear Owners` to clear the manager. `-Clear ManagedBy`
has no effect there. Set-Group ignores any attribute name that isn't in this list and doesn't show an
error or warning.

Run Clear in its own Set-Group command. If the same command also sets a new value through the
ManagedBy or AdditionalOwners parameter for an attribute that you clear, Set-Group discards the new
value. To replace the values of an attribute, run a Set-Group command with the Clear parameter
first, and then run a second Set-Group command that sets the new values.

To clear the manager, use `-Clear ManagedBy` rather than `-ManagedBy ""` or `-ManagedBy $null`.
These values return an error or leave the manager unchanged. To clear additional owners, use
`-Clear AdditionalOwners`. `-AdditionalOwners ""` doesn't clear them. You can also use
`-Replace @{AdditionalOwners="*"}` to remove all existing additional owners. Set-Group shows a
warning that it removes all existing additional owners.

Example 1:

The following command changes the expiration policy of the Training group to 60 days and assigns a
manager to the group, using the credentials of current user logged-on to the identity store.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ExpirationPolicy "60" -ExtendGroupLife -ManagedBy "CN=John Smith,CN=Users,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command expires the group Training, using the credentials set in the $Credentials
environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IsExpired True -Credential $Cred
```

Example 3:

The following command clears the manager and the additional owners of the Training group.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Clear ManagedBy,AdditionalOwners
```

Example 4:

The following commands get all groups in the container Recruiting. The first command clears their
additional owner lists, and the second command sets their expiration policy to Never Expire. The
OUT-NULL commandlet keeps the retrieved group information from appearing on the console.

```
Get-Group -searchcontainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" | Set-Group -Clear AdditionalOwners | OUT-NULL
Get-Group -searchcontainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" | Set-Group -ExpirationPolicy "0" -ExtendGroupLife | OUT-NULL
```

Example 5:

The following command removes two additional owners from the Training group and adds three new
additional owners to the group and excludes an additional owner from receiving e-mail notifications.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Remove @{AdditionalOwners = "CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US","KillenEdward"} -Add @{AdditionalOwners = "RobinSoto","MeganFox","DollyChan"} -NotifyOptOutAdditionalOwners "RobinSoto"
```
