---
description: >-
  This article provides step-by-step instructions for manually activating debugging logs on Windows for the Endpoint Protector Client.
keywords:
  - debugging logs
  - Endpoint Protector
  - Windows
  - Command Prompt
  - eppclient.log
  - eppsslsplit.log
  - services.msc
  - manual logging
sidebar_label: Activating Debugging Logs
tags:
  - troubleshooting-and-errors
  - kb
title: "Manually Activating Debugging Logs on Windows"
knowledge_article_id: kA0Qk0000002B7PKAU
products:
  - endpointprotector
---

# Manually Activating Debugging Logs on Windows

## Overview

This article explains how to manually activate debugging logs on Windows for the **Endpoint
Protector (EPP) Client**, for cases when you cannot use the [Debug Logging](/docs/endpointprotector/admin/dc_module/globalsettings#debug-logging)
UI option or the SupportTool.

> **NOTE:**
> Collecting logs remotely from the server console — the **Automatic Logging** method — is the optimal approach, since it requires no action on the endpoint itself. See [Remotely Activating and Collecting Client Logs from the Server Interface](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_remotely_activate_and_collect_client_logs_from_the_server_interface) for the automatic procedure. If the EPP Client cannot communicate with the EPP Server at all, use the [diagnostic collection script](/docs/kb/endpointprotector/troubleshooting-and-errors/how-to-collect-debug-logs-locally-on-an-endpoint-using-the-diagnostic-script) instead, since it captures a more complete diagnostic package. Use this manual terminal method only when neither of those applies. For the equivalent manual procedure on macOS, see [Manually Generating Logs for Mac Endpoint Protector Agents via Terminal](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_manually_generate_logs_for_mac_endpoint_protector_agents_via_terminal).

## Instructions

1. Open the **Command Prompt** as an administrator.
2. Navigate to the log folder for your client version:
   - **EPP Client 2608 and later:** `C:\ProgramData\Netwrix\EndpointProtector`
   - **EPP Client versions before 2608:** the root of your **C:** drive
3. Create the following log files in that folder:
   - `eppclient.log`
   - `eppsslsplit.log`
4. Restart the Endpoint Protector process as an admin using `services.msc`.
5. After completing these steps, reproduce the issue while debugging logs are active. The created files capture the log information.

> **IMPORTANT:**
> Share the log files with [Netwrix Technical Support](https://netwrix.com/en/support/) for further
> investigation.