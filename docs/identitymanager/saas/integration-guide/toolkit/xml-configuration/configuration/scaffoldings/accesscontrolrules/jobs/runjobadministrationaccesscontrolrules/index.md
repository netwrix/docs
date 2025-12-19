---
title: "RunJobAdministrationAccessControlRules"
description: "RunJobAdministrationAccessControlRules"
sidebar_position: 80
---

# RunJobAdministrationAccessControlRules

Generates the rights to launch from UI jobs that are in state blocked after a Provisioning or a
synchronization for a given profile.

## Examples

```

**<RunJobAdministrationAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_JobInstance_RunJobLaunch" DisplayName_L1="Administrator - Management for JobInstance" DisplayName_L2="Administrator - Gestion des JobInstance" EntityType="JobInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Create" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_RunJobLaunch" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/RunJob/Launch" /></AccessControlRule>

```
