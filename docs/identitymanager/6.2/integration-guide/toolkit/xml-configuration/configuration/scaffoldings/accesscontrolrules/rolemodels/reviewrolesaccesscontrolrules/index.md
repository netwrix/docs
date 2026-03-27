---
title: "Review Roles Access Control Rules"
description: "Review Roles Access Control Rules"
sidebar_position: 120
---

# Review Roles Access Control Rules

Generates the rights to access the access roles review pages for a given entity type and profile.

Gives access to a shortcut on the dashboard to access this page.

![Role Review](/images/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/governancerolesaccesscontrolrules/home_rolereview_v523.webp)

## Examples

```

**<ReviewRolesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_AssignedCompositeRole_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Roles " DisplayName_L2="Administrator - Revue des r�les " EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedCompositeRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_AssignedSingleRole_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Roles " DisplayName_L2="Administrator - Revue des r�les " EntityType="AssignedSingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedSingleRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Application_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Bot_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Guest_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Organization_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_PresenceState_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_UserRecord_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Workflow_Directory_User_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule>

```
