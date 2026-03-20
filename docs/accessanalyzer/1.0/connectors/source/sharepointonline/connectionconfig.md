---
title: "Connection Configuration"
description: "Configuring SharePoint Online connection parameters"
sidebar_position: 10
---

# Connection Configuration

Configure the SharePoint Online connector to scan SharePoint sites using the Microsoft Graph API with certificate-based authentication.

## Prerequisites

- An Azure AD app registration with `Sites.Read.All` permission — see [SharePoint Online Requirements](/docs/accessanalyzer/1_0/requirements/connectors/sharepointonline)
- A certificate (public/private key pair) uploaded to the app registration
- Network connectivity from Access Analyzer to Microsoft Graph API (port 443)

## Create a Service Account

1. Navigate to **Service Accounts** in the sidebar
2. Click **Add Service Account**
3. Enter a **Name** (for example, `SharePoint Online - Graph API`)
4. Select **Certificate** as the type
5. Enter the **Client ID** (Application ID from the Azure app registration)
6. Enter the **Tenant ID** (Directory ID)
7. Upload the **Certificate** (private key `.pem` file)
8. Click **Add service account**

## Add a SharePoint Online Source

1. Navigate to **Configuration** > **Sources**
2. Click **Add Source**
3. Select **Data Source** as the category
4. Select **SharePoint Online** as the source type
5. Select the certificate-based service account created above
6. Click **Test Connection** to verify Graph API connectivity
7. After a successful test, click **Create Source**

## Test Connection

The test connection validates:

- Certificate authentication with the Microsoft identity platform
- Graph API access with the configured permissions
- Ability to enumerate SharePoint sites
