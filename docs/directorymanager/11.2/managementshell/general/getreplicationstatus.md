---
title: "Get-ReplicationStatus cmdlet"
description: "Use the Get-ReplicationStatus cmdlet to check when each object in an identity store last replicated to Elasticsearch."
keywords:
  - Get-ReplicationStatus
  - replication status
  - Management Shell
  - Elasticsearch replication
  - identity store
sidebar_position: 50
---

# Get-ReplicationStatus cmdlet

The `Get-ReplicationStatus` cmdlet retrieves the replication status of identity stores. It provides the replication status of each object in the provider, such as users, groups, contacts, computers, public folders, and OUs.

## Syntax

```
Get-ReplicationStatus
[[-IdentityStoreName] <string>]
[<CommonParameters>]
```

## Required parameters

- None

If you omit IdentityStoreName, the cmdlet returns the replication status of all identity stores.

## Examples

### Example 1

The following command provides the date and time when the objects of an identity store are replicated to Elasticsearch and the time elapsed since the last replication.

```
Get-ReplicationStatus -IdentityStoreName AdStore8
```
