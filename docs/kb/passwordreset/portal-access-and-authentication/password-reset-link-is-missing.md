---
description: >-
  If the Password Reset link is missing in the Netwrix Password Reset client,
  configure third-party credential provider integration (for example, Cisco
  Duo). This article explains how to add the necessary registry entries to
  enable the reset link.
keywords:
  - password reset
  - Password Reset client
  - Duo
  - ProvidersWhitelist
  - registry
  - PreferredProvider
  - GUID
  - third-party credential provider
products:
  - password-reset
sidebar_label: Password Reset Link Is Missing
tags: []
title: "Password Reset Link Is Missing"
knowledge_article_id: kA0Qk0000000NSrKAM
---

# Password Reset Link Is Missing

## Symptoms

The reset link is missing in the Netwrix Password Reset client computer.

## Cause

Netwrix Password Reset integration has not been configured for third-party credential providers (e.g., DUO Security).

## Resolution

Configure your third-party credential provider to work with Netwrix Password Reset. Learn more about setting up Cisco DUO to work with Password Reset in the Duo Knowledge Base article: https://help.duo.com/s/article/4041?language=en_US (Can I enable other credential providers after installing Duo Authentication for Windows Logon? ⸱ Cisco DUO).

> **NOTE:** Refer to the Password Reset Client GUID provided below:
>
> ```
> {407DAD37-1BA1-49BB-8401-45B22F5EF77C}
> ```

> **IMPORTANT:** In case adding Netwrix Password Reset to the `ProvidersWhitelist` did not work, refer to the following steps:

1. In the Password Reset client, locate the following registry key in Registry Editor:
   ```
   HKEY_LOCAL_MACHINE\SOFTWARE\Policies\ANIXIS\Password Reset Client
   ```

2. Add the following subkeys:
   ```
   "PreferredProvider"="{%third_party_GUID%}"
   "PreferredProviderUsernameField"=dword:00000001
   "PreferredProviderFriendlyNameField"=dword:00000000
   "PreferredProviderConfirmPasswordField"=dword:00000004
   "PreferredProviderResetPasswordLinkField"=dword:00000006
   "PreferredProviderLogOnToField"=dword:00000008
   ```
   Replace the GUID placeholder `%third_party_GUID%` with the third-party solution GUID.

3. Save the changes.
