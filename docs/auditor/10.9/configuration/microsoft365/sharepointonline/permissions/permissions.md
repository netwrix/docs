---
title: "Permissions for SharePoint Online Auditing"
description: "Permissions for SharePoint Online Auditing"
sidebar_position: 20
---

# Permissions for SharePoint Online Auditing

With Auditor, you can audit Office 365 organizations that have established modern authentication as
their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
For more information about modern authentication, see
[What is modern authentication](https://docs.microsoft.com/en-us/office365/enterprise/hybrid-modern-auth-overview#what-is-modern-authentication).

In this scenario, a pre-configured Microsoft Entra ID (formerly Azure AD) application with
appropriate access permissions authenticates Netwrix Auditor, which then accesses the cloud-based
infrastructure via Microsoft Graph and other modern APIs. So, you should register an Microsoft Entra
ID app and provide its settings to Auditor when configuring a monitored item.

## Authentication for SharePoint Online Auditing

To collect audit data from your SharePoint Online and OneDrive for Business, Netwrix Auditor uses a
dedicated Microsoft Entra ID application and the API access permissions granted to that app. To
register this application and assign the required permissions, you need a Microsoft Entra ID
account with an administrative role:

- If Modern Authentication is used:
    - A user with an administrative role must create the Microsoft Entra ID application manually and
      assign the required permissions. With this app, you can collect both activity and
      state-in-time data. See the
      [Configuring Microsoft Entra ID App for Auditing SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/modernauth/modernauth.md#configuring-microsoft-entra-id-app-for-auditing-sharepoint-online)
      section for additional information.
    - You will need to provide the Microsoft Entra ID app settings in the monitored item (Office 365
      tenant) properties. See the
      [Microsoft Entra ID](/docs/auditor/10.9/admin/monitoringplans/microsoftentraid/overview.md) topic for
      additional information.

See the [Using Modern Authentication with SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/modernauth/modernauth.md) topic for additional
information.

- If Basic Authentication is used:

    - Netwrix Auditor automatically creates a Microsoft Entra ID application named **Netwrix
      Auditor for Microsoft Entra ID** when it connects to the monitored item (Office 365 tenant)
      for the first time. Thus, you will need to prepare an Office 356 user account with an
      administrative role in Microsoft Entra ID — to create an app and perform initial data
      collection.
    - Provide this user name and password in the monitored item properties. See the
      [Microsoft Entra ID](/docs/auditor/10.9/admin/monitoringplans/microsoftentraid/overview.md) topic for
      additional information.
    - Permissions for ongoing data collection will depend on data you plan to collect:

        - To collect both activity (event-based) and state-in-time data, you still need the
          administrative role.
        - To collect activity data only, the privileged role can be revoked from the specified
          account after the initial data collection.

See the [Using Basic Authentication with SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/basicauth.md) topic for additional
information.
