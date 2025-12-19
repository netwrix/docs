---
title: "Role Naming Access Control Rules"
description: "Role Naming Access Control Rules"
sidebar_position: 150
---

# Role Naming Access Control Rules

Generates the permissions to configure and launch the automatic creation of roles and rules based on
naming conventions.

## Examples

```

**<RoleNamingAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_RoleMapping_Category" DisplayName_L1="Administrator_Category" DisplayName_L2="Administrator_Category" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_CreateUpdateDelete" DisplayName_L1="Administrator_RoleMapping" DisplayName_L2="Administrator_RoleMapping" EntityType="RoleMapping" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_EntityProperty" DisplayName_L1="Administrator_EntityProperty" DisplayName_L2="Administrator_EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_Policy" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrator_Policy" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_ResourceType" DisplayName_L1="Administrator_ResourceType" DisplayName_L2="Administrator_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule>

```
