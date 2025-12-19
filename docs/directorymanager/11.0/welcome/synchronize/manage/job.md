---
title: "Manage a Job"
description: "Manage a Job"
sidebar_position: 10
---

# Manage a Job

After creating a job, you can open a job to edit and change the settings of the job. You can also
rename a job without changing its setting or entirely delete a job. All these actions are easily
accessible through the Actions pane in **All Jobs** page.

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

1. On GroupID Portal, select **Synchronize**on left pane.
2. On Synchronize portal, click **All Jobs**.
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

4. Two more boxes get displayed next to **Attributes** box upon selecting a filter.

    - **Select an Operator** from the first list.
    - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

    All the jobs that match the specified criterion are displayed.

## Open a Job

When you open a job to view or change its settings, the **Edit Job** wizard opens, which is
virtually identical to the
[Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md) wizard.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.

    Click the job name to launch the **Job Details** wizard.

3. In the **Job Details** wizard, navigate to the page containing the information that you want to
   review or modify.

## Run a Job

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the jobs list, click
   ![option](/images/directorymanager/11.0/portal/synchronize/manage/option.webp) on the
   job that you want to run and click **Run**.
4. If workflow requests are enabled, the request for running the job will go to the approver. If
   they approve the requests, the job will run. If they deny the requests, you will not be able to
   run the job.
5. The **Review Job Run** dialog box appears, providing access to run statistics, reports, and logs
   for the last job run.
6. Click **Run Job in the Background** to list the job in the **Background** tasks.

## Edit a Job

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **All Jobs**.
3. In the jobs list, click the **three vertical dots** icon on the job that you want to edit and
   click **Edit**.
4. Go through the wizard pages to modify the job as required.
5. Click **Finish** twice to close both wizards.

## Deleting a Job

Deleting a Job removes it from Synchronize. By deleting a Job, you also loose any information about
it, such as its run history.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job that has to be deleted and select **Delete**
   from the menu.

## Preview a Job

Before running a job, you can preview the results and identify if the job consists of any errors.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Preview** from the menu.

## Schedule a Job

To add or update the schedule for a job:

1. On GroupID Portal, select **Synchronize**on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Schedule** from the menu.

    It will take you to the **Schedule and Job Notifications** page of
    [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md). Update
    the schedule and click **Finish** to save the changes.

## Pin a Job

To pin a job to the
[Dashboard](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md) under the pinned
job card:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Pin Item** from the menu.
4. The job is displayed on **My Pinned Jobs** card on the
   [Dashboard](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md).

## Save as Template

You can save a job as a template to use it for future job creation.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Save as Template** from the menu.
4. On **Template Name Description wizard**, update the name and description and click Save.

    The new template gets listed in the **Job Templates** page.

## Duplicate a Job

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job that has to be duplicated
   and click **Duplicate**.
4. Update the **Job name** and **Job Description**.
5. Click **Save**.

## View Job Details

You can view the details of the job by following these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job and click **Job
   Details**.

## Import a Job

You can also import jobs. Only job that have been exported from GroupID Synchronize can be imported
to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported job resides.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **All Jobs**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported jobs are placed.

    Enter the password in the **Password** box.

    Select the **Rename Job if already exists** checkbox if you do not want multiple jobs with same
    names.

5. Click **Import Job(s)**. The job gets listed with other jobs.

## Export a Job

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **All Jobs**.
3. On the **All Job** page, click the **three vertical dots** icon on the job in the list that you
   want to export and click **Export**.
4. On the **Export Job(s)** wizard, enter the password and export the job.

If you want to export multiple jobs, select all and click **Export Job(s)** from the top right
corner.

## Rename a Job

Renaming a job lets you save a job under a new name and a new description. As you would expect,
renaming a job does not affect its settings.

**Renaming a Job, using shortcut**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the required Job. It takes you to Job creation pages.
4. Go to **Job Details** to rename the job.

    1. In the **Job Name** box, type a new name for the Job.
    2. In the **Description** box, type a new description for the box (optional).

5. Click **Finish** to close the dialog box and save changes.

**Rename a Job, using the Actions menu**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. From the list, select the required Job.
4. On the **Actions** menu, click **Rename**.
5. On the **Rename Job** dialog box:

    1. In the **Job Name** box, type a new name for the Job.
    2. In the **Description** box, type a new description for the box (optional).

6. Click **Save** to close the dialog box and save changes.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md)
