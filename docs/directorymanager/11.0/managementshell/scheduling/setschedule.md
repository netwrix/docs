---
title: "Set-Schedule Cmdlet for Directory Manager"
description: "Modify a schedule's name, targets, credentials, notifications, and triggers in the connected identity store with the Set-Schedule cmdlet."
keywords:
  - Set-Schedule
  - Management Shell
  - modify schedule
  - schedule triggers
  - schedule targets
  - notification settings
sidebar_position: 60
---

# Set-Schedule Cmdlet for Directory Manager

The **Set-Schedule** cmdlet modifies the attributes and settings of a schedule in the identity
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

This example updates the authentication information of the GUS1 schedule.

```
Set-Schedule -SscheduleName GUS1 -Credential $creds
```

Example 3:

This example removes OU targets from the smm4 schedule.

```
Set-Schedule -ScheduleName smm4_ -TargetOperation Remove -Targets 'OU=SampleOU,OU=WorkingOU,DC=example,DC=com', 'OU=CustomRole,OU=WorkingOU,DC=example,DC=com', 'OU=CustomRole2,OU=WorkingOU,DC=example,DC=com'
```

Example 4:

This example modifies the smm4\_ schedule by removing its targets.

```
Set-Schedule -ScheduleName smm4_ -TargetOperation Remove -Targets 'CN=STest1Group,OU=SampleOU,OU=WorkingOU,DC=example,DC=com', 'OU=CustomRole2,OU=WorkingOU,DC=example,DC=com'
```

Example 5:

This example clears the configured notification settings of the smm4 schedule.

```
Set-Schedule -ScheduleName smm4_ -SetNotifications $false
```

Example 6:

This example changes the notification settings of the smm4 schedule. It sets notifications to be sent to
recipient1@example.com every time the job runs.

```
Set-Schedule -ScheduleName smm4_ -SetNotifications $true -Recepients 'recipient1@example.com' -NotificationSendingCriteria Always
```

Example 7:

This example adds a monthly trigger for the smm4 schedule. The trigger repeats every 10 minutes for 1 hour on
the 23rd of March, August, and September at 16:56.

```
Set-Schedule -ScheduleName smm4_ -TriggerOperation Add -TriggerType Monthly -StartTime '16:56' -MonthDate 23 -YearMonths 'March,August,September' -Repeat -RepeatInterval 10 -RepeatDuration 60
```

Example 8:

This example adds a monthly repeating trigger with an end date for the smm4\_ schedule. The job stops if
it is still running at the end of the duration.

```
Set-Schedule -ScheduleName smm4_ -TriggerOperation Add -TriggerType Monthly -StartTime '16:56' -MonthDate 23 -YearMonths 'March,August,September' -Repeat -RepeatInterval 10 -RepeatDuration 60 -EndDate '2020/03/29' –KillAtDurationEnd
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Scheduling Cmdlets](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
