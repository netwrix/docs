---
title: "Permissions for Microsoft Entra ID Auditing"
description: "Permissions for Microsoft Entra ID Auditing"
sidebar_position: 20
---

# Permissions for Microsoft Entra ID Auditing

Auditor allows you to audit Office 365 organizations that have established modern authentication as
their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
To learn more about modern authentication, refer to the following Microsoft article:
[What is modern authentication](https://docs.microsoft.com/en-us/office365/enterprise/hybrid-modern-auth-overview#what-is-modern-authentication).

In this scenario, Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID (formerly Azure
AD) application with appropriate access permissions. So, you should register an Microsoft Entra ID
app and provide its settings to Auditor  when configuring a monitored item.

## For Microsoft Entra ID Auditing

To collect audit data in your cloud-based environment, Netwrix uses a dedicated Microsoft Entra ID
application and leverages APIs access permissions granted to that app. To register such application
and assign required permissions, a Microsoft Entra ID account with an administrative role will be
required:

- If Basic Authentication is used:
    - A Microsoft Entra ID application named **Netwrix Auditor for Microsoft Entra ID** will be
      created automatically when Netwrix Auditor connects to the monitored item (Office 365 tenant)
      for the first time. Thus, you will need to prepare a Microsoft Entra ID user account with an
      administrative role in Microsoft Entra ID —to create an app and perform initial data
      collection.
    - Provide this user name and password in the monitored item properties. See the
      [Microsoft Entra ID](/docs/auditor/10.7/admin/monitoringplans/microsoftentraid/overview.md) topic for
      additional information.

See the [Using Basic Authentication with Microsoft Entra ID](/docs/auditor/10.7/configuration/microsoft365/microsoftentraid/permissions/basicauth.md) topic for additional
information.

- If Modern Authentication is used:
    - Microsoft Entra ID application should be created manually by user with administrative role and
      assigned required permissions. See the
      [Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID](/docs/auditor/10.7/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md#configuring-microsoft-entra-id-app-for-auditing-microsoft-entra-id)
      topic for additional information.
    - You will need to provide the Microsoft Entra ID app settings in the monitored item (Office 365
      tenant) properties. See the
      [Microsoft Entra ID](/docs/auditor/10.7/admin/monitoringplans/microsoftentraid/overview.md) topic for
      additional information.

See the [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/10.7/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md) topic for additional
information.

Permissions for ongoing data collection will depend on data you plan to collect:

- To collect activity (event-based) data including logon attempts, the administrative role will be
  needed.
- To collect activity data without logons, the privileged role can be revoked from the specified
  account after the initial data collection.

### Grant Admin Consent to a Tenant

Go back to the **Microsoft Entra ID admin center** > **Applications** > **App registrations** >
**API permissions** and click **Grant admin consent for** *`<tenant name>`*. When prompted to
confirm, click **Yes**.

**NOTE:** For Office 365 permissions, go to **Request API Permissions** > **APIs my organization
users** and type "Office 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and
service principal using Microsoft Entra ID Admin portal:
[Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configure Client Secret

Follow the steps to create a new client secret to be used by the app.

**Step 1 –** Go to **Manage** > **Certificates & secrets** and click **New client secret**.

**Step 2 –** Enter the description. From the expiration options select **24 months**.

**Step 3 –** Click **Add**.

**Step 4 –** The new secret will be displayed in the list. Click **Copy to clipboard** icon on the
"Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret:
[Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret).

### Obtain Tenant Name

Follow the steps to obtain the tenant name.

**Step 1 –** Go to **Microsoft Entra ID** > **Overview**.

**Step 2 –** In the Tenant Information section, locate the **Primary domain** field, copy its value
and store to a safe location.
