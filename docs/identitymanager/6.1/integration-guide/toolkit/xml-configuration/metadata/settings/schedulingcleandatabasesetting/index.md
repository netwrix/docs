---
title: "SchedulingCleanDataBaseSetting"
description: "SchedulingCleanDataBaseSetting"
sidebar_position: 90
---

# SchedulingCleanDataBaseSetting

If the default value for the Task CleanDataBase needs to be overridden.

## Examples

```

    <SchedulingCleanDataBaseSetting Timeout="2" CronTabExpression="* */2 * * *"/>

```

## Properties

| Property                                          | Details                                                                                             |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| CronTabExpression optional                        | **Type** String **Description** Define the cron to launch the CleanDatabase Job.                    |
| Identifier default value: SchedulingCleanDataBase | **Type** String **Description** Unique identifier of the setting.                                   |
| Timeout optional                                  | **Type** String **Description** Defines the maximum time a Job or Task can wait after the last run. |
