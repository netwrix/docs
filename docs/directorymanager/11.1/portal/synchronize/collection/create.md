---
title: "Create a Job Collection"
description: "Create a Job Collection"
sidebar_position: 40
---

# Create a Job Collection

A job collection is a group of individual jobs that you want to run in a particular order. For
instance, you can create a job collection to synchronize user accounts between multiple Active
Directory domains. You first create multiple Synchronize jobs to transfer data between two
directories, and then combine them in a job collection. Then you can execute the job collection
instead of executing each job one by one.

To understand how workflows work with Synchronize jobs, see the
[Synchronize Jobs and Workflows](/docs/directorymanager/11.1/admincenter/workflow/overview.md#synchronize-jobs-and-workflows)
topic.

## Create a job Collection

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On the Synchronize portal, click **Create New** and then click **Job Collection.**

Step 3 – On the [Choose your Job Template](/docs/directorymanager/11.1/portal/synchronize/collection/chooseyourjobcollectiontemplate.md) page, enter job
collection details and select whether to use a job collection template or create the job collection
from scratch.

Step 4 – Click **Next Step**

Step 5 – On the [Synchronized Job Collection](/docs/directorymanager/11.1/portal/synchronize/collection/synchronizedjobcollection.md) page, add jobs to the
collection. You can either add existing jobs or create new jobs to add them to the job collection.

Step 6 – On the [Scheduling and Notifications](/docs/directorymanager/11.1/portal/synchronize/collection/schedulingandnotification.md) page, choose a schedule
for a job collection and set up notification settings.

:::note
After creating the job collection, you can modify the schedule for the job collection and you
can also create a new schedule.
:::


Step 7 – Select **Preview job collection when finished** checkbox to preview the job collection
before executing it.

Step 8 – To review the information and changes regarding the job collection, click **Review Your
Change** at the bottom.

Step 9 – Click **Finish** to exit the wizard and create the job collection.

Step 10 – Once you run the job collection, the job collection runs and only those jobs will process
for which workflow is not configured. If workflow is configured for any job, the request gets
generated against that specific job.

Step 11 – Generated workflow request will be displayed in the
“[Requests](/docs/directorymanager/11.1/portal/request/overview.md)” section for the workflow approver(s). If the approver
approves the workflow request, the job will execute the results.

Step 12 – **Run Job Collection** dialog box displays overall collection statistics for the run,
reports and individual logs for each job in the collection.
