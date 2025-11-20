---
title: "SYSPREP Error with Endpoint Policy Manager Client-Side Extension"
description: "SYSPREP Error with Endpoint Policy Manager Client-Side Extension"
sidebar_position: 200
---

# SYSPREP Error with Endpoint Policy Manager Client-Side Extension

When updating the gold .wim file used for OS imaging, you may encounter the following error when
attempting to SYSPREP a system with the Endpoint Policy Manager CSE 24.2.3799 or later installed.

Problem:

The SYSPREP output may display an error similar to the following: Expected image state is
IMAGE_STATE_GENERALIZE_RESEAL_TO_OOBE. Actual image state is IMAGE_STATE_Complete.

In setupcat.log you’ll find the following error:

[Copy](<javascript:void(0);>)

setupcat.log error

```
Info SYSPRP Entering SysprepGeneralizeValidate (Appx) - validating whether all apps are also provisioned.
Error SYSPRP Package PPLPMSparsePackage_1.0.0.0_neutral__gd0ndz5rvp7t0 was installed for a user, but not
provisioned for all users. This package will not function properly in the sysprep image.
Error SYSPRP Failed to remove apps for the current user: 0x80073cf2.
Error SYSPRP Exit code of RemoveAllApps thread was 0x3cf2. 

```

Cause:

PPLPMSparsePackage_1.0.0.0_neutral\_\_gd0ndz5rvp7t0 is a UWP appx package recently added to support
the Windows 11 context menu. However, it cannot be provisioned due to SYSPREP demands. If this
package is absent, the Windows 11 modern menu will not contain Endpoint Policy Manager commands.
However, the classic context menu works as expected.

Resolution:

To fix the error please remove the LPM appx package prior to SYSPREP with the following PowerShell
command:

[Copy](<javascript:void(0);>)

Remove LPM appx package

```
Get-appxpackage *pplpm* | remove-appxpackage
```

At the first logon, Windows 11 will not have Endpoint Policy Manager menus, but they should appear
at the second login.

See the Microsoft article
[Sysprep fails remove or update store apps](https://learn.microsoft.com/en-us/troubleshoot/windows-client/installing-updates-features-roles/sysprep-fails-remove-or-update-store-apps)
for more information.

