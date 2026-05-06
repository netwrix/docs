# Views

FSAA, FSAC, and FSDLP views provide pre-joined, human-readable projections of the underlying tables. Reports and the FSAA web UI consume these views rather than the raw tables.

:::note
For views, column sizes are derived from the underlying source columns and the SQL `CASE` expressions in the view definitions; on a populated database the actual `sys.columns.max_length` may differ slightly. Use `EXEC sp_help '<viewname>'` to inspect a view's exact runtime shape.
:::

---

## FSAA Views

### SA_FSAA_Paths {#sa_fsaa_paths}

**Description:** Per-resource path projection. This is a real `CREATE VIEW` that wraps the `SA_FSAA_GetPath` UDF — every read recomputes the path by walking the parent chain in `SA_FSAA_Resources`. (The create-schema script issues a defensive `DROP TABLE` first to clean up any legacy table-form from older builds.)

**Source:** `SA_FSAA_Resources` (parent-chain walk performed by `SA_FSAA_GetPath` UDF).

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HOST | int | | No | SA_FSAA_Resources.HOST | Host partition |
| ResourceID | bigint | | No | SA_FSAA_Resources.ID | Resource |
| Path | nvarchar | 4000 | Yes | Computed (recursive concat of `SA_FSAA_Resources.Name` up the parent chain) | Full path string |

---

### SA_FSAA_ResourcesView {#sa_fsaa_resourcesview}

**Description:** Surface view of `SA_FSAA_Resources` enriched with computed full path, resource-type description, and three boolean flags (`PermissionChange`, `InheritedPermission`, `DirectPermission`).

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`.

**Logic:** Outer-joins `SA_FSAA_Resources` with `SA_FSAA_Hosts`. The three permission booleans are computed via correlated `EXISTS` against `SA_FSAA_Rights`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_Resources.HOST | Host ID |
| HostName | nvarchar | 64 | No | SA_FSAA_Hosts.HOST | Host name |
| ID | bigint | | No | SA_FSAA_Resources.ID | Resource ID |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | Parent resource |
| Name | nvarchar | 2000 | No | SA_FSAA_Resources.Name | Leaf name |
| Path | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | Full path |
| ResourceType | tinyint | | No | SA_FSAA_Resources.ResourceType | See [ResourceType](../enumeration/overview.md#resourcetype) |
| ResourceTypeDescription | varchar | 6 | Yes | Computed (CASE) | `Share`, `Folder`, or `File` |
| OwnerID | int | | Yes | SA_FSAA_Resources.OwnerID | |
| RightsProxyID | int | | Yes | SA_FSAA_Resources.RightsProxyID | |
| GatesProxyID | bigint | | Yes | SA_FSAA_Resources.GatesProxyID | |
| NestedLevel | int | | No | SA_FSAA_Resources.NestedLevel | |
| Size | bigint | | Yes | SA_FSAA_Resources.Size | |
| LastModified | datetime | | Yes | SA_FSAA_Resources.LastModified | |
| LastAccessed | datetime | | Yes | SA_FSAA_Resources.LastAccessed | |
| Created | datetime | | Yes | SA_FSAA_Resources.Created | |
| USN | int | | No | SA_FSAA_Resources.USN | |
| DeletedUSN | int | | Yes | SA_FSAA_Resources.DeletedUSN | |
| PermissionChange | bit | | No | Computed (CASE / EXISTS) | True if ACL differs from parent |
| InheritedPermission | bit | | No | Computed (CASE / EXISTS) | True if any inherited rights exist |
| DirectPermission | bit | | No | Computed (CASE / EXISTS) | True if any direct rights exist |

---

### SA_FSAA_PermissionsView {#sa_fsaa_permissionsview}

**Description:** Resource × ACE flat view with effective allow/deny rights expanded into 12 boolean columns plus textual `Allow/DenyRightsDescription` (for example, `LRWDMA`) and a `RightsSource` column (`Direct` / `Inherited` / `Both` / `None`).

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`.

**Filter:** `r.RightsProxyID IS NOT NULL` (rows that have an ACL).

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_Resources.HOST | Host partition |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | Host name |
| ResourceID | bigint | | No | SA_FSAA_Resources.ID | Resource |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | Parent resource |
| ResourceDeletedUSN | int | | Yes | SA_FSAA_Resources.DeletedUSN | NULL if not deleted |
| ResourcePath | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | Full resource path |
| ResourceType | tinyint | | No | SA_FSAA_Resources.ResourceType | See [ResourceType](../enumeration/overview.md#resourcetype) |
| ResourceTypeDescription | varchar | 6 | Yes | Computed (CASE) | `Share` / `Folder` / `File` |
| AllowRights | smallint | | Yes | SA_FSAA_Rights.AllowRights | Combined bitmask |
| DenyRights | smallint | | Yes | SA_FSAA_Rights.DenyRights | Combined bitmask |
| AllowList | bit | | Yes | Computed (`AllowRights & 32`) | Has list right |
| AllowRead | bit | | Yes | Computed (`AllowRights & 1`) | Has read right |
| AllowWrite | bit | | Yes | Computed (`AllowRights & 2`) | Has write right |
| AllowDelete | bit | | Yes | Computed (`AllowRights & 4`) | Has delete right |
| AllowManage | bit | | Yes | Computed (`AllowRights & 8`) | Has manage right |
| AllowAdmin | bit | | Yes | Computed (`AllowRights & 16`) | Has admin right |
| DenyList | bit | | Yes | Computed (`DenyRights & 32`) | Deny list right |
| DenyRead | bit | | Yes | Computed (`DenyRights & 1`) | Deny read right |
| DenyWrite | bit | | Yes | Computed (`DenyRights & 2`) | Deny write right |
| DenyDelete | bit | | Yes | Computed (`DenyRights & 4`) | Deny delete right |
| DenyManage | bit | | Yes | Computed (`DenyRights & 8`) | Deny manage right |
| DenyAdmin | bit | | Yes | Computed (`DenyRights & 16`) | Deny admin right |
| AllowRightsDescription | varchar | 6 | Yes | Computed (concat letters L/R/W/D/M/A) | For example, `LRW` |
| DenyRightsDescription | varchar | 6 | Yes | Computed (concat letters L/R/W/D/M/A) | For example, `D` |
| RightsSource | varchar | 9 | Yes | Computed (CASE on Direct/Inherited columns) | `Both` / `Inherited` / `Direct` / `None` |
| AllowMask | int | | Yes | SA_FSAA_Rights.AllowMask | Full Windows access mask |
| DenyMask | int | | Yes | SA_FSAA_Rights.DenyMask | Full Windows deny mask |
| AllowMaskDescription | varchar | 32 | Yes | Computed (CASE) | `Full Control` / `Modify` / `Read & Execute` / etc. |
| DenyMaskDescription | varchar | 32 | Yes | Computed (CASE) | Same vocabulary as `AllowMaskDescription` |
| TrusteeID | int | | Yes | SA_FSAA_Rights.TrusteeID | |
| TrusteeSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID | |
| TrusteeType | smallint | | Yes | UDF column (TrusteeType) | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| TrusteeIsHistoricalSID | bit | | Yes | UDF column | True if SID came from SID History |
| TrusteePrincipalID | int | | Yes | UDF column | AD-Inventory principal ID |
| TrusteeTypeDescription | varchar | 18 | Yes | Computed (CASE) | For example, `Domain User` |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF column | |
| TrusteeDomain | nvarchar | 128 | Yes | UDF column | NT domain |
| TrusteeNTName | nvarchar | 256 | Yes | UDF column | SAM account name |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed (`Domain\Name`) | Concatenated NT-style name |

---

### SA_FSAA_ExpandedPermissionsView {#sa_fsaa_expandedpermissionsview}

**Description:** Resource × *expanded* effective trustee — group memberships are recursively expanded and the view returns one row per `(resource, leaf trustee)` instead of one per `(resource, ACE)`. Uses `CROSS APPLY dbo.SA_FSAA_GetExpandedPermissions(r.HOST, r.ID, 0, DEFAULT)` to do the expansion.

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, UDF `SA_FSAA_GetExpandedPermissions`.

**Filter:** `r.RightsProxyID IS NOT NULL`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_Resources.HOST | Host partition |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | Host name |
| ResourceID | bigint | | No | SA_FSAA_Resources.ID | Resource |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | Parent resource |
| ResourceDeletedUSN | int | | Yes | SA_FSAA_Resources.DeletedUSN | |
| ResourcePath | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | Full path |
| ResourceType | tinyint | | No | SA_FSAA_Resources.ResourceType | See [ResourceType](../enumeration/overview.md#resourcetype) |
| ResourceTypeDescription | varchar | 6 | Yes | Computed (CASE) | `Share` / `Folder` / `File` |
| AllowRights | smallint | | No | UDF column | Effective allow bitmask after group expansion |
| DenyRights | smallint | | No | UDF column | Effective deny bitmask |
| AllowList ... AllowAdmin | bit | | Yes | Computed (`AllowRights & N`) | Six boolean columns (bits 32, 1, 2, 4, 8, 16) |
| DenyList ... DenyAdmin | bit | | Yes | Computed (`DenyRights & N`) | Six boolean columns |
| AllowRightsDescription | varchar | 6 | Yes | Computed | Letter form `LRWDMA` |
| DenyRightsDescription | varchar | 6 | Yes | Computed | |
| TrusteeSID | varchar | 184 | Yes | UDF column | Leaf-trustee SID |
| TrusteeType | smallint | | Yes | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| TrusteeTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF column | |
| TrusteeDomain | nvarchar | 128 | Yes | UDF column | |
| TrusteeNTName | nvarchar | 256 | Yes | UDF column | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed (`Domain\Name`) | |

---

### SA_FSAA_DirectPermissionsView {#sa_fsaa_directpermissionsview}

**Description:** Same shape as `SA_FSAA_PermissionsView` but filtered to direct (non-inherited) ACEs only. Uses `p.DirectAllowRights` / `p.DirectDenyRights` / `p.DirectAllowMask` / `p.DirectDenyMask` instead of the combined columns; the column names in the output are still `AllowRights`, `DenyRights`, `AllowMask`, `DenyMask`.

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`.

**Filter:** `r.RightsProxyID IS NOT NULL AND ((p.DirectAllowRights <> 0) OR (p.DirectDenyRights <> 0) OR (p.DirectAllowMask <> 0) OR (p.DirectDenyMask <> 0))`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_Resources.HOST | |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | |
| ResourceID | bigint | | No | SA_FSAA_Resources.ID | |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | |
| ResourceDeletedUSN | int | | Yes | SA_FSAA_Resources.DeletedUSN | |
| ResourcePath | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath / fallback `r.Name` | |
| ResourceType | tinyint | | No | SA_FSAA_Resources.ResourceType | |
| ResourceTypeDescription | varchar | 6 | Yes | Computed (CASE) | |
| AllowRights | smallint | | Yes | SA_FSAA_Rights.DirectAllowRights | |
| DenyRights | smallint | | Yes | SA_FSAA_Rights.DirectDenyRights | |
| AllowList ... AllowAdmin | bit | | Yes | Computed | Six bit columns |
| DenyList ... DenyAdmin | bit | | Yes | Computed | Six bit columns |
| AllowRightsDescription | varchar | 6 | Yes | Computed | `LRWDMA`-style |
| DenyRightsDescription | varchar | 6 | Yes | Computed | |
| AllowMask | int | | Yes | SA_FSAA_Rights.DirectAllowMask | |
| DenyMask | int | | Yes | SA_FSAA_Rights.DirectDenyMask | |
| AllowMaskDescription | varchar | 32 | Yes | Computed (CASE) | |
| DenyMaskDescription | varchar | 32 | Yes | Computed (CASE) | |
| TrusteeID | int | | Yes | SA_FSAA_Rights.TrusteeID | |
| TrusteeSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID | |
| TrusteeType | smallint | | Yes | UDF column | |
| TrusteeIsHistoricalSID | bit | | Yes | UDF column | |
| TrusteePrincipalID | int | | Yes | UDF column | |
| TrusteeTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF column | |
| TrusteeDomain | nvarchar | 128 | Yes | UDF column | |
| TrusteeNTName | nvarchar | 256 | Yes | UDF column | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed | |

---

### SA_FSAA_InheritedPermissionsView {#sa_fsaa_inheritedpermissionsview}

**Description:** Same shape as `SA_FSAA_DirectPermissionsView` but reads from the `Inherited*` rights/mask columns. The output column names (`AllowRights`, `DenyRights`, `AllowMask`, `DenyMask`) are identical to `SA_FSAA_DirectPermissionsView`; only the underlying `SA_FSAA_Rights` source columns change.

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`.

**Filter:** `r.RightsProxyID IS NOT NULL AND ((p.InheritedAllowRights <> 0) OR (p.InheritedDenyRights <> 0) OR (p.InheritedAllowMask <> 0) OR (p.InheritedDenyMask <> 0))`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_Resources.HOST | |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | |
| ResourceID | bigint | | No | SA_FSAA_Resources.ID | |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | |
| ResourceDeletedUSN | int | | Yes | SA_FSAA_Resources.DeletedUSN | |
| ResourcePath | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath / fallback `r.Name` | |
| ResourceType | tinyint | | No | SA_FSAA_Resources.ResourceType | |
| ResourceTypeDescription | varchar | 6 | Yes | Computed (CASE) | |
| AllowRights | smallint | | Yes | SA_FSAA_Rights.InheritedAllowRights | |
| DenyRights | smallint | | Yes | SA_FSAA_Rights.InheritedDenyRights | |
| AllowList ... AllowAdmin | bit | | Yes | Computed | Six bit columns |
| DenyList ... DenyAdmin | bit | | Yes | Computed | Six bit columns |
| AllowRightsDescription | varchar | 6 | Yes | Computed | `LRWDMA`-style |
| DenyRightsDescription | varchar | 6 | Yes | Computed | |
| AllowMask | int | | Yes | SA_FSAA_Rights.InheritedAllowMask | |
| DenyMask | int | | Yes | SA_FSAA_Rights.InheritedDenyMask | |
| AllowMaskDescription | varchar | 32 | Yes | Computed (CASE) | |
| DenyMaskDescription | varchar | 32 | Yes | Computed (CASE) | |
| TrusteeID | int | | Yes | SA_FSAA_Rights.TrusteeID | |
| TrusteeSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID | |
| TrusteeType | smallint | | Yes | UDF column | |
| TrusteeIsHistoricalSID | bit | | Yes | UDF column | |
| TrusteePrincipalID | int | | Yes | UDF column | |
| TrusteeTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF column | |
| TrusteeDomain | nvarchar | 128 | Yes | UDF column | |
| TrusteeNTName | nvarchar | 256 | Yes | UDF column | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed | |

---

### SA_FSAA_SharesTraversalView {#sa_fsaa_sharestraversalview}

**Description:** For every resource reachable through a gate, returns the gate, the resource, the share-relative resource path, and the SMB / NFS UNC path.

**Source tables:** `SA_FSAA_Hosts`, `SA_FSAA_Gates`, `SA_FSAA_GatesProxy`, `SA_FSAA_Resources`, `SA_FSAA_Paths`.

**Filter:** `r.GatesProxyID IS NOT NULL`.

**Network-path logic:** if `g.GateType = 2` (NFS), builds `host:share//rel-path` where the relative path is `SUBSTRING(y.Path, LEN(g.DisplayName) + 2, 2048)`; otherwise builds `\\host\share\rel-path` by trimming the gate's local path off `y.Path` (`SUBSTRING(y.Path, LEN(g.Path), 2048)`).

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_Hosts.ID | |
| HostName | nvarchar | 64 | No | SA_FSAA_Hosts.HOST | |
| GateID | int | | Yes | SA_FSAA_Gates.ID | |
| GateType | int | | Yes | SA_FSAA_Gates.GateType | See [GateType](../enumeration/overview.md#gatetype) |
| GateTypeDescription | varchar | 3 | Yes | Computed (CASE) | `'SMB'` when `GateType = 0`, otherwise `'NFS'` (any non-zero `GateType`) |
| GateDeletedUSN | int | | Yes | SA_FSAA_Gates.DeletedUSN | |
| ShareID | bigint | | Yes | SA_FSAA_Gates.ShareID | |
| ShareName | nvarchar | 256 | Yes | SA_FSAA_Gates.DisplayName | |
| ResourceID | bigint | | Yes | SA_FSAA_Resources.ID | |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | |
| ResourceType | tinyint | | Yes | SA_FSAA_Resources.ResourceType | |
| ResourceTypeDescription | varchar | 6 | Yes | Computed (CASE) | |
| ResourceDeletedUSN | int | | Yes | SA_FSAA_Resources.DeletedUSN | |
| ResourcePath | nvarchar | 4000 | Yes | SA_FSAA_Paths.Path | Local resource path |
| NetworkPath | nvarchar | 4000 | Yes | Computed (see logic above) | UNC path or NFS-style path |
| NestedLevel | int | | Yes | Computed (`r.NestedLevel - g.NestedLevel`) | Depth from share root |

---

### SA_FSAA_EffectiveAccessView {#sa_fsaa_effectiveaccessview}

**Description:** Like `SA_FSAA_SharesTraversalView` but additionally resolves each row through `SA_FSAA_GetEffectiveRights` to attribute the effective allow/deny rights to each leaf trustee. Used to answer "who can do what on this resource through this share?"

**Source tables:** `SA_FSAA_SharesTraversalView`, UDF `SA_FSAA_GetEffectiveRights`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_SharesTraversalView.HostID | |
| HostName | nvarchar | 64 | Yes | SA_FSAA_SharesTraversalView.HostName | |
| GateID | int | | Yes | SA_FSAA_SharesTraversalView.GateID | |
| ShareID | bigint | | Yes | SA_FSAA_SharesTraversalView.ShareID | |
| ResourceID | bigint | | Yes | SA_FSAA_SharesTraversalView.ResourceID | |
| ShareName | nvarchar | 256 | Yes | SA_FSAA_SharesTraversalView.ShareName | |
| NestedLevel | int | | Yes | SA_FSAA_SharesTraversalView.NestedLevel | |
| ResourcePath | nvarchar | 4000 | Yes | SA_FSAA_SharesTraversalView.ResourcePath | |
| NetworkPath | nvarchar | 4000 | Yes | SA_FSAA_SharesTraversalView.NetworkPath | |
| ResourceType | tinyint | | Yes | SA_FSAA_SharesTraversalView.ResourceType | |
| ResourceTypeDescription | varchar | 6 | Yes | SA_FSAA_SharesTraversalView.ResourceTypeDescription | |
| ResourceDeletedUSN | int | | Yes | SA_FSAA_SharesTraversalView.ResourceDeletedUSN | |
| GateDeletedUSN | int | | Yes | SA_FSAA_SharesTraversalView.GateDeletedUSN | |
| AllowRights | smallint | | No | UDF column | Effective allow bitmask |
| DenyRights | smallint | | No | UDF column | Effective deny bitmask |
| DirectTrustee | bit | | Yes | UDF column | True if rights come from a direct ACE rather than group expansion |
| AllowList ... AllowAdmin | bit | | Yes | Computed | Six bit columns |
| DenyList ... DenyAdmin | bit | | Yes | Computed | Six bit columns |
| AllowRightsDescription | varchar | 6 | Yes | Computed | |
| DenyRightsDescription | varchar | 6 | Yes | Computed | |
| TrusteeSID | varchar | 184 | Yes | UDF column | |
| TrusteeType | smallint | | Yes | UDF column | |
| TrusteeTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF column | |
| TrusteeDomain | nvarchar | 128 | Yes | UDF column | |
| TrusteeNTName | nvarchar | 256 | Yes | UDF column | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed | |

---

### SA_FSAA_LocalGroupMembersView {#sa_fsaa_localgroupmembersview}

**Description:** Flat view of local-group memberships derived from `SA_FSAA_TrusteeEquivalence`. One row per `(group, member)` pair on a host, with both group and member identity columns expanded via `SA_FSAA_GetTrusteeInformation`.

**Source tables:** `SA_FSAA_TrusteeEquivalence`, `SA_FSAA_Hosts`, UDF `SA_FSAA_GetTrusteeInformation` (called twice — once for the group, once for the member).

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_TrusteeEquivalence.HOST | |
| HostName | nvarchar | 64 | No | SA_FSAA_Hosts.HOST | |
| GroupTrusteeID | int | | No | SA_FSAA_TrusteeEquivalence.EquivalentTrusteeID | |
| GroupSID | varchar | 184 | Yes | UDF column (group) | |
| GroupDisplayName | nvarchar | 256 | Yes | UDF column (group) | |
| GroupDomain | nvarchar | 128 | Yes | UDF column (group) | |
| GroupNTName | nvarchar | 256 | Yes | UDF column (group) | |
| GroupNTStyleName | nvarchar | 385 | Yes | Computed (`Domain\Name`) | |
| MemberTrusteeID | int | | No | SA_FSAA_TrusteeEquivalence.TrusteeID | |
| MemberSID | varchar | 184 | Yes | UDF column (member) | |
| MemberDomain | nvarchar | 128 | Yes | UDF column (member) | |
| MemberNTName | nvarchar | 256 | Yes | UDF column (member) | |
| MemberDisplayName | nvarchar | 256 | Yes | UDF column (member) | |
| MemberNTStyleName | nvarchar | 385 | Yes | Computed (`Domain\Name`) | |
| MemberType | smallint | | Yes | UDF column (member) | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| MemberTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| MemberPrincipalID | int | | Yes | UDF column (member) | AD-Inventory principal ID |

---

### SA_FSAA_ExceptionsView {#sa_fsaa_exceptionsview}

**Description:** `SA_FSAA_Exceptions` joined with the type catalog and with both `TrusteeID` and `SourceTrusteeID` resolved to display names.

**Source tables:** `SA_FSAA_Exceptions`, `SA_FSAA_ExceptionTypes`, `SA_FSAA_Trustees` (twice — once for each trustee column), `SA_FSAA_Hosts`, `SA_FSAA_Resources`, `SA_FSAA_Gates`, UDF `SA_FSAA_GetTrusteeInformationEx`.

**Path logic:** if both `ResourceID` and `GateID` are present, returns a UNC-style path `\\host\share<resource-path>`; if only `ResourceID`, returns the bare resource path from `SA_FSAA_GetPath`; otherwise NULL.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAA_Exceptions.HOST | |
| HostName | nvarchar | 64 | No | SA_FSAA_Hosts.HOST | |
| ExceptionType | int | | No | SA_FSAA_Exceptions.ExceptionType | |
| ParentType | int | | Yes | SA_FSAA_ExceptionTypes.ParentType | Hierarchical parent type |
| ExceptionName | varchar | 128 | No | SA_FSAA_ExceptionTypes.Name | |
| GateID | int | | Yes | SA_FSAA_Exceptions.GateID | |
| ResourceID | bigint | | Yes | SA_FSAA_Exceptions.ResourceID | |
| Path | nvarchar | 4000 | Yes | Computed (see logic above) | UNC path / resource path / NULL |
| TrusteeID | int | | Yes | SA_FSAA_Exceptions.TrusteeID | |
| TrusteeSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID | |
| TrusteeType | smallint | | Yes | SA_FSAA_Trustees.TrusteeType | |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF column | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed | |
| TrusteePrincipalID | int | | Yes | UDF column | |
| SourceTrusteeID | int | | Yes | SA_FSAA_Exceptions.SourceTrusteeID | |
| SourceTrusteeSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID (second join) | |
| SourceTrusteeType | smallint | | Yes | SA_FSAA_Trustees.TrusteeType (second join) | |
| SourceTrusteeDisplayName | nvarchar | 256 | Yes | UDF column | |
| SourceTrusteeNTStyleName | nvarchar | 385 | Yes | Computed | |
| SourceTrusteePrincipalID | int | | Yes | UDF column | |

---

## Activity Views (SA_FSAC_*) {#activity-views-sa_fsac_}

### SA_FSAC_DailyActivityView {#sa_fsac_dailyactivityview}

**Description:** Per-`(host, date, folder, trustee, operation)` activity row, with the trustee identity expanded and the operation code translated to a human-readable label. The most common entry point for activity reporting; one row per recorded daily-activity bucket.

**Source tables:** `SA_FSAC_DailyActivity`, `SA_FSAA_Hosts`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`, UDF `SA_FSAA_GetPath`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAC_DailyActivity.HOST | |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | |
| ActivityDate | date | | No | SA_FSAC_DailyActivity.ActivityDate | |
| FolderID | bigint | | No | SA_FSAC_DailyActivity.FolderID | |
| Path | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | Full folder path |
| UserID | int | | No | SA_FSAC_DailyActivity.TrusteeID | |
| UserSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID | |
| UserType | smallint | | Yes | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| UserPrincipalID | int | | Yes | UDF column | AD-Inventory principal ID |
| UserTypeDescription | varchar | 18 | Yes | Computed (CASE) | For example, `Domain User` |
| UserDisplayName | nvarchar | 256 | Yes | UDF column | |
| UserNTName | nvarchar | 256 | Yes | UDF column | |
| UserNTDomain | nvarchar | 128 | Yes | UDF column | |
| UserNTStyleName | nvarchar | 385 | Yes | Computed (`Domain\Name`) | |
| Operation | tinyint | | No | SA_FSAC_DailyActivity.Operation | |
| OperationDescription | varchar | 18 | Yes | Computed (CASE) | `Read` / `Add` / `Update` / `Delete` / `Permission Change` / `Rename` |
| Allow | bit | | No | SA_FSAC_DailyActivity.Allow | |
| AllowDescription | varchar | 7 | Yes | Computed (CASE) | `Allowed` / `Denied` |
| OperationCount | int | | No | SA_FSAC_DailyActivity.Count | |

---

### SA_FSAC_DailyUserActivityView {#sa_fsac_dailyuseractivityview}

**Description:** Pivoted version of `SA_FSAC_DailyActivityView` — one row per `(host, date, folder, user)`, with separate columns for each operation type's count. Filtered to `Allow = 1` (allowed operations only).

**Source tables:** `SA_FSAC_DailyActivity` (pivoted on Operation), `SA_FSAA_Hosts`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`, UDF `SA_FSAA_GetPath`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAC_DailyActivity.HOST | |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | |
| ActivityDate | date | | No | SA_FSAC_DailyActivity.ActivityDate | |
| FolderID | bigint | | No | SA_FSAC_DailyActivity.FolderID | |
| Path | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | |
| UserID | int | | No | SA_FSAC_DailyActivity.TrusteeID | |
| UserSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID | |
| UserType | smallint | | Yes | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| UserPrincipalID | int | | Yes | UDF column | |
| UserTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| UserDisplayName | nvarchar | 256 | Yes | UDF column | |
| UserNTName | nvarchar | 256 | Yes | UDF column | |
| UserNTDomain | nvarchar | 128 | Yes | UDF column | |
| UserNTStyleName | nvarchar | 385 | Yes | Computed | |
| Reads | int | | No | Pivot (Operation = 0) | Read-operation count |
| Adds | int | | No | Pivot (Operation = 1) | Add-operation count |
| Updates | int | | No | Pivot (Operation = 2) | Update-operation count |
| Deletes | int | | No | Pivot (Operation = 3) | Delete-operation count |
| PermissionChanges | int | | No | Pivot (Operation = 4) | Permission-change count |
| Renames | int | | No | Pivot (Operation = 5) | Rename count |

---

### SA_FSAC_DailyResourceActivityView {#sa_fsac_dailyresourceactivityview}

**Description:** Same shape as `SA_FSAC_DailyUserActivityView` but rolled up across users — one row per `(host, date, folder)` with operation counts and a count of distinct active users.

**Source tables:** `SA_FSAC_DailyActivity` (pivoted on Operation, then aggregated), `SA_FSAA_Hosts`, UDF `SA_FSAA_GetPath`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAC_DailyActivity.HOST | |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | |
| ActivityDate | date | | No | SA_FSAC_DailyActivity.ActivityDate | |
| FolderID | bigint | | No | SA_FSAC_DailyActivity.FolderID | |
| Path | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | |
| Reads | int | | Yes | SUM (Operation = 0) | |
| Adds | int | | Yes | SUM (Operation = 1) | |
| Updates | int | | Yes | SUM (Operation = 2) | |
| Deletes | int | | Yes | SUM (Operation = 3) | |
| PermissionChanges | int | | Yes | SUM (Operation = 4) | |
| Renames | int | | Yes | SUM (Operation = 5) | |
| ActiveUsers | int | | Yes | COUNT(DISTINCT TrusteeID) | Distinct users with activity that day |

---

### SA_FSAC_ActivityEventsView {#sa_fsac_activityeventsview}

**Description:** Detailed event view — one row per `SA_FSAC_ActivityEvents` row, joined to resource metadata, process name, trustee identity, and (for renames) the rename target.

**Source tables:** `SA_FSAC_ActivityEvents`, `SA_FSAA_Hosts`, `SA_FSAC_ProcessNames`, `SA_FSAA_Resources`, `SA_FSAA_Trustees`, `SA_FSAC_RenameTargets`, UDF `SA_FSAA_GetTrusteeInformationEx`, UDF `SA_FSAA_GetPath`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAC_ActivityEvents.HOST | |
| HostName | nvarchar | 64 | No | SA_FSAA_Hosts.HOST | |
| ID | bigint | | No | SA_FSAC_ActivityEvents.ID | |
| AccessTime | datetime2 | | No | SA_FSAC_ActivityEvents.AccessTime | |
| ResourceID | bigint | | No | SA_FSAC_ActivityEvents.PathID | |
| ResourceType | tinyint | | Yes | SA_FSAA_Resources.ResourceType | See [ResourceType](../enumeration/overview.md#resourcetype) |
| ResourceTypeDescription | varchar | 6 | Yes | Computed (CASE) | `Folder` / `File` |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | |
| ResourceName | nvarchar | 2000 | Yes | SA_FSAA_Resources.Name | |
| Path | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | |
| ProcessID | int | | Yes | SA_FSAC_ActivityEvents.ProcessID | |
| ProcessName | nvarchar | 255 | Yes | SA_FSAC_ProcessNames.Name | |
| Operation | tinyint | | No | SA_FSAC_ActivityEvents.Operation | |
| OperationDescription | varchar | 18 | Yes | Computed (CASE) | |
| Allow | bit | | No | SA_FSAC_ActivityEvents.Allow | |
| AllowDescription | varchar | 7 | Yes | Computed (CASE) | `Allowed` / `Denied` |
| TargetResourceID | bigint | | Yes | SA_FSAC_RenameTargets.TargetPathID | (Renames only) |
| TargetResourceName | nvarchar | 2000 | Yes | SA_FSAA_Resources.Name (target) | (Renames only) |
| TargetParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID (target) | (Renames only) |
| TargetPath | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath (target) | (Renames only) |
| UserID | int | | No | SA_FSAC_ActivityEvents.TrusteeID | |
| UserSID | varchar | 184 | Yes | SA_FSAA_Trustees.SID | |
| UserDisplayName | nvarchar | 256 | Yes | UDF column | |
| UserNTDomain | nvarchar | 128 | Yes | UDF column | |
| UserNTName | nvarchar | 256 | Yes | UDF column | |
| UserType | smallint | | Yes | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| UserPrincipalID | int | | Yes | UDF column | |
| UserTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| UserNTStyleName | nvarchar | 385 | Yes | Computed | |

---

### SA_FSAC_ExceptionsView {#sa_fsac_exceptionsview}

**Description:** `SA_FSAC_Exceptions` joined to the type catalog and to the trustee / gate / resource references, with day-of-week and time-of-day translations.

**Source tables:** `SA_FSAC_Exceptions`, `SA_FSAC_ExceptionTypes`, `SA_FSAA_Hosts`, `SA_FSAA_Gates`, `SA_FSAA_Resources`, UDF `SA_FSAA_GetPath`, UDF `SA_FSAA_GetTrusteeInformation`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAC_Exceptions.HOST | |
| HostName | nvarchar | 64 | No | SA_FSAA_Hosts.HOST | |
| ID | int | | No | SA_FSAC_Exceptions.ID | |
| ExceptionType | int | | No | SA_FSAC_Exceptions.ExceptionType | |
| ParentType | int | | Yes | SA_FSAC_ExceptionTypes.ParentType | |
| ExceptionName | varchar | 128 | No | SA_FSAC_ExceptionTypes.Name | |
| ActivityDate | date | | No | SA_FSAC_Exceptions.ActivityDate | |
| ActivityHour | tinyint | | Yes | SA_FSAC_Exceptions.ActivityHour | |
| DayOfWeek | nvarchar | 30 | Yes | Computed (`DATENAME(dw, ActivityDate)`) | For example, `Monday` |
| TimeOfDay | varchar | 8 | Yes | Computed (CASE on ActivityHour) | For example, `3 PM`, `12 AM` |
| GateID | int | | No | SA_FSAC_Exceptions.GateID | |
| ResourceID | bigint | | Yes | SA_FSAC_Exceptions.ResourceID | |
| Path | nvarchar | 4000 | Yes | Computed (`\\host\share<resource-path>`) | |
| TrusteeID | int | | Yes | SA_FSAC_Exceptions.TrusteeID | |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| NTDomain | nvarchar | 128 | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| NTName | nvarchar | 256 | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed (`Domain\Name`) | |
| TrusteeType | smallint | | Yes | UDF: SA_FSAA_GetTrusteeInformation | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| TrusteeTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| Value | int | | Yes | SA_FSAC_Exceptions.Value | |
| Average | float | | Yes | SA_FSAC_Exceptions.Average | |
| StandardDeviations | float | | Yes | SA_FSAC_Exceptions.StandardDeviations | |

---

### SA_FSAC_UserExceptionsView {#sa_fsac_userexceptionsview}

**Description:** Same shape as `SA_FSAC_ExceptionsView` but partitioned by user `SID` rather than `(HOST, ID)`. Used for cross-host user-behaviour anomalies. Trustee identity is resolved by joining `SA_ADInventory_UsersView` on the SID.

**Source tables:** `SA_FSAC_UserExceptions`, `SA_FSAC_UserExceptionTypes`, `SA_ADInventory_UsersView`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| ID | int | | No | SA_FSAC_UserExceptions.ID | |
| ExceptionType | int | | No | SA_FSAC_UserExceptions.ExceptionType | |
| ParentType | int | | Yes | SA_FSAC_UserExceptionTypes.ParentType | |
| ExceptionName | varchar | 128 | No | SA_FSAC_UserExceptionTypes.Name | |
| ActivityDate | date | | No | SA_FSAC_UserExceptions.ActivityDate | |
| ActivityStartTime | tinyint | | Yes | SA_FSAC_UserExceptions.ActivityStartTime | Start hour 0–23 |
| ActivityPeriod | tinyint | | Yes | SA_FSAC_UserExceptions.ActivityPeriod | Window length in hours |
| DayOfWeek | nvarchar | 30 | Yes | Computed (`DATENAME(dw, ActivityDate)`) | For example, `Monday` |
| TimeOfDay | varchar | 8 | Yes | Computed (CASE on ActivityStartTime) | For example, `3 PM`, `12 AM` |
| TrusteeDisplayName | nvarchar | 256 | Yes | SA_ADInventory_UsersView.DisplayName | |
| NTDomain | nvarchar | 128 | Yes | SA_ADInventory_UsersView.DomainName | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | SA_ADInventory_UsersView.NTAccount | `Domain\Name` |
| TrusteeSID | varchar | 184 | No | SA_FSAC_UserExceptions.SID | |
| TrusteePrincipalID | int | | Yes | SA_ADInventory_UsersView.PrincipalId | |
| Value | int | | Yes | SA_FSAC_UserExceptions.Value | |
| Average | float | | Yes | SA_FSAC_UserExceptions.Average | |
| StandardDeviations | float | | Yes | SA_FSAC_UserExceptions.StandardDeviations | |

---

### SA_FSAC_PermissionChangesView {#sa_fsac_permissionchangesview}

**Description:** Surface view over `SA_FSAC_PermissionChanges` that resolves the affected trustee and decodes the ACL / ACE / inheritance / access-rights bitmasks into descriptive strings.

:::note
This view does not join `SA_FSAC_ActivityEvents` or `SA_FSAA_Resources` — the access time and resource path are not exposed; reports needing them must join `SA_FSAC_ActivityEvents` themselves.
:::

**Source tables:** `SA_FSAC_PermissionChanges`, `SA_FSAA_Hosts`, UDF `SA_FSAA_GetTrusteeInformation`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSAC_PermissionChanges.HOST | |
| HostName | nvarchar | 64 | No | SA_FSAA_Hosts.HOST | |
| ActivityID | bigint | | No | SA_FSAC_PermissionChanges.ActivityID | |
| ChangeID | smallint | | No | SA_FSAC_PermissionChanges.ChangeID | |
| AclType | tinyint | | No | SA_FSAC_PermissionChanges.AclType | |
| AclTypeDescription | varchar | 4 | Yes | Computed (CASE) | `DACL` / `SACL` |
| TrusteeID | int | | No | SA_FSAC_PermissionChanges.TrusteeID | |
| TrusteeSID | varchar | 184 | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| TrusteeType | smallint | | Yes | UDF: SA_FSAA_GetTrusteeInformation | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| TrusteeTypeDescription | varchar | 18 | Yes | Computed (CASE) | |
| TrusteePrincipalID | int | | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| TrusteeDisplayName | nvarchar | 256 | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| TrusteeDomainName | nvarchar | 128 | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| TrusteeNTName | nvarchar | 256 | Yes | UDF: SA_FSAA_GetTrusteeInformation | |
| TrusteeNTStyleName | nvarchar | 385 | Yes | Computed (`Domain\Name`) | |
| ChangeType | tinyint | | No | SA_FSAC_PermissionChanges.ChangeType | |
| ChangeTypeDescription | varchar | 6 | Yes | Computed (CASE) | `Add` / `Remove` / `Update` |
| AceType | tinyint | | No | SA_FSAC_PermissionChanges.AceType | |
| AceTypeDescription | varchar | 16 | Yes | Computed (CASE) | `Allowed`, `Denied`, `Object Allowed`, `Object Denied`, `System Audit`, `System Alarm`, `Object Audit`, `Object Alarm` |
| InheritanceFlags | tinyint | | No | SA_FSAC_PermissionChanges.InheritanceFlags | |
| InheritanceFlagsDescription | varchar | 64 | Yes | Computed (bitmask decode) | Comma-joined: `Inheritance Blocked` / `Inheritance Allowed` / `Child Objects Inherit` |
| AceFlags | tinyint | | No | SA_FSAC_PermissionChanges.AceFlags | |
| AceFlagsDescription | varchar | 256 | Yes | Computed (bitmask decode) | Comma-joined: `Container Inherit`, `Object Inherit`, `No Propogate`, `Inheritance Only`, `Ace Is Inherited`, `Successful Access Audit`, `Failed Access Audit` |
| AccessRights | bigint | | No | SA_FSAC_PermissionChanges.AccessRights | |
| AccessRightsDescription | varchar | 32 | Yes | Computed (CASE) | Windows-style label such as `Full Control`, `Modify`, `Read`, `Write`, `Special` |
| NewAccessRights | bigint | | Yes | SA_FSAC_PermissionChanges.NewAccessRights | |
| NewAccessRightsDescription | varchar | 32 | Yes | Computed (CASE) | Same vocabulary as `AccessRightsDescription` |

---

## Sensitive Data Views (SA_FSDLP_*) {#sensitive-data-views-sa_fsdlp_}

### SA_FSDLP_MatchesView {#sa_fsdlp_matchesview}

**Description:** `SA_FSDLP_Matches` enriched with file path, criterion name and GUID, a human-readable `DataSource` description, and an `IsExcluded` flag computed from the SDD exclusion-filter table.

**Source tables:** `SA_FSDLP_Matches`, `SA_FSAA_Hosts`, `SA_FSDLP_Criteria`, `SA_FSAA_Resources`, `SA_FSAA_SharesTraversalView`, `SA_SDDExclusionFilters`, UDF `SA_FSAA_GetPath`.

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSDLP_Matches.HOST | |
| HostName | nvarchar | 64 | Yes | SA_FSAA_Hosts.HOST | |
| CriteriaId | int | | No | SA_FSDLP_Matches.CriteriaId | |
| CriteriaName | nvarchar | 256 | Yes | SA_FSDLP_Criteria.Name | |
| CriteriaGUID | uniqueidentifier | | Yes | SA_FSDLP_Criteria.pattern_guid | |
| ResourceID | bigint | | No | SA_FSDLP_Matches.FileId | |
| ParentResourceID | bigint | | Yes | SA_FSAA_Resources.ParentResourceID | |
| FileName | nvarchar | 2000 | Yes | SA_FSAA_Resources.Name | |
| FilePath | nvarchar | 4000 | Yes | UDF: SA_FSAA_GetPath | |
| MatchCount | int | | Yes | SA_FSDLP_Matches.MatchCount | |
| DataSource | varchar | 30 | Yes | Computed (CASE) | `Content` / `Metadata` / `Filename` / combinations |
| IsExcluded | bit | | No | Computed (EXISTS against `SA_SDDExclusionFilters`) | True if the file is covered by an exclusion filter |

---

### SA_FSDLP_MatchHitsView {#sa_fsdlp_matchhitsview}

**Description:** `SA_FSDLP_MatchHits` joined to `SA_FSDLP_MatchesView` so each hit carries the parent file/criterion identity. Used by the Sensitive Data report's drill-down view.

**Source tables:** `SA_FSDLP_MatchHits` (aliased `H`), `SA_FSDLP_MatchesView` (aliased `M`).

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| HostID | int | | No | SA_FSDLP_MatchesView.HostID | |
| HostName | nvarchar | 64 | Yes | SA_FSDLP_MatchesView.HostName | |
| CriteriaID | int | | No | SA_FSDLP_MatchesView.CriteriaId | |
| CriteriaName | nvarchar | 256 | Yes | SA_FSDLP_MatchesView.CriteriaName | |
| CriteriaGUID | uniqueidentifier | | Yes | SA_FSDLP_MatchesView.CriteriaGUID | |
| ResourceID | bigint | | No | SA_FSDLP_MatchesView.ResourceID | |
| ParentResourceID | bigint | | Yes | SA_FSDLP_MatchesView.ParentResourceID | |
| FileName | nvarchar | 2000 | Yes | SA_FSDLP_MatchesView.FileName | |
| FilePath | nvarchar | 4000 | Yes | SA_FSDLP_MatchesView.FilePath | |
| MatchCount | int | | Yes | SA_FSDLP_MatchesView.MatchCount | |
| SubFileName | nvarchar | 1024 | Yes | SA_FSDLP_MatchHits.SubFileName | |
| MatchPrefix | nvarchar | 1024 | Yes | SA_FSDLP_MatchHits.MatchPrefix | |
| MatchData | nvarchar | 1024 | Yes | SA_FSDLP_MatchHits.MatchData | |
| MatchSuffix | nvarchar | 1024 | Yes | SA_FSDLP_MatchHits.MatchSuffix | |
| Confidence | int | | No | SA_FSDLP_MatchHits.Confidence | |
| DataSource | varchar | 30 | Yes | Computed (CASE on `SA_FSDLP_MatchHits.DataSource`) | Same vocabulary as `SA_FSDLP_MatchesView.DataSource` |
