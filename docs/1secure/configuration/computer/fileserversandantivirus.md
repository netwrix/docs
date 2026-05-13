---
title: "File Servers and Antivirus"
description: "File Servers and Antivirus"
sidebar_position: 80
---

# File Servers and Antivirus

## File Servers and Antivirus

Add the following executables to the list of exclusions for your antivirus:

- C:\Windows\SysWOW64\NwxExeSvc\NwxExeSvc.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxEventCollectorAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxFsAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxSaclTunerAgent.exe
- C:\ProgramData\Netwrix Cloud Agent

Otherwise, significant delays and performance issues can occur while collecting data.

This happens because these executables access many file server objects (files,
folders) while fetching audit data, and antivirus software can treat this as suspicious behavior.

For some antivirus products (for example, Trend Micro), specify the folders to exclude, such as
`C:\Windows\SysWOW64\NwxExeSvc\`. Refer to your antivirus documentation for details.
