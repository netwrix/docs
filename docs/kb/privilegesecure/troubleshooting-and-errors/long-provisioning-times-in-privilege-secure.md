---
description: >-
  Provisioning in Netwrix Privilege Secure can take over 30 seconds when the
  WinRM HTTP setting prefers HTTPS and no certificate is available. This article
  explains the cause and provides steps to verify the setting and two resolution
  options.
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
  - privilege-secure-access-management
sidebar_label: Long Provisioning Times in Privilege Secure
tags: []
title: "Long Provisioning Times in Privilege Secure"
knowledge_article_id: kA0Qk0000000agDKAQ
---

# Long Provisioning Times in Privilege Secure

## Symptom

The provisioning stage in Netwrix Privilege Secure (NPS) takes over 30 seconds to complete.

## Cause

The WinRM HTTP setting set in **Global Settings** is `Use HTTPS if available` or `Use HTTPS only`. During the provisioning stage, NPS attempts to configure a secure connection via HTTPS. In case no certificate is availble, NPS switches to HTTP.

> **NOTE:** Refer to the following steps to verify the HTTP setting:
>
> 1. In the main NPS window, select the **Configuration** tab.
> 2. In the left pane, select **System Settings** > **Global Settings**.
> 3. In the **Global Settings** view, review the **WinRM HTTP Setting** value set.

## Resolutions

Refer to the following options to decrease the provisioning times:

- Switch the WinRM HTTP setting to `Use HTTP`.
- Generate a new self-signed SSL certificate, or import a custom SSL certificate for the resource. Refer to the following article for additional information: Resources Page — Configure Secure WinRM Connection Window · v4.1.

## Related articles

- Resources Page — Configure Secure WinRM Connection Window · v4.1
