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

The **Add-GroupMember** cmdlet adds one or more objects to the membership of a group in the
directory. Directory Manager supports two types of membership:

- Perpetual membership
- Temporary membership

Modifying the membership of a Smart Group or Dynasty using this cmdlet isn't recommended, because
Directory Manager discards your changes the next time it updates the group.

Directory Manager maintains a history for this cmdlet, which you can view in the Directory Manager
portal, under the **History** node in the left panel.

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

The following command adds the user **Brian Regan** to the membership of the **Event Management**
group using the credentials set in the **$Credentials** environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "CN=BrianRegan,CN=User,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

Example 2:

The following command gets all users from the **Local Recruiting** container and adds them to the
membership of the **Event Management** group. For detailed information about the Get-Object
cmdlet, see
[Get-Object Cmdlet for Directory Manager](/docs/directorymanager/11.0/managementshell/membership/getobject.md). The
**OUT-NULL** cmdlet prevents the retrieved user information from appearing on the console.

```
Get-Object -SearchContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectType "User" | Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Group Membership Cmdlets](/docs/directorymanager/11.0/managementshell/membership/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
