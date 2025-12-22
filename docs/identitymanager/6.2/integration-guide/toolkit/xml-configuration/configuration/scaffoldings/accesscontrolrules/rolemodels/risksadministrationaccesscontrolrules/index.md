---
title: "Risks Administration Access Control Rules"
description: "Risks Administration Access Control Rules"
sidebar_position: 130
---

# Risks Administration Access Control Rules

## Examples

```

**<RisksAdministrationAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Category" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Category" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_EntityProperty" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_EntityType" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_EntityType" EntityType="EntityType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_IdentifiedRisk" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_IdentifiedRisk" EntityType="IdentifiedRisk" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/IdentifiedRisk/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Policy" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Policy" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Resource" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Resource" EntityType="Resource" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Create" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_ResourceType" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Risk" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Risk" EntityType="Risk" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/IdentifiedRisk/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_RiskRule" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_RiskRule" EntityType="RiskRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_RiskRuleItem" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_RiskRuleItem" EntityType="RiskRuleItem" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule>

```
