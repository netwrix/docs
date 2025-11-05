---
title: "User Life Cycle Schedule"
description: "User Life Cycle Schedule"
sidebar_position: 140
---

# User Life Cycle Schedule

The User Life Cycle schedule monitors the profile validation process in Directory Manager. It
performs the following main functions in keeping with the user profile validation settings for an
identity store:

- Monitors the profile validation dates of users
- Generates reminder emails
- Disables users who do not validate their profiles within the given period

## Create a User Life Cycle Schedule

Follow the steps to create a User Life Cycle Schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **User Life Cycle Job**. The
Create Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_UserLifeCycle\_\_; the
schedule is displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in
notifications generated for the schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 9 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic to add triggers.

Step 10 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic for additional information.

:::important Password Re-insertion Required
Due to security enhancements, when editing a schedule, you must re-enter the account password in the Authentication section, even if you are not changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
:::

Step 11 – On the Create Schedule page, click **Create Schedule**.

Step 12 – On the Schedules page, click **Save**.
The schedule is displayed under **User Life Cycle**. See the
[View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store)topic
for additional information.
