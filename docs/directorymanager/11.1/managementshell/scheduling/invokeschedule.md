---
title: "Invoke-Schedule Cmdlet in Directory Manager"
description: "Use the Invoke-Schedule cmdlet to run a scheduled job immediately, by schedule name or job ID, without waiting for its trigger."
keywords:
  - Invoke-Schedule
  - run scheduled job
  - GUS job
  - Management Shell cmdlet
sidebar_position: 30
---

# Invoke-Schedule Cmdlet in Directory Manager

The Invoke-Schedule cmdlet runs the specified scheduled job.

## Syntax

```
Invoke-Schedule
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

## Required parameters

None.

## Examples

### Example 1

This example runs a schedule with a name that starts with smm4\_.

```
Invoke-Schedule -ScheduleName smm4_
```

### Example 2

This example runs the schedules that have GUS as the job type.

```
Get-Schedule -JobType GUS | Select-Object -Property Name | Invoke-Schedule
```

### Example 3

This example runs all the GUS scheduled jobs that have a daily trigger.

```
Get-Schedule -JobType GUS -TriggerType RunDaily -MatchingCriteria And | Select-Object -Property Name | Invoke-Schedule
```
