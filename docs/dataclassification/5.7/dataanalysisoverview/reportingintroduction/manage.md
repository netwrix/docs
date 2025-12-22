---
title: "Manage Reports"
description: "Manage Reports"
sidebar_position: 30
---

# Manage Reports

This section contains information on how to generate reports, use report templates and enable
Auto-Classification.

## Generating and Exporting Reports

1. From the list of reports in the left pane, select the report you need.
2. In the preview pane on the right, provide the settings for report generation. For example, the
   Document Tagging report has the following settings: **Taxonomy** (default is _All taxonomies_)
   and Metadata (a user can include specified metadata in reports).
3. Click **Show Filters**. For example, the Document Tagging report has the following filters:
    - **Score range**
    - **Classification**
    - **Page URL**
    - **Source**
4. Finally, click **Generate**.

![reports_doctagging_thumb_0_48](/images/dataclassification/5.7/admin/reporting/reports_doctagging_thumb_0_0.webp)

The report will be displayed in the preview pane.

You can export document-specific report data along with any associated document metadata. For that,
in the bottom of the pane select the export option you need (_CSV/XLSX_). The file will be
downloaded to your default downloads folder.

## Save Report Configuration

Netwrix Data Classification allows you to save report configuration settings as a template for the
future use. Then if you need to run the report with the specified parameters more than once, you can
just load its configuration from the template you have saved.

:::note
This capability is supported for built-in reports (Classification, Clue Building,
Document, and System reports).
:::


To view all templates available to you, open the Reports tab and select **Report Templates** on the
left.

![report_templates_thumb_0_0](/images/dataclassification/5.7/admin/reporting/report_templates_thumb_0_0.webp)

**To save a report configuration template**

1. Select the report you need.
2. Specify the necessary properties (e.g., grouping settings) and apply filters (e.g., to only
   include data from the specific source).
3. Click the Save Report Configuration button.

![save_report_config](/images/dataclassification/5.7/admin/reporting/report_template.webp)

:::note
Report configuration templates are saved per user.
:::


**To load report configuration template**

1. Select a report you want to load the configuration for.
2. Click the Load Saved Configuration link.
3. In the Load Saved Configuration dialog, select the desired template from the **Template Name**
   list.
4. Click Generate to view the report.
