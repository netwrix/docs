---
title: "Configure Event Log Size and Retention Settings"
description: "Configure Event Log Size and Retention Settings"
sidebar_position: 50
---

# Configure Event Log Size and Retention Settings

The procedure below describes one of the possible ways to adjust event log settings. If you have
multiple target computers, you need to perform this procedure on each of them.

If you move security log files from the default system folder to a non-default one, you must reboot
your target server for the reports and search functionality to work properly.

Follow the steps to configure Event Log Size and Retention Settings.

**Step 1 –** On a target server, navigate to Start > Windows Administrative Tools > Event Viewer.

**Step 2 –** Navigate to Event Viewer tree > Windows Logs, right-click **Security** and select
**Properties**.

![Log Properties dialog box](/images/1secure/configuration/computer/manualconfig_ws_eventviewerpr2016_thumb_0_0.webp)

**Step 3 –** Make sure Enable logging is selected.

**Step 4 –** In the Maximum log size field, specify the desired log size.

**Step 5 –** Make sure the Do not overwrite events (Clear logs manually) check box is cleared. If
selected, change the retention method to _Overwrite events as needed (oldest events first)_.

Make sure the Maximum security log size group policy does not overwrite your log settings. To check
this, start the Group Policy Management console, proceed to the GPO that affects your server, and
navigate to Computer Configuration > Policies > Windows Settings > Security Settings > Event Log.
