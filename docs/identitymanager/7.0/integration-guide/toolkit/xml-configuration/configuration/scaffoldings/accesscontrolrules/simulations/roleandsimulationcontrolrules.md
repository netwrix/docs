---
title: "RoleAndSimulationControlRules"
description: " "
sidebar_position: 2
---

 



## Examples


```xml
  <RoleAndSimulationControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_CompositeRoleRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_CompositeRoleRule" DisplayName_L2="Administrator_CompositeRoleRule" EntityType="CompositeRoleRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_CompositeRole_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_CompositeRole" DisplayName_L2="Administrator_CompositeRole" EntityType="CompositeRole" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ContextRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ContextRule" DisplayName_L2="Administrator_ContextRule" EntityType="ContextRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Policy_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrator_Policy" EntityType="Policy" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceBinaryRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceBinaryRule" DisplayName_L2="Administrator_ResourceBinaryRule" EntityType="ResourceBinaryRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceClassificationRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceClassificationRule" DisplayName_L2="Administrator_ResourceClassificationRule" EntityType="ResourceClassificationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceCorrelationRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceCorrelationRule" DisplayName_L2="Administrator_ResourceCorrelationRule" EntityType="ResourceCorrelationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceNavigationRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceNavigationRule" DisplayName_L2="Administrator_ResourceNavigationRule" EntityType="ResourceNavigationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceQueryRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceQueryRule" DisplayName_L2="Administrator_ResourceQueryRule" EntityType="ResourceQueryRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceScalarRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceScalarRule" DisplayName_L2="Administrator_ResourceScalarRule" EntityType="ResourceScalarRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceTypeRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceTypeRule" DisplayName_L2="Administrator_ResourceTypeRule" EntityType="ResourceTypeRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceType_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceType" DisplayName_L2="Administrator_ResourceType" EntityType="ResourceType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_SingleRoleRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_SingleRoleRule" DisplayName_L2="Administrator_SingleRoleRule" EntityType="SingleRoleRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/UpdateSimulation" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_SingleRole_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_SingleRole" DisplayName_L2="Administrator_SingleRole" EntityType="SingleRole" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/CreateSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/DeleteSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/RevertSimulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Simulation" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/UpdateSimulation" />
</AccessControlRule>

```