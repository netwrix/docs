---
title: "Get-TargetSchedules Cmdlet in Directory Manager"
description: "Use the Get-TargetSchedules cmdlet to list the scheduled jobs that run on a specific group or organizational unit."
keywords:
  - Get-TargetSchedules
  - target schedules
  - group schedules
  - OU schedules
  - Management Shell cmdlet
sidebar_position: 20
---

# Get-TargetSchedules Cmdlet in Directory Manager

Use the Get-TargetSchedules cmdlet to retrieve the scheduled jobs of the given target, which is a group or an OU.

## Syntax

```
Get-TargetSchedules
[-Identity] <String>
[-Credentials <PSCredential>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameter

- Identity

:::note
The results also contain the jobs that are set to include all containers.
:::

## Examples

### Example 1: Get the schedules on an OU

This example retrieves the schedules operating on an OU with the distinguished name
OU=WorkingOU,DC=pucit,DC=local.

```
Get-TargetSchedules -Identity 'OU=WorkingOU,DC=pucit,DC=local'
```

### Example 2: Get the schedules on a group and an OU

This example retrieves the schedules operating on a group and an OU through the pipeline operator.

```
'OU=WorkingOU,DC=pucit,DC=local', 'CN=SGroup1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' | Get-TargetSchedules
```

### Example 3: Select only the names and job types

This example selects only the names and job types of the schedules operating on the specified
targets through the pipeline operator.

```
'OU=WorkingOU,DC=pucit,DC=local', 'CN=SGroup1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' | Get-TargetSchedules | Select-Object -Property Name,JobType
```
