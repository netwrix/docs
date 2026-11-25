---
title: "Remove-Container Cmdlet"
description: "Use the Remove-Container cmdlet to delete an empty, leaf-level organizational unit from the directory."
keywords:
  - Remove-Container
  - delete organizational unit
  - leaf container
  - Management Shell
sidebar_position: 90
---

# Remove-Container Cmdlet

Use the `Remove-Container` cmdlet to delete organizational units from the directory. The cmdlet only supports deletion of leaf-level containers that have no objects. If the container contains objects or sub-containers, the cmdlet doesn't process the request and throws an exception.

## Syntax

```
Remove-Container
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- Identity

## Examples

### Example 1

The following command removes the _Miscellaneous_ container, using the credentials of the current user signed in to the identity store.

```
Remove-Container -identity "OU=Miscellaneous,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

### Example 2

The following command first shows the changes that result from executing the command. The command uses the credentials set in the $Credentials environment variable to perform the deletion. To set credentials in the environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic.

```
Remove-Container -identity "OU=Miscellaneous,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```
