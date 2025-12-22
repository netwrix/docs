---
title: "Usercube-Invoke-ServerJob"
description: "Usercube-Invoke-ServerJob"
sidebar_position: 230
---

# Usercube-Invoke-ServerJob

## Invoke a Job (Server Side)

To launch the job in the Server side only you need to run the executable
Usercube-Invoke-ServerJob.exe.

To know the task launch orders in job use the following exe: Usercube-Get-Job Steps .exe. See the
[Usercube-Get-JobSteps](/docs/identitymanager/saas/integration-guide/executables/references/get-jobsteps/index.md) topic for additional information.

## Examples

```

**.\Usercube-Invoke-ServerJob.exe -g "CleanDatabase" -s secret**

```

## Arguments

| Argument Name                                      | Details                                                                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|                                                    |                                                                                                                                   |
| ---                                                | ---                                                                                                                               |
| --job-identifier (-j) required                     | **Type** String **Description** Job's identifier to be launched.                                                                  |
| --repair-job (-r) optional                         | **Type** No Value **Description** Bool to Decide launch Synchronization Validation or Provisioning with force.                    |
| --begin-job-step (-b) optional                     | **Type** String **Description** The step from which the job starts.                                                               |
| --end-job-step (-e) optional                       | **Type** String **Description** The step at which the job stops.                                                                  |
| --task-identifier (-t) optional                    | **Type** String **Description** Specify the identification of the task to be started in the job (only this task will be started). |
| --force-synchronization-provisioning (-f) optional | **Type** Int64 **Description** Forces execution when the threshold is reached or exceeded.                                        |
| --task-type (-c) optional                          | **Type** String **Description** The first task found with this type is launched.                                                  |
| --task-string-contains (-s) optional               | **Type** String **Description** Launches all tasks with an identifier containing the given value.                                 |
