---
title: "How can I increase the depth of what Endpoint Policy Manager reports (minidump files)."
description: "How can I increase the depth of what Endpoint Policy Manager reports (minidump files)."
sidebar_position: 130
---

# How can I increase the depth of what Endpoint Policy Manager reports (minidump files).

You can use the Group Policy Preferences or Netwrix Endpoint Policy Manager (formerly PolicyPak) to
set the following value

`[HKEY_LOCAL_MACHINESYSTEMCurrentControlSetControlCrashControl] "CrashDumpEnabled"=dword:00000003`

Which sets the value as seen below highlighted in Red.

But note that this change only takes affect after the computer is rebooted.

The mindump file is automatically created by CSE 750 and later if any of our components should
encounter a crash.Having the minidump file turned on automatically is a pretty good idea anyway.

![473_1_image007](/images/endpointpolicymanager/troubleshooting/log/473_1_image007.webp)

