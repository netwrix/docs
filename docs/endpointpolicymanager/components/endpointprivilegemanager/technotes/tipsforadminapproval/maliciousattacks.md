---
title: "How to Defend against malicious PowerShell attacks (DLLs)?"
description: "How to Defend against malicious PowerShell attacks (DLLs)?"
sidebar_position: 50
---

# How to Defend against malicious PowerShell attacks (DLLs)?

Even after blocking the PowerShell executables there are still ways in which bad actors can use DLLs
to launch a PowerShell console windows without using any of the PowerShell executables.

The example below shows one possible way of using a DLL to bypass PowerShell Executable block rules,
to open a console window where a user can execute PowerShell commands.

For this example we will be using:PowerShdll.

DLLPowerShdll is a custom PowerShell-like interpreter in form of a DLL. It can be run with
rundll32.exe, installutil.exe, regsvcs.exe, regasm.exe, regsvr32.exe, or as a standalone executable.

Without a Least Privilege Manager DLL Rule in place to block this file, it can be executed even when
all PowerShell executables are blocked.

Below we have enabled the Default Block PowerShell collection from the PolicyPak Support Guidance
download.

![765_1_image-20211223014445-1](/images/endpointpolicymanager/leastprivilege/powershell/765_1_image-20211223014445-1.webp)

But as you can see in the screenshot below, this alone does not stop the DLL from running, and the
console window still opens, and is ready for PowerShell commands.

![765_2_image-20211223014445-2](/images/endpointpolicymanager/leastprivilege/powershell/765_2_image-20211223014445-2.webp)

These are the steps to block DLL processing:

With a Least Privilege Manager DLL block rule in place, this additional vector for executing
PowerShell commands is now blocked.

:::note
These 2 policies below must be configured on the computer-side of the Group Policy
configuration.
:::


Global DLL policy: Enabling the DLL processing.

DLL policy: To block the execution of a DLL

![765_3_image-20211223014445-3](/images/endpointpolicymanager/leastprivilege/powershell/765_3_image-20211223014445-3.webp)

Now when a user tries to launch PowerShdll.DLL using Rundll32.exe, it will be blocked and they
should see the following block messages:

Windows:

![765_4_image-20211223014445-4](/images/endpointpolicymanager/leastprivilege/powershell/765_4_image-20211223014445-4.webp)

Netwrix Endpoint Policy Manager (formerly PolicyPak) message:

![765_5_image-20211223014445-5](/images/endpointpolicymanager/leastprivilege/powershell/765_5_image-20211223014445-5.webp)


