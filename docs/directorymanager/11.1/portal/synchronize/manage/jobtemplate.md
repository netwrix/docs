---
title: "Job Templates in Directory Manager Synchronize"
description: "Create, import, export, rename, delete, and filter Synchronize job templates, and create a job from a template."
keywords:
  - job templates
  - create job from template
  - import job templates
  - export job templates
  - predefined job templates
sidebar_position: 40
---

# Job Templates in Directory Manager Synchronize

Synchronize comes with a set of predefined job templates that represent some of the most common business scenarios. You can use these templates as is, modify them to suit your needs, or create your own custom templates.

To create a custom template, save a job as a template. First create a job with commonly used settings. You can also create templates of existing jobs at any time to reuse their settings in new jobs.

## Create a job template

To create a job template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, select **All Jobs**.
3. From the **All Jobs** list, select the job you want to save as a template.
4. Click the three vertical dots icon and select **Save as template**.
5. On the **Template Name and Description** wizard, update the name and description and click **Save**.

## Import a job template

You can import job templates that were exported from Directory Manager Synchronize. You can import them only to other machines that run Directory Manager Synchronize.

The import action only requires you to select the location where the exported template resides.

To import a job template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Templates**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button and browse to the location of the exported job templates. The selected path is displayed in the adjacent box.

All job templates at the given location are listed in the Name column.

The Description column shows the description of the job template.

The **Source** and **Destination** columns display the names of the providers.

While importing, if a job template with the same name already exists on the machine, a confirmation box appears. Use it to verify the import by replacing the existing template or saving it as a new one. If you import it as a new template, Synchronize appends a numeric code to the template name to differentiate it from the existing template.

## Export a job template

To export a job template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Templates**.
3. On the Job Templates page, click the **three vertical dots** icon on the template in the list that you want to export and click **Export**.

To export multiple job templates, select all of them and click **Export Jobs** in the top right corner.

## Create a job from a template

To create a job from a template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Templates**. For every template listed, the view provides its name, description, source, and the destination provider.
3. On the Job Templates page, click the **three vertical dots** icon on the template in the list and select **Create From Template**.

   **OR**

   Click the job template you want to use for the new job.

The [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/create/create.md) wizard launches. Map the settings stored in the template to the new job.

## Rename a job template

To rename a job template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Templates**.
3. On the Job Templates page, click the **three vertical dots** icon on the template in the list, and click **Rename**.
4. On the **Rename Job Template Name & Description** wizard, update the name and description and click **Save**.

## Delete a job template

To delete a job template:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, select **Job Templates**.
3. On the Job Templates list, click the **three vertical dots** icon of the template that you want to delete and select **Delete** from the menu.

## Filter job templates

Apply filters on the **Job Templates** page to display only the job templates that match the criteria set in the **Search Filters** section.

To filter job templates:

1. In the Directory Manager portal, select **Synchronize** in the left pane.
2. In the Synchronize portal, click **Job Templates**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes** list:

   - Name
   - Description
   - Source
   - Destination

4. Two more boxes appear next to the **Attributes** box after you select a filter.

   - In the first list, **Select an Operator**, choose an operator.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**. The page displays all the job templates that match the specified criterion.
