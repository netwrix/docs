---
title: "PolicySimulationControlRules"
description: " "
sidebar_position: 1
---

 



## Examples


```xml
  <PolicySimulationControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="PolicySimulation_Administrator_Category" DisplayName_L1="Administrator_Category" DisplayName_L2="Administrator_Category" EntityType="Category" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_CompositeRole" DisplayName_L1="Administrator_CompositeRole" DisplayName_L2="Administrator_CompositeRole" EntityType="CompositeRole" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_CompositeRoleRule" DisplayName_L1="Administrator_CompositeRoleRule" DisplayName_L2="Administrator_CompositeRoleRule" EntityType="CompositeRoleRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_Policy" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrator_Policy" EntityType="Policy" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_PolicySimulation" DisplayName_L1="Administrator_PolicySimulation" DisplayName_L2="Administrator_PolicySimulation" EntityType="PolicySimulation" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_ResourceClassificationRule" DisplayName_L1="Administrator_ResourceClassificationRule" DisplayName_L2="Administrator_ResourceClassificationRule" EntityType="ResourceClassificationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_ResourceNavigationRule" DisplayName_L1="Administrator_ResourceNavigationRule" DisplayName_L2="Administrator_ResourceNavigationRule" EntityType="ResourceNavigationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_ResourceScalarRule" DisplayName_L1="Administrator_ResourceScalarRule" DisplayName_L2="Administrator_ResourceScalarRule" EntityType="ResourceScalarRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_ResourceTypeRule" DisplayName_L1="Administrator_ResourceTypeRule" DisplayName_L2="Administrator_ResourceTypeRule" EntityType="ResourceTypeRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_SingleRole" DisplayName_L1="Administrator_SingleRole" DisplayName_L2="Administrator_SingleRole" EntityType="SingleRole" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>
<AccessControlRule Identifier="PolicySimulation_Administrator_SingleRoleRule" DisplayName_L1="Administrator_SingleRoleRule" DisplayName_L2="Administrator_SingleRoleRule" EntityType="SingleRoleRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" />
</AccessControlRule>

```