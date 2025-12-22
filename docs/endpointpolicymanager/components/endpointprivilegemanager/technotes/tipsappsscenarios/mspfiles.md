---
title: "How do I elevate .MSP files such as Adobe Acrobat updates?"
description: "How do I elevate .MSP files such as Adobe Acrobat updates?"
sidebar_position: 90
---

# How do I elevate .MSP files such as Adobe Acrobat updates?

This article explains how to elevate .MSP installation files in general. We will use Adobe update
files as a reference.

Installation files with .msp file extension for Adobe updates are being executed via msiexec.exe
process.

```
Process is being created (2023/11/27, 12:12:23.586, PID: 6540, TID: 10096)
{
  Serial #: 9668
  Process ID: 11760
  Parent Process ID: 11560
  Internal Image File Name: \??\C:\windows\System32\msiexec.exe
  Command Line: "C:\windows\System32\msiexec.exe" /p "C:\Users\Your_User\Downloads\AcrobatDCx64Upd2300620320(1).msp"
  User SID: S-1-5-21-********-********-*********
  User Session: 4
  Integrity: Medium
  Process Type: User
  Image File Name: C:\Windows\System32\msiexec.exe
}

```

As an example, this is how executable rules should look like. You should have **Path Condition** and
**Command-Line Condition** arguments selected:

![1313_1_0f8b910ebf561185bd3320c186e39922_950x494](/images/endpointpolicymanager/leastprivilege/elevate/1313_1_0f8b910ebf561185bd3320c186e39922_950x494.webp)

To achieve this result, please create a combo executable LPM rule for msiexec.exe executable:

```
PATH: %SYSTEMROOT%\System32\msiexec.exe
```

![993_2_image-20231214011321-2_950x298](/images/endpointpolicymanager/leastprivilege/elevate/993_2_image-20231214011321-2_950x298.webp)

Then, go to **Command-Line Condition** and make the following configuration:

```
Arguments: /p "%UserProfile%\Downloads\AcrobatDCx64*.msp"
```

Use **Strict equality** check mode.

![993_3_image-20231214011321-3_950x499](/images/endpointpolicymanager/leastprivilege/elevate/993_3_image-20231214011321-3_950x499.webp)

For other Adobe packages (or any other software vendors) you must adjust the path to your .MSP file
within your **Arguments** field. MSIEXEC.EXE should be elevated at all times while you are elevating
.MSP file installation.


