---
title: "Workflow Configuration Control Rules"
description: "Workflow Configuration Control Rules"
sidebar_position: 40
---

# Workflow Configuration Control Rules

## Examples

```

**<WorkflowConfigurationControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Workflow_CreateUpdateDelete" DisplayName_L1="Administrator_Workflow" DisplayName_L2="Administrator_Workflow" EntityType="Workflow" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/Workflow/Create" />  <Entry CanExecute="true" Permission="/Workflows/Workflow/Delete" />  <Entry CanExecute="true" Permission="/Workflows/Workflow/Update" /></AccessControlRule>

```
