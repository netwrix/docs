---
title: "Create a Directory Manager Synchronize Schedule"
description: "Create a schedule that runs Synchronize jobs and job collections automatically, and set its targets, triggers, and authentication."
keywords:
  - Synchronize schedule
  - Synchronize jobs
  - job collections
  - scheduled synchronization
  - Directory Manager schedule
sidebar_position: 130
---

# Create a Directory Manager Synchronize Schedule

Use the Directory Manager scheduling function to configure any Synchronize job or job collection to run automatically. Create a Synchronize schedule and add Synchronize jobs and job collections as targets. When the schedule runs, the target jobs and job collections are executed.

## Create a Synchronize schedule

To create a Synchronize schedule:

1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.

3. Click **Schedules** under Settings in the left pane.

4. On the Schedules page, click **Add Schedule** and select **Synchronize Job**. The Create Schedule page appears.

5. In the Schedule Name box, enter a name for the schedule.

6. Check the Name Preview box. It displays the schedule name prefixed with \_SynchronizeJobPortal\_\_. Email notifications show the schedule with this name.

7. In the Scheduler Service Name dropdown list, select a Scheduler service to trigger this schedule. The list displays a number of services that depends on the number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler service. See the [Directory Manager Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional information.

   :::note
   When you select a Scheduler service:

   - The Scheduler service for the Directory Manager instance on which you are creating the schedule is selected by default. You can select the Scheduler service of another instance as well.
   - The Scheduler service can be changed even after creating the schedule. On the next run, the newly selected Scheduler service triggers the schedule.
   - If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service can be selected automatically.
   - If you run a schedule manually in Admin Center, the Scheduler service of that instance is used.
   :::

8. Add a Synchronize job or a job collection or both to this schedule.

   - Click **Add Jobs** to add a Synchronize job to this schedule. The Select Jobs to Add dialog box displays Synchronize jobs. Select one or more jobs and click **Add**.
   - Click **Add Job Collection** to add a Synchronize job collection to this schedule. The Select Job Collections to Add dialog box displays job collections from Synchronize. Select one or more job collections from the list and click **Add**.

   The selected jobs and job collections are listed in the Targets area. They are executed when the schedule runs. To remove a job or job collection in the Targets area, click **Remove** for it. To remove all target objects, click **Remove All**.

9. Click **Add Triggers** in the Triggers area to specify a triggering criterion that, when met, starts the execution of the schedule. Follow step 11 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic to add triggers.

10. Click **Add Authentication** in the Authentication area to specify an account for running the schedule in the identity store. Follow step 12 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic for additional information.

    :::important Password Re-insertion Required
    Due to security enhancements, when editing a schedule, you must re-enter the account password in the Authentication section, even if you aren't changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
    :::

11. On the Create Schedule page, click **Create Schedule**.

12. On the Schedules page, click **Save**. You can now view the schedule under **Synchronize**. See the [View the Schedules in an Identity Store](manage.md#view-the-schedules-in-an-identity-store) topic for additional information.
