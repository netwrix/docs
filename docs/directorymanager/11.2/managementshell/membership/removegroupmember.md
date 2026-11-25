---
title: "Remove-GroupMember Cmdlet for Directory Manager"
description: "Remove one or more members from the membership of a group using the Remove-GroupMember cmdlet."
keywords:
  - Remove-GroupMember
  - remove group members
  - group membership
  - Directory Manager cmdlets
sidebar_position: 40
---

# Remove-GroupMember Cmdlet for Directory Manager

Use the Remove-GroupMember cmdlet to remove one or more members from the membership of a group.

Directory Manager keeps a history for this cmdlet. To view it, go to the History node in the left panel of the Directory Manager portal.

## Syntax

```
Remove-GroupMember
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

## Example

This command removes the user Brian Regan from the membership of the group Event Management. It uses the credentials set in the $Credentials environment variable. To set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic.

```
Remove-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "Brian Regan" -Credential $Cred
```
