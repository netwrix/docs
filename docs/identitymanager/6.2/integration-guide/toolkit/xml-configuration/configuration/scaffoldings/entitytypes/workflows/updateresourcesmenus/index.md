---
title: "Update Resources Menus"
description: "Update Resources Menus"
sidebar_position: 30
---

# Update Resources Menus

## Examples

```

**<UpdateResourcesMenus EntityType="HR_Person"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<MenuItem Identifier="View_HR_Person" DisplayName_L1="HR - User" DisplayName_L2="RH - Collaborateur">  <MenuItem Identifier="View_HR_Person_UpdateResources" DisplayName_L1="Modify Permissions" DisplayName_L2="Demander des droits" IconCode="Edit" Workflow="HR_Person_UpdateResources" /></MenuItem>

```
