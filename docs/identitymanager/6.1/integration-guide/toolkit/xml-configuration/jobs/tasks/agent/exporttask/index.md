---
title: "ExportTask"
description: "ExportTask"
sidebar_position: 30
---

# ExportTask

Runs the specified connection's export.

## Examples

```

<ExportTask Identifier="AD_Export" Agent="Local" Connection="ADExportFulfillment" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)"/>

```

## Properties

| Property                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required                        | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server.                                                                                                                                                                                                                                       |
| DisplayName_L1 required               | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                              |
| OpenIdClient required                 | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                                                                                                                                                                                 |
| Connection optional                   | **Type** String **Description** Identifier of the Connection in the appsettings.agent.json.                                                                                                                                                                                                                                                                                                                                     |
| ContinueOnError default value: false  | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                                                                                                                                                                                  |
| Identifier optional                   | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                                                                                                                                                                  |
| IgnoreCookieFile default value: false | **Type** Boolean **Description** Ignore the Cookie Files                                                                                                                                                                                                                                                                                                                                                                        |
| InitMode default value: false         | **Type** Boolean **Description** `true` to prevent Usercube from archiving the changes (resource creation, update, deletion) performed by the task. Impacted tables are: `UP_AssignedSingleRoles`, `UP_AssignedCompositeRoles`, `UP_AssignedResourceTypes`, `UP_AssignedResourceScalars`, `UP_AssignedResourceNavigations`, `UP_AssignedResourceBinaries` for `ComputeRoleModelTask` and only `UR_Resources` for `FulfillTask`. |
