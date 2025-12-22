---
title: "Update Entity Property Expressions Task"
description: "Update Entity Property Expressions Task"
sidebar_position: 250
---

# Update Entity Property Expressions Task

Calculates either for all entities or for a list of entities the expressions and inserts the values
in the database.

## Examples

```

**<UpdateEntityPropertyExpressionsTask Identifier="ComputeAllProperties" DisplayName_L1="Compute All Properties " AllEntityType="true"/>**

```

## Properties

| Property                           | Details                                                                                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required            | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                   |
| AllEntityType default value: false | **Type** Boolean **Description** Launch to all entityTypes for the expression task. _Alternative definition_: If _TaskType_ is: - TreeDimensionsRefreshTask: Refresh all dimensions. |
| BatchSelectSize default value: 0   | **Type** Int32 **Description** Defines the batch select size.                                                                                                                        |
| BatchUpdateSize default value: 0   | **Type** Int32 **Description** Defines the batch update size.                                                                                                                        |
| Dirty default value: false         | **Type** Boolean **Description** Initiate use only dirty resources.                                                                                                                  |
| Identifier optional                | **Type** String **Description** Unique identifier of the task.                                                                                                                       |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |
