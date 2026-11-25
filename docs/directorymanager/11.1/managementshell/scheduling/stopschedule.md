---
title: "Stop-Schedule Cmdlet for Directory Manager"
description: "Stop a running schedule by name or job ID with the Stop-Schedule cmdlet."
keywords:
  - Stop-Schedule
  - Management Shell
  - stop running schedule
  - GUS jobs
  - job ID
sidebar_position: 70
---

# Stop-Schedule Cmdlet for Directory Manager

The Stop-Schedule cmdlet stops a specified schedule if it is already running.

## Syntax

```
Stop-Schedule
[-ScheduleName <String>]
[-JobId <Int32>]
[-PassThru]
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
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

This example stops a schedule with the job type GUS.

```
Stop-Schedule -JobType GUS | Select-Object -Property Name | Invoke-Schedule
```

### Example 3

This example stops all daily running GUS jobs.

```
Get-Schedule -JobType GUS -TriggerType RunDaily -MatchingCriteria And | Select-Object -Property Name | Stop-Schedule
```
