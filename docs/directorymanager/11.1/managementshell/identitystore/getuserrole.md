---
title: "Get-UserRole"
description: "Get-UserRole"
sidebar_position: 120
---

# Get-UserRole

The commandlet Get-UserRole displays information about the role of the specified user in an identity
store.

If a user has different roles in different Directory Manager clients of an identity store; and
ClientName parameter is not specified, this commandlet displays the highest priority role of the
user. If the identity store name is not specified, the connected identity store is used by this
cmdlet.

## Syntax

```
Get-UserRole
[-Identity] <string>
[-IdentityStoreName <string>]
[-ClientName <string>]
[-All]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

This example provides role information of the user _testingaccount_ in the Admin Center client of
the AdStore1 identity store.

```
Get-UserRole -Identity testingaccount -IdentityStoreName AdStore1 -ClientName 'Admin Center'
```

Example 2:

This example displays the highest priority role information of the _testingaccount@pucit.local_ user
for all clients of AdStore1 identity store.

```
Get-UserRole -Identity testingaccount@pucit.local -IdentityStoreName AdStore1
```

Example 3:

This example displays role information of the `_testingaccount@pucit.local_` user in the
_ManagementShell `<machine name>`_ client of the connected identity store.

```
Get-UserRole -Identity testingaccount@pucit.local -ClientName 'ManagementShell <machine name>'
```

Example 4:

This example retrieves the highest priority role of _testingaccount_ user in the connected identity
store. If the user has different roles in different Directory Manager clients, only the role having
the highest priority is retrieved.

```
Get-UserRole -Identity testingaccount
```

Example 5:

This example retrieves information of all roles of _testingaccount_ user in all client of the
connected identity store.

```
Get-UserRole -Identity testingaccount -All
```

Example 6:

This example retrieves all roles of _euser1_ and _euser2_ users in the connected identity store
through pipelining.

```
'euser1', 'euser2', 'testingaccount' | Get-UserRole -All
```
