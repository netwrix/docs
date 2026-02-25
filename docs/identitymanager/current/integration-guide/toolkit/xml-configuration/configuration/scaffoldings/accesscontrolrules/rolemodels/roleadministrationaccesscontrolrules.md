---
title: "RoleAdministrationAccessControlRules"
description: "Generates the permissions to access the configuration pages and create, update, delete the elements of the role model."
sidebar_position: 15
---

Generates the rights to access the access configuration pages and create, update, delete for:

- Policies
- ResourceTypes
- SingleRoles
- CompositeRoles
- ResourceNavigationRules
- ResourceScalarRule
- ResourceCorrelationRule
- CompositeRoleRule
- ResourceTypeRule
- SingleRoleRule
- ContextRule
- Categories

Gives access to a shortcut on the dashboard to access this page.

![Configuration Section](/images/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/roleadministrationaccesscontrolrules/home_configuration_v603.webp)



## Examples


```xml
  <RoleAdministrationAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Access_Area" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Access_Area" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Access_Area" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Access_Area" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Access_Area" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Access_Area" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Access_TimeSlot" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Access_TimeSlot" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Access_TimeSlot" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Access_TimeSlot" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Access_TimeSlot" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Access_TimeSlot" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AutomationRule_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="AutomationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Category_ProvisioningPolicy_Category" DisplayName_L1="Administrator - Management for Category" DisplayName_L2="Administrator - Gestion des Category" EntityType="Category" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Update" />
  <Entry Permission="/ProvisioningPolicy/CompositeRole/Create" />
  <Entry Permission="/ProvisioningPolicy/CompositeRole/Delete" />
  <Entry Permission="/ProvisioningPolicy/CompositeRole/Update" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceType/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceType/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceType/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />
  <Entry Permission="/ProvisioningPolicy/SingleRole/Create" />
  <Entry Permission="/ProvisioningPolicy/SingleRole/Delete" />
  <Entry Permission="/ProvisioningPolicy/SingleRole/Update" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_CompositeRoleRule_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="CompositeRoleRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_CompositeRole_ProvisioningPolicy_CompositeRole" DisplayName_L1="Administrator - Management for CompositeRole" DisplayName_L2="Administrator - Gestion des CompositeRole" EntityType="CompositeRole" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Update" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ContextRule_ProvisioningPolicy_ContextRule" DisplayName_L1="Administrator - Management for ContextRule" DisplayName_L2="Administrator - Gestion des ContextRule" EntityType="ContextRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Country" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Country" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Country" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Country" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Country" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Country" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_ExternalCompany" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_ExternalCompany" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_ExternalCompany" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_ExternalCompany" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_ExternalCompany" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_ExternalCompany" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_OrganizationType" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_OrganizationType" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_OrganizationType" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_OrganizationType" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_OrganizationType" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_OrganizationType" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Organization" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Organization" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Organization" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Organization" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Organization" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Organization" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Site" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Site" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Site" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Site" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Site" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Site" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Subsidiary" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Subsidiary" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Subsidiary" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Subsidiary" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Subsidiary" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Subsidiary" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Title" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Title" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Title" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Title" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Title" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Title" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_UserCategory" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_UserCategory" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_UserCategory" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_UserCategory" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_UserCategory" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_UserCategory" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_User" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_User" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_User" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/Policy" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_User" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_User" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_User" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="EntityProperty" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_EntityProperty" DisplayName_L1="Administrator - Management for EntityProperty" DisplayName_L2="Administrator - Gestion des EntityProperty" EntityType="EntityProperty" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceClassificationRule" DisplayName_L1="Administrator - Management for ResourceClassificationRule" DisplayName_L2="Administrator - Gestion des ResourceClassificationRule" EntityType="EntityProperty" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceCorrelationRule" DisplayName_L1="Administrator - Management for ResourceCorrelationRule" DisplayName_L2="Administrator - Gestion des ResourceCorrelationRule" EntityType="EntityProperty" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="EntityProperty" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceQueryRule" DisplayName_L1="Administrator - Management for ResourceQueryRule" DisplayName_L2="Administrator - Gestion des ResourceQueryRule" EntityType="EntityProperty" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceScalarRule" DisplayName_L1="Administrator - Management for ResourceScalarRule" DisplayName_L2="Administrator - Gestion des ResourceScalarRule" EntityType="EntityProperty" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Policy_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Policy" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/Category/Create" />
  <Entry Permission="/ProvisioningPolicy/Category/Delete" />
  <Entry Permission="/ProvisioningPolicy/Category/Update" />
  <Entry Permission="/ProvisioningPolicy/CompositeRole/Create" />
  <Entry Permission="/ProvisioningPolicy/CompositeRole/Delete" />
  <Entry Permission="/ProvisioningPolicy/CompositeRole/Update" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Update" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceType/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceType/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceType/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />
  <Entry Permission="/ProvisioningPolicy/SingleRole/Create" />
  <Entry Permission="/ProvisioningPolicy/SingleRole/Delete" />
  <Entry Permission="/ProvisioningPolicy/SingleRole/Update" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceClassificationRule_ProvisioningPolicy_ResourceClassificationRule" DisplayName_L1="Administrator - Management for ResourceClassificationRule" DisplayName_L2="Administrator - Gestion des ResourceClassificationRule" EntityType="ResourceClassificationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceCorrelationRule_ProvisioningPolicy_ResourceCorrelationRule" DisplayName_L1="Administrator - Management for ResourceCorrelationRule" DisplayName_L2="Administrator - Gestion des ResourceCorrelationRule" EntityType="ResourceCorrelationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Metadata/Binding/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceNavigationRule_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="ResourceNavigationRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceQueryRule_ProvisioningPolicy_ResourceQueryRule" DisplayName_L1="Administrator - Management for ResourceQueryRule" DisplayName_L2="Administrator - Gestion des ResourceQueryRule" EntityType="ResourceQueryRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceScalarRule_ProvisioningPolicy_ResourceScalarRule" DisplayName_L1="Administrator - Management for ResourceScalarRule" DisplayName_L2="Administrator - Gestion des ResourceScalarRule" EntityType="ResourceScalarRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceTypeRule_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="ResourceTypeRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceType_ProvisioningPolicy_ResourceType" DisplayName_L1="Administrator - Management for ResourceType" DisplayName_L2="Administrator - Gestion des ResourceType" EntityType="ResourceType" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Resource_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Resource" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_SingleRoleRule_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="SingleRoleRule" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Update" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_SingleRole_ProvisioningPolicy_SingleRole" DisplayName_L1="Administrator - Management for SingleRole" DisplayName_L2="Administrator - Gestion des SingleRole" EntityType="SingleRole" Profile="Administrator">
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Create" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Delete" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Query" />
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Update" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />
  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" />
</AccessControlRule>

```