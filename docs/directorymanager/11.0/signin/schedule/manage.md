---
title: "Manage Schedules in Directory Manager"
description: "View, search, enable, disable, update, run, terminate, and delete the schedules defined for a Directory Manager identity store."
keywords:
  - manage schedules
  - enable or disable schedule
  - run schedule
  - terminate schedule
  - schedule filters
sidebar_position: 160
---

# Manage Schedules in Directory Manager

Use Directory Manager to run, modify, disable, and delete the schedules defined for an identity store.

What do you want to do?

- [View the Schedules in an Identity Store ](#view-the-schedules-in-an-identity-store)
- [Enable or Disable a Schedule](#enable-or-disable-a-schedule)
- [Update Triggers for a Schedule](#update-triggers-for-a-schedule)
- [Update Targets for a Schedule](#update-targets-for-a-schedule)
- [Update Notification Settings for a Schedule](#update-notification-settings-for-a-schedule)
- [Run a Schedule Instantly](#run-a-schedule-instantly)
- [Terminate a Running Schedule](#terminate-a-running-schedule)
- [Delete a Schedule](#delete-a-schedule)

## View the Schedules in an Identity Store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign next to a job name to view the schedules defined
   for it.  
   Each schedule shows the following information:

    | Label     | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
    | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Enable    | Shows whether a schedule is enabled or disabled. Use the toggle button next to a schedule to disable an enabled schedule and vice versa. Directory Manager doesn't run a disabled schedule.                                                                                                                                                                                                                             |
    | Job Name  | The name of a schedule.                                                                                                                                                                                                                                                                                                                                                                                            |
    | **Target(s)** | The groups and containers that a schedule processes.                                                                                                                                                                                                                                                                                                                                                           |
    | Last Run  | The date and time a schedule last ran.                                                                                                                                                                                                                                                                                                                                                                             |
    | Next Run  | The next date and time a schedule runs.                                                                                                                                                                                                                                                                                                                                                                        |
    | Actions   | Click the ellipsis button for a schedule in the **Actions** column and select an option: - **Edit:** to update the schedule's settings, such as targets, triggers, and notifications. - **Delete:** to delete a schedule. - **Run:** to manually run a schedule instantly. - **Terminate:** to manually terminate a running schedule instantly. This option is available for schedules that are running. |

### Search a Schedule

Search for a schedule by attributes, such as job name, job target, last run time, the kind of notifications set for a job, and the username used for authentication in a job.

**To apply a filter:**

1. On the **Schedules** page, expand the **Schedule Filters** area by clicking the plus sign.
2. In the _Select a Filter_ box, select an attribute to filter schedules.
3. In the _Select an Operator_ dropdown list, select an operator to apply to the selected attribute. This dropdown list displays the operators based on the selected attribute.
   Available operators are:

    (missing or bad snippet)

4. In the _Select a Value_ box, specify a value for the attribute. The selected attribute and
   operator determine the kind of value you can enter in this box. For some operators, such as
   _Present_ and _Not Present_, this field isn't available. These operators check whether the attribute has a value.

    **To add more filters** - After you add a filter, the next row appears, so you can add another filter.  
     **To remove a filter row** - To remove a filter row, click **Remove** for it.  
     **To remove the filter** - To remove all the filter rows, click **Clear**.

5. To apply the filter, click **Apply**. With multiple filters, the page displays only schedules that satisfy all the filters.

## Enable or Disable a Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign for a job to view the schedules defined for it.
5. Use the **Enable** toggle button for a schedule to enable or disable it.  
   Directory Manager doesn't run a disabled schedule in the identity store.
6. Click **Save**.

## Update Triggers for a Schedule

A trigger is a criterion that, when met, starts a schedule.

**To update triggers for a schedule:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select **Edit**.
6. On the **Edit Schedule** page, the **Triggers** area displays the triggers set for the schedule.

    - To update a trigger, click **Edit** for it.
    - To add a new trigger, click **Add Trigger**.
    - To remove a trigger, click **Remove** for it.

    Follow step 11 in the
    [Create a Group Usage Service Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md) topic
    to manage triggers.

7. Click **Update Schedule**.
8. Click **Save** on the **Schedules** page.

## Update Targets for a Schedule

Targets in a schedule are the objects processed by that schedule.

**To update the targets:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select **Edit**.
6. On the **Edit Schedule** page, the **Target(s)** area displays the target objects for the
   schedule.  
   Target types differ for different schedule types. For example, you can set containers as targets
   for a Group Lifecycle schedule, and jobs and job collections for a Synchronize schedule. Other schedules, such as a User Lifecycle schedule, might not require a target, as they run certain functions for an identity store.

    - To add a target object to a schedule, refer to the instructions for the respective schedule.
    - To remove a target object, click **Remove** for it.
    - To remove all target objects, click **Remove All**.

7. Click **Update Schedule**.
8. Click **Save** on the **Schedules** page.

## Update Notification Settings for a Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select **Edit**.
6. On the **Edit Schedule** page, click the **Notifications** button to update notification settings
   for the schedule.  
   Notification settings differ for different schedule types. For example, a Smart Group Update
   schedule has a different set of notification options from a Group Lifecycle schedule. Other
   schedules, such as the Directory Manager Entitlement and Workflow Acceleration schedules, don't have notification settings.  
   To manage the notification settings for a schedule, refer to the instructions for the respective
   schedule.
7. Click **Update Schedule**.
8. Click **Save** on the **Schedules** page.

## Run a Schedule Instantly

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select **Run** to run it instantly.

## Terminate a Running Schedule

You can terminate a schedule that is running in an identity store. When you terminate a schedule, Directory Manager doesn't revert objects the schedule has already processed, and the remaining objects stay unprocessed.

**To terminate a running schedule:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a running schedule and select **Terminate** to stop it
   instantly.

## Delete a Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select **Delete**.  
   The **Delete** option isn't available for system-defined schedules.
6. In the **Delete Schedule** dialog box, click **Delete**.
7. Click **Save** on the **Schedules** page.

See Also

- [Schedules in Directory Manager](/docs/directorymanager/11.0/signin/schedule/overview.md)
