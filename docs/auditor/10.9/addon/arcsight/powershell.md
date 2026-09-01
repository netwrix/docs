---
title: "Run the Add-On with PowerShell"
description: "Run the Add-On with PowerShell"
sidebar_position: 30
---

# Run the Add-On with PowerShell

**To run the add-on with PowerShell:**

**Step 1 –** On computer where you want to execute the add-on, start Windows PowerShell.

**Step 2 –** Enter a path to the add-on, or drag and drop the add-on file into the console
window.

**Step 3 –** Add script parameters. The console will look similar to the following:

Windows PowerShell PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Add-on_for_HPE_ArcSight.ps1 -
ArcSightHost 172.28.6.24 -NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., _C:\Netwrix Add-ons_), enclose it in double
quotes and insert the ampersand (**&**) symbol in front (e.g., & "_C:\Netwrix Add-ons_").

**Step 4 –** Press **Enter**.

Depending on the number of Activity Records stored in the Audit Database, execution may take a while.
Ensure the script execution completed successfully. The add-on then exports the data to ArcSight.

:::note
Events exceeding 4,000 characters are trimmed.
:::

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will
start retrieving new Activity Records.
