---
description: >-
  Troubleshoot the "NO MONITORING PLANS FOUND" message in Netwrix Auditor
  reports, including causes and step-by-step resolutions to restore report
  availability.
keywords:
  - monitoring plans
  - Netwrix Auditor
  - reports
  - Report Manager
  - state-in-time
  - Audit Database
  - Reports folder
  - troubleshooting
products:
  - auditor
sidebar_label: No Monitoring Plans Found in Netwrix Auditor
tags: []
title: "No Monitoring Plans Found in Netwrix Auditor"
knowledge_article_id: kA00g000000H9eLCAS
---

# No Monitoring Plans Found in Netwrix Auditor

## Symptom

When attempting to view a report, the **Monitoring Plan** dropdown list reads as follows:

```
NO MONITORING PLANS FOUND
```

![Monitoring Plan dropdown showing NO MONITORING PLANS FOUND]./../0-images/ka04u00000117TM_0EM4u000008M6Wx.png)

## Causes

- A data source type for the report you're viewing is not added to any of your existing monitoring plans.
  - E.g., if you're generating a File Servers report, it won't be generated unless you have at least one monitoring plan for a File Servers data source.
- A monitoring plan for the data source type exists, but no data has been collected, or uploaded to your SQL Server instance databases.
- You're attempting to view a report under the **State-in-Time** category, while data collection for State-in-Time reports for the data source is disabled.
- The **Reports** folder is corrupted.

## Resolutions

- Create a new monitoring plan for the data source. Refer to the following article for additional information: [Monitoring Plans](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/overview)


- Review the corresponding data source settings:
  - Review your Health Log for errors related to the monitoring plan containing the data source.
  - Review the monitoring plan settings:
    1. In the main Netwrix Auditor menu, click **Monitoring Plans**.
    2. In the left pane, select the appropriate monitoring plan and click **Edit**.
    3. In the right pane, click **Edit settings** under the **Monitoring plan** section.
    4. Review the **Data Collection** tab for correct data collection account credentials.
    5. Review the **Audit Database** tab for correct database specified, as well as credentials.
    6. Make sure the **Audit Database** tab has the **Disable security intelligence and make data available only in activity summaries** checkbox unchecked.
    7. Save the changes.

- Review the data source with State-in-Time reporting:
  1. In the main Netwrix Auditor menu, click **Monitoring Plans**.
  2. In the left pane, select the appropriate monitoring plan and click **Edit**.
  3. In the right pane, click **Edit data source** under the **Data source** section.
  4. Review the **General** tab to switch the **Collect data for state-in-time reports** switch on.
  5. Save the changes.

> **NOTE:** Once data is collected (once every 24 hours by default), it should become available in the report.

- Recreate the **Reports** folder.
  1. In elevated PowerShell, execute the following command to stop the corresponding service:
     ```powershell
     Stop-Service -DisplayName "Netwrix Auditor Management Service"
     ```
  2. Open Report Manager in your browser.
     - You can find the Report Manager URL in your main Netwrix Auditor menu > **Settings** > **Audit Database** tab > **Report Manager URL**.
  3. In the main SQL Server Reporting Services window, locate the **Netwrix Auditor** folder.
  4. Click the meatball **⸱⸱⸱** button, and select **Delete**.
  5. Follow the path provided:
     ```text
     C:\ProgramData\Netwrix Auditor\Reports
     ```
  6. Delete the contents of the **Reports** folder.
  7. Once deleted, follow the path provided to find the **Reports.zip** archive in the root of the folder:
     ```text
     C:\ProgramData\Netwrix Auditor
     ```
  8. Extract the contents of the **Reports.zip** archive to the `C:\ProgramData\Netwrix Auditor\Reports` folder.
  9. In elevated PowerShell, execute the following command to start the corresponding service:
     ```powershell
     Start-Service -DisplayName "Netwrix Auditor Management Service"
     ```
  10. Wait for about 10 minutes for reports to upload to your Report Manager. You can track the progress by following the Report Manager URL and entering the **Netwrix Auditor** folder.
  11. Once the affected report is uploaded, run the report again.

> **IMPORTANT:** There are downsides to this approach:
>
> - The account specified in **Audit database settings** for Report Server should have local admin permissions, as well as permissions to create folders, and upload folders.
> - Any folder/report access permissions set up in Report Manager directly instead of monitoring plans delegation will have to be reconfigured. Alternatively, you can delete a particular affected report instead of deleting the entire **Netwrix Auditor** reports folder.
> - In case you've previously added a custom report, you will have to manually set it up again. This could apply to the report provided in the following article: [How to Monitor Print Service Activity](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-monitor-print-service-activity).

## Related articles

- [Monitoring Plans](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/overview)

