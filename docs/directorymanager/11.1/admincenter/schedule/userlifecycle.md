---
title: "Create a Directory Manager User Life Cycle Schedule"
description: "Create a schedule that tracks profile validation dates, sends reminder emails, and disables users who don't validate their profiles in time."
keywords:
  - user life cycle
  - profile validation
  - reminder emails
  - disable users
  - Directory Manager schedule
sidebar_position: 140
---

# Create a Directory Manager User Life Cycle Schedule

The User Life Cycle schedule monitors the profile validation process in Directory Manager. It performs these main functions in keeping with the user profile validation settings for an identity store:

- Monitors the profile validation dates of users
- Generates reminder emails
- Disables users who don't validate their profiles within the given period

## Create a User Life Cycle schedule

To create a User Life Cycle schedule:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Schedules** under Settings in the left pane.
4. On the Schedules page, click **Add Schedule** and select **User Life Cycle Job**. The Create Schedule page appears.
5. In the Schedule Name box, enter a name for the schedule.
6. Check the Name Preview box. It displays the schedule name prefixed with \_UserLifeCycle\_\_. The schedule appears with this name in email notifications.
7. Select a Directory Manager portal URL in the Portal URL dropdown list to include it in notifications generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the Scheduler Service Name dropdown list, select a Scheduler service to trigger this schedule. The number of services in the list depends on the number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler service. See the [Directory Manager Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional information.

   :::note
   When selecting a Scheduler service:

   - The Scheduler service for the Directory Manager instance on which you are creating the schedule is selected by default. However, you can select the Scheduler service of another instance as well.
   - The Scheduler service can be changed even after creating the schedule. On the next run, the newly selected Scheduler service triggers the schedule.
   - If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service can be selected automatically.
   - If you run a schedule manually in Admin Center, the Scheduler service of that instance is used.
   :::

9. Click **Add Triggers** in the Triggers area to specify a triggering criterion that, when met, starts the execution of the schedule. Follow step 11 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic to add triggers.
10. Click **Add Authentication** in the Authentication area to specify an account for running the schedule in the identity store. Follow step 12 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic for additional information.

    :::important Password Re-insertion Required
    Due to security enhancements, when editing a schedule, you must re-enter the account password in the Authentication section, even if you aren't changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
    :::

11. On the Create Schedule page, click **Create Schedule**.
12. On the Schedules page, click **Save**. The schedule appears under **User Life Cycle**.

For more information, see the [View the Schedules in an Identity Store](manage.md#view-the-schedules-in-an-identity-store) topic.
