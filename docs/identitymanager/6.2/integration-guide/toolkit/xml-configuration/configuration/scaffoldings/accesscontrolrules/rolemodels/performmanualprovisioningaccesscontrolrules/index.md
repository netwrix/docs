---
title: "Perform Manual Provisioning Access Control Rules"
description: "Perform Manual Provisioning Access Control Rules"
sidebar_position: 70
---

# Perform Manual Provisioning Access Control Rules

Generates the rights to access the access manual provisioning pages for a given entity type and
profile.

Gives access to a shortcut on the dashboard to access this page.

![Manual Provisioning](/images/identitymanager/saas/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

The connector connected to the entity type must have the manual type as the provisioning type,
otherwise the information of the entity type cannot be displayed on this screen.

## Examples

```

**<PerformManualProvisioningAccessControlRules EntityType="Directory_User" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_AssignedResourceNavigation_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceNavigation" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceScalar_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceScalar" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceType_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceType" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Application_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Bot_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Guest_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_PresenceState_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserRecord_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_AssignedResourceType_ManualProvisioningReview" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceType" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedResourceType/ManualProvisioningReview" /></AccessControlRule><AccessControlRule Identifier="Administrator_Resource_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for Resource" DisplayName_L2="Administrator - Provisioning manuel de Resource" EntityType="Resource" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_User_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule>

```
