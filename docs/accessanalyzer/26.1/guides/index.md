---
title: Guides
description: One guide per platform, taking a new administrator from an empty install to the first populated dashboard or report.
---

Each guide covers one platform from start to finish: the service account, the source, the scans, the first run, and where the results appear. Follow a guide once, right after [installing Access Analyzer](../install/index.md). After that, the reference sections for [Sources](../sources/index.md), [Scans](../scans/index.md), and [Dashboards and reports](../dashboards-reports/index.md) cover the day-to-day detail.

Before you start, ensure you can sign in to Access Analyzer with the [Admin role](../settings/users.md).

| Guide | Source type label | Service account type | Scans you create | Where results appear |
|-------|-------------------|----------------------|------------------|----------------------|
| [Scan SMB file servers](./smb-file-servers.md) | **File Server** | **Username/password** | Access scan, then Sensitive data scan | Data security dashboard, File system reports |
| [Scan Active Directory](./active-directory.md) | **Active Directory** | **Username/password** | Identity sync | Active Directory dashboard, Active Directory identity reports |
| [Scan Entra ID](./entra-id.md) | **Entra ID** | **Client ID/secret** | Identity sync | Entra ID identity reports |
| [Scan Microsoft 365](./microsoft-365.md) | **SharePoint Online** | **Client ID/certificate** | Access scan, then Sensitive data scan | Data security dashboard, SharePoint reports |

The guides are independent, but they work best in pairs. File system permission reports show account and group names only after an Active Directory Identity sync has run for the domain, so follow the Active Directory guide alongside the SMB file servers guide. SharePoint permission reports expand group membership using the latest Entra ID Identity sync for the same tenant; without it, Access Analyzer calculates permissions from SharePoint data alone. Pair the Microsoft 365 guide with the Entra ID guide.
