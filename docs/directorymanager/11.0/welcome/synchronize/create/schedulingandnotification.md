---
title: "Schedule a Job Collection and Set Notifications"
description: "Choose a schedule, a Smart Group Update job, and email notification triggers for a Synchronize job collection in GroupID."
keywords:
  - job collection schedule
  - Synchronize notifications
  - Smart Group Update job
  - email notification triggers
sidebar_position: 20
---

# Schedule a Job Collection and Set Notifications

On the **Scheduling and Notifications** page, you can set the schedule the job collection follows
and configure its notification settings.

1. On the **Scheduling and Notifications** page:

    1. In the **Schedule Job Collection** section, choose from existing schedules from the dropdown
       list.
    2. In the **Schedule** section, the **Task name** dropdown lists the Smart Group Update jobs
       that exist in the identity store for the Active Directory domain that you provide as the
       destination in this Synchronize job. Select a job that you want to run along with this
       Synchronize job. The selected job runs each time the Synchronize job runs, either
       manually or from the Synchronize job scheduler.

        If you're modifying an existing job collection, you can also add a new schedule for the job
        collection. For details, see
        [Create a GroupID Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md).

2. In the **Notifications** section, set up email notification of job collection run results. This
   feature requires Microsoft Exchange. Notifications are disabled by default. You can enable and
   disable them from this page. Select the **Enable notifications** checkbox to enable them.
3. Enter the email address of notification recipients in the given box.
4. From the **Send notification** list, select the notification trigger event. Options are:

    :::note
    This step requires that you configure the identity store of the destination.
    :::

    - **Always**: Send a notification every time the job collection runs, regardless of outcome.
    - **Records are updated**: Send a notification only when one or more records have been updated.
    - **One or more errors occur**: Send a notification only when errors occur while executing the
      job collection.
    - **Job fails**: Send a notification only when a fatal error occurs causing the job collection
      to fail.

5. Select the **Preview job collection when finished** checkbox to preview the job collection before
   executing it.
6. To review the information and changes regarding the job collection, click **Review Your Changes**
   at the bottom.
7. Click **Finish** to exit the wizard and create the job collection.
8. After you run the job collection, a workflow request is triggered.
9. The generated workflow request appears in the
   [Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md) section for the
   workflow approvers. If the approver approves the workflow request, the job executes the
   results.

**See Also**

- [Create a Job Collection in GroupID Synchronize ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
