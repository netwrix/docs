---
description: >
  Explains how Netwrix Access Analyzer represents SharePoint permissions using the simplified 4-bit model (R, W, D, M). Includes definitions, value mapping, and examples of where the format appears in SPAA database views.
keywords:
  - SharePoint permissions
  - SPAA
  - Netwrix Access Analyzer
  - AllowRights
  - DenyRights
  - RWDM
  - SPBasePermissions
  - GenericRights
  - 4-bit model
  - effective permissions
products:
  - access-analyzer
sidebar_label: 'SharePoint Permissions Format Reference'
title: 'SharePoint Permissions Format Reference'
knowledge_article_id: ka0Qk000000G6cXIAS
---

# SharePoint Permissions Format Reference

## Related Queries

- "What does `AllowRights = 15` mean in SharePoint permissions?"
- "What does RWDM represent in SPAA?"
- "How are SharePoint permissions simplified in Netwrix Access Analyzer?"

## Overview

In Netwrix Access Analyzer (formerly Enterprise Auditor) for SharePoint Access Auditing (SPAA), the `AllowRights` and `DenyRights` columns use numeric values to represent simplified access rights. These values are based on SharePoint’s `SPBasePermissions` enumeration and mapped to a 4-bit model that includes **Read (R), Write (W), Delete (D), and Manage (M)**.

This article explains what those letters mean, how the bitmask values are calculated, and where they appear in the SPAA interface.

## Instructions

### Permission Letter Definitions

Each right corresponds to a specific bit value and represents a simplified category of SharePoint permissions:

| Letter | Name | Decimal Value | Description |
|--------|------|----------------|--------------|
| R | Read | 1 | View items, pages, versions, and user profile info |
| W | Write | 2 | Add or edit list items, documents, and web content |
| D | Delete | 4 | Delete items, past versions, or cancel checkouts |
| M | Manage | 8 | Approve items, manage lists, permissions, or alerts |

> **NOTE:** These letters are always ordered as **R-W-D-M**, and combined additively. A value of `0` (or empty string) means no permissions.

### Common Permission Values

| Decimal | String | Meaning |
|----------|---------|----------|
| 0 | (empty) | No rights granted |
| 1 | R | Read only |
| 3 | RW | Read + Write |
| 7 | RWD | Read + Write + Delete |
| 8 | M | Manage only |
| 9 | RM | Read + Manage |
| 15 | RWDM | Full rights (all four permissions) |

### How Rights Are Calculated

SPAA evaluates SharePoint’s full `SPBasePermissions` bitmask (a 64-bit `ulong` value) and translates it into the simplified 4-bit `GenericRights` model using internal logic like the following:

- If the base permissions include *any* rights associated with reading (e.g., `ViewListItems`, `Open`, `ViewVersions`), the **Read** bit is set.
- If write-related permissions are present (e.g., `AddListItems`, `EditListItems`, `ManageLists`), the **Write** bit is set.
- If deletion capabilities are found (e.g., `DeleteListItems`, `DeleteVersions`), the **Delete** bit is set.
- If *any* administration permissions are found (e.g., `ManagePermissions`, `ManageWeb`, `ApproveItems`), the **Manage** bit is set.

Each enabled bit is summed to produce a decimal value between 0 and 15.

### Where This Format Appears

The SPAA `RWDM` format is used in the following database views:

- `SA_SPAA_EffectiveAccessView`
- `SA_SPAA_PermissionsView`
- `SA_SPAA_DirectPermissionsView`
- `SA_SPAA_InheritedPermissionsView`

You may also see these supporting columns:

- `AllowRightsDescription`, `DenyRightsDescription` — Human-readable letter strings
- `AllowRead`, `AllowWrite`, `AllowDelete`, `AllowManage` — Boolean flags
- `AllowRights`, `DenyRights` — Raw numeric rights (0–15)

### Key Considerations

- **Deny takes precedence**: If a right exists in both Allow and Deny, access is denied.
- **Order is consistent**: Always shown as R-W-D-M.
