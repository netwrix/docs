---
title: "Import Virtual Machine from Image to VMware"
description: "Import Virtual Machine from Image to VMware"
sidebar_position: 40
---

# Import Virtual Machine from Image to VMware

1. Connect to your vSphere infrastructure using vSphere Web client, right-click the object you
   need(datacenter, ESXi host, VM folder or resource pool) and select Deploy OVF Template.

    **NOTE:** If you are running VMware 6.0, connect to vSphere using the on-premises vSphere client
    and select File → Deploy OVF Template.

2. Follow the instructions in the table below:

    | Step                 | Description                                                                                                                                                                                                                               |
    | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Source               | Browse for the folder that contains the Netwrix Data Classification virtual appliance template.                                                                                                                                           |
    | OVF Template Details | Review information on this template.                                                                                                                                                                                                      |
    | Name and Location    | Select a name for the new virtual machine if you do not want to use the default name _"Netwrix Data Classification"_. **NOTE:** The name must be unique within the inventory folder and may contain up to 80 characters including spaces. |
    | Resource Pool        | Select a resource pool to deploy Netwrix Data Classification virtual appliance.                                                                                                                                                           |
    | Storage              | Select destination storage.                                                                                                                                                                                                               |
    | Disk Format          | Netwrix recommends to select the Thin Provision option to save your disk space.                                                                                                                                                           |
    | Network Mapping      | If you have multiple networks on your ESXi Server, select the Destination network for a new virtual machine.                                                                                                                              |
    | Ready to Complete    | Review your virtual machine settings. Click Finish to exit the wizard.                                                                                                                                                                    |

3. Select the newly created virtual machine and click Power On.
