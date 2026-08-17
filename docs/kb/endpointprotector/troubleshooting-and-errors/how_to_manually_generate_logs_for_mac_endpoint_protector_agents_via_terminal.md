---
description: >-
  This article explains how to generate the log file and DPI log file for the Endpoint Protector (EPP) Mac Client using terminal commands.
keywords:
  - Endpoint Protector
  - Mac Client
  - log generation
sidebar_label: Generate Logs for Mac EPP
tags:
  - troubleshooting-and-errors
  - kb
title: "How to Manually Generate Logs for Mac Endpoint Protector Agents via Terminal"
knowledge_article_id: kA0Qk0000002B6VKAU
products:
  - endpointprotector
---

# How to Manually Generate Logs for Mac Endpoint Protector Agents via Terminal

## Overview

This article explains how to generate the log file and DPI log file for the Endpoint Protector (EPP) Mac Client using terminal commands.

:::tip
Collecting logs remotely from the server console — the **Automatic Logging** method — is the optimal approach, since it requires no action on the endpoint itself. Use this manual terminal method only when the automatic method isn't available or doesn't apply. See [Debug Logging](/docs/endpointprotector/admin/dc_module/globalsettings#debug-logging) for the full reference, or [How to Remotely Activate and Collect Client Logs from the Server Interface](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_remotely_activate_and_collect_client_logs_from_the_server_interface) for the automatic procedure. For the equivalent manual procedure on Windows, see [How to Manually Activate Debugging Logs on Windows](/docs/kb/endpointprotector/troubleshooting-and-errors/how_to_manually_activate_debugging_logs_on_windows).
:::

## Instructions

Follow the steps below to complete this process:

1. Terminate the EPP Client:
   ```bash
   sudo /bin/launchctl unload /Library/LaunchDaemons/com.cososys.eppclient.launchdaemon.plist
   ```

2. Create the EPP Client log file:
   ```bash
   sudo touch /private/var/log/eppclient.log
   ```

3. Create the DPI log file:
   ```bash
   sudo touch /private/var/log/eppsslsplit.log
   ```

4. Restart the EPP Client:
   ```bash
   sudo /bin/launchctl load /Library/LaunchDaemons/com.cososys.eppclient.launchdaemon.plist
   ```