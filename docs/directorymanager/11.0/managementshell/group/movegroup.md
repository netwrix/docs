---
title: "Move-Group"
description: "Move-Group"
sidebar_position: 40
---

# Move-Group

The **Move-Group** commandlet enables you to move a group to a different container in the same
domain or in a different domain within the same forest. Movement of groups across forests is not
allowed.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

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
the credentials of current user logged-on to the identity store.

```
Move-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -DestinationContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command moves the group _Training_ to the _OffShore Recruiting_ organizational unit.
The command uses the credentials set in the $Credentials environment variable for moving a group.
See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Move-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US" -DestinationContainer "OU=OffShore Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Group Commands](/docs/directorymanager/11.0/managementshell/group/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
