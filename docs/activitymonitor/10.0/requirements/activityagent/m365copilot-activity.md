---
title: "Microsoft 365 Copilot Activity Auditing Configuration"
description: "Microsoft 365 Copilot Activity Auditing Configuration"
sidebar_position: 55
---

# Microsoft 365 Copilot Activity Auditing Configuration

To collect logs and monitor Microsoft 365 Copilot activity, register the Netwrix Activity Monitor
with Microsoft Entra ID (formerly Azure AD).

:::note
A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.
:::


**Configuration Settings from the Registered Application**

The following settings are needed from your tenant after you register the application:

- Tenant ID – This is the Tenant ID for Microsoft Entra ID
- Client ID – This is the Application (client) ID for the registered application
- Client Secret – This is the Client Secret Value generated when a new secret is created

    :::warning
    It isn't possible to retrieve the value after saving the new key. It must be
    copied first.
    :::


- Agent Certificate – Upload the agent certificate to the registered application in Microsoft
  Entra ID. See the
  [Upload the Agent Certificate](#upload-the-agent-certificate) section for additional information.

**Required API Permissions**

| API | Permission | Type | Description |
| --- | --- | --- | --- |
| Microsoft Graph | `Directory.Read.All` | Application | Read directory data |
| Microsoft Graph | `Sites.Read.All` | Application | Read items in all site collections |
| Microsoft Graph | `User.Read.All` | Application | Read all users' full profiles |
| SharePoint | `Sites.Read.All` | Application | Read items in all site collections |
| Office 365 Management APIs | `ActivityFeed.Read` | Application | Read activity data for your organization |

## Register a Microsoft Entra ID Application

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** and click
**App registrations**.

**Step 3 –** In the top toolbar, click **New registration**.

**Step 4 –** Enter the following information on the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Activity Monitor
  for Microsoft 365 Copilot
- Supported account types – Select **Accounts in this organizational directory only**
- Redirect URI – Set the Redirect URI to **Public client/native** (Mobile and desktop) from the
  dropdown menu. In the text box, enter the following:

**Urn:ietf:wg:oauth:2.0:oob**

**Step 5 –** Click **Register**.

The Overview page for the newly registered app opens.

## Grant Permissions to the Registered Application

**Step 1 –** On the registered app blade, click **API permissions** in the Manage section.

**Step 2 –** Click **Add a permission** and add the permissions listed in the Required API
Permissions table in this topic.

**Step 3 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

## Identify the Client ID and Tenant ID

The Client ID and Tenant ID are available on the registered application's Overview page.

**Step 1 –** Select the registered application in **Identity** > **Applications** > **App
registrations** > **All applications**.

**Step 2 –** Copy the **Application (client) ID** and **Directory (tenant) ID** values and save
them to a text file.

## Generate the Client Secret Key

:::warning
It isn't possible to retrieve the value after saving the new key. It must be copied
first.
:::


**Step 1 –** On the registered app blade, click **Certificates & secrets** in the Manage section.

**Step 2 –** Click **New client secret**, enter a description and expiration period, then click
**Add**.

:::note
Setting the duration on the key to expire requires reconfiguration at the time of
expiration. It is best to configure it to expire in 1 or 2 years.
:::


**Step 3 –** Copy the Client Secret from the Value column and save it to a text file.

## Upload the Agent Certificate

Upload the Activity Monitor agent certificate to the registered application in Microsoft Entra ID.
This certificate authenticates the agent when it collects Microsoft 365 Copilot activity data.

**Step 1 –** On the Azure AD / Entra ID Connection page in the Activity Monitor, click **Open
agent certificate location** to open the folder containing the agent certificate file.

**Step 2 –** In the Microsoft Entra admin center, select the registered application and click
**Certificates & secrets** in the Manage section.

**Step 3 –** On the **Certificates** tab, click **Upload certificate**, browse to the agent
certificate file, and click **Add**.
