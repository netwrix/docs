---
title: "Create Connector Synchro Complete"
description: "Create Connector Synchro Complete"
sidebar_position: 60
---

# Create Connector Synchro Complete

This scaffolding generates a synchronization job (in Complete mode) for the given connector.

The tasks created in the Scaffoldings are sorted by level. The levels are visible via the tools:
Usercube-Get-JobSteps.exe

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<CreateConnectorSynchroComplete DisplayName_L1="10: Microsoft Entra ID (formerly Azure Active Directory) - Synchronization Complete (scaffolding)" Connector="MicrosoftEntraID" JobIdentifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding"/>
```

## Properties

| Property                | Type   | Description                                                                                                    |
| ----------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| Connector required      | String | Identifier of the connector involved in the job to be generated.                                               |
| DisplayName_L1 optional | String | Display name of the scaffolding in language 1 (up to 16).                                                      |
| JobIdentifier optional  | String | For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |

## Child Elements

- AddTask (optional) — Add a task before or after another in the job
- CronTabExpression (optional) — Schedule the job
- FormatPropertiesInResource (optional) — Converts string properties to their corresponding types in
  the 'Resource' section of the provisioning order
- FulfillInternalWorkflowsPath (optional) — Add the path of the json configuration for a connector
  with IsWorkflowProvisioning set to true
- LinkDependTask (optional) — Link a child Task with a parent to not launch the child if the parent
  has finish with state warning
- NoProvisioning (optional) — Avoid provisioning
- NoSynchronization (optional) — Avoid collect
- OpenIdIdentifier (required) — Add a OpenID to the job and the tasks

### AddTask

:::note
The old algorithm is no longer supported, so manual task addition is no longer required.
If an exceptional situation requres the creation of a task note that the CopyOccurence must be
deleted from the code.
:::


**Example**

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
ComputeRoleModelTask Dirty="1" DisplayName_L1="dfedf" Identifier="AddedTask">
<TaskEntityType EntityType="Directory_User"/>
</ComputeRoleModelTask>
<CreateAgentSynchroIncremental JobIdentifier="Job_Fast"
  DisplayName_L1="91: Background Sync/Provisioning Job"
  DisplayName_L2="91: Tâche de fond de Synchro/provisioning" Agent="Default">
<OpenIdIdentifier Identifier="Job" />
<AddTask Task="AddedTask" TaskToCompareWith="Fulfill" Before="1" Occurence="2" />
<AddTask Task="AddedTask" TaskToCompareWith="AD_Incremental_ADExportFulfillment" Before="1"/>
</CreateAgentSynchroIncremental>
```

The property list for the AddTask is the following:

| Property                    | Type    | Description                                                                                                |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| Task required               | String  | Identifier of the task to add.                                                                             |
| TaskToCompareWith required  | String  | The identifier of the task before or after which the new task will be inserted                             |
| After default value: false  | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith.  |
| Before default value: false | Boolean | For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |

### CronTabExpression

| Property              | Type         | Description                                                                                        |
| --------------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| CronTab required      | String       | Represents the argument value.                                                                     |
| CronTimeZone optional | CronTimeZone | For Argument AddTask, Occurence of the TaskToCompare after or before which the task will be added. |

### FulfillInternalWorkflowsPath

| Property                     | Type   | Description                                                                                                                                                                                    |
| ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ConnectorIdentifier required | String | Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |
| Path required                | String | Represents the argument value.                                                                                                                                                                 |

### LinkDependTask

| Property                         | Type   | Description                                                |
| -------------------------------- | ------ | ---------------------------------------------------------- |
| DependOn required                | String | Identifier of parent Task.                                 |
| Task required                    | String | Identifier of child Task.                                  |
| ChildOccurence default value: 0  | Int32  | Search the occurrence x to link with the parent.           |
| ParentOccurence default value: 0 | Int32  | Occurrence of the parentTask which the task will be linked |

### OpenIdIdentifier

| Property            | Type   | Description               |
| ------------------- | ------ | ------------------------- |
| Identifier required | String | Identifier of the OpenId. |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
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
  <SendRoleModelNotificationsTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_SendRoleModelNotifications" DisplayName_L1="Send Role Model Notifications" DisplayName_L2="Envoi des notifications de modèle de rôles" Level="10">
    <TaskEntityType EntityType="Directory_Bot" />
    <TaskEntityType EntityType="Directory_Guest" />
    <TaskEntityType EntityType="Directory_User" />
  </SendRoleModelNotificationsTask>
  <MaintainIndexesTask Identifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding_MaintainIndexes" DisplayName_L1="SQL Index and Statistics Maintenance" DisplayName_L2="Maintenance des index SQL et des statistiques" Level="11" />
</Job>
```
