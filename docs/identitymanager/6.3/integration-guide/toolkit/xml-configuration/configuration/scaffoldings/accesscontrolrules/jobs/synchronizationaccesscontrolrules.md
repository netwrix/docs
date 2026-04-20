---
title: "SynchronizationAccessControlRules"
description: "Generates rights to launch synchronization task."
sidebar_position: 12
---

Generates the execution rights for Prepare-Synchronization and synchronization tasks for a given profile.


## Examples


```xml
  <SynchronizationAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Connector_ConnectorMapping_Query" DisplayName_L1="Administrator - SynchronizeSessionConnector" DisplayName_L2="Administrator - SynchronisationConnector" EntityType="Connector" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Connector_Connectors_SynchronizeSession" DisplayName_L1="Administrator - SynchronizeSessionConnector" DisplayName_L2="Administrator - SynchronisationConnector" EntityType="Connector" Profile="Administrator">
  <Entry Permission="/Connectors/SynchronizeSession" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Resource_Connectors_SynchronizeSession" DisplayName_L1="Administrator - SynchronizeSessionResource" DisplayName_L2="Administrator - SynchronisationResource" EntityType="Resource" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Connectors/SynchronizeSession" />
</AccessControlRule>

```