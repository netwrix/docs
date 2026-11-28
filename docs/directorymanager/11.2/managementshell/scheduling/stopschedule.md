---
title: "Stop-Schedule Cmdlet for Directory Manager"
description: "Stop a running schedule by name with the Stop-Schedule cmdlet."
keywords:
  - Stop-Schedule
  - Management Shell
  - stop running schedule
  - GUS jobs
  - schedule name
sidebar_position: 70
---

# Stop-Schedule Cmdlet for Directory Manager

The Stop-Schedule cmdlet stops a specified schedule if it is already running.

## Syntax

```
Stop-Schedule
-ScheduleName <String>
[-Credentials <PSCredential>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required parameter

- ScheduleName

## Examples

### Example 1

This example stops the smm4 schedule by name.

```
Stop-Schedule -ScheduleName smm4_
```

### Example 2

This example stops the schedules that have the Group Usage Service (GUS) job type.

```
Get-Schedule -JobType GUS | Select-Object -Property Name | Stop-Schedule
```

### Example 3

This example stops all daily running GUS jobs.

```
Get-Schedule -JobType GUS -TriggerType RunDaily -MatchingCriteria And | Select-Object -Property Name | Stop-Schedule
```
