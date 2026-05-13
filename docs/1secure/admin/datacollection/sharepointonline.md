---
title: "SharePoint Online Auditing"
description: "SharePoint Online Auditing"
sidebar_position: 30
---

# SharePoint Online Auditing

Use Netwrix 1Secure to audit Office 365 organizations that have established modern
authentication as their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
See the Microsoft
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
article for additional information.

In this scenario, Netwrix 1Secure accesses the cloud-based infrastructure via Microsoft Graph and
other modern APIs, authenticated through a pre-configured Microsoft Entra ID application,
formerly Azure AD, with appropriate access permissions. Register a Microsoft Entra ID app and
provide its settings to Netwrix 1Secure when adding a SharePoint Online data source.

## Modern Authentication

With modern authentication support, you can audit organizations where MFA is enabled for
all users, including service accounts. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

## Configure SharePoint Online Auditing

To collect audit data from your SharePoint Online and OneDrive for Business, Netwrix 1Secure uses a
dedicated Microsoft Entra ID application and the API access permissions granted to that app.
A user with an Azure AD administrative role must create the application manually and assign the
required permissions. With this app, you can collect activity. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

##
