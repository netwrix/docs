---
title: "Manage a Job Collection"
description: "Manage a Job Collection"
sidebar_position: 20
---

# Manage a Job Collection

You can do the following in a job collection:

- **Duplicate a job collection** - select an existing job collection and duplicate it to create a
  new job with the same settings.
- **Remove jobs from a collection** - Suppose you add an existing job to a collection. If this job
  is deleted from the collection, the collection’s copy is deleted while the original continues to
  exist in the All Jobs list.
- **Determine the order of their execution** - specify the order in which jobs run one after
  another.
- **Specify a failure action for each job** - For each job in the collection, you can specify the
  action to take if it fails to run successfully, choosing whether to continue or to abort the
  execution of the remaining jobs in collection.
- **Set up job run notifications** - Email notifications contain a brief numerical summary of the
  objects processed by the job collection and a detailed log of statistics and errors.

    NOTE: Notification settings for individual jobs do not apply when they are run as part of a job
    collection.

What do you want to do?

- [Filter Job Collection](#filter-job-collection)
- [Run a Job Collection](#run-a-job-collection)
- [Create a Job Collection by duplicating an existing one](#create-a-job-collection-by-duplicating-an-existing-one)
- [Change the execution order of individual jobs in a Job Collection](#change-the-execution-order-of-individual-jobs-in-a-job-collection)
- [Edit a Job in a Job Collection](#edit-a-job-in-a-job-collection)
- [Remove a job from a job collection](#remove-a-job-from-a-job-collection)
- [Delete a Job Collection](#delete-a-job-collection)
- [Preview a Job Collection](#preview-a-job-collection)
- [Pin a Job Collection](#pin-a-job-collection)
- [Save as Template](#save-as-template)
- [Rename a Job Collection](#rename-a-job-collection)
- [Export a Job Collection](#export-a-job-collection)
- [Import a Job Collection](#import-a-job-collection)
- [Recent Runs](#recent-runs)

## Filter Job Collection

You can apply filters on the **Job Collections** page to display only those jobs that match the
criteria set in the **Search Filters** section.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collections**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes**
   list to filter job collections:

    - Name
    - Description
    - TimesRun
    - NextRun
    - LastRun
    - Created

4. Two more boxes get displayed next to **Attributes** box upon selecting a filter.

    - **Select an Operator** from the first list.
    - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

    All the job collections that match the specified criterion are displayed.

## Run a Job Collection

1. On GroupID Portal, click **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection.**
3. From the list, click the **three vertical dots** icon of the required job collection and click
   **Run Job Collection**.

    The **Run Job Collection** dialog box opens, showing the progress of the of the job collection
    as it runs.

4. **Run Job Collection** dialog box displays overall collection statistics for the run, reports and
   individual logs for each job in the collection.
5. Click **Run Job Collection in the Background** to list the job in the **Background** tasks.

## Create a Job Collection by duplicating an existing one

1. In GroupID Portal, select **Synchronize**.
2. On the Synchronize portal, click **Job Collection**.
3. In the job collection list, click the **three vertical dots** icon on the job collection you want
   to duplicate and select **Duplicate**.
4. Update the **Job name** and **Job Description**.
5. Click Save.

## Change the execution order of individual jobs in a Job Collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection**.
3. In the job collection list, click the required job collection.
4. In the jobs list on **Synchronized Job Collections** page, click the **three vertical dots** icon
   the required job and then click **Move Up** or **Move Down** as needed.
5. Click **Finish**.

## Edit a Job in a Job Collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. In the job collections list, click the job collection you want to edit.
4. Click the **three vertical dots** icon the required job and click **Edit**.
5. Go through the wizard pages to modify the job as required.
6. Click **Finish** twice to close both wizards.

## Remove a job from a job collection

You can remove a certain job from your job collection by the following methods:

**Remove a job from a job collection, using Action Menu**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. In the job collections list, expand the required job collection.
4. **Added Jobs** displays the jobs of that collection.
5. Select See Details.
6. Click the **three vertical dots** icon on the job you want to remove and click **Delete**.

**Remove a job from a job collection, using job collection creation wizard**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. In the job collections list, click on the required job collection to open **Synchronized Job
   Collection** page.
4. Select the required job and click **Remove**.

## Delete a Job Collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections.**
3. In the job collections list, click the **three vertical dots** icon on the job collection you
   want to delete and click **Delete**.

## Preview a Job Collection

1. On GroupID Portal, click select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection.**
3. From the list, click the **three vertical dots** icon of the required job collection and click
   **Preview**.

    The **Preview Job Collection** dialog box opens, showing the progress of all the jobs included
    in the job collection.,

4. **Preview Job Collection** dialog box displays overall job collection statistics and reports.

## Pin a Job Collection

To pin a job to the
[Dashboard](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md) under the pinned
job card:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Collections**.
3. Click the **three vertical dots** icon of the job collection and select **Pin Item** from the
   menu.
4. The job collection is displayed on **My Pinned Job Collections** section on the
   [Dashboard](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md).

## Save as Template

You can save a job as a template to use it for future job creation.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Collections**.
3. Click the **three vertical dots** icon of the job collection and select **Save as Template** from
   the menu.
4. On **Job Collection Template Name Description wizard**, update the name and description and click
   Save.

    The new template gets listed in the **Job Collection Templates** page.

## Rename a Job Collection

Renaming a job collection lets you save a job collection under a new name and a new description.
Renaming a job collection does not affect its settings.

**Renaming a Job Collection, using shortcut**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. Click the required Job Collection. It takes you to Job Collection creation pages.
4. Go to **Job Details** to rename the job.

    1. In the **Job Collection Name** box, type a new name for the Job.
    2. In the Job Collection **Description** box, type a new description for the box (optional).

5. Click **Finish** to close the dialog box and save changes.

**Rename a Job Collection, using the Actions menu**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. From the list, select the required Job Collection.
4. On the **Actions** menu, click **Rename**.
5. On the **Rename Job Collection** dialog box:

    1. In the **Job Name** box, type a new name for the Job.
    2. In the Job Collection **Description** box, type a new description for the box (optional).

6. Click **Save** to close the dialog box and save changes.

## Export a Job Collection

To export a job collection, you need to follow these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. On the **Job Collection** page, click the **three vertical dots** icon on the job in the list
   that you want to export and click **Export**.
4. On the **Export Job(s)** wizard, enter the password and export the job collection.

If you want to export multiple job collections, select all and click **Export Job(s)** from the top
right corner.

## Import a Job Collection

Only job that have been exported from GroupID Synchronize can be imported to other machines running
GroupID Synchronize.

The import action only requires you to select the location where the exported job resides.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported jobs are placed.

    Enter the password in the **Password** box.

    Select the **Rename Job if already exists** checkbox if you do not want multiple jobs with same
    names.

5. Click **Import Job(s)**. The Job collection gets listed with other jobs.

## Recent Runs

1. On GroupID Portal, click **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. From the list, right-click the required job group and click **Recent Runs**.
4. This provides the overall collection statistics, reports and individual logs for each of the jobs
   in the collection for their last run activity.

**See Also**

- [Create a Job Collection ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md)
