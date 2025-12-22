---
title: "RunJobRepairAdministrationAccessControlRules"
description: "RunJobRepairAdministrationAccessControlRules"
sidebar_position: 100
---

# RunJobRepairAdministrationAccessControlRules

Generates the rights to read task and job instances logs in UI for a given profile.

## Examples

```

**<RunJobRepairAdministrationAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Job_RunJobRepair" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/RunJob/Repair" /></AccessControlRule>

```
