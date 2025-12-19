---
title: "Invoke-Replication"
description: "Invoke-Replication"
sidebar_position: 70
---

# Invoke-Replication

The Invoke-Replication commandlet starts replication process for all the identity stores or a
specific identity store.

## Syntax

```
Invoke-Replication
[-IdentityStoreId <int>]
[-DeletedObjects]
[-RestoreReplication]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The following command replicate identity store with ID 1.

```
Invoke-Replication -IdentitystoreId 1
```

Example 2:

The following command replicate deleted objects for identity store with ID 1.

```
Invoke-Replication -IdentitystoreId 1 -DeletedObjects
```

Example 3:

The following command will start restoration of replication for identity store with ID 1.

```
Invoke-Replication -IdentitystoreId 1 -RestoreReplication
```
