---
title: "CreateInitializationJob"
description: "Creates the Initialization Job for the given agent."
sidebar_position: 8
---

Creates the Initialization Job for the given agent.



## Examples


```xml
  <CreateInitializationJob DisplayName_L1="ZZ Administration/Initialization" OldAlgorithm="false"/>
```


## Properties

|Property|Details|
|---|---|
| Agent optional | **Type:** String **Description:** For job scaffoldings, identifier of the agent on which the job to be generated will be launched. |
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the scaffolding in language 1 (up to 16). |
| JobIdentifier optional | **Type:** String **Description:** For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |
| OldAlgorithm optional | **Type:** Boolean **Description:** Internal use. |



## Child Elements
* [AddTask](#addtask) (optional) Add a task before or after another in the job
* [Configuration](#configuration) (optional) Add the path of the configuration folder if a configuration task is in the job
* [NoConnectorProvisioning](#noconnectorprovisioning) (optional) Avoid provisioning for a connector
* [NoConnectorSynchronization](#noconnectorsynchronization) (optional) Avoid collect for a connector
* [NotUsed](#notused) (optional) Avoid collect and provisioning for a connector
* [OpenIdIdentifier](#openididentifier) (optional) Add a Open Id to the job and the tasks
* [PrincipalDataConnector](#principaldataconnector) (optional) Specifies the connector that contains the data for the fulfillment of external systems.

### AddTask


|Property|Details|
|---|---|
| Task required | **Type:** String **Description:** Identifier of the task to add |
| TaskToCompareWith required | **Type:** String **Description:** The identifier of the task before or after which the new task will be inserted |
| After <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |
| Before <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
| CopyOccurence <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** For Argument AddTask, Specify the Occurence to copy and add the Task in a specify Job. |
| Occurence <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Occurence of the TaskToCompare after or before which the task will be added |



### Configuration


|Property|Details|
|---|---|
| Path required | **Type:** String **Description:** Represents the argument value. |



### NoConnectorProvisioning


|Property|Details|
|---|---|
| ConnectorIdentifier required | **Type:** String **Description:** Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |



### NoConnectorSynchronization


|Property|Details|
|---|---|
| ConnectorIdentifier required | **Type:** String **Description:** Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |



### NotUsed


|Property|Details|
|---|---|
| ConnectorIdentifier required | **Type:** String **Description:** Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |



### OpenIdIdentifier


|Property|Details|
|---|---|
| Identifier required | **Type:** String **Description:** Identifier of the OpenId |



### PrincipalDataConnector


|Property|Details|
|---|---|
| ConnectorIdentifier required | **Type:** String **Description:** Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |




## Generated XML

Our example generates the following configuration:

```xml
<Job Identifier="InitializationJob" DisplayName_L1="ZZ Administration/Initialization" DisplayName_L2="ZZ Administration/Initialisation" Agent="Local" IsInitializationJob="true" UserStartDenied="true">
  <CreateDatabaseViewsTask Identifier="InitializationJob_CreateDatabaseViews" DisplayName_L1="Create the SQL Views" DisplayName_L2="Création des vues SQL" Agent="Local" Level="0" OpenIdClient="Job" />
  <ExportTask Identifier="InitializationJob_Export_AD_Complete_ADExportFulfillment" DisplayName_L1="AD - Extract Changes" DisplayName_L2="AD - Extraction des modifications" Agent="Local" Connector="AD" Level="1" OpenIdClient="Job" Connection="ADExportFulfillment" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_MicrosoftEntraID_Complete_MicrosoftEntraIDExportFulfillment" DisplayName_L1="Microsoft Entra ID - Extract Changes" DisplayName_L2="Microsoft Entra ID - Extraction des modifications" Agent="Local" Connector="MicrosoftEntraID" Level="1" OpenIdClient="Job" Connection="MicrosoftEntraIDExportFulfillment" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HRCountries" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HRCountries" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HREmployeetypes" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HREmployeetypes" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HRExternalCompanies" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HRExternalCompanies" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HRLocations" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HRLocations" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HROrganizations" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HROrganizations" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HRPeople" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HRPeople" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HRStates" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HRStates" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_HR_Complete_HRTitles" DisplayName_L1="HR - Extract Changes" DisplayName_L2="HR - Extraction des modifications" Agent="Local" Connector="HR" Level="1" OpenIdClient="Job" Connection="HRTitles" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_LDAP_Complete_LDAPExportFulfillment" DisplayName_L1="LDAP - Extract Changes" DisplayName_L2="LDAP - Extraction des modifications" Agent="Local" Connector="LDAP" Level="1" OpenIdClient="Job" Connection="LDAPExportFulfillment" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_SAB_Complete_SABGroups" DisplayName_L1="SAB - Extract Changes" DisplayName_L2="SAB - Extraction des modifications" Agent="Local" Connector="SAB" Level="1" OpenIdClient="Job" Connection="SABGroups" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_SAB_Complete_SABUsers" DisplayName_L1="SAB - Extract Changes" DisplayName_L2="SAB - Extraction des modifications" Agent="Local" Connector="SAB" Level="1" OpenIdClient="Job" Connection="SABUsers" InitMode="true" IgnoreCookieFile="true" />
  <ExportTask Identifier="InitializationJob_Export_SAB_Complete_SABUsersGroups" DisplayName_L1="SAB - Extract Changes" DisplayName_L2="SAB - Extraction des modifications" Agent="Local" Connector="SAB" Level="1" OpenIdClient="Job" Connection="SABUsersGroups" InitMode="true" IgnoreCookieFile="true" />
  <PrepareSynchronizationTask Identifier="InitializationJob_PrepareSynchronizationActiveDirectory_AD_Initial" DisplayName_L1="AD - Synchronization (agent side)" DisplayName_L2="AD - Synchronisation (côté agent)" Agent="Local" Connector="AD" Level="2" OpenIdClient="Job" SynchronizationMode="Initial" Type="ActiveDirectory" />
  <PrepareSynchronizationTask Identifier="InitializationJob_PrepareSynchronization_MicrosoftEntraID_Initial" DisplayName_L1="Microsoft Entra ID - Synchronization (agent side)" DisplayName_L2="Microsoft Entra ID - Synchronisation (côté agent)" Agent="Local" Connector="MicrosoftEntraID" Level="2" OpenIdClient="Job" SynchronizationMode="Initial" />
  <PrepareSynchronizationTask Identifier="InitializationJob_PrepareSynchronization_HR_Initial" DisplayName_L1="HR - Synchronization (agent side)" DisplayName_L2="HR - Synchronisation (côté agent)" Agent="Local" Connector="HR" Level="2" OpenIdClient="Job" SynchronizationMode="Initial" />
  <PrepareSynchronizationTask Identifier="InitializationJob_PrepareSynchronization_LDAP_Initial" DisplayName_L1="LDAP - Synchronization (agent side)" DisplayName_L2="LDAP - Synchronisation (côté agent)" Agent="Local" Connector="LDAP" Level="2" OpenIdClient="Job" SynchronizationMode="Initial" />
  <PrepareSynchronizationTask Identifier="InitializationJob_PrepareSynchronization_SAB_Initial" DisplayName_L1="SAB - Synchronization (agent side)" DisplayName_L2="SAB - Synchronisation (côté agent)" Agent="Local" Connector="SAB" Level="2" OpenIdClient="Job" SynchronizationMode="Initial" />
  <SynchronizeTask Identifier="InitializationJob_SynchronizeActiveDirectory_AD_ForceSynchronization" DisplayName_L1="AD - Synchronization (server side)" DisplayName_L2="AD - Synchronisation (côté serveur)" Connector="AD" Level="3" ForceSynchronization="true" Type="ActiveDirectory" />
  <SynchronizeTask Identifier="InitializationJob_Synchronize_MicrosoftEntraID_ForceSynchronization" DisplayName_L1="Microsoft Entra ID - Synchronization (server side)" DisplayName_L2="Microsoft Entra ID - Synchronisation (côté serveur)" Connector="MicrosoftEntraID" Level="3" ForceSynchronization="true" />
  <SynchronizeTask Identifier="InitializationJob_Synchronize_HR_ForceSynchronization" DisplayName_L1="HR - Synchronization (server side)" DisplayName_L2="HR - Synchronisation (côté serveur)" Connector="HR" Level="3" ForceSynchronization="true" />
  <SynchronizeTask Identifier="InitializationJob_Synchronize_LDAP_ForceSynchronization" DisplayName_L1="LDAP - Synchronization (server side)" DisplayName_L2="LDAP - Synchronisation (côté serveur)" Connector="LDAP" Level="3" ForceSynchronization="true" />
  <SynchronizeTask Identifier="InitializationJob_Synchronize_SAB_ForceSynchronization" DisplayName_L1="SAB - Synchronization (server side)" DisplayName_L2="SAB - Synchronisation (côté serveur)" Connector="SAB" Level="3" ForceSynchronization="true" />
  <Step Identifier="Init_SetAdminProfile" Level="4" />
  <Step Identifier="Init_SuggestedRoles" Level="5" />
  <UpdateEntityPropertyExpressionsTask Identifier="InitializationJob_UpdateEntityPropertyExpressions1" DisplayName_L1="Update Computed Properties" DisplayName_L2="Mise à jour des propriétés calculées" Level="6">
    <TaskEntityType EntityType="AD_Category" />
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />
    <TaskEntityType EntityType="Directory_Application" />
    <TaskEntityType EntityType="Directory_Bot" />
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="SAB_User" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="LDAP_Entry" />
    <TaskEntityType EntityType="SAB_Group" />
    <TaskEntityType EntityType="Directory_User" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_PresenceState" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_Location" />
  </UpdateEntityPropertyExpressionsTask>
  <ComputeCorrelationKeysTask Identifier="InitializationJob_ComputeCorrelationKeys1_AllEntities" DisplayName_L1="Compute all Correlations" DisplayName_L2="Calcul des corrélations" Level="7">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="Directory_User" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="Directory_Location" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
  </ComputeCorrelationKeysTask>
  <ComputeRoleModelTask Identifier="InitializationJob_ComputeRoleModel1" DisplayName_L1="Apply the Role Model" DisplayName_L2="Evaluation du modèle de rôles" Level="8" BlockProvisioning="false" IgnoreHistorization="true">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
  </ComputeRoleModelTask>
  <GenerateProvisioningOrdersTask Identifier="InitializationJob_GenerateProvisioningOrders1_ForceProvisioning" DisplayName_L1="Generate Provisioning Orders - Directory" DisplayName_L2="Génération des ordres de provisioning - Référentiel" Level="9" ForceProvisioning="true">
    <TaskResourceType ResourceType="AD_Entry_To_Directory_User" />
    <TaskResourceType ResourceType="AD_Entry_To_Directory_UserRecord" />
    <TaskResourceType ResourceType="HRLocationToDirectory_Location" />
    <TaskResourceType ResourceType="HRPersonToDirectory_UserRecord" />
    <TaskResourceType ResourceType="HR_Country_To_Directory_Country" />
    <TaskResourceType ResourceType="HR_Employee_type_To_Directory_EmployeeType" />
    <TaskResourceType ResourceType="HR_External_company_To_Directory_Company" />
    <TaskResourceType ResourceType="HR_Organization_To_Directory_Organization" />
    <TaskResourceType ResourceType="HR_Person_To_Directory_User" />
    <TaskResourceType ResourceType="HR_State_To_Directory_State" />
    <TaskResourceType ResourceType="HR_Title_To_Directory_Title" />
  </GenerateProvisioningOrdersTask>
  <FulfillTask Identifier="InitializationJob_Fulfill1_IgnoreHistorization" DisplayName_L1="Fulfillment - Directory" DisplayName_L2="Alimentation - Référentiel" Agent="Local" Level="10" OpenIdClient="Job" Dirty="false" ContinueOnError="true" IgnoreHistorization="true">
    <TaskResourceType ResourceType="AD_Entry_To_Directory_User" />
    <TaskResourceType ResourceType="AD_Entry_To_Directory_UserRecord" />
    <TaskResourceType ResourceType="HRLocationToDirectory_Location" />
    <TaskResourceType ResourceType="HRPersonToDirectory_UserRecord" />
    <TaskResourceType ResourceType="HR_Country_To_Directory_Country" />
    <TaskResourceType ResourceType="HR_Employee_type_To_Directory_EmployeeType" />
    <TaskResourceType ResourceType="HR_External_company_To_Directory_Company" />
    <TaskResourceType ResourceType="HR_Organization_To_Directory_Organization" />
    <TaskResourceType ResourceType="HR_Person_To_Directory_User" />
    <TaskResourceType ResourceType="HR_State_To_Directory_State" />
    <TaskResourceType ResourceType="HR_Title_To_Directory_Title" />
  </FulfillTask>
  <UpdateEntityPropertyExpressionsTask Identifier="InitializationJob_UpdateEntityPropertyExpressions2" DisplayName_L1="Update Computed Properties" DisplayName_L2="Mise à jour des propriétés calculées" Level="11">
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="Directory_Location" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
    <TaskEntityType EntityType="Directory_User" />
  </UpdateEntityPropertyExpressionsTask>
  <ComputeCorrelationKeysTask Identifier="InitializationJob_ComputeCorrelationKeys2_AllEntities" DisplayName_L1="Compute all Correlations" DisplayName_L2="Calcul des corrélations" Level="12">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="Directory_User" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="Directory_Location" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
  </ComputeCorrelationKeysTask>
  <ComputeRoleModelTask Identifier="InitializationJob_ComputeRoleModel2" DisplayName_L1="Apply the Role Model" DisplayName_L2="Evaluation du modèle de rôles" Level="13" BlockProvisioning="false" IgnoreHistorization="true">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
  </ComputeRoleModelTask>
  <GenerateProvisioningOrdersTask Identifier="InitializationJob_GenerateProvisioningOrders2_ForceProvisioning" DisplayName_L1="Generate Provisioning Orders - Directory" DisplayName_L2="Génération des ordres de provisioning - Référentiel" Level="14" ForceProvisioning="true">
    <TaskResourceType ResourceType="AD_Entry_To_Directory_User" />
    <TaskResourceType ResourceType="AD_Entry_To_Directory_UserRecord" />
    <TaskResourceType ResourceType="HRLocationToDirectory_Location" />
    <TaskResourceType ResourceType="HRPersonToDirectory_UserRecord" />
    <TaskResourceType ResourceType="HR_Country_To_Directory_Country" />
    <TaskResourceType ResourceType="HR_Employee_type_To_Directory_EmployeeType" />
    <TaskResourceType ResourceType="HR_External_company_To_Directory_Company" />
    <TaskResourceType ResourceType="HR_Organization_To_Directory_Organization" />
    <TaskResourceType ResourceType="HR_Person_To_Directory_User" />
    <TaskResourceType ResourceType="HR_State_To_Directory_State" />
    <TaskResourceType ResourceType="HR_Title_To_Directory_Title" />
  </GenerateProvisioningOrdersTask>
  <FulfillTask Identifier="InitializationJob_Fulfill2_IgnoreHistorization" DisplayName_L1="Fulfillment - Directory" DisplayName_L2="Alimentation - Référentiel" Agent="Local" Level="15" OpenIdClient="Job" Dirty="false" ContinueOnError="true" IgnoreHistorization="true">
    <TaskResourceType ResourceType="AD_Entry_To_Directory_User" />
    <TaskResourceType ResourceType="AD_Entry_To_Directory_UserRecord" />
    <TaskResourceType ResourceType="HRLocationToDirectory_Location" />
    <TaskResourceType ResourceType="HRPersonToDirectory_UserRecord" />
    <TaskResourceType ResourceType="HR_Country_To_Directory_Country" />
    <TaskResourceType ResourceType="HR_Employee_type_To_Directory_EmployeeType" />
    <TaskResourceType ResourceType="HR_External_company_To_Directory_Company" />
    <TaskResourceType ResourceType="HR_Organization_To_Directory_Organization" />
    <TaskResourceType ResourceType="HR_Person_To_Directory_User" />
    <TaskResourceType ResourceType="HR_State_To_Directory_State" />
    <TaskResourceType ResourceType="HR_Title_To_Directory_Title" />
  </FulfillTask>
  <UpdateEntityPropertyExpressionsTask Identifier="InitializationJob_UpdateEntityPropertyExpressions3" DisplayName_L1="Update Computed Properties" DisplayName_L2="Mise à jour des propriétés calculées" Level="16">
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="Directory_Location" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
    <TaskEntityType EntityType="Directory_User" />
  </UpdateEntityPropertyExpressionsTask>
  <ComputeCorrelationKeysTask Identifier="InitializationJob_ComputeCorrelationKeys3_AllEntities" DisplayName_L1="Compute all Correlations" DisplayName_L2="Calcul des corrélations" Level="17">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="Directory_User" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="Directory_Location" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
  </ComputeCorrelationKeysTask>
  <ComputeRoleModelTask Identifier="InitializationJob_ComputeRoleModel3" DisplayName_L1="Apply the Role Model" DisplayName_L2="Evaluation du modèle de rôles" Level="18" BlockProvisioning="false" IgnoreHistorization="true">
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="HR_Country" />
  </ComputeRoleModelTask>
  <GenerateProvisioningOrdersTask Identifier="InitializationJob_GenerateProvisioningOrders3_ForceProvisioning" DisplayName_L1="Generate Provisioning Orders - Directory" DisplayName_L2="Génération des ordres de provisioning - Référentiel" Level="19" ForceProvisioning="true">
    <TaskResourceType ResourceType="AD_Entry_To_Directory_User" />
    <TaskResourceType ResourceType="AD_Entry_To_Directory_UserRecord" />
    <TaskResourceType ResourceType="HRLocationToDirectory_Location" />
    <TaskResourceType ResourceType="HRPersonToDirectory_UserRecord" />
    <TaskResourceType ResourceType="HR_Country_To_Directory_Country" />
    <TaskResourceType ResourceType="HR_Employee_type_To_Directory_EmployeeType" />
    <TaskResourceType ResourceType="HR_External_company_To_Directory_Company" />
    <TaskResourceType ResourceType="HR_Organization_To_Directory_Organization" />
    <TaskResourceType ResourceType="HR_Person_To_Directory_User" />
    <TaskResourceType ResourceType="HR_State_To_Directory_State" />
    <TaskResourceType ResourceType="HR_Title_To_Directory_Title" />
  </GenerateProvisioningOrdersTask>
  <FulfillTask Identifier="InitializationJob_Fulfill3_IgnoreHistorization" DisplayName_L1="Fulfillment - Directory" DisplayName_L2="Alimentation - Référentiel" Agent="Local" Level="20" OpenIdClient="Job" Dirty="false" ContinueOnError="true" IgnoreHistorization="true">
    <TaskResourceType ResourceType="AD_Entry_To_Directory_User" />
    <TaskResourceType ResourceType="AD_Entry_To_Directory_UserRecord" />
    <TaskResourceType ResourceType="HRLocationToDirectory_Location" />
    <TaskResourceType ResourceType="HRPersonToDirectory_UserRecord" />
    <TaskResourceType ResourceType="HR_Country_To_Directory_Country" />
    <TaskResourceType ResourceType="HR_Employee_type_To_Directory_EmployeeType" />
    <TaskResourceType ResourceType="HR_External_company_To_Directory_Company" />
    <TaskResourceType ResourceType="HR_Organization_To_Directory_Organization" />
    <TaskResourceType ResourceType="HR_Person_To_Directory_User" />
    <TaskResourceType ResourceType="HR_State_To_Directory_State" />
    <TaskResourceType ResourceType="HR_Title_To_Directory_Title" />
  </FulfillTask>
  <Step Identifier="Directory_Application_Export" Level="21" />
  <Step Identifier="Directory_Bot_Export" Level="22" />
  <Step Identifier="Directory_BusinessCategory_Export" Level="23" />
  <Step Identifier="Directory_Company_Export" Level="24" />
  <Step Identifier="Directory_Country_Export" Level="25" />
  <Step Identifier="Directory_EmployeeCategory_Export" Level="26" />
  <Step Identifier="Directory_EmployeeType_Export" Level="27" />
  <Step Identifier="Directory_Guest_Export" Level="28" />
  <Step Identifier="Directory_Location_Export" Level="29" />
  <Step Identifier="Directory_Organization_Export" Level="30" />
  <Step Identifier="Directory_OrganizationType_Export" Level="31" />
  <Step Identifier="Directory_PersonalTitle_Export" Level="32" />
  <Step Identifier="Directory_State_Export" Level="33" />
  <Step Identifier="Directory_Title_Export" Level="34" />
  <Step Identifier="Directory_User_Export" Level="35" />
  <Step Identifier="Directory_UserRecord_Export" Level="36" />
  <Step Identifier="Directory_Collect_Initial" Level="37" />
  <Step Identifier="Directory_Synchronization_Init" Level="38" />
  <Step Identifier="Init_LoadApplications" Level="39" />
  <UpdateEntityPropertyExpressionsTask Identifier="InitializationJob_UpdateEntityPropertyExpressions4" DisplayName_L1="Update Computed Properties" DisplayName_L2="Mise à jour des propriétés calculées" Level="40">
    <TaskEntityType EntityType="AD_Category" />
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />
    <TaskEntityType EntityType="Directory_Application" />
    <TaskEntityType EntityType="Directory_Bot" />
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="SAB_User" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="LDAP_Entry" />
    <TaskEntityType EntityType="SAB_Group" />
    <TaskEntityType EntityType="Directory_User" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_PresenceState" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_Location" />
  </UpdateEntityPropertyExpressionsTask>
  <DeployConfigurationTask Identifier="InitializationJob_DeployConfiguration" DisplayName_L1="Deploy Configuration" DisplayName_L2="Déploiement de la configuration" Level="41" ConfigurationDirectory="C:/UsercubeDemo/Conf" />
  <ComputeCorrelationKeysTask Identifier="InitializationJob_ComputeCorrelationKeys4_AllEntities" DisplayName_L1="Compute all Correlations" DisplayName_L2="Calcul des corrélations" Level="42">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="SAB_Group" />
    <TaskEntityType EntityType="SAB_User" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="LDAP_Entry" />
    <TaskEntityType EntityType="Directory_Title" />
    <TaskEntityType EntityType="Directory_User" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="Directory_Location" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_State" />
  </ComputeCorrelationKeysTask>
  <ComputeRoleModelTask Identifier="InitializationJob_ComputeRoleModel4" DisplayName_L1="Apply the Role Model" DisplayName_L2="Evaluation du modèle de rôles" Level="43" BlockAllResourceTypeProvisioning="true" BlockProvisioning="false" IgnoreHistorization="true">
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
    <TaskEntityType EntityType="Directory_State" />
    <TaskEntityType EntityType="Directory_Title" />
    <TaskEntityType EntityType="Directory_User" />
    <TaskEntityType EntityType="Directory_UserRecord" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_Location" />
    <TaskEntityType EntityType="Directory_Organization" />
    <TaskEntityType EntityType="Directory_OrganizationType" />
    <TaskEntityType EntityType="Directory_PersonalTitle" />
    <TaskEntityType EntityType="Directory_PresenceState" />
    <TaskEntityType EntityType="Directory_Bot" />
    <TaskEntityType EntityType="Directory_BusinessCategory" />
    <TaskEntityType EntityType="Directory_Company" />
    <TaskEntityType EntityType="Directory_Country" />
    <TaskEntityType EntityType="Directory_EmployeeCategory" />
    <TaskEntityType EntityType="Directory_EmployeeType" />
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="Directory_Application" />
  </ComputeRoleModelTask>
  <Step Identifier="Init_SetManualAssignments" Level="44" />
  <Step Identifier="Init_Directory_ComputeProvisioningPolicyForManual" Level="45" />
  <Step Identifier="Init_ApproveFutureUserAccountControl" Level="46" />
  <Step Identifier="Init_OrgPath" Level="47" />
  <Step Identifier="Init_Risks_Campaigns" Level="48" />
  <ComputeRiskScoresTask Identifier="InitializationJob_ComputeRiskScores1" DisplayName_L1="Compute Risk Scores" DisplayName_L2="Calcul des scores de risques" Level="49">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="HR_Country" />
    <TaskEntityType EntityType="HR_Employee_type" />
    <TaskEntityType EntityType="HR_External_company" />
    <TaskEntityType EntityType="HR_Location" />
    <TaskEntityType EntityType="HR_Organization" />
    <TaskEntityType EntityType="HR_Person" />
    <TaskEntityType EntityType="HR_State" />
    <TaskEntityType EntityType="HR_Title" />
  </ComputeRiskScoresTask>
  <UpdateClassificationTask Identifier="InitializationJob_UpdateClassification" DisplayName_L1="Resources Classification" DisplayName_L2="Classification des ressources" Level="50">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskEntityType EntityType="LDAP_Entry" />
  </UpdateClassificationTask>
  <SetInternalUserProfilesTask Identifier="InitializationJob_SetInternalUserProfiles1" DisplayName_L1="Assign Usercube Profiles" DisplayName_L2="Affectation des profils Usercube" Level="51">
    <TaskEntityType EntityType="AD_Entry" />
    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />
  </SetInternalUserProfilesTask>
  <ResetValidFromTask Identifier="InitializationJob_ResetValidFrom" DisplayName_L1="Initialization of Historization" DisplayName_L2="Initialisation de l'historisation" Level="52" />
  <UpdateParametersContextDisplayNamesTask Identifier="InitializationJob_UpdateParametersContextDisplayNames" DisplayName_L1="Update of Parameters Context Display Names" DisplayName_L2="Mise à jour des noms des contextes de paramètres" Level="53" />
  <SavePreExistingAccessRightsTask Identifier="InitializationJob_SavePreExistingAccessRights" DisplayName_L1="Save Pre-existing Access Rights" DisplayName_L2="Sauvegarde des droits pré-existants" Level="54" />
  <MaintainIndexesTask Identifier="InitializationJob_MaintainIndexes" DisplayName_L1="SQL Index and Statistics Maintenance" DisplayName_L2="Maintenance des index SQL et des statistiques" Level="55" AllIndexes="true" Offline="true" />
</Job>

```