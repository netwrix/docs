---
title: "Windows Event Logs"
description: "Windows Event Logs"
sidebar_position: 10
---

# Windows Event Logs

The Remote Registry service must be enabled on the target computers.

Follow the steps to enable the Remote Registry service.

**Step 1 –** Navigate to Start > Windows Administrative Tools > Services.

![Services Console](/images/1secure/configuration/computer/manualconfig_genevents_remoteregistry2016.webp)

**Step 2 –** In the Services window, locate the Remote Registry service, right-click it and select
**Properties**.

**Step 3 –** In the Remote Registry Properties dialog box, make sure the Startup type parameter is
set to _Automatic_ and click **Start**.

![Remote Registry Properties dialog box](/images/1secure/configuration/computer/manualconfig_genevents_remoteregistry_start2016.webp)

**Step 4 –** In the Services window, ensure that the Remote Registry service has the _Running_
status on Windows Server 2012 and above.

**NOTE:** The Remote Registry service should be enabled on the target server.
