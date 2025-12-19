---
title: "Deployments Pending Approval Report"
description: "Deployments Pending Approval Report"
sidebar_position: 30
---

# Deployments Pending Approval Report

This built-in report is available from **Reports** > **Release and Deployment** > **Deployments
pending approval**

The **Report Generation Status** should be **Complete**. If not, run the report again.

Click on any of the report columns to change the sort order. The ↓ or ↑ arrow in the column heading
indicates the current column and sort order being used for the results.

### Report Options

-  **Summarize information by**: Select a criteria from the list to have the results summarized and grouped. Default is **None**.
-  **Show**: Select the criteria for the deployment logs to show. Default is **All change requests**.
-  **Time Frame**: Select the **Date Field** to be used for the report, the **Range**, and adjust the **From** and **To** fields as needed. The default **Date Field** is **Deployment Date**, **Range** is **Custom** and **From/To** is blank. Date format is _dd/mm/yyyy_.
-  **Run Report**: Runs (**Run Report Now**) the report using the selected report options. Or, click on the arrow to open the **Schedule Future Runs** option.
-  **Hide Details/Show Details**: **Hide Details** hides the report body and **Show Details** restores the report view.
-  **Customize**: Opens the **Report Options**. You can change the table format, details, and included columns.
-  **Save**: Opens the **Save** dialog with the current file name options.
-  **Save As**: Opens the **Save As** dialog with blank fields.
-  **Delete**: Prompts you to confirm deleting the report. Click **OK** to delete or **Cancel** to keep the report.
-  **Printable View**: Creates the file _report###.xls_.
-  **Export Details**: Opens the **Export Report** options. Select the encoding and format (xls or csv) for the exported file. Click **Export** to generate the _report###_ file. Click **Done** to return to the report.
-  **Subscribe**: Opens the **Report Subscription** dialog. Select the subscription options.
-  **Filtered By**: Shows the current filters for the report. You can **Edit** or **Clear** the filters.

## Report Results

-  **Change Request Name**: Link to the change request for the deployment.
-  **Change Request: Created Date**: The created date of the change request. Format is _dd/mm/yyyy_
-  **Change Request: Owner Name**: Link to the change request owner information.
-  **Customizations**: Customizations for the deployment.
-  **Change Stage**: Change level required and stage for the deployment.
-  **Change Policy**: Link to the change policy.
-  **Completion Status**: Current status.
-  **Target Environment**: Target environment for the deployment.
-  **Source Environment**: Source environment for the deployment.

![report_deploy_pend_approval](/images/platgovsalesforce/reports/report_deploy_pend_approval.webp)
