---
title: "ComputeCorrelationKeysTask"
description: "The Compute Role Model correlation keys will pre-calculate all the keys needed by the Compute Role Model to match the resources."
sidebar_position: 2
---

The Compute Role Model correlation keys will pre-calculate all the keys needed by the Compute Role Model to match the resources.
If the resource or property does not exist or needs to change, the task insert a new line in this table:

- Resource correlation keys

## Examples
```xml
<ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" AllEntityType="true" />
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| AllEntityType <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Launch to all entityTypes for the expression task.*Alternative definition*: If *TaskType* is:- TreeDimensionsRefreshTask: Refresh all dimensions. |
| BatchSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Block size for batch calculation. |
| Dirty <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Initiate use only dirty resources. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |


## Child Element: TaskEntityType
A task entity type defines the entity type on which the task is applied.


|Property|Details|
|---|---|
|EntityType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the entity type that the task is to be applied on.</p>|
