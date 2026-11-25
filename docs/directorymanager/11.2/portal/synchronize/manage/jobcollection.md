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

You can do the following in a job collection:

- Duplicate a job collection – Select an existing job collection and duplicate it to create a new
  job with the same settings.
- Remove jobs from a collection – Suppose you add an existing job to a collection. If you delete
  this job from the collection, the collection’s copy is deleted while the original continues to
  exist in the All Jobs list.
- Determine the order of their execution – Specify the order in which jobs run one after another.
- Specify a failure action for each job – For each job in the collection, you can specify the action
  to take if it fails to run successfully, choosing whether to continue or to abort the execution of
  the remaining jobs in collection.
- Set up job run notifications – Email notifications contain a brief numerical summary of the
  objects processed by the job collection and a detailed log of statistics and errors.

    :::note
    Notification settings for individual jobs don't apply when they are run as part of a job
    collection.
    :::


## Filter Job Collection

You can apply filters on the **Job Collections** page to display only those jobs that match the
criteria set in the **Search Filters** section.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collections**.

Step 3 – In the **Search Filters** section, select one of the following attributes from the
**Attributes** list to filter job collections:

- Name
- Description
- TimesRun
- NextRun
- LastRun
- Created

Step 4 – Two more boxes appear next to the **Attributes** box after you select a filter.

- **Select an Operator** from the first list.
- Specify a value for the selected operator in the second box.

Step 5 – Click **Apply Filter**.

All the job collections that match the specified criterion are displayed.

## Run a Job Collection

To run a job collection:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – From the list, click the three vertical dots icon of the required job collection and click
**Run Job Collection**.

The Run Job Collection dialog box opens, showing the progress of the job collection as it
runs.

Step 4 – The **Run Job Collection** dialog box displays overall collection statistics for the run, reports,
and individual logs for each job in the collection.

Step 5 – Click **Run Job Collection in the Background** to list the job in the Background tasks.

## Create a Job Collection by duplicating an existing one

To create a Job Collection by duplicating an existing one:

Step 1 – In the Directory Manager portal, select **Synchronize**.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – In the job collection list, click the three vertical dots icon on the job collection you
want to duplicate and select **Duplicate**.

Step 4 – Update the **Job name** and **Job Description**.

Step 5 – Click **Save**.

## Change the execution order of individual jobs in a Job Collection

To change the execution order of individual jobs in a job collection:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – In the job collection list, click the required job collection.

Step 4 – In the jobs list on Synchronized Job Collections page, click the **three vertical dots**
icon on the required job and then click **Move Up** or **Move Down** as needed.

Step 5 – Click **Finish**.

## Edit a Job in a Job Collection

To edit a Job in a Job Collection:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collections**.

Step 3 – In the job collections list, click the job collection you want to edit.

Step 4 – Click the three vertical dots icon the required job and click **Edit**.

Step 5 – Go through the wizard pages to modify the job as required.

Step 6 – Click **Finish** twice to close both wizards.

## Remove a job from a job collection

You can remove a certain job from your job collection by the following methods:

**Remove a job from a job collection, using Action Menu**

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collections**.

Step 3 – In the job collections list, expand the required job collection.

Step 4 – **Added Jobs** displays the jobs of that collection.

Step 5 – Select See Details.

Step 6 – Click the three vertical dots icon on the job you want to remove and click **Delete**.

**Remove a job from a job collection, using job collection creation wizard**

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collections**.

Step 3 – In the job collections list, click the required job collection to open Synchronized Job
Collection page.

Step 4 – Select the required job and click **Remove**.

## Delete a Job Collection

To delete a job collection:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collections**.

Step 3 – In the job collections list, click the three vertical dots icon on the job collection you
want to delete and click **Delete**.

## Preview a Job Collection

To preview a job collection:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – From the list, click the **three vertical dots** icon of the required job collection and
click **Preview**.

The Preview Job Collection dialog box opens, showing the progress of all the jobs included in the
job collection.

Step 4 – **Preview Job Collection** dialog box displays overall job collection statistics and
reports.

## Pin a Job Collection

To pin a job collection to the [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.2/portal/synchronize/dashboard.md) under the pinned job card:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Collections**.

Step 3 – Click the three vertical dots icon of the job collection and select **Pin item** from the
menu.

Step 4 – The job collection appears in the **My Pinned Job Collections** section on the
[Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.2/portal/synchronize/dashboard.md).

## Save as Template

You can save a job collection as a template to use it for future job collection creation.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **All Collections**.

Step 3 – Click the three vertical dots icon of the job collection and select **Save as template**
from the menu.

Step 4 – On Job Collection Template Name Description wizard, update the name and description and
click Save.

The new template appears on the **Job Collection Templates** page.

## Rename a Job Collection

Renaming a job collection lets you save a job collection under a new name and a new description.
Renaming a job collection doesn't affect its settings.

**Renaming a Job Collection, using shortcut**

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – Click the required Job Collection. It takes you to Job Collection creation pages.

Step 4 – Go to Job Details to rename the job.

1. In the Job Collection Name box, enter a new name for the Job.
2. In the Job Collection Description box, enter a new description (optional).

Step 5 – Click **Finish** to close the dialog box and save changes.

**Rename a Job Collection, using the Actions menu**

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – From the list, select the required Job Collection.

Step 4 – On the Actions menu, click **Rename**.

Step 5 – On the Rename Job Collection dialog box:

1. In the **Job Name** box, enter a new name for the Job.
2. In the Job Collection **Description** box, enter a new description (optional).

Step 6 – Click **Save** to close the dialog box and save changes.

## Export a Job Collection

To export a job collection, you need to follow these steps:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – On the Job Collection page, click the three vertical dots icon on the job in the list that
you want to export and click **Export**.

Step 4 – On the Export Jobs wizard, enter the password and export the job collection.

If you want to export multiple job collections, select all and click **Export Jobs** from the top
right corner.

## Import a Job Collection

Only jobs that were exported from Directory Manager Synchronize can be imported to other
machines running Directory Manager Synchronize.

The import action only requires you to select the location where the exported job resides.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collection**.

Step 3 – Click **Import Jobs** to open the dialog box.

Step 4 – Click the **Browse** button to browse to the location where the exported jobs are placed.

Enter the password in the **Password** box.

Select the **Rename Job if already exists** checkbox if you don't want multiple jobs with the
same name.

Step 5 – Click **Import Jobs**. The job collection appears in the list with the other jobs.

## Recent Runs

To view overall collection statistics, reports, and individual logs for each of the
jobs in the collection for their last run activity.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Collections**.

Step 3 – From the list, right-click the required job collection and click **Recent Runs**.
