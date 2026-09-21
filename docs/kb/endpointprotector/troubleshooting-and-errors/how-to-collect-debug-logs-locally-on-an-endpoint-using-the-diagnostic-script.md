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
  - DPI
  - Debug Logging
  - Tamper Mode
  - epp_collect_dpi_info
sidebar_label: Collecting Debug Logs via Diagnostic Script
tags:
  - troubleshooting-and-errors
  - kb
title: "Collecting Debug Logs Locally on an Endpoint Using the Diagnostic Script"
knowledge_article_id: kA0Qk0000000000AAA
products:
  - endpointprotector
---

# Collecting Debug Logs Locally on an Endpoint Using the Diagnostic Script

## Overview

This article explains how to collect debug logs directly on an Endpoint Protector (EPP) endpoint
using the diagnostic collection script, for cases when the EPP Client cannot communicate with the
EPP Server. Since the **Automatic Logging** method depends on that communication, it is not
available in this scenario. Running the script directly on the endpoint instead captures a
complete diagnostic package in a single run. For the full Debug Logging reference, see
[Debug Logging](/docs/endpointprotector/admin/dc_module/globalsettings#debug-logging) in the
Global Settings documentation.

> **NOTE:**
> This script-based method captures a more complete diagnostic package (installed app listing,
> console logs, and more) than the older manual log-file methods. If it does not apply to your EPP
> Client version, fall back to [Manually Activating Debugging Logs on Windows](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_manually_activate_debugging_logs_on_windows)
> or [Manually Generating Logs for Mac Endpoint Protector Agents via Terminal](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_manually_generate_logs_for_mac_endpoint_protector_agents_via_terminal).

## Instructions

### Windows

1. Run the following script from PowerShell or Command Prompt as an administrator:

   `"C:\Program Files\CoSoSys\Endpoint Protector\Resources\epp_collect_dpi_info.bat"`

2. Wait for the script to finish. Some steps, such as listing installed apps and collecting console
   logs, can take a few minutes. Do not interrupt the script.
3. Collect the generated files from the output folder the script prints at the end of the run. By
   default, this is `%TEMP%\epp_logs`.

### macOS

> **NOTE:**
> If Tamper Mode is enabled, the script cannot launch on macOS. Disable Tamper Mode before running
> the script. Tamper Mode does not affect the Windows script.

1. Run the following command as root:

   `sudo /Applications/EndpointProtectorClient.app/Contents/Resources/epp_collect_dpi_info_mac.sh`

2. Enter the password when prompted. The script must run as root.
3. Wait for the script to finish. Some steps, such as listing installed apps and collecting console
   logs, can take a few minutes. Do not interrupt the script.
4. Collect the generated files from the output folder the script prints. By default, this is
   `/tmp/epp_logs`.

### Advanced Options

Both scripts accept optional parameters to also collect Deep Packet Inspection (DPI) diagnostics
(network, proxy, and certificate information) and to change the output folder. Include the DPI
option when troubleshooting issues with the DPI network-monitoring module itself; for all other
issues, the default collection is sufficient. Each script also deletes the destination folder if it
already exists and recreates it, then prints the final path where it saves the collected files.

**Windows:**

`epp_collect_dpi_info.bat -dpi --output="C:\epp_logs"`

- `-dpi` (or `/dpi`, `--dpi`) — also collects DPI information (network, WFP, proxy). Without this
  flag, the script only collects basic logs and configuration.
- `--output="C:\path"` (or `-output`, `/output`) — sets the destination folder. Defaults to
  `%TEMP%\epp_logs`.

**macOS:**

`sudo /Applications/EndpointProtectorClient.app/Contents/Resources/epp_collect_dpi_info_mac.sh 1 /tmp/epp_logs`

- First parameter — `1` also collects DPI information (network, proxy, certificates); `0` skips it.
- Second parameter (optional) — sets the destination folder. Defaults to `/tmp/epp_logs`.

> **IMPORTANT:**
> Share the collected files with [Netwrix Technical Support](https://netwrix.com/en/support/) for
> further investigation.
