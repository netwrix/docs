---
title: How to Configure the FAST Cloud Integration with Proxy Internet Settings
description: >-
  If you use a proxy on your Netwrix Change Tracker Server and FAST Cloud does
  not work, configure the proxy for IIS processes by adding a system environment
  variable. This article shows the exact steps to set the ALL_PROXY variable.
sidebar_label: FAST Cloud Proxy Settings
keywords:
  - Netwrix Change Tracker
  - FAST Cloud
  - proxy
  - ALL_PROXY
  - environment variable
  - IIS
  - proxy settings
  - server restart
  - internet connection
  - system variables
products:
  - change-tracker
tags:
  - kb
  - configuration-and-setup
knowledge_article_id:
---

# How to Configure the FAST Cloud Integration with Proxy Internet Settings

## Overview

If you have set up a proxy internet connection on your Netwrix Change Tracker Server and you find that FAST Cloud is not working as expected, follow the instructions below to configure proxy settings for the IIS processes.

## Instructions

1. Open **Windows Control Panel**.
2. Choose **System**.
3. Choose **Advanced system settings**.
4. On the Advanced tab, click **Environment Variables**.
5. Click **New** to create a new environment variable under the **System Variables** heading.
6. Enter Variable Name: **ALL_PROXY**.
7. Enter Variable Value: `http://IPADDRESS:PORT`.

   > **NOTE:** This should be the IP and port of the proxy server.

8. Select **OK**.
9. After creating the environment variable, click **OK** to apply the changes.
10. Once the environment variable is configured, restart the Netwrix Change Tracker Server. The FAST Cloud should now function as expected.
