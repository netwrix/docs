---
title: "UpdateEntityPropertyExpressionsTask"
description: "Calculates either for all entities or for a list of entities the expressions and inserts the values in the database."
sidebar_position: 25
---

Calculates either for all entities or for a list of entities the expressions and inserts the values in the database.


## Examples
```xml
<UpdateEntityPropertyExpressionsTask Identifier="ComputeAllProperties" DisplayName_L1="Compute All Properties " AllEntityType="true"/>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| AllEntityType <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Launch to all entityTypes for the expression task.*Alternative definition*: If *TaskType* is:- TreeDimensionsRefreshTask: Refresh all dimensions. |
| BatchSelectSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the batch select size. |
| BatchUpdateSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the batch update size. |
| Dirty <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Initiate use only dirty resources. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |


## Child Element: TaskEntityType
A task entity type defines the entity type on which the task is applied.


|Property|Details|
|---|---|
|EntityType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the entity type that the task is to be applied on.</p>|
