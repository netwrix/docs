---
title: "Job Templates"
description: "Job Templates"
sidebar_position: 40
---

# Job Templates

Synchronize comes with a set of pre-defined job templates that represent some of the most common
business scenarios in use. You can use these templates as is, modify them to suit your needs, or
create your own custom templates.

Creating a custom template involves saving a job as a template. Therefore, you must first create a
job with commonly used settings before you can save it as a template. You can also create templates
of existing jobs on-the-fly to reuse their settings in new jobs.

What do you want to do?

- [Create a Job Template](#create-a-job-template)
- [Import a Job Template](#import-a-job-template)
- [Export a Job Template](#export-a-job-template)
- [Create a Job from a Template](#create-a-job-from-a-template)
- [Rename a Job Template](#rename-a-job-template)
- [Delete a Job Template](#delete-a-job-template)
- [Filter Job Templates](#filter-job-templates)

## Create a Job Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On **Synchronize** portal, select **All Jobs**.
3. From the **All Jobs** list, select the job you want to save as a template.
4. Click the **three vertical dots** icon and select **Save as Template**.
5. On **Template Name and Description wizard**, update the name and description and click **Save.**

## Import a Job Template

You can also import job templates. Only job templates that have been exported from GroupID
Synchronize can be imported to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported template resides.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported job templates are
   placed. The selected path is displayed in the adjacent box.

    All job templates at the given location get listed in the **Name** column.

    The **Description** column shows the description of the job template.

    The **Source and Destination** column displays the name of providers.

While importing, if a job template with the same name already exists on the machine, a confirmation
box is displayed for you to verify the import by replacing the existing template or saving it as a
new one. If you import it as a new template, Synchronize appends a numeric code to the template name
to differentiate it from the existing template.

## Export a Job Template

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.
3. On the **Job Templates** page, click the **three vertical dots** icon on the template in the list
   that you want to export and click **Export**.

If you want to export multiple job templates, select all and click **Export Job(s)** from the top
right corner.

## Create a Job from a Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.

    For every template listed, the view provides its name, description, source, and the destination
    proider.

3. On the **Job Templates** page, click the **three vertical dots** icon on the template in the list
   and select **Create from Template**.

    OR

    Click the job template you want to use for the new job..

4. This will launch
   [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md) wizard.
   Proceed to map the settings stored in the template on to the new job.

## Rename a Job Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.
3. On the **Job Templates** page, click the **three vertical dots** icon on the template in the list
   click **Rename**.
4. On **Rename Job Template Name & Description wizard**, update the name and description and click
   **Save.**

## Delete a Job Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On **Synchronize** portal, select **Job Templates**.
3. On the **Job Templates** list, click the **three vertical dots** icon of the template that you
   want to delete and select **Delete** from the menu.

## Filter Job Templates

You can apply filters on the **Job Templates** page to display only those job templates that match
the criteria set in the **Search Filters** section.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Templates**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes**
   list to filter job templates:

    - Name
    - Description
    - Source
    - Destination

4. Two more boxes get displayed next to **Attributes** box upon selecting a filter.

    - **Select an Operator** from the first list.
    - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

    All the job templates that match the specified criterion are displayed.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Manage a Job](/docs/directorymanager/11.0/welcome/synchronize/manage/job.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md)
