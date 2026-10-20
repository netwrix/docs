---
title: "Uninstall Proxy Service Process"
description: "Uninstall Proxy Service Process"
sidebar_position: 50
---

# Uninstall Proxy Service Process

To properly uninstall the File System Proxy Service, uninstall the Enterprise Auditor File System
Scanning Proxy program.

**Step 1 –** Open Control Panel and select **Programs** > **Uninstall a program**.

![Programs and Features](/images/accessanalyzer/11.6/install/filesystemproxy/uninstall.webp)

**Step 2 –** Select Netwrix Enterprise Auditor File System Scanning Proxy and click **Uninstall**.

:::note
If the installation was configured to use the LocalSystem account to run the RPC service, the
uninstall process removes the two SPN values for that machine in Active Directory. If the service is
running with a supplied account, you must manually remove the SPN values for that machine in Active
Directory (unless you completed the uninstall as part of the
[Upgrade Proxy Service Procedure](/docs/accessanalyzer/11.6/install/filesystemproxy/upgrade.md)).
:::


When the uninstall process completes, the program no longer appears in the list.
