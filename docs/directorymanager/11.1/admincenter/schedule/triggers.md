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

To define a trigger:

Step 1 – Use the toggle button at the top of the dialog box to enable or disable the trigger.

Step 2 – In the Begin the Task dropdown list on the New Trigger dialog box, select a trigger to
start the schedule.

- On a schedule – Starts a schedule at a specific time of day or starts it multiple times on a daily,
  weekly, or monthly schedule. See the On a Schedule table for information about the settings
  available for this option.
- At startup – Starts the schedule every time the:

    - GroupIDSchedulerService starts. This is a Directory Manager service created in native IIS, or
    - The Directory Manager server starts. See the At Startup table for information about the
      settings available for this option.

On selecting an option, the dialog box displays the relevant settings for the trigger.

## On a Schedule

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Interval</th>
        </tr>
    </thead>
            <tbody>
                <tr>
                    <td valign="top">
                        One Time - Triggers the schedule at the specified date and time
                    </td>
                       <td rowspan="2">
                        <ul>
                            <li>
                                Repeat task every – Click in the boxes to select a repetition time interval and duration time from the dropdown lists. The dropdown list has the following options
                                <ul>
                                    <li>15 minutes</li>
                                    <li>30 minutes</li>
                                    <li>1 hour</li>
                                    <li>8 hours</li>
                                </ul>
                                In both boxes, you can type values of your choice. The minimum value for both is 2 minutes and the maximum value is less than 1 day (23h 59m 59s). The schedule runs, waits for the time interval specified in the first box, and then runs again until the duration time is met.
                            </li>
                            <li>
                                Stop any task that runs longer than - Stop long-running schedules by setting a time limit on how long the schedule is allowed to run (execute the action).
                            </li>
                            <li>
                                Expire - Set a date and time for the trigger to expire. When:
                                <ul>
                                    <li>
                                        a trigger is expired, it can't cause the schedule to run and sets the next run to Never
                                    </li>
                                    <li>a single trigger is defined for a schedule and it's disabled, it also sets the next run to Never</li>
                                </ul>
                            </li>
                        </ul>
                        &#160;
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        Daily - Triggers the schedule at the specified date and time and then according to the specified recurrence interval for the schedule. If Recur every is set to 1, it triggers the schedule daily and if it's set to 2, it triggers the schedule every other day at the specified date and time.
                    </td>
                </tr>
                <tr>
                   <td valign="top">
                        Weekly - Triggers the schedule for the first time at the specified date and time and the next run is according to the recurrence interval level and on the selected days of the week. If Recur every is set to 1, it triggers the schedule every week and if it's set to 2, it triggers the schedule every other week. The schedule runs at the specified time on each of the specified weekdays.
                    </td>
                    <td rowspan="2" valign="top">
                        <ul>
                            <li>
                                Expire - Set a date and time for the trigger to expire. When:
                                <ul>
                                    <li>
                                        a trigger is expired, it can't cause the schedule to run and sets the next run to Never
                                    </li>
                                    <li>
                                        a single trigger is defined for a schedule and it's disabled, it also sets the next run to Never
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        &#160;
                    </td>
                </tr>
                <tr>
                    <td>
                        Monthly - Triggers the schedule for the first time at the selected date and time and the next run is based on the selected day of the specified months or the selected day of the week.
                    </td>
                </tr>
            </tbody>
        </table>


## At Startup

<table>
    <thead>
        <tr>
            <th>Intervals</th>
        </tr>
    </thead>
    <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>
                                Repeat task every – Click in the boxes to select a repetition time interval and duration time from the dropdown lists. The dropdown list has the following options
                                <ul>
                                    <li>15 minutes</li>
                                    <li>30 minutes</li>
                                    <li>1 hour</li>
                                    <li>8 hours</li>
                                </ul>
                                In both boxes, you can type values of your choice. The minimum value for both is 2 minutes and the maximum value is less than 1 day (23h 59m 59s). The schedule runs, waits for the time interval specified in the first box, and then runs again until the duration time is met.
                            </li>
                            <li>Stop any task that runs longer than - Stop long-running schedules by setting a time limit on how long the schedule is allowed to run (execute the action).</li>
                            <li>
                                Expire - Set a date and time for the trigger to expire. When:
                                <ul>
                                    <li>a trigger is expired, it can't cause the schedule to run and sets the next run to Never</li>
                                    <li>a single trigger is defined for a schedule and it's disabled, it also sets the next run to Never</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
