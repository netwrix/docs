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
[-SearchContainersScopeList <string[]>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-ExportMultiValued]
[-ExportSeperator <string>]
[-Resolved]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

The SearchContainersScopeList parameter accepts `1` to search only the container, or `2` to also
search its sub-containers. Specify one value to apply to all containers, or one value for each
container. The default is `2`.

Use the Resolved switch to show names instead of GUIDs in the results.

## Required parameter

- None

### Example 1

The following command retrieves all groups in the base container that the SearchContainer parameter
specifies, including its sub-containers. It uses the credentials of the signed-in user.

```
Get-Group -SearchContainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

### Example 2

The following command retrieves all groups with a display name that begins with S. It searches the
base containers that the SearchContainer parameter specifies. It includes the sub-containers of the
first base container and excludes the sub-containers of the second. It uses the credentials set in
the $Credentials environment variable. For how to set credentials in an environment variable, see
the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md)
topic. To run the command as another user, use the Credential parameter together with the
IdentityStoreId parameter.

```
Get-Group -SearchContainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "2","1" -LdapFilter "(DisplayName=S*)" -IdentityStoreId 2 -Credential $Credentials
```

### Example 3

The following command assigns John Smith as an additional owner to every group whose security type is
Private. The OUT-NULL cmdlet prevents the output from appearing on the console.

```
Get-Group -SmartFilter "(GroupSecurity=Private)" | ForEach-Object { Set-Group -Identity $_.DistinguishedName -AdditionalOwners "CN=JohnSmith,DC=HR,DC=Imanami,DC=US" } | OUT-NULL
```
