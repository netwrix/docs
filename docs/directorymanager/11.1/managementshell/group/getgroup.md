---
title: "Get-Group"
description: "Retrieve managed and unmanaged groups from one or more containers in the identity store with the Get-Group cmdlet, filtered by LDAP or Smart Group criteria."
keywords:
  - Get-Group
  - retrieve groups
  - LDAP filter
  - SearchContainer
  - Directory Manager PowerShell
sidebar_position: 30
---

# Get-Group

The Get-Group commandlet retrieves both managed and unmanaged groups that are in one or more
containers in the identity store matching the given criteria.

## Syntax

```
Get-Group
[[-Identity] <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-ObjectType <string[]>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The following command retrieves all groups in the base container specified by the SearchContainer
parameter including its sub-containers, using the credentials of the signed-in user.

```
Get-Group -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command retrieves all groups with a display name beginning with S in the base
containers specified by the SearchContainer parameter including sub-containers of the first base
container and excluding sub-containers of the second one using the credentials set in the
$Credentials environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Get-Group -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "2","1" -LdapFilter "(DisplayName = S*)" -Credential $Cred
```

Example 3:

The following command retrieves all Smart Groups from the connected identity store with Security
Type Private and John Smith as their additional owner. The OUT-NULL commandlet prevents the retrieved groups' information from appearing on the console.

```
Get-Group -SmartFilter "(SecurityType = Private)" | Set-Group -AdditionalOwners "CN=JohnSmith,DC=HR,DC=Imanami,DC=US" | OUT-NULL
```
