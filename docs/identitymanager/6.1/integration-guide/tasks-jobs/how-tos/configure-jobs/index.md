---
title: "Configure Jobs"
description: "Configure Jobs"
sidebar_position: 20
---

# Configure Jobs

This guide shows how to define the permissions for creating and using jobs thanks to scaffoldings.

There are two important jobs in Usercube. The
[**Complete Job**](/docs/identitymanager/6.1/integration-guide/tasks-jobs/how-tos/jobdaily/index.md)
and the
[**Incremental Job**](/docs/identitymanager/6.1/integration-guide/tasks-jobs/how-tos/jobfast/index.md).
This two Job Synchronize and fill are using to Synchronize and fill Connectors.

## Job Scaffoldings

There are six scaffoldings in Usercube to automatically create jobs in the configuration:

- A job for all connectors on an Agent
  ([Complete](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchrocomplete/index.md)/[Incremental](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchroincremental/index.md)
  mode).
- A job for a specific connector
  ([Complete](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index.md)/[Incremental](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchroincremental/index.md)
  mode).
- [Initialization Job](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createinitializationjob/index.md)
- [AccessCertification Job](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createaccesscertificationjob/index.md)
