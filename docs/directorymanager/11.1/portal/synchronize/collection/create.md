---
title: "Create a Job Collection in Directory Manager Synchronize"
description: "Group Synchronize jobs into a job collection that runs them in a set order, then schedule it and set up notifications."
keywords:
  - job collection workflow requests
  - create job collection
  - run Synchronize jobs in order
  - Run Job Collection
sidebar_position: 40
---

# Create a Job Collection in Directory Manager Synchronize

A job collection is a group of individual jobs that you want to run in a particular order. For
example, you can create a job collection to synchronize user accounts between multiple Active
Directory domains. You first create multiple Synchronize jobs to transfer data between two
directories, and then combine them in a job collection. You can then run the job collection
instead of running each job one by one.

To understand how workflows work with Synchronize jobs, see the
[Synchronize Jobs and Workflows](/docs/directorymanager/11.1/admincenter/workflow/overview.md#synchronize-jobs-and-workflows)
topic.

## Create a job collection

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Create New** and then click **Job Collection**.

Step 3 – On the [Choose Your Job Collection Template](/docs/directorymanager/11.1/portal/synchronize/collection/chooseyourjobcollectiontemplate.md) page, enter job
collection details and select whether to use a job collection template or create a new job collection.

Step 4 – Click **Next step**.

Step 5 – On the [Add and Order Jobs in a Synchronize Job Collection](/docs/directorymanager/11.1/portal/synchronize/collection/synchronizedjobcollection.md) page, add jobs to the
collection. You can either add existing jobs or create new jobs to add them to the job collection.

Step 6 – On the [Schedule a Job Collection and Set Notifications](/docs/directorymanager/11.1/portal/synchronize/collection/schedulingandnotification.md) page, choose a schedule
for the job collection and set up notification settings.

:::note
After creating the job collection, you can modify the schedule for the job collection and you
can also create a new schedule.
:::


Step 7 – Select the **Preview Job Collection when finished** checkbox to preview the job collection
before executing it.

Step 8 – To review the information and changes regarding the job collection, click **Review your
changes** at the bottom.

Step 9 – Click **Finish** to exit the wizard and create the job collection.

Step 10 – When you run the job collection, only the jobs that have no workflow configured process.
If a workflow is configured for a job, a request is generated for that specific job.

Step 11 – The generated workflow request appears in the
"[Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.1/portal/request/overview.md)" section for the workflow approvers. If the approver
approves the workflow request, the job executes the results.

Step 12 – The **Run Job Collection** dialog box displays overall collection statistics for the run,
reports, and individual logs for each job in the collection.
