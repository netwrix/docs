---
title: "Remove-GroupMember"
description: "Remove-GroupMember"
sidebar_position: 40
---

# Remove-GroupMember

Use this commandlet to remove one or more members from a group membership.

Directory Manager maintains a history for this commandlet, which you can view in Directory Manager
portal, against the History node in the left panel.

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
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Remove-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "Brian Regan" -Credential $Cred
```
