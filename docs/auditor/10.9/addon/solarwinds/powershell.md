---
title: "Run the Add-On with PowerShell"
description: "Run the Add-On with PowerShell"
sidebar_position: 30
---

# Run the Add-On with PowerShell

First, provide a path to your add-on followed by script parameters with their values. Each parameter
is preceded with a dash; a space separates a parameter name from its value. You can skip some
parameters— the script uses a default value unless a parameter is explicitly defined. If necessary,
modify the parameters as required.

**To run the script with PowerShell:**

**Step 1 –** On computer where you want to execute the add-on, start **Windows PowerShell**.

**Step 2 –** Enter a path to the add-on. Or drag and drop the add-on file into the console
window.

**Step 3 –** Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Add-on_for_Solarwinds_Log_and_Event_Manager.ps1 -
NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., _C:\Netwrix Add-ons_), embrace it in double
quotes and insert the ampersand (**&**) symbol in front (e.g., & "_C:\Netwrix Add-ons_").

**Step 4 –** Hit **Enter**.

Depending on the number of Activity Records stored in the Netwrix Auditor Audit Database, execution
may take a while. Ensure the script execution completed successfully. The script creates the
Netwrix Auditor **Integration** event log and fills it with events.

By default, the Netwrix Auditor **Integration** event log size is set to 1GB, and retention is set
to "_Overwrite events as needed_". See the [Integration Event Log Fields](/docs/auditor/10.9/addon/solarwinds/integrationeventlog.md)
topic for additional information.

**NOTE:** The script trims event records with more than 30,000 characters.

At the end of each run, the script creates the
**Netwrix_Auditor_Event_Log_Export_Add-on_EventIDs.txt** file. It defines mapping between the
Activity Records and related Event IDs. You can use this file to track possible duplicates of Event
IDs created at each script execution. The script writes duplicates, if any, to the
**Netwrix_Auditor_Event_Log_Export_Add-on_EventIDsDuplicates.txt** file.

Similarly, the add-on also creates the **Netwrix_Auditor_Event_Log_Export_Add-on_CategoriesIDs.txt**
file that defines mapping between the Data Source and related Category ID.

## Applying Filters

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will
start retrieving new Activity Records. Consider the following:

- By default, the add-on doesn't apply any filters when exporting Activity Records. If you are
  running the add-on for the first time (there is no timestamp yet) with no filters, it will export
  Activity Records for the last month only. This helps to optimize solution performance during the
  first run. At the end of the first run, the add-on creates the timestamp, and the next run starts
  exporting from that timestamp.

- However, if you have specified a time period for exporting Activity Records, the add-on applies
  this filter on its first run and all subsequent runs.
