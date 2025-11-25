---
description: >-
  Use this article to install the Netwrix Endpoint Protector agent on Windows in
  environments that require a proxy. It explains the proxy settings to enter
  during installation and how to verify the agent appears in the console.
keywords:
  - endpoint protector
  - proxy
  - agent installation
  - proxy authentication
  - Windows
  - EPP
  - web console
  - device control
products:
  - endpoint-protector
sidebar_label: Installing the Agent with Proxy Settings on Window
tags:
  - deployment-and-installation
title: "Installing the Agent with Proxy Settings on Windows"
knowledge_article_id: kA0Qk0000002B6OKAU
---

# Installing the Agent with Proxy Settings on Windows

## Overview

This article explains how to install the Netwrix Endpoint Protector (EPP) agent on Windows when using a proxy server. Proper configuration ensures the agent can communicate through your proxy environment.

## Instructions

Follow the steps below to install the EPP agent with proxy settings on Windows:

1. Download the installer from the **Netwrix Endpoint Protector (EPP) Web Console**.
2. Run the setup with administrative rights.
3. During the installation process, when you reach the **Proxy Settings** section, select **Use Manual Settings** and fill in the required fields.
4. If your proxy requires authentication, enter valid credentials in the appropriate fields.
5. You can enter a proxy IP address, DNS name, or fully qualified domain name (`FQDN`) in the `proxy IP` field.  
   
6. After installation is complete, wait a few minutes for processing. Then, check the **Device Control** > **Computers** section in the Netwrix Endpoint Protector Web Console to verify that the computer has been added to the list.
