---
title: "Get-Schedule Cmdlet in Directory Manager"
description: "Use the Get-Schedule cmdlet to list scheduled jobs in the connected identity store and filter them by job type, trigger type, or notifications."
keywords:
  - Get-Schedule
  - scheduled jobs
  - job type filter
  - trigger type
  - Management Shell cmdlet
sidebar_position: 10
---

# Get-Schedule Cmdlet in Directory Manager

Use the Get-Schedule cmdlet to retrieve the scheduled jobs in the identity store connected to the current Management Shell instance. By default, it returns all jobs available. It returns them regardless of the following:

- Whether the identity store the job belongs to is enabled.
- Whether the job is enabled.

You can filter the job list with the JobType, TriggerType, or HavingNotifications parameters. The MatchingCriteria parameter sets whether the criteria are joined on the AND basis or the OR basis.

## Syntax

```
Get-Schedule [-ScheduleNames <String[]>]
[-IdentityStoreNames <String[]>]
[-JobTypes <JobType[]>]
[-TriggerTypes <TriggerType[]>]
[-HavingNotifications <Boolean>]
[-MatchingCriteria <JoiningOperator>]
[-PreventEnumeration]
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameter

- None

## Examples

### Example 1: Get all scheduled jobs

This example retrieves all the scheduled jobs created in the connected identity store.

```
Get-Schedule
```

### Example 2: Filter by job type, trigger type, and matching criteria

This example retrieves the Group Usage Service (GUS) jobs that have a monthly trigger, with MatchingCriteria set to And.

```
Get-Schedule -JobType GUS -TriggerType RunMonthly -MatchingCriteria And
```

### Example 3: Get a job by name

This example retrieves the scheduled job named GUS1.

```
Get-Schedule -ScheduleName GUS1
```

### Example 4: Get jobs through the pipeline

This example retrieves the two scheduled jobs GUS1 and GLM6 through the pipeline operator.

```
'GUS1','GLM6' | Get-Schedule
```
