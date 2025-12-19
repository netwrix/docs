---
title: "Generate Reports"
description: "Generate Reports"
sidebar_position: 10
---

# Generate Reports

Generating reports in Directory Manager portal is a two step process that makes the reporting
process quick and easy. The steps for generating a report are the same for all reports; you have to
specify settings, such as the source container or organizational unit, the field to sort all
records, and the display names for the fields in the report.

After generating a report, you can download it in different formats such as Excel, PDF, and HTML.

You can generate a report in any of the two ways:

- Use the Create Report option.
- Use a Scheduled Reports job.

Of these, the last method can only be used for a report that has previously been generated.

## Create a Report

Reports are generated for the domain that your machine is joined to. For example, when your machine
is joined to a domain, techwr5.local, reports would display data for techwr5.local.

**To generate a report:**

1. In Directory Manager portal, select **Reports** from the left pane.
2. On Reports Portal, select the type of objects whose report you want to generate. It will display
   the reports templates for that object.

    For example, to create a user report, click **User Report** from left pane. You will see all the
    user reports that you can generate.

3. Click on the template of your choice from the list and click **Create Report**.
4. In **Step 1** of generating a report:

    1. You can specify a custom title for your report. Type the title of the report, replacing the
       existing one, in the **Report Name** box.
    2. Click **Browse** to open the **Select Container** dialog box and select the required source
       container. The default selection is the Global Catalog.
    3. Select the **Include sub containers** check box to include the sub-containers for the
       selected container when reporting.
    4. In the **Filter Criteria** section, modify the default LDAP filter as required. This filter
       is used for selecting items from the container, to display in the report.

        To add additional filter, click **Add More Filters.**

    5. Click **Next**.

5. In **Step 2** of generating a report:

    1. The **Fields** section displays the fields that will be included in the report. You can add
       or remove fields from the list. You can also move the given fields to change their order.
    2. From **Sort By** drop down list, select the field by which you want to sort the results in
       the report.
    3. From **Schedule** drop down list, select the schedule for the report. If you select a
       schedule, the report will run automatically on the specified time of the schedule.
    4. Click **Finish.**

        Report based on the setting you set on the portal is displayed. The report displays the
        following information:

        1. Connected identity store name
        2. The selected container
        3. Number of the records fetched
        4. Date the report was created on
        5. The filter applied while creating the report
        6. List of the report results

        The report is then listed in the template's page. You can create multiple reports of the
        same template.

6. To download the report, click **Download** and select the format for the report (PDF, Excel, or
   HTML).
7. You can also pin the report on Dashboard by clicking **Pin Report**.

## Scheduled Report job

You can create a **Scheduled Report job** on Directory Manager Admin Center. See
[Reports Schedule](/docs/directorymanager/11.1/admincenter/schedule/reports.md)
