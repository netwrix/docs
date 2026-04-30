---
title: "Import Virtual Machine from Image to VMware"
description: "Import Virtual Machine from Image to VMware"
sidebar_position: 10
---

# Import Virtual Machine from Image to VMware

Perform the following steps to import a virtual machine:

**Step 1 –** Connect to your vSphere infrastructure using vSphere Web client, right-click the object
you need (datacenter, ESXi host, VM folder or resource pool) and select Deploy OVF Template.

**Step 2 –** If you are running VMware 6.0, connect to vSphere using the on-premises vSphere client
and select File → Deploy OVF Template.

Follow the instructions in the table below:

| Step                 | Description                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source               | Browse for the folder that contains the Auditor virtual appliance template.                                                                                                                          |
| OVF Template Details | Review information on this template.                                                                                                                                                                 |
| Name and Location    | Select a name for the new virtual machine (optional; default name is _"Netwrix Auditor"_). The name must be unique within the Inventory folder; it may contain up to 80 characters including spaces. |
| Resource Pool        | Select a resource pool to deploy the virtual appliance.                                                                                                                                              |
| Storage              | Select the destination storage.                                                                                                                                                                      |
| Disk Format          | To optimize the disk space, it is recommended to select Thin Provision.                                                                                                                              |
| Network Mapping      | If you have multiple networks on your ESXi Server, select the Destination network for a new virtual machine.                                                                                         |
| Ready to Complete    | Review your virtual machine settings. Click Finish to complete the wizard.                                                                                                                           |

Select the newly created virtual machine and click Power On.

## Deploy Virtual Appliance to VMware Cloud on AWS

Perform the following steps to deploy virtual appliance:

**Step 3 –** Import the NetwrixAuditor.ova file to a Content Library of VMware vSphere, as described
in this VMware article:
[Import Items to a Content Library](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-897EEEC2-B378-41A7-B92B-D1159B5F6095.html).

**Step 4 –** Start the New Virtual Machine… wizard.

**Step 5 –** On the Select a creation type step, select Deploy from template.

**Step 6 –** On the Select a template step, select NetwrixAuditor from your ContentLibrary.

**Step 7 –** Proceed with the wizard: select name and folder, resources and storage for the VM.
