---
title: "View Access Control Rules"
description: "View Access Control Rules"
sidebar_position: 40
---

# View Access Control Rules

Generates the permissions to view an entity type's resources.

## Examples

The following example gives to the `Administrator` profile the permissions to access the page that
displays the resources of the `Directory_UserType` entity type, as well as its source resources.

```

**<ViewAccessControlRules EntityType="Directory_UserType" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_AssignedCompositeRole_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedCompositeRole_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceNavigation_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedResourceNavigation_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceScalar_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedResourceScalar_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceType_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedResourceType_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedResourceType" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedSingleRole_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedSingleRole_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_Category_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_Category_Custom_Resources_Directory_UserType" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/View" /></AccessControlRule><AccessControlRule Identifier="Administrator_Category_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_Category_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserType_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_Directory_UserType_Custom_Resources_Directory_UserType" EntityType="Directory_UserType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_UserType" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" />  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/Directory_UserType/View" />  <Entry Permission="/Custom/Resources" />  <Entry Permission="/Custom/Workflows" />  <Entry Permission="/Universes/UniverseData/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Policy_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_Policy_Custom_Resources_Directory_UserType" EntityType="Policy" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/View" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceType_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_ResourceType_Custom_Resources_Directory_UserType" EntityType="ResourceType" Profile="Administrator">  <Entry FullAccessProperties="true" Permission="/Custom/Resources/Directory_UserType/View" /></AccessControlRule>

```
