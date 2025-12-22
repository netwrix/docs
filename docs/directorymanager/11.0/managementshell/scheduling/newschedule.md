---
title: "New-Schedule"
description: "New-Schedule"
sidebar_position: 40
---

# New-Schedule

The commandlet **New-Schedule** creates a new schedule in the identity store connected to the
current instance of Management Shell.

## Syntax

```
New-Schedule
-ScheduleName <String>
-Targets <String[]>
-TargetType <SchedulingTargetType>
-IdentityStoreName <String>
-Credentials <PSCredential>
-JobType <JobType>
-TriggerType <TriggerType>
-StartTime <DateTime>
[-WeekDays <DaysOfTheWeek>]
[-YearMonths <MonthsOfTheYear>]
[-MonthDate <Int32>]
[-EnableNotifications]
[-Recepients <String[]>]
[-SendToOwners]
[-NotificationSendingCriteria <NotificationSendingCriteria>]
[-PassThru] [-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required Parameters

- ScheduleName
- Targets
- TargetType
- IdentityStoreName
- Credentials
- JobType
- TriggerType
- StartTime

Example 1:

This example creates a new schedule using minimum possible parameters. This example contains
insecure password.

```
New-Schedule -ScheduleName SmuTest1 -IdentityStoreName AdStore8 -UserName user -Password password1 -Targets 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local', 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -JobType SmartGroup -TriggerType Daily -StartTime '16:56'
```

NOTE: This example uses insecure credentials.

Example 2:

This example creates a smart-group schedule triggering every 7th of every March, August and
September.

```
New-Schedule -ScheduleName SmuTest2 -IdentityStoreName AdStore8 -Credentials $creds -Targets 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -JobType SmartGroup -TriggerType Monthly -StartTime '16:56' -YearMonths 'March','August','September' -MonthDate 7
```

To use secure credentials, first create them and save them to a variable named ‘creds’.

```
$creds = Get-Credential
```

Example 3:

This example creates a GUS job by providing a messaging system.

```
New-Schedule -ScheduleName GusTest1 -Targets 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56' -MessagingSystems 'ARSLANAHMADSVM.PUCIT.LOCAL'
```

Example 4:

This example creates a GUS job specifying that it should include all containers and messaging
systems.

```
New-Schedule -ScheduleName GusTest2 -IncludeAllContainers -IncludeAllMessagingSystems -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56'
```

Example 5:

This example creates a job by configuring the notification settings. This commandlet specifies that
the notifications for this schedule are enabled and sent to the specified recipients as well as to
the owners of the schedule targets. The notifications are only sent when the schedule completes its
job successfully.

```
New-Schedule -ScheduleName GusTest3 -IncludeAllContainers -IncludeAllMessagingSystems -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56' -EnableNotifications -Recepients 'recep1@gid.com','recep2@gid.com' -SendToOwners -NotificationSendingCriteria OnSuccess
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Scheduling Commands](/docs/directorymanager/11.0/managementshell/scheduling/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
