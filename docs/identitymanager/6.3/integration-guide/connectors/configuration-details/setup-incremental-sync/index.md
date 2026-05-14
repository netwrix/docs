---
title: "Set Up Incremental Synchronization"
description: "Set Up Incremental Synchronization"
sidebar_position: 80
---

# Set Up Incremental Synchronization

How to implement an incremental synchronization [Job](../../../../integration-guide/toolkit/xml-configuration/jobs/job) for a given [Connector](../../../../integration-guide/toolkit/xml-configuration/connectors/connector) via XML, to upload the related system's resources to Identity Manager.

See an example on [For Microsoft Entra ID](../../../../integration-guide/connectors/configuration-details/setup-incremental-sync) (formerly Microsoft Azure AD).

Netwrix Identity Manager (formerly Usercube) strongly recommends configuring as much as possible via the UI instead of XML files. See how to [Synchronize Data](../../../../user-guide/set-up/synchronization) via the UI.

## Prerequisites

First read how to [Create a Connector](../../../../integration-guide/connectors/configuration-details/create-connector).

## Build the Incremental Synchronization Job

Identity Manager provides a fully-written standardized job to perform incremental synchronization through the UI. See here:

See how to launch incremental [Synchronize Data](../../../../user-guide/set-up/synchronization) via the UI.

Any IGA action is configured through [Job](../../../../integration-guide/toolkit/xml-configuration/jobs/job).

Synchronization jobs contain tasks that are to be executed on agent side.

### Components

Any synchronization job should include:

1. export;
2. synchronization preparation;
3. synchronization.

The export is configured and performed by the [Export Task](../../../../integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask), the synchronization preparation by the [Prepare Synchronization Task](../../../../integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask) and the synchronization by the [Synchronize Task](../../../../integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask).

See the [Upward Data Synchronization](../../../../integration-guide/synchronization/upward-data-sync) topic for additional information.

Identity Manager provides a scaffolding that generates the configuration for these steps, named [Create Connector Synchro Incremental](../../../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchroincremental).

This guide is about incremental synchronization, but complete synchronization can be configured with the [Create Connector Synchro Complete](../../../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete) scaffolding.

### Permissions for the agent

In order to launch a job via the [Usercube-Invoke-Job](../../../../integration-guide/executables/references/invoke-job) tool, the agent must use a profile with the right permissions for each task.

Permissions within Identity Manager are configured through [Access Control Rule](../../../../integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule).

> For example:
>
>                         ```
>
>                             Conf/Profile AgentJob.xml
>
> <Profile Identifier="AgentSynchro" DisplayName_L1="Agent Synchro" />
>
> ```
>
> ```

Netwrix Identity Manager (formerly Usercube) recommends the creation of a profile for synchronization jobs, and another for provisioning jobs, in order to comply with the principle of least privilege.

In order to run a synchronization job, the agent requires the permissions to:

- view the tasks via `/Jobs/Task/Query`;
- access progress reports via `/Jobs/JobInstance/Query`, `/Jobs/JobInstance/Update`,
`/Jobs/TaskInstance/Query` and `/Jobs/TaskInstance/Update`;
- prepare the synchronization and synchronize via `/Connectors/Connector/Query` and
`/Connectors/SynchronizeSession`.

Identity Manager provides scaffoldings that generate the configuration for granting these permissions: [SynchronizationAccessControlRules](../../../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/synchronizationaccesscontrolrules) and [Job View Access Control Rules](../../../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/jobviewaccesscontrolrules).

> The following example permits the `AgentSynchro` profile to run any synchronization job:
>
>                         ```
>
>                             Conf/Profile AgentSynchro.xml
>
> <SynchronizationAccessControlRules Profile="AgentSynchro"><JobViewAccessControlRules Profile="AgentSynchro">
>
> ```
>
> ``

### Agent's authentication to the server

Every request from agent to server within the execution of a job needs to be authenticated with an [OpenIdClient](../../../../integration-guide/toolkit/xml-configuration/access-control/openidclient) Connect ClientId/Secret pair.

So first, the configuration must contain a `ClientId/Secret` pair.

Usable `ClientId/Secret` pairs are configured through an [OpenIdClient](../../../../integration-guide/toolkit/xml-configuration/access-control/openidclient).

> The following example uses a secret hashed
> by [Usercube-New-OpenIDSecret](../../../../integration-guide/executables/references/new-openidsecret):
>
>                         ```
>
>                             Conf/OpenIdClients.xml
>
> <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+Op8wNhqoVWhr5v6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" Profile="Administrator" />
>
> ```
>
> ``

Then, the agent's profile must be linked to one of the `ClientId/Secret` pairs.

Agents' settings are configured in their [appsettings.agent](../../../../integration-guide/network-configuration/agent-configuration/appsettings-agent).json file.

> The following example sets the `Job/secret` pair to be used by tasks and jobs:
>
>                         ```
>
>                             appsettings.agent.json
>
> { ... "OpenId":{ "OpenIdClients": { "Job": "secret" }, "DefaultOpenIdClient": "Job" } }
>
> ```
>
> ``

### Permissions for users

In order to launch the job, a user must have the right permissions.

Permissions within Identity Manager are configured through [Access Control Rule](../../../../integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule).

In order to launch a synchronization job, a user requires the appropriate permission: `/Jobs/RunJob/Launch`.

Identity Manager provides a [Job Execution Access Control Rules](../../../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/jobexecutionaccesscontrolrules) that generates the configuration for granting this permission.

> For example:
>
>                         ```
>
>                             Conf/Profile AgentSynchro.xml
>
> <JobExecutionAccessControlRules Profile="AgentSynchro">
>
> ```
>
> ``

## Schedule the Job

Scheduling the job execution can rely either on Identity Manager's scheduler or on an external scheduler.

### Using scheduler

Identity Manager's scheduler is configured through the [Job](../../../../integration-guide/toolkit/xml-configuration/jobs/job)'s `CronTabExpression` property.

[See Crontab documentation for more details](https://crontab.guru/every-15-minutes).

### Using an external scheduler

An external scheduler relies on using an external mechanism to schedule the [Usercube-Invoke-Job](../../../../integration-guide/executables/references/invoke-job).exe.

## Validate the Job

Validate the job's execution by proceeding as follows:

1. Deploy the XML configuration to the database, by using the
[Deploy Configuration Task](../../../../integration-guide/toolkit/xml-configuration/jobs/tasks/server/deployconfigurationtask).
2. In the UI, access the **Job Execution** page from the dashboard's **Administration** section.
3. Find the job named with the string specified in the XML configuration in the job's `DisplayName`
property, and launch it.
4. Once the job is completed, the system's objects should be synchronized to the database's `UR_Resources` table.

