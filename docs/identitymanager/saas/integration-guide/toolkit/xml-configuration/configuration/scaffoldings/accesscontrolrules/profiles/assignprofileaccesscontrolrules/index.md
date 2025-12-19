---
title: "Assign Profile Access Control Rules"
description: "Assign Profile Access Control Rules"
sidebar_position: 10
---

# Assign Profile Access Control Rules

Gives to a given profile the rights to create, update, delete and query any assigned profile, from
the **Assigned Profiles** screen.

![Assigned Profiles](/images/identitymanager/saas/user-guide/set-up/user-profile-assignment/home_assignedprofiles_v602.webp)

## Examples

The following example gives to the `Administrator` profile the rights to create, update, delete and
query assigned profiles.

```

**<AssignProfileAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Access_Area_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedProfile_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="AssignedProfile" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Create" />  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Delete" />  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Query" />  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Category_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Category" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_CompositeRole_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="CompositeRole" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Profile_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Profile" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceType_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="ResourceType" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Resource_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Resource" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Setting_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Setting" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_SingleRole_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="SingleRole" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule>

```
