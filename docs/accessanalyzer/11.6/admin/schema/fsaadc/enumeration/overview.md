# Enumeration & Lookup Values Reference

This section documents the possible values stored in coded columns used throughout the FSAA DC schema. These values appear in core data tables, and views decode them into human-readable labels.

---

## TrusteeType

Referenced by `SA_FSAA_Trustees.TrusteeType` and `SA_FSAA_LocalTrustees.TrusteeType`.

| Value | Name | Description |
|---|---|---|
| 0 | Unknown | Type couldn't be determined |
| 1 | SecurityPrincipal | Built-in / well-known security principal (for example, `Everyone`) |
| 2 | LocalUser | Local user account |
| 3 | LocalGroup | Local group account |
| 4 | GlobalUser | Domain user account ("Domain User" in views) |
| 5 | GlobalGroup | Domain group account ("Domain Group" in views) |
| 6 | SharepointUser | SharePoint user |
| 7 | SharepointGroup | SharePoint group |
| 8 | Unsupported | Trustee type not supported |
| 9 | ServiceAccount | Service account |
| 10 | Computer | Computer account |
| 11 | GlobalTrustee | Cross-domain trustee |
| 20 | UnixUser | POSIX user |
| 21 | UnixGroup | POSIX group |

:::note
The descriptive labels emitted by views (`SA_FSAA_PermissionsView.TrusteeTypeDescription`, etc.) cover values 0, 1, 2, 3, 4, 5, 8, 9, and 10 only.
:::

---

## ResourceType

Referenced by `SA_FSAA_Resources.ResourceType`.

| Value | Name | View label | Description |
|---|---|---|---|
| 0 | Share | Share | SMB / Windows share root |
| 1 | NFSExport | Share | NFS export root |
| 2 | NetAppVolume | Folder | NetApp volume root |
| 3 | WinDir | Folder | Windows directory |
| 4 | WinFile | File | Windows file |
| 5 | UnixDir | Folder | Unix directory |
| 6 | UnixFile | File | Unix file |

Views map these to three labels using `CASE WHEN r.ResourceType IN (0,1) THEN 'Share' WHEN r.ResourceType IN (2,3,5) THEN 'Folder' WHEN r.ResourceType IN (4,6) THEN 'File' END`.

---

## GateType

Referenced by `SA_FSAA_Gates.GateType`.

| Value | Description |
|---|---|
| 0 | SMB share gate |
| 1 | Policy gate (LSA logon-right pseudo-trustee container — `INTERACTIVE`, `BATCH`, `SERVICE`, `TERMINAL SERVER USER`, etc.) |
| 2 | NFS export gate |

Share gates (`0`/`2`) carry NTFS / share permissions and are reachable via `SA_FSAA_GatesProxy`. Policy gates (`1`) are produced by the local-policy enumerator: they have no `ShareID` or `FolderID`, and their members are stored in `SA_FSAA_Policies` and resolved at query time by `SA_FSAA_GetPolicyMembership`. Views that surface share traversal label any non-zero `GateType` as `'NFS'` for legacy compatibility (`CASE WHEN g.GateType = 0 THEN 'SMB' ELSE 'NFS' END`); policy gates are normally filtered out by the `r.GatesProxyID IS NOT NULL` predicate before reaching that CASE.

---

## Rights Bitmask

The simplified six-bit FSAA rights model. Used in `SA_FSAA_Rights.AllowRights`, `DenyRights`, `DirectAllowRights`, `InheritedAllowRights`, `DirectDenyRights`, `InheritedDenyRights` and surfaced in views as the `AllowRightsDescription` / `DenyRightsDescription` text columns (for example, `LRWDMA`).

| Bit | Hex / Decimal | Letter | Name |
|---|---|---|---|
| 0 | `0x01` (1) | R | Read |
| 1 | `0x02` (2) | W | Write |
| 2 | `0x04` (4) | D | Delete |
| 3 | `0x08` (8) | M | Manage |
| 4 | `0x10` (16) | A | Admin |
| 5 | `0x20` (32) | L | List |

The corresponding Windows mask values are stored separately in the `*Mask` columns. Common mappings used by `SA_FSAA_PermissionsView.AllowMaskDescription`:

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

:::note
The `CASE` expression in `SA_FSAA_PermissionsView` / `SA_FSAA_DirectPermissionsView` / `SA_FSAA_InheritedPermissionsView` decodes many additional special-permission decimal values.
:::
