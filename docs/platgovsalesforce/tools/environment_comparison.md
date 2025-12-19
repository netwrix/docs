---
title: "Environment Comparison"
description: "Environment Comparison"
sidebar_position: 70
---

# Environment Comparison

Administrators use this tool to compare environments and generate an Excel report file with the
results. This report can be used to troubleshoot processes or data causing errors in a particular
account, compare preferences between accounts, or determine if data needs to migrate between
accounts. An [Environment Compare Log](/docs/platgovsalesforce/reports/deployment_logs_environment_compare.md) is
generated. The comparison can handle up to 10,000 items. You receive an email with a link to the
[Export Object Attachment](/docs/platgovsalesforce/tools/export_object_attachment_records.md) record, where you can download your
file. Here is the basic process:

Open **Netwrix Dashboard** > **Tools** > **Environment Comparison**

1. Select the Environments to Compare
2. Add Filters for the Comparison
3. Select Export Options
4. Run the Comparison
5. View the Report

## Select the Environments to Compare

![compare_env_environments](/images/platgovsalesforce/tools/compare_env_environments.webp)

For both the **Source** and **Target** Environments:

Select your credentials from the drop down lists. Create credentials with the Credentials Handler.

The **Click here to proceed** link opens the Credentials Handler where you can add, edit and sync
your credentials.

## Add Filters for the Comparison

Filters determine what is included in the comparison. There are four options to add filters:

- Option 1: Select All Customizations of the Specified Metadata Type
- Option 2: Import All Customizations from a Selected Change Request
- Option 3: Select Specific Customizations
- Option 4: Packages to Exclude (All Options)

:::note
Filters are cumulative. Use a single filter (1 through 3) to avoid overlapping selections.
**Packages to Exclude** can be used in conjunction with options 1 through 3.
:::

### Set a Metadata Type

**Metadata Type**

Select a **All** or a specific metadata type to compare from the list. If you select **Report**,
only tabular and summary reports are compared. Metric and joined reports are not compared.

![compare_env_filters](/images/platgovsalesforce/tools/compare_env_filters.webp)

### Import Customizations from a Change Request

**Change Request**

Enter a Change Request ID, or use the drop down to scroll through a list of available Change
Requests.

![Import Customizations from a Change Request](/images/platgovsalesforce/tools/compare_env_filters3.webp)

### Select Specific Customizations

1. Scroll through the **Search Customizations**, or enter all or part of a name to filter the list.
   You can **Select a Salesforce Type** to limit this list. If you select **Report**, only tabular
   and summary reports are compared. Metric and joined reports are not compared.
2. Select one or more customizations in the **Select Customizations** scroll box. Use **Shift** or
   **Ctrl** to select multiple customizations .
3. Click the right arrow to move the items to the **Selected Customizations** list. To remove an
   item from the **Selected Customizations** list, select it and click the left arrow.

![Add Filters with Individual Customizations](/images/platgovsalesforce/tools/compare_env_filters2.webp)

### Packages to Exclude

1. Enter the package name in **Search Packages**.
2. Select one or more **Packages** in the Select Packages to exclude scroll box.
3. Click the right arrow to move the items to the **Selected** list. To remove an item from the
   **Selected** list, select it and click the left arrow.

![Select packages to exclude](/images/platgovsalesforce/tools/compare_env_filters4.webp)

## Select Export Options

Click **Export to Excel** if you want to view the report in Excel. You receive an email when the
Excel file is complete.

## Run the Comparison

Click **Compare**. The process is run in the background. You receive an email when the compare is
complete.

## View the Report

1. Open the **Export Attachments** tab. Change the Export Attachments from **Recently Viewed** to
   **All** if necessary to see your report. Refer to
   [Export Object Attachment](/docs/platgovsalesforce/tools/export_object_attachment_records.md) for details on adding the tab to
   your tool bar if needed.
2. Click on the **Environment Comparison** report in the list. The Export Attachment **Details** are
   displayed, and your Excel report is downloaded by your browser.
3. Open the _Environment_Compare_export.xls_ file. When you open an exported file, this message may
   be displayed, as the exported file is in XML instead of the Excel format. Click **Yes** to load
   the file.
   ![Excel error message - Click Yes to continue.](/images/platgovsalesforce/tools/export_excel_error_msg.webp)

### Environment_Compare_export.xls

![The Only In Source tab of the Environment_Compare_Export.xls file](/images/platgovsalesforce/tools/compare_env_results_excel.webp)

The _Environment_Compare_export.xls_ file contains a **Summary** tab and individual tabs for each
comparison type:

**Summary**: details about this Environment Comparison

**Only in Source**: items only present in the **Source** Environment

**Only in Target**: items only present in the **Target** Environment

**In Both Same**: items present in both Environments without differences

**In Both Different**: items present in both Environments with differences. Here is an example:

![Example of Environment Comparison differences](/images/platgovsalesforce/tools/compare_env_results_excel_diffs.webp)

## Create a Change Request

You can use the link in your Environment Compare complete email to directly open a Salesforce form
and create a Change Request based on the differences.

1. Open **Netwrix Dashboard** > **Tools** > **Environment Comparison**
2. **Select Customization(s)** contains all of the Customizations with Differences. Select one or
   more and click **Add** to move them to the **Selected Customization(s)** pane.

    ![Select Customizations with Differences and create a Change Request](/images/platgovsalesforce/tools/compare_env_create_cr.webp)

3. Click **Create Change Request** to continue.
