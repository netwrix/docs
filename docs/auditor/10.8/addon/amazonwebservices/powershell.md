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

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Add-on_for_Amazon_Web_Services.ps1 -
NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., `C:\Netwrix Add-ons\`), embrace it in double
quotes and insert the ampersand (&) symbol in front (e.g., & "`C:\Netwrix Add-ons\`").

**Step 4 –** Hit **Enter**.

Depending on the number of events logged by CloudTrail it may take a while. Ensure the script
execution completed successfully. Every time you run a script, Auditor makes a checkpoint with the
last imported event. The next time you run the script, it will start retrieving new events.

**NOTE:** By default, CloudTrail keeps events for **7** days.
