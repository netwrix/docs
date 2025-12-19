---
title: "Configure an Incremental Job"
description: "Configure an Incremental Job"
sidebar_position: 60
---

# Configure an Incremental Job

This guide shows how to configure the relevant tasks to make a job incremental.

## Overview

When configured as such, Identity Manager is able to remember after synchronization which resources
were modified, i.e. created, updated and/or deleted.

It allows future tasks to be executed only on modified resources, in order to minimize jobs'
execution times and costs.

See the [Set Up Incremental Synchronization](/docs/identitymanager/saas/integration-guide/tasks-jobs/jobfast/index.md) topic for additional information on a full Incremental job.

## Configure a Job to Be Incremental

Configure a job to be incremental by proceeding as follows:

1. Configure the synchronization task
   ([Synchronize Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md))
   with `DoNotDeleteChanges` set to `true`.

    This way, Identity Manager keeps the list of all changed resources.

    > For example, to synchronize incrementally the Active Directory:
    >
    > ```
    >
    > <SynchronizeTask Identifier="SynchronizeActiveDirectory_DoNotDeleteChanges" DisplayName_L1="AD - Synchronization (server side)" Connector="AD" Level="2" Type="ActiveDirectory" DoNotDeleteChanges="true" >  ...
    > </SynchronizeTask>
    >
    > ```

2. Tag all changed resources by running
   [Set Recently Modified Flag Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/setrecentlymodifiedflagtask/index.md)
   after SynchronizeTask.

    > For example, following the synchronization task for the Active Directory:
    >
    > ```
    >
    > <SetRecentlyModifiedFlagTask Identifier="SetRecentlyModifiedFlag" DisplayName_L1="Tag Modified Objects" Level="3">  <TaskDependsOnTask ParentTask="SynchronizeActiveDirectory_DoNotDeleteChanges" /></SetRecentlyModifiedFlagTask>
    >
    > ```

3. Configure the next tasks with `Dirty` set to `true` to apply them only to resources flagged as
   "dirty", i.e. recently modified.

    > For example, to compute correlation keys incrementally:
    >
    > ```
    >
    > <ComputeCorrelationKeysTask Identifier="ComputeCorrelationKeys_Incremental" DisplayName_L1="Compute Correlations (Incremental)" Level="5" Dirty="true">  <TaskDependsOnTask ParentTask="SetRecentlyModifiedFlag" />  <TaskEntityType EntityType="Directory_User" />  ...
    > </ComputeCorrelationKeysTask>
    >
    > ```
