---
title: "Enable Remote Registry Service In Netwrix 1Secure"
sidebar_label: "Enable Remote Registry Service"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Enable Remote Registry Service

Follow the steps to enable the Remote Registry service.

**Step 1 –** Navigate to Start > Windows Administrative Tools > Services.

![Services Console](/img/product_docs/1secure/configuration/computer/manualconfig_genevents_remoteregistry2016.webp)

**Step 2 –** In the Services window, locate the Remote Registry service, right-click it and select
**Properties**.

**Step 3 –** In the Remote Registry Properties dialog box, make sure the Startup type parameter is
set to _Automatic_ and click **Start**.

![Remote Registry Properties dialog box](/img/product_docs/1secure/configuration/computer/manualconfig_genevents_remoteregistry_start2016.webp)

**Step 4 –** In the Services window, ensure that the Remote Registry service has the _Running_
status on Windows Server 2012 and above.

**NOTE:** The Remote Registry service should be enabled on the target server.
