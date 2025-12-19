---
title: "Add-GroupMember"
description: "Add-GroupMember"
sidebar_position: 10
---

# Add-GroupMember

The Add-GroupMember commandlet helps you to add one or more objects to the membership of a group in
Directory. Two types of membership can exist in Directory Manager.

- Perpetual membership
- Temporary membership

Modifying the membership of a Smart Group or Dynasty using this commandlet is not recommended, since
your changes will be discarded the next time the group is updated.

Directory Manager maintains a history for this commandlet, which you can view in Directory Manager
portal, against the History node in the left panel.

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

## Required Parameters

- GroupIdentity
- Identity

Example 1:

The following command adds the user Brian Regan to the membership of the Event Management group
using the credentials set in the $Credentials environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "CN=BrianRegan,CN=User,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

Example 2:

The following command gets all users from the Local Recruiting container and adds them to the
membership of the Event Management group. For detailed information about the Get-Object commandlet,
see [Get-Object](/docs/directorymanager/11.1/managementshell/membership/getobject.md). The OUT-NULL commandlet is used here to restrict the retrieved users
information from appearing on the console.

```
Get-Object -SearchContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectType "User" | Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```
