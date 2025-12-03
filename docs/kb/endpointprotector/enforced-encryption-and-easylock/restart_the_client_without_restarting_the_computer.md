---
description: >-
  This article explains how to restart the Endpoint Protector (EPP) client on Windows, macOS, and Linux without restarting the computer.
keywords:
  - Endpoint Protector
  - restart client
  - Windows
  - macOS
  - Linux
sidebar_label: Restart EPP Client
tags:
  - enforced-encryption-and-easylock
title: "Restart the Client Without Restarting the Computer"
knowledge_article_id: kA0Qk0000002B6QKAU
products:
  - endpoint-protector
---

# Restart the Client Without Restarting the Computer

## Overview

This article explains how to restart the **Endpoint Protector** (EPP) client on Windows, macOS, and Linux without restarting the computer. You can restart the relevant service or process for each operating system.

## Instructions

### Windows

Restart the **Endpoint Protector** service from the Windows Task Manager.

### macOS

Restart the EPP process by running the following commands in a Terminal:

```bash
sudo launchctl unload /Library/LaunchDaemons/com.cososys.eppclient.launchdaemon.plist
sudo launchctl load /Library/LaunchDaemons/com.cososys.eppclient.launchdaemon.plist
```

### Linux

Restart the service by running the following command in a Terminal:

```bash
sudo service epp-client-daemon restart
```