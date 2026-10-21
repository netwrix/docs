---
title: "Dell R430 and R440 iDRAC 9 network configuration"
description: "Set the network configuration of the iDRAC 9 on a Dell R430 or R440 server through the System Setup menu after a reboot."
sidebar_position: 40
---

This page applies to the deprecated ISO appliance on Dell hardware. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

This procedure opens the integrated Dell Remote Access Controller (iDRAC) 9 configuration settings from the boot menu (**System Setup**) after a reboot. It starts from a successful Virtual Console session to a single node.

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

2. Wait for the Dell logo and the loading bar. The iDRAC IP address on this screen can differ from your configuration or not appear.

3. After the Dell logo appears twice, the boot menu shows the function key options. Press **F2** to select **System Setup**.

   The console then shows **Entering System Setup**.

## Configure the iDRAC network settings

1. On the **System Setup** page, select **iDRAC Settings**.

2. On the **iDRAC Settings** page, select **Network**.

3. On the **Network** page, set the NIC options. Set **NIC Selection** to **LOM1**, the NIC port that the host operating system shares.

   - **Enable NIC:** **Enabled**
   - **NIC Selection:** **LOM1**

4. Set the IPv4 options:

   - **Enable IPv4:** **Enabled**
   - **Enable DHCP:** **Disabled**
   - **Static IP Address:** A dedicated address for each server.
   - **Static Gateway:** The gateway for each server.
   - **Static Subnet Mask:** The subnet mask for each server.
   - **Static Preferred DNS Server:** The DNS server of your organization.
   - **Static Alternate DNS Server:** A second DNS server of your organization.

5. Select **Back**, select **Finish**, and select **Yes**. The system saves the network settings and reboots.

After the reboot, the iDRAC web interface is available in a supported browser at the IP address that you configured.

## Troubleshoot access to the iDRAC

If you can't reach the iDRAC web interface:

- Ping the iDRAC IP address to check that the network configuration works.
- Check which LAN on Motherboard (LOM) the iDRAC network settings use. The LOM can share the server network cards or use the dedicated iDRAC NICs.

For more information, see Dell's article [How to configure the iDRAC9 and the Lifecycle Controller network IP](https://www.dell.com/support/article/en-us/sln306877/dell-poweredge-how-to-configure-the-idrac9-and-the-lifecycle-controller-network-ip?lang=en).
