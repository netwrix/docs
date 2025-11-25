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
title: "How to Set Up E-mail Alerts"
knowledge_article_id: kA0Qk0000002B6UKAU
products:
  - endpoint-protector
---

# How to Set Up E-mail Alerts

## Overview

E-mail alerts in **Endpoint Protector** allow you to send specific logs and notifications to administrator e-mail addresses. This article explains how to configure the e-mail server settings and create alerts for various system events.

## Instructions

1. To configure the e-mail server settings, navigate to the **Endpoint Protector Console** > **System Configuration** > **System Settings**.
2. Select the **E-mail Type**.
3. Enter the **Hostname** and **SMTP port**.
4. Check **Require SMTP Authentication**, then enter the e-mail address and password.
5. Select the **Encryption type** based on the port selected.
6. To test the configuration, check **Send test email to my account**. A test e-mail will be sent to the administrator when the settings are saved.
7. By default, the no-reply e-mail address is [noreply@endpointprotector.com](mailto:noreply@endpointprotector.com). You can change this to a custom address by switching the no-reply e-mail address from Default to Custom.
8. Create e-mail alerts by navigating to **Alerts** and selecting the desired alert type:
   - **System Alerts**: for system events (e.g., server disk space, licenses, password expiration).
   - **Device Control Alerts**: for device control events (e.g., device connected/disconnected, file copy, uninstall attempt).
   - **Content Aware Alerts**: for content aware protection events (e.g., content threat detected, content threat blocked).
   - **EasyLock Alerts**: for EasyLock events (e.g., change user password, password login exceeded, password login failure).
9. Click **Create**.
10. Select the **Event**, then enter the **Alert name** and select the **Administrator** who should receive the alert.
11. Click **Save**.