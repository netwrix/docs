---
title: "Entra ID Requirements"
description: "Azure App Registration, Graph API permissions, and OAuth2 credentials"
sidebar_position: 40
---

# Entra ID Requirements

The Entra ID connector validates connectivity to Microsoft Entra ID (formerly Azure Active Directory) using OAuth2 client credentials.

:::note
In Access Analyzer v1.0, the Entra ID connector supports **test connection only**. Full identity synchronization is not available in this release.
:::

## Network Requirements

| Port | Protocol | Direction | Description |
| --- | --- | --- | --- |
| 443 | TCP | Access Analyzer → Microsoft identity platform | HTTPS |

## Azure App Registration

An Azure AD (Entra ID) app registration is required.

### Required API Permissions

| Permission | Type | Description |
| --- | --- | --- |
| `User.Read.All` | Application | Read all user profiles (for future sync capability) |
| `Group.Read.All` | Application | Read all group memberships (for future sync capability) |

### Registration Steps

1. Sign in to the [Azure portal](https://portal.azure.com) and navigate to **Microsoft Entra ID** > **App registrations**
2. Click **New registration** and provide a name
3. Under **API permissions**, add the required Microsoft Graph application permissions
4. Grant admin consent for the permissions
5. Under **Certificates & secrets**, create a client secret
6. Note the **Application (client) ID**, **Tenant ID**, and **Client Secret**

## Credential Type

| Field | Value |
| --- | --- |
| **Type** | OAuth2 Client Credentials |
| **Client ID** | Application (client) ID |
| **Client Secret** | Client secret value |
| **Tenant ID** | Directory (tenant) ID |

## Connector Capabilities

| Operation | Description |
| --- | --- |
| **Test connection** | Validates OAuth2 authentication and Graph API connectivity |
