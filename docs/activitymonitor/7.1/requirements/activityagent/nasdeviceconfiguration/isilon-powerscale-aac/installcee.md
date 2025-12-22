---
title: "Install Dell CEE"
description: "Install Dell CEE"
sidebar_position: 10
---

# Install Dell CEE

Dell CEE should be installed on a Windows or a Linux server. The Dell CEE software is not a Netwrix
product. Dell customers have a support account with Dell to access the download.

:::tip
Remember, the latest version is the recommended version of Dell CEE.
:::


:::info
The Dell CEE package can be installed on the Windows server where the Activity
Monitor agent will be deployed (recommended) or on any other Windows or Linux server.
:::


Follow the steps to install the Dell CEE.

**Step 1 –** Obtain the latest CEE install package from Dell and any additional license required for
this component. It is recommended to use the most current version.

**Step 2 –** Follow the instructions in the Dell
[Using the Common Event Enabler on Windows Platforms](https://www.dell.com/support/home/en-us/product-support/product/common-event-enabler/docs)
guide to install and configure the CEE. The installation will add two services to the machine:

- EMC Checker Service (Display Name: EMC CAVA)
- EMC CEE Monitor (Display Name: EMC CEE Monitor)

:::info
The latest version of .NET Framework and Dell CEE is recommended to use with the
asynchronous bulk delivery (VCAPS) feature.
:::


After installation, open MS-RPC ports between the Dell device and the Dell CEE server. See the
[Dell CEE Debug Logs](/docs/activitymonitor/7.1/requirements/activityagent/nasdeviceconfiguration/celerra-vnx-aac/validate.md#dell-cee-debug-logs)
section for information on troubleshooting issues related to Dell CEE.

## Configure Dell Registry Key Settings

There may be situations when Dell CEE needs to be installed on a different Windows server than the
one where the Activity Monitor activity agent is deployed. In those cases it is necessary to
manually set the Dell CEE registry key to forward events.

**Step 1 –** Open the Registry Editor (run regedit).

![registryeditor](/images/activitymonitor/7.1/config/dellpowerstore/registryeditor.webp)

**Step 2 –** Navigate to following location:

**HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\CEPP\AUDIT\Configuration**

**Step 3 –** Right-click on **Enabled** and select Modify. The Edit DWORD Value window opens.

**Step 4 –** In the Value data field, enter the value of 1. Click OK, and the Edit DWORD Value
window closes.

**Step 5 –** Right-click on **EndPoint** and select Modify. The Edit String window opens.

**Step 6 –** In the Value data field, enter the StealthAUDIT value with the IP Address for the
Windows proxy server hosting the Activity Monitor activity agent. Use the following format:

**StealthAUDIT@[IP ADDRESS]**

Examples:

**StealthAUDIT@192.168.30.15**

**Step 7 –** Click OK. The Edit String window closes. Registry Editor can be closed.

![services](/images/activitymonitor/7.1/config/dellpowerstore/services.webp)

**Step 8 –** Open Services (run `services.msc`). Start or Restart the EMC CEE Monitor service.

The Dell CEE registry key is now properly configured to forward event to the Activity Monitor
activity agent.
