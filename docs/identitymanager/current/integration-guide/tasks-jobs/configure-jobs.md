---
title: "Configure Jobs"
description: "Configure Jobs"
sidebar_position: 40
---

# Configure Jobs

This guide shows how to define the permissions for creating and using jobs thanks to scaffoldings.

There are two important jobs in Identity Manager. The Complete Job and the Incremental Synchronization. This two Job Synchronize and fill are using to Synchronize and fill Connectors. See the [Set up Complete Synchronization](../../integration-guide/tasks-jobs/jobdaily) and [Set Up Incremental Synchronization](../../integration-guide/tasks-jobs/jobfast) topics for additional information.

## Job Scaffoldings

There are six scaffoldings in Identity Manager to automatically create jobs in the configuration:

- A job for all connectors on an Agent (Complete/Incremental mode); See the
[Create Agent Synchro Complete](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchrocomplete) and [Create Agent Synchro Incremental](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchroincremental) topics for additional information.
- A job for a specific connector (Complete/Incremental mode).
- [Create Initialization Job](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createinitializationjob)
- [Create Access Certification Job](../../integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createaccesscertificationjob)

