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

## Examples

### Add a user to a group

This command adds the user Brian Regan to the membership of the Event Management group. It uses the credentials set in the `$Credentials` environment variable. To set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic.

```
Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "CN=BrianRegan,CN=User,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

### Add all users from a container to a group

This command gets all users from the Local Recruiting container and adds them to the membership of the Event Management group. For details about the Get-Object cmdlet, see [Get-Object Cmdlet for Directory Manager](/docs/directorymanager/11.1/managementshell/membership/getobject.md). The OUT-NULL cmdlet stops the retrieved user information from appearing on the console.

```
Get-Object -SearchContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectType "User" | Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```
