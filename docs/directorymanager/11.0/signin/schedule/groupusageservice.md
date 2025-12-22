---
title: "Group Usage Service Schedule"
description: "Group Usage Service Schedule"
sidebar_position: 10
---

# Group Usage Service Schedule

A Group Usage Service schedule monitors expansion events and timestamps affected groups of the
Microsoft Exchange Server(s) for an identity store.

An expansion event occurs when an Exchange Server expands a distribution list for sending messages.
The event is recorded in the Exchange Server's message tracking log, which the Group Usage Service
schedule reads, parsing for the timestamp that indicates when the distribution list was last used.

The timestamp is then used by the
[Group Life Cycle Schedule](/docs/directorymanager/11.0/signin/schedule/grouplifecycle.md)
to extend or reduce the life of mail-enabled distribution groups based on their usage. See the
[Enable Group Usage Lifecycle](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md#enable-group-usage-lifecycle)
topic.

While creating a Group Usage Service schedule, you have to specify a job triggering criterion, the
containers the job will process, and the messaging servers for reading expansion logs.

What do you want to do?

- [Create a Group Usage Service Schedule](#create-a-group-usage-service-schedule)

## Create a Group Usage Service Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Schedules** under Settings in the left pane.
4. On the Schedules page, click **Add Schedule** and select **Group Usage Service Job**.  
   The **Create Schedule** page is displayed.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with _GUS__; the schedule is
   displayed with this name in email notifications.
7. Select a GroupID portal URL in the **Portal URL** drop-down list to include it in notifications
   generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.
9. You can specify containers as targets for the schedule. The schedule will process all groups in
   those containers and sub-containers.

    - Select the **Include all containers** check box to run the schedule on all the containers in
      the identity store.  
      Or
    - Click **Add Container** to add one or more containers as targets. The **Add Container(s)**
      dialog box shows the domain name and the OUs in the identity store. Select the check boxes for
      the required containers and click **Add**; the selected containers are displayed in the
      **Target(s)** area. To exclude a sub-container, clear the check box for it on the **Add
      Container(s)** dialog box.
    - To remove a container in the **Target(s)** area, click **Remove** for it.  
      To remove all target objects, click **Remove All**.

10. You can also specify one or more messaging servers. The job reads expansion logs from these
    servers.

    1. Click **Add Server** in the **Messaging Server** area. The **Add Messaging Servers** dialog
       box displays the messaging servers in the identity store.
    2. Select the check boxes for the messaging servers that the Group Usage Service schedule should
       process.

        Or

        Select the Server Name check box if you want this job to read the expansion logs of all
        messaging servers in the identity store.

    3. Click **Add**. The messaging server(s) are displayed in the **Messaging Server** area.

11. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
    schedule, that, when met, starts the execution of the schedule.

    1. In the **Begin the Task** drop-down list on the **New Trigger** dialog box, select a trigger
       to start the schedule.

        - **On a schedule:** To start a schedule at a specific time of day or starting it multiple
          times on a daily, weekly, or monthly schedule.
        - **At startup:** To start the schedule every time the GroupIDSchedulerService starts. This
          is a GroupID service created in native IIS.

    2. On selecting an option, the dialog box displays relevant settings for the trigger.  
       The **Triggers** dialog box is the same as available in Windows Task Scheduler. Visit the
       [Triggers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc748841%28v%3dws.10%29)
       page for help.
    3. After specifying the settings, click **Add**. The trigger is displayed in the **Triggers**
       area.

    A schedule can have one or more triggers, allowing the schedule to be started in many ways. With
    multiple triggers, the schedule will start when any of the triggers occur.  
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

    NOTE: Make sure this account falls under a high priority security role that has elevated
    permissions in the identity store (for example, Administrator).

    NOTE: If you are creating this schedule in a Microsoft Entra ID identity store, you can only
    specify the logged-in user's account. See the
    [Schedules for Microsoft Entra ID Identity Store](/docs/directorymanager/11.0/signin/schedule/overview.md#schedules-for-microsoft-entra-id-identity-store)
    section of the
    [Schedules](/docs/directorymanager/11.0/signin/schedule/overview.md) topic for
    additional information.

13. On the **Create Schedule** page, click **Create Schedule**.
14. On the **Schedules** page, click **Save**.  
     The schedule is displayed under **Group Usage Service**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
    topic for more info.

See Also

- [Schedules](/docs/directorymanager/11.0/signin/schedule/overview.md)
- [Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
