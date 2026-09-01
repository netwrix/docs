---
title: "Configure Event Log Size and Retention Settings"
description: "Configure Event Log Size and Retention Settings"
sidebar_position: 50
---

# Configure Event Log Size and Retention Settings

This procedure describes one of the possible ways to adjust event log settings. If you have
multiple target computers, perform this procedure on each of them.

If you move security log files from the default system folder to a non-default one, you must reboot
your target server for the reports and search functionality to work properly.

**Step 1 –** On a target server, navigate to Start > Windows Administrative Tools > Event Viewer.

**Step 2 –** Navigate to Event Viewer tree > Windows Logs, right-click **Security** and select
**Properties**.

![Log Properties dialog box](/images/auditor/10.7/configuration/fileservers/windows/manualconfig_ws_eventviewerpr2016_thumb_0_0.webp)

**Step 3 –** ensure Enable logging is selected.

**Step 4 –** In the Maximum log size field, specify the log size you want.

**Step 5 –** ensure the Don't overwrite events (Clear logs manually) checkbox is cleared. If
selected, change the retention method to _Overwrite events as needed (oldest events first)_.

Ensure the Maximum security log size group policy doesn't overwrite your log settings. To check
this, start the Group Policy Management console, proceed to the GPO that affects your server, and
navigate to Computer Configuration > Policies > Windows Settings > Security Settings > Event Log.
