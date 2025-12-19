---
title: "Set Recently Modified Flag Task"
description: "Set Recently Modified Flag Task"
sidebar_position: 210
---

# Set Recently Modified Flag Task

When synchronizing in full or incremental mode, it is possible to optimize the compute performance
of the role model by taking into account only the changes made by the synchronization. This
optimization is based on the `dirty` property of the entity
[Resource](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/resources/resource/index.md). The task
[Compute Role Model Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md) with option `dirty` set to `true` will
treat only resources marked as dirty.

This task is used to set the `dirty` flag on all resources based on
[Resources](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/resources/index.md)Change, Resource Link Change and Resource File Change
entities. After this, it clears this changes tables.

This task works correctly only if **previous synchronization tasks have not cleared the change
tables** (option `DoNotDeleteChanges` set to `true`).

## Examples

```

**<SetRecentlyModifiedFlagTask Identifier="Update_Dirty" DisplayName_L1="Update Dirty"/>**

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |
