---
title: "File Servers and Antivirus"
description: "File Servers and Antivirus"
sidebar_position: 80
---

# File Servers and Antivirus

## File Servers and Antivirus

It is strongly recommended that you add the following executables to the list of exclusions for your
antivirus:

- C:\Windows\SysWOW64\NwxExeSvc\NwxExeSvc.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxEventCollectorAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxFsAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxSaclTunerAgent.exe
- C:\ProgramData\Netwrix Cloud Agent

Otherwise, significant delays and performance issues may occur while collecting data.

This happens because these executables access a large number of file server objects (files,
folders), fetching audit data — and your antivirus may treat this as a suspicious behavior.

For some antiviruses (for example, Trend Micro) you may need to specify the folders to exclude, that
is, `C:\Windows\SysWOW64\NwxExeSvc\`. Refer to your antivirus documentation for details.
