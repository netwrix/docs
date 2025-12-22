---
title: "SharePoint Online Auditing"
description: "SharePoint Online Auditing"
sidebar_position: 30
---

# SharePoint Online Auditing

Netwrix 1Secure allows you to audit Office 365 organizations that have established modern
authentication as their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
See the Microsoft
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
article for additional information.

In this scenario, Netwrix 1Secure will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID application,
formerly Azure AD, with appropriate access permissions. So, you should register a Microsoft Entra ID
app and provide its settings to Netwrix 1Securewhen adding a SharePoint Online data source.

## Modern Authentication

Support for modern authentication will allow you to audit the organizations where MFA is enabled for
all users, including service accounts. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

## Configure SharePoint Online Auditing

To collect audit data from your SharePoint Online and OneDrive for Business, Netwrix 1Secure uses a
dedicated Microsoft Entra ID application and leverages APIs access permissions granted to that app.
To register this application and assign required permissions, an Azure AD account with an
administrative role will be required:

Microsoft Entra ID application should be created manually by user with administrative role and
assigned required permissions. This app will allow you to collect activity. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

##
