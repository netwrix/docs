---
title: "Remove-Schedule Cmdlet for Directory Manager"
description: "Delete a schedule by name or ID from the connected identity store with the Remove-Schedule cmdlet."
keywords:
  - Remove-Schedule
  - Management Shell
  - delete schedule
  - pipeline removal
  - Glm schedules
sidebar_position: 50
---

# Remove-Schedule Cmdlet for Directory Manager

The Remove-Schedule cmdlet removes a schedule, by its name or ID, from the identity store connected to the current instance of the Management Shell.

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

## Required parameters

- ScheduleName or Scheduled

## Examples

### Example 1

This example removes a schedule named GUS811_1.

```
Remove-Schedule -ScheduleName GUS811_1
```

### Example 2

This example uses the pipeline operator to remove the schedules GUS_1 and GUS_2.

```
'GUS_1', 'GUS_2' | Remove-Schedule
```

### Example 3

This example removes all schedules that have the job type Glm.

```
Get-Schedule -JobType Glm | Select-Object -Property Name | Remove-Schedule
```
