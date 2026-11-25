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

The Get-Group cmdlet retrieves managed and unmanaged groups that match the given criteria. The
groups are in one or more containers in the identity store.

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

## Required parameter

- None

### Example 1

The following command retrieves all groups in the base container that the SearchContainer parameter
specifies, including its sub-containers. It uses the credentials of the signed-in user.

```
Get-Group -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US"
```

### Example 2

The following command retrieves all groups with a display name that begins with S. It searches the
base containers that the SearchContainer parameter specifies. It includes the sub-containers of the
first base container and excludes the sub-containers of the second. It uses the credentials set in
the $Credentials environment variable. For how to set credentials in an environment variable, see
the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic.

```
Get-Group -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "2","1" -LdapFilter "(DisplayName = S*)" -Credential $Cred
```

### Example 3

The following command retrieves all Smart Groups from the connected identity store that have
Security Type Private and John Smith as their additional owner. The OUT-NULL cmdlet prevents the
information about the retrieved groups from appearing on the console.

```
Get-Group -SmartFilter "(SecurityType = Private)" | Set-Group -AdditionalOwners "CN=JohnSmith,DC=HR,DC=Imanami,DC=US" | OUT-NULL
```
