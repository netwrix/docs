---
title: "MonitoringAdministrationAccessControlRules"
description: "Generates the access control rule which gives to a profile the permission to query the monitoring screen."
sidebar_position: 1
---

Generates the access control rule which gives to a profile the permission to query the monitoring screen.



## Examples


```xml
  <MonitoringAdministrationAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Monitoring" DisplayName_L1="Administrator_Monitoring" EntityType="Setting" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Monitoring" />
</AccessControlRule>

```