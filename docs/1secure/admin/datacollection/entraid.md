---
title: "Microsoft Entra ID Auditing"
description: "Microsoft Entra ID Auditing"
sidebar_position: 20
---

# Microsoft Entra ID Auditing

The product supports Microsoft Entra ID  (formerly Azure AD) provided within Microsoft Office 365.

Netwrix 1Secure allows you to audit Office 365 organizations that have established modern
authentication as their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).

In this scenario, Netwrix 1Secure will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID application with
appropriate access permissions. So, you should register a Microsoft Entra ID  app and provide its
settings to Netwrix 1Secure when configuring a monitored item.

## Multi-factor Authentication

Support for modern authentication will allow you to audit the organizations where MFA is enabled for
all users, including service accounts. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.
