---
title: "SetInternalUserProfilesTask"
description: "Will execute the profile rules of the different resource types given in parameters to create, modify or delete profiles in automatic mode."
sidebar_position: 20
---

Will execute the profile rules of the different resource types given in parameters to create, modify or delete profiles in automatic mode.

:::warning
It is necessary to set up [ProfileRuleContext](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/access-control/profilecontext) as well as [profileRules](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/access-control/profilerulecontext) to be able to use this job.
:::


## Examples
```xml
  <SetInternalUserProfilesTask Identifier="SetInternalUserProfiles" DisplayName_L1="Set Internal User Profiles" >
    <TaskEntityType EntityType="Referentiel_User"/>
    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>
  </SetInternalUserProfilesTask>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| BatchInsertSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the batch insert size. |
| BatchSelectSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the batch select size. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |


## Child Element: TaskEntityType
A task entity type defines the entity type on which the task is applied.


|Property|Details|
|---|---|
|EntityType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the entity type that the task is to be applied on.</p>|

## Child Element: TaskResourceType
The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.


|Property|Details|
|---|---|
|ResourceType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Linked resourceType id.</p>|
