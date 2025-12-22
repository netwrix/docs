---
title: "UpdateClassificationTask"
description: "UpdateClassificationTask"
sidebar_position: 240
---

# UpdateClassificationTask

Classifies a list of resources that are part of the resourceType data targets as an argument to this
job.

You must set up the ResourceClassificationRule on resourceTypes to be able to use this job.

## Examples

```

**<UpdateClassificationTask Identifier="UpdateClassification" DisplayName_L1="Update Classification">    <TaskEntityType EntityType="Referentiel_User"/>  </UpdateClassificationTask>**

```

## Properties

| Property                   | Details                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required    | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchSize default value: 0 | **Type** Int32 **Description** Block size for batch calculation.                   |
| Dirty default value: false | **Type** Boolean **Description** Initiate use only dirty resources.                |
| Identifier optional        | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |
