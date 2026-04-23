---
title: "Scanning options"
description: "Available scan types for Entra ID source groups"
sidebar_position: 2
---

# Scanning options

| Scan type | Description |
| --- | --- |
| **Users, Groups, and Roles** | Synchronizes users, groups, and role assignments from the Entra ID tenant. The first scan runs in full; subsequent scans collect only changes since the last run. MIP sensitivity labels are retrieved automatically as part of every scan. |

## MIP label retrieval

When an Entra ID source group runs, Access Analyzer automatically retrieves Microsoft Information Protection (MIP) sensitivity labels defined in the tenant. These labels are made available in the **Configuration** > **Sensitive Data** page, where you can map them to sensitive data types for use in file server and SharePoint Online scans.

There are no per-source-group configuration options for MIP label retrieval — it runs automatically as part of every scan. To configure how labels are applied to files, see [Sensitive Data Configuration](../../configurations/sensitive-data.md).
