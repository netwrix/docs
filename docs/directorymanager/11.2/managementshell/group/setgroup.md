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

The `Set-Group` cmdlet modifies an unmanaged group in the directory. You can also use it to modify the parameters of a Smart Group that are native attributes of an unmanaged group in the directory.

To modify Smart Group-specific attributes, use the [Set-SmartGroup Cmdlet](/docs/directorymanager/11.2/managementshell/smartgroup/setsmartgroup.md) cmdlet.

You can view events related to this cmdlet in the Directory Manager portal, under the History node in the left pane.

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
[-Credential <pscredential>]
[<CommonParameters>]
```

Use the ResetQuickFilter switch to set the group's quick filter value (`imsgquickfilter`) to 2. This fixes groups upgraded from versions earlier than 10.

## Clear parameter

Use the `Clear` parameter to remove all current values of one or more group attributes. Enter the attribute names without quotes, separated by commas:

```
-Clear ManagedBy,AdditionalOwners
```

Attribute names aren't case-sensitive.

:::warning
Don't enclose the list of attribute names in quotes. `Set-Group` reads `"ManagedBy,AdditionalOwners"` as one attribute name and doesn't split it, so it clears nothing and doesn't show an error.
:::

The `Clear` parameter supports the following attributes:

- `ManagedBy` – the primary owner (manager) of the group in an Active Directory identity store
- `Owners` – the primary owner (manager) of the group in a Microsoft Entra ID identity store
- `AdditionalOwners`
- `AcceptMessagesOnlyFrom` (alias: `authorig`)
- `AcceptMessagesOnlyFromGroups` (alias: `dlmemsubmitprems`)
- `RejectMessagesFrom` (alias: `unauthorig`)
- `RejectMessagesFromGroups` (alias: `dlmemrejectprems`)

In a Microsoft Entra ID identity store, use `-Clear Owners` to clear the manager. `-Clear ManagedBy` has no effect there. `Set-Group` ignores any attribute name that isn't in this list and doesn't show an error or warning.

If a command uses the `ManagedBy` or `AdditionalOwners` parameter to set a new value for an attribute that it also clears, `Set-Group` discards the new value. To replace the values, run a command with the `Clear` parameter first, and then run a second command that sets the new values.

To clear the manager, use `-Clear ManagedBy` rather than `-ManagedBy ""` or `-ManagedBy $null`. These values return an error or leave the manager unchanged. To clear additional owners, use `-Clear AdditionalOwners`. `-AdditionalOwners ""` doesn't clear them. You can also use `-Replace @{AdditionalOwners="*"}` to remove all existing additional owners. `Set-Group` shows a warning that it removes all existing additional owners.

## Required parameters

- Identity

## Examples

### Example 1

The following command changes the expiration policy of the Training group to 60 days and assigns a manager to the group, using the credentials of the current user signed in to the identity store.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ExpirationPolicy "60" -ExtendGroupLife -ManagedBy "CN=John Smith,CN=Users,DC=HR,DC=Imanami,DC=US"
```

### Example 2

The following command expires the group Training, using the credentials set in the $Credentials environment variable. To run the command as another user, use the Credential parameter together with the IdentityStoreId parameter. To set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IsExpired True -IdentityStoreId 2 -Credential $Credentials
```

### Example 3

The following command gets all groups in the container Recruiting, clears their additional owner lists, and sets their expiration policy to Never Expire. The OUT-NULL cmdlet prevents the retrieved group information from appearing on the console.

```
Get-Group -SearchContainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" | ForEach-Object { Set-Group -Identity $_.DistinguishedName -Clear AdditionalOwners -ExpirationPolicy "0" -ExtendGroupLife } | OUT-NULL
```

### Example 4

The following command removes two additional owners from the Training group, adds three new additional owners to the group, and excludes an additional owner from receiving email notifications.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Remove @{AdditionalOwners = "CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US","KillenEdward"} -Add @{AdditionalOwners = "RobinSoto","MeganFox","DollyChan"} -NotifyOptOutAdditionalOwners "RobinSoto"
```

### Example 5

The following command clears the manager and the additional owners of the Training group.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Clear ManagedBy,AdditionalOwners
```
