---
title: "Synchronize Schedule"
description: "Synchronize Schedule"
sidebar_position: 130
---

# Synchronize Schedule

The GroupID scheduling function enables you to set any Synchronize job or job collection to run
automatically. Create a Synchronize schedule and add Synchronize jobs and job collections as
targets. When the schedule runs, the target jobs and job collections are executed.

What do you want to do?

- [Create a Synchronize Schedule](#create-a-synchronize-schedule)

## Create a Synchronize Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click **Add Schedule** and select **Synchronize Job**. The **Create
   Schedule** page is displayed.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** displays the schedule name prefixed with _SynchronizeJobPortal__; the
   schedule is displayed with this name in email notifications.
7. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.
8. Add a Synchronize job or a job collection or both to this schedule.

    - Click **Add Jobs** to add a Synchronize job to this schedule. The **Select Jobs to Add**
      dialog box displays Synchronize jobs. Select one or more jobs and click **Add**.
    - Click **Add Job Collection** to add a Synchronize job collection to this schedule. The
      **Select Job Collections to Add** dialog box displays job collections from Synchronize. Select
      one or more job collections from the list and click **Add**.

    The selected job(s) and job collection(s) are listed in the **Target(s)** area. They will be
    executed when the schedule runs.  
    To remove a job or job collection in the **Target(s)**area, click **Remove** for it.  
    To remove all target objects, click **Remove All**.

9. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
   schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
   topic to add triggers.
10. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store. Follow step 12 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
    topic for details.
11. On the **Create Schedule** page, click **Create Schedule**.
12. On the **Schedules** page, click **Save**.  
    The schedule is displayed under **Synchronize**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
    topic for more info.

See Also

- [Schedules](/docs/directorymanager/11.0/signin/schedule/overview.md)
