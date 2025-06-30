# Microsoft Entra ID Auditing Configuration

The Enterprise Auditor for Entra ID Solution provides the ability to audit Microsoft Entra ID,
formerly Azure Active Directory. It scans:

- Microsoft Entra ID (formerly Azure AD)

**NOTE:** A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.

Data Collector

- [AzureADInventory Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/azureadinventory/overview.md)

Configuration Settings from the Registered Application

The following settings are needed from your tenant once you have registered the application:

- Client ID – This is the Application (client) ID for the registered application
- Key – This is the Client Secret Value generated when a new secret is created

    **CAUTION:** It is not possible to retrieve the value after saving the new key. It must be
    copied first.

**NOTE:** In order to add custom attributes, you will also need to know the Tenant name of the Entra
ID environment.

## Permissions

The following permissions are required:

- Microsoft Graph API

    - Application Permissions:

        - AuditLog.Read.All – Read all audit log data
        - Directory.Read.All – Read directory data

    - Delegated Permissions:

        - Group.Read.All – Read all groups
        - User.Read.All – Read all users' full profiles

- Access URLs

    - https://login.windows.net
    - https://graph.windows.net
    - https://login.microsoftonline.com
    - https://graph.microsoft.com

        - All sub-directories of the access URLs listed

## Register a Microsoft Entra ID Application

Follow the steps to register Enterprise Auditor with Microsoft Entra ID.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** and click App
registrations.

**Step 3 –** In the top toolbar, click **New registration**.

**Step 4 –** Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Enterprise
  Auditor Entra ID
- Supported account types – Select **Accounts in this organizational directory only**

**Step 5 –** Click **Register**.

The Overview page for the newly registered app opens. Review the newly created registered
application. Now that the application has been registered, permissions need to be granted to it.

## Grant Permissions to the Registered Application

Follow the steps to grant permissions to the registered application.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **API permissions** in the Manage section.

**Step 3 –** In the top toolbar, click **Add a permission**.

**Step 4 –** On the Request API permissions blade, select **Microsoft Graph** on the Microsoft APIs
tab. Select the following permissions:

- Under Application Permissions, select:

    - AuditLog.Read.All – Read all audit log data
    - Directory.Read.All – Read directory data

- Under Delegated Permissions, select:

    - Group.Read.All – Read all groups
    - User.Read.All – Read all users' full profiles

**Step 5 –** At the bottom of the page, click **Add Permissions**.

**Step 6 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

Now that the permissions have been granted to it, the Connection Profile and host settings for
Enterprise Auditor need to be collected.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** Copy the **Application (client) ID** value.

**Step 3 –** Save this value in a text file.

This Application (client) ID value is needed for the Enterprise Auditor Connection Profile and the
Custom Attributes page of the AzureADInventory Data Collector. See the
[Azure Active Directory for User Credentials](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/connection/profile/entraid.md)
topic and the
[AzureADInventory: Custom Attributes](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/azureadinventory/customattributes.md)
topic for additional information. Next generate the application’s Client Secret Key.

## Generate the Client Secret Key

Follow the steps to find the registered application's Client Secret, create a new key, and save its
value when saving the new key.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**CAUTION:** It is not possible to retrieve the value after saving the new key. It must be copied
first.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **Certificates & secrets** in the Manage section.

**Step 3 –** In the top toolbar, click **New client secret**.

**Step 4 –** On the Add a client secret blade, complete the following:

- Description – Enter a unique description for this secret
- Expires – Select the duration.

    **NOTE:** Setting the duration on the key to expire requires reconfiguration at the time of
    expiration. It is best to configure it to expire in 1 or 2 years.

**Step 5 –** Click **Add** to generate the key.

**CAUTION:** If this page is left before the key is copied, then the key is not retrievable, and
this process will have to be repeated.

**Step 6 –** The Client Secret will be displayed in the Value column of the table. You can use the
Copy to clipboard button to copy the Client Secret.

**Step 7 –** Save this value in a text file.

This Client Secret value is needed for the Enterprise Auditor Connection Profile and the Custom
Attributes page of the AzureADInventory Data Collector. See the
[Azure Active Directory for User Credentials](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/connection/profile/entraid.md)
topic and the
[AzureADInventory: Custom Attributes](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/azureadinventory/customattributes.md)
topic for additional information.

## Identify the Tenant Name

Follow the steps to find the Tenant Name where the registered application resides.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Settings** and click **Domain
names** to open the Custom domain names list.

**Step 3 –** Copy the domain name from the list of domains.

**Step 4 –** Save this value in a text file.

This is needed for the Host List and the Custom Attributes page of the AzureADInventory Data
Collector. See the
[Microsoft Entra ID Connection Profile & Host List](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/azureadinventory/configurejob.md)
and [AzureADInventory: Custom Attributes](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/azureadinventory/customattributes.md)
topics for additional information.
