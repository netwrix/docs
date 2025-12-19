---
description: >-
  Lists the steps to configure a Duo RADIUS proxy server as a multi-factor
  authentication (MFA) provider for Netwrix Privilege Secure (NPS). Includes
  required authproxy.cfg changes and the NPS configuration checks.
keywords:
  - Duo
  - RADIUS
  - MFA
  - Netwrix Privilege Secure
  - NPS
  - authproxy.cfg
  - RADIUS server
  - multi-factor authentication
products:
  - privilege-secure-access-management
sidebar_label: How to Configure a Duo RADIUS Proxy for Multi-Fact
tags: []
title: "How to Configure a Duo RADIUS Proxy for Multi-Factor Authentication"
knowledge_article_id: kA04u000000LLOHCA4
---

# How to Configure a Duo RADIUS Proxy for Multi-Factor Authentication

## Overview

This article lists the steps to configure a Duo RADIUS proxy server as a multi-factor authentication (MFA) provider for Netwrix Privilege Secure (NPS).

> **IMPORTANT:** Privilege Secure only supports Duo as a secondary authentication provider. Password authentication is still handled by Netwrix Privilege Secure.

## Instructions

1. On your RADIUS server, follow the default path below to open the `authproxy.cfg` file.

```
%ProgramFiles%\Duo Security Authentication Proxy\conf\authproxy.cfg
```

2. Add a `[duo_only_client]` section heading to the file and save the file. The new heading should precede the `[radius_server_auto]` section heading. See the following code block for a reference:

```
[duo_only_client]

[radius_server_auto]
ikey=%value%
skey=%value%
api_host=%value%
radius_secret_1=testing123
radius_ip_1=192.168.77.20
failmode=safe
client=duo_only_client
port=1812
```

> **NOTE:** Take note of values in the `[radius_server_auto]` section—these are used to configure NPS for Duo authentication. If you maintain multiple Duo configurations for applications, take note of values in `[radius_server_auto1]`, `[radius_server_auto2]`, etc.

3. Log in to the NPS console as a user with the Administrator role. Navigate to **Configuration** > **Authentication**.

4. Verify the following points:

- **IP**, **Remote Port**, and **Shared Secret** match the corresponding values in the `authproxy.cfg` file.
- The **Prefix for Response Text** field contains a comma. In case the PAP protocol is used, no prefix is needed.
- Both **Initial Auto-Response Text** and **Send Initial Text** features are optional. If you specify the `push` auto-response text and enable the **Send Initial Text** feature, a Duo push will be automatically initiated.

5. Save the changes to the configuration.

> **NOTE:** You can assign Duo as an authenticator connector for any NPS user. In the main NPS screen, click **Policy** > **Users & Groups**. Select any user and proceed to the **Authenticator Connector** tab. Select the **Duo** option.

On their login to NPS, the configured user should both enter their password and see the multi-factor authentication prompt from Duo. During the initial login, they will be asked to perform the initial Duo enrollment.
