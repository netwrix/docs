---
description: >-
  Steps to configure Fortinet Authenticator to work with Netwrix Password Policy Enforcer Client by adding the Password Policy Enforcer Client GUID to the Fortinet CredentialProvidersWhiteList 
  registry value.
keywords:
  - Netwrix Password Policy Enforcer
  - Fortinet Authenticator
  - CredentialProvidersWhiteList
  - registry
  - GUID
  - Windows Logon
  - credential provider
  - Password Policy Enforcer Client
  - CTRL+ALT+DEL
  - filter acceptance list
products:
  - passwordpolicyenforcer
sidebar_label: Password Policies Not Displaying When Fortinet Authenticator Is Installed
tags:
  - kb
title: "Password Policies Not Displaying When Fortinet Authenticator Is Installed"
knowledge_article_id: 
---

# Password Policies Not Displaying When Fortinet Authenticator Is Installed

## Symptom

Netwrix Password Policy Enforcer Client does not show password policies for users on machines running Fortinet Authenticator.

## Cause

Fortinet Authenticator filters out all other credential providers unless the filter acceptance list for Fortinet includes them.

## Resolution

1. Uninstall Password Policy Enforcer Client and Fortinet Authenticator, then reboot the machine.

2. Install Fortinet Authenticator, reboot the machine, and confirm Fortinet Authenticator works as expected.

3. Add the Password Policy Enforcer Client GUID (`{F347212E-AF6B-4726-92B3-E4DF3388D58C}`) to the `CredentialProvidersWhiteList` registry value on the Fortinet machine.

    > **NOTE:** More information on the Fortinet Registry is available in [FortiAuthenticator Agent for Microsoft Windows Registry Files](https://docs.fortinet.com/document/fortiauthenticator/6.6.0/fortiauthenticator-agent-for-microsoft-windows-5-1-install-guide/395640/appendix-d-fortiauthenticator-agent-for-microsoft-windows-registry-files).

4. Install Password Policy Enforcer Client, reboot, and make sure Fortinet Authenticator is still working as expected.

5. After logging in, press Ctrl+Alt+Delete and check whether password policies appear. An administrator must assign a password policy to the user for this to work.

    > **NOTE:** If password policies still do not appear, wait on the Ctrl+Alt+Delete > Change Password screen to see whether Password Policy Enforcer Client returns a communication error or the screen times out back to the Ctrl+Alt+Delete screen. If it times out back to the Ctrl+Alt+Delete screen, repeat the steps and verify that the GUID in the `CredentialProvidersWhiteList` registry value is correct and does not have missing or extra characters.