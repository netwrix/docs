---
title: "App Registration and Configuration in Microsoft Entra ID"
description: "App Registration and Configuration in Microsoft Entra ID"
sidebar_position: 20
---

# App Registration and Configuration in Microsoft Entra ID

This topic explains how to configure an app in Microsoft Entra ID (formerly Azure AD) to audit
Microsoft 365 data sources (SharePoint Online, Microsoft Entra ID, and Exchange Online) in Netwrix
1Secure using modern authentication. This app enables secure access to the Netwrix 1Secure
cloud-based infrastructure via Microsoft Graph and other modern APIs.

Configure the app in Microsoft Entra ID once. Use it to audit multiple Microsoft 365 data sources,
including SharePoint Online, Microsoft Entra ID, and Exchange Online.

:::note
Register a dedicated app in Microsoft Entra ID for each data source you want to audit in Netwrix 1Secure. Sharing a single app across multiple data sources is allowed but may cause issues such as throttling. For example, too many connections to Microsoft Graph may cause some connections to stop temporarily. Additionally, different data sources may require different permissions, and a single app may not support all of them.
:::


To begin auditing Microsoft 365 data sources, manually register the app for Netwrix 1Secure in
Microsoft Entra ID and provide its settings while adding a data source in Netwrix 1Secure.

:::note
A user account with the Global Administrator, Application Administrator, or Cloud
Application Administrator role is required to grant admin consent for certain permissions to the
registered application.
:::


:::note
Enable the unified audit log for the tenant. See the Microsoft
[Turn auditing on or off](https://learn.microsoft.com/en-us/purview/audit-log-enable-disable?view=o365-worldwide&tabs=microsoft-purview-portal)
article for additional information.
:::


## Register an App in Microsoft Entra ID

**To register an application in Microsoft Entra ID:**

:::note
The following steps are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** > **App
registrations** page.

**Step 3 –** On the App registrations page, click **New registration** in the top toolbar. The
Register an application page is displayed.

**Step 4 –** Specify the following information on the Register an application page:

- Name – Enter a user-facing display name for the application, for example, Netwrix 1Secure Entra ID
- Supported account types – Select **Accounts in this organizational directory only**
- Redirect URL (optional) – You can leave the field blank

**Step 5 –** Click **Register**.

The Overview page for the newly registered application opens. The following settings of the
registered application are required while adding a data source in Netwrix 1Secure. See the
[Sources and Connectors](/docs/1secure/admin/organizations/sourcesandconnectors/overview.md) topic for
additional information on adding a data source. Copy these settings and store them securely.

- Application (client) ID – A client ID for the registered application
- Directory (tenant) ID – A tenant ID for the registered application
- Client Secret – A client secret value generated when a new client secret key is created for the
  registered application. See the
  [Generate Client Secret Value](#generate-client-secret-value) topic for additional information.

## Grant Permissions to the App

You must grant the necessary permissions to the registered application in Microsoft Entra ID, based
on the data sources you plan to audit in.

**To grant permissions to the application:**

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** > **App
registrations** page.

**Step 3 –** On the App registrations page, click the **All applications** tab. The registered
applications are displayed in a list.

**Step 4 –** Click the application you registered from the list to grant the permissions. The
Overview page of the application is displayed.

**Step 5 –** Click **API permissions** under the Manage section. The API permissions page is
displayed.


:::note
Assign the Global Administrator or Exchange Administrator role to the registered application for Microsoft Entra ID state collection. See the [Assign Roles to the App](#assign-roles-to-the-app) section for instructions.
:::

Add the required API permissions for each of the following providers. The specific permissions depend on
the data sources you plan to audit. See the
[Microsoft 365 Permissions](permissions.md) page for the full list of permissions required for each
data source.

**Microsoft Graph**

**Step 6 –** On the API permissions page, click **Add a permission**. The Request API permissions
pane is displayed with the Microsoft APIs tab selected.

**Step 7 –** Click **Microsoft Graph**. The permission types are displayed for it.

**Step 8 –** Click **Application permissions**. The permission categories are listed. Click a
category and select the required Microsoft Graph permissions for your data sources.

See the following topics for the list of Microsoft Graph permissions required for each data source:

- [Permissions to Audit Microsoft Entra ID](permissions.md#permissions-to-audit-microsoft-entra-id)
- [Permissions to Audit SharePoint Online](permissions.md#permissions-to-audit-sharepoint-online)

**Step 9 –** After selecting the required permissions, click **Add permissions** at the bottom.
You return to the API Permissions page.

**Office 365 Management APIs**

:::note
Office 365 Management APIs permissions are required by all cloud connectors.
:::

**Step 10 –** Click **Add a permission** again. The Request API permissions pane is displayed.

**Step 11 –** Click **Office 365 Management APIs**. The permission types are displayed for it.

**Step 12 –** Click **Application permissions**. Select the **ActivityFeed.Read** permission.

**Step 13 –** Click **Add permissions** at the bottom. You return to the API Permissions page.

**Office 365 Exchange Online**

:::note
Office 365 Exchange Online permissions are required when auditing Microsoft Entra ID or Exchange Online. To access this API, click the **APIs my organization uses** tab on the Request API Permissions pane and search for **Office 365 Exchange Online**.
:::

**Step 14 –** Click **Add a permission** again. The Request API permissions pane is displayed.

**Step 15 –** Click the **APIs my organization uses** tab and search for **Office 365 Exchange Online**. Click it in the results. The permission types are displayed for it.

**Step 16 –** Click **Application permissions**. Select the **Exchange.ManageAsApp** permission.

**Step 17 –** Click **Add permissions** at the bottom. You return to the API Permissions page.

**SharePoint**

:::note
SharePoint permissions are only required when auditing SharePoint Online. To access this API, click the **APIs my organization uses** tab on the Request API Permissions pane and search for **SharePoint**.
:::

**Step 18 –** Click **Add a permission** again. The Request API permissions pane is displayed.

**Step 19 –** Click the **APIs my organization uses** tab and search for **SharePoint**. Click it in the results. The permission types are displayed for it.

**Step 20 –** Click **Application permissions**. Select the **Sites.FullControl.All** permission.

**Step 21 –** Click **Add permissions** at the bottom. You return to the API Permissions page.

**Grant admin consent**

**Step 22 –** After adding all required permissions, click **Grant admin consent for `<tenant>`** on the API Permissions page to grant the selected permissions to the application.

The API permissions are granted to the application.
<!-- END UPDATED -->

## Assign Roles to the App

Assign the registered application to the Global Administrator or Exchange Administrator
role for Microsoft Entra ID state collection.

**To assign roles to an application:**

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** > **App
registrations** page.

**Step 3 –** On the App registrations page, click the **All applications** tab. The registered
applications are displayed in a list.

**Step 4 –** Click the registered application from the list. The Overview page for the application
is displayed.

**Step 5 –** Click **Roles and administrators** under the Manage section. The Roles and
administrators page is displayed. From here, go to the All roles page.

**Step 6 –** On the All roles page, search for one of the following roles as required.

- Global Administrator – Can manage all aspects of Microsoft Entra ID and Microsoft services that
  use Microsoft Entra identities
- Exchange Administrator – Can manage all aspects of the Exchange product

**Step 7 –** Click the role you want. The Assignments page is displayed for it.

**Step 8 –** Click **Add assignments** in the top toolbar. The Add assignments pane is displayed.

**Step 9 –** On the Add assignments pane, search your application and select it.

**Step 10 –** Click the **Add** button at the bottom. The application appears on the Assignments
page.

## Generate Client Secret Value

**To generate a client secret value:**

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** > **App
registrations** page.

**Step 3 –** On the App registrations page, click the **All applications** tab. The registered
applications are displayed in a list.

**Step 4 –** Click the registered application from the list. The Overview page for the application
is displayed.

**Step 5 –** Click **Certificates & secrets** under the Manage section. The Certificates and secrets
page is displayed with the Client secrets tab selected by default.

**Step 6 –** On the Client secrets tab, click **New client secret**. The Add a client secret pane is
displayed.

- Description – Enter a description for the secret
- Expires – Select an expiration date for the secret key from the Expiry dropdown menu. By default,
  the Recommended: 180 days (6 months) option is selected.

**Step 7 –** Click the **Add** button. The client secret is generated and the client secret value is
displayed in the Value column.

The client secret value is required while adding a data source in Netwrix 1Secure. See the
[Sources and Connectors](/docs/1secure/admin/organizations/sourcesandconnectors/overview.md) topic for
additional information on adding a data source.

:::warning
If you leave this page before copying the key, it isn't retrievable, and you need to repeat the process.
:::


## Upload a Certificate

Certain connectors require a certificate rather than a client secret for authentication. 1Secure downloads this certificate while you configure a data source. Once downloaded, upload the certificate to the registered application in Microsoft Entra ID. See the
[Add a Source and Connectors for SharePoint Online](/docs/1secure/admin/organizations/sourcesandconnectors/sharepointonline.md)topic
for additional information on downloading a certificate.

**To upload a certificate to the registered application:**

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** > **App
registrations** page.

**Step 3 –** On the App registrations page, click the **All applications** tab. The registered
applications are displayed in a list.

**Step 4 –** Click the application you registered from the list. The Overview page of the
application is displayed.

**Step 5 –** Click **Certificates & secrets** under the Manage section. The Certificates & secrets
page is displayed with the Client secrets tab selected by default.

**Step 6 –** Click the **Certificates** tab.

**Step 7 –** On the Certificates tab, click **Upload certificate**. The Upload certificate pane is
displayed.

**Step 8 –** Click the select a file icon next to the Select a File field.

**Step 9 –** Browse and select the certificate file downloaded during the data source configuration
in Netwrix 1Secure, then click **Open**. The certificate file is selected.

**Step 10 –** Enter a description for this certificate and click the **Add** button at the bottom.
The certificate is uploaded to the registered application.

## Assign Permissions to the App Using Manifest

**To assign permissions to the registered application using the Manifest app:**

See the
[Microsoft Entra app manifest (Azure AD Graph format)](https://learn.microsoft.com/en-us/entra/identity-platform/reference-app-manifest#microsoft-entra-app-manifest-azure-ad-graph-format) article
for additional information on Manifest.

This is an alternate way for assigning permissions to the registered application that differs from
the normal method discussed in the [Grant Permissions to the App](#grant-permissions-to-the-app)
topic.

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** > **App
registrations** page.

**Step 3 –** On the App registrations page, click the **All applications** tab. The registered
applications are displayed in a list.

**Step 4 –** Click the application you registered from the list. The Overview page of the
application is displayed.

**Step 5 –** Click **Manifest** under the Manage section. The Manifest page is displayed.

**Step 6 –** Locate the **requiredResourceAccess** property in the manifest and edit it with the
following in the square brackets ([]). The **requiredResourceAccess** property should look like
this:

```
"requiredResourceAccess": [
{
"resourceAppId": "00000003-0000-0ff1-ce00-000000000000",
"resourceAccess": [
{
"id": "678536fe-1083-478a-9c59-b99265e6b0d3",
"type": "Role"
}
]
},
{
"resourceAppId": "00000003-0000-0000-c000-000000000000",
"resourceAccess": [
{
"id": "b0afded3-3588-46d8-8b3d-9842eff778da",
"type": "Role"
},
{
"id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
"type": "Role"
},
{
"id": "246dd0d5-5bd0-4def-940b-0421030a5b68",
"type": "Role"
},
{
"id": "332a536c-c7ef-4017-ab91-336970924f0d",
"type": "Role"
}
]
},
{
"resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",
"resourceAccess": [
{
"id": "594c1fb6-4f81-4475-ae41-0c394909246c",
"type": "Role"
}
]
},
{
"resourceAppId": "00000002-0000-0ff1-ce00-000000000000",
"resourceAccess": [
{
"id": "dc50a0fb-09a3-484d-be87-e023b12c6440",
"type": "Role"
}
]
}
],
```

**Step 7 –** Click **Save**.

Optionally, you can select **Download** to edit the manifest locally, and then use Upload to reapply
it to your application.
