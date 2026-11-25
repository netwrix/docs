---
title: "Get-UserRole Cmdlet in Directory Manager"
description: "View the role of a user in an identity store, including the highest-priority role or all roles across clients, with the Get-UserRole cmdlet."
keywords:
  - Get-UserRole
  - user role
  - identity store
  - Directory Manager client
  - PowerShell cmdlet
sidebar_position: 120
---

# Get-UserRole Cmdlet in Directory Manager

Use the Get-UserRole cmdlet to display the role of a user in an identity store.

A user can have different roles in different Directory Manager clients of an identity store. If you don't specify the ClientName parameter, this cmdlet displays the highest-priority role of the user. If you don't specify the identity store name, it uses the connected identity store.

## Syntax

```
Get-UserRole
[-Identity] <string>
[-IdentityStoreName <string>]
[-ClientName <string>]
[-All]
[<CommonParameters>]
```

## Required parameter

- Identity

## Examples

### Example 1

This command provides role information about the _testingaccount_ user in the Admin Center client of
the AdStore1 identity store.

```
Get-UserRole -Identity testingaccount -IdentityStoreName AdStore1 -ClientName 'Admin Center'
```

### Example 2

This command displays the highest-priority role information about the _testingaccount@pucit.local_ user
for all clients of the AdStore1 identity store.

```
Get-UserRole -Identity testingaccount@pucit.local -IdentityStoreName AdStore1
```

### Example 3

This command displays role information about the `_testingaccount@pucit.local_` user in the
_ManagementShell `<machine name>`_ client of the connected identity store.

```
Get-UserRole -Identity testingaccount@pucit.local -ClientName 'ManagementShell <machine name>'
```

### Example 4

This command retrieves the highest-priority role of the _testingaccount_ user in the connected identity store. If the user has different roles in different Directory Manager clients, it retrieves only the role with the highest priority.

```
Get-UserRole -Identity testingaccount
```

### Example 5

This command retrieves information about all roles of the _testingaccount_ user in all clients of the
connected identity store.

```
Get-UserRole -Identity testingaccount -All
```

### Example 6

This command retrieves all roles of the _euser1_, _euser2_, and _testingaccount_ users in the connected
identity store through pipelining.

```
'euser1', 'euser2', 'testingaccount' | Get-UserRole -All
```
