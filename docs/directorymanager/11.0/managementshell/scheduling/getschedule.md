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

The **Get-Schedule** cmdlet retrieves the scheduled jobs created in the identity store connected
to the current instance of the Management Shell. By default, this cmdlet returns all the jobs
available irrespective of the following:

- whether the identity store to which they belong is enabled.
- whether the jobs are enabled.

This cmdlet can also filter the job list if provided with the filtration parameters such as
JobType, TriggerType, or HavingNotifications. It also accepts a MatchingCriteria parameter that
determines whether the criteria are joined on the AND basis or the OR basis.

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

Example 1:

This example retrieves all the scheduled jobs created in the connected identity store.

```
Get-Schedule
```

Example 2:

This example retrieves the Group Usage Service (GUS) jobs that have a monthly trigger and
MatchingCriteria on the And basis.

```
Get-Schedule -JobType GUS -TriggerType RunMonthly -MatchingCriteria And
```

Example 3:

This example retrieves the scheduled job named GUS1.

```
Get-Schedule -ScheduleName GUS1
```

Example 4:

This example retrieves the two scheduled jobs – GUS1 and GLM6 – through the pipeline operator.

```
'GUS1','GLM6' | Get-Schedule
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Scheduling Cmdlets](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
