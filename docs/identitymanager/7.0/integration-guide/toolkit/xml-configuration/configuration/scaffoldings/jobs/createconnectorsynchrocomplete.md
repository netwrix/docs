---
title: "CreateConnectorSynchroComplete"
description: "Creates for the given connector the synchronization in complete mode."
sidebar_position: 6
---

This scaffolding generates a synchronization job (in Complete mode) for the given connector.

The tasks created in the Scaffoldings are sorted by level. The levels are visible via the tools: Usercube-Get-JobSteps.exe


## Examples


```xml
  <CreateConnectorSynchroComplete DisplayName_L1="10: Microsoft Entra ID (formerly Azure Active Directory) - Synchronization Complete (scaffolding)" Connector="MicrosoftEntraID" JobIdentifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding"/>
```


## Properties

|Property|Details|
|---|---|
| Connector required | **Type:** String **Description:** Identifier of the connector involved in the job to be generated. |
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the scaffolding in language 1 (up to 16). |
| JobIdentifier optional | **Type:** String **Description:** For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |
| OldAlgorithm optional | **Type:** Boolean **Description:** Internal use. |



## Child Elements
* [AddTask](#addtask) (optional) Add a task before or after another in the job
* [CronTabExpression](#crontabexpression) (optional) Schedule the job
* [DoNotCreateJob](#donotcreatejob) (optional) Create only the tasks without the job
* [FulfillInternalWorkflowsPath](#fulfillinternalworkflowspath) (optional) Add the path of the json configuration for a connector with IsWorkflowProvisioning set to true
* [LinkDependTask](#linkdependtask) (optional) Link a child Task with a parent to not launch the child if the parent has finish with state warning
* [NoProvisioning](#noprovisioning) (optional) Avoid provisioning
* [NoSynchronization](#nosynchronization) (optional) Avoid collect
* [OpenIdIdentifier](#openididentifier) (optional) Add a Open Id to the job and the tasks

### AddTask


|Property|Details|
|---|---|
| Task required | **Type:** String **Description:** Identifier of the task to add |
| TaskToCompareWith required | **Type:** String **Description:** The identifier of the task before or after which the new task will be inserted |
| After <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |
| Before <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
| CopyOccurence <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** For Argument AddTask, Specify the Occurence to copy and add the Task in a specify Job. |
| Occurence <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Occurence of the TaskToCompare after or before which the task will be added |



### CronTabExpression


|Property|Details|
|---|---|
| CronTab required | **Type:** String **Description:** Represents the argument value. |
| CronTimeZone optional | **Type:** CronTimeZone **Description:** For Argument AddTask, Occurence of the TaskToCompare after or before which the task will be added. |



### DoNotCreateJob


### FulfillInternalWorkflowsPath


|Property|Details|
|---|---|
| ConnectorIdentifier required | **Type:** String **Description:** Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |
| Path required | **Type:** String **Description:** Represents the argument value. |



### LinkDependTask


|Property|Details|
|---|---|
| DependOn required | **Type:** String **Description:** identifier of parent Task |
| Task required | **Type:** String **Description:** Identifier of child Task |
| ChildOccurence <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** search the occurence x to link with the parent. |
| ParentOccurence <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Occurence of the parentTask which the task will be linked |



### NoProvisioning


### NoSynchronization


### OpenIdIdentifier


|Property|Details|
|---|---|
| Identifier required | **Type:** String **Description:** Identifier of the OpenId |




## Generated XML

Our example generates the following configuration:

```xml
<Job Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding" DisplayName_L1="10: Microsoft Entra ID - Synchronization Complete (scaffolding)" Agent="Local">
  <ExportTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_Export_MicrosoftEntraID_Complete_MicrosoftEntraIDExportFulfillment" DisplayName_L1="Microsoft Entra ID - Extract Changes" DisplayName_L2="Microsoft Entra ID - Extraction des modifications" Agent="Local" Connector="MicrosoftEntraID" Level="0" OpenIdClient="Job" Connection="MicrosoftEntraIDExportFulfillment" ContinueOnError="true" IgnoreCookieFile="true" />
  <PrepareSynchronizationTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_PrepareSynchronization_MicrosoftEntraID_Complete" DisplayName_L1="Microsoft Entra ID - Synchronization (agent side)" DisplayName_L2="Microsoft Entra ID - Synchronisation (côté agent)" Agent="Local" Connector="MicrosoftEntraID" Level="1" OpenIdClient="Job" SynchronizationMode="Complete">
    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Complete_Scaffolding_Export_MicrosoftEntraID_Complete_MicrosoftEntraIDExportFulfillment" />
  </PrepareSynchronizationTask>
  <SynchronizeTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_Synchronize_MicrosoftEntraID" DisplayName_L1="Microsoft Entra ID - Synchronization (server side)" DisplayName_L2="Microsoft Entra ID - Synchronisation (côté serveur)" Connector="MicrosoftEntraID" Level="2">
    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Complete_Scaffolding_PrepareSynchronization_MicrosoftEntraID_Complete" />
  </SynchronizeTask>
  <UpdateEntityPropertyExpressionsTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_UpdateEntityPropertyExpressions1" DisplayName_L1="Update Computed Properties" DisplayName_L2="Mise à jour des propriétés calculées" Level="3">
    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_User" />
  </UpdateEntityPropertyExpressionsTask>
  <ComputeCorrelationKeysTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_ComputeCorrelationKeys1_AllEntities" DisplayName_L1="Compute all Correlations" DisplayName_L2="Calcul des corrélations" Level="4">
    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_User" />
  </ComputeCorrelationKeysTask>
  <ComputeRoleModelTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_ComputeRoleModel1" DisplayName_L1="Apply the Role Model" DisplayName_L2="Evaluation du modèle de rôles" Level="5">
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_User" />
  </ComputeRoleModelTask>
  <ComputeRiskScoresTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_ComputeRiskScores1" DisplayName_L1="Compute Risk Scores" DisplayName_L2="Calcul des scores de risques" Level="6">
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_User" />
  </ComputeRiskScoresTask>
  <GenerateProvisioningOrdersTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_GenerateProvisioningOrders1" DisplayName_L1="Generate Provisioning Orders - Microsoft Entra ID" DisplayName_L2="Génération des ordres de provisioning - Microsoft Entra ID" Level="7">
    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_Guest" />
    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser" />
  </GenerateProvisioningOrdersTask>
  <FulfillTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_Fulfill1" DisplayName_L1="Fulfillment - Microsoft Entra ID" DisplayName_L2="Alimentation - Microsoft Entra ID" Agent="Local" Level="8" OpenIdClient="Job" Dirty="false" ContinueOnError="true">
    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Complete_Scaffolding_GenerateProvisioningOrders1" />
    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_Guest" />
    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser" />
  </FulfillTask>
  <UpdateParametersContextDisplayNamesTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_UpdateParametersContextDisplayNames" DisplayName_L1="Update of Parameters Context Display Names" DisplayName_L2="Mise à jour des noms des contextes de paramètres" Level="9" />
  <SendNotificationsTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_SendNotifications" DisplayName_L1="Send Notifications" DisplayName_L2="Envoi des notifications" Level="10">
    <TaskEntityType EntityType="Directory_Bot" />
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_User" />
  </SendNotificationsTask>
  <MaintainIndexesTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_MaintainIndexes" DisplayName_L1="SQL Index and Statistics Maintenance" DisplayName_L2="Maintenance des index SQL et des statistiques" Level="11" />
</Job>

```