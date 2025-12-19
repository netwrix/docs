---
title: "Set-Schedule"
description: "Set-Schedule"
sidebar_position: 60
---

# Set-Schedule

The commandlet **Set-Schedule** modifies the attributes and settings of a schedule in the identity
store connected to the current instance of the Management Shell.

## Syntax

```
Set-Schedule
-ScheduleName <string>
[-NewName <string>]
[-TargetOperation {Add | Remove}] [-Targets <string[]>]
[-Credential <pscredential>]
[-UserName <string>]
[-Password <string>]
[-SetNotifications <bool>]
[-Recepients <string[]>]
[-SendToOwners <bool>]
[-NotificationSendingCriteria {Always | OnSuccess | OnFailure | OnMembershipChanged}]
[-Enabled <bool>]
[-TriggerOperation {add | remove single by id | remove by type | remove all}]
[-TriggerId <int>]
[-TriggerType {Event | Time | Daily | Weekly | Monthly | MonthlyDOW | Idle | Registration | Boot | Logon | SessionStateChange | Custom}]
[-StartTime <datetime>]
[-MonthDate <int>]
[-YearMonths {January | February | March | April | May | June | July | August | September | October | November | December | AllMonths}]
[-MonthWeek {FirstWeek | SecondWeek | ThirdWeek | FourthWeek | LastWeek | AllWeeks}]
[-WeekDays {Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | AllDays}]
[-DaysInterval <int>]
[-WeeksInterval <int>]
[-Repeat]
[-RepeatInterval <int>]
[-RepeatDuration <int>]
[-EndDate <datetime>]
[-TriggerDisabled]
[-KillAtDurationEnd]
[-IncludeAllContainers]
[-IncludeSpecifiedContainers]
[-MessagingSystems <string[]>]
[-IncludeAllMessagingServers]
[-IncludeSpecifiedMessagingServers]
[<CommonParameters>]
```

## Required Parameter

- ScheduleName

Example 1:

This example renames a schedule from GUS1 to GUS1-renamed.

```
Set-Schedule -ScheduleName GUS1 -NewName GUS1_renamed
```

Example 2:

This example updates the authentication information of GUS1 schedule.

```
Set-Schedule -SscheduleName GUS1 -Credential $creds
```

Example 3:

This example removes OU targets from smm4 schedule.

```
Set-Schedule -ScheduleName smm4_ -TargetOperation Remove -Targets 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local', 'OU=CustomRole,OU=WorkingOU,DC=pucit,DC=local', 'OU=CustomRole2,OU=WorkingOU,DC=pucit,DC=local'
```

Example 4:

This example modifies smm4_ schedule by removing its targets.

```
Set-Schedule -ScheduleName smm4_ -TargetOperation Remove -Targets 'CN=STest1Group,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local', 'OU=CustomRole2,OU=WorkingOU,DC=pucit,DC=local'
```

Example 5:

This example clears configured notification settings of a schedule smm4.

```
Set-Schedule -ScheduleName smm4_ -SetNotifications $false
```

Example 6:

This example changes notification settings of a schedule smm4. It sets notification to be sent to
recep1@gid.com every time the job is run.

```
Set-Schedule -ScheduleName smm4_ -SetNotifications $true -Recepients 'recep1@gid.com' -NotificationSendingCriteria Always
```

Example 7:

This example adds a monthly trigger for smm4 schedule. It is repeated every 10 minutes for 1 hour on
23rd of March, August and September at 16:56.

```
Set-Schedule -ScheduleName smm4_ -TriggerOperation Add -TriggerType Monthly -StartTime '16:56' -MonthDate 23 -YearMonths 'March,August,September' -Repeat -RepeatInterval 10 -RepeatDuration 60
```

Example 8:

This example adds a monthly repeating trigger for smm4_ schedule and has an end date. It stops if
it runs at the duration end.

```
Set-Schedule -ScheduleName smm4_ -TriggerOperation Add -TriggerType Monthly -StartTime '16:56' -MonthDate 23 -YearMonths 'March,August,September' -Repeat -RepeatInterval 10 -RepeatDuration 60 -EndDate '2020/03/29' –KillAtDurationEnd
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Scheduling Commands](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
