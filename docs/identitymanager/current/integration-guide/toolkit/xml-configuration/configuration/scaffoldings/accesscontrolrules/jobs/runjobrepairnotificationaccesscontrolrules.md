---
title: "RunJobRepairNotificationAccessControlRules"
description: "Generates access control to send notification when a relaunch job finish with an error state."
sidebar_position: 11
---

Generates access control to send notification when a relaunch job finish with an error state.



## Examples


```xml
  <RunJobRepairNotificationAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Job_RunJobRepair_Notification_Errored" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Jobs/RunJob/Repair/Errored" />
</AccessControlRule>

```