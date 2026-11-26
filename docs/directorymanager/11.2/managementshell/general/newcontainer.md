---
title: "New-Container Cmdlet"
description: "Use the New-Container cmdlet to create an organizational unit, or nested organizational units, in the directory."
keywords:
  - New-Container
  - create organizational unit
  - nested OUs
  - Management Shell
sidebar_position: 80
---

# New-Container Cmdlet

The `New-Container` cmdlet creates a new organizational unit in the directory. You can also use it to create nested organizational units by running the cmdlet repeatedly and changing the value of the OrganizationalUnit parameter.

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

## Required parameters

- ContainerName
- OrganizationalUnit

## Examples

### Example 1

The following command creates the organizational unit _Recruiting_ at the root level in the directory, using the credentials of the current user signed in to the identity store.

```
New-Container -OrganizationalUnit "DC=HR,DC=Imanami,DC=US" -ContainerName "Recruiting"
```

### Example 2

The following command creates the organizational unit _Local Recruiting_ inside the _Recruiting_ container in the directory, using the credentials set in the $Credentials environment variable. To run the command as another user, use the Credential parameter together with the IdentityStoreId parameter. To set credentials, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic.

```
New-Container -OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ContainerName "Local Recruiting" -IdentityStoreId 2 -Credential $Credentials
```
