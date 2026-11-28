---
title: "Expire-Group"
description: "Temporarily expire a group in the identity store with the Expire-Group cmdlet, which stops all notifications to the expired group."
keywords:
  - Expire-Group
  - expire group
  - group expiry
  - Directory Manager PowerShell
sidebar_position: 20
---

# Expire-Group

The Expire-Group cmdlet expires a group temporarily. The cmdlet stops all notifications to the
expired group.

:::note
The group must have an expiration policy other than Never Expire, and must be in a container that
group lifecycle covers. See the
[Manage Group Lifecycle Settings in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/grouplifecycle.md)
topic.
:::

To view events related to this cmdlet, go to the History node in the left pane of the Directory
Manager portal.

## Syntax

```
Expire-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- Identity

### Example

The following command expires the specified group from the connected identity store.

```
Expire-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```
