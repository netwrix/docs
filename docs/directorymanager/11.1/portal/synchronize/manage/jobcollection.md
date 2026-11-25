---
title: "Manage Job Collections in Directory Manager Synchronize"
description: "Run, preview, duplicate, reorder, edit, pin, export, import, rename, and delete Synchronize job collections."
keywords:
  - manage job collections
  - job collection run order
  - failure action
  - export and import job collections
  - Synchronize jobs
sidebar_position: 20
---

# Manage Job Collections in Directory Manager Synchronize

In a job collection, you can do the following:

- Duplicate a job collection. Select an existing job collection and duplicate it to create a new job with the same settings.
- Remove jobs from a collection. Suppose you add an existing job to a collection. If you delete this job from the collection, the collection's copy is deleted while the original continues to exist in the All Jobs list.
- Determine the order of their execution. Specify the order in which jobs run one after another.
- Specify a failure action for each job. For each job in the collection, specify the action to take if it fails to run successfully. You can choose whether to continue or to abort the execution of the remaining jobs in the collection.
- Set up job run notifications. Email notifications contain a brief numerical summary of the objects processed by the job collection and a detailed log of statistics and errors.

:::note
Notification settings for individual jobs don't apply when they are run as part of a job collection.
:::

## Filter job collections

Apply filters on the **Job Collections** page to display only the jobs that match the criteria set in the **Search Filters** section.

To filter job collections:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collections**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes** list:

   - Name
   - Description
   - TimesRun
   - NextRun
   - LastRun
   - Created

4. Two more boxes appear next to the **Attributes** box after you select a filter.

   - In the first list, **Select an Operator**, choose an operator.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**. The page displays all the job collections that match the specified criterion.

## Run a job collection

To run a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection**.
3. From the list, click the three vertical dots icon of the job collection you want to run and click **Run Job Collection**. The Run Job Collection dialog box opens and shows the progress of the job collection as it runs.
4. The **Run Job Collection** dialog box displays overall collection statistics for the run, reports, and individual logs for each job in the collection.
5. Click **Run Job Collection in the Background** to list the job in the Background tasks.

## Create a job collection by duplicating an existing one

To create a job collection by duplicating an existing one:

1. In the Directory Manager portal, select **Synchronize**.
2. In the Synchronize portal, click **Job Collection**.
3. In the job collection list, click the three vertical dots icon on the job collection you want to duplicate and select **Duplicate**.
4. Update the **Job name** and **Job Description**.
5. Click **Save**.

## Change the execution order of jobs in a job collection

To change the execution order of individual jobs in a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection**.
3. In the job collection list, click the job collection you want to change.
4. In the jobs list on the Synchronized Job Collections page, click the **three vertical dots** icon on the job and then click **Move Up** or **Move Down** as needed.
5. Click **Finish**.

## Edit a job in a job collection

To edit a job in a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collections**.
3. In the job collections list, click the job collection you want to edit.
4. Click the three vertical dots icon the required job and click **Edit**.
5. Go through the wizard pages to modify the job as required.
6. Click **Finish** twice to close both wizards.

## Remove a job from a job collection

You can remove a job from your job collection by either of the following methods.

**Remove a job from a job collection, using Action Menu**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collections**.
3. In the job collections list, expand the job collection.
4. **Added Jobs** displays the jobs of that collection.
5. Select See Details.
6. Click the three vertical dots icon on the job you want to remove and click **Delete**.

**Remove a job from a job collection, using job collection creation wizard**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collections**.
3. In the job collections list, click the job collection to open the Synchronized Job Collection page.
4. Select the job and click **Remove**.

## Delete a job collection

To delete a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collections**.
3. In the job collections list, click the three vertical dots icon on the job collection you want to delete and click **Delete**.

## Preview a job collection

To preview a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection**.
3. From the list, click the **three vertical dots** icon of the job collection you want to preview and click **Preview**. The Preview Job Collection dialog box opens and shows the progress of all the jobs included in the job collection.
4. The **Preview Job Collection** dialog box displays overall job collection statistics and reports.

## Pin a job collection

To pin a job collection to the [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dashboard.md) under the pinned job card:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Collections**.
3. Click the three vertical dots icon of the job collection and select **Pin item** from the menu.

The job collection appears in the **My Pinned Job Collections** section on the [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dashboard.md).

## Save a job collection as a template

You can save a job collection as a template to use it for future job collection creation.

To save a job collection as a template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **All Collections**.
3. Click the three vertical dots icon of the job collection and select **Save as template** from the menu.
4. On the Job Collection Template Name Description wizard, update the name and description and click Save.

The new template appears on the **Job Collection Templates** page.

## Rename a job collection

Renaming a job collection lets you save it under a new name and a new description. Renaming a job collection doesn't affect its settings.

**Renaming a Job Collection, using shortcut**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection**.
3. Click the job collection you want to rename. The job collection creation pages open.
4. Go to Job Details to rename the job.

   1. In the Job Collection Name box, enter a new name for the job.
   2. In the Job Collection Description box, enter a new description (optional).

5. Click **Finish** to close the dialog box and save changes.

**Rename a Job Collection, using the Actions menu**

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection**.
3. From the list, select the job collection you want to rename.
4. On the Actions menu, click **Rename**.
5. On the Rename Job Collection dialog box:

   1. In the **Job Name** box, enter a new name for the job.
   2. In the Job Collection **Description** box, enter a new description (optional).

6. Click **Save** to close the dialog box and save changes.

## Export a job collection

To export a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection**.
3. On the Job Collection page, click the three vertical dots icon on the job in the list that you want to export and click **Export**.
4. On the Export Jobs wizard, enter the password and export the job collection.

To export multiple job collections, select all of them and click **Export Jobs** in the top right corner.

## Import a job collection

You can import jobs that were exported from Directory Manager Synchronize. You can import them only to other machines that run Directory Manager Synchronize.

The import action only requires you to select the location where the exported job resides.

To import a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button and browse to the location of the exported jobs.
5. Enter the password in the **Password** box.
6. Select the **Rename Job if already exists** checkbox if you don't want multiple jobs with the same name.
7. Click **Import Jobs**. The job collection appears in the list with the other jobs.

## View recent runs

View overall collection statistics, reports, and individual logs for each job in the collection for their last run activity.

To view recent runs:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collections**.
3. From the list, right-click the job collection and click **Recent Runs**.
