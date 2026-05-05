---
title: "Entra tenant requirements"
description: "Configure Microsoft Entra ID requirements for connectivity"
sidebar_position: 20
---

# Entra tenant requirements

Access Analyzer connects to Microsoft Entra ID through a registered application using OAuth2 client credentials. You must register a dedicated Microsoft Entra ID application for Access Analyzer and grant it the required permissions before adding Entra ID as a data source.

:::note
A user account with the **Global Administrator**, **Application Administrator**, or **Cloud Application Administrator** role is required to register an application and grant admin consent for permissions.
:::

:::note
The registered application must be assigned to the **Global Administrator** role for Entra ID data collection.
:::

## Register an app in Microsoft Entra ID

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

2. On the left navigation menu, navigate to **Identity** > **Applications** > **App registrations**.

3. On the App registrations page, click **New registration** in the top toolbar.

4. Specify the following on the Register an application page:

   - **Name** — Enter a display name for the application, for example, *Access Analyzer Entra ID*
   - **Supported account types** — Select **Accounts in this organizational directory only**
   - **Redirect URI (optional)** — Leave blank

5. Click **Register**.

The Overview page for the newly registered application opens. Copy the following values — you'll need them when configuring the Entra ID connector in Access Analyzer:

- **Application (client) ID**
- **Directory (tenant) ID**

## Grant permissions to the app

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

2. Navigate to **Identity** > **Applications** > **App registrations**.

3. Click the **All applications** tab and select the application you registered.

4. Click **API permissions** under the Manage section.

5. Click **Add a permission**. The Request API permissions pane opens.

6. Click **Microsoft Graph**, then click the **Application permissions** tab.

7. Select the required permissions (see table below).

8. Click **Add Permissions**.

9. Click **Grant admin consent for `<tenant>`** to apply the permissions.

### Required permissions

| API | Permission | Description |
| --- | --- | --- |
| Microsoft Graph | `Directory.Read.All` | Read directory data — users, groups, and role assignments |
| Microsoft Graph | `Policy.Read.All` | Read your organization's policies |
| Microsoft Graph | `InformationProtectionPolicy.Read.All` | Read your organization's information protection policies — required for MIP label retrieval |
