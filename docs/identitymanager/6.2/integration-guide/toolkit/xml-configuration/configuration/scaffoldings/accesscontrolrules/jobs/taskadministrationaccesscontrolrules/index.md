---
title: "TaskAdministrationAccessControlRules"
description: "TaskAdministrationAccessControlRules"
sidebar_position: 130
---

# TaskAdministrationAccessControlRules

Generates all rights to have the access to job administration page.

## Examples

```

**<TaskAdministrationAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Job_Tasks_Job" DisplayName_L1="Administrator - Management for Job" DisplayName_L2="Administrator - Gestion des Job" EntityType="Job" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Job/Create" />  <Entry CanExecute="true" Permission="/Jobs/Job/Delete" />  <Entry CanExecute="true" Permission="/Jobs/Job/Query" />  <Entry CanExecute="true" Permission="/Jobs/Job/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_Tasks_JobInstance" DisplayName_L1="Administrator - Management for JobInstance" DisplayName_L2="Administrator - Gestion des JobInstance" EntityType="JobInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Create" />  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Delete" />  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Query" />  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_Tasks_Task" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Task/Create" />  <Entry CanExecute="true" Permission="/Jobs/Task/Delete" />  <Entry CanExecute="true" Permission="/Jobs/Task/Query" />  <Entry CanExecute="true" Permission="/Jobs/Task/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_Tasks_TaskEntityType" DisplayName_L1="Administrator - Management for TaskEntityType" DisplayName_L2="Administrator - Gestion des TaskEntityType" EntityType="TaskEntityType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskEntityType/Create" />  <Entry CanExecute="true" Permission="/Jobs/TaskEntityType/Delete" />  <Entry CanExecute="true" Permission="/Jobs/TaskEntityType/Query" />  <Entry CanExecute="true" Permission="/Jobs/TaskEntityType/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_Tasks_TaskInstance" DisplayName_L1="Administrator - Management for TaskInstance" DisplayName_L2="Administrator - Gestion des TaskInstance" EntityType="TaskInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskInstance/Create" />  <Entry CanExecute="true" Permission="/Jobs/TaskInstance/Delete" />  <Entry CanExecute="true" Permission="/Jobs/TaskInstance/Query" />  <Entry CanExecute="true" Permission="/Jobs/TaskInstance/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_Tasks_TaskResourceType" DisplayName_L1="Administrator - Management for TaskResourceType" DisplayName_L2="Administrator - Gestion des TaskResourceType" EntityType="TaskResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskResourceType/Create" />  <Entry CanExecute="true" Permission="/Jobs/TaskResourceType/Delete" />  <Entry CanExecute="true" Permission="/Jobs/TaskResourceType/Query" />  <Entry CanExecute="true" Permission="/Jobs/TaskResourceType/Update" /></AccessControlRule>

```
