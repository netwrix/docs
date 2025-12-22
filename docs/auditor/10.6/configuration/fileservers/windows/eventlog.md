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

**Step 1 –** On a target server, navigate to Start > Windows Administrative Tools **> Event
Viewer**.

**Step 2 –** Navigate to **Event Viewer tree > Windows Logs**, right-click **Security** and select
**Properties**.

![manualconfig_ws_eventviewerpr2016](/images/auditor/10.6/configuration/fileservers/windows/manualconfig_ws_eventviewerpr2016.webp)

**Step 3 –** Make sure **Enable logging** is selected.

**Step 4 –** In the **Maximum log size** field specify the size you need.

**Step 5 –** Make sure **Do not overwrite events (Clear logs manually)** is cleared. If selected,
change the retention method to **Overwrite events as needed (oldest events first)**.

Make sure that the Maximum security log size group policy does not overwrite your log settings. To
check this, start the Group Policy Management console, proceed to the GPO that affects your server,
and navigate to **Computer Configuration** **>** **Policies** **>** **Windows Settings** **>**
**Security Settings** **>** **Event Log**.
