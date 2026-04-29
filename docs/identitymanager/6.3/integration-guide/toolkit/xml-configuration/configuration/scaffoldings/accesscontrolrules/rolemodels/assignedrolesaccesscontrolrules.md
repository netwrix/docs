---
title: "AssignedRolesAccessControlRules"
description: "Generates the permissions to access the assigned roles page for a given entity type and profile."
sidebar_position: 1
---

Generates the rights to access the assigned roles page for a given entity type and profile.

Gives access to a shortcut on the dashboard to access this page.

## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Profile="RoleAssignedRoles" EntityType="Category" Identifier="RoleAssignedRoles_Category_ProvisioningPolicy_Category" DisplayName_L1="RoleAssignedRoles_Category_ProvisioningPolicy_Category">
  <Entry Permission="/ProvisioningPolicy/Category/Query" CanExecute="true" FullAccessProperties="true" />
</AccessControlRule>
<AccessControlRule Identifier="RoleAssignedRoles_AssignedSingleRole_Custom_ProvisioningPolicy_AssignedRoles_Directory_User_16" DisplayName_L1="Role AssignedRoles" DisplayName_L2="Role AssignedRoles FR" EntityType="AssignedSingleRole" Profile="RoleAssignedRoles">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/AssignedRoles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="RoleAssignedRoles_AssignedSingleRole_Custom_ProvisioningPolicy_AssignedRoles_Directory_User_9" DisplayName_L1="Role AssignedRoles" DisplayName_L2="Role AssignedRoles FR" EntityType="AssignedSingleRole" Profile="RoleAssignedRoles">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/AssignedRoles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="RoleAssignedRoles_AssignedSingleRole_Custom_ProvisioningPolicy_AssignedRoles_Directory_User_11" DisplayName_L1="Role AssignedRoles" DisplayName_L2="Role AssignedRoles FR" EntityType="AssignedSingleRole" Profile="RoleAssignedRoles">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/AssignedRoles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="RoleAssignedRoles_AssignedCompositeRole_Custom_ProvisioningPolicy_AssignedRoles_Directory_User" DisplayName_L1="Role AssignedRoles" DisplayName_L2="Role AssignedRoles FR" EntityType="AssignedCompositeRole" Profile="RoleAssignedRoles">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/AssignedRoles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="RoleAssignedRoles_AssignedCompositeRole_Custom_ProvisioningPolicy_AssignedRoles_Directory_User_9" DisplayName_L1="Role AssignedRoles" DisplayName_L2="Role AssignedRoles FR" EntityType="AssignedCompositeRole" Profile="RoleAssignedRoles">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/AssignedRoles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="RoleAssignedRoles_AssignedCompositeRole_Custom_ProvisioningPolicy_AssignedRoles_Directory_User_11" DisplayName_L1="Role AssignedRoles" DisplayName_L2="Role AssignedRoles FR" EntityType="AssignedCompositeRole" Profile="RoleAssignedRoles">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/AssignedRoles/Directory_User" />
</AccessControlRule>
```