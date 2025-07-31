---
title: "Internet Information Services (IIS)"
description: "Internet Information Services (IIS)"
sidebar_position: 100
---

# Internet Information Services (IIS)

To be able to process Internet Information Services (IIS) events, you must enable the Remote
Registry service on the target computers. [Windows Server](/docs/auditor/10.8/configuration/windowsserver/overview.md)

To configure the Operational log size and retention method

1. On the computer where IIS is installed, navigate to Start > Windows Administrative Tools → Event
   Viewer.
2. Navigate to Event Viewer tree → Applications and Services Logs → Microsoft → Windows and expand
   the IIS-Configuration node.
3. Right-click the Operational log and select Properties.

    ![manualconfig_iis2016](/images/auditor/10.7/configuration/windowsserver/manualconfig_iis2016.webp)

4. Make sure **Enable logging** is enabled.
5. Set **Maximum log size** to 4 GB.
6. Make sure **Do not overwrite events (Clear logs manually)** is cleared. If selected, change the
   retention method to **Overwrite events as needed (oldest events first)**.
