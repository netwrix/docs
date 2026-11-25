---
title: "Manage Synchronize Jobs in Directory Manager"
description: "Open, run, edit, schedule, preview, duplicate, export, import, rename, and delete Synchronize jobs from the All Jobs page."
keywords:
  - manage synchronize jobs
  - run a job
  - schedule a job
  - export and import jobs
  - job templates
sidebar_position: 10
---

# Manage Synchronize Jobs in Directory Manager

After you create a job, you can open it to change its settings. You can also rename a job without
changing its settings, or delete it. You can reach all of these actions from the Actions pane on the
**All Jobs** page.

What do you want to do?

- [Filter a Job](#filter-a-job)
- [Open a Job](#open-a-job)
- [Run a Job](#run-a-job)
- [Edit a Job](#edit-a-job)
- [Deleting a Job](#deleting-a-job)
- [Preview a Job](#preview-a-job)
- [Schedule a Job](#schedule-a-job)
- [Pin a Job](#pin-a-job)
- [Save as Template](#save-as-template)
- [Duplicate a Job](#duplicate-a-job)
- [View Job Details](#view-job-details)
- [Export a Job](#export-a-job)
- [Import a Job](#import-a-job)
- [Rename a Job](#rename-a-job)

## Filter a Job

You can apply filters on the **All Jobs** page to display only those jobs that match the criteria
set in the **Search Filters** section.

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes**
   list to filter jobs:

    - Name
    - Description
    - Source
    - Destination
    - LastRun
    - Created
    - Modified
    - TimesRun

4. Two more boxes appear next to the **Attributes** box when you select a filter.

    - **Select an Operator** from the first list.
    - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

    All the jobs that match the specified criteria are displayed.

## Open a Job

When you open a job to view or change its settings, the **Edit Job** wizard opens, which is
virtually identical to the
[Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.0/welcome/synchronize/create/create.md) wizard.

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.

    Click the job name to launch the **Job Details** wizard.

3. In the **Job Details** wizard, navigate to the page containing the information that you want to
   review or modify.

## Run a Job

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the **Synchronize** portal, click **All Jobs**.
3. In the jobs list, click
   ![Options (three vertical dots)](/images/directorymanager/11.0/portal/synchronize/manage/option.webp) on the
   job that you want to run and click **Run**.
4. If workflow requests are enabled, the request to run the job goes to the approver. If
   they approve the request, the job runs. If they deny the request, you can't run the job.
5. The **Review Job Run** dialog box appears, providing access to run statistics, reports, and logs
   for the last job run.
6. Click **Run Job in the Background** to list the job in the **Background** tasks.

## Edit a Job

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. In the jobs list, click the **three vertical dots** icon on the job that you want to edit and
   click **Edit**.
4. Go through the wizard pages to modify the job as required.
5. Click **Finish** twice to close both wizards.

## Deleting a Job

Deleting a job removes it from Synchronize. When you delete a job, you also lose any information about
it, such as its run history.

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job that you want to delete and select **Delete**
   from the menu.

## Preview a Job

Before running a job, you can preview the results and check the job for errors.

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Preview** from the menu.

## Schedule a Job

To add or update the schedule for a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Schedule** from the menu.

    The **Schedule and Job Notifications** page of
    [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.0/welcome/synchronize/create/create.md) opens. Update
    the schedule and click **Finish** to save the changes.

## Pin a Job

To pin a job to the
[Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md) under the pinned
job card:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Pin Item** from the menu.
4. The job appears on the **My Pinned Jobs** card on the
   [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md).

## Save as Template

You can save a job as a template to use it for future job creation.

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Save as Template** from the menu.
4. On the **Template Name Description** wizard, update the name and description and click **Save**.

    The new template appears on the **Job Templates** page.

## Duplicate a Job

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job that you want to duplicate
   and click **Duplicate**.
4. Update the **Job name** and **Job Description**.
5. Click **Save**.

## View Job Details

To view the details of a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job and click **Job
   Details**.

## Import a Job

You can also import jobs. Only jobs that were exported from Directory Manager Synchronize can be imported
to other machines running Directory Manager Synchronize.

The import action only requires you to select the location where the exported job resides.

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported jobs are placed.

    Enter the password in the **Password** box.

    Select the **Rename Job if already exists** checkbox if you don't want multiple jobs with the
    same name.

5. Click **Import Job(s)**. The job appears in the list with the other jobs.

## Export a Job

To export a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. On the **All Jobs** page, click the **three vertical dots** icon on the job in the list that you
   want to export and click **Export**.
4. On the **Export Job(s)** wizard, enter the password and export the job.

If you want to export multiple jobs, select all and click **Export Job(s)** from the top right
corner.

## Rename a Job

Renaming a job lets you save a job under a new name and a new description. Renaming a job doesn't affect its settings.

**Renaming a Job, using shortcut**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the job. The job creation pages open.
4. Go to **Job Details** to rename the job.

    1. In the **Job Name** box, enter a new name for the Job.
    2. In the **Description** box, enter a new description for the job (optional).

5. Click **Finish** to close the dialog box and save changes.

**Rename a Job, using the Actions menu**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. From the list, select the job.
4. On the **Actions** menu, click **Rename**.
5. On the **Rename Job** dialog box:

    1. In the **Job Name** box, enter a new name for the Job.
    2. In the **Description** box, enter a new description for the job (optional).

6. Click **Save** to close the dialog box and save changes.

**See Also**

- [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Directory Manager Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md)
