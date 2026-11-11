---
description: >-
  Configure a Duo RADIUS proxy server as an MFA provider for Privilege Secure by
  editing authproxy.cfg and verifying the authentication settings.
keywords:
  - Duo
  - RADIUS
  - MFA
  - Netwrix Privilege Secure
  - NPS
  - authproxy.cfg
  - RADIUS server
  - multi-factor authentication
  - duo_only_client
  - radius_server_auto
  - Duo Authentication Proxy
products:
  - privilegesecure
sidebar_label: Configuring a Duo RADIUS Proxy for Multi-Factor Authentication
tags:
  - kb
  - authentication-and-mfa
title: "Configuring a Duo RADIUS Proxy for Multi-Factor Authentication"
knowledge_article_id: kA04u000000LLOHCA4
---

# Configuring a Duo RADIUS Proxy for Multi-Factor Authentication

## Overview

This article describes how to configure a Duo RADIUS proxy server as a multi-factor authentication (MFA) provider for Netwrix Privilege Secure for Access Management.

> **IMPORTANT:** Privilege Secure only supports Duo as a secondary authentication provider. Password authentication is still handled by Privilege Secure.

## Instructions

1. On your RADIUS server, open the `authproxy.cfg` file at the following path:

   ```
   %ProgramFiles%\Duo Security Authentication Proxy\conf\authproxy.cfg
   ```

2. Add a `[duo_only_client]` section heading to the file and save the file. The new heading should precede the `[radius_server_auto]` section heading. See the following code block for reference:

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

    > **NOTE:** Take note of values in the `[radius_server_auto]` section—these are used to configure Privilege Secure for Duo authentication. If you maintain multiple Duo configurations for applications, take note of values in `[radius_server_auto1]`, `[radius_server_auto2]`, etc.

3. Log in to the Privilege Secure console as a user with the Administrator role. Go to **Configuration** > **Authentication**.

4. Verify the following points:

   - **IP**, **Remote Port**, and **Shared Secret** match the corresponding values in the `authproxy.cfg` file.
   - The **Prefix for Response Text** field contains a comma. If the PAP protocol is used, no prefix is needed.
   - Both **Initial Auto-Response Text** and **Send Initial Text** features are optional. If you specify the `push` auto-response text and enable the **Send Initial Text** feature, a Duo push is automatically initiated.

5. Save the changes to the configuration.

    > **NOTE:** You can assign Duo as an authenticator connector for any Privilege Secure user. In the main Privilege Secure screen, click **Policy** > **Users & Groups**. Select any user and proceed to the **Authenticator Connector** tab. Select the **Duo** option.

When the configured user logs in to Privilege Secure, they should both enter their password and see the multi-factor authentication prompt from Duo. During the initial login, they are asked to perform the initial Duo enrollment.
