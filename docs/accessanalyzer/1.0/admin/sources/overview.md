---
title: "Data Source Management"
description: "Adding and managing data sources"
sidebar_position: 10
---

# Data Source Management

Sources represent the target environments that Access Analyzer connects to for scanning. Sources are organized into **source groups** — named collections that share a service account and configuration. Administrators create, edit, test, and delete sources from the **Sources** section.

## Adding Sources

Sources are created through the **Connect Source** wizard, a 3-step guided workflow:

1. Navigate to **Sources** in the sidebar.
2. Click **Connect Source** to open the wizard drawer.
3. **Step 1** — Select the [source type](/docs/accessanalyzer/1_0/admin/sources/sourcetypes) (File Server, Active Directory, Entra ID, or SharePoint).
4. **Step 2** — Name the source group, assign a [service account](/docs/accessanalyzer/1_0/admin/serviceaccounts/overview), and add one or more sources.
5. **Step 3** — Configure scan types, scan options, and scheduling.
6. Click **Complete Setup** to create the source group, sources, and scans in one operation.

The wizard uses the `POST /v1/source-groups/setup` endpoint to create all resources atomically.

### Source Group Behavior by Type

| Source Type | Sources per Group | Notes |
| --- | --- | --- |
| **File Server** | Multiple | Add many servers with shared service account and domain |
| **Active Directory** | Multiple | Add multiple domain controllers |
| **Entra ID** | Single | One Azure AD tenant per group |
| **SharePoint Online** | Multiple | Add multiple site collections |

## Source List

The sources list displays all configured sources with their name, type, connection status, and associated service account. Use the data table controls to filter by type or search by name.

## Related Topics

- [Source Types and Configuration](/docs/accessanalyzer/1_0/admin/sources/sourcetypes)
- [Testing Connections](/docs/accessanalyzer/1_0/admin/sources/testconnections)
- [Editing and Deleting Sources](/docs/accessanalyzer/1_0/admin/sources/editdelete)
- [Source Groups](/docs/accessanalyzer/1_0/admin/sources/sourcegroups)
