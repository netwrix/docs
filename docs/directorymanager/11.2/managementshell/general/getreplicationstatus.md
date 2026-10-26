---
title: "Get-ReplicationStatus"
description: "Get-ReplicationStatus"
sidebar_position: 50
---

# Get-ReplicationStatus

The Get-ReplicationStatus commandlet retrieves the replication status of the connected identity
store. The commandlet provides replication status of each object (such as users, groups, contact,
computer, public folders and OUs) in the provider.

## Syntax

```
Get-ReplicationStatus
[-IdentityStoreName] <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

The following commandlet provides date and time information when the objects of an identity store
are replicated to Elasticsearch and the time elapsed since last replication.

```
Get-ReplicationStatus -IdentityStoreName AdStore8
```
