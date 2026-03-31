---
title: "CreateResourceIncrementalAccessControlRules"
description: "Generates the access control rule which gives to a profile the permission to query the resources modified incrementally"
sidebar_position: 1
---

Generates the access control rule which gives to a profile the permission to query the resources modified incrementally



## Examples


```xml
  <CreateResourceIncrementalAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Resource_Incremental" DisplayName_L1="Administrator Resource Incremental Query" EntityType="Resource" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Resources/Incremental/Query" />
</AccessControlRule>

```