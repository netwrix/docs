---
title: "Scheduling and Notifications"
description: "Scheduling and Notifications"
sidebar_position: 60
---

# Scheduling and Notifications

On the **Scheduling and Notifications** page, you can set the schedule on the basis of which the job
collection can run in future and can also set the notifications settings for the job collection.

Step 1 – On the **Scheduling and Notifications** page:

1. In the **Schedule Job Collection** section, choose from existing schedules from the drop down
   list.
2. In the **Schedule** section, the **Task name** drop down lists the Smart Group Update jobs
   existing in the identity store for the Active Directory domain that is provided as destination in
   this Synchronize job. Select a job that you want to run along with this Synchronize job. The
   selected job will run each time the Synchronize job is run either manually or from the
   Synchronize job scheduler.

    If you are modifying an existing job collection, you can also a new schedule for the job
    collection. Visit [Synchronize Schedule](/docs/directorymanager/11.1/admincenter/schedule/synchronize.md)

Step 2 – On the **Notifications** section, set up email notification of job collection run results.
This feature requires Microsoft Exchange. Notifications are disabled by default and can be enabled
and disabled from this page. Select the **Enable notifications** check box to enable them.

Step 3 – Enter the email address of notification recipients in the given box.

Step 4 – From the **Send notification** list, select the notification trigger event. Options are:

:::note
This step requires that the identity store of the destination should be configured.
:::


- **Always**: Send a notification every time the job collection is run, regardless of outcome.
- **Records are updated**: Send a notification only when one or more records have been updated.
- **One or more errors occur**: Send a notification only when errors occur while executing the job
  collection.
- **Job fails**: Send a notification only when a fatal error occurs causing the job collection to
  fail.

Step 5 – Select **Preview job collection when finished** checkbox to preview the job collection
before executing it.

Step 6 – To review the information and changes regarding the job collection, click **Review Your
Changes** at the bottom.

Step 7 – Click **Finish** to exit the wizard and create the job collection.

Step 8 – Once you run the job collection, a workflow request is triggered.

Step 9 – Generated workflow request will be displayed in the [Requests](/docs/directorymanager/11.1/portal/request/overview.md)
section for the workflow approver(s). If the approver approves the workflow request, the job will
execute the results.
