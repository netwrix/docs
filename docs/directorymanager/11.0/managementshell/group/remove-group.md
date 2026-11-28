---
title: "Remove-Group"
description: "Delete a managed group, unmanaged group, or Dynasty from the directory with the Remove-Group cmdlet; removing a parent Dynasty also removes its children."
keywords:
  - Remove-Group
  - delete group
  - delete Dynasty
  - GroupID PowerShell
sidebar_position: 60
---

# Remove-Group

Use this cmdlet to delete a group (managed or unmanaged) or Dynasty in the directory. Removing a
parent Dynasty using this cmdlet removes all its children as well.

You can view events related to this cmdlet in the GroupID portal, under the History node
in the left pane.

## Syntax

```
Remove-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following command removes the **Event Management** group, using the credentials of the current user
signed in to the identity store.

```
Remove-Group -identity "OU=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command first shows the changes that running the command makes (a
deletion). The command uses the credentials set in the **$Credentials** environment variable to
perform the deletion. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Remove-Group -identity "OU=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Group Cmdlets](/docs/directorymanager/11.0/managementshell/group/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
