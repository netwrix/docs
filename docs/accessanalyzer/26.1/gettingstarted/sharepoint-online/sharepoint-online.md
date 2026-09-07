---
title: "SharePoint Online Scanning Overview"
description: "Overview of SharePoint Online scanning capabilities and prerequisites in Access Analyzer"
sidebar_position: 1
---

# SharePoint Online Scanning Overview

Access Analyzer scans SharePoint Online sites to map permissions, enumerate sharing links, and locate sensitive data across your tenant's document libraries and sites. It surfaces over-permissioned sites, anonymous and organization-wide sharing links, and files that contain sensitive content — giving security teams the information they need to reduce external exposure, enforce sharing policies, and meet cloud data governance requirements.

## Prerequisites

Before setting up a SharePoint Online source group, confirm that your environment meets the following requirements. The source group wizard connects to SharePoint Online over HTTPS using certificate-based authentication, so the Access Analyzer server must be able to reach the Microsoft identity platform, and you must configure an app registration in your tenant. The wizard generates the certificate — you'll need the application's Client ID before you begin.

### Service account

Access Analyzer uses a Client ID and Certificate service account to authenticate with SharePoint Online. You enter only the Client ID when creating the service account — Access Analyzer generates the certificate automatically during source group setup when you click **Generate and Download Certificate**. You then upload the certificate to your registered Entra ID application before you can test the connection.

See [Client ID/Certificate service account](../../configurations/service-accounts/client-id-certificate.md) to create the service account and [SharePoint Online Connector Requirements](../../connectors/sharepoint-online/overview.md) for instructions on registering the application.

### Network requirements

| Protocol | Port | Destination |
| --- | --- | --- |
| HTTPS | 443 | Microsoft identity platform (`login.microsoftonline.com`) |
| HTTPS | 443 | Microsoft Graph API (`graph.microsoft.com`) |
| HTTPS | 443 | SharePoint Online (`<yourtenant>.sharepoint.com`) |

### Before you begin

- A registered application in your Entra ID tenant.
- The application's **Tenant ID** and **Client ID**.
- A Client ID and Certificate service account created in Access Analyzer.
- Network connectivity from the Access Analyzer server to port 443 confirmed.

:::note
Access Analyzer reads Microsoft Information Protection (MIP) sensitivity labels on SharePoint Online files during Sensitive Data scans. It collects the labels and surfaces them in scan results, and it makes no changes to labels on any scanned file.
:::

:::note
**Sensitive Data scans require a completed Access scan.** The Access scan builds the site and document library inventory that the Sensitive Data scan uses. Run the Access scan first, then enable Sensitive Data on a subsequent scan. Enabling both on the very first scan is supported but will extend the initial scan duration.
:::
