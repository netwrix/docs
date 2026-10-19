---
description: >-
  Instructions to collect extended Deep Packet Inspection (DPI) logs on Windows
  for Netwrix Endpoint Protector using the official DPI log collection tool.
keywords:
  - DPI
  - Deep Packet Inspection
  - logs
  - Endpoint Protector
  - Windows
  - epp_collect_dpi_info.bat
  - collect
  - troubleshooting
  - support
products:
  - endpointprotector
sidebar_label: How to Collect Extended Deep Packet Inspection Log
tags:
  - content-aware-protection-and-dpi
  - kb
title: "How to Collect Extended Deep Packet Inspection Logs for Windows"
knowledge_article_id: kA0Qk0000002B74KAE
---

# How to Collect Extended Deep Packet Inspection Logs for Windows

## Question
How can you collect extended Deep Packet Inspection (DPI) logs for Windows?

## Answer

:::tip
Starting with EPP Server and Client version 2608, DPI debug logs are included automatically in Agent Debugging. Netwrix recommends upgrading to the latest EPP version so you can collect DPI logs directly from the Admin console instead of running a script on each endpoint. See [Debug Logging](/docs/endpointprotector/admin/dc_module/globalsettings#debug-logging) for the console-driven Manual and Automatic Logging procedures.
:::

While the automated method is available starting with version 2608, you can still use the manual procedure below to gather DPI logs if you prefer.

Follow the steps below to collect extended Deep Packet Inspection logs for Windows:

1. Download the DPI log collection tool:  
   https://download.endpointprotector.com/Support_files/epp_collect_dpi_tool.zip

2. Copy the `epp_collect_dpi_info.bat` script file to the computer where you are experiencing DPI issues and run it as Administrator.

3. Wait until the script finishes executing.

4. When the script completes, a Windows Explorer window will open showing the collected files.

5. Archive the logs as a `.zip` file and attach them to your support ticket or thread regarding the issue.
