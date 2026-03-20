---
title: "Viewing Identities and Entitlements"
description: "Browsing synced users and their permissions"
sidebar_position: 30
---

# Viewing Identities and Entitlements

After identity synchronization completes, administrators and viewers can browse the unified identity directory and review entitlements across all scanned sources.

## Identity List

Navigate to **IAM** > **Identities** to view all synced identities. The table displays:

| Column | Description |
|---|---|
| **Display Name** | The user or group name |
| **Type** | User or Group |
| **Provider** | Source directory (Active Directory, Entra ID, Local Groups) |
| **Email** | Associated email address, if available |
| **Group Count** | Number of groups the identity belongs to |
| **Last Synced** | Timestamp of the most recent sync |

Use the filter controls to narrow results by provider, type, or keyword search.

## Entitlement Details

Click an identity to open the detail view, which includes:

- **Group Memberships** -- All groups the identity belongs to, including nested group membership.
- **Resource Access** -- A list of sources and resources the identity can access, with the effective permission level.
- **Permission Paths** -- Links to the [Permission Path Analysis](/docs/accessanalyzer/1_0/admin/iam/permissionpaths) for each access entry, showing how the permission was granted.

## Cross-Provider Correlation

When the same user exists in multiple directories, Access Analyzer correlates these identities and displays a unified view. Correlated accounts are indicated with a badge showing the linked providers.
