---
title: "Reconciliate Roles Access Control Rules"
description: "Reconciliate Roles Access Control Rules"
sidebar_position: 90
---

# Reconciliate Roles Access Control Rules

Generates the rights to access the access reconcile roles pages for a given entity type and profile.

Gives access to a shortcut on the dashboard to access this page.

![Role Reconciliation](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/home_rolereconciliation_v523.webp)

## Examples

```

**<ReconciliateRolesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_AssignedCompositeRole_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Reconciliate Roles" DisplayName_L2="Administrator - R�conciliation des r�les" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedCompositeRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_AssignedResourceType_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Reconciliate Roles" DisplayName_L2="Administrator - R�conciliation des r�les" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_AssignedSingleRole_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Reconciliate Roles" DisplayName_L2="Administrator - R�conciliation des r�les" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedSingleRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Application_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Bot_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Guest_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Organization_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_PresenceState_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_UserRecord_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Workflow_Directory_User_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule>

```
