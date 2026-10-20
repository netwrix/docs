---
title: "Dell R430 and R440 iDRAC 9 network configuration"
description: "Set the network configuration of the iDRAC 9 on a Dell R430 or R440 server through the System Setup menu after a reboot."
sidebar_position: 40
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: Redact or replace the 11 hardware screenshots on this page. They show a MAC address, a service tag, IP addresses, and a server name. Evidence: /images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid0.webp through 360056509814_blobid11_336x252.webp (blobid2, blobid5, blobid7, blobid8, and blobid9 are listed as Legacy ISO items in img-items.json).
:::

This page applies to ISO-based installations on Dell hardware. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

This procedure opens the iDRAC 9 configuration settings from the boot menu (**System Setup**) after a reboot. It starts from a successful Virtual Console session to a single node.

## Prerequisites

- A Virtual Console session to the node.
- The static IP address, gateway, subnet mask, and DNS servers for the iDRAC.

## Record the state of the node

The Virtual Console doesn't support copy and paste, so enter the commands manually and take screenshots of the results.

1. Check the status of the swarm nodes:

   ```bash
   s1 nodes
   ```

2. Check the replica status of the services. In a production environment, all services show `1/1` replicas and a **Desired State** of `Running`.

   ```bash
   s1 status
   ```

3. List the Privilege Secure for Discovery containers that run on the node:

   ```bash
   sudo docker ps
   ```

## Open the System Setup menu

To avoid an interruption of the product, reboot one node at a time.

1. Reboot the node:

   ```bash
   sudo reboot
   ```

   After the command runs, the console shows either the stopped processes and then a **No Signal** screen, or only the **No Signal** screen, before the Dell logo appears.

   ![Console with the No Signal message during the reboot](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid0.webp)

   ![Console showing the stopped processes during the shutdown](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid1.webp)

2. Wait for the Dell logo and the loading bar. The iDRAC IP address on this screen can differ from your configuration or not appear.

   ![Dell logo screen with a loading bar during startup](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid2.webp)

3. After the Dell logo appears twice, the boot menu shows the function key options. Press **F2** to select **System Setup**.

   ![Boot menu with the F2 System Setup option](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid4.webp)

   The console then shows **Entering System Setup**.

   ![Console showing the Entering System Setup message](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid5.webp)

## Configure the iDRAC network settings

1. On the **System Setup** page, select **iDRAC Settings**.

   ![System Setup page with the iDRAC Settings option](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_mceclip0.webp)

2. On the **iDRAC Settings** page, select **Network**.

   ![iDRAC Settings page with the Network option](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid7.webp)

3. On the **Network** page, set the NIC options. Set **NIC Selection** to **LOM1**, the NIC port that the host operating system shares.

   - **Enable NIC:** **Enabled**
   - **NIC Selection:** **LOM1**

   ![Network page with Enable NIC set to Enabled and NIC Selection set to LOM1](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid8.webp)

4. Set the IPv4 options:

   - **Enable IPv4:** **Enabled**
   - **Enable DHCP:** **Disabled**
   - **Static IP Address:** A dedicated address for each server.
   - **Static Gateway:** The gateway for each server.
   - **Static Subnet Mask:** The subnet mask for each server.
   - **Static Preferred DNS Server:** The DNS server of your organization.
   - **Static Alternate DNS Server:** A second DNS server of your organization.

   ![Network page with the IPv4 settings and static address fields](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid9.webp)

5. Select **Back**, select **Finish**, and select **Yes**. The system saves the network settings and reboots.

   ![Prompt to confirm saving the network settings](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid10_336x254.webp)

   ![Confirmation that the settings were saved](/images/privilegesecure/4.2/discovery/admin/maintenance/360056509814_blobid11_336x252.webp)

After the reboot, the iDRAC web interface is available in a supported browser at the IP address that you configured.

## Troubleshoot access to the iDRAC

If you can't reach the iDRAC web interface:

- Ping the iDRAC IP address to check that the network configuration works.
- Check which LAN on Motherboard (LOM) the iDRAC network settings use. The LOM can be shared with the server network cards or use the dedicated iDRAC NICs.

For more information, see Dell's article [How to configure the iDRAC9 and the Lifecycle Controller network IP](https://www.dell.com/support/article/en-us/sln306877/dell-poweredge-how-to-configure-the-idrac9-and-the-lifecycle-controller-network-ip?lang=en).
