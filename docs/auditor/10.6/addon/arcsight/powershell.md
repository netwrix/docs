---
title: "Run the Add-On with PowerShell"
description: "Run the Add-On with PowerShell"
sidebar_position: 30
---

# Run the Add-On with PowerShell

Follow the steps to run add-on with PowerShell:

**Step 1 –** On computer where you want to execute the add-on, start Windows PowerShell.

**Step 2 –** Type a path to the add-on. Or simply drag and drop the add-on file in the console
window.

**Step 3 –** Add script parameters. The console will look similar to the following:

Windows PowerShell PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Add-on_for_HPE_ArcSight.ps1 -
ArcSightHost 172.28.6.24 -NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., _C:\Netwrix Add-ons_), embrace it in double
quotes and insert the ampersand (**&**) symbol in front (e.g., & "_C:\Netwrix Add-ons_").

**Step 4 –** Hit **Enter**.

Depending on the number of Activity Records stored in the Audit Database execution may take a while.
Ensure the script execution completed successfully. As a result, data will be exported to ArcSight.
Note that events exceeding 4000 symbols are trimmed.

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will
start retrieving new Activity Records.
