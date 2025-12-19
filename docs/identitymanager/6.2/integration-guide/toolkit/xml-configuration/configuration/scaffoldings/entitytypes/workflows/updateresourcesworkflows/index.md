---
title: "Update Resources Workflows"
description: "Update Resources Workflows"
sidebar_position: 40
---

# Update Resources Workflows

## Examples

```

**<UpdateResourcesWorkflows EntityType="HR_Person"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<Workflow Identifier="HR_Person_UpdateResources" DisplayName_L1="HR - User - Modify Permissions" DisplayName_L2="RH - Collaborateur - Demander des droits" VariablesType="Workflow_HR_Person">  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Ecriture" Template="Persist" /></Workflow>

```
