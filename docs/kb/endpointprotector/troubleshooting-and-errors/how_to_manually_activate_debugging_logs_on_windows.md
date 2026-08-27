---
description: >-
  This article provides step-by-step instructions for manually activating debugging logs on Windows for the Endpoint Protector Client.
keywords:
  - debugging logs
  - Endpoint Protector
  - Windows
sidebar_label: Activate Debugging Logs
tags:
  - troubleshooting-and-errors
  - kb
title: "How to Manually Activate Debugging Logs on Windows"
knowledge_article_id: kA0Qk0000002B7PKAU
products:
  - endpointprotector
---

# How to Manually Activate Debugging Logs on Windows

## Overview

If you are experiencing issues with the **Endpoint Protector Client** and cannot use the [Debug Logging](/docs/endpointprotector/admin/dc_module/globalsettings#debug-logging) UI option or the SupportTool, you can manually activate debugging logs on Windows. Follow the instructions below to enable logging for troubleshooting purposes.

:::tip
Collecting logs remotely from the server console — the **Automatic Logging** method — is the optimal approach, since it requires no action on the endpoint itself. Use this manual terminal method only when the automatic method isn't available or doesn't apply. See [How to Remotely Activate and Collect Client Logs from the Server Interface](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_remotely_activate_and_collect_client_logs_from_the_server_interface) for the automatic procedure. For the equivalent manual procedure on macOS, see [How to Manually Generate Logs for Mac Endpoint Protector Agents via Terminal](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_manually_generate_logs_for_mac_endpoint_protector_agents_via_terminal).
:::

## Instructions

1. Open the **Command Prompt** as an administrator.
2. Navigate to the root of your **C:** drive.
3. Create the following log files in the root of the **C:** drive:
   - `eppclient.log`
   - `eppsslsplit.log`
4. Restart the Endpoint Protector process as an admin using **Services.msc**.
5. After completing these steps, reproduce the issue while debugging logs are active. Log information will be captured in the created files.
6. Share the log files with Netwrix Technical Support for further investigation.