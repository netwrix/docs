# Enumeration & Lookup Values

This page documents all coded column values and lookup tables used in the FSAA DC schema. Views surface most of these codes as human-readable description columns, but the raw values appear in the underlying tables and are useful for writing direct queries or custom reports.

## TrusteeType {#trusteetype}

Used in `SA_FSAA_Trustees.TrusteeType` and `SA_FSAA_LocalTrustees.TrusteeType`. Identifies the class of security principal represented by a trustee row.

| Value | Name | Description |
|---|---|---|
| 0 | Unknown | Type couldn't be determined |
| 1 | SecurityPrincipal | Built-in / well-known security principal (e.g. `Everyone`) |
| 2 | LocalUser | Local user account |
| 3 | LocalGroup | Local group account |
| 4 | GlobalUser | Domain user account (shown as `Domain User` in views) |
| 5 | GlobalGroup | Domain group account (shown as `Domain Group` in views) |
| 6 | SharepointUser | SharePoint user |
| 7 | SharepointGroup | SharePoint group |
| 8 | Unsupported | Trustee type not supported |
| 9 | ServiceAccount | Service account |
| 10 | Computer | Computer account |
| 11 | GlobalTrustee | Cross-domain trustee |
| 20 | UnixUser | POSIX user |
| 21 | UnixGroup | POSIX group |

The `TrusteeTypeDescription` column in views covers values 0, 1, 2, 3, 4, 5, 8, 9, and 10. Values 6, 7, 11, 20, and 21 don't have a dedicated description string in the current view CASE expressions.

## ResourceType {#resourcetype}

Used in `SA_FSAA_Resources.ResourceType`. Identifies the kind of file-system object the resource row represents.

| Value | Name | View label | Description |
|---|---|---|---|
| 0 | Share | Share | SMB / Windows share root |
| 1 | NFSExport | Share | NFS export root |
| 2 | NetAppVolume | Folder | NetApp volume root |
| 3 | WinDir | Folder | Windows directory |
| 4 | WinFile | File | Windows file |
| 5 | UnixDir | Folder | Unix directory |
| 6 | UnixFile | File | Unix file |

Views map these values to three labels using the following logic:

```
CASE
  WHEN ResourceType IN (0, 1) THEN 'Share'
  WHEN ResourceType IN (2, 3, 5) THEN 'Folder'
  WHEN ResourceType IN (4, 6) THEN 'File'
END
```

## GateType {#gatetype}

Used in `SA_FSAA_Gates.GateType`. Identifies the protocol or mechanism the gate represents.

| Value | Description |
|---|---|
| 0 | SMB / Windows share gate |
| 1 | Windows Security Policy gate |
| 2 | NFS v3 export gate |

All five LSA policy types (Interactive, Batch, Service, Remote Interactive, Network logon) are stored under `GateType = 1`. The specific privilege type is tracked separately in `SA_FSAA_Policies`. These policy gates carry the LSA pseudo-trustee memberships used by `SA_FSAA_GetPolicyMembership` to expand principals such as `NT AUTHORITY\INTERACTIVE` and `NT AUTHORITY\SERVICE`.

## Rights Bitmask — AllowRights / DenyRights {#rights-bitmask}

The simplified six-bit FSAA rights model. Used in `SA_FSAA_Rights.AllowRights`, `DenyRights`, `DirectAllowRights`, `InheritedAllowRights`, `DirectDenyRights`, and `InheritedDenyRights`. Views surface these as the `AllowRightsDescription` / `DenyRightsDescription` text columns (e.g. `LRWDMA`).

| Bit | Hex / Decimal | Letter | Name |
|---|---|---|---|
| 0 | `0x01` (1) | R | Read |
| 1 | `0x02` (2) | W | Write |
| 2 | `0x04` (4) | D | Delete |
| 3 | `0x08` (8) | M | Manage |
| 4 | `0x10` (16) | A | Admin |
| 5 | `0x20` (32) | L | List |

The `AllowRightsDescription` string is built by appending each letter whose bit is set. For example, a value of `35` (`0x23` = L + R + W) produces `LRW`.

The full Windows access mask is stored separately in the `*Mask` columns. The following table shows the common mask values decoded by the `AllowMaskDescription` / `DenyMaskDescription` columns in `SA_FSAA_PermissionsView`, `SA_FSAA_DirectPermissionsView`, and `SA_FSAA_InheritedPermissionsView`:

| Mask (decimal) | Description |
|---|---|
| 0 | None |
| 2032127 | Full Control (allow) |
| 1245631 | Modify |
| 1179817 | Read & Execute (or "List folder contents" when `AllowRights = 32`) |
| 1179785 | Read |
| 1179926 | Write |
| 983551 | Full Control (deny) |
| 197055 | Modify (deny) |
| 1310720 | Change Permissions |
| 1572864 | Take Ownership |
| 1114112 | Delete |
| 1179648 | Read Permissions |

Additional special-permission decimal values are decoded by an extended `CASE` expression in the permission views; the listed values cover the most commonly encountered masks.
