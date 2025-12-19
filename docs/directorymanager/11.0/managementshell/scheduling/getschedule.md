---
title: "Get-Schedule"
description: "Get-Schedule"
sidebar_position: 10
---

# Get-Schedule

The commandlet **Get-Schedule** retrieves the scheduled jobs created in the identity store connected
to the current instance of the Management Shell. By default, this cmdlet returns all the jobs
available irrespective of the following:

- whether the identity store with which they belong is enabled.
- whether the jobs are enabled.

This commandlet can also filter the job list if provided with the filtration parameters such as
JobType, TriggerType or HavingNotifications. It also accepts a MatchingCriteria parameter that
determines whether the criteria are to be joined on the AND basis or OR basis.

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

This example retrieves those Group Usage Service – GUS job(s) that have monthly trigger and
MatchingCriteria on the And basis.

```
Get-Schedule -JobType GUS -TriggerType RunMonthly -MatchingCriteria And
```

Example 3:

This example retrieves the scheduled job with GUS1 name.

```
Get-Schedule -ScheduleName GUS1
```

Example 4:

This example retrieves the two scheduled jobs – GUS1 and GLM6 –through the pipeline operator.

```
'GUS1','GLM6' | Get-Schedule
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Scheduling Commands](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
