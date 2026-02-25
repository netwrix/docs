---
title: "ResourceChangesViewAccessControlRules"
description: "Generates the access control rules which gives to a profile the permissions to call the API ResourceChange, ResourceFileChange and ResourceLinkChange."
sidebar_position: 6
---

Generates the access control rules which gives to a profile the permissions to call the API `ResourceChange`, `ResourceFileChange` and `ResourceLinkChange`.

Data from `UR_ResourceChanges`, `UR_ResourceFileChanges` and `UR_ResourceLinkChanges` tables can be retrieved by these APIs.


## Examples


```xml
  <ResourceChangesViewAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_AD_Entry" DisplayName_L1="Administrator - ResourceChanges - AD - Entry" DisplayName_L2="Administrator - ResourceChanges - Entrée AD" EntityType="AD_Entry" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/AD" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/AD" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/AD" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Access_AccessAuthorization" DisplayName_L1="Administrator - ResourceChanges - Access Authorization" DisplayName_L2="Administrator - ResourceChanges - Autorisation d'accès" EntityType="Access_AccessAuthorization" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Access" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Access_Area" DisplayName_L1="Administrator - ResourceChanges - Access Area" DisplayName_L2="Administrator - ResourceChanges - Zone d'accès" EntityType="Access_Area" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Access" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Access_Badge" DisplayName_L1="Administrator - ResourceChanges - Access Badge" DisplayName_L2="Administrator - ResourceChanges - Badge d'accès" EntityType="Access_Badge" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Access" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Access_TimeSlot" DisplayName_L1="Administrator - ResourceChanges - Access Time Slot" DisplayName_L2="Administrator - ResourceChanges - Plage horaire" EntityType="Access_TimeSlot" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Access" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Access" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_MicrosoftEntraID_DirectoryObject" DisplayName_L1="Administrator - ResourceChanges - Microsoft Entra ID - Object" DisplayName_L2="Administrator - ResourceChanges - MicrosoftEntraID_DirectoryObject" EntityType="MicrosoftEntraID_DirectoryObject" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/AzureAD" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/AzureAD" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/AzureAD" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Application" DisplayName_L1="Administrator - ResourceChanges - Application" DisplayName_L2="Administrator - ResourceChanges - Application" EntityType="Directory_Application" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory2" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory2" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory2" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Bot" DisplayName_L1="Administrator - ResourceChanges - RPA Bot" DisplayName_L2="Administrator - ResourceChanges - Robot RPA" EntityType="Directory_Bot" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory2" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory2" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory2" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Country" DisplayName_L1="Administrator - ResourceChanges - Country" DisplayName_L2="Administrator - ResourceChanges - Directory_Country" EntityType="Directory_Country" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_ExternalCompany" DisplayName_L1="Administrator - ResourceChanges - External Company" DisplayName_L2="Administrator - ResourceChanges - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Guest" DisplayName_L1="Administrator - ResourceChanges - Guest" DisplayName_L2="Administrator - ResourceChanges - Invité" EntityType="Directory_Guest" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory2" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory2" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory2" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_JobCategory" DisplayName_L1="Administrator - ResourceChanges - Business Category" DisplayName_L2="Administrator - ResourceChanges - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Organization" DisplayName_L1="Administrator - ResourceChanges - Department" DisplayName_L2="Administrator - ResourceChanges - Directory_Organization" EntityType="Directory_Organization" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_OrganizationType" DisplayName_L1="Administrator - ResourceChanges - Department Type" DisplayName_L2="Administrator - ResourceChanges - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_PersonalTitle" DisplayName_L1="Administrator - ResourceChanges - Personal Title" DisplayName_L2="Administrator - ResourceChanges - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_PresenceState" DisplayName_L1="Administrator - ResourceChanges - User Status" DisplayName_L2="Administrator - ResourceChanges - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Region" DisplayName_L1="Administrator - ResourceChanges - Region" DisplayName_L2="Administrator - ResourceChanges - Directory_Region" EntityType="Directory_Region" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_ReservedEmail" DisplayName_L1="Administrator - ResourceChanges - Reserved Email" DisplayName_L2="Administrator - ResourceChanges - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_ReservedIdentifier" DisplayName_L1="Administrator - ResourceChanges - Reserved Unique Identifier" DisplayName_L2="Administrator - ResourceChanges - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_ReservedLogin" DisplayName_L1="Administrator - ResourceChanges - Reserved Login" DisplayName_L2="Administrator - ResourceChanges - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Site" DisplayName_L1="Administrator - ResourceChanges - Site" DisplayName_L2="Administrator - ResourceChanges - Directory_Site" EntityType="Directory_Site" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Subsidiary" DisplayName_L1="Administrator - ResourceChanges - Subsidiary" DisplayName_L2="Administrator - ResourceChanges - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_Title" DisplayName_L1="Administrator - ResourceChanges - Title" DisplayName_L2="Administrator - ResourceChanges - Directory_Title" EntityType="Directory_Title" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_User" DisplayName_L1="Administrator - ResourceChanges - User" DisplayName_L2="Administrator - ResourceChanges - Directory_User" EntityType="Directory_User" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_UserRecord" DisplayName_L1="Administrator - ResourceChanges - User Record" DisplayName_L2="Administrator - ResourceChanges - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Directory_UserType" DisplayName_L1="Administrator - ResourceChanges - User Type" DisplayName_L2="Administrator - ResourceChanges - Directory_UserType" EntityType="Directory_UserType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Directory" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Directory" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_Country" DisplayName_L1="Administrator - ResourceChanges - HR - Country" DisplayName_L2="Administrator - ResourceChanges - RH - Pays" EntityType="HR_Country" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_Employee_type" DisplayName_L1="Administrator - ResourceChanges - HR - User Type" DisplayName_L2="Administrator - ResourceChanges - RH - Type de collaborateur" EntityType="HR_Employee_type" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_External_company" DisplayName_L1="Administrator - ResourceChanges - HR- External Company" DisplayName_L2="Administrator - ResourceChanges - RH - Société externe" EntityType="HR_External_company" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_Organization" DisplayName_L1="Administrator - ResourceChanges - HR - Department" DisplayName_L2="Administrator - ResourceChanges - RH - Département" EntityType="HR_Organization" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_Person" DisplayName_L1="Administrator - ResourceChanges - HR - User" DisplayName_L2="Administrator - ResourceChanges - RH - Collaborateur" EntityType="HR_Person" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_Site" DisplayName_L1="Administrator - ResourceChanges - HR - Site" DisplayName_L2="Administrator - ResourceChanges - RH - Site" EntityType="HR_Site" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_State" DisplayName_L1="Administrator - ResourceChanges - HR - State" DisplayName_L2="Administrator - ResourceChanges - RH - Région" EntityType="HR_State" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_HR_Title" DisplayName_L1="Administrator - ResourceChanges - HR - Title" DisplayName_L2="Administrator - ResourceChanges - RH - Fonction" EntityType="HR_Title" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/HR" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/HR" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_LDAP_Entry" DisplayName_L1="Administrator - ResourceChanges - LDAP - Entry" DisplayName_L2="Administrator - ResourceChanges - LDAP_Entry" EntityType="LDAP_Entry" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/LDAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/LDAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/LDAP" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Mobiles_Mobile" DisplayName_L1="Administrator - ResourceChanges - Mobile" DisplayName_L2="Administrator - ResourceChanges - Mobiles_Mobile" EntityType="Mobiles_Mobile" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Mobiles" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Mobiles" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Mobiles" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Mobiles_Option" DisplayName_L1="Administrator - ResourceChanges - Mobile - Option" DisplayName_L2="Administrator - ResourceChanges - Mobile - Option" EntityType="Mobiles_Option" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Mobiles" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Mobiles" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Mobiles" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Postedetravail" DisplayName_L1="Administrator - ResourceChanges - Computer" DisplayName_L2="Administrator - ResourceChanges - Poste de travail" EntityType="Postedetravail" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Postesdetravail" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Postesdetravail" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Postesdetravail" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_SAB_Group" DisplayName_L1="Administrator - ResourceChanges - SAB - Group" DisplayName_L2="Administrator - ResourceChanges - SAB - Groupe" EntityType="SAB_Group" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/SAB" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/SAB" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/SAB" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_SAB_User" DisplayName_L1="Administrator - ResourceChanges - SAB - User" DisplayName_L2="Administrator - ResourceChanges - SAB - Compte" EntityType="SAB_User" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/SAB" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/SAB" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/SAB" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_SAP_Group" DisplayName_L1="Administrator - ResourceChanges - SAP - Group" DisplayName_L2="Administrator - ResourceChanges - SAP_Group" EntityType="SAP_Group" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/SAP" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_SAP_Profile" DisplayName_L1="Administrator - ResourceChanges - SAP - Profile" DisplayName_L2="Administrator - ResourceChanges - SAP_Profile" EntityType="SAP_Profile" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/SAP" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_SAP_Role" DisplayName_L1="Administrator - ResourceChanges - SAP - Role" DisplayName_L2="Administrator - ResourceChanges - SAP_Role" EntityType="SAP_Role" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/SAP" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_SAP_Transaction" DisplayName_L1="Administrator - ResourceChanges - SAP - Transaction" DisplayName_L2="Administrator - ResourceChanges - SAP_Transaction" EntityType="SAP_Transaction" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/SAP" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_SAP_User" DisplayName_L1="Administrator - ResourceChanges - SAP - User" DisplayName_L2="Administrator - ResourceChanges - SAP_User" EntityType="SAP_User" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/SAP" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/SAP" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Custom_ResourceChanges_Vehicules_Vehicule" DisplayName_L1="Administrator - ResourceChanges - Car" DisplayName_L2="Administrator - ResourceChanges - Véhicule" EntityType="Vehicules_Vehicule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ResourceChanges/Vehicules" />
  <Entry CanExecute="true" Permission="/Custom/ResourceFileChanges/Vehicules" />
  <Entry CanExecute="true" Permission="/Custom/ResourceLinkChanges/Vehicules" />
</AccessControlRule>

```