---
title: "Client ID/Secret"
description: "Client ID and secret credentials for Entra ID source groups"
sidebar_position: 3
---

# Client ID/Secret

The Client ID/Secret credential type authenticates with Microsoft Entra ID via the Microsoft Graph API. Use this credential type when configuring Entra ID source groups.

This requires a registered application in your Entra ID tenant with the appropriate API permissions granted.

## Create a Client ID/Secret service account

1. Navigate to **Configuration** > **Service Accounts**.
2. Click **Add Service Account**.
3. In the **Name** field, enter a descriptive name for this service account.
4. From the **Service account type** drop-down, select **Client ID/Secret**.

   ![Add service account form showing Client ID/Secret fields: name, client application ID, and client secret](/images/accessanalyzer/2601/configurations/add-service-account-client-secret.png)

5. In the **Client Application ID** field, enter the Application (client) ID from your Entra ID app registration.
6. In the **Client Secret** field, enter a client secret value generated for the registered application.
7. Click **Add account**.

## Fields

| Field | Description |
| --- | --- |
| **Name** | A display name that identifies this service account in Access Analyzer. |
| **Client Application ID** | The Application (client) ID of your registered Entra ID application. Find this in the Azure portal under **Azure Active Directory** > **App registrations** > your app > **Overview**. |
| **Client Secret** | A client secret generated for the registered application. Create one in the Azure portal under your app's **Certificates & secrets**. |

For steps to register the application and grant the required API permissions, see [Entra ID Requirements](../../connectors/entra-id/overview.md).
