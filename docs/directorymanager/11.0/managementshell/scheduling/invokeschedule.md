---
title: "Invoke-Schedule"
description: "Invoke-Schedule"
sidebar_position: 30
---

# Invoke-Schedule

The commandlet **Invoke-Schedule** executes the specified schedule job.

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

## Required Parameter

- None

Example 1:

This example executes a schedule with name starting smm4_.

```
Invoke-Schedule -ScheduleName smm4_
```

Example 2:

This example executes a schedule with GUS as Job Type.

```
Get-Schedule -JobType GUS | Select-Object -Property Name | Invoke-Schedule
```

Example 3:

This example executes all the GUS scheduled jobs with daily running trigger.

```
Get-Schedule -JobType GUS -TriggerType RunDaily -MatchingCriteria And | Select-Object -Property Name | Invoke-Schedule
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Scheduling Commands](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
