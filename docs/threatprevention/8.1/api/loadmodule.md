---
title: "Load the PowerShell Module"
description: "Load the PowerShell Module"
sidebar_position: 10
---

# Load the PowerShell Module

Use the following steps to load the Threat Prevention PowerShell module. You must complete these
steps in each PowerShell session before running the available APIs.

:::note
The following command assumes the Threat Prevention installation directory is in the C drive
on the server where the PowerShell console resides.
:::


**Step 1 –** Run the following command to load the module into PowerShell. The highlighted part of
the command assumes the default installation directory, but you can use a custom path.

Import-Module “C:\Program Files\Netwrix\Netwrix Threat
Prevention\SIEnterpriseManager\SI.SIMonitor.PowerShell.dll”

**Step 2 –** Connect to the Enterprise Manager using the `Connect-SIEnterpriseManager` command. The
following parameters are available:

:::note
If PowerShell runs on a separate machine from the Enterprise Manager, you must supply at
least the address.
:::


- Address [String] – Enterprise Manager IP address, default is 127.0.0.1
- Port [String] – Enterprise Manager port, default is 3740
- Reconnect [Bool] – Reset connection and make a new one

Example of `Connect-SIEnterpriseManager` without any parameters (PS and EM are on the same server):

**Connect-SIEnterpriseManager**

Example of `Connect-SIEnterpriseManager` using two of these parameters:

**Connect-SIEnterpriseManager -A 192.168.189.57 -R 1**

PowerShell is now ready to manage Threat Prevention policies, collections, EPE settings, and
integration settings with Netwrix Threat Manager.
