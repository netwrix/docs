---
title: "Remove-Group"
description: "Delete a managed group, unmanaged group, or Dynasty from the directory with the Remove-Group cmdlet; removing a parent Dynasty also removes its children."
keywords:
  - Remove-Group
  - delete group
  - delete Dynasty
  - Directory Manager PowerShell
sidebar_position: 60
---

# Remove-Group

Use the Remove-Group cmdlet to delete a group (managed or unmanaged) or Dynasty in the directory.
Removing a parent Dynasty with this cmdlet also removes all its children. The cmdlet deletes without
asking for confirmation.

You can view events related to this cmdlet in the Directory Manager portal, under the **History** node
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

## Required parameter

- Identity

## Examples

### Example 1

The following command removes the Event Management group. It uses the credentials of the current
user signed in to the identity store.

```
Remove-Group -Identity "CN=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

### Example 2

The following command removes the Event Management group. It uses the credentials stored in the
$Credentials variable. To run the command as another user, use the Credential parameter together
with the IdentityStoreId parameter. For how to store credentials in a variable, see
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md).

```
Remove-Group -Identity "CN=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IdentityStoreId 2 -Credential $Credentials
```
