---
title: "Set Up Incremental Synchronization"
description: "Set Up Incremental Synchronization"
sidebar_position: 60
---

# Set Up Incremental Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in
incremental mode.

### 1. Objective

Create a Synchronization job in incremental mode.

The synchronization Job can be created automatically by a scaffolding. It can create either a job
for each connector and for each agent (see :
[CreateConnectorSynchroIncremental](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchroincremental/index.md))
or a job for all connector for each agent (see :
[CreateAgentSynchroIncremental](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createinitializationjob/index.md))

In the following example the Synchronization job for the Connector "AD" will be created.

```

**<Connector Identifier="AD" DisplayName_L1="AD" Agent="Local" />**

```

### 2. Create the Export task

If a pre-treatment is needed, you must create an
[Export Task](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask/index.md).
Otherwise it is unnecessary. Choose the Export task corresponding to the connector.

All Export task have the ContinueOnError property. It is advisable to begin with the value of True
so that the task is not blocking for the Job.

Example :

```

<ExportTask Identifier="Export_AD_Delta" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)" DisplayName_L2="AD - Extraction (delta)" ContinueOnError="1"/>

```

### 3. Create the Prepare Synchronization task

Create the PrepareSynchronizationTask with the connector. Set `SynchronizationMode="Incremental"` ,
except for
[PrepareSynchronizationChangesTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md)
which doesn't need this parameter and LDAP connector who need complete mode.

If the job contain Exports for the same connector add the a link between the PrepareSynchronization
and the Export to check the final state of exports.

Example :

```

<PrepareSynchronizationTask Identifier="PrepareSynchronization_AD_Delta" Type="ActiveDirectory" DisplayName_L1="AD - Data Collect (incremental mode)" DisplayName_L2="AD - Collecte de donn�es (mode incr�mental)" Connector="AD" SynchronizationMode="Incremental" Agent="Local" OpenIdClient="Job">    <TaskDependsOnTask ParentTask="Export_AD_Delta"/></PrepareSynchronizationTask>

```

For more information on PrepareSynchronization task configuration :
[PrepareSynchronization Task](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md)

### 4. Create the Synchronization task

Create the SynchronizeTask corresponding to the PrepareSynchronization Task. If the
PrepareSynchronization Task is a
[PrepareSynchronizationChangesTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md),
then choose the
[Synchronization Change](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md),
else if it is
[PrepareSynchronizationActiveDirectoryTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md)
choose
[SynchronizationADDirSync](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md),
else choose
[SynchronizeTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md).

In Incremental mode, you must set the attribute `DoNotDeleteChanges="true"`

For the Incremental mode add link between PrepareSynchronization and Synchronization task for the
same connector. If the job contain Exports for the same connector add the a link between the
Synchronization and the Export to check the final state of exports.

Example :

```

<SynchronizeTask Identifier="Synchronization_AD_Incremental" Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">  <TaskDependsOnTask ParentTask="AD_Export_Complete"/>  <TaskDependsOnTask ParentTask="PrepareSynchronization_AD_Delta"/></SynchronizeTask>

```

The Synchronization Validation Task is not needed , since it is managed by the
[state machine](/docs/identitymanager/6.1/integration-guide/tasks-jobs/jobs/index.md).

For more information on Synchronization task configuration :
[Synchronization Task](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md)

### 5. Create the SetRecentlyModifiedFlag task

Create the Set Recently Modified Flag task.

Launching this is required only if at least one of the Synchronization in the job has made a change
in the database.

```

<SetRecentlyModifiedFlagTask Identifier="MarkDirty" DisplayName_L1="Set Recently Modified Flag" DisplayName_L2="Mise � jour du dirty">  <TaskDependsOnTask ParentTask="Synchronization_AD_Incremental"/></SetRecentlyModifiedFlagTask>

```

For more information on SetRecentlyModifiedFlag Task :
[SetRecentlyModifiedFlag Task](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/setrecentlymodifiedflagtask/index.md)

### 6. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given
entityTypes or all entitytypes. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllPropertiesWithDirty" DisplayName_L1="Overall - Computed Properties Refresh (With dirty)" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es (avec dirty)" Dirty="true">  <TaskDependsOnTask ParentTask="MarkDirty"/>  <TaskEntityType Identifier="AD_Entry"/></UpdateEntityPropertyExpressionsTask>

```

For more information on UpdateEntityPropertyExpressions Task configuration :
[UpdateEntityPropertyExpressionsTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/updateentitypropertyexpressionstask/index.md)

### 7. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all
entityTypes. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<ComputeCorrelationKeysTask Identifier="All_CorrelationKeysWithDirty" DisplayName_L1="All Correlation Keys (With dirty)" Dirty="true">  <TaskEntityType Identifier="AD_Entry"/>  <TaskDependsOnTask ParentTask="MarkDirty"/></ComputeCorrelationKeysTask>

```

For more information about the Compute Role Model correlation keys task configuration:
[ComputeCorrelationKeysTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computecorrelationkeystask/index.md)

### 8. Create the ComputeRoleModel task

Create the ComputeRoleModely Task to create the provisioning order. Set the attribute Dirty :
`Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<ComputeRoleModelTask Identifier="Directory_ComputeRoleModel_WithDirty" DisplayName_L1="Directory - Provisioning Orders Generation (with dirty)" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning (avec dirty)" Dirty="true">  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="Directory_Guest"/>  <TaskDependsOnTask ParentTask="MarkDirty"/></ComputeRoleModelTask>

```

The TaskEntityType elements correspond to the sourceEntityTypes in the
[ResourceTypes](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)
which have TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration:
[ComputeRoleModelTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md)

### 9. Create the GenerateProvisioningOrder task

Create the GenerateProvisioningOrder task. The GenerateProvisioningOrder task will recover all
resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning
orders. The Connector is the same as the connector set in the PrepareSynchronization.

Example :

```

<GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>

```

For more information on provisioning task configuration:
[GenerateProvisioningOrdersTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/generateprovisioningorderstask/index.md)

### 10. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property. It is advisable to begin with the value of
True so that the task is not blocking for the Job. The fulfill Tasks are directly depanding of
GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The
fulfillment must be not launch in the job.

```

<FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1">  <TaskDependsOnTask ParentTask="AD_Provisioning"/></FulfillTask>

```

### 11. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more
[resource classification rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourceclassificationrule/index.md)
are configured for the connector. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

```

<UpdateClassificationTask Identifier="AD_Update_ClassificationWithDirty" DisplayName_L1="AD - Update Users Classification (With Dirty)" DisplayName_L2="AD - Mise � jour de la classification des comptes (avec Dirty)" Dirty="1">  <TaskEntityType EntityType="AD_Entry"/>  <TaskDependsOnTask ParentTask="MarkDirty"/></UpdateClassificationTask>

```

For more information on Update Classification Task :
[UpdateClassificationTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/updateclassificationtask/index.md)

### 12. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more
[profile rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/access-control/profilerulecontext/index.md)
are configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the
state warning or if it was not started or no processing has been performed, launching this task
becomes useless.

```

<SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">  <TaskEntityType EntityType="AD_Entry"/>  <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  <TaskDependsOnTask ParentTask="AD_Fulfill"/></SetInternalUserProfilesTask>

```

For more information on SetInternalUserProfiles Task configuration :
[SetInternalUserProfilesTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/setinternaluserprofilestask/index.md)

### 13. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```

<Job Identifier="Job_AD_Incremental" DisplayName_L1="AD Job's (Incremental mode)" DisplayName_L2="Job de l'AD (mode incremental)"
Agent="Local">  <ExportTask Identifier="Export_AD_Delta" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)" DisplayName_L2="AD - Extraction (delta)" ContinueOnError="1"/>  <SynchronizeTask Identifier="Synchronization_AD_Incremental" Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">    <TaskDependsOnTask ParentTask="AD_Export_Complete"/>    <TaskDependsOnTask ParentTask="PrepareSynchronization_AD_Delta"/>  </SynchronizeTask>  <SetRecentlyModifiedFlagTask Identifier="MarkDirty" DisplayName_L1="Set Recently Modified Flag" DisplayName_L2="Mise � jour du dirty">    <TaskDependsOnTask ParentTask="Synchronization_AD_Incremental"/>  </SetRecentlyModifiedFlagTask>  <UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllPropertiesWithDirty" DisplayName_L1="Overall - Computed Properties Refresh (With dirty)" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es (avec dirty)" Dirty="true">    <TaskDependsOnTask ParentTask="MarkDirty"/>    <TaskEntityType Identifier="AD_Entry"/>  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="All_CorrelationKeysWithDirty" DisplayName_L1="All Correlation Keys (With dirty)" Dirty="true">    <TaskEntityType Identifier="AD_Entry"/>    <TaskDependsOnTask ParentTask="MarkDirty"/>  </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="Directory_ComputeRoleModel_WithDirty" DisplayName_L1="Directory - Provisioning Orders Generation (with dirty)" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning (avec dirty)" Dirty="true">    <TaskEntityType EntityType="Directory_User"/>    <TaskEntityType EntityType="Directory_Guest"/>    <TaskDependsOnTask ParentTask="MarkDirty"/>  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>  <FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1">    <TaskDependsOnTask ParentTask="AD_Provisioning"/>  </FulfillTask>  <UpdateClassificationTask Identifier="AD_Update_ClassificationWithDirty" DisplayName_L1="AD - Update Users Classification (With Dirty)" DisplayName_L2="AD - Mise � jour de la classification des comptes (avec Dirty)" Dirty="1">    <TaskEntityType EntityType="AD_Entry"/>    <TaskDependsOnTask ParentTask="MarkDirty"/>  </UpdateClassificationTask>  <SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">    <TaskEntityType EntityType="AD_Entry"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>    <TaskDependsOnTask ParentTask="AD_Fulfill"/>  </SetInternalUserProfilesTask></Job>

```

The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration :
[Jobs](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/job/index.md)
