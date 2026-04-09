---
title: "SharePoint Online"
description: "Requirements for connecting Access Analyzer to SharePoint Online"
sidebar_position: 1
---

# SharePoint Online

Access Analyzer connects to SharePoint Online using modern authentication, including support for multi-factor authentication (MFA). It authenticates through a pre-configured Microsoft Entra ID application and accesses SharePoint Online through Microsoft Graph and other modern APIs.

Before adding SharePoint Online as a data source, you must register a dedicated Microsoft Entra ID application and grant it the required permissions.

## Scan Types

Access Analyzer supports two scan types for SharePoint Online:

| Scan Type | Description | Authentication |
| --- | --- | --- |
| **Access scan** | Enumerates files, folders, and permissions to identify who has access to what | Client secret |
| **State-in-time scan** | Captures a permissions snapshot at a point in time for compliance and risk reporting | Certificate |

Both scan types use the same registered Entra ID application. The certificate is an additional credential required only for state-in-time scans.

## Before You Begin

You need the following before adding SharePoint Online as a data source:

- A user account with the **Global Administrator**, **Application Administrator**, or **Cloud Application Administrator** role in Microsoft Entra ID, to register an application and grant admin consent for permissions
- A registered Microsoft Entra ID application with the required API permissions — see [App Permissions in Entra](azure-permissions.md)
- A client secret generated for the registered application — see [Certificate Configuration](tenant-certificate-config.md)
- A certificate uploaded to the registered application (state-in-time scans only) — see [Certificate Configuration](tenant-certificate-config.md)

When configuring the SharePoint Online source in Access Analyzer, you will need the following values from your registered application:

- **Application (client) ID**
- **Directory (tenant) ID**
- **Client secret value**
