---
title: "Entra ID Scanning Overview"
description: "Overview of Entra ID scanning capabilities and prerequisites in Access Analyzer"
sidebar_position: 1
---

# Entra ID Scanning Overview

Access Analyzer connects to Microsoft Entra ID to synchronize Microsoft Information Protection (MIP) sensitivity labels from your tenant. These labels — assigned through Microsoft Purview — are applied to files on Windows file servers and appear alongside Access Analyzer's own sensitive data findings. Integrating MIP labels gives you a unified view of sensitive data classification that spans both Access Analyzer's built-in classifiers and your organization's custom Purview sensitivity taxonomy.

## Prerequisites

Before setting up an Entra ID source group, confirm that your environment meets the requirements below. The source group wizard connects to Microsoft Entra ID over HTTPS using a registered application's client credentials, so the Access Analyzer server must be able to reach the Microsoft identity platform and an app registration must be configured in your tenant with the required API permissions.

### Service Account

Access Analyzer uses a Client ID and Secret service account to authenticate with Microsoft Entra ID via the Microsoft Graph API. This requires a registered application in your Entra ID tenant with the appropriate API permissions granted and a client secret generated for that application.

See [Client ID/Secret service account](../../configurations/service-accounts/client-id-secret.md) to create the service account and [Entra ID Requirements](../../connectors/entra-id/overview.md) for instructions on registering the application and granting the required permissions.

### Network Requirements

| Protocol | Port | Destination |
| --- | --- | --- |
| HTTPS | 443 | Microsoft identity platform (`login.microsoftonline.com`) |
| HTTPS | 443 | Microsoft Graph API (`graph.microsoft.com`) |

### Before You Begin

- A registered application in your Entra ID tenant with the required API permissions granted, including `InformationProtectionPolicy.Read.All` for MIP label retrieval.
- The application's **Tenant ID** and **Client ID**.
- A client secret generated for the application.
- A Client ID and Secret service account created in Access Analyzer.
- Network connectivity from the Access Analyzer server to port 443 confirmed.
