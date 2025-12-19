---
title: "Device Manager Helper Tool"
description: "Device Manager Helper Tool"
sidebar_position: 30
---

# Device Manager Helper Tool

The Endpoint Policy Manager Device Manager Help Tool can help you gather details from Devices,
including those which have been plugged into a system, but are not plugged in now. This can be
helpful on a machine where the user takes the device with them, and you still need to create a
policy for them.

The Endpoint Policy Manager Device Manager Help Tool can be found in the download in the Endpoint
Policy Manager Extras folder.

![helper1](/images/endpointpolicymanager/device/devicemanager/helper1.webp)

:::note
The Endpoint Policy Manager Device Manager Helper tool may need local administrative
rights to run and also needs the WinRM service started.
:::


## Generate a Device List

Follow the steps to generate a device list that can be used for creating Device Manager policies.

![helper2](/images/endpointpolicymanager/device/devicemanager/helper2.webp)

**Step 1 –** Open the Endpoint Policy Manager Device Manager Helper.

The Device Manager Export Wizard displays details for each selection: Disk Drives, Portable Devices,
and/or CD-ROMs. Only pages for detected devices are shown.

The Device Manager Helper tool enables you to quickly gather Instance Paths for connected and
non-connected devices.

![helper3](/images/endpointpolicymanager/device/devicemanager/helper3.webp)

**Step 2 –** On the Select Disk Devices window, right-click to automatically copy the detail to the
buffer for later pasting.

![helper4](/images/endpointpolicymanager/device/devicemanager/helper4.webp)

You can also save the list of all devices at the end of the Wizard using the **Save application list
to this XML** option.

Then, you may use this list using the previously described wizard pages such as Allow Device by
Serial Number and Allow Device by BitLocker Key, as shown in the example screen below.

![helper5](/images/endpointpolicymanager/device/devicemanager/helper5.webp)


