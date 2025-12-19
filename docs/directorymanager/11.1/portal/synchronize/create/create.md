---
title: "Create a Job"
description: "Create a Job"
sidebar_position: 30
---

# Create a Job

Synchronize allows you to move data from one data source to another using a set of sequential
commands that run in the background. The set of commands is called a job. You can create a job from
scratch, from a predefined template, or from a template that you create yourself.

Synchronize provides these predefined job templates:

- Linked Mailbox Creation in Active Directory
- Move and Disable Objects in Active Directory
- Move Objects in Active Directory
- Sync GAL in Active Directory

These job templates represent common business scenarios. You can use these templates or modify them
to create your own custom templates. Templates offer predefined settings, which you can apply to the
new job (except for the source and destination configurations) and modify as required. You can also
create a new job by duplicating and modifying an existing one.

Creating a job from scratch requires that you specify the source and destination resources involved
in the transfer of data. You must also map the fields for the source and destination objects in
which the data transfer takes place.

You can also apply data transformations. A transformation allows you to modify data as it is being
transferred to the destination.

Once you create a job, you can either run it manually or schedule it to run periodically.

You can create templates from existing jobs on-the-fly and reuse their settings in new jobs.

To understand how workflows work with Synchronize jobs, see the
[Synchronize Jobs and Workflows](/docs/directorymanager/11.1/admincenter/workflow/overview.md#synchronize-jobs-and-workflows)
topic.

## Create a new job

Step 1 – On Directory Manager portal, select **Synchronize**on left pane.

Step 2 – On the Synchronize portal, click **Create New** and then click **Job**.

Step 3 – On the [Choose Your Job Template](/docs/directorymanager/11.1/portal/synchronize/create/chooseyourjobtemplate.md) page, enter the job details and
select whether to use a job template or create the job from scratch.

Step 4 – Click **Next Step**.

Step 5 – On the [Select Your Source and Destination](/docs/directorymanager/11.1/portal/synchronize/create/sourceanddestination.md) page, specify the
source and destination providers.

Step 6 – Click **Next Step**.

Step 7 – On the [Objects, Fields and Mapping ](/docs/directorymanager/11.1/portal/synchronize/create/objectfieldsandmapping.md) page, map the source and
destination fields and apply transformations.

Step 8 – On the [Schedule Job and Notifications](/docs/directorymanager/11.1/portal/synchronize/create/scheduleandnotification.md) page, choose a schedule
for a job and set up notification settings.

:::note
After creating the job, you can modify the schedule for the job and you can also create a new
schedule.
:::


Step 9 – Select **Preview job when finished** checkbox to preview the job.

Step 10 – **Review your Changes** before finishing the job.

Step 11 – Click **Finish** and create the job.

Step 12 – Once you run the job, the job runs if workflow is not configured. If workflow is
configured, the request gets generated.

Step 13 – Generated workflow request will be displayed in the [Requests](/docs/directorymanager/11.1/portal/request/overview.md)
section for the workflow approver(s). If the approver approves the workflow request, the job will
execute the results.

Step 14 – The **Review Job Run** dialog box appears, providing access to run statistics, reports,
and logs for the last job run.
