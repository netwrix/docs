---
title: "Install the EPP Client on macOS with DPI and VPN"
description: "Install the Endpoint Protector Client on macOS when Deep Packet Inspection and VPN Traffic Intercept are active."
sidebar_position: 20
---

# Install the EPP Client on macOS with DPI and VPN

To install on macOS with Deep Packet Inspection and VPN Traffic Intercept active, complete the following steps:

**Step 1 –** Open the Endpoint Protector Server.

**Step 2 –** Go to the **System configuration** section, select **Client Software** and then download
the macOS EPP Client.

**Step 3 –** Decompress the downloaded file.

![Installation on macOS with Deep Packet Inspection and VPN Traffic Intercept Active](../../admin/systemconfiguration/ClientSoftwarePage.webp)

**Step 4 –** Open the **.pkg** file, follow the installation steps, and grant the requested
permissions.

**Step 5 –** After the installation is complete, go to **System Preferences** > **Security &
Privacy** > **Privacy tab** > **Full Disk Access**. Search for Endpoint Protector Client, select the
checkbox, and then **save** the changes.

![Grant permission to the Endpoint Protector Client](eppagentpermisions.webp)

**Step 6 –** Open the Endpoint Protector Server and activate Deep Packet Inspection by navigating to
**Device Control** > **Users/Computer/Group/Global Settings** > **Manage Settings** > **Endpoint
Protector Client** > **Deep Packet Inspection**.

![Activating Deep Packet Inspection](../../admin/systemconfiguration/dpion.webp)

:::note
To learn about Deep Packet Inspection and its configurable options, see the [documentation section for DPI](/docs/endpointprotector/configuration/cap_module/deeppacket.md).
:::

**Step 7 –** Go to the **System Configuration** section, then **System Settings** > **Deep Packet
Inspection Certificate**, and download the **CA Certificate**.

![Download the Client CA Certificates](../../admin/dpicertificate.webp)

**Step 8 –** Open the **Keychain Access** application from your macOS and select **System**.

![Open the Keychain Access application from your macOS and select System](../../admin/keychainaccess.webp)

**Step 9 –** Decompress the downloaded **ClientCerts** file.

**Step 10 –** Select **cacert.pem** file and drag and drop it on **System > Keychain Access**.

![Select cacert.pem file and drag and drop it on Keychain Access, System](../../admin/clientcerts.webp)

**Step 11 –** Double-click the **X** on the newly added certificate and on the Trust section, select
**Always Trust**.

![On the newly added certificate and on the Trust section, select Always Trust.](../../admin/keychainaccesstwo.webp)

**Step 12 –** **Save** the changes.

**Step 13 –** Activate **Intercept VPN Traffic**.

**Step 14 –** Select one option for **EPP behavior when network extension is disabled**.

- Temporarily Disable Deep Packet Inspection – this option temporarily disables Deep Packet
  Inspection
- Block Internet Access – this option ends the Internet connection until the end user approves
  the Endpoint Protector Proxy Configuration after restarting the computer.

![Activate Intercept VPN Traffic](../../admin/systemconfiguration/interceptvpntraffic.webp)

**Step 15 –** **Save** the changes.

**Step 16 –** The following pop-up displays, informing the end user that macOS blocked a System
Extension and that the user must allow it.

![System Extension is blocked and needs to be allowed](../../admin/systemextensionblocked.webp)

**Step 17 –** Go to **System Preferences** > **Security and Privacy** > select the **General tab**
and **allow** the Endpoint Protector Client Extension.

![select the General tab and allow the Endpoint Protector Client Extension](../../admin/generaltabios.webp)

**Step 18 –** **Allow** the Endpoint Protector Proxy Configuration from the pop-up window.

![proxypop-up](../../admin/proxypop-up.webp)

The macOS Endpoint Protector Client installation is now complete.

:::note
If EPPNotifier isn't visible or notifications don't display after you install or
upgrade the Endpoint Protector Client on macOS, restart your machine. If you install and then uninstall the Endpoint Protector Client on
macOS, you may still see EPPNotifier in the Notification settings. To remove it from the list,
right-click and select "Reset notifications."
:::
