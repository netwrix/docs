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

A tenancy can hold at most 10 pending or active connector app registrations.

:::note
Register a dedicated app in Microsoft Entra ID for each data source you want to audit in Netwrix 1Secure. Sharing a single app across multiple data sources is allowed but may cause issues such as throttling. For example, too many connections to Microsoft Graph may cause some connections to stop temporarily. Additionally, different data sources may require different permissions, and a single app may not support all of them.
:::


To begin auditing Microsoft 365 data sources with the **Register in Azure** method, manually
register the app for Netwrix 1Secure in Microsoft Entra ID and provide its settings while adding a
data source in Netwrix 1Secure.

:::note
A user account with the Global Administrator, Application Administrator, or Cloud
Application Administrator role is required to grant admin consent for certain permissions to the
registered application.
:::


:::note
Unified audit log must be enabled for a tenant. See the Microsoft
[Turn auditing on or off](https://learn.microsoft.com/en-us/purview/audit-log-enable-disable?view=o365-worldwide&tabs=microsoft-purview-portal)
article for additional information.
:::


## Choose How to Connect

The Microsoft connect flow lists **Cloud (Microsoft 365)** with SharePoint Online, Exchange Online,
and Microsoft 365 & Entra ID. The cloud card asks you to confirm that you have admin access to your
organization's Microsoft 365 tenant.

Choose one of the following methods:

- **Register in Azure** – Create the app registration yourself in the Azure portal. You have full
  control over every step and paste your credentials when you're done. The rest of this topic
  describes this method.
- **Run setup script** – Run a PowerShell script that creates the app registration and configures
  permissions automatically. You control the credentials. See
  [Run the Setup Script](#run-the-setup-script).

If you lack Global Administrator or Exchange Administrator access, 1Secure shows the message "You'll
need help from your technical team". Connecting Exchange Online and SharePoint Online requires an
app registration with admin-level permissions, so send the instructions to someone who has that
access.

## Run the Setup Script

The setup script is Register-1SecureMicrosoft365App.ps1. It requires the Microsoft.Graph PowerShell
module and the Global Administrator or Application Administrator role. The script outputs the
Application (Client) ID and a secret. The secret is shown once.

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

- Name – Enter a user-facing display name for the application, for example, Netwrix 1Secure
- Supported account types – Select **Accounts in this organizational directory only**
- Redirect URL (optional) – Leave the field blank

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

**Step 6 –** On the API permissions page, click **Add a permission**. The Request API permissions
pane is displayed with the Microsoft APIs tab selected. The tab lists all the APIs available in
Microsoft Entra ID.

**Step 7 –** Click an API to access its permissions. The permission types are displayed for it.

**Step 8 –** Click the **Application permissions** tab. The permission categories are listed. Click
a category and select the required permissions under it.

See the following topics for the list of API permissions required to audit the respective data
source.

- [Permissions to Audit Microsoft Entra ID](permissions.md#permissions-to-audit-microsoft-entra-id)
- [Permissions to Audit SharePoint Online](permissions.md#permissions-to-audit-sharepoint-online)
- [Permissions to Audit Exchange Online](permissions.md#permissions-to-audit-exchange-online)

**Step 9 –** After selecting the required permissions, click **Add Permissions** at the bottom.
You are navigated to the API Permissions page.

**Step 10 –** Click **Grant admin consent for `<tenant>`** to grant the selected permissions to the
applcation.

The API permissions are granted to the application.

## Assign Roles to the App

Assign the registered application to the Global Administrator or Exchange Administrator
role for Microsoft Entra ID state collection. Exchange.ManageAsApp alone isn't sufficient for
Exchange Online app-only authentication, so also assign the Exchange Administrator role.

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

**Step 10 –** Click the **Add** button at the bottom. The application is listed on the Assignments
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
Copy the secret value immediately. It is only shown once and can't be retrieved later. If you leave
this page before copying the key, you need to repeat the process.
:::


## Upload a Certificate

SharePoint Online requires a certificate instead of a client secret. Client secrets aren't supported
for this connector. Other connectors that need a certificate, such as SharePoint Online State, also
use it to authenticate instead of a client secret.

1Secure issues the certificate. It is self-signed, uses a 2048-bit RSA key, and is valid for 24
months. The file you download is the public certificate (.cer).

When SharePoint Online is included, the Register in Azure flow adds a step titled **Download and
upload the certificate**. Click **Download certificate**, and then upload the certificate to the
registered application in Microsoft Entra ID. You can't continue until you download it: 1Secure shows
"Download the certificate before continuing." After the download, 1Secure shows "Certificate
downloaded successfully. Upload it to your app registration to continue." If the download shows
"Certificate download is temporarily unavailable. Please try again in a moment.", try again. The
download can take a while, so wait while 1Secure processes the certificate. See the
[Add a Source and Connectors for SharePoint Online](/docs/1secure/admin/organizations/sourcesandconnectors/sharepointonline.md) topic
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
},
{
"id": "9492366f-7969-46a4-8d15-ed1a20078fff",
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

## Check the Connection Result

After you connect, 1Secure shows one of the following results:

- **You're connected** – The connection succeeded.
- **Some sources need attention** – Reconnect the sources from the Configuration page. This is usually
  caused by missing admin consent or an incomplete role assignment. Go back and choose how you'd like
  to connect again.
- **We couldn't verify the connection** – 1Secure couldn't confirm the connection.

If 1Secure shows "Connected successfully, but some connectors have limited functionality", it
couldn't detect the required permissions. The message reads "Required permissions couldn't be
detected. Check that they're configured correctly in your environment as propagation can take a few
minutes. You can verify data source health in Configuration after onboarding." Azure returns the
error messages.
