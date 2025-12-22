---
title: "Remove-Schedule"
description: "Remove-Schedule"
sidebar_position: 50
---

# Remove-Schedule

The commandlet **Remove-Schedule** removes a schedule (by its name or ID) from the identity store
connected to the current instance of the Management Shell.

## Syntax

```
Remove-Schedule
-ScheduleName <String>
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

- ScheduleName or Scheduled

Example 1:

This example removes a schedule named GUS811_1.

```
Remove-Schedule -ScheduleName GUS811_1
```

Example 2:

This example removes two schedules – GUS1 and GUS2 using the pipeline operator.

```
'GUS_1', 'GUS_2' | Remove-Schedule
```

Example 3:

This example removes all schedules with job type Glm.

```
Get-Schedule -JobType Glm | Select-Object -Property Name | Remove-Schedule
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Scheduling Commands](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
