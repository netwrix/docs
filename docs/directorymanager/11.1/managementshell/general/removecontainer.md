---
title: "Remove-Container"
description: "Remove-Container"
sidebar_position: 90
---

# Remove-Container

Use the Remove-Container commandlet to delete organizational units from Directory. The commandlet
only supports deletion of containers at leaf level, having no objects. If the container contains
objects or sub-containers, the commandlet does not process the request and throws an exception.

## Syntax

```
Remove-Container
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following command removes the _Miscellaneous_ container, using the credentials of current user
logged-on to the identity store.

```
Remove-Container -identity "OU=Miscellaneous,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command first shows the changes that result from executing the command. The command
uses the credentials set in the $Credentials environment variable to perform the deletion. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in the environment variable.

```
Remove-Container -identity "OU=Miscellaneous,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```
