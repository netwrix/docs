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

Synchronize comes with a set of predefined job templates that represent some of the most common
business scenarios in use. You can use these templates as is, modify them to suit your needs, or
create your own custom templates.

Creating a custom template involves saving a job as a template. Therefore, you must first create a
job with commonly used settings before you can save it as a template. You can also create templates
of existing jobs at any time to reuse their settings in new jobs.

## Create a Job Template

To create a job template:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, select **All Jobs**.

Step 3 – From the **All Jobs** list, select the job you want to save as a template.

Step 4 – Click the three vertical dots icon and select **Save as template**.

Step 5 – On the **Template Name and Description** wizard, update the name and description and click
**Save**.

## Import a Job Template

You can also import job templates. Only job templates that were exported from Directory Manager
Synchronize can be imported to other machines running Directory Manager Synchronize.

The import action only requires you to select the location where the exported template resides.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Templates**.

Step 3 – Click **Import Jobs** to open the dialog box.

Step 4 – Click the **Browse** button to browse to the location where the exported job templates are
placed. The selected path is displayed in the adjacent box.

All job templates at the given location get listed in the Name column.

The Description column shows the description of the job template.

The **Source** and **Destination** columns display the names of the providers.

While importing, if a job template with the same name already exists on the machine, a confirmation
box appears for you to verify the import by replacing the existing template or saving it as a
new one. If you import it as a new template, Synchronize appends a numeric code to the template name
to differentiate it from the existing template.

## Export a Job Template

To export a job template:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Templates**.

Step 3 – On the Job Templates page, click the **three vertical dots** icon on the template in the
list that you want to export and click **Export**.

If you want to export multiple job templates, select all and click **Export Jobs** from the top
right corner.

## Create a Job from a Template

To create a job from a template:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Templates**.

For every template listed, the view provides its name, description, source, and the destination
provider.

Step 3 – On the Job Templates page, click the **three vertical dots** icon on the template in the
list and select **Create From Template**.

**OR**

Click the job template you want to use for the new job.

This launches the [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.2/portal/synchronize/create/create.md) wizard. Proceed to map the settings stored in the
template on to the new job.

## Rename a Job Template

To rename a job template:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Templates**.

Step 3 – On the Job Templates page, click the **three vertical dots** icon on the template in the
list, and click **Rename**.

Step 4 – On the **Rename Job Template Name & Description** wizard, update the name and description and click
**Save**.

## Delete a Job Template

To delete a job template:

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, select **Job Templates**.

Step 3 – On the Job Templates list, click the **three vertical dots** icon of the template that you
want to delete and select **Delete** from the menu.

## Filter Job Templates

You can apply filters on the **Job Templates** page to display only those job templates that match the
criteria set in the **Search Filters** section.

Step 1 – In the Directory Manager portal, select **Synchronize** in the left pane.

Step 2 – In the Synchronize portal, click **Job Templates**.

Step 3 – In the **Search Filters** section, select one of the following attributes from the
**Attributes** list to filter job templates:

- Name
- Description
- Source
- Destination

Step 4 – Two more boxes appear next to the **Attributes** box after you select a filter.

- **Select an Operator** from the first list.
- Specify a value for the selected operator in the second box.

Step 5 – Click **Apply Filter**.

All the job templates that match the specified criterion are displayed.
