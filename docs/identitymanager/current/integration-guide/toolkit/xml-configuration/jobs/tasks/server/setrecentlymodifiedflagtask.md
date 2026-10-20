---
title: "SetRecentlyModifiedFlagTask"
description: "When synchronizing in full or incremental mode, it is possible to optimize the compute performance of the role model by taking into account only the changes made by the synchronization."
sidebar_position: 21
---

When synchronizing in full or incremental mode, it is possible to optimize the compute performance of the role model by taking into account only the changes made by the synchronization. This optimization is based on the `dirty` property of the entity [Resource](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/resources/resource). The task [Usercube-Compute-RoleModel](./computerolemodeltask) with option `dirty` set to `true` will treat only resources marked as dirty.

This task is used to set the `dirty` flag on all resources based on [ResourceChange, ResourceLinkChange and ResourceFileChange entities](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/resources). After this, it clears this changes tables.

:::warning
This task works correctly only if **previous synchronization tasks have not cleared the change tables** (option `DoNotDeleteChanges` set to `true`).
:::


## Examples
```xml
  <SetRecentlyModifiedFlagTask Identifier="Update_Dirty" DisplayName_L1="Update Dirty"/>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |

