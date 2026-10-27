---
title: "Get-TargetSchedules"
description: "Get-TargetSchedules"
sidebar_position: 20
---

# Get-TargetSchedules

The commandlet Get-TargetSchedules retrieves the scheduled jobs of the given target (group/OU).

## Syntax

```
Get-TargetSchedules
[-DistinguishedName] <String>
[-Enumerate]
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

- DistinguishedName

Example 1:

This example retrieves the schedules operating on an OU with distinguished name
OU=WorkingOU,DC=pucit,DC=local.

```
Get-TargetSchedules -DistinguishedName ‘OU=WorkingOU,DC=pucit,DC=local’
```

Example 2:

This example retrieves the schedules operating on a group and an OU through the pipeline operator.

```
'OU=WorkingOU,DC=pucit,DC=local', 'CN=SGroup1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' | Get-TargetSchedules
```

Example 3:

This example selects only the Names and Job Types of the schedules operating on the specified
targets through the pipeline operator.

```
'OU=WorkingOU,DC=pucit,DC=local', 'CN=SGroup1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' | Get-TargetSchedules | Select-Object -Property Name,JobType
```
