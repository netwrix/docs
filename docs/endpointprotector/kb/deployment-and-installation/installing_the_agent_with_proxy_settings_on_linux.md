---
description: >-
  This article explains how to install the Endpoint Protector agent on a Linux system that uses a proxy server.
keywords:
  - Endpoint Protector
  - Linux
  - proxy settings
sidebar_label: Installing the Agent with Proxy Settings
tags:
  - deployment-and-installation
title: "Installing the Agent with Proxy Settings on Linux"
knowledge_article_id: kA0Qk0000002B2iKAE
products:
  - endpoint-protector
---

# Installing the Agent with Proxy Settings on Linux

## Overview

This article explains how to install the Endpoint Protector agent on a Linux system that uses a proxy server. Follow these steps to ensure the agent is configured to work with your proxy environment.

## Instructions

1. Download the installer provided by Netwrix Technical Support.
2. Unarchive the package and edit the `options.sh` file.
3. Locate the proxy settings section in `options.sh`.
4. Uncomment the last two lines and add your proxy settings as described in the first two comment lines. The proxy address can use a DNS name or Fully Qualified Domain Name (FQDN).
5. Run the `install.sh` script.
6. Once the installation is complete, open the applications menu and click **Endpoint Protector**. Wait a few minutes, then check the Endpoint Protector Web Console in **Device Control** > **Computers** to verify that the computer has been added to the list.