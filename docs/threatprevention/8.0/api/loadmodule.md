---
title: "Load the PowerShell Module"
description: "Load the PowerShell Module"
sidebar_position: 10
---

# Load the PowerShell Module

The following steps are provided to load the Threat Prevention PowerShell module. These steps are
required with each PowerShell session before running the available APIs.

:::note
The command below assumes the Threat Prevention installation directory is in the C drive
on the server where the PowerShell console resides.
:::


**Step 1 –** Run the following command to load the module into PowerShell. The highlighted part of
the command assumes the default installation directory, but a custom path can be used.

Import-Module “C:\Program Files\Netwrix\Netwrix Threat
Prevention\SIEnterpriseManager\SI.SIMonitor.PowerShell.dll”

**Step 2 –** Connect to the Enterprise Manager using the `Connect-SIEnterpriseManager` command. The
following parameters may be used:

:::note
If PowerShell is running on a separate machine to the Enterprise Manager, at least the
address is required.
:::


- Address [String] – Enterprise Manager IP address, default is 127.0.0.1
- Port [String] – Enterprise Manager port, default is 3740
- Reconnect [Bool] – Reset connection and make a new one

Example of `Connect-SIEnterpriseManager` without any parameters (PS and EM are on the same server):

**Connect-SIEnterpriseManager**

Example of `Connect-SIEnterpriseManager` using two of the above parameters:

**Connect-SIEnterpriseManager -A 192.168.189.57 -R 1**

PowerShell is now ready to manage Threat Prevention policies, collections, EPE settings, and
integration settings with Netwrix Threat Manager.
