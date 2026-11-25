---
title: "Get-ReplicationStatus Cmdlet"
description: "Use the Get-ReplicationStatus cmdlet to check when each object in an identity store last replicated to Elasticsearch."
keywords:
  - Get-ReplicationStatus
  - replication status
  - Management Shell
  - Elasticsearch replication
  - identity store
sidebar_position: 50
---

# Get-ReplicationStatus Cmdlet

The Get-ReplicationStatus cmdlet retrieves the replication status of the connected identity store.
The cmdlet provides the replication status of each object (such as users, groups, contacts,
computers, public folders, and OUs) in the provider.

## Syntax

```
Get-ReplicationStatus
[-IdentityStoreName] <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

The following command provides the date and time when the objects of an identity store are
replicated to Elasticsearch and the time elapsed since the last replication.

```
Get-ReplicationStatus -IdentityStoreName AdStore8
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager General Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
