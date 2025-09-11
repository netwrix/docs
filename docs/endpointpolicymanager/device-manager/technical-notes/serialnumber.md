---
title: "How to add Devices when serial numbers contain extra characters in the device instance path"
description: "How to add Devices when serial numbers contain extra characters in the device instance path"
sidebar_position: 10
---

# How to add Devices when serial numbers contain extra characters in the device instance path

## Problem

Some USB devices have trailing extra characters such as &000000 in their serial number when viewed
within the Device instance path.

Example

```
SCSI\Disk&Ven__USB&Prod__SanDisk_3.2Gen1\6&1262c329&0&000000
```

When copying these instance paths to create a policy for this device, the serial numbers are not
correctly applied in the MMC console view.

![980_2_image-20230725212441-2](assets/980_2_image-20230725212441-2.webp)

This would not properly target the USB device in question as the serial is configured as **0** in
the policy.

## Workaround

Instead of adding the Device Instance Path **As Serial Number**, use **As Instance Path** instead.

![devicepath](assets/devicepath.webp)

## Result

This will result in a configuration that will use the entire Device Instance Path as a whole,
instead of trying to break out the individual parts and force the targeted USB device to get the
permissions as configured in the policy.

![deviceinstancepath](assets/deviceinstancepath.webp)

The Device Manager policy now works as expected.
