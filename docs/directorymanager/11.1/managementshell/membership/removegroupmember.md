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

Use this cmdlet to remove one or more members from the membership of a group.

Directory Manager maintains a history for this cmdlet, which you can view in the Directory Manager
portal, under the History node in the left panel.

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

## Required Parameters

- GroupIdentity
- Identity

Example:

The following command removes the user Brian Regan from the membership of the group Event Management
using the credentials set in the $Credentials environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Remove-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "Brian Regan" -Credential $Cred
```
