---
title: "Uninstall Proxy Service Process"
description: "Uninstall Proxy Service Process"
sidebar_position: 50
---

# Uninstall Proxy Service Process

The process to properly uninstall the File System Proxy Service is completed through the
uninstalling of the Access Analyzer File System Scanning Proxy program.

**Step 1 –** Open Control Panel and select **Programs** > **Uninstall a program**.

![Programs and Features](/images/accessanalyzer/12.0/install/filesystemproxy/uninstall.webp)

**Step 2 –** Select Netwrix Access Analyzer (formerly Enterprise Auditor) File System Scanning Proxy
and click **Uninstall**.

:::note
If the installation was configured to use the LocalSystem account to run the RPC service
the two SPN values are removed for that machine in Active Directory. If the service is running with
a supplied account, the SPN values would need to be manually removed for that machine in Active
Directory (unless the uninstall was completed as part of the
[Upgrade Proxy Service Procedure](/docs/accessanalyzer/12.0/install/filesystemproxy/upgrade.md)).
:::


When the uninstall process is complete, this program is removed from the list.
