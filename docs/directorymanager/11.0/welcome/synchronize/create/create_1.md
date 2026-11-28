---
title: "Create a Job Collection in GroupID Synchronize"
description: "Group Synchronize jobs into a job collection in the GroupID portal and run them in a set order, such as syncing accounts across domains."
keywords:
  - job collection
  - synchronize job collection
  - run jobs in order
  - job collection wizard
  - workflow approval for jobs
sidebar_position: 40
---

# Create a Job Collection in GroupID Synchronize

A job collection is a group of individual jobs that you want to run in a particular order. For
instance, you can create a job collection to synchronize user accounts between multiple Active
Directory domains. You first create multiple Synchronize jobs to transfer data between two
directories, and then combine them in a job collection. You can then run the job collection
instead of running each job one by one.

To understand how workflows work with Synchronize jobs, see the
[Synchronize Jobs and Workflows](/docs/directorymanager/11.0/signin/workflow/overview.md#synchronize-jobs-and-workflows)
topic.

## Create a job collection

1. In the GroupID portal, select **Synchronize** on the left pane.
2. On the Synchronize portal, click **Create New** and then click **Job Collection.**
3. On the
   [Choose a Job Collection Template in GroupID](/docs/directorymanager/11.0/welcome/synchronize/create/chooseyourjobcollectiontemplate.md)
   page, enter job collection details and select whether to use a job collection template or create
   the job collection without a template.
4. Click **Next Step**.
5. On the
   [Add and Order Jobs in a Synchronize Job Collection](/docs/directorymanager/11.0/welcome/synchronize/create/synchronizedjobcollection.md)
   page, add jobs to the collection. You can either add existing jobs or create new jobs to add them
   to the job collection.
6. On the
   [Schedule a Job Collection and Set Notifications](/docs/directorymanager/11.0/welcome/synchronize/create/schedulingandnotification.md)
   page, choose a schedule for a job collection and set up notification settings.

    :::note
    After creating the job collection, you can modify the schedule for the job collection and you
    can also create a new schedule.
    :::

7. Select the **Preview job collection when finished** checkbox to preview the job collection before
   running it.
8. To review the information and changes regarding the job collection, click **Review Your Change**
   at the bottom.
9. Click **Finish** to exit the wizard and create the job collection.
10. When you run the job collection, only the jobs that have no workflow configured are processed.
    If a workflow is configured for a job, a request is generated for that job.
11. The generated workflow request appears in the
    "[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md)" section for the
    workflow approvers. If an approver approves the workflow request, the job runs and applies the
    results.
12. The **Run Job Collection** dialog box displays overall collection statistics for the run, reports,
    and individual logs for each job in the collection.

**See Also**

- [Job Collection Templates in GroupID Synchronize](/docs/directorymanager/11.0/welcome/synchronize/manage/jobcollectiontemplate.md)
- [Manage Job Collections in GroupID Synchronize ](/docs/directorymanager/11.0/welcome/synchronize/manage/jobcollection.md)
- [Create a GroupID Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md)
- [Transform Data in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique Passwords in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
