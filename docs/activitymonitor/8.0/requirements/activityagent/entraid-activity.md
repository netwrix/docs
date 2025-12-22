---
title: "Microsoft Entra ID Activity Auditing Configuration"
description: "Microsoft Entra ID Activity Auditing Configuration"
sidebar_position: 30
---

# Microsoft Entra ID Activity Auditing Configuration

It is necessary to register Activity Monitor as a web application to the targeted Microsoft Entra ID
(formerly Azure AD), in order for Activity Monitor to monitor the environment. This generates the
Client ID and Client Secret needed by the Activity Agent. See
[Microsoft Support](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-reporting-api-prerequisites-azure-portal)
for assistance in configuring the Microsoft Entra ID web application.

:::note
A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.
:::


**Configuration Settings from the Registered Application**

The following settings are needed from your tenant once you have registered the application:

- Tenant ID – This is the Tenant ID for Microsoft Entra ID
- Client ID – This is the Application (client) ID for the registered application
- Client Secret – This is the Client Secret Value generated when a new secret is created

    :::warning
    It is not possible to retrieve the value after saving the new key. It must be
    copied first.
    :::


## Permissions

The following permissions are required:

- Microsoft Graph API

    - Application Permissions:

        - AuditLog.Read.All – Read all audit log data
        - Directory.Read.All – Read directory data
        - User.Read.All – Read all users' full profiles

## Register a Microsoft Entra ID Application

Follow the steps to register Activity Monitor with Microsoft Entra ID.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** and click App
registrations.

**Step 3 –** In the top toolbar, click **New registration**.

**Step 4 –** Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Activity Monitor
  Entra ID
- Supported account types – Select **Accounts in this organizational directory only**
- Redirect URI – Set the Redirect URI to **Public client/native** (Mobile and desktop) from the drop
  down menu. In the text box, enter the following:

**Urn:ietf:wg:oauth:2.0:oob**

**Step 5 –** Click **Register**.

The Overview page for the newly registered app opens. Review the newly created registered
application. Now that the application has been registered, permissions need to be granted to it.

## Grant Permissions to the Registered Application

Follow the steps to set up permissions to enable the Activity Monitor to monitor data and collect
logs from Microsoft Entra ID.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


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
    - User.Read.All – Read all users' full profiles

**Step 5 –** At the bottom of the page, click **Add Permissions**.

**Step 6 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

Now that the permissions have been granted to it, the settings required for Activity Monitor need to
be collected.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** Copy the **Application (client) ID** value.

**Step 3 –** Save this value in a text file.

This is needed for adding an Microsoft Entra ID host in the Activity Monitor. Next identify the
Tenant ID.

## Identify the Tenant ID

The Tenant ID is available in two locations within Microsoft Entra ID.

**Registered Application Overview Blade**

You can copy the Tenant ID from the same page where you just copied the Client ID. Follow the steps
to copy the Tenant ID from the registered application Overview blade.

**Step 1 –** Copy the Directory (tenant) ID value.

**Step 2 –** Save this value in a text file.

This is needed for adding an Microsoft Entra ID host in the Activity Monitor. Next generate the
application’s Client Secret Key.

**Overview Page**

Follow the steps to find the tenant name where the registered application resides.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** Copy the Tenant ID value.

**Step 3 –** Save this value in a text file.

This is needed for adding an Microsoft Entra ID host in the Activity Monitor. Next generate the
application’s Client Secret Key.

## Generate the Client Secret Key

Follow the steps to find the registered application's Client Secret, create a new key, and save its
value when saving the new key.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


:::warning
It is not possible to retrieve the value after saving the new key. It must be copied
first.
:::


**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **Certificates & secrets** in the Manage section.

**Step 3 –** In the top toolbar, click **New client secret**.

**Step 4 –** On the Add a client secret blade, complete the following:

- Description – Enter a unique description for this secret
- Expires – Select the duration.

    :::note
    Setting the duration on the key to expire requires reconfiguration at the time of
    expiration. It is best to configure it to expire in 1 or 2 years.
    :::


**Step 5 –** Click **Add** to generate the key.

:::warning
If this page is left before the key is copied, then the key is not retrievable, and
this process will have to be repeated.
:::


**Step 6 –** The Client Secret will be displayed in the Value column of the table. You can use the
Copy to clipboard button to copy the Client Secret.

**Step 7 –** Save this value in a text file.

This is needed for adding an Microsoft Entra ID in the Activity Monitor.
