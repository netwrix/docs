---
title: "Job Collection Template"
description: "Job Collection Template"
sidebar_position: 30
---

# Job Collection Template

You can create a job collection template either by converting an existing job collection into a job
collection template or by importing a job collection template.

By using a template for creating a new job collection, you can duplicate its job set, execution
order, and failure actions. The run schedule for the collection, however, is not defined in the
template.

A job collection template cannot be modified. Any changes made to it are not saved in the template
but a new job collection is created with the modifications.

Because of the wide variation of possible job combinations, Synchronize does not provide predefined
job collection templates.

## Create a Job Collection Template from a Job Collection

Follow the steps to create a job collection template from a job collection.

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On the Synchronize portal, click **Job Collections**.

Step 3 – In the Job Collections view, click
![option](/images/directorymanager/11.1/portal/synchronize/manage/option.webp)
on the job collection you want to save as a template and click **Save As Template**.

Step 4 – Now click **Job Collection Templates** and refresh the page. The newly created job group
template appears in the Job Collection Templates list.

Step 5 – If a run schedule has been define for the collection, it does not become part of the
template. Rather, when you create a job collection from the template, you have to define a run
schedule for it.

## Import a Job Collection Template

You can also import job collection templates. Only job collection templates that have been exported
from Directory Manager Synchronize can be imported to other machines running Directory Manager
Synchronize.

The import action only requires you to select the location where the exported template resides.

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On the Synchronize portal, click **Job Collections Templates**.

Step 3 – Click **Import Jobs** to open the dialog box.

Step 4 – Click the **Browse** button to browse to the location where the exported job Collection
templates are placed. The selected path is displayed in the adjacent box.

All job collection templates at the given location get listed in the Name column.

The Description column shows the description of the job collection template.

The Total Jobs column shows the total number of jobs in the job collection template.

While importing, if a job collection template with the same name already exists on the machine, a
confirmation box is displayed for you to verify the import by replacing the existing template or
saving it as a new one. If you import it as a new template, Synchronize appends a numeric code to
the template name to differentiate it from the existing template.

## Export a Job Collection Template

To export a job collection template, you need to follow these steps:

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On the Synchronize portal, click **Job Collections Templates**.

Step 3 – On the Job Collection Templates page, click the **three vertical dots** icon on the
template in the list that you want to export and click **Export**.

If you want to export multiple job collection templates, select all and click **Export Job(s)** from
the top right corner.

## Create a Job Collection from a Template

Follow the steps to create a job collection from a template.

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On the Synchronize portal, click **Job Collection Templates**.

For every template listed, the view provides its name, description and the number of jobs it
contains.

Step 3 – On the Job Collection Templates page, click the **three vertical dots** icon on the
template in the list and select **Create from Template**.

**OR**

Double-click the job collection template you want to use for the new job collection.

Step 4 – This will launch [Create a Job Collection ](/docs/directorymanager/11.1/portal/synchronize/collection/create.md) wizard starting from
the Job Collection(s) page. Proceed to map the settings stored in the template on to the new job
collection.

## Rename a Job Collection Template

Follow the steps to rename a job collection template.

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On the Synchronize portal, click **Job Collection Templates**.

Step 3 – On the **Job Collection Templates** page, click the **three vertical dots** icon on the
template in the list click **Rename**.

Step 4 – On **Rename Job Template Name and Description wizard**, update the name and description and
click **Save.**

## Delete a Job Collection Template

Follow the steps to delete a job collection template.

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On the Synchronize portal, click **Job Collection Templates**.

Step 3 – On the **Job Collection Templates** page, click the **three vertical dots** icon on the
template in the list that you want to delete and click **Delete**.

## Filter Job Collection Templates

You can apply filters on the **Job Collection Templates** page to display only those job templatess
that match the criteria set in the **Search Filters** section.

Step 1 – On Directory Manager portal, select **Synchronize** on left pane.

Step 2 – On Synchronize portal, click **Job Collection Templates**.

Step 3 – In the **Search Filters** section, select one of the following attributes from the
**Attributes** list to filter job collection templates:

- Name
- Description

Step 4 – Two more boxes get displayed next to **Attributes** box upon selecting a filter.

- **Select an Operator** from the first list.
- Specify a value for the selected operator in the second box.

Step 5 – Click **Apply Filter**.

All the job collection templates that match the specified criterion are displayed.
