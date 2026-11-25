---
title: "Restore-TombStoneObject"
description: "Restore a deleted group from its tombstone to its original container as an unmanaged group, using the Restore-TombStoneObject cmdlet in Directory Manager."
keywords:
  - Restore-TombStoneObject
  - tombstone object
  - restore deleted group
  - unmanaged group
  - Directory Manager PowerShell
sidebar_position: 100
---

# Restore-TombStoneObject

The `Restore-TombStoneObject` cmdlet restores tombstone objects from Directory. It restores a tombstone object as an unmanaged group, with all supported attributes, to its original container. If the parent container has been deleted, the cmdlet also reinstates the container for the group.

## Syntax

```
Restore-TombstoneObject
[-Identity] <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- None

## Example

The following command restores the tombstone group Event Management, using the credentials set in the $Cred environment variable. To set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic.

```
Restore-TombStoneObject -identity "Event Management" -Credential $Cred
```
