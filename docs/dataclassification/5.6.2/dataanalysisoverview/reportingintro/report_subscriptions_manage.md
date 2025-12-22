---
title: "Manage Reports"
description: "Manage Reports"
sidebar_position: 50
---

# Manage Reports

This section contains information on how to generate reports, use report templates and enable
Auto-Classification.

## Generating and Exporting Reports

1. From the list of reports in the left pane, select the report you need.
2. In the preview pane on the right, provide the settings for report generation. For example, the
   Document Tagging report has the following settings: **Taxonomy** (default is _All taxonomies_)
   and **Metadata** (a user can include specified metadata in reports).
3. Click **Show Filters**. For example, the Document Tagging report has the following filters:

    - **Score range**
    - **Classification**
    - **Page URL**
    - **Source**

4. Finally, click **Generate**.

![reports_doctagging_thumb_0_0](/images/dataclassification/5.6.2/reporting/reports_doctagging_thumb_0_0.webp)

The report will be displayed in the preview pane.

You can export document-specific report data along with any associated document metadata. For that,
in the bottom of the pane select the export option you need (_CSV/XLSX_). The file will be
downloaded to your default downloads folder.

## Save Report Configuration

Netwrix Data Classification allows you to save report configuration settings as a template for the
future use. Then if you need to run the report with the specified parameters more than once, you can
just load its configuration from the template you have saved.

:::note
This capability is supported for built-in reports (Classification, Clue Building, Document,
and System reports).
:::


To view all templates available to you, open the **Reports** tab and select **Report Templates** on
the left.

![reporttemplates](/images/dataclassification/5.6.2/reporting/reporttemplates.webp)

To save a report configuration template

1. Select the report you need.
2. Specify the necessary properties (e.g., grouping settings) and apply filters (e.g., to only
   include data from the specific source).
3. Click the **Save Report Configuration** button.

    ![report_template](/images/dataclassification/5.6.2/reporting/report_template.webp)

    :::note
    Report configuration templates are saved per user.
    :::


4. Enter a name for the report configuration template.
5. To create a subscription for the report configuration template, check the **Create a
   Subscription** box, then click **Save and Next**. Otherwise, click **Save** to complete
   configuration. See the [Manage Subscriptions](#manage-subscriptions) section for additional
   information on creating report subscriptions.

**To load report configuration template**

1. Select a report you want to load the configuration for.
2. Click the **Load Saved Configuration** link.
3. In the **Load Saved Configuration** dialog, select the desired template from the **Template
   Name** list.
4. Click **Generate** to view the report.

## Manage Subscriptions

Subscriptions for report templates enable you to schedule email delivery of a variety of reports or
set of specific search criteria. Subscriptions are helpful if you are a rare guest of Netwrix Data
Classification and you only need to get statistics based on individual criteria. For example, an IT
manager can easily provide auditors with weekly reports to prove compliance with regulations.
[See Report Subscriptions for more information.](/docs/dataclassification/5.6.2/dataanalysisoverview/reportingintro/report_suscriptions.md)

To view existing subscriptions for reports, navigate to the **Report Templates** page on the left
and click **View Subscriptions** next to an existing template to view and edit subscriptions.

![managesubscription](/images/dataclassification/5.6.2/reporting/managesubscription.webp)

Checking the **Create a Subscription** box when saving a new report configuration will enable users
to create a new subscription. The following options are configured on the **Manage Subscriptions**
page:

| Option                              | Description                                                                                                                                  |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Subscription Name                   | Create a name for the report subscription                                                                                                    |
| Email Group                         | Enter the email group(s) that will receive the reports. If no email groups are configured, click the **(+)**icon to create new email groups. |
| Send email when no data is reported | Check this box to send an email with the report even when there is no data. Leave this box unchecked to disable this option.                 |
| Export Format                       | Select whether to export the report as a **CSV** or **XLSX**.                                                                                |
| Run Every:                          | Set how often email reports are sent out. Users can choose to send reports in a period of **days**, **weeks**, or **months**.                |
| Starting On:                        | Set the date that reports will start being sent out.                                                                                         |

Click **Save** to complete configuration.
