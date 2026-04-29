---
title: "Reports"
description: "Pre-built dashboard available for Entra ID source groups in Access Analyzer"
sidebar_position: 50
---

# Reports

After the first Entra ID scan completes, the **Entra ID Scan Summary** dashboard becomes available under **Dashboards**. Use the **Tenant** filter at the top of the dashboard to focus on a specific Entra ID tenant.

## Entra ID Scan Summary

The dashboard is organized into three sections: a summary row at the top, an **Identities** section, and a **MIP Labels** section.

### Summary row

| Card | Description |
|------|-------------|
| **Users** | Total number of user objects synced from the tenant. |
| **Groups** | Total number of group objects synced from the tenant. |
| **Roles** | Total number of Azure AD role definitions retrieved. |
| **MIP Labels** | Total number of Microsoft Information Protection sensitivity labels retrieved from the tenant. |

### Identities

| Card | Description |
|------|-------------|
| **Guest Users** | Number of user accounts with `userType = Guest`. |
| **MFA Configured** | Number of users with multi-factor authentication configured. |
| **Group Memberships** | Total number of direct group membership records. |
| **Role Assignments** | Total number of role assignment records (user or group assigned to a role). |

### MIP Labels

| Card | Description |
|------|-------------|
| **Active Labels** | Number of sensitivity labels currently active in the tenant. |
| **Label List** | Table listing all retrieved labels, including label name, classification level, and whether the label is active. |

:::note
MIP labels retrieved here are made available in **Configuration** > **Sensitive Data**, where you can map them to sensitive data types for use in File Server and SharePoint Online scans.
:::
