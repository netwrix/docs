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

The Restore-TombStoneObject commandlet restores tombstone objects from Directory. The commandlet
restores a tombstone object as an unmanaged group, with all supported attributes, to its original container. If the
parent container has been deleted, the commandlet also reinstates the container for the group.

## Syntax

```
Restore-TombstoneObject
[-Identity] <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example:

The following command restores the tombstone group Event Management, using the credentials set in
the $Cred environment variable. See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Restore-TombStoneObject -identity "Event Management" -Credential $Cred
```
