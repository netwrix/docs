---
title: "New-Container"
description: "New-Container"
sidebar_position: 80
---

# New-Container

The New-Container commandlet creates a new organizational unit in Directory. You can also use it to
create nested organizational units by repeatedly executing the commandlet and changing the value of
the ParentContainer parameter.

## Syntax

```
New-Container
-ContainerName <string[]>
-OrganizationalUnit <string>
[-AccidentalDeletion]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- ContainerName
- OrganizationalUnit

Example 1:

The following command creates the organizational unit _Recruiting_ at the root level in Directory,
using the credentials of current user logged-on to the identity store.

```
New-Container -OrganizationalUnit "DC=HR,DC=Imanami,DC=US" -ContainerName "Recruiting"
```

Example 2:

The following command creates the organizational unit _Local Recruiting_ inside the _Recruiting_
container in Directory using the credentials set in the $Credentials environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials.

```
New-Container - OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ContainerName "Local Recruiting" -Credential $Cred
```
