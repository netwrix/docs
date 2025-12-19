---
title: "Deploy to VMware Infrastructure"
description: "Deploy to VMware Infrastructure"
sidebar_position: 20
---

# Deploy to VMware Infrastructure

Follow the steps below to deploy the virtual machine to VMware infrastructure.

**Step 1 –** Copy the filePrivilege Secure**.ova** on the computer where your VSphere Client is
installed.

**Step 2 –** Connect to your vSphere infrastructure using vSphere Web Client, right-click the object
you need (datacenter, ESXi host, VM folder or resource pool) and select **Deploy OVF Template**.

**Step 3 –** Follow the instructions in the table below:

| Step                 | Description                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source               | Browse for the folder that contains the Netwrix Privilege Secure virtual appliance template.                                                                                                                                                          |
| OVF Template Details | Review template details.                                                                                                                                                                                                                              |
| Name and Location    | If necessary, specify a name for the new virtual machine; default is "Privilege Secure". Consider the following: <ul><li>The name must be unique within the inventory folder.</li><li>It may contain up to 80 characters, including spaces.</li></ul> |
| Resource Pool        | Select a resource pool to deploy the Netwrix Privilege Secure virtual appliance.                                                                                                                                                                      |
| Storage              | Select a destination storage.                                                                                                                                                                                                                         |
| Disk Format          | It is recommended to select **Thin Provision** — to save the disk space.                                                                                                                                                                              |
| Network Mapping      | If you have multiple networks on your ESXi Server, select the **Destination** network for a new virtual machine.                                                                                                                                      |
| Ready to Complete    | Review your virtual machine settings. Click **Finish** to exit the wizard.                                                                                                                                                                            |


**Step 4 –** Select the newly created virtual machine and click **Power On**.
