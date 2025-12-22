---
title: "CreateAgentSynchroIncremental"
description: "CreateAgentSynchroIncremental"
sidebar_position: 40
---

# CreateAgentSynchroIncremental

This scaffolding generates a synchronization job in incremental mode for all connectors supporting
incremental synchronization.

The tasks created in the Scaffoldings are sorted by level. The levels are visible via the tools:
Usercube-Get-JobSteps.exe

## Examples

```

**<CreateAgentSynchroIncremental DisplayName_L1="91: Background Sync/Provisioning Job" JobIdentifier="Job_Fast"/>**

```

## Properties

| Property                | Details                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent optional          | **Type** String **Description** For job scaffoldings, identifier of the agent on which the job to be generated will be launched.               |
| DisplayName_L1 optional | **Type** String **Description** Display name of the scaffolding in language 1 (up to 16).                                                      |
| JobIdentifier optional  | **Type** String **Description** For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |
| OldAlgorithm optional   | **Type** Boolean **Description** Internal use.                                                                                                 |

## Child Elements

- [AddTask](#addtask) (optional) Add a task before or after another in the job
- [CronTabExpression](#crontabexpression) (optional) Schedule the job
- [DoNotCreateJob](#donotcreatejob) (optional) Create only the tasks without the job
- [FulfillInternalWorkflowsPath](#fulfillinternalworkflowspath) (optional) Add the path of the json
  configuration for a connector with IsWorkflowProvisioning set to true
- [LinkDependTask](#linkdependtask) (optional) Link a child Task with a parent to not launch the
  child if the parent has finish with state warning
- [OpenIdIdentifier](#openididentifier) (optional) Add a Open Id to the job and the tasks

### AddTask

| Property                       | Details                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Task required                  | **Type** String **Description** Identifier of the task to add                                                                               |
| TaskToCompareWith required     | **Type** String **Description** The identifier of the task before or after which the new task will be inserted                              |
| After default value: false     | **Type** Boolean **Description** For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith.  |
| Before default value: false    | **Type** Boolean **Description** For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
| CopyOccurence default value: 0 | **Type** Int32 **Description** For Argument AddTask, Specify the Occurence to copy and add the Task in a specify Job.                       |
| Occurence default value: 0     | **Type** Int32 **Description** Occurence of the TaskToCompare after or before which the task will be added                                  |

### CronTabExpression

| Property              | Details                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| CronTab required      | **Type** String **Description** Represents the argument value.                                                                           |
| CronTimeZone optional | **Type** CronTimeZone **Description** For Argument AddTask, Occurence of the TaskToCompare after or before which the task will be added. |

### DoNotCreateJob

### FulfillInternalWorkflowsPath

| Property                     | Details                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ConnectorIdentifier required | **Type** String **Description** Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |
| Path required                | **Type** String **Description** Represents the argument value.                                                                                                                                                                 |

### LinkDependTask

| Property                         | Details                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| DependOn required                | **Type** String **Description** identifier of parent Task                                |
| Task required                    | **Type** String **Description** Identifier of child Task                                 |
| ChildOccurence default value: 0  | **Type** Int32 **Description** search the occurence x to link with the parent.           |
| ParentOccurence default value: 0 | **Type** Int32 **Description** Occurence of the parentTask which the task will be linked |

### OpenIdIdentifier

| Property            | Details                                                  |
| ------------------- | -------------------------------------------------------- |
| Identifier required | **Type** String **Description** Identifier of the OpenId |

## Generated XML

Our example generates the following configuration:

```

<Job Identifier="Job_Fast" DisplayName_L1="91: Background Sync/Provisioning Job" DisplayName_L2="91: T�che de fond de Synchro/provisioning" Agent="Local">  <ExportTask Identifier="Job_Fast_Export_AD_Incremental_ADExportFulfillment" DisplayName_L1="AD - Extract Changes" DisplayName_L2="AD - Extraction des modifications" Agent="Local" Connector="AD" Level="0" OpenIdClient="Job" Connection="ADExportFulfillment" ContinueOnError="true" />  <ExportTask Identifier="Job_Fast_Export_MicrosoftEntraID_Incremental_MicrosoftEntraIDExportFulfillment" DisplayName_L1="Microsoft Entra ID - Extract Changes" DisplayName_L2="Microsoft Entra ID - Extraction des modifications" Agent="Local" Connector="MicrosoftEntraID" Level="0" OpenIdClient="Job" Connection="MicrosoftEntraIDExportFulfillment" ContinueOnError="true" />  <PrepareSynchronizationTask Identifier="Job_Fast_PrepareSynchronizationActiveDirectory_AD_Incremental" DisplayName_L1="AD - Synchronization (agent side)" DisplayName_L2="AD - Synchronisation (c�t� agent)" Agent="Local" Connector="AD" Level="1" OpenIdClient="Job" SynchronizationMode="Incremental" Type="ActiveDirectory">    <TaskDependsOnTask ParentTask="Job_Fast_Export_AD_Incremental_ADExportFulfillment" />  </PrepareSynchronizationTask>  <PrepareSynchronizationTask Identifier="Job_Fast_PrepareSynchronizationChanges_MicrosoftEntraID_Incremental" DisplayName_L1="Microsoft Entra ID - Incremental Synchronization (agent side)" DisplayName_L2="Microsoft Entra ID - Synchronisation incr�mentale (c�t� agent)" Agent="Local" Connector="MicrosoftEntraID" Level="1" OpenIdClient="Job" SynchronizationMode="Incremental" Type="Changes">    <TaskDependsOnTask ParentTask="Job_Fast_Export_MicrosoftEntraID_Incremental_MicrosoftEntraIDExportFulfillment" />  </PrepareSynchronizationTask>  <SynchronizeTask Identifier="Job_Fast_SynchronizeActiveDirectory_AD_DoNotDeleteChanges" DisplayName_L1="AD - Synchronization (server side)" DisplayName_L2="AD - Synchronisation (c�t� serveur)" Connector="AD" Level="2" Type="ActiveDirectory" DoNotDeleteChanges="true">    <TaskDependsOnTask ParentTask="Job_Fast_PrepareSynchronizationActiveDirectory_AD_Incremental" />  </SynchronizeTask>  <SynchronizeTask Identifier="Job_Fast_SynchronizeChanges_MicrosoftEntraID_DoNotDeleteChanges" DisplayName_L1="Microsoft Entra ID - Synchronization (changes server side)" DisplayName_L2="Microsoft Entra ID - Synchronisation (changements c�t� serveur)" Connector="MicrosoftEntraID" Level="2" Type="Changes" DoNotDeleteChanges="true">    <TaskDependsOnTask ParentTask="Job_Fast_PrepareSynchronizationChanges_MicrosoftEntraID_Incremental" />  </SynchronizeTask>  <SetRecentlyModifiedFlagTask Identifier="Job_Fast_SetRecentlyModifiedFlag" DisplayName_L1="Tag Modified Objects" DisplayName_L2="Marquage des objets modifi�s" Level="3">    <TaskDependsOnTask ParentTask="Job_Fast_SynchronizeActiveDirectory_AD_DoNotDeleteChanges" />    <TaskDependsOnTask ParentTask="Job_Fast_SynchronizeChanges_MicrosoftEntraID_DoNotDeleteChanges" />  </SetRecentlyModifiedFlagTask>  <UpdateEntityPropertyExpressionsTask Identifier="Job_Fast_UpdateEntityPropertyExpressions1_WithDirty" DisplayName_L1="Update Computed Properties" DisplayName_L2="Mise � jour des propri�t�s calcul�es" Level="4" Dirty="true">    <TaskEntityType EntityType="AD_Category" />    <TaskEntityType EntityType="AD_Entry" />    <TaskEntityType EntityType="Access_AccessAuthorization" />    <TaskEntityType EntityType="Access_Area" />    <TaskEntityType EntityType="Access_Badge" />    <TaskEntityType EntityType="Access_TimeSlot" />    <TaskEntityType EntityType="SharePoint_Role" />    <TaskEntityType EntityType="SharePoint_RoleAssignment" />    <TaskEntityType EntityType="ServiceNow_Department" />    <TaskEntityType EntityType="ServiceNow_Group" />    <TaskEntityType EntityType="ServiceNow_Role" />    <TaskEntityType EntityType="ServiceNow_User" />    <TaskEntityType EntityType="SharePoint_Entity" />    <TaskEntityType EntityType="SharePoint_Object" />    <TaskEntityType EntityType="SAP_Role" />    <TaskEntityType EntityType="SAP_User" />    <TaskEntityType EntityType="SF_ACE" />    <TaskEntityType EntityType="SF_PI" />    <TaskEntityType EntityType="ServiceNow_Company" />    <TaskEntityType EntityType="ServiceNow_CostCenter" />    <TaskEntityType EntityType="HR_State" />    <TaskEntityType EntityType="HR_Title" />    <TaskEntityType EntityType="LDAP_Entry" />    <TaskEntityType EntityType="SAB_Group" />    <TaskEntityType EntityType="SAB_User" />    <TaskEntityType EntityType="SAP_Group" />    <TaskEntityType EntityType="HR_Country" />    <TaskEntityType EntityType="HR_Employee_type" />    <TaskEntityType EntityType="HR_External_company" />    <TaskEntityType EntityType="HR_Location" />    <TaskEntityType EntityType="HR_Organization" />    <TaskEntityType EntityType="HR_Person" />    <TaskEntityType EntityType="Directory_PersonalTitle" />    <TaskEntityType EntityType="Directory_PresenceState" />    <TaskEntityType EntityType="Directory_State" />    <TaskEntityType EntityType="Directory_Title" />    <TaskEntityType EntityType="Directory_User" />    <TaskEntityType EntityType="Directory_UserRecord" />    <TaskEntityType EntityType="Directory_EmployeeCategory" />    <TaskEntityType EntityType="Directory_EmployeeType" />    <TaskEntityType EntityType="Directory_Guest" />    <TaskEntityType EntityType="Directory_Location" />    <TaskEntityType EntityType="Directory_Organization" />    <TaskEntityType EntityType="Directory_OrganizationType" />    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />    <TaskEntityType EntityType="Directory_Application" />    <TaskEntityType EntityType="Directory_Bot" />    <TaskEntityType EntityType="Directory_BusinessCategory" />    <TaskEntityType EntityType="Directory_Company" />    <TaskEntityType EntityType="Directory_Country" />  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="Job_Fast_ComputeCorrelationKeys1_AllEntities_WithDirty" DisplayName_L1="Compute all Correlations" DisplayName_L2="Calcul des corr�lations" Level="5" Dirty="true">    <TaskDependsOnTask ParentTask="Job_Fast_SetRecentlyModifiedFlag" />    <TaskEntityType EntityType="AD_Entry" />    <TaskEntityType EntityType="Access_AccessAuthorization" />    <TaskEntityType EntityType="Access_Badge" />    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />    <TaskEntityType EntityType="Directory_Bot" />    <TaskEntityType EntityType="Directory_Guest" />    <TaskEntityType EntityType="Directory_User" />    <TaskEntityType EntityType="LDAP_Entry" />  </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="Job_Fast_ComputeRoleModel1_WithDirty" DisplayName_L1="Apply the Role Model" DisplayName_L2="Evaluation du mod�le de r�les" Level="6" Dirty="true">    <TaskDependsOnTask ParentTask="Job_Fast_SetRecentlyModifiedFlag" />    <TaskEntityType EntityType="Directory_Bot" />    <TaskEntityType EntityType="Directory_Guest" />    <TaskEntityType EntityType="Directory_User" />  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="Job_Fast_GenerateProvisioningOrders1" DisplayName_L1="Generate Provisioning Orders - AD, Access, Microsoft Entra ID, LDAP" DisplayName_L2="G�n�ration des ordres de provisioning - AD, Access, Microsoft Entra ID, LDAP" Level="7">    <TaskResourceType ResourceType="AD_Entry_AdministrationUser" />    <TaskResourceType ResourceType="AD_Entry_Bot" />    <TaskResourceType ResourceType="AD_Entry_Guest" />    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    <TaskResourceType ResourceType="Access_AccessAuthorization_Nominative" />    <TaskResourceType ResourceType="Access_Badge_Nominative" />    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_Guest" />    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser" />    <TaskResourceType ResourceType="LDAP_Entry_Guest" />    <TaskResourceType ResourceType="LDAP_Entry_NominativeUser" />  </GenerateProvisioningOrdersTask>  <FulfillTask Identifier="Job_Fast_Fulfill1" DisplayName_L1="Fulfillment - AD, Access, Microsoft Entra ID, LDAP" DisplayName_L2="Alimentation - AD, Access, Microsoft Entra ID, LDAP" Agent="Local" Level="8" OpenIdClient="Job" Dirty="true" ContinueOnError="true">    <TaskDependsOnTask ParentTask="Job_Fast_GenerateProvisioningOrders1" />    <TaskResourceType ResourceType="AD_Entry_AdministrationUser" />    <TaskResourceType ResourceType="AD_Entry_Bot" />    <TaskResourceType ResourceType="AD_Entry_Guest" />    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    <TaskResourceType ResourceType="Access_AccessAuthorization_Nominative" />    <TaskResourceType ResourceType="Access_Badge_Nominative" />    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_Guest" />    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser" />    <TaskResourceType ResourceType="LDAP_Entry_Guest" />    <TaskResourceType ResourceType="LDAP_Entry_NominativeUser" />  </FulfillTask></Job>

```
