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

The User Life Cycle schedule monitors the profile validation process in Directory Manager. It
performs the following main functions in keeping with the user profile validation settings for an
identity store:

- Monitors the profile validation dates of users
- Generates reminder emails
- Disables users who don't validate their profiles within the given period

What do you want to do?

- [Create a User Life Cycle Schedule](#create-a-user-life-cycle-schedule)

## Create a User Life Cycle Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click **Add Schedule** and select **User Life Cycle Job**. The
   **Create Schedule** page appears.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with \_UserLifeCycle\_\_;
   email notifications show the schedule with this name.
7. Select a Directory Manager portal URL in the **Portal URL** dropdown list to include it in notifications
   generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** dropdown list, select a Scheduler service that's
   responsible for triggering this schedule. The number of services in the list depends on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Directory Manager Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.
9. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion that,
   when met, starts the schedule. Follow step 11 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
   topic to add triggers.
10. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store. Follow step 12 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
    topic for details.
11. On the **Create Schedule** page, click **Create Schedule**.
12. On the **Schedules** page, click **Save**.  
    The schedule is displayed under **User Life Cycle**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)topic
    for more information.

See Also

- [Schedules in Directory Manager](/docs/directorymanager/11.0/signin/schedule/overview.md)
- [Configure User Profile Validation in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/configure/profilevalidation.md)
