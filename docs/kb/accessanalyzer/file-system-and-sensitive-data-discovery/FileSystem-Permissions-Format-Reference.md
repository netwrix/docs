---
description: >
  Reference guide for interpreting the compact letter-based permission format used in Netwrix Access Analyzer FileSystem Access Auditing (FSAA). Includes definitions for each permission letter, example strings, related database views, and SQL logic details.
keywords:
  - filesystem permissions
  - FSAA
  - Netwrix Access Analyzer
  - allowrightsdescription
  - denyrightsdescription
  - L R W D M A
  - permission strings
  - SQL bitwise
  - effective permissions
  - access control
products:
  - access-analyzer
sidebar_label: 'FileSystem Permissions Format Reference'
title: 'FileSystem Permissions Format Reference'
knowledge_article_id: ka0Qk000000G6ZJIA0
---

# FileSystem Permissions Format Reference

## Related Queries

- "What does LRWDMA mean in FSAA?"
- "What does the 'A' permission stand for in Netwrix Access Analyzer?"
- "Why are there letters like L, R, W in permission strings?"

## Overview

The Netwrix Access Analyzer (formerly Enterprise Auditor) for FSAA (FileSystem Access Auditing) permission views include columns called `AllowRightsDescription` and `DenyRightsDescription`, which use a **compact letter-based format** to represent access rights to files and folders. This article explains what each letter means, how to read the permission strings, and where these codes are used.

## Instructions

### Permission Letter Definitions

Each letter in the permission string corresponds to a specific type of access:

| Letter | Name | Bit Value | Description |
|--------|------|------------|-------------|
| L | List | 32 (0x20) | List folder contents or traverse folder paths |
| R | Read | 1 (0x01) | Read data from files or list contents of a folder |
| W | Write | 2 (0x02) | Write data to files or create files and folders |
| D | Delete | 4 (0x04) | Delete files and folders |
| M | Manage | 8 (0x08) | Modify permissions or change ownership |
| A | Admin | 16 (0x10) | Full administrative control, including ownership rights |

> **NOTE:** Permission strings are formed by combining the letters in the order `L-R-W-D-M-A`. An empty string means no permissions are granted.

### Example Permission Strings

| String | Meaning |
|---------|----------|
| `LRWDMA` | Full Control |
| `LRWD` | Modify (no admin rights) |
| `LRW` | Standard user access |
| `LR` | Read-only access |
| `L` | Traverse only |
| `RW` | Read and write without list |
| `A` | Admin-only |
| `(empty)` | No permissions |

### Views That Use This Format

The letter-based permission format is used in the following database views:

- `SA_FSAA_ExpandedPermissionsView` — Includes both direct and inherited effective permissions.
- `SA_FSAA_DirectPermissionsView` — Directly assigned permissions only.
- `SA_FSAA_InheritedPermissionsView` — Permissions inherited from parent folders.
- `SA_FSAA_PermissionsView` — Combined view of direct and inherited permissions.
- `SA_FSAA_EffectiveAccessView` — Effective permissions on shared resources.

### Related Columns in Views

In addition to `AllowRightsDescription` and `DenyRightsDescription`, the permission views also include:

- Boolean columns: `AllowList`, `AllowRead`, `AllowWrite`, etc.
- Raw bitmask columns: `AllowRights`, `DenyRights`
- Windows-style descriptions: `AllowMaskDescription`, `DenyMaskDescription`

### Technical Details

The permission strings are generated using SQL bitwise logic. For example:

```sql
(CASE WHEN (p.AllowRights & 32) <> 0 THEN 'L' ELSE '' END) +
(CASE WHEN (p.AllowRights & 1) <> 0 THEN 'R' ELSE '' END) +
(CASE WHEN (p.AllowRights & 2) <> 0 THEN 'W' ELSE '' END) +
(CASE WHEN (p.AllowRights & 4) <> 0 THEN 'D' ELSE '' END) +
(CASE WHEN (p.AllowRights & 8) <> 0 THEN 'M' ELSE '' END) +
(CASE WHEN (p.AllowRights & 16) <> 0 THEN 'A' ELSE '' END) AS AllowRightsDescription
```

### Important Usage Notes

- **Deny overrides allow**: If both Allow and Deny include the same letter, the permission is denied.
- **Empty string means no rights**: No access is granted if the string is blank.
- **Always in order**: Letters appear in the standard order (`L-R-W-D-M-A`) when present.
- **Effective access**: Use the expanded view to see the final calculated result after inheritance is resolved.
