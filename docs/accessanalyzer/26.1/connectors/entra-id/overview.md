---
title: "Entra ID"
description: "Requirements for connecting Access Analyzer to Microsoft Entra ID"
sidebar_position: 1
---

# Entra ID

Access Analyzer connects to Microsoft Entra ID using OAuth2 client credentials through a pre-configured Microsoft Entra ID application. It accesses Entra ID through Microsoft Graph to synchronize users, groups, role assignments, and Microsoft Information Protection (MIP) sensitivity labels.

Before adding Entra ID as a data source, you must register a dedicated Microsoft Entra ID application and grant it the required permissions.

## Scan types

| Scan type | Description |
| --- | --- |
| **Users, Groups, and Roles** | Synchronizes users, groups, and role assignments from the Entra ID tenant. The first scan runs in full; subsequent scans collect only changes since the last run. Also retrieves MIP sensitivity labels automatically when the scan runs. |

## Before you begin

You need the following before adding Entra ID as a data source:

- A user account with the **Global Administrator**, **Application Administrator**, or **Cloud Application Administrator** role in Microsoft Entra ID, to register an application and grant admin consent for permissions
- A registered Microsoft Entra ID application with the required API permissions — see [Entra Tenant Requirements](entra-requirements.md)
- A client secret generated for the registered application — see [Client Secret Configuration](app-registration-secret.md)

When configuring the Entra ID source in Access Analyzer, you need the following values from your registered application:

- **Application (client) ID**
- **Directory (tenant) ID**
- **Client secret value**

## Network requirements

| Protocol | Port | Destination |
| --- | --- | --- |
| HTTPS | 443 | Microsoft identity platform (`login.microsoftonline.com`) |
| HTTPS | 443 | Microsoft Graph API (`graph.microsoft.com`) |
