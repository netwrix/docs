---
title: "Invoke Api Task"
description: "Invoke Api Task"
sidebar_position: 50
---

# Invoke Api Task

Tool to launch any Identity Manager API.

## Examples

```

  <InvokeApiTask Agent="Local" ApiUrl="/api/Job/TaskResourceType?api-version=1.0&squery=select ResourceTypeId where JobId=1&path=/Jobs/TaskResourceType/Query&QueryRootEntityType=TaskResourceType" DisplayName_L1="Invoke Api" HttpCommand="Get" Identifier="InvokeApi" OpenIdClient="Job"/>

```

## Properties

| Property                | Details                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required          | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| ApiUrl required         | **Type** String **Description** The Identity Manager Api relative url. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: Connection string to the Database                        |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                        |
| HttpCommand required    | **Type** HttpCommand **Description** Defines the ApiCommand (_Get_, _Put_, _Post_, or _Delete_)                                                                                           |
| OpenIdClient required   | **Type** String **Description** Connection client for the task.                                                                                                                           |
| Body optional           | **Type** String **Description** Path of the SQL file                                                                                                                                      |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                                                                                            |
