# Export Monitoring Data

You can export monitoring data from Access Analyzer to a CSV or PDF file for compliance reporting, audits, or offline analysis.

## Prerequisites

Before you export monitoring data, verify the following:

- You have a configured, active monitoring plan.
- You have the **Report Viewer** role or higher.
- The monitoring plan has collected at least one cycle of data.

## Export to CSV

1. Navigate to **Reports** > **Monitoring**.
2. Select the date range for the export.
3. Click **Export** and select **CSV** from the dropdown.
4. Choose a destination folder in the file dialog.
5. Click **Save**.

Access Analyzer generates the CSV file and opens the destination folder when the export completes.

## Export to PDF

1. Navigate to **Reports** > **Monitoring**.
2. Select the date range for the export.
3. Click **Export** and select **PDF** from the dropdown.
4. Choose a report template from the **Template** dropdown. Each template controls the layout, branding, and included sections.
5. Choose a destination folder in the file dialog.
6. Click **Save**.

:::note
PDF exports with large date ranges may take several minutes to generate. Access Analyzer displays a progress bar in the **Tasks** panel during generation.
:::

## Schedule a Recurring Export

To automate exports on a regular schedule:

1. Navigate to **Reports** > **Scheduled Exports**.
2. Click **New Schedule**.
3. Select the export format (**CSV** or **PDF**).
4. Set the frequency (daily, weekly, or monthly) and the time of day.
5. Enter one or more email addresses in the **Recipients** field. Access Analyzer sends the exported file as an attachment.
6. Click **Save**.

:::tip
Schedule recurring exports during off-peak hours to minimize impact on system performance.
:::

## Verify an Export

After you create an export or a scheduled export, confirm the output:

1. Open the exported file and verify that it contains data for the selected date range.
2. For scheduled exports, navigate to **Reports** > **Scheduled Exports** and check the **Last Run** column for the status and timestamp of the most recent execution.
