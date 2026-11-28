---
title: "Job Collection Templates in Directory Manager Synchronize"
description: "Create, import, export, rename, delete, and filter job collection templates, and create a job collection from a template."
keywords:
  - job collection templates
  - create job collection from template
  - import job collection templates
  - export job collection templates
sidebar_position: 30
---

# Job Collection Templates in Directory Manager Synchronize

You can create a job collection template by converting an existing job collection into a template or by importing a template.

When you use a template to create a new job collection, you duplicate its job set, execution order, and failure actions. The template doesn't define the run schedule for the collection.

A job collection template can't be modified. Changes you make aren't saved in the template. Instead, Synchronize creates a new job collection with the modifications.

Because job combinations vary widely, Synchronize doesn't provide predefined job collection templates.

## Create a job collection template from a job collection

To create a job collection template from a job collection:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collections**.
3. In the Job Collections view, click ![Options (three vertical dots)](/images/directorymanager/11.1/portal/synchronize/manage/option.webp) for the job collection you want to save as a template and click **Save as template**.
4. Click **Job Collection Templates** and refresh the page. The new job collection template appears in the Job Collection Templates list.

If a run schedule has been defined for the collection, it doesn't become part of the template. When you create a job collection from the template, you have to define a run schedule for it.

## Import a job collection template

You can import job collection templates that were exported from Directory Manager Synchronize. You can import them only to other machines that run Directory Manager Synchronize.

The import action only requires you to select the location where the exported template resides.

To import a job collection template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection Templates**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button and browse to the location of the exported job collection templates. The selected path is displayed in the adjacent box.

All job collection templates at the given location are listed in the Name column.

The Description column shows the description of the job collection template.

The Total Jobs column shows the total number of jobs in the job collection template.

While importing, if a job collection template with the same name already exists on the machine, a confirmation box appears. Use it to verify the import by replacing the existing template or saving it as a new one. If you import it as a new template, Synchronize appends a numeric code to the template name to differentiate it from the existing template.

## Export a job collection template

To export a job collection template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection Templates**.
3. On the Job Collection Templates page, click the **three vertical dots** icon on the template in the list that you want to export and click **Export**.

To export multiple job collection templates, select all of them and click **Export Jobs** in the top right corner.

## Create a job collection from a template

To create a job collection from a template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection Templates**. For every template listed, the view provides its name, description, and the number of jobs it contains.
3. On the Job Collection Templates page, click the **three vertical dots** icon on the template in the list and select **Create From Template**.

   **OR**

   Double-click the job collection template you want to use for the new job collection.

4. The [Create a Job Collection in Directory Manager Synchronize](/docs/directorymanager/11.1/portal/synchronize/collection/create.md) wizard launches, starting from the Job Collections page. Map the settings stored in the template to the new job collection.

## Rename a job collection template

To rename a job collection template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection Templates**.
3. On the **Job Collection Templates** page, click the **three vertical dots** icon on the template in the list, and click **Rename**.
4. On the **Rename Job Template Name and Description** wizard, update the name and description and click **Save**.

## Delete a job collection template

To delete a job collection template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection Templates**.
3. On the **Job Collection Templates** page, click the **three vertical dots** icon on the template in the list that you want to delete and click **Delete**.

## Filter job collection templates

Apply filters on the **Job Collection Templates** page to display only the job collection templates that match the criteria set in the **Search Filters** section.

To filter job collection templates:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Collection Templates**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes** list:

   - Name
   - Description

4. Two more boxes appear next to the **Attributes** box after you select a filter.

   - In the first list, **Select an Operator**, choose an operator.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**. The page displays all the job collection templates that match the specified criterion.
