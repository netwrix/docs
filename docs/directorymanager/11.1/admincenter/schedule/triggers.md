---
title: "Define Schedule Triggers in Directory Manager"
description: "Set when a Directory Manager schedule runs by defining one-time, daily, weekly, monthly, or at-startup triggers and their repeat and expiration settings."
keywords:
  - schedule triggers
  - On a schedule
  - At startup
  - trigger expiration
  - Directory Manager schedule
sidebar_position: 170
---

# Define Schedule Triggers in Directory Manager

A trigger starts a Directory Manager schedule. You can start a schedule at a set time, repeat it on a daily, weekly, or monthly basis, or start it when a service or the server starts.

To define a trigger:

1. Use the toggle button at the top of the dialog box to enable or disable the trigger.
2. In the Begin the Task dropdown list on the New Trigger dialog box, select a trigger to start the schedule.

   - On a schedule: Starts a schedule at a specific time of day, or starts it multiple times on a daily, weekly, or monthly schedule. See [On a schedule](#on-a-schedule) for the settings available for this option.
   - At startup: Starts the schedule every time the GroupIDSchedulerService starts or the Directory Manager server starts. GroupIDSchedulerService is a Directory Manager service created in native IIS. See [At startup](#at-startup) for the settings available for this option.

The dialog box then displays the relevant settings for the trigger.

## On a schedule

Select one of these options:

- **One Time**: Triggers the schedule at the specified date and time.
- **Daily**: Triggers the schedule at the specified date and time, and then according to the specified recurrence interval. If Recur every is set to 1, it triggers the schedule daily. If it's set to 2, it triggers the schedule every other day at the specified date and time.
- **Weekly**: Triggers the schedule for the first time at the specified date and time. The next run follows the recurrence interval level and the selected days of the week. If Recur every is set to 1, it triggers the schedule every week. If it's set to 2, it triggers the schedule every other week. The schedule runs at the specified time on each of the specified weekdays.
- **Monthly**: Triggers the schedule for the first time at the selected date and time. The next run is based on the selected day of the specified months or the selected day of the week.

### Settings for One Time and Daily triggers

- Repeat task every: Click in the boxes to select a repetition time interval and duration time from the dropdown lists. The dropdown list has these options:

  - 15 minutes
  - 30 minutes
  - 1 hour
  - 8 hours

  In both boxes, you can type values of your choice. The minimum value for both is 2 minutes. The maximum value is less than 1 day (23h 59m 59s). The schedule runs, waits for the time interval specified in the first box, and then runs again until the duration time is met.

- Stop any task that runs longer than: Stop long-running schedules by setting a time limit on how long the schedule is allowed to run (execute the action).
- Expire: Set a date and time for the trigger to expire. See [Trigger expiration](#trigger-expiration).

### Settings for Weekly and Monthly triggers

- Expire: Set a date and time for the trigger to expire. See [Trigger expiration](#trigger-expiration).

## At startup

- Repeat task every: Click in the boxes to select a repetition time interval and duration time from the dropdown lists. The dropdown list has these options:

  - 15 minutes
  - 30 minutes
  - 1 hour
  - 8 hours

  In both boxes, you can type values of your choice. The minimum value for both is 2 minutes. The maximum value is less than 1 day (23h 59m 59s). The schedule runs, waits for the time interval specified in the first box, and then runs again until the duration time is met.

- Stop any task that runs longer than: Stop long-running schedules by setting a time limit on how long the schedule is allowed to run (execute the action).
- Expire: Set a date and time for the trigger to expire. See [Trigger expiration](#trigger-expiration).

## Trigger expiration

When you set a trigger to expire:

- An expired trigger can't cause the schedule to run and sets the next run to Never.
- If a single trigger is defined for a schedule and it's disabled, it also sets the next run to Never.
