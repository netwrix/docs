---
title: "Manage Schedules"
description: "Manage Schedules"
sidebar_position: 160
---

# Manage Schedules

Directory Manager enables you to run, modify, disable, and delete the schedules defined for an
identity store.

## View the Schedules in an Identity Store

Follow the steps to view the schedules in an identity store.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to a job name to view the schedules defined
for it.
The following is displayed for a schedule:

| Label | Description |
| --- | --- |
| Enable | Shows whether a schedule is enabled or disabled. Use the toggle button next to a schedule to disable an enabled schedule and vice versa. Directory Manager does not execute a disabled schedule. |
| Job Name | The name of a schedule. |
| Target(s) | The group(s) and container(s) that a schedule processes. |
| Last Run  | The date and time a schedule last ran. |
| Next Run  | The next date and time a schedule will run. |
| Actions   | Click the ellipsis button for a schedule in the **Actions** column and select an option: <br /><ul><li>Edit – To update the schedule's settings, such as targets, triggers, and notifications.</li><li>Delete – To delete a schedule.</li><li>Run – To manually run a schedule instantly.</li><li>Terminate – To manually terminate a running schedule instantly. This option is available for schedules that are currently running.</li></ul> |

### Search a Schedule

Directory Manager enables you to search for a schedule by different attributes, such as job name,
job target, last run time, the kind of notifications set for a job and the user name used for
authentication in a job.

Follow the steps to apply a filter.

Step 1 – On the Schedules page, expand the Schedule Filters area by clicking the plus sign.

Step 2 – In the _Select a Filter_ box, select an attribute to filter schedules.

Step 3 – In the _Select an Operator_ drop-down list, select an operator to apply to the selected
attribute. This drop-down displays the operators on the basis of the selected attribute. Available
operators are:

| Condition | Description |
| --- | --- |
| Starts with | Returns everything that starts with the value. |
| Does not start with | Returns everything that does not start with the value. |
| Ends with | Returns everything that ends with the value. <br />Searching with this condition is resource-intensive for the directory. |
| Does not end with   | Returns everything that does not end with the value. <br />Searching with this condition is resource-intensive for the directory. |
| Is exactly | Returns everything that matches the value. |
| Is not | Returns everything that does not match the value. |
| Contains | Returns everything that contains the value. <br />Searching with this condition is resource-intensive for the directory. |
| Not contain | Returns everything that does not contain the value. <br />Searching with this condition is resource-intensive for the directory.  |
| Present | Returns everything that has a value. |
| Not present | Returns everything that does not have a value. |
| Greater or equal | Returns everything with a value greater than or equal to the given value. |
| Less or equal | Returns everything with a value lesser than or equal to the given value. |

Step 4 – In the _Select a Value_ box, specify a value for the attribute. The selected attribute and
operator determine the kind of value that can be entered in this box. For some operators, such as
_Present_ and _Not Present_, this field is not available. These operators check if a value for the
attribute is present or not.

- To add more filters – On adding a filter, the next row is displayed, so you can add another
  filter.
- To remove a filter row – To remove a filter row, click **Remove** for it.
- To remove the filter – To remove all the filter rows, click **Clear**.

Step 5 – To apply the filter, click **Apply**. With multiple filters, schedules that satisfy all the
filters are displayed.

## Enable/Disable a Schedule

Follow the steps to enable/disable a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Use the Enable toggle button for a schedule to enable or disable it.
A disabled schedule is not executed in the identity store.

Step 6 – Click **Save**.

## Update Triggers for a Schedule

A trigger is a criterion that, when met, starts the execution of a schedule.

Follow the steps to update triggers for a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Edit**.

Step 6 – On the Edit Schedule page, the Triggers area displays the trigger(s) set for the schedule.

- To update a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.
- To remove a trigger, click **Remove** for it.

Follow step 11 in the [Group Usage Service Schedule](/docs/directorymanager/11.1/admincenter/schedule/groupusageservice.md) topic to manage triggers.

Step 7 – Click **Update Schedule**.

Step 8 – Click **Save** on the Schedules page.

:::important Password Re-insertion Required
Due to security enhancements, when editing any schedule settings, you must re-enter the account password in the Authentication section even if you are not changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product. The password must be re-entered when:
- Updating triggers
- Updating targets
- Updating notification settings
- Making any other changes to the schedule
:::

## Update Targets for a Schedule

Targets in a schedule are the objects processed by that schedule.

Follow the steps to update the targets.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Edit**.

Step 6 – On the Edit Schedule page, the Target(s) area displays the target objects for the
schedule.
Target types differ for different schedule types. For example, you can set containers as targets for
a Group Lifecycle schedule; and jobs and job collections for a Synchronize schedule. Other
schedules, such as a User Lifecycle schedule, may not require a target, as they execute certain
functions for an identity store.

- To add a target object to a schedule, refer to the instructions for the respective schedule.
- To remove a target object, click **Remove** for it.
- To remove all target objects, click **Remove All**.

Step 7 – Click **Update Schedule**.

Step 8 – Click **Save** on the Schedules page.

## Update Notification Settings for a Schedule

Follow the steps to update notification settings for a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Edit**.

Step 6 – On the Edit Schedule page, click the **Notifications** button to update notification
settings for the schedule.
Notification settings differ for different schedule types. For example, a Smart Group Update
schedule has a different set of notification options from a Group Lifecycle schedule. Other
schedules, such as the Directory Manager Entitlement and Workflow Acceleration schedules, do not
have notification settings.
To manage the notification settings for a schedule, refer to the instructions for the respective
schedule.

Step 7 – Click **Update Schedule**.

Step 8 – Click **Save** on the Schedules page.

## Run a Schedule Instantly

Follow the steps to run a schedule instantly.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Run** to execute it instantly.

## Terminate a Running Schedule

You can terminate a schedule that is currently running in an identity store. On termination, objects
that have already been processed by the schedule will not be reverted while the remaining stay
unprocessed.

Follow the steps to terminate a running schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a currently running schedule and select **Terminate** to stop
it instantly.

## Delete a Schedule

Follow the steps to delete a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Delete**.
The Delete option is not available for system-defined schedules.

Step 6 – On the Delete Schedule dialog box, click **Delete**.

Step 7 – Click **Save** on the Schedules page.
