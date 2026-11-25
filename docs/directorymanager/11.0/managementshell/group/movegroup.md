---
title: "Move-Group"
description: "Move a group to another container in the same domain or in a different domain in the same forest with the Move-Group cmdlet."
keywords:
  - Move-Group
  - move group
  - destination container
  - Directory Manager PowerShell
sidebar_position: 40
---

# Move-Group

The Move-Group cmdlet lets you move a group to a different container in the same domain or in a
different domain within the same forest. You can't move groups across forests.

You can view events related to this cmdlet in the Directory Manager portal, under the History node
in the left pane.

## Syntax

```
Move-Group
-Identity <string>
-DestinationContainer <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- Identity
- DestinationContainer

Example 1:

The following command moves the group _Training_ to the _Local Recruiting_ organizational unit using
the credentials of the user signed in to the identity store.

```
Move-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -DestinationContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command moves the group _Training_ to the _OffShore Recruiting_ organizational unit.
The command uses the credentials set in the $Credentials environment variable for moving a group.
See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Move-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US" -DestinationContainer "OU=OffShore Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Group Cmdlets](/docs/directorymanager/11.0/managementshell/group/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
