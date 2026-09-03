---
title: "Upgrade Proxy Service Procedure"
description: "Upgrade Proxy Service Procedure"
sidebar_position: 40
---

# Upgrade Proxy Service Procedure

When you upgrade the Enterprise Auditor Console and File System Solution, also
upgrade the File System Proxy Service when running Enterprise Auditor in Proxy Mode as a Service.
This upgrade can be done in two ways:

- Automatically – An instant job within the Enterprise Auditor Console
- Manually – On each server hosting the proxy service

:::warning
When upgrading the Proxy Service to 11.6 from a previous version for the first time,
you must manually uninstall the previous version and follow the [Manual Upgrade](#manual-upgrade)
steps. You can use the automatic upgrade option for subsequent 11.6 upgrades.
:::


## Automatic Upgrade

The **FS_UpdateProxy** Job is available through the Instant Job Wizard. This job updates the File
System Proxy Service on all servers in the assigned host list. To instantiate this
job:

**Step 1 –** Within the **Jobs** tree, right-click and select **Add Instant Job**. The Instant Job
Wizard window opens.

**Step 2 –** On the Welcome page, click **Next**.

![FS_UpdateProxy Job in the Instant Job Wizard](/images/accessanalyzer/11.6/install/filesystemproxy/updateproxyinstantjob.webp)

**Step 3 –** On the Instant Job page, locate the **Library Name: File System** category group.
Expand the category and select the **FS_UpgradeProxy** Job. Click **Next**.

**Step 4 –** On the Host Assignment page, select the **Specify individual hosts or host lists**
option and click **Next**.

**Step 5 –** On the Host Lists page, assign the host lists containing the proxy servers to update.
You can add multiple host lists. Click Next.

**Step 6 –** On the Individual Hosts page, click **Next**.

**Step 7 –** Review the Summary and click either **Save & Exit** or **Save & Run Jobs Now**.

The proxy doesn't update until you run the job. After the job runs successfully, the servers in the
assigned host lists are updated.

## Manual Upgrade

Follow the steps on the servers hosting the File System Proxy Service.

![Programs and Features](/images/accessanalyzer/11.6/install/filesystemproxy/uninstall.webp)

**Step 1 –** Navigate to Programs and Features (**Control Panel** > **Programs** > **Programs and
Features**). Uninstall the previous version of Enterprise Auditor File System Scanning Proxy.

**Step 2 –** Install the new version of the File System Proxy Service. See the
[File System Proxy Service Installation](/docs/accessanalyzer/11.6/install/filesystemproxy/wizard.md)
topic for instructions.

The File System Solution can now use the proxy architecture for the latest version of the solution.
