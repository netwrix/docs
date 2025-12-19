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

The timestamp is then used by the [Group Life Cycle Schedule](/docs/directorymanager/11.1/admincenter/schedule/grouplifecycle.md) to extend or reduce
the life of mail-enabled distribution groups based on their usage. See the
[Enable Group Usage Lifecycle](/docs/directorymanager/11.1/admincenter/identitystore/configure/grouplifecycle.md#enable-group-usage-lifecycle)
topic.

While creating a Group Usage Service schedule, you have to specify a job triggering criterion, the
containers the job will process, and the messaging servers for reading expansion logs.

## Create a Group Usage Service Schedule

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Group Usage Service Job**.
The Create Schedule page is displayed.

Step 5 – In the **Schedule Name** box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_GUS\_\_; the schedule is
displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the **Portal URL** drop-down list to include it in
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

Step 9 – You can specify containers as targets for the schedule. The schedule will process all
groups in those containers and sub-containers.

- Select the **Include all containers** check box to run the schedule on all the containers in the
  identity store.
  Or
- Click **Add Container** to add one or more containers as targets. The Add Container(s) dialog box
  shows the domain name and the OUs in the identity store. Select the check boxes for the required
  containers and click **Add**; the selected containers are displayed in the Target(s) area. To
  exclude a sub-container, clear the check box for it on the Add Container(s) dialog box.
- To remove a container in the Target(s) area, click **Remove** for it.
  To remove all target objects, click **Remove All**.

Step 10 – You can also specify one or more messaging servers. The job reads expansion logs from
these servers.

1. Click **Add Server** in the Messaging Server area. The Add Messaging Servers dialog box displays
   the messaging servers in the identity store.
2. Select the check boxes for the messaging servers that the Group Usage Service schedule should
   process.

**Or**

    Select the Server Name check box if you want this job to read the expansion logs of all
    messaging servers in the identity store.

3. Click **Add**. The messaging server(s) are displayed in the Messaging Server area.

Step 11 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. See the [Triggers](/docs/directorymanager/11.1/admincenter/schedule/triggers.md)
topic for information on the triggering criterion setting.

Step 12 – After specifying the settings for triggers, click **Add**. The trigger is displayed in the
Triggers area.

A schedule can have one or more triggers, allowing the schedule to be started in many ways. With
multiple triggers, the schedule will start when any of the triggers occur.
To enable or disable a trigger - Click **Edit** for a trigger in the Triggers area and use the
toggle button at the top of the Update Trigger dialog box to enable or disable the trigger.
To remove a trigger - Click **Remove** for a trigger to remove it.

Step 13 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store.
The Authentication dialog box displays your accounts in the respective identity store that you have
used for signing in. Select an account to authenticate with it or click **Login with a different
user** to provide the credentials of another account to run the schedule in the identity store.

:::note
Make sure this account falls under a high priority security role that has elevated permissions
in the identity store (for example, Administrator).
:::

:::important Password Re-insertion Required
Due to security enhancements, when editing a schedule, you must re-enter the account password in the Authentication section, even if you are not changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
:::

:::note
If you are creating this schedule in a Microsoft Entra ID identity store, you can only specify
the logged-in user's account. See the
[Schedules for Microsoft Entra ID Identity Store](overview.md#schedules-for-microsoft-entra-id-identity-store)
section of the [Schedules](/docs/directorymanager/11.1/admincenter/schedule/overview.md) topic for additional information.
:::


Step 14 – On the Create Schedule page, click **Create Schedule**.

Step 15 – On the Schedules page, click **Save**.
 The schedule is displayed under Group Usage Service. See the
[View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store) topic
for additional information.
