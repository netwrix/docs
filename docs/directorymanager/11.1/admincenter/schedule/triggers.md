---
title: "Triggers"
description: "Triggers"
sidebar_position: 170
---

# Triggers

Follow the steps to define a trigger.

Step 1 – Use the toggle button at the top of the dialog box to enable or disable the trigger.

Step 2 – In the Begin the Task drop-down list on the New Trigger dialog box, select a trigger to
start the schedule.

- On a schedule – starts a schedule at a specific time of day or start it multiple times on a daily,
  weekly, or monthly schedule. See the On a Schedule table for information about the settings
  available for this option.
- At startup – Starts the schedule every time the:

    - GroupIDSchedulerService starts. This is a Directory Manager service created in native IIS.

**or**

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
                                Repeat task every – Click in the boxes to select a repetition time interval and duration time from the drop-down lists. The drop-down list has the following options
                                <ul>
                                    <li>15 minutes</li>
                                    <li>30 minutes</li>
                                    <li>1 hour</li>
                                    <li>8 hours</li>
                                </ul>
                                In both boxes, you can type values of your choice.
                                The minimum value for both is 2 minutes and the maximum value is less than 1 day i.e, 23h 59m 59s.
                                The schedule will run, wait for the time interval specified in the first box, and then run again until the duration time is met.
                            </li>
                            <li>
                                Stop any task that runs longer than - stop long running schedules by setting a time limit on the amount of time the schedule is allowed to run (execute the action).
                            </li>
                            <li>
                                Expire - set a date and time for the trigger to expire. When:
                                <ul>
                                    <li>
                                        a trigger is expired, it cannot cause the schedule to run and sets the next run to Never
                                    </li>
                                    <li>a single trigger is defined for a schedule and it is disabled, it also sets the next run to Never</li>
                                </ul>
                            </li>
                        </ul>
                        &#160;
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        Daily - Triggers the schedule at the specified date and time and then according to the specified recurrence interval for the schedule.
                        If Recur every is set to 1, it triggers the schedule daily and if it is set to 2, it triggers the schedule every other day at the specified date and time.
                    </td>
                </tr>
                <tr>
                   <td valign="top">
                        Weekly - Triggers the schedule first time at the specified date and time and then next run will be according to the recurrence interval level and on the selected day(s) of the week.
                        If Recur every is set to 1, it triggers the schedule every week and if it is set to 2, it triggers the schedule every other week. The schedule will run at the specified time on each of the specified weekday (s).
                    </td>
                    <td rowspan="2" valign="top">
                        <ul>
                            <li>
                                Expire - set a date and time for the trigger to expire. When:
                                <ul>
                                    <li>
                                        a trigger is expired, it cannot cause the schedule to run and sets the next run to Never
                                    </li>
                                    <li>
                                        a single trigger is defined for a schedule and it is disabled, it also sets the next run to Never
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        &#160;
                    </td>
                </tr>
                <tr>
                    <td>
                        Monthly - Triggers the schedule first time at the selected date and time and then the next run will be based on the selected day of the specified month(s) or the selected day of the week.
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
                                Repeat task every – Click in the boxes to select a repetition time interval and duration time from the drop-down lists. The drop-down list has the following options
                                <ul>
                                    <li>15 minutes</li>
                                    <li>30 minutes</li>
                                    <li>1 hour</li>
                                    <li>8 hours</li>
                                </ul>
                                In both boxes, you can type values of your choice.
                                The minimum value for both is 2 minutes and the maximum value is less than 1 day i.e, 23h 59m 59s.
                                The schedule will run, wait for the time interval specified in the first box, and then run again until the duration time is met.
                            </li>
                            <li>Stop any task that runs longer than - stop long running schedules by setting a time limit on the amount of time the schedule is allowed to run (execute the action).</li>
                            <li>
                                Expire - Set a date and time for the trigger to expire. When:
                                <ul>
                                    <li>a trigger is expired, it cannot cause the schedule to run and sets the next run to Never</li>
                                    <li>a single trigger is defined for a schedule and it is disabled, it also sets the next run to Never</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        