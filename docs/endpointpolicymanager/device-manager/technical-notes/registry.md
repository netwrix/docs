---
title: "What are the registry settings for Device Manager (and how do I reset Device Manager Admin Approval)?"
description: "What are the registry settings for Device Manager (and how do I reset Device Manager Admin Approval)?"
sidebar_position: 30
---

# What are the registry settings for Device Manager (and how do I reset Device Manager Admin Approval)?

On any endpoint, details about what USB and other devices have temporary or permanent access are
stored here:

HKEY_LOCAL_MACHINE\SOFTWARE\PolicyPak\Client-Side
Extensions\{7FA1BDCB-818A-4EF6-A1B7-EF5F85C2D702}\Admin Approval\ApprovedDevicesStorage

Here is an example of a device which was approved via the Admin Approval tool.

![aa1](assets/aa1.webp)

## To determine the Admin Approval End Time for any device:

**Step 1 –** Grab the **EndTime** and change to **Decimal**.

**Step 2 –** Input the **EndTime** into this Powershell script.

```
$my_time = 1725537001291
(([System.DateTimeOffset]::FromUnixTimeMilliseconds($my_time)).DateTime.ToLocalTime()).ToString("s")
```

An example can be seen here:

![aa2](assets/aa2.webp)

## To Determine the Permissions within the Registry:

Permission bit flags:

- READ 0x80000000
- WRITE 0x40000000
- EXECUTE 0x20000000
- ALL 0x10000000

For example, for READ+WRITE permissions, the value is 0xC0000000.

## Resetting the Device Manager Admin Approval Values

From time to time you may want to reset the values on a machine such that all devices are reset, and
new Admin Approval values may be set in the future. To do this:

**Step 1 –** Download PSExec from
[https://learn.microsoft.com/en-us/sysinternals/downloads/psexec](https://learn.microsoft.com/en-us/sysinternals/downloads/psexec)

**Step 2 –** Run CMD as administator

**Step 3 –** Execute psexec.exe -i -s regedit

**Step 4 –** As SYSTEM open Regedit. Find HKEY_LOCAL_MACHINE\SOFTWARE\PolicyPak\Client-Side
Extensions\{7FA1BDCB-818A-4EF6-A1B7-EF5F85C2D702}\Admin Approval\ApprovedDevicesStorage

**Step 5 –** Delete the whole key **ApprovedDevicesStorage** to reset AA approvals for all devices,
or chose a specific one and delete it.

**Step 6 –** Restart PPExtensionService.exe (aka Netwrix Endpoint Policy Manager (formerly
PolicyPak) Helper Service.)
