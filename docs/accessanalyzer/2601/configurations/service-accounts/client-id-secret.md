---
title: "Client ID/Secret"
description: "Client ID and secret credentials for Entra ID source groups"
sidebar_position: 3
---

# Client ID/Secret

The Client ID/Secret credential type authenticates with Microsoft Entra ID via the Microsoft Graph API. Use this credential type when configuring Entra ID source groups.

This requires a registered application in your Entra ID tenant with the appropriate API permissions granted.

## Fields

| Field | Description |
| --- | --- |
| **Name** | A display name that identifies this service account in Access Analyzer. |
| **Client ID** | The Application (client) ID of your registered Entra ID application. Must be a valid UUID (for example, `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`). Find this in the Azure portal under **Azure Active Directory** > **App registrations** > your app > **Overview**. |
| **Client Secret** | A client secret generated for the registered application. Create one in the Azure portal under your app's **Certificates & secrets**. |

For steps to register the application and grant the required API permissions, see [Entra ID Requirements](../../connectors/entra-id/overview.md).
