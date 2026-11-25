---
title: "Manage Synchronize Jobs in Directory Manager"
description: "Open, run, edit, schedule, preview, duplicate, export, import, rename, and delete Synchronize jobs from the All Jobs page."
keywords:
  - manage Synchronize jobs
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

## Filter a Job

You can apply filters on the **All Jobs** page to display only those jobs that match the criteria
set in the **Search Filters** section.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – In the **Search Filters** section, select one of the following attributes from the
**Attributes** list to filter jobs:

- Name
- Description
- Source
- Destination
- LastRun
- Created
- Modified
- TimesRun

Step 4 – Two more boxes appear next to the **Attributes** box after you select a filter.

- **Select an Operator** from the first list.
- Specify a value for the selected operator in the second box.

Step 5 – Click **Apply Filter**.

All the jobs that match the specified criterion are displayed.

## Open a Job

When you open a job to view or change its settings, the **Edit Job** wizard opens, which is
virtually identical to the [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/create/create.md) wizard.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Click the job name to launch the **Job Details** wizard.

Step 3 – In the **Job Details** wizard, navigate to the page containing the information that you
want to review or modify.

## Run a Job

To run a job:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – On the **Synchronize** portal, click **All Jobs**.

Step 3 – In the jobs list, click the
![Options (three vertical dots)](/images/directorymanager/11.1/portal/synchronize/manage/option.webp)
icon for the job that you want to run and click **Run**.

Step 4 – If workflow requests are enabled, the request to run the job goes to the approver. If the
approver approves the request, the job runs. If the approver denies it, you can't run the job.

Step 5 – The **Review Job Run** dialog box appears, providing access to run statistics, reports, and
logs for the last job run.

Step 6 – Click **Run Job in the Background** to list the job in the **Background** tasks.

## Edit a Job

To edit a job:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – In the jobs list, click the **three vertical dots** icon on the job that you want to edit
and click **Edit**.

:::important Password Field Reconfiguration Required
Due to security enhancements, if your Synchronize job uses password field mapping or password transformations, you must reconfigure the password field when editing the job. This includes:
- Re-selecting the password field in the field mapping section
- Re-applying any password transformations
- Re-entering password complexity settings if using auto-generated passwords

This is a required security measure to ensure password field sanitization across the product.
:::

Step 4 – Go through the wizard pages to modify the job as required.

Step 5 – Click **Finish** twice to close both wizards.

## Deleting a Job

Deleting a Job removes it from Synchronize. By deleting a Job, you also lose any information about
it, such as its run history.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – Click the **three vertical dots** icon of the job that has to be deleted and select
**Delete** from the menu.

## Preview a Job

Before running a job, you can preview the results and identify if the job consists of any errors.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – Click the **three vertical dots** icon of the job and select **Preview** from the menu.

## Schedule a Job

To add or update the schedule for a job:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – Click the **three vertical dots** icon of the job and select **Schedule** from the menu.

This takes you to the **Schedule and Job Notifications** page of [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/create/create.md).
Update the schedule and click **Finish** to save the changes.

## Pin a Job

To pin a job to the [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dashboard.md) under the pinned job card:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – Click the **three vertical dots** icon of the job and select **Pin item** from the menu.

Step 4 – The job appears on the **My Pinned Jobs** card on the [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dashboard.md).

## Save as Template

You can save a job as a template to use it for future job creation.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – Click the **three vertical dots** icon of the job and select **Save as template** from the
menu.

Step 4 – On **Template Name Description wizard**, update the name and description and click **Save**.

The new template appears in the **Job Templates** page.

## Duplicate a Job

To duplicate a job:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – On the **Synchronize** portal, click **All Jobs**.

Step 3 – In the **Jobs** list, click the **three vertical dots** icon on the job that has to be
duplicated and click **Duplicate**.

Step 4 – Update the **Job name** and **Job Description**.

Step 5 – Click **Save**.

## View Job Details

You can view the details of the job by following these steps:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – On the **Synchronize** portal, click **All Jobs**.

Step 3 – In the **Jobs** list, click the **three vertical dots** icon on the job and click **Job
Details**.

## Import a Job

You can also import jobs. Only jobs that were exported from Directory Manager Synchronize can be imported to
other machines running Directory Manager Synchronize.

The import action only requires you to select the location where the exported job resides.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – Click **Import Jobs** to open the dialog box.

Step 4 – Click the **Browse** button to browse to the location where the exported jobs are placed.

Enter the password in the **Password** box.

Select the **Rename Job if already exists** checkbox if you don't want multiple jobs with the
same name.

Step 5 – Click **Import Jobs**. The job appears in the list with the other jobs.

## Export a Job

To export a job:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – On the **All Jobs** page, click the **three vertical dots** icon on the job in the list that
you want to export and click **Export**.

Step 4 – On the **Export Jobs** wizard, enter the password and export the job.

If you want to export multiple jobs, select all and click **Export Jobs** from the top right
corner.

## Rename a Job

Renaming a job lets you save a job under a new name and a new description. As you would expect,
renaming a job doesn't affect its settings.

**Renaming a Job, using shortcut**

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – Click the required Job. It takes you to Job creation pages.

Step 4 – Go to **Job Details** to rename the job.

1. In the **Job Name** box, enter a new name for the Job.
2. In the **Description** box, enter a new description for the job (optional).

Step 5 – Click **Finish** to close the dialog box and save changes.

**Rename a Job, using the Actions menu**

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Jobs**.

Step 3 – From the list, select the required Job.

Step 4 – On the **Actions** menu, click **Rename**.

Step 5 – On the **Rename Job** dialog box:

1. In the **Job Name** box, enter a new name for the Job.
2. In the **Description** box, enter a new description for the job (optional).

Step 6 – Click **Save** to close the dialog box and save changes.
