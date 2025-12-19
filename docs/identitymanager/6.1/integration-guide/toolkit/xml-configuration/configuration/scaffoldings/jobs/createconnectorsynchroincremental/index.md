---
title: "CreateConnectorSynchroIncremental"
description: "CreateConnectorSynchroIncremental"
sidebar_position: 70
---

# CreateConnectorSynchroIncremental

This scaffolding generates a synchronization job (in Incremental mode) for the given connector.

The tasks created in the Scaffoldings are sorted by level. The levels are visible via the tools:
Usercube-Get-JobSteps.exe

## Examples

                    ```

  <CreateConnectorSynchroIncremental DisplayName_L1="10: Microsoft Entra ID (formerly Microsoft Azure AD) - Synchronization Incremental (scaffolding)" Connector="MicrosoftEntraID" JobIdentifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding"/>

````


## Properties

| Property | Details |
| --- | --- |
| Connector   required | __Type__    String   __Description__   Identifier of the connector involved in the job to be generated. |
| DisplayName_L1   optional | __Type__    String   __Description__   Display name of the scaffolding in language 1 (up to 16). |
| JobIdentifier   optional | __Type__    String   __Description__   For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |
| OldAlgorithm   optional | __Type__    Boolean   __Description__   Internal use. |

## Child Elements

- [AddTask](#addtask) (optional) Add a task before or after another in the job
- [CronTabExpression](#crontabexpression) (optional) Schedule the job
- [DoNotCreateJob](#donotcreatejob) (optional) Create only the tasks without the job
- [FulfillInternalWorkflowsPath](#fulfillinternalworkflowspath) (optional) Add the path of the json configuration for a connector with IsWorkflowProvisioning set to true
- [LinkDependTask](#linkdependtask) (optional) Link a child Task with a parent to not launch the child if the parent has finish with state warning
- [NoProvisioning](#noprovisioning) (optional) Avoid provisioning
- [NoSynchronization](#nosynchronization) (optional) Avoid collect
- [OpenIdIdentifier](#openididentifier) (optional) Add a Open Id to the job and the tasks

### AddTask

| Property | Details |
| --- | --- |
| Task   required | __Type__    String   __Description__   Identifier of the task to add |
| TaskToCompareWith   required | __Type__    String   __Description__   The identifier of the task before or after which the new task will be inserted |
| After   default value: false | __Type__    Boolean   __Description__   For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |
| Before   default value: false | __Type__    Boolean   __Description__   For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
| CopyOccurence   default value: 0 | __Type__    Int32   __Description__   For Argument AddTask, Specify the Occurence to copy and add the Task in a specify Job. |
| Occurence   default value: 0 | __Type__    Int32   __Description__   Occurence of the TaskToCompare after or before which the task will be added |

### CronTabExpression

| Property | Details |
| --- | --- |
| CronTab   required | __Type__    String   __Description__   Represents the argument value. |
| CronTimeZone   optional | __Type__    CronTimeZone   __Description__   For Argument AddTask, Occurence of the TaskToCompare after or before which the task will be added. |

### DoNotCreateJob

### FulfillInternalWorkflowsPath

| Property | Details |
| --- | --- |
| ConnectorIdentifier   required | __Type__    String   __Description__   Identifier of the connector involved in the following arguments: ```NoConnectorSynchronization```; ```NoConnectorProvisioning```; ```NotUsed```; ```FulfillInternalWorkflowsPath```; ```PrincipalDataConnector```. |
| Path   required | __Type__    String   __Description__   Represents the argument value. |

### LinkDependTask

| Property | Details |
| --- | --- |
| DependOn   required | __Type__    String   __Description__   identifier of parent Task |
| Task   required | __Type__    String   __Description__   Identifier of child Task |
| ChildOccurence   default value: 0 | __Type__    Int32   __Description__   search the occurence x to link with the parent. |
| ParentOccurence   default value: 0 | __Type__    Int32   __Description__   Occurence of the parentTask which the task will be linked |

### NoProvisioning

### NoSynchronization

### OpenIdIdentifier

| Property | Details |
| --- | --- |
| Identifier   required | __Type__    String   __Description__   Identifier of the OpenId |

## Generated XML

Our example generates the following configuration:

                    ```

<Job Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding" DisplayName_L1="10: Microsoft Entra ID - Synchronization Incremental (scaffolding)" Agent="Local" IsIncremental="true">  <ExportTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_Export_MicrosoftEntraID_Incremental_MicrosoftEntraIDExportFulfillment" DisplayName_L1="Microsoft Entra ID - Extract Changes" DisplayName_L2="Microsoft Entra ID - Extraction des modifications" Agent="Local" Connector="MicrosoftEntraID" Level="0" OpenIdClient="Job" Connection="MicrosoftEntraIDExportFulfillment" ContinueOnError="true" />  <PrepareSynchronizationTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_PrepareSynchronizationChanges_MicrosoftEntraID_Incremental" DisplayName_L1="Microsoft Entra ID - Incremental Synchronization (agent side)" DisplayName_L2="Microsoft Entra ID - Synchronisation incr�mentale (c�t� agent)" Agent="Local" Connector="MicrosoftEntraID" Level="1" OpenIdClient="Job" SynchronizationMode="Incremental" Type="Changes">    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_Export_MicrosoftEntraID_Incremental_MicrosoftEntraIDExportFulfillment" />  </PrepareSynchronizationTask>  <SynchronizeTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_SynchronizeChanges_MicrosoftEntraID_DoNotDeleteChanges" DisplayName_L1="Microsoft Entra ID - Synchronization (changes server side)" DisplayName_L2="Microsoft Entra ID - Synchronisation (changements c�t� serveur)" Connector="MicrosoftEntraID" Level="2" Type="Changes" DoNotDeleteChanges="true">    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_PrepareSynchronizationChanges_MicrosoftEntraID_Incremental" />  </SynchronizeTask>  <SetRecentlyModifiedFlagTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_SetRecentlyModifiedFlag" DisplayName_L1="Tag Modified Objects" DisplayName_L2="Marquage des objets modifi�s" Level="3">    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_SynchronizeChanges_MicrosoftEntraID_DoNotDeleteChanges" />  </SetRecentlyModifiedFlagTask>  <UpdateEntityPropertyExpressionsTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_UpdateEntityPropertyExpressions1_WithDirty" DisplayName_L1="Update Computed Properties" DisplayName_L2="Mise � jour des propri�t�s calcul�es" Level="4" Dirty="true">    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />    <TaskEntityType EntityType="Directory_Guest" />    <TaskEntityType EntityType="Directory_User" />  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_ComputeCorrelationKeys1_AllEntities_WithDirty" DisplayName_L1="Compute all Correlations" DisplayName_L2="Calcul des corr�lations" Level="5" Dirty="true">    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_SetRecentlyModifiedFlag" />    <TaskEntityType EntityType="MicrosoftEntraID_DirectoryObject" />    <TaskEntityType EntityType="Directory_Guest" />    <TaskEntityType EntityType="Directory_User" />  </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_ComputeRoleModel1_WithDirty" DisplayName_L1="Apply the Role Model" DisplayName_L2="Evaluation du mod�le de r�les" Level="6" Dirty="true">    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_SetRecentlyModifiedFlag" />    <TaskEntityType EntityType="Directory_Guest" />    <TaskEntityType EntityType="Directory_User" />  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_GenerateProvisioningOrders1" DisplayName_L1="Generate Provisioning Orders - Microsoft Entra ID" DisplayName_L2="G�n�ration des ordres de provisioning - Microsoft Entra ID" Level="7">    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_Guest" />    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser" />  </GenerateProvisioningOrdersTask>  <FulfillTask Identifier="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_Fulfill1" DisplayName_L1="Fulfillment - Microsoft Entra ID" DisplayName_L2="Alimentation - Microsoft Entra ID" Agent="Local" Level="8" OpenIdClient="Job" Dirty="true" ContinueOnError="true">    <TaskDependsOnTask ParentTask="MicrosoftEntraID_Synchronize_Incremental_Scaffolding_GenerateProvisioningOrders1" />    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_Guest" />    <TaskResourceType ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser" />  </FulfillTask></Job>

````
