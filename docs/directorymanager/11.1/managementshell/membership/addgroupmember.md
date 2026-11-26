---
title: "Add-GroupMember Cmdlet for Directory Manager"
description: "Add one or more users, contacts or groups to the perpetual or temporary membership of a group with the Add-GroupMember cmdlet."
keywords:
  - Add-GroupMember
  - add group members
  - perpetual membership
  - temporary membership
  - Directory Manager cmdlets
sidebar_position: 10
---

# Add-GroupMember Cmdlet for Directory Manager

The Add-GroupMember cmdlet adds one or more objects to the membership of a group in the directory. Directory Manager supports two types of membership:

- Perpetual membership
- Temporary membership

Using this cmdlet to change the membership of a Smart Group or Dynasty isn't recommended, because Directory Manager discards your changes the next time it updates the group.

Directory Manager keeps a history for this cmdlet. To view it, go to the History node in the left panel of the Directory Manager portal.

## Syntax

```
Add-GroupMember
-GroupIdentity <string>
-Identity <string>
[-Type <string>]
[-StartDate <datetime>]
[-EndDate <datetime>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameters

- GroupIdentity
- Identity

## Parameter notes

- `-Type` accepts `Perpetual` (default), `Temporary Member`, or `Addition Pending`. Enclose values that contain a space in quotation marks.
- `Temporary Member` and `Addition Pending` require `-StartDate` and `-EndDate`, and the end date must be later than the start date. If the start date is in the past, the cmdlet uses the current date and time.

## Examples

### Add a user to a group

This command adds the user Brian Regan to the membership of the Event Management group. It runs against the identity store with ID 2 and uses the credentials set in the `$Credentials` environment variable. To run the command as another user, use the Credential parameter together with the IdentityStoreId parameter. To set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic.

```
Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "CN=BrianRegan,CN=User,DC=HR,DC=Imanami,DC=US" -IdentityStoreId 2 -Credential $Credentials
```

### Add all users from a container to a group

This command gets the users from the Local Recruiting container and its subcontainers (up to 1,000 by default) and adds them to the membership of the Event Management group. For details about the Get-Object cmdlet, see [Get-Object Cmdlet for Directory Manager](/docs/directorymanager/11.1/managementshell/membership/getobject.md). The ForEach-Object cmdlet passes the distinguished name of each user to the Identity parameter.

```
Get-Object -SearchContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectType "User" | ForEach-Object { Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity $_.DistinguishedName }
```
