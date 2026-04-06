---
title: "App Permissions in Entra"
description: "Configure Entra ID app permissions for SharePoint Online connectivity"
sidebar_position: 10
---

# App Permissions in Entra

Access Analyzer connects to SharePoint Online via a Microsoft Entra ID registered application using modern authentication, including support for multi-factor authentication (MFA). Access Analyzer accesses SharePoint Online through Microsoft Graph and other modern APIs, authenticated through a pre-configured Microsoft Entra ID application with the appropriate permissions.

You must register a dedicated Microsoft Entra ID application for Access Analyzer and grant it the required permissions before adding SharePoint Online as a data source.

:::note
A user account with the Global Administrator, Application Administrator, or Cloud Application Administrator role is required to register an application and grant admin consent for permissions.
:::

## Register an App in Microsoft Entra ID

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** > **App registrations**.

**Step 3 –** On the App registrations page, click **New registration** in the top toolbar.

**Step 4 –** Specify the following on the Register an application page:

- **Name** – Enter a display name for the application, for example, *Access Analyzer SharePoint Online*
- **Supported account types** – Select **Accounts in this organizational directory only**
- **Redirect URI (optional)** – Leave blank

**Step 5 –** Click **Register**.

The Overview page for the newly registered application opens. Note the following values — you will need them when configuring the SharePoint Online connector in Access Analyzer:

- **Application (client) ID**
- **Directory (tenant) ID**

## Grant Permissions to the App

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** Navigate to **Identity** > **Applications** > **App registrations**.

**Step 3 –** Click the **All applications** tab and select the application you registered.

**Step 4 –** Click **API permissions** under the Manage section.

**Step 5 –** Click **Add a permission**. The Request API permissions pane opens.

**Step 6 –** Click an API to access its permissions, then click the **Application permissions** tab.

**Step 7 –** Select the required permissions for each API (see table below).

**Step 8 –** Click **Add Permissions**.

**Step 9 –** Repeat Steps 6–8 for each API listed in the table below.

**Step 10 –** Click **Grant admin consent for `<tenant>`** to apply the permissions.

### Required Permissions

| API | Permission | Description |
| --- | --- | --- |
| Microsoft Graph | Sites.Read.All | Read items in all site collections |
| Microsoft Graph | Directory.Read.All | Read directory data |
| SharePoint | Sites.FullControl.All | Full control of all site collections (required for permissions and state-in-time reports) |
