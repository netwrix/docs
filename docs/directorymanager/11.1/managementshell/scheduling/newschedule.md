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
-JobType <JobType>
-TriggerType {Daily | Weekly | Monthly}
-StartTime <DateTime>
[-Targets <String[]>]
[-Credentials <PSCredential>]
[-UserName <String>]
[-Password <String>]
[-WeekDays <DaysOfTheWeek>]
[-YearMonths <MonthsOfTheYear>]
[-MonthDate <Int32>]
[-IncludeAllContainers <String>]
[-MessagingSystems <String[]>]
[-IncludeAllMessagingSystems <Boolean>]
[-EnableNotifications <Boolean>]
[-Recepients <String[]>]
[-SendToOwners <Boolean>]
[-NotificationSendingCriteria <NotificationSendingCriteria>]
[-WarningAction <ActionPreference>]
[-InformationAction <ActionPreference>]
[-WarningVariable <String>]
[-InformationVariable <String>]
[-PipelineVariable <String>]
[<CommonParameters>]
```

## Required parameters

- ScheduleName
- JobType
- TriggerType
- StartTime
- Credentials, or UserName and Password

Targets is required for all job types except User Life Cycle, and Group Usage Service (GUS) jobs that set IncludeAllContainers to true. A GUS job also requires MessagingSystems, or IncludeAllMessagingSystems set to `$true`.

:::note
The notification parameters (EnableNotifications, Recepients, SendToOwners, and NotificationSendingCriteria) apply only to Smart Group schedules.
:::

## Examples

### Example 1

This example creates a schedule with the minimum possible parameters. It uses an insecure password.

```
New-Schedule -ScheduleName SmuTest1 -UserName user -Password password1 -Targets 'OU=SampleOU,OU=WorkingOU,DC=example,DC=com' -JobType SmartGroup -TriggerType Daily -StartTime '16:56'
```

:::note
This example uses insecure credentials.
:::

### Example 2

This example creates a smart group schedule that triggers on the 7th of every March, August, and September.

```
New-Schedule -ScheduleName SmuTest2 -Credentials $creds -Targets 'OU=SampleOU,OU=WorkingOU,DC=example,DC=com' -JobType SmartGroup -TriggerType Monthly -StartTime '16:56' -YearMonths 'March','August','September' -MonthDate 7
```

To use secure credentials, first create them and save them to a variable named `creds`.

```
$creds = Get-Credential
```

### Example 3

This example creates a GUS job and specifies a messaging system.

```
New-Schedule -ScheduleName GusTest1 -Targets 'OU=SampleOU,OU=WorkingOU,DC=example,DC=com' -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56' -MessagingSystems 'MAIL01.EXAMPLE.COM'
```

### Example 4

This example creates a GUS job that includes all containers and messaging systems.

```
New-Schedule -ScheduleName GusTest2 -IncludeAllContainers true -IncludeAllMessagingSystems $true -JobType GUS -Credentials $creds -TriggerType Daily -StartTime '16:56'
```

### Example 5

This example creates a smart group job and configures its notification settings. Notifications are enabled and go to the specified recipients and to the owners of the schedule targets. The schedule sends notifications only when it completes its job successfully.

```
New-Schedule -ScheduleName SmuTest3 -Targets 'OU=SampleOU,OU=WorkingOU,DC=example,DC=com' -JobType SmartGroup -Credentials $creds -TriggerType Daily -StartTime '16:56' -EnableNotifications $true -Recepients 'recipient1@example.com','recipient2@example.com' -SendToOwners $true -NotificationSendingCriteria OnSuccess
```
