---
title: "Run the Add-On with PowerShell"
description: "Run the Add-On with PowerShell"
sidebar_position: 30
---

# Run the Add-On with PowerShell

First, provide a path to your add-on followed by script parameters with their values. Each parameter
is preceded with a dash; a space separates a parameter name from its value. You can skip some
parameters— the script uses a default value unless you explicitly define one. If necessary,
modify the parameters as required.

To run the add-on with PowerShell:

**Step 1 –** On the computer where you want to execute the add-on, start Windows PowerShell.

**Step 2 –** Enter a path to the add-on, or drag and drop the add-on file into the console
window.

**Step 3 –** Add script parameters. The console looks similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Event_Log_Export_Add-on.ps1 - NetwrixAuditorHost
172.28.6.15

**NOTE:** If the script path contains spaces (e.g., _C:\Netwrix Add-ons_), embrace it in double
quotes and insert the ampersand (**&**) symbol in front (e.g., & "_C:\Netwrix Add-ons_").

**Step 4 –** Hit **Enter**.

Depending on the number of Activity Records stored in Netwrix Auditor Audit Database execution may
take a while. Ensure the script execution completed successfully. Netwrix Auditor creates the
**Integration** event log and fills it with events.

By default, the add-on sets the Netwrix Auditor **Integration** event log size to **1GB** and the
retention to "_Overwrite events as needed_".
