---
title: "InvokeExpressionTask"
description: "Launches on agent side a powershell script given as input."
sidebar_position: 9
---

Launches on agent side a powershell script given as input.


## Examples
```xml
  <InvokeExpressionTask Identifier="MyScript" DisplayName_L1="My Script" Agent="Local" InputPath="C:/Scripts/myScript.ps1" OpenIdClient="Job"/>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| Agent optional | **Type:** String **Description:** Identifier of the agent on which the job will be launched.**Note:** when not specified, the task is to be launched on the server.**Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| ContinueOnError <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` if the execution of the Task returning an error should not stop the job machine state. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |
| InputPath optional | **Type:** String **Description:** Defines the input path.Alternative definition: If *TaskType* is:- ProvisionerWorkflowTask: Path of the JSON file,- ConfigurationTask: Directory of the configuration to import,- ApiCallTask: Path of the JSON file,- SqlCmdTask: Path of the SQL file, |
| OpenIdClient optional | **Type:** String **Description:** Connection client for the task. |

