---
description: >-
  Provisioning can take over 30 seconds when the WinRM HTTP setting prefers HTTPS
  and no certificate is available. Switch to HTTP or use a certificate.
keywords:
  - WinRM
  - Privilege Secure
  - provisioning
  - HTTPS
  - certificate
  - WinRM HTTP Setting
  - NPS
  - slow provisioning
  - secure WinRM
products:
  - privilegesecure
sidebar_label: Long Provisioning Times in Privilege Secure
tags:
  - kb
  - troubleshooting-and-errors
title: "Long Provisioning Times in Privilege Secure"
knowledge_article_id: kA0Qk0000000agDKAQ
---

# Long Provisioning Times in Privilege Secure

## Symptom

The provisioning stage in Netwrix Privilege Secure for Access Management takes over 30 seconds to complete.

## Cause

The WinRM HTTP setting set in **Global Settings** is `Use HTTPS if available` or `Use HTTPS only`. During the provisioning stage, Privilege Secure attempts to configure a secure connection via HTTPS. If no certificate is availble, Privilege Secure switches to HTTP.

> **NOTE:** To verify the HTTP setting, complete the following steps:
>
> 1. In the main Privilege Secure window, select the **Configuration** tab.
> 2. In the left pane, select **System Settings** > **Global Settings**.
> 3. In the **Global Settings** view, review the **WinRM HTTP Setting** value set.

## Resolution

Use one of the following options to decrease the provisioning times:

- Switch the WinRM HTTP setting to `Use HTTP`.
- Generate a new self-signed SSL certificate, or import a custom SSL certificate for the resource. For additional information, see Resources Page — Configure Secure WinRM Connection Window · v4.1.

## Related Links

- Resources Page — Configure Secure WinRM Connection Window · v4.1
