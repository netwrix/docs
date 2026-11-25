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

The **Get-TargetSchedules** cmdlet retrieves the scheduled jobs of the given target (group or OU).

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

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Scheduling Cmdlets](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
