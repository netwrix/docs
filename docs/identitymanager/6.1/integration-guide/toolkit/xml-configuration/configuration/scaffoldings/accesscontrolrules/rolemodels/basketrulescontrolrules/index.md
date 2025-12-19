---
title: "BasketRulesControlRules"
description: "BasketRulesControlRules"
sidebar_position: 10
---

# BasketRulesControlRules

Generates the permissions to execute the different requests to display the information in the rights
basket.

## Examples

```

**<BasketRulesControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedCompositeRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedCompositeRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedCompositeRole" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceNavigation" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedResourceNavigation" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceScalar" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedResourceScalar" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceType" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedResourceType" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedSingleRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedSingleRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedSingleRole" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Category" DisplayName_L1="Workforce/Workflows/Update Personal Data_Category" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Category" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_CompositeRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_CompositeRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_CompositeRole" EntityType="CompositeRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Connector" DisplayName_L1="Workforce/Workflows/Update Personal Data_Connector" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Connector" EntityType="Connector" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_EntityProperty" DisplayName_L1="Workforce/Workflows/Update Personal Data_EntityProperty" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Policy" DisplayName_L1="Workforce/Workflows/Update Personal Data_Policy" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Policy" EntityType="Policy" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_ResourceType" DisplayName_L1="Workforce/Workflows/Update Personal Data_ResourceType" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_SingleRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_SingleRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_SingleRole" EntityType="SingleRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule>

```
