---
title: "Create a Group Usage Service Schedule in Directory Manager"
description: "Create a Group Usage Service schedule that reads Exchange expansion logs to record when distribution lists were last used."
keywords:
  - Group Usage Service schedule
  - Exchange expansion events
  - message tracking log
  - distribution list usage
  - Scheduler service
sidebar_position: 10
---

# Create a Group Usage Service Schedule in Directory Manager

A Group Usage Service schedule monitors expansion events and timestamps affected groups of the
Microsoft Exchange Servers for an identity store.

An expansion event occurs when an Exchange Server expands a distribution list for sending messages.
The Exchange Server records the event in its message tracking log. The Group Usage Service schedule reads this log to find the timestamp showing when the distribution list was last used.

The timestamp is then used by the
[Create a Group Life Cycle Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/grouplifecycle.md)
to extend or reduce the life of mail-enabled distribution groups based on their usage. See the
[Enable Group Usage Lifecycle](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md#enable-group-usage-lifecycle)
topic.

When you create a Group Usage Service schedule, specify a job triggering criterion, the containers the job processes, and the messaging servers for reading expansion logs.

What do you want to do?

- [Create a Group Usage Service Schedule](#create-a-group-usage-service-schedule)

## Create a Group Usage Service Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Schedules** under Settings in the left pane.
4. On the Schedules page, click **Add Schedule** and select **Group Usage Service Job**.  
   The **Create Schedule** page appears.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with \_GUS\_\_; email notifications show the schedule with this name.
7. Select a Directory Manager portal URL in the **Portal URL** dropdown list to include it in notifications
   generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** dropdown list, select a Scheduler service that's responsible for triggering this schedule. The number of services in the list depends on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Directory Manager Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.
9. You can specify containers as targets for the schedule. The schedule processes all groups in
   those containers and sub-containers.

    - Select the **Include all containers** checkbox to run the schedule on all the containers in
      the identity store.  
      Or
    - Click **Add Container** to add one or more containers as targets. The **Add Container(s)**
      dialog box shows the domain name and the OUs in the identity store. Select the checkboxes for the required containers and click **Add**; the selected containers appear in the **Target(s)** area. To exclude a sub-container, clear the checkbox for it on the
      **Add Container(s)** dialog box.
    - To remove a container in the **Target(s)** area, click **Remove** for it.  
      To remove all target objects, click **Remove All**.

10. You can also specify one or more messaging servers. The job reads expansion logs from these
    servers.

    1. Click **Add Server** in the **Messaging Server** area. The **Add Messaging Servers** dialog
       box displays the messaging servers in the identity store.
    2. Select the checkboxes for the messaging servers that the Group Usage Service schedule should
       process.

        Or

        Select the Server Name checkbox if you want this job to read the expansion logs of all
        messaging servers in the identity store.

    3. Click **Add**. The messaging servers appear in the **Messaging Server** area.

11. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
    schedule that, when met, starts the execution of the schedule.

    1. In the **Begin the Task** dropdown list on the **New Trigger** dialog box, select a trigger
       to start the schedule.

        - **On a schedule:** Starts a schedule at a specific time of day or multiple times on a daily, weekly, or monthly schedule.
        - **At startup:** Starts the schedule every time the GroupIDSchedulerService starts. This is a Directory Manager service created in native IIS.

    2. On selecting an option, the dialog box displays relevant settings for the trigger.  
       The **Triggers** dialog box is the same as the one in Windows Task Scheduler. See the
       [Triggers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc748841%28v%3dws.10%29)
       page for help.
    3. After specifying the settings, click **Add**. The trigger appears in the **Triggers** area.

    A schedule can have one or more triggers, allowing the schedule to be started in many ways. With
    multiple triggers, the schedule starts when any of the triggers occurs.  
    **To enable or disable a trigger** - Click **Edit** for a trigger in the **Triggers** area and
    use the toggle button at the top of the **Update Trigger** dialog box to enable or disable the
    trigger.  
    **To remove a trigger** - Click **Remove** for a trigger to remove it.

12. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store.  
    The **Authentication** dialog box displays your accounts in the respective identity store that
    you have used for signing in. Select an account to authenticate with it or click **Login with a
    different user** to provide the credentials of another account to run the schedule in the
    identity store.

    :::note
    Ensure this account falls under a high-priority security role that has administrative
    permissions in the identity store (for example, Administrator).
    :::

    :::note
    If you're creating this schedule in a Microsoft Entra ID identity store, you can only
    specify the signed-in user's account. See the
    [Schedules for Microsoft Entra ID Identity Store](/docs/directorymanager/11.0/signin/schedule/overview.md#schedules-for-microsoft-entra-id-identity-store)
    section of the
    [Schedules in Directory Manager](/docs/directorymanager/11.0/signin/schedule/overview.md) topic for
    additional information.
    :::

13. On the **Create Schedule** page, click **Create Schedule**.
14. On the **Schedules** page, click **Save**.  
     You can now view the schedule under **Group Usage Service**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
    topic for additional information.

See Also

- [Schedules in Directory Manager](/docs/directorymanager/11.0/signin/schedule/overview.md)
- [Directory Manager Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
