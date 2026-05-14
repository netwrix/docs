---
description: >-
  If the Password Reset link is missing in the Netwrix Password Reset client and Duo MFA and Password Policy Enforcer Client are both in the environment. This article explains the steps and registry settings needed to get Password Reset Client, Password Policy Enforcer Client, and Duo MFA working together.
keywords:
  - password reset
  - Password Reset client
  - Duo
  - ProvidersWhitelist
  - registry
  - Password Policy Enforcer Client
  - GUID
  - third-party credential provider
products:
  - passwordreset
sidebar_label: Password Reset Link Missing with Duo and PPE Client
tags:
  - kb
title: "Password Reset Link Is Missing with Duo and PPE Client Installed"
knowledge_article_id: ""
---

# Password Reset Link Is Missing with Duo and PPE Client Installed

## Symptoms

The reset link is missing for Netwrix Password Reset when Duo MFA and Netwrix Password Policy Enforcer Client are installed.

## Cause

Multiple Credential Providers in the environment can conflict when you do not configure them correctly.

## Resolution

1. Uninstall all three: Duo MFA, Netwrix Password Reset (NPR) Client, and Netwrix Password Policy Enforcer (PPE) Client, and reboot the system.

2. Install Duo and restore any Duo settings that the uninstallation process may have removed.

3. Install PPE Client

4. Install NPR Client

5. Add a ProvidersWhitelist multi-string value of `{407DAD37-1BA1-49BB-8401-45B22F5EF77C}` following the [Duo instructions ⸱ Duo 🡥](https://help.duo.com/s/article/4041?language=en_US).

6. Press CTRL+ALT+DEL and select **Change Password**.

7. Verify that PPE policies appear and that the Password Reset link appears on the Lock Screen.

> **IMPORTANT:** If the Password Reset link is still missing or PPE Client is not showing policies, make sure the following registry values are not present on the machine.

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\ANIXIS\Password Reset Client]
"PreferredProvider"="{44E2ED41-48C7-4712-A3C3-250C5E6D5D84}"
"PreferredProviderUsernameField"=dword:00000001
"PreferredProviderFriendlyNameField"=dword:00000000
"PreferredProviderConfirmPasswordField"=dword:00000004
"PreferredProviderResetPasswordLinkField"=dword:00000006
"PreferredProviderLogOnToField"=dword:00000008
```