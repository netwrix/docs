---
title: "Set Up Incremental Synchronization"
description: "Set Up Incremental Synchronization"
sidebar_position: 80
---

# Set Up Incremental Synchronization

How to implement an incremental synchronization
[Job](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/job/index.md) for a given
[Connector](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connector/index.md) via XML, to upload
the related system's resources to Identity Manager.

See an example on [For Microsoft Entra ID](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/setup-incremental-sync/index.md) (formerly Microsoft Azure AD).

Netwrix Identity Manager (formerly Usercube) strongly recommends configuring as much as possible via
the UI instead of XML files. See how to
[Synchronize Data](/docs/identitymanager/6.2/user-guide/set-up/synchronization/index.md) via the UI.

## Prerequisites

First read how to [Create a Connector](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/create-connector/index.md).

## Build the Incremental Synchronization Job

Identity Manager provides a fully-written standardized job to perform incremental synchronization
through the UI. See here:

See how to launch incremental
[Synchronize Data](/docs/identitymanager/6.2/user-guide/set-up/synchronization/index.md) via the UI.

Any IGA action is configured through [Job](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/job/index.md).

Synchronization jobs contain tasks that are to be executed on agent side.

### Components

Any synchronization job should include:

1. export;
2. synchronization preparation;
3. synchronization.

The export is configured and performed by the
[Export Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask/index.md), the
synchronization preparation by the
[Prepare Synchronization Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md)
and the synchronization by the
[Synchronize Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md).

See the [Upward Data Synchronization](/docs/identitymanager/6.2/integration-guide/synchronization/upward-data-sync/index.md) topic
for additional information.

Identity Manager provides a scaffolding that generates the configuration for these steps, named [Create Connector Synchro Incremental](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchroincremental/index.md).

This guide is about incremental synchronization, but complete synchronization can be configured with the [Create Connector Synchro Complete](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index.md) scaffolding.

### Permissions for the agent

In order to launch a job via the
[Usercube-Invoke-Job](/docs/identitymanager/6.2/integration-guide/executables/references/invoke-job/index.md) tool, the agent must
use a profile with the right permissions for each task.

Permissions within Identity Manager are configured through
[Access Control Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/index.md).

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

Netwrix Identity Manager (formerly Usercube) recommends the creation of a profile for
synchronization jobs, and another for provisioning jobs, in order to comply with the principle of
least privilege.

In order to run a synchronization job, the agent requires the permissions to:

- view the tasks via `/Jobs/Task/Query`;
- access progress reports via `/Jobs/JobInstance/Query`, `/Jobs/JobInstance/Update`,
  `/Jobs/TaskInstance/Query` and `/Jobs/TaskInstance/Update`;
- prepare the synchronization and synchronize via `/Connectors/Connector/Query` and
  `/Connectors/SynchronizeSession`.

Identity Manager provides scaffoldings that generate the configuration for granting these
permissions:
[SynchronizationAccessControlRules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/synchronizationaccesscontrolrules/index.md)
and
[Job View Access Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/jobviewaccesscontrolrules/index.md).

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

Every request from agent to server within the execution of a job needs to be authenticated with an
[OpenIdClient](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect
ClientId/Secret pair.

So first, the configuration must contain a `ClientId/Secret` pair.

Usable `ClientId/Secret` pairs are configured through an
[OpenIdClient](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md).

> The following example uses a secret hashed
> by [Usercube-New-OpenIDSecret](/docs/identitymanager/6.2/integration-guide/executables/references/new-openidsecret/index.md):
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

Agents' settings are configured in their
[appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).json
file.

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

Permissions within Identity Manager are configured through
[Access Control Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/index.md).

In order to launch a synchronization job, a user requires the appropriate permission:
`/Jobs/RunJob/Launch`.

Identity Manager provides a
[Job Execution Access Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/jobexecutionaccesscontrolrules/index.md)
that generates the configuration for granting this permission.

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

Scheduling the job execution can rely either on Identity Manager's scheduler or on an external
scheduler.

### Using scheduler

Identity Manager's scheduler is configured through the
[Job](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/job/index.md)'s `CronTabExpression` property.

[See Crontab documentation for more details](https://crontab.guru/every-15-minutes).

### Using an external scheduler

An external scheduler relies on using an external mechanism to schedule
the [Usercube-Invoke-Job](/docs/identitymanager/6.2/integration-guide/executables/references/invoke-job/index.md).exe.

## Validate the Job

Validate the job's execution by proceeding as follows:

1. Deploy the XML configuration to the database, by using the
   [Deploy Configuration Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/deployconfigurationtask/index.md).
2. In the UI, access the **Job Execution** page from the dashboard's **Administration** section.
3. Find the job named with the string specified in the XML configuration in the job's `DisplayName`
   property, and launch it.
4. Once the job is completed, the system's objects should be synchronized to the database's `UR_Resources` table.
