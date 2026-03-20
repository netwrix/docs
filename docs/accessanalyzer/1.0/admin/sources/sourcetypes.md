---
title: "Source Types and Configuration"
description: "Available source types and their configuration parameters"
sidebar_position: 20
---

# Source Types and Configuration

Access Analyzer supports multiple source types, each targeting a different data environment. The source type determines the required connection parameters and the kinds of scans available.

## Available Source Types

| Source Type | Description | Supported Scans |
|---|---|---|
| **CIFS** | Windows file shares accessed via SMB/CIFS protocol | Access, Sensitive Data |
| **SharePoint** | Microsoft SharePoint Online or on-premises sites | Access, Sensitive Data |
| **Active Directory** | On-premises Active Directory domains | Access |
| **Entra ID** | Microsoft Entra ID (formerly Azure AD) tenants | Access |
| **Local Groups** | Local user and group membership on Windows servers | Access |

## Configuration Parameters

Each source type requires specific connection details:

- **CIFS** -- Server hostname or IP, share path, and port number.
- **SharePoint** -- Site URL, authentication method, and tenant ID.
- **Active Directory** -- Domain controller hostname, base DN, and LDAP port.
- **Entra ID** -- Tenant ID, client ID, and authentication secret or certificate.
- **Local Groups** -- Target server hostname or IP address.

All source types require an associated [service account](/docs/accessanalyzer/1_0/admin/serviceaccounts/overview) with appropriate credentials for the target environment.

:::note
Source type cannot be changed after creation. To switch types, delete the existing source and create a new one.
:::
