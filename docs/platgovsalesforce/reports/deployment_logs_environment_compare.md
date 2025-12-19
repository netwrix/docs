---
title: "Environment Compare Logs"
description: "Environment Compare Logs"
sidebar_position: 40
---

# Environment Compare Logs

This built-in report is available from **Reports** > **Release and Deployment** > **Environment
Compare Logs**

The **Report Generation Status** should be **Complete**. If not, run the report again.

Click on any of the report columns to change the sort order. The ↓ or ↑ arrow in the column heading
indicates the current column and sort order being used for the results.

### Report Options

-  **Summarize information by**: Select a criteria from the list to have the results summarized and grouped. Default is **# of Test Errors**.
-  **Show**: Select the criteria for the deployment logs to show. Default is **All deployment logs**.
-  **Time Frame**: Select the **Date Field** to be used for the report, the **Range**, and adjust the **From** and **To** fields as needed. The default **Date Field** is **Completed Date**, **Range** is **Custom** and **From/To** is blank. Date format is _dd/mm/yyyy_.
-  **Run Report**: Runs (**Run Report Now**) the report using the selected report options. Or, click on the arrow to open the **Schedule Future Runs** option.
-  **Hide Details/Show Details**: **Hide Details** hides the report body and **Show Details** restores the report view.
-  **Customize**: Opens the **Report Options**. You can change the table format, details, and included columns.
-  **Save**: Opens the **Save** dialog with the current file name options.
-  **Save As**: Opens the **Save As** dialog with blank fields.
-  **Delete**: Prompts you to confirm deleting the report. Click **OK** to delete or **Cancel** to keep the report.
-  **Printable View**: Creates the file _report###.xls_.
-  **Export Details**: Opens the **Export Report** options. Select the encoding and format (xls or csv) for the exported file. Click **Export** to generate the _report###_ file. Click **Done** to return to the report.
-  **Subscribe**: Opens the **Report Subscription** dialog. Select the subscription options.

## Report Results

-  **FLO Environment Compare Log Name**: Link to the environment compare log.
-  **Different Records Count**: Number of different records between the compared environments.
-  **User**: Link to the requesting user's information.
-  **Change Request**: Link to the change request.
-  **Compare Filters**: Filters used to run the comparison.
-  **Created Date**: Date of the environment compare. Format is _dd/mm/yyyy_

![Environment Compare Log Report](/images/platgovsalesforce/reports/report_deploy_env_compare.webp)

## Sample Environment Compare Log

Click on a **Log Name** link to open the log.

![Example Environment Compare Log](/images/platgovsalesforce/reports/deploy_compare_env_log.webp)
