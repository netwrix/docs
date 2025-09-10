---
title: "Launching on Google Cloud Platform"
description: "Launching on Google Cloud Platform"
sidebar_position: 10
---

# Launching on Google Cloud Platform

Once the Endpoint Protector Image becomes accessible in the Google Cloud Platform images list,
proceed to create a new Virtual Machine Instance:

**Step 1 –** In the Google Cloud Platform Console, go to the VM Instances page and click Create
instance.

![Creating Virtual Machine instance.](createinstance.webp)

**Step 2 –** In the Boot disk section, click Change to begin configuring your boot disk and on the
Custom Images tab, fill in the following:

- Image - select the image you imported
- Boot disk type - select Standard persistent disk
- Size – add a size larger than the Endpoint Protector image size received
- Click Select to confirm the boot disk configuration.

![Boot disk Configuration](bootdisk.webp)

**Step 3 –** On the Firewall section, select Allow HTTP traffic and Allow HTTPS traffic, and then
click Create.

![Firewall configuration](firewall.webp)

## Requesting a Static IP

You will need to request a static IP so the Endpoint Protector Clients can communicate with the same
IP Address in case of an instance restart.

Without a Static IP (Elastic IP) the instance will assign a new IP address every time it is
restarted and the Endpoint Protector Clients have to be reinstalled.

To request a Static IP, go to IP addresses and select the External IP addresses tab.

![Requesting a static IP](externalip.webp)

## Create Firewall Rules

To create a Firewall rule, on the Google Cloud Platform Console, follow these steps:

**Step 4 –** Go to the Firewall page and select default-allow-ssh;

![Creating firewall rules](firewallrules.webp)

**Step 5 –** Click Edit and on the Protocols and ports section provide the following information:

- select Specified protocols and ports
- check the tcp box and enter 64848

![Editing firewall rules](editrules.webp)
