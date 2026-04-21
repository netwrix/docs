---
title: "ResourcePickerControlRules"
description: "Creates the reading right of the resource picker."
sidebar_position: 3
---

Creates the reading right of the resource picker.



## Examples


```xml
  <ResourcePickerControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="AdministratorAdministrator_Resource_Custom_Workflows" DisplayName_L1="Administrator - Resources Picker - " DisplayName_L2="Administrator - Picker de ressources" EntityType="Resource" Profile="Administrator">
  <Entry Permission="/Custom/Workflows" />
</AccessControlRule>

```