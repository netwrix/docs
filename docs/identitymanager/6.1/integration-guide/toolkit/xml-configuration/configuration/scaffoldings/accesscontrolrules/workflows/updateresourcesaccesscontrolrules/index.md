---
title: "UpdateResourcesAccessControlRules"
description: "UpdateResourcesAccessControlRules"
sidebar_position: 20
---

# UpdateResourcesAccessControlRules

## Examples

```

**<UpdateResourcesAccessControlRules EntityType="HR_Person" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_HR_Person_Custom_Workflows_HR_Person" DisplayName_L1="Administrator_HR_Person_Custom_Workflows_HR_Person" EntityType="Workflow_HR_Person" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Workflows/HR_Person_UpdateResources/Request/ActionPending" /></AccessControlRule>

```
