---
title: "Microsoft Entra ID Auditing"
description: "Microsoft Entra ID Auditing"
sidebar_position: 20
---

# Microsoft Entra ID Auditing

The product supports Microsoft Entra ID (formerly Azure AD) provided within Microsoft Office 365.

Use Netwrix 1Secure to audit Office 365 organizations that have established modern
authentication as their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).

In this scenario, Netwrix 1Secure accesses the cloud-based infrastructure via Microsoft Graph and
other modern APIs, authenticated through a pre-configured Microsoft Entra ID application with
appropriate access permissions. Register a Microsoft Entra ID app and provide its settings to
Netwrix 1Secure when configuring a monitored item.

## Multi-factor Authentication

With modern authentication support, you can audit organizations where MFA is enabled for
all users, including service accounts. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.
