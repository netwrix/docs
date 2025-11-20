---
title: "Mount / Unmount for USB and .DMG Files"
description: "Mount / Unmount for USB and .DMG Files"
sidebar_position: 60
---

# Mount / Unmount for USB and .DMG Files

:::note
See the
[Endpoint Privilege Manager for Mac: Mount / Unmount Part I](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/macintegration/mountunmountpart1.md)
video and the
[Endpoint Privilege Manager for Mac: Mount / Unmount Part II](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/macintegration/mountunmounpart2.md)
video for an overview of this section.
:::


You might want to manage when USB devices and/or .DMG disk files can be mounted (or unmounted).

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/mount_unmount_for_usb_and.webp)

You can perform the following functions:

Operations:

- Mount — Operations for mounting USB devices and dmg files
- Unmount — Operations for unmounting/ejecting USB devices and dmg disk images
- Apply to any device — Automatically apply to all USB disk devices and DMG files

Device Types:

- USB — USB disk devices are supported
- DMG — DMG files are supported as mounted devices

Action:

- Deny Execution — Block the specified device type
- Allow Execution —Allow attachment of specified device type
- Elevate — Lets users perform operations with elevated privileges without entering an admin
  password

Targets:

- Path — Path to DMG file to mount it
- Sources — Mount point defined by the system by USB device name or DMG file name

For a simple demo, let's Block All USB and DMG devices.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/mount_unmount_for_usb_and_1.webp)

The result of trying to attach a new device by USB can be seen here, as Endpoint Policy Manager has
blocked it.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/mount_unmount_for_usb_and_2.webp)



