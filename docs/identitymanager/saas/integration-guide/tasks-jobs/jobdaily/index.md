---
title: "Set up Complete Synchronization"
description: "Set up Complete Synchronization"
sidebar_position: 70
---

# Set up Complete Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in complete
mode.

### 1. Objective

Create a Synchronization Job in complete mode. This job is used to check for and fix differences in
the resources data after the incremental synchronizations.

The synchronization Job can be created automatically by a scaffolding. It can create either a job
for each connector and for each agent (see the
[Create Connector Synchro Complete](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index.md)
topic for additional information) or a job for all connectors for each agent (see the
[Create Agent Synchro Complete](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchrocomplete/index.md)
topic for additional information).

In the following example the Synchronization job for the Connector "AD" will be created.

```

**<Connector Identifier="AD" DisplayName_L1="AD" Agent="Local" />**

```

### 2. Create the Export task

If a pre-treatment is needed, you must create an
[Export Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask/index.md). Otherwise
it is unnecessary. Choose the Export task corresponding to the connector. If the Export uses the
incremental mode, set IgnoreCookieFile to true.

All Export task have the ContinueOnError property. It is advisable to begin with the value of True
so that the task is not blocking for the Job.

Example :

```

<ExportTask Identifier="AD_Export_Complete" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="Export AD" DisplayName_L2="Export AD" ContinueOnError="1" IgnoreCookieFile="1"/>

```

### 3. Create the Prepare Synchronization task

Create the Prepare Synchronization Task with the connector. Set `SynchronizationMode="Complete"` ,
except for
[Prepare Synchronization Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md)
which doesn't need this parameter. If it is a Synchronization Changes, or ActiveDirectory, you must
precise it with the `Type` attribute.

If the job contain Exports for the same connector add the a link between the PrepareSynchronization
and the Export to check the final state of exports.

Example :

```

<PrepareSynchronizationTask Type="ActiveDirectory" DisplayName_L1="AD - Prepare Synchronization (complete Mode)" DisplayName_L2="AD - Pr�paration de la synchronisation (mode complet)" Connector="AD" SynchronizationMode="Complete" Agent="Local" OpenIdClient="Job">  <TaskDependsOnTask ParentTask="AD_Export_Complete"/></PrepareSynchronizationTask>

```

See the
[Prepare Synchronization Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md)
for additional information on the PrepareSynchronization task configuration.

### 4. Create the Synchronization task

Create the SynchronizeTask with the same `Type` attribute as the PrepareSynchronizationTask. For the
complete mode the parameter DoNotDeleteChanges must not be present in the task configuration.

If the job contain Exports for the same connector add the a link between the Synchronization and the
Export to check the final state of exports.

Example :

```

<SynchronizeTask Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">  <TaskDependsOnTask ParentTask="AD_Export_Complete"/></SynchronizeTask>

```

The Synchronization Validation Task is not needed , since it is managed by the
[Jobs](/docs/identitymanager/saas/integration-guide/tasks-jobs/jobs/index.md) state machine.

For more information on Synchronization task configuration :
[Synchronize Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md)

### 5. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given
entityTypes or all entityTypes.

Example :

```

<UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllProperties" DisplayName_L1="Overall - Computed Properties Refresh" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es">    <TaskEntityType Identifier="AD_Entry"/></UpdateEntityPropertyExpressionsTask>

```

For more information on UpdateEntityPropertyExpressions Task configuration :
[UpdateEntityPropertyExpressionsTask](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/updateentitypropertyexpressionstask/index.md)

### 6. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all
entityTypes.

Example :

```

**<ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" >	<TaskEntityType Identifier="AD_Entry"/></ComputeCorrelationKeysTask>**

```

For more information about the ComputeCorrelationKey task configuration:
[Compute Correlation Keys Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computecorrelationkeystask/index.md)

### 7. Create the ComputeRoleModel task

Create the ComputeRoleModel Task to create the provisioning order.

Example :

```

<ComputeRoleModelTask Identifier="Directory_ComputeRoleModel" DisplayName_L1="Directory - Provisioning Orders Generation" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning">  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="Directory_Guest"/></ComputeRoleModelTask>

```

The TaskEntityType elements correspond to the sourceEntityTypes in the
[Resource Type](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) which have
TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration:
[Compute Role Model Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md)

### 8. Create the GenerateProvisioningOrder task

Create the GenerateProvisioningOrder task. The GenerateProvisioningOrder task will recover all
resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning
orders. The Connector is the same as the connector set in the PrepareSynchronization. The
ForceProvisioning parameter must not be set to true. It's the job state machine who launch this mode
if necessary.

Example :

```

<GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>

```

For more information on GenerateProvisioningOrder task configuration:
[Generate Provisioning Orders Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/generateprovisioningorderstask/index.md).

### 9. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property. It is advisable to begin with the value of
True so that the task is not blocking for the Job. The fulfill Tasks are directly depanding of
GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The
fulfillment must be not launch in the job.

```

<FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1">  <TaskDependsOnTask ParentTask="AD_Provisioning"/></FulfillTask>

```

### 10. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more
[Resource Classification Rule](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourceclassificationrule/index.md)
are configured for the connector.

```

<UpdateClassificationTask Identifier="AD_Update_Classification" DisplayName_L1="AD - Update Users Classification" DisplayName_L2="AD - Mise � jour de la classification des comptes" >  <TaskEntityType EntityType="AD_Entry"/></UpdateClassificationTask>

```

For more information on Update Classification Task :
[Update Classification Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/updateclassificationtask/index.md)

### 11. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more
[Profile Rule Context](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/profilerulecontext/index.md)
are configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the
state warning or if it was not started or no processing has been performed, launching this task
becomes useless.

```

<SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">  <TaskEntityType EntityType="AD_Entry"/>  <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  <TaskDependsOnTask ParentTask="AD_Fulfill"/></SetInternalUserProfilesTask>

```

For more information on SetInternalUserProfiles Task configuration :
[Set Internal User Profiles Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/setinternaluserprofilestask/index.md)

### 12. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```

<Job Identifier="Job_AD_Complete" DisplayName_L1="AD Job's (Complete mode)" DisplayName_L2="Job de l'AD (mode complet)" Agent="Local">  <ExportTask Identifier="AD_Export_Complete" Agent="Local" Connection="AD_Export_Delta" OpenIdClient="Job" DisplayName_L1="Export AD" DisplayName_L2="Export AD"/>  <PrepareSynchronizationTask Type="ActiveDirectory" DisplayName_L1="AD - Prepare Synchronization (complete Mode)" DisplayName_L2="AD - Pr�paration de la synchronisation (mode complet)" Connector="AD" SynchronizationMode="Complete" Agent="Local" OpenIdClient="Job">    <TaskDependsOnTask ParentTask="AD_Export_Complete"/>  </PrepareSynchronizationTask>  <SynchronizeTask Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">    <TaskDependsOnTask ParentTask="AD_Export_Complete"/>  </SynchronizeTask>  <UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllProperties" DisplayName_L1="Overall - Computed Properties Refresh" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es">    <TaskEntityType Identifier="AD_Entry"/>  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" >	<TaskEntityType Identifier="AD_Entry"/>  </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="Directory_ComputeRoleModel" DisplayName_L1="Directory - Provisioning Orders Generation" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning">    <TaskEntityType EntityType="Directory_User"/>    <TaskEntityType EntityType="Directory_Guest"/>  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>  <FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local"  ContinueOnError="1">    <TaskDependsOnTask ParentTask="AD_Provisioning"/>  </FulfillTask>  <UpdateClassificationTask Identifier="AD_Update_Classification" DisplayName_L1="AD - Update Users Classification" DisplayName_L2="AD - Mise � jour de la classification des comptes" >    <TaskEntityType EntityType="AD_Entry"/>  </UpdateClassificationTask>  <SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">    <TaskEntityType EntityType="AD_Entry"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>    <TaskDependsOnTask ParentTask="AD_Fulfill"/>  </SetInternalUserProfilesTask>  <SendRoleModelNotificationsTask DisplayName_L1="Send Notification" DisplayName_L2="Envoie des Notifications">    <TaskEntityType EntityType="AD_Entry"/>  </SendRoleModelNotificationsTask></Job>

```

The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration :
[Job](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/job/index.md)
