---
title: "New-Schedule Cmdlet for Directory Manager"
description: "Create a schedule in the connected identity store with the New-Schedule cmdlet, including its targets, job type, trigger, and notification settings."
keywords:
  - New-Schedule
  - Management Shell
  - schedule creation
  - smart group job
  - GUS job
  - schedule notifications
sidebar_position: 40
---

# New-Schedule Cmdlet for Directory Manager

The New-Schedule cmdlet creates a schedule in the identity store connected to the current instance of Management Shell.

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

## Required parameters

- ScheduleName
- Targets
- TargetType
- IdentityStoreName
- Credentials
- JobType
- TriggerType
- StartTime

## Examples

### Example 1

This example creates a schedule with the minimum possible parameters. It uses an insecure password.

```
New-Schedule -ScheduleName SmuTest1 -IdentityStoreName AdStore8 -UserName user -Password password1 -Targets 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local', 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -JobType SmartGroup -TriggerType Daily -StartTime '16:56'
```

:::note
This example uses insecure credentials.
:::

### Example 2

This example creates a smart group schedule that triggers on the 7th of every March, August, and September.

```
New-Schedule -ScheduleName SmuTest2 -IdentityStoreName AdStore8 -Credentials $creds -Targets 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -JobType SmartGroup -TriggerType Monthly -StartTime '16:56' -YearMonths 'March','August','September' -MonthDate 7
```

To use secure credentials, first create them and save them to a variable named `creds`.

```
$creds = Get-Credential
```

### Example 3

This example creates a GUS job and specifies a messaging system.

```
New-Schedule -ScheduleName GusTest1 -Targets 'OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56' -MessagingSystems 'ARSLANAHMADSVM.PUCIT.LOCAL'
```

### Example 4

This example creates a GUS job that includes all containers and messaging systems.

```
New-Schedule -ScheduleName GusTest2 -IncludeAllContainers -IncludeAllMessagingSystems -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56'
```

### Example 5

This example creates a job and configures its notification settings. Notifications are enabled and go to the specified recipients and to the owners of the schedule targets. The schedule sends notifications only when it completes its job successfully.

```
New-Schedule -ScheduleName GusTest3 -IncludeAllContainers -IncludeAllMessagingSystems -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56' -EnableNotifications -Recepients 'recep1@gid.com','recep2@gid.com' -SendToOwners -NotificationSendingCriteria OnSuccess
```
