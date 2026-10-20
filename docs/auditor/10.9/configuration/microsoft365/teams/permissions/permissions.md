---
title: "Permissions for Teams Auditing"
description: "Permissions for Teams Auditing"
sidebar_position: 20
---

# Permissions for Teams Auditing

With Auditor, you can audit Office 365 organizations that have established modern authentication as
their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
For more information about modern authentication, see
[What is modern authentication](https://docs.microsoft.com/en-us/office365/enterprise/hybrid-modern-auth-overview#what-is-modern-authentication).

In this scenario, a pre-configured Microsoft Entra ID (formerly Azure AD) application with
appropriate access permissions authenticates Netwrix Auditor, which then accesses the cloud-based
infrastructure via Microsoft Graph and other modern APIs. So, you should register an Microsoft Entra
ID app and provide its settings to Auditor when configuring a monitored item.

**NOTE:** In some scenarios multi-factor authentication can't be enabled for Auditor  service
account. If so, you will need to configure an account with basic authentication to access Microsoft
Entra ID/Office 365 tenant.

## For Microsoft Teams

Before you start creating a monitoring plan to audit your Active Directory, plan for the account
that will be used for data collection – it should meet the requirements listed in this topic. Then
you will provide this account in the monitoring plan wizard (or in the monitored item settings).

See the following topics to access Microsoft Teams:

- [Using Basic Authentication with MS Teams](/docs/auditor/10.9/configuration/microsoft365/teams/permissions/basicauth.md)
- [Using Modern Authentication with MS Teams](/docs/auditor/10.9/configuration/microsoft365/teams/permissions/modernauth/modernauth.md)
