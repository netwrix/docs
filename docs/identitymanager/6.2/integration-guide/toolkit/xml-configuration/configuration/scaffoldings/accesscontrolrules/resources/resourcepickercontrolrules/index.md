---
title: "Resource Picker Control Rules"
description: "Resource Picker Control Rules"
sidebar_position: 30
---

# Resource Picker Control Rules

Creates the reading right of the resource picker.

## Examples

```

**<ResourcePickerControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="AdministratorAdministrator_Resource_Custom_Workflows" DisplayName_L1="Administrator - Resources Picker - " DisplayName_L2="Administrator - Picker de ressources" EntityType="Resource" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule>

```
