---
title: "UpdateClassificationTask"
description: "Classifies a list of resources that are part of the resourceType data targets as an argument to this job."
sidebar_position: 24
---

Classifies a list of resources that are part of the resourceType data targets as an argument to this job.

:::warning
You must set up the ResourceClassificationRule on resourceTypes to be able to use this job.
:::


## Examples
```xml
  <UpdateClassificationTask Identifier="UpdateClassification" DisplayName_L1="Update Classification">
    <TaskEntityType EntityType="Referentiel_User"/>
  </UpdateClassificationTask>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| BatchSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Block size for batch calculation. |
| Dirty <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Initiate use only dirty resources. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |


## Child Element: TaskEntityType
A task entity type defines the entity type on which the task is applied.


|Property|Details|
|---|---|
|EntityType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the entity type that the task is to be applied on.</p>|
