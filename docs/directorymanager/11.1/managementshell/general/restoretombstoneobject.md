---
title: "Restore-TombStoneObject"
description: "Restore-TombStoneObject"
sidebar_position: 100
---

# Restore-TombStoneObject

The Restore-TombStoneObject commandlet restores tombstone objects from Directory. A tombstone object
is restored as an unmanaged group with all supported attributes to its original container. If the
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
the $Creds environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/managementshell/setthecredential.md) topic for setting
credentials in an environment variable.

```
Restore-TombStoneObject -identity "Event Management" -Credential $Cred
```
