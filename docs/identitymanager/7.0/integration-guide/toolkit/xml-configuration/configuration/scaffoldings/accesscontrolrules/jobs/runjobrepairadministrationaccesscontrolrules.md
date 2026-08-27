---
title: "RunJobRepairAdministrationAccessControlRules"
description: "Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning or a synchronization for a given profile."
sidebar_position: 10
---

Generates the rights to read task and job instances logs in UI for a given profile.


## Examples


```xml
  <RunJobRepairAdministrationAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Job_RunJobRepair" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Jobs/RunJob/Repair" />
</AccessControlRule>

```