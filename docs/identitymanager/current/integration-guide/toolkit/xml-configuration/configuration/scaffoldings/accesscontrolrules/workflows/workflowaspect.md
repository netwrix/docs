---
title: "WorkflowAspect"
description: " "
sidebar_position: 4
---

 



## Examples


```xml
  <WorkflowAspect Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_ActivityInstanceAspectsQuery" DisplayName_L1="Administrator_ActivityInstance" DisplayName_L2="Administrator_ActivityInstance" EntityType="ActivityInstance" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Workflows/ActivityInstanceAspectsQuery/Query" />
</AccessControlRule>

```