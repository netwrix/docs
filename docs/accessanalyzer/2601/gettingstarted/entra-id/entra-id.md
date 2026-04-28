---
title: "Entra ID Scanning Overview"
description: "Overview of Entra ID scanning capabilities and prerequisites in Access Analyzer"
sidebar_position: 1
---

# Entra ID Scanning Overview

Access Analyzer connects to Microsoft Entra ID to synchronize users, groups, role assignments, and Microsoft Information Protection (MIP) sensitivity labels from your tenant. MIP labels — defined in Microsoft Purview — are retrieved during the scan and made available in the Sensitive Data configuration, where you can map them to sensitive data types for use in file server and SharePoint Online scans.

:::note
MIP sensitivity labels are collected during the Entra ID sync and become available for use in **File Server** and **SharePoint Online** Sensitive Data scans. Run the Entra ID scan at least once before enabling MIP label detection in those source groups.
:::

## Prerequisites

Before setting up an Entra ID source group, confirm that your environment meets the requirements below. The source group wizard connects to Microsoft Entra ID over HTTPS using a registered application's client credentials, so the Access Analyzer server must be able to reach the Microsoft identity platform and an app registration must be configured in your tenant with the required API permissions.

### Service account

Access Analyzer uses a Client ID and Secret service account to authenticate with Microsoft Entra ID via the Microsoft Graph API. This requires a registered application in your Entra ID tenant with the appropriate API permissions granted and a client secret generated for that application.

See [Client ID/Secret service account](../../configurations/service-accounts/client-id-secret.md) to create the service account and [Entra ID](../../connectors/entra-id/overview.md) for instructions on registering the application and granting the required permissions.

### Network requirements

| Protocol | Port | Destination |
| --- | --- | --- |
| HTTPS | 443 | Microsoft identity platform (`login.microsoftonline.com`) |
| HTTPS | 443 | Microsoft Graph API (`graph.microsoft.com`) |

### Before you begin

- A registered application in your Entra ID tenant with the required API permissions granted, including `InformationProtectionPolicy.Read.All` for MIP label retrieval.
- The application's **Tenant ID** and **Client ID**.
- A client secret generated for the application.
- A Client ID and Secret service account created in Access Analyzer.
- Network connectivity from the Access Analyzer server to port 443 confirmed.
