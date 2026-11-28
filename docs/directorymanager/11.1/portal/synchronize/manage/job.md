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

After you create a job, you can open it to change its settings. You can also rename a job without changing its settings, or delete it. You can reach all of these actions from the Actions pane on the **All Jobs** page.

## Filter a job

Apply filters on the **All Jobs** page to display only the jobs that match the criteria set in the **Search Filters** section.

To filter jobs:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes** list:

   - Name
   - Description
   - Source
   - Destination
   - LastRun
   - Created
   - Modified
   - TimesRun

4. Two more boxes appear next to the **Attributes** box after you select a filter.

   - In the first list, **Select an Operator**, choose an operator.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**. The page displays all the jobs that match the specified criterion.

## Open a job

When you open a job to view or change its settings, the **Edit Job** wizard opens. It is virtually identical to the [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/create/create.md) wizard.

To open a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the job name to launch the **Job Details** wizard.
4. In the **Job Details** wizard, go to the page that contains the information you want to review or modify.

## Run a job

To run a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the jobs list, click the ![Options (three vertical dots)](/images/directorymanager/11.1/portal/synchronize/manage/option.webp) icon for the job you want to run and click **Run**.
4. If workflow requests are enabled, the request to run the job goes to the approver. If the approver approves the request, the job runs. If the approver denies it, you can't run the job.
5. The **Review Job Run** dialog box appears. It gives access to run statistics, reports, and logs for the last job run.
6. Click **Run Job in the Background** to list the job in the **Background** tasks.

## Edit a job

To edit a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. In the jobs list, click the **three vertical dots** icon on the job you want to edit and click **Edit**.

   :::important Password Field Reconfiguration Required
   Due to security enhancements, if your Synchronize job uses password field mapping or password transformations, you must reconfigure the password field when editing the job. This includes:
   - Re-selecting the password field in the field mapping section
   - Re-applying any password transformations
   - Re-entering password complexity settings if using auto-generated passwords

   This is a required security measure to ensure password field sanitization across the product.
   :::

4. Go through the wizard pages to modify the job as required.
5. Click **Finish** twice to close both wizards.

## Delete a job

Deleting a job removes it from Synchronize. You also lose any information about the job, such as its run history.

To delete a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job you want to delete and select **Delete** from the menu.

## Preview a job

Before you run a job, you can preview the results and identify whether the job has any errors.

To preview a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Preview** from the menu.

## Schedule a job

To add or update the schedule for a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Schedule** from the menu. The **Schedule and Job Notifications** page of [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/create/create.md) opens.
4. Update the schedule and click **Finish** to save the changes.

## Pin a job

To pin a job to the [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dashboard.md) under the pinned job card:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Pin item** from the menu.

The job appears on the **My Pinned Jobs** card on the [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dashboard.md).

## Save a job as a template

You can save a job as a template to use it for future job creation.

To save a job as a template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Save as template** from the menu.
4. On the **Template Name Description wizard**, update the name and description and click **Save**.

The new template appears in the **Job Templates** page.

## Duplicate a job

To duplicate a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job you want to duplicate and click **Duplicate**.
4. Update the **Job name** and **Job Description**.
5. Click **Save**.

## View job details

To view the details of a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job and click **Job Details**.

## Import a job

You can import jobs that were exported from Directory Manager Synchronize. You can import them only to other machines that run Directory Manager Synchronize.

The import action only requires you to select the location where the exported job resides.

To import a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button and browse to the location of the exported jobs.
5. Enter the password in the **Password** box.
6. Select the **Rename Job if already exists** checkbox if you don't want multiple jobs with the same name.
7. Click **Import Jobs**. The job appears in the list with the other jobs.

## Export a job

To export a job:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. On the **All Jobs** page, click the **three vertical dots** icon on the job in the list that you want to export and click **Export**.
4. On the **Export Jobs** wizard, enter the password and export the job.

To export multiple jobs, select all of them and click **Export Jobs** in the top right corner.

## Rename a job

Renaming a job lets you save it under a new name and a new description. Renaming a job doesn't affect its settings.

**Renaming a Job, using shortcut**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. Click the job you want to rename. The job creation pages open.
4. Go to **Job Details** to rename the job.

   1. In the **Job Name** box, enter a new name for the job.
   2. In the **Description** box, enter a new description for the job (optional).

5. Click **Finish** to close the dialog box and save changes.

**Rename a Job, using the Actions menu**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Jobs**.
3. From the list, select the job you want to rename.
4. On the **Actions** menu, click **Rename**.
5. On the **Rename Job** dialog box:

   1. In the **Job Name** box, enter a new name for the job.
   2. In the **Description** box, enter a new description for the job (optional).

6. Click **Save** to close the dialog box and save changes.
