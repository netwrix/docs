---
title: "Windows Event Logs"
description: "Windows Event Logs"
sidebar_position: 10
---

# Windows Event Logs

The Remote Registry service must be enabled on the target computers.

Follow the steps to enable the Remote Registry service.

**Step 1 –** Navigate to Start > Windows Administrative Tools > **Services**.

![manualconfig_genevents_remoteregistry2016](/images/auditor/10.6/configuration/fileservers/windows/manualconfig_genevents_remoteregistry2016.webp)

**Step 2 –** In the **Services** dialog, locate the **Remote Registry** service, right-click it and
select **Properties**.

**Step 3 –** In the **Remote Registry Properties** dialog, make sure that the **Startup type**
parameter is set to _"Automatic"_ and click **Start**.

![manualconfig_genevents_remoteregistry_start2016](/images/auditor/10.6/configuration/fileservers/windows/manualconfig_genevents_remoteregistry_start2016.webp)

**Step 4 –** In the **Services** dialog, ensure that **Remote Registry** has the _"Started"_ (on
pre-Windows Server 2012 versions) or the _"Running"_ (on Windows Server 2012 and above) status.

**NOTE:** The Remote Registry should be enabled on the target server.
