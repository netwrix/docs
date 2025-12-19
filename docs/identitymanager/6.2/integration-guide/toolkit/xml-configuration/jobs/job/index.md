---
title: "Job"
description: "Job"
sidebar_position: 10
---

# Job

A job is a succession of tasks, to be launched and potentially scheduled.

After launching a job, its progress information will be inserted in the UJ_Job Instances table.

## Examples

The following example creates a job made of two tasks that apply role mappings, the first for the AD
connector, the second for SAP. Launching this job means launching both tasks successively.

The launch order is induced by the reading from top to bottom of all tasks in the job.

                    ```

<Job Identifier="ApplyRoleMappings" DisplayName_L1="10: Generate Roles/Rules" >
<BuildRoleModelTask Identifier="AD_ApplyRoleMappings" Connector="AD" DisplayName_L1="AD - Generate Roles/Rules" />
<BuildRoleModelTask Identifier="SAP_ApplyRoleMappings" Connector="SAP" DisplayName_L1="SAP - Generate Roles/Rules" /></Job>

````


### Task override

An existing task can be called with an ```Override``` suffix in order to launch the task, but with slight changes in its properties. Then the override task must be configured with the identifier of the original task and the properties that differ from the original task.

Suppose that after configuring a synchronization job in complete mode, we want to configure the exact same one in incremental mode.

As the incremental mode is configured via ```Dirty``` set to ```1```, this property is the only one to change to switch from complete mode to incremental mode.

The following example creates a task ```UpdateClassification``` to be used in the AD synchronization job in complete mode. Then, instead of creating a second task for the incremental mode, we choose to configure the incremental job as follows.

                    ```

<UpdateClassificationTask Identifier="UpdateClassification" DisplayName_L1="AD - Users Classification">  <TaskEntityType EntityType="AD_Entry"/></UpdateClassificationTask><Job Identifier="AD_Synchronization_Delta" DisplayName_L1="10: AD - Synchronization (delta)" Agent="Local">  ...
  <UpdateClassificationTaskOverride Identifier="UpdateClassification" Dirty="1">
</Job>

````

### Dependent tasks

The following example creates a job where the task `Microsoft Entra ID - Data Collect` is launched
after `Microsoft Entra ID - Extraction` only if `Microsoft Entra ID - Extraction` produces an output
and does not end up blocked or in an error state.

                    ```

<Job Identifier="AzureAD_Synchronization" DisplayName_L1="10: Microsoft Entra ID (formerly Microsoft Azure AD) - Synchronization" Agent="Local">
<ExportTask Identifier="AzureAD_Synchro" Agent="Local" Connection="AzureAD_Export_Fulfillment" OpenIdClient="Job" DisplayName_L1="Microsoft Entra ID - Extraction" ContinueOnError="1"/>
<PrepareSynchronizationTask Type="Changes" DisplayName_L1="Microsoft Entra ID - Data Collect" Connector="AzureAD" Agent="Local" OpenIdClient="Job">
<TaskDependsOnTask ParentTask="AzureAD_Synchro"/> </PrepareSynchronizationTask> ... </Job>

````


Most synchronization tasks are dependant on one another like this. This way, an error in a synchronization task will cut short the rest of the synchronization tasks. But it does not stop the other tasks in the job, for example the synchronization of another connector, or tasks that are independent from synchronization.

### Complete job

The following example shows a typical configuration of the complete job.

                    ```

<Job Identifier="SynchroAllConnectorComplete" DisplayName_L1="Synchronization Daily (Complete Mode)" Agent="Local">  <Step Identifier="ExportADWithIgnoreCookie"/>  <Step Identifier="AD_PrepareSynchronizationComplete"/>  <Step Identifier="AD_Synchronization"/>  <Step Identifier="Export_MicrosoftEntraIDWithIgnoreCookie"/>  <Step Identifier="MicrosoftEntraID_PrepareSynchronization"/>  <Step Identifier="MicrosoftEntraID_Synchronization"/>  <Step Identifier="Export_LDAPEntry"/>  <Step Identifier="Export_LDAPMember"/>  <Step Identifier="LDAP_PrepareSynchronization"/>  <Step Identifier="LDAP_Synchronization"/>  <Step Identifier="SAB_PrepareSynchronization"/>  <Step Identifier="SAB_Synchronization"/>  <Step Identifier="HR_PrepareSynchronization"/>  <Step Identifier="HR_Synchronization"/>  <Step Identifier="Directory_PrepareSynchronizationChange"/>  <Step Identifier="Directory_SynchronizationChange"/>  <Step Identifier="Job_Recertification_Start"/>  <Step Identifier="Recertification_MarkDirty"/>  <Step Identifier="ComputeRoleModelSynchroDaily"/>  <Step Identifier="LDAP_Provisioning"/>  <Step Identifier="MicrosoftEntraID_Provisioning"/>  <Step Identifier="AD_Fulfill"/>  <Step Identifier="LDAP_Fulfill"/>  <Step Identifier="MicrosoftEntraID_Fulfill"/>  <Step Identifier="AD_Fulfill"/>  <Step Identifier="Fulfill_Workflow_Directory"/>  <Step Identifier="All_ComputeAllAssignedProfiles"/></Job>

````

## Properties

| Property                                 | Details                                                                                                                                                                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent optional                           | **Type** Int64 **Description** Identifier of the agent on which the job will be launched. **Note:** when not specified, the job is to be launched on the server. **Warning:** all tasks in the job must be launched on the same agent or on the server. |
| CronTabExpression optional               | **Type** String **Description** Scheduling expressed using the [crontab syntax](https://docs.microsoft.com/azure/azure-functions/functions-bindings-timer?tabs=csharp#crontab-syntax).                                                                  |
| CronTimeZone default value: 0            | **Type** CronTimeZone **Description** Time zone used to compute the next occurrences according to the given cron expression. `0` - UTC `1` - ServerTime                                                                                                 |
| DisplayName_L1 required                  | **Type** String **Description** Display name of the job in language 1 (up to 16).                                                                                                                                                                       |
| Identifier required                      | **Type** String **Description** Unique identifier of the job.                                                                                                                                                                                           |
| IsConnectorJob default value: false      | **Type** Boolean **Description** Indicates that the job is specific to the connector configuration screen.                                                                                                                                              |
| IsIncremental default value: false       | **Type** Boolean **Description** Defines if a job is in incremental mode.                                                                                                                                                                               |
| IsInitializationJob default value: false | **Type** Boolean **Description** Indicates that the job is an initialization job.                                                                                                                                                                       |
| LogLevel default value: None             | **Type** LogLevel **Description** Level of details that will be displayed in the logger. Possible values are: `0` - Trace `1` - Debug `2` - Information `3` - Warning `4` - Error `5` - Critical `6` - None                                             |
| UserStartDenied default value: false     | **Type** Boolean **Description** `true` to deny the manual launch of the job.                                                                                                                                                                           |

## Child Element: Step

A step is simply an easy way to use an existing task in a job.

A job can be configured with as many steps as needed.

### Examples

The basic example of a job is equivalent to the following:

                    ```

<BuildRoleModelTask Identifier="AD_ApplyRoleMappings" Connector="AD" DisplayName_L1="AD - Generate Roles/Rules" /><BuildRoleModelTask Identifier="SAP_ApplyRoleMappings" Connector="SAP" DisplayName_L1="SAP - Generate Roles/Rules" /><Job Identifier="AD_Synchronization_Delta" DisplayName_L1="10: AD - Syncronization (delta)" Agent="Local">
<Step Identifier="AD_ApplyRoleMappings"> <Step Identifier="SAP_ApplyRoleMappings"></Job>

````


### Properties

| Property | Details |
| --- | --- |
| Level   default value: -1 | __Type__    Int32   __Description__   Grouping level of the tasks within the job. When executing a job, Identity Manager will launch simultaneously the tasks of a same ```Level```. Level-2 tasks are not launched before all level-1 tasks are achieved. |
| Task   required | __Type__    Int64   __Description__   Id of the task |
````
