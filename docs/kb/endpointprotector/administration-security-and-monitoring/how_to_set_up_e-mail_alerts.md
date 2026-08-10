---
description: >-
  This article explains how to configure e-mail alerts in Endpoint Protector, including setting up the e-mail server and creating alerts for various system events.
keywords:
  - e-mail alerts
  - Endpoint Protector
  - system events
sidebar_label: Set Up E-mail Alerts
tags:
  - administration-security-and-monitoring
  - kb
title: "How to Set Up E-mail Alerts"
knowledge_article_id: kA0Qk0000002B6UKAU
products:
  - endpointprotector
---

# How to Set Up E-mail Alerts

## Overview

E-mail alerts in **Endpoint Protector** allow you to send specific logs and notifications to administrator e-mail addresses. This article explains how to configure the e-mail server settings and create alerts for various system events.

For the full list of e-mail server configuration options, including OAuth 2.0 authentication for Microsoft Exchange Online, see [Mail Settings](/docs/endpointprotector/admin/systemconfiguration/mailsettings).

## Instructions

### Configure the E-mail Server

Before you configure the e-mail server, set an e-mail address for your administrator account (**System Configuration** > **System Administrators** > **Edit info**). Endpoint Protector sends test e-mails to this address.

1. Navigate to the **Endpoint Protector Console** > **System Configuration** > **Mail Settings**.
2. Select the **E-mail Authentication Type**:
   - **Basic** — standard username and password authentication. Supports the **Native** and **SMTP** e-mail types, with TLS 1.3.
   - **OAuth** — OAuth 2.0 authentication for Microsoft Exchange Online.

:::note
Microsoft is deprecating Basic authentication for SMTP AUTH on Exchange Online. See [Deprecation of Basic authentication in Exchange Online](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online) for the official announcement and timeline. If your mail server is Microsoft Exchange Online, select **OAuth** instead of **Basic** to keep e-mail alerts working.
:::

3. Configure the fields for the authentication type you selected:
   - **Basic**: **E-mail Type** (**Native** or **SMTP**), **Hostname**, **SMTP Port**, **Username**, **Password**, and **Encryption type** based on the port selected.
   - **OAuth**: **Hostname** (recommended: `smtp.office365.com`), **SMTP Port** (recommended: `587`), **Username**, **Tenant ID**, **Application (Client) ID**, **Client Secret Value**, and **Redirect URI**. The redirect URI must match the one registered in your Microsoft Azure application.
4. For OAuth, click **Sign In** after saving the fields to complete authorization.
5. To test the configuration, check **Send test email to my account**. Endpoint Protector sends a test e-mail to the administrator account when you save the settings.
6. By default, the no-reply e-mail address is [noreply@endpointprotector.com](mailto:noreply@endpointprotector.com). To use a custom address, switch the no-reply e-mail address from **Default** to **Custom**.

:::tip
If e-mail delivery fails, review the **Mail Server Logs** tab under **System Configuration** > **Mail Settings** for detailed error messages. See [Mail Settings](/docs/endpointprotector/admin/systemconfiguration/mailsettings) for the full configuration reference, including Microsoft Azure prerequisites for OAuth.
:::

### Create E-mail Alerts

1. Navigate to **Alerts** and select the desired alert type:
   - **System Alerts**: for system events (e.g., server disk space, licenses, password expiration).
   - **Device Control Alerts**: for device control events (e.g., device connected/disconnected, file copy, uninstall attempt).
   - **Content Aware Alerts**: for content aware protection events (e.g., content threat detected, content threat blocked).
   - **EasyLock Alerts**: for EasyLock events (e.g., change user password, password login exceeded, password login failure).
2. Click **Create**.
3. Select the **Event**, then enter the **Alert name** and select the **Administrator** who should receive the alert.
4. Click **Save**.