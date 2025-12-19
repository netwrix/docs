---
title: "Create Custom Report"
description: "Create Custom Report"
sidebar_position: 60
---

# Create Custom Report

To speed up data review process and help you find the latest logons faster, Netwrix created an
additional script, **Netwrix_Auditor_Saved_Search_for_RADIUS_Server_Logons.ps1**. It is shipped with
the add-on and creates the RADIUS server logons since yesterday custom search-based report in the
Auditor client.

Follow the steps to create a custom report with the script.

**Step 1 –** Copy the **Netwrix_Auditor_Saved_Search_for_RADIUS_Server_Logons.ps1** script to the
Auditor Server.

**Step 2 –** Start **Windows PowerShell** and specify a path to the script.

**Step 3 –** Run the script.

**NOTE:** The user running the script must be a member of the **Netwrix Auditor Administrators**
group.

After running the script, the RADIUS server logons since yesterday custom report appears in
**Reports** > **Custom**. You can access the search instantly to receive it on a regular basis.

![radiusfilters](/images/auditor/10.6/addon/radius/radiusfilters.webp)

Clicking the saved search tile opens the search with preset filters, which shows RADIUS logon
activity data for 2 days (yesterday and today).
