---
title: "Generate Reports in Directory Manager"
description: "Generate a report from a template in the Directory Manager portal, choose the container, filters, and fields, and download it as Excel, PDF, or HTML."
sidebar_position: 10
keywords:
  - generate reports
  - report templates
  - report filter criteria
  - scheduled report job
  - download report as PDF
---

# Generate Reports in Directory Manager

Generating reports in the Directory Manager portal is a two-step process. The steps for generating a
report are the same for all reports. You specify settings, such as the source container or
organizational unit, the field to sort all records by, and the display names for the fields in the
report.

After generating a report, you can download it in different formats such as Excel, PDF, and HTML.

You can generate a report in either of two ways:

- Use the Create Report option.
- Use a Scheduled Reports job.

Of these, the second method can only be used for a report that has previously been generated.

## Create a Report

Reports are generated for the domain that your machine is joined to. For example, when your machine
is joined to the techwr5.local domain, reports display data for techwr5.local.

**To generate a report:**

1. In the Directory Manager portal, select **Reports** from the left pane.
2. On Reports Portal, select the type of objects whose report you want to generate. It displays
   the report templates for that object.

    For example, to create a user report, click **User Report** in the left pane. You see all the
    user reports that you can generate.

3. Click the template of your choice from the list and click **Create Report**.
4. In **Step 1** of generating a report:

    1. You can specify a custom title for your report. Enter the title of the report, replacing the
       existing one, in the **Report Name** box.
    2. Click **Browse** to open the **Select Container** dialog box and select the required source
       container. The default selection is the Global Catalog.
    3. Select the **Include sub containers** checkbox to include the sub-containers for the
       selected container when reporting.
    4. In the **Filter Criteria** section, modify the default LDAP filter as required. This filter
       is used for selecting items from the container, to display in the report.

        To add another filter, click **Add More Filters.**

    5. Click **Next**.

5. In **Step 2** of generating a report:

    1. The **Fields** section displays the fields that are included in the report. You can add
       or remove fields from the list. You can also move the given fields to change their order.
    2. From the **Sort By** dropdown list, select the field by which you want to sort the results in
       the report.
    3. From the **Schedule** dropdown list, select the schedule for the report. If you select a
       schedule, the report runs automatically at the scheduled time.
    4. Click **Finish.**

        The portal displays the report based on the settings you specified. The report displays the
        following information:

        1. Connected identity store name
        2. The selected container
        3. Number of the records fetched
        4. Date the report was created
        5. The filter applied while creating the report
        6. List of the report results

        The report is then listed in the template's page. You can create multiple reports of the
        same template.

6. To download the report, click **Download** and select the format for the report (PDF, Excel, or
   HTML).
7. You can also pin the report on Dashboard by clicking **Pin Report**.

## Scheduled Report job

You can create a **Scheduled Report job** in Directory Manager Admin Center. See
[Create a Reports Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/reports.md).

**See Also:**

- [Directory Manager Reports Dashboard](/docs/directorymanager/11.0/welcome/dashboard/dashboard.md)
- [Manage Directory Manager Reports](/docs/directorymanager/11.0/welcome/dashboard/manage.md)
- [Group Reports in Directory Manager](/docs/directorymanager/11.0/welcome/dashboard/group.md)
- [User Reports in Directory Manager](/docs/directorymanager/11.0/welcome/dashboard/user.md)
- [Directory Manager Computer Reports](/docs/directorymanager/11.0/welcome/dashboard/computer.md)
- [Contact Reports in Directory Manager](/docs/directorymanager/11.0/welcome/dashboard/contact.md)
