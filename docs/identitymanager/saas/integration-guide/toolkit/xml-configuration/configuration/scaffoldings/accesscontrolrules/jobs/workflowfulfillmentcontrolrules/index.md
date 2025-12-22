---
title: "WorkflowFulfillmentControlRules"
description: "WorkflowFulfillmentControlRules"
sidebar_position: 150
---

# WorkflowFulfillmentControlRules

Generates the execution rights to launch Fulfillment workflow for a given profile.

## Examples

```

**<WorkflowFulfillmentControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_[ActivityTemplateTransition, /Workflows/ActivityTemplateTransition/Query]" DisplayName_L1="Administrator_ActivityTemplateTransition" DisplayName_L2="Administrator_ActivityTemplateTransition" EntityType="ActivityTemplateTransition" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/ActivityTemplateTransition/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_[Workflow, /Workflows/Workflow/Query]" DisplayName_L1="Administrator_Workflow" DisplayName_L2="Administrator_Workflow" EntityType="Workflow" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/Workflow/Query" /></AccessControlRule>

```
