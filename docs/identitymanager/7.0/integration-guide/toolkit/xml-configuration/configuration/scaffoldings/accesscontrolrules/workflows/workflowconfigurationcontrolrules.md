---
title: "WorkflowConfigurationControlRules"
description: " "
sidebar_position: 5
---

 



## Examples


```xml
  <WorkflowConfigurationControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Workflow_CreateUpdateDelete" DisplayName_L1="Administrator_Workflow" DisplayName_L2="Administrator_Workflow" EntityType="Workflow" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Workflows/Workflow/Create" />
  <Entry CanExecute="true" Permission="/Workflows/Workflow/Delete" />
  <Entry CanExecute="true" Permission="/Workflows/Workflow/Update" />
</AccessControlRule>

```