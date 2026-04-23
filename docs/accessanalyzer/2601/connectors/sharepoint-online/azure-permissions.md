---
title: "App Permissions in Entra"
description: "Configure Microsoft Entra ID app permissions for SharePoint Online connectivity"
sidebar_position: 10
---

# App Permissions in Entra

Access Analyzer connects to SharePoint Online through a Microsoft Entra ID registered application using certificate-based authentication. You must register a dedicated application for Access Analyzer and grant it the required API permissions before adding SharePoint Online as a data source.

:::note
A user account with the Global Administrator, Application Administrator, or Cloud Application Administrator role is required to register an application and grant admin consent for permissions.
:::

## Register an app in Microsoft Entra ID

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

2. On the left navigation menu, navigate to **Identity** > **Applications** > **App registrations**.

3. On the App registrations page, click **New registration** in the top toolbar.

4. Specify the following on the Register an application page:

   - **Name** — Enter a display name for the application, for example, *Access Analyzer SharePoint Online*
   - **Supported account types** — Select **Accounts in this organizational directory only**
   - **Redirect URI (optional)** — Leave blank

5. Click **Register**.

The Overview page for the newly registered application opens. Note the following values — you'll need them when configuring the SharePoint Online connector in Access Analyzer:

- **Application (client) ID**
- **Directory (tenant) ID**

## Grant permissions to the app

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

2. Navigate to **Identity** > **Applications** > **App registrations**.

3. Click the **All applications** tab and select the application you registered.

4. Click **API permissions** under the Manage section.

5. Click **Add a permission**. The Request API permissions pane opens.

6. Click an API to access its permissions, then click the **Application permissions** tab.

7. Select the required permissions for each API (see table below).

8. Click **Add Permissions**.

9. Repeat steps 6–8 for each API listed in the table.

10. Click **Grant admin consent for `<tenant>`** to apply the permissions.

### Required permissions

| API | Permission | Description |
| --- | --- | --- |
| Microsoft Graph | `Sites.FullControl.All` | Full control of all site collections |
| Microsoft Graph | `Directory.Read.All` | Read directory data |
| SharePoint | `Sites.FullControl.All` | Full control of all site collections |
