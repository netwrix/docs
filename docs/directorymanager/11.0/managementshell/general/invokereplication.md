---
title: "Invoke-Replication Cmdlet"
description: "Use the Invoke-Replication cmdlet to start replication for all identity stores or one identity store, including deleted objects or a restore."
keywords:
  - Invoke-Replication
  - start replication
  - restore replication
  - Management Shell
  - identity store
sidebar_position: 70
---

# Invoke-Replication Cmdlet

The Invoke-Replication cmdlet starts the replication process for all the identity stores or a
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

The following command replicates the identity store with ID 1.

```
Invoke-Replication -IdentitystoreId 1
```

Example 2:

The following command replicates deleted objects for the identity store with ID 1.

```
Invoke-Replication -IdentitystoreId 1 -DeletedObjects
```

Example 3:

The following command starts restoration of replication for the identity store with ID 1.

```
Invoke-Replication -IdentitystoreId 1 -RestoreReplication
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID General Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
