---
title: "Create a Synchronize Job in Directory Manager"
description: "Create a Synchronize job without a template or from one, map fields, schedule it, and review the run and any workflow request."
keywords:
  - create Synchronize job
  - job templates
  - field mapping
  - data transformation
  - Synchronize job workflow request
sidebar_position: 30
---

# Create a Synchronize Job in Directory Manager

Synchronize moves data from one data source to another using a set of sequential commands that run in the background. The set of commands is called a job. You can create a job without a template, from a predefined template, or from a template that you create yourself.

Synchronize provides these predefined job templates:

- Linked Mailbox Creation in Active Directory
- Move and Disable Objects in Active Directory
- Move Objects in Active Directory
- Sync GAL in Active Directory

These job templates represent common business scenarios. You can use them as they are or modify them to create your own custom templates. Templates offer predefined settings, which you can apply to the new job (except for the source and destination configurations) and modify as required. You can also create a new job by duplicating and modifying an existing one.

To create a new job without a template, specify the source and destination resources involved in the transfer of data. You must also map the fields for the source and destination objects in which the data transfer takes place.

You can also apply data transformations. A transformation lets you modify data as it is transferred to the destination.

After you create a job, you can run it manually or schedule it to run periodically. You can also create templates from existing jobs and reuse their settings in new jobs.

To understand how workflows work with Synchronize jobs, see the [Synchronize Jobs and Workflows](/docs/directorymanager/11.2/admincenter/workflow/overview.md#synchronize-jobs-and-workflows) topic.

## Create a new job

To create a new job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.

2. In the Synchronize portal, click **Create New** and then click **Job**.

3. On the [Choose a Job Template in Directory Manager Synchronize](/docs/directorymanager/11.2/portal/synchronize/create/chooseyourjobtemplate.md) page, enter the job details and select whether to use a job template or create a new job without using templates.

4. Click **Next Step**.

5. On the [Select Your Source and Destination](/docs/directorymanager/11.2/portal/synchronize/create/sourceanddestination.md) page, specify the source and destination providers.

6. Click **Next Step**.

7. On the [Map Objects and Fields in a Synchronize Job](/docs/directorymanager/11.2/portal/synchronize/create/objectfieldsandmapping.md) page, map the source and destination fields and apply transformations.

8. On the [Schedule a Synchronize Job and Set Notifications](/docs/directorymanager/11.2/portal/synchronize/create/scheduleandnotification.md) page, choose a schedule for the job and set up notification settings.

   :::note
   After creating the job, you can modify the schedule for the job and you can also create a new schedule.
   :::

9. Select the **Preview Job when finished** checkbox to preview the job.

10. Click **Review your changes** to check your settings before finishing the job.

11. Click **Finish** to create the job.

12. After you run the job, the job runs if no workflow is configured. If a workflow is configured, a request is generated.

13. The generated workflow request appears in the [Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.2/portal/request/overview.md) section for the workflow approvers. If the approver approves the workflow request, the job executes the results.

14. The **Review Job Run** dialog box appears, providing access to run statistics, reports, and logs for the last job run.
