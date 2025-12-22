---
title: "Build Efficient Jobs"
description: "Build Efficient Jobs"
sidebar_position: 30
---

# Build Efficient Jobs

This topic shows how to build efficient jobs by minimizing their costs.

:::note
The rules below must be followed when creating a new job, otherwise the frequent launch of
this scheduled job will trigger errors in a SaaS environment.
:::


### Prerequisites

In order to successfully launch a frequent job (defined as a job called more than once an hour) the
following requirements need to be met:

- Synchronize / Export Task in incremental mode
- The UpdateEntityPropertyExpressions /ComputeCorrelationKeys/ComputeRoleModel tasks do have the
  SetRecentlyModifiedFlag set to true
- The ComputeCorrelationKeys/UpdateEntityPropertyExpressions tasks are computed on a subset of
  Entity Types (not all Entity Types at once)
- UpdateEntityPropertyExpressions/ComputeCorrelationKeys/ComputeRole tasks are not duplicated
- SetInternalUserProfiles/ActivityInstanceActor tasks are not configured to launch

## Rule 1: Use Scaffoldings

Identity Manager provides scaffoldings to simplify XML configuration by generating complex XML
fragments. See the
[Scaffoldings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/index.md) topic for
additional information.

Most jobs are included in job scaffoldings, thus configured in the most optimal way. So start by
using scaffoldings to build jobs. See the
[Jobs](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/index.md) topic for
additional information.

For example, the creation from scratch of a job to perform a complete synchronization for a
connector will be tedious. Instead, use Identity Manager's scaffolding, like in the following
example concerning the Microsoft Entra ID (formerly Microsoft Azure AD) connector. Instead of a few
dozens of lines, write only the following:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                      
<CreateConnectorSynchroComplete DisplayName_L1="10: Microsoft Entra ID - Synchronization Complete (scaffolding)" Connector="MicrosoftEntraID" JobIdentifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding"/>
                   
```

See
the[Create Connector Synchro Complete](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index.md)for
additional information.

## Rule 2: Compute Only What's Necessary

**Execute the tasks on the right entity types**

Many tasks can be executed either on all entity types, or on a given list of entity types.

Make sure to configure the tasks so that they are executed only on the relevant entity types, not
all of them by default.

For example, instead of using AllEntityType set to true, write the following:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                        
<ComputeCorrelationKeysTask DisplayName_L1="Directory User - Update the correlation keys" >
  <TaskEntityType EntityType="Directory_UserRecord"/>  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="HR_Person"/>
</ComputeCorrelationKeysTask>
                    
```

**Launch incremental tasks rather than complete**

When a task is supposed to be executed on changes only, then there is no use executing the task in
complete mode.

Make the relevant tasks incremental by flagging the resources that were recently modified. See the
[Configure an Incremental Job](/docs/identitymanager/6.2/integration-guide/tasks-jobs/configure-incremental-job/index.md) topic for additional information.

For example, instead of computing the role model as if it had never been computed before, apply only
the changes by writing the following:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                        
<ComputeRoleModelTask Identifier="MicrosoftEntraID_Synchronize_Incremental_ComputeRoleModel_WithDirty" DisplayName_L1="Apply the Role Model" Level="6" Dirty="true">  <TaskEntityType EntityType="Directory_User" /></ComputeRoleModelTask>
                    
```

Launch only the relevant tasks according to the logical chain

Identity Manager's tasks are all linked together by a logical chain that implies that some tasks are
supposed to be executed after some others.

Make sure to understand the tasks' logical chain to launch only the relevant tasks. See the
[Troubleshoot Connector Jobs](/docs/identitymanager/6.2/integration-guide/tasks-jobs/troubleshoot-connector-jobs/index.md) topic for additional information.

For example, there is no use computing expressions or correlations if there was beforehand no change
in the database. Thus, there should not be UpdateEntityPropertyExpressionsTask or
ComputeCorrelationKeysTask without first SynchronizeTask or FulfillTask.

## Rule 3: Wait for Recurring Tasks

Inside a recurring job, there is no need including some tasks twice in order to have the whole
cycle, because the next execution will complete what has been started.

For example, Identity Manager's feedback loop uses the tasks for synchronization, computation of the
role model, provisioning, then once more synchronization and computation of the role model.

Instead of including any task twice, rather write a job with each task once, schedule a periodic
execution of the job, and wait for the next execution to get the whole cycle. For example for the
AD:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                     
<Job Identifier="Synchronization_RoleModelComputation_Provisioning" DisplayName_L1="91: Synchronization / RoleModelComputation / Provisioning" Agent="Local">  <ExportTask Identifier="Export_AD" DisplayName_L1="AD - Extract Changes" Agent="Local" Connector="AD" Level="0" OpenIdClient="Job" Connection="ADExportFulfillment" ContinueOnError="true" />  <PrepareSynchronizationTask Identifier="PrepareSynchronization_AD" DisplayName_L1="Synchronization (agent side)" Agent="Local" Connector="AD" Level="1" OpenIdClient="Job" SynchronizationMode="Incremental" Type="ActiveDirectory">      <TaskDependsOnTask ParentTask="Export_AD" />  </PrepareSynchronizationTask>  <SynchronizeTask Identifier="Synchronization_AD" DisplayName_L1="Synchronization (server side)" Connector="AD" Level="2" Type="ActiveDirectory">  <TaskDependsOnTask ParentTask="PrepareSynchronization_AD" />  </SynchronizeTask>  <UpdateEntityPropertyExpressionsTask Identifier="UpdateEntityPropertyExpressions_AD" DisplayName_L1="Update Computed Properties" Level="4">      <TaskEntityType EntityType="AD_Entry" />      ...
  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="ComputeCorrelationKeys_AD" DisplayName_L1="Compute all Correlations" Level="5">      <TaskEntityType EntityType="AD_Entry" />      ...
 </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="ComputeRoleModel_AD" DisplayName_L1="Apply the Role Model" Level="6">      <TaskEntityType EntityType="Directory_User" />      ...
  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="GenerateProvisioningOrders_AD" DisplayName_L1="Generate Provisioning Orders" Level="7">    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </GenerateProvisioningOrdersTask>  <FulfillTask Identifier="Fulfill_AD" DisplayName_L1="Provisioning" Agent="Local" Level="8" OpenIdClient="Job" ContinueOnError="true">    <TaskDependsOnTask ParentTask="GenerateProvisioningOrders_AD" />    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </FulfillTask></Job>
```

```
                      
<CreateConnectorSynchroComplete DisplayName_L1="10: Microsoft Entra ID - Synchronization Complete (scaffolding)" Connector="MicrosoftEntraID" JobIdentifier="MicrosoftEntraID_Synchronize_Complete_Scaffolding"/>
                   
```

```
                        
<ComputeCorrelationKeysTask DisplayName_L1="Directory User - Update the correlation keys" >
  <TaskEntityType EntityType="Directory_UserRecord"/>  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="HR_Person"/>
</ComputeCorrelationKeysTask>
                    
```

```
                        
<ComputeRoleModelTask Identifier="MicrosoftEntraID_Synchronize_Incremental_ComputeRoleModel_WithDirty" DisplayName_L1="Apply the Role Model" Level="6" Dirty="true">  <TaskEntityType EntityType="Directory_User" /></ComputeRoleModelTask>
                    
```

```
                     
<Job Identifier="Synchronization_RoleModelComputation_Provisioning" DisplayName_L1="91: Synchronization / RoleModelComputation / Provisioning" Agent="Local">  <ExportTask Identifier="Export_AD" DisplayName_L1="AD - Extract Changes" Agent="Local" Connector="AD" Level="0" OpenIdClient="Job" Connection="ADExportFulfillment" ContinueOnError="true" />  <PrepareSynchronizationTask Identifier="PrepareSynchronization_AD" DisplayName_L1="Synchronization (agent side)" Agent="Local" Connector="AD" Level="1" OpenIdClient="Job" SynchronizationMode="Incremental" Type="ActiveDirectory">      <TaskDependsOnTask ParentTask="Export_AD" />  </PrepareSynchronizationTask>  <SynchronizeTask Identifier="Synchronization_AD" DisplayName_L1="Synchronization (server side)" Connector="AD" Level="2" Type="ActiveDirectory">  <TaskDependsOnTask ParentTask="PrepareSynchronization_AD" />  </SynchronizeTask>  <UpdateEntityPropertyExpressionsTask Identifier="UpdateEntityPropertyExpressions_AD" DisplayName_L1="Update Computed Properties" Level="4">      <TaskEntityType EntityType="AD_Entry" />      ...
  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="ComputeCorrelationKeys_AD" DisplayName_L1="Compute all Correlations" Level="5">      <TaskEntityType EntityType="AD_Entry" />      ...
 </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="ComputeRoleModel_AD" DisplayName_L1="Apply the Role Model" Level="6">      <TaskEntityType EntityType="Directory_User" />      ...
  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="GenerateProvisioningOrders_AD" DisplayName_L1="Generate Provisioning Orders" Level="7">    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </GenerateProvisioningOrdersTask>  <FulfillTask Identifier="Fulfill_AD" DisplayName_L1="Provisioning" Agent="Local" Level="8" OpenIdClient="Job" ContinueOnError="true">    <TaskDependsOnTask ParentTask="GenerateProvisioningOrders_AD" />    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </FulfillTask></Job>
```
