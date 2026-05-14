---
title: "Update AD Module Installer"
description: "Update AD Module Installer"
sidebar_position: 10
---

# Update AD Module Installer

Netwrix periodically releases updated AD Module installation packages. Typically these updates are
associated with Microsoft KB’s (hotfixes) which alter the LSASS components interfering with AD
Module instrumentation.

:::note 
The **AD Module** is the same component as the **Netwrix Threat Prevention Agent** used in the Netwrix Threat Prevention product.
:::

Current customers can log in to the Netwrix Customer Portal to download software binaries and
license keys for purchased products. See the
[Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
topic for information on how to register for a Customer Portal account. Navigate to the Netwrix
Threat Prevention Download section for the 7.5. Download the Threat Prevention Agent binary.

Then follow the steps to update the AD Module installer used by the Activity Monitor Console.

**Step 1 –** On the Agents tab, select **Update AD Module Installer**. The Select AD Module
installer package (SI Agent.exe) window opens.

![Update AD Module Installer](/images/activitymonitor/9.0/install/updateagentinstaller.webp)

**Step 2 –** Navigate to the location of the latest AD Module / Threat Prevention Agent installation package. Select the
installer and click **Open**.

![Confirmation Window](/images/activitymonitor/9.0/install/updateagentinstallerpopup.webp)

**Step 3 –** A confirmation window opens displaying the version information for the selected
installer. Click **Yes** to update to this version or **No** to cancel the operation. A confirmation
window opens displaying the version information for the selected installer. Click **Yes** to update
to this version or **No** to cancel the operation.

The AD Module installer is update. Use the Install button on the Agents tab to upgrade the deployed
agents that are monitoring Active Directory to the new version.
