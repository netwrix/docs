---
title: "SchedulingCleanDataBaseSetting"
description: "If the default value for the Task CleanDataBase needs to be overridden."
sidebar_position: 9
---

If the default value for the Task CleanDataBase needs to be overridden.


## Examples
```xml
    <SchedulingCleanDataBaseSetting Timeout="2" CronTabExpression="* */2 * * *"/>
```


## Properties

|Property|Details|
|---|---|
| CronTabExpression optional | **Type:** String **Description:** Define the cron to launch the CleanDatabase Job. |
| Identifier <span class="optionalAttribute">default value: SchedulingCleanDataBase</span> | **Type:** String **Description:** Unique identifier of the setting. |
| Timeout optional | **Type:** String **Description:** Defines the maximum time a Job or Task can wait after the last run. |

