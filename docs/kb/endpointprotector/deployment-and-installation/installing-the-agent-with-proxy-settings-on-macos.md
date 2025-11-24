---
description: >-
  This article explains how to install the Netwrix Endpoint Protector (EPP)
  agent on macOS when you use a proxy server, and how to configure proxy
  settings so the agent can communicate through your proxy environment.
keywords:
  - Netwrix Endpoint Protector
  - macOS
  - proxy
  - agent installation
  - EPP
  - proxy authentication
  - Device Control
  - Computers
products:
  - endpoint-protector
sidebar_label: Installing the Agent with Proxy Settings on MacOS
tags:
  - deployment-and-installation
title: "Installing the Agent with Proxy Settings on MacOS"
knowledge_article_id: kA0Qk0000002B5vKAE
---

# Installing the Agent with Proxy Settings on MacOS

## Overview

This article explains how to install the Netwrix Endpoint Protector (EPP) agent on macOS when you use a proxy server. Proper configuration ensures the agent can communicate through your proxy environment.

## Instructions

Follow the steps below to install the EPP agent with proxy settings on macOS:

1. Download the installer from the **Netwrix Endpoint Protector Web Console**.
2. Run the package using an administrator account. Alternatively, you can start the installation from the Terminal using `sudo` rights.
3. During the installation process, when you reach the **Proxy Settings** section, select **Use Manual Settings** and fill in the required fields.
4. If your proxy requires authentication, enter valid credentials in the appropriate fields.
5. You can enter a proxy IP address, DNS name, or fully qualified domain name (FQDN) in the proxy IP field.

![ ](./../0-images/ka0Qk000000Dein_0EMQk00000CV0zJ.png)

6. After installation is complete, wait a few minutes for processing. Then, verify that the computer appears in the **Device Control** > **Computers** section of the **Netwrix Endpoint Protector Web Console**.
