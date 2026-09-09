---
description: >-
  This article explains how to run the Endpoint Protector diagnostic collection script directly on
  a Windows or macOS endpoint to gather debug logs when the EPP Client cannot communicate with the
  EPP Server.
keywords:
  - Endpoint Protector
  - debug logs
  - diagnostic script
  - EPP Client
  - troubleshooting
  - Windows
  - macOS
sidebar_label: Collect Debug Logs via Diagnostic Script
tags:
  - troubleshooting-and-errors
  - kb
title: "How to Collect Debug Logs Locally on an Endpoint Using the Diagnostic Script"
knowledge_article_id: kA0Qk0000000000AAA
products:
  - endpointprotector
---

# How to Collect Debug Logs Locally on an Endpoint Using the Diagnostic Script

## Overview

If the Endpoint Protector (EPP) Client cannot communicate with the EPP Server, the **Automatic
Logging** method isn't available, since it depends on that communication to enable debug logging
and retrieve diagnostics remotely. Run the diagnostic collection script directly on the endpoint
instead — it captures a complete diagnostic package in a single run. For the full Debug Logging
reference, see [Debug Logging](/docs/endpointprotector/admin/dc_module/globalsettings#debug-logging)
in the Global Settings documentation.

:::tip
This script-based method captures a more complete diagnostic package (installed app listing,
console logs, and more) than the older manual log-file methods. If it doesn't apply to your EPP
Client version, fall back to [How to Manually Activate Debugging Logs on Windows](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_manually_activate_debugging_logs_on_windows)
or [How to Manually Generate Logs for Mac Endpoint Protector Agents via Terminal](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_manually_generate_logs_for_mac_endpoint_protector_agents_via_terminal).
:::

## Instructions

### Windows

1. Run the following script from PowerShell or Command Prompt:

   `"C:\Program Files\CoSoSys\Endpoint Protector\Resources\epp_collect_dpi_info.bat"`

2. Wait for the script to finish. Some steps, such as listing installed apps and collecting console
   logs, can take a few minutes. Do not interrupt the script.
3. Collect the generated files from the output folder the script prints at the end of the run, for
   example `C:\Users\<username>\AppData\Local\Temp\epp_logs`.

:::note
If Tamper Mode is enabled, the script only works on Windows.
:::

### macOS

1. Run the following command as root:
   - With Deep Packet Inspection (DPI) on: `sudo /Applications/EndpointProtectorClient.app/Contents/Resources/epp_collect_dpi_info_mac.sh 1`
   - With DPI off: `sudo /Applications/EndpointProtectorClient.app/Contents/Resources/epp_collect_dpi_info_mac.sh`
2. Enter the password when prompted. The script must run as root.
3. Wait for the script to finish. Some steps, such as listing installed apps and collecting console
   logs, can take a few minutes. Do not interrupt the script.
4. Collect the generated files from the output folder the script prints, `/tmp/epp_logs`.

Share the collected files with Netwrix Technical Support for further investigation.
