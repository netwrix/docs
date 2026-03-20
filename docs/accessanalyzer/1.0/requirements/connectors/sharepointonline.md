---
title: "SharePoint Online"
description: "Azure App Registration, Graph API permissions, and certificate authentication"
sidebar_position: 20
---

# SharePoint Online

The SharePoint Online connector scans SharePoint sites to enumerate content and access permissions using the Microsoft Graph API with certificate-based authentication.

## Network Requirements

| Port | Protocol | Direction | Description |
| --- | --- | --- | --- |
| 443 | TCP | Access Analyzer → Microsoft Graph API | HTTPS |

## Azure App Registration

An Azure AD (Entra ID) app registration is required for SharePoint Online connectivity.

### Required API Permissions

| Permission | Type | Description |
| --- | --- | --- |
| `Sites.Read.All` | Application | Read items in all site collections |

### Registration Steps

1. Sign in to the [Azure portal](https://portal.azure.com) and navigate to **Microsoft Entra ID** > **App registrations**
2. Click **New registration** and provide a name (for example, `Netwrix Access Analyzer - SharePoint`)
3. Under **API permissions**, add the **Microsoft Graph** application permission `Sites.Read.All`
4. Grant admin consent for the permission
5. Under **Certificates & secrets**, upload a certificate (`.cer` or `.pem` public key)
6. Note the **Application (client) ID** and **Tenant ID**

## Credential Type

| Field | Value |
| --- | --- |
| **Type** | Certificate |
| **Client ID** | Application (client) ID from the app registration |
| **Tenant ID** | Directory (tenant) ID |
| **Certificate** | Private key file (`.pem`) corresponding to the uploaded public key |

## Connector Capabilities

| Operation | Description |
| --- | --- |
| **Test connection** | Validates Graph API connectivity and certificate authentication |
| **Access scan** | Enumerates SharePoint sites, document libraries, files, and permissions |
| **Get object** | Retrieves specific site or document metadata |

## Scan Configuration Options

| Option | Description |
| --- | --- |
| **Site filtering** | Include or exclude specific SharePoint sites |
