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

2. Install Fortinet Authenticator peforming a reboot and making sure Fortinet is working as expected.

3. Apply the CredentialProvidersWhiteList to Fortinet location using the Password Policy Enforcer Client GUID: `{F347212E-AF6B-4726-92B3-E4DF3388D58C}`
> **NOTE:** More information on the Fortinet Registry is available in Fortinet documentation here: https://docs.fortinet.com/document/fortiauthenticator/6.6.0/fortiauthenticator-agent-for-microsoft-windows-5-1-install-guide/395640/appendix-d-fortiauthenticator-agent-for-microsoft-windows-registry-files

4. Install Password Policy Enforcer Client, reboot, and make sure Fortinet Authenticator is still working as expected.

5. After logging in, press CTRL+ALT+DEL and check whether password policies appear. An administrator must assign a password policy to the user for this to work. 
> **NOTE:** If password policies still don't appear, wait on the CTRL+ALT+DEL > Change Password screen to see whether Password Policy Enforcer Client returns a communication error or the screen times out back to the CTRL+ALT+DEL screen. If it times out back to the CTRL+ALT+DEL screen, repeat the steps and verify that the GUID in the CredentialProvidersWhiteList registry value is correct and doesn't have missing or extra characters.


## Related articles

- Appendix D - FortiAuthenticator Agent for Microsoft Windows registry files ⸱ FortiAuthenticator Agent for Microsoft Windows 5.1 Install Guide: https://docs.fortinet.com/document/fortiauthenticator/6.6.0/fortiauthenticator-agent-for-microsoft-windows-5-1-install-guide/395640/appendix-d-fortiauthenticator-agent-for-microsoft-windows-registry-files