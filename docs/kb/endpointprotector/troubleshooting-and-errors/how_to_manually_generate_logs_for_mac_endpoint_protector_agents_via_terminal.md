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
title: "How to Manually Generate Logs for Mac Endpoint Protector Agents via Terminal"
knowledge_article_id: kA0Qk0000002B6VKAU
products:
  - endpoint-protector
---

# How to Manually Generate Logs for Mac Endpoint Protector Agents via Terminal

## Overview

This article explains how to generate the log file and DPI log file for the Endpoint Protector (EPP) Mac Client using terminal commands.

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