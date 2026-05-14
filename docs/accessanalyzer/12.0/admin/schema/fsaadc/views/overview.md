# Views

The FSAA DC schema exposes 20 views that provide pre-joined, human-readable projections of the underlying tables. Reports and the Access Analyzer web UI consume these views rather than raw tables.

:::note
Column sizes shown for views are derived from underlying source columns and SQL `CASE` expressions in the view definitions; on a populated database the actual `sys.columns.max_length` may differ slightly. Use `EXEC sp_help '<viewname>'` to inspect a view's exact runtime shape.
:::

## FSAA Views

### SA_FSAA_Paths {#sa_fsaa_paths}

Path map for every resource. Implemented as a VIEW (not a table) — the Create-Schema job explicitly drops any pre-existing table form before executing `CREATE VIEW`. The view delegates path construction to the `SA_FSAA_GetPath` scalar UDF, which walks the parent chain recursively.

**Source:** `SA_FSAA_Resources` (via `SA_FSAA_GetPath` UDF — recursive parent-chain walk)

| Column | Type | Source | Description |
|---|---|---|---|
| HOST | int | SA_FSAA_Resources.HOST | Host partition |
| ResourceID | bigint | SA_FSAA_Resources.ID | Resource |
| Path | nvarchar(4000) | Computed (recursive concat of `SA_FSAA_Resources.Name` up the parent chain) | Full path string |

### SA_FSAA_ResourcesView {#sa_fsaa_resourcesview}

Surface view of `SA_FSAA_Resources` enriched with computed full path, resource-type description, three boolean permission flags (`PermissionChange`, `InheritedPermission`, `DirectPermission`), and Azure Files metadata. Two definitions exist; the Entra-aware variant is used when `SA_Entra_RmResources` exists.

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`, `SA_FSAA_AzureFilesShares`, `SA_Entra_RmResources` (when present)

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAA_Resources.HOST | Host ID |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | Host name |
| ID | bigint | SA_FSAA_Resources.ID | Resource ID |
| ParentResourceID | bigint | SA_FSAA_Resources.ParentResourceID | Parent resource |
| Name | nvarchar(2000) | SA_FSAA_Resources.Name | Leaf name |
| Path | nvarchar(4000) | UDF: SA_FSAA_GetPath | Full path |
| ResourceType | tinyint | SA_FSAA_Resources.ResourceType | See [ResourceType](../enumeration/overview.md#resourcetype) |
| ResourceTypeDescription | varchar(6) | Computed (CASE) | `Share`, `Folder`, or `File` |
| OwnerID | int | SA_FSAA_Resources.OwnerID | |
| RightsProxyID | int | SA_FSAA_Resources.RightsProxyID | |
| GatesProxyID | bigint | SA_FSAA_Resources.GatesProxyID | |
| NestedLevel | int | SA_FSAA_Resources.NestedLevel | |
| Size | bigint | SA_FSAA_Resources.Size | |
| LastModified | datetime | SA_FSAA_Resources.LastModified | |
| LastAccessed | datetime | SA_FSAA_Resources.LastAccessed | |
| Created | datetime | SA_FSAA_Resources.Created | |
| USN | int | SA_FSAA_Resources.USN | |
| DeletedUSN | int | SA_FSAA_Resources.DeletedUSN | |
| PermissionChange | bit | Computed (CASE / EXISTS) | True if ACL differs from parent |
| InheritedPermission | bit | Computed (CASE / EXISTS) | True if any inherited rights exist |
| DirectPermission | bit | Computed (CASE / EXISTS) | True if any direct rights exist |
| Storage Account | varchar(256) | SA_FSAA_AzureFilesShares.StorageAccount | Entra-aware variant only |
| Azure File Share Name | nvarchar(2000) | SA_FSAA_AzureFilesShares.Name | Entra-aware variant only |
| Azure TenantID | varchar(38) | SA_Entra_RmResources.DomainId | Entra-aware variant only |

### SA_FSAA_PermissionsView {#sa_fsaa_permissionsview}

Resource × ACE flat view with effective allow/deny rights expanded into 12 boolean columns, textual `AllowRightsDescription`/`DenyRightsDescription` (e.g. `LRWDMA`), and a `RightsSource` column (`Direct` / `Inherited` / `Both` / `None`).

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`
**Filter:** `r.RightsProxyID IS NOT NULL`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAA_Resources.HOST | Host partition |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | Host name |
| ResourceID | bigint | SA_FSAA_Resources.ID | Resource |
| ParentResourceID | bigint | SA_FSAA_Resources.ParentResourceID | Parent resource |
| ResourceDeletedUSN | int | SA_FSAA_Resources.DeletedUSN | NULL if not deleted |
| ResourcePath | nvarchar(4000) | UDF: SA_FSAA_GetPath | Full resource path |
| ResourceType | tinyint | SA_FSAA_Resources.ResourceType | |
| ResourceTypeDescription | varchar(6) | Computed (CASE) | `Share` / `Folder` / `File` |
| AllowRights | smallint | SA_FSAA_Rights.AllowRights | Combined bitmask |
| DenyRights | smallint | SA_FSAA_Rights.DenyRights | Combined bitmask |
| AllowList | bit | Computed (`AllowRights & 32`) | Has list right |
| AllowRead | bit | Computed (`AllowRights & 1`) | Has read right |
| AllowWrite | bit | Computed (`AllowRights & 2`) | Has write right |
| AllowDelete | bit | Computed (`AllowRights & 4`) | Has delete right |
| AllowManage | bit | Computed (`AllowRights & 8`) | Has manage right |
| AllowAdmin | bit | Computed (`AllowRights & 16`) | Has admin right |
| DenyList | bit | Computed (`DenyRights & 32`) | Deny list right |
| DenyRead | bit | Computed (`DenyRights & 1`) | Deny read right |
| DenyWrite | bit | Computed (`DenyRights & 2`) | Deny write right |
| DenyDelete | bit | Computed (`DenyRights & 4`) | Deny delete right |
| DenyManage | bit | Computed (`DenyRights & 8`) | Deny manage right |
| DenyAdmin | bit | Computed (`DenyRights & 16`) | Deny admin right |
| AllowRightsDescription | varchar(6) | Computed (concat letters L/R/W/D/M/A) | e.g. `LRW` |
| DenyRightsDescription | varchar(6) | Computed (concat letters L/R/W/D/M/A) | e.g. `D` |
| RightsSource | varchar(9) | Computed (CASE on Direct/Inherited columns) | `Both` / `Inherited` / `Direct` / `None` |
| AllowMask | int | SA_FSAA_Rights.AllowMask | Full Windows access mask |
| DenyMask | int | SA_FSAA_Rights.DenyMask | Full Windows deny mask |
| AllowMaskDescription | varchar(32) | Computed (CASE) | `Full Control` / `Modify` / `Read & Execute` / etc. |
| DenyMaskDescription | varchar(32) | Computed (CASE) | Same vocabulary as AllowMaskDescription |
| TrusteeID | int | SA_FSAA_Rights.TrusteeID | |
| TrusteeSID | varchar(184) | SA_FSAA_Trustees.SID | |
| TrusteeType | smallint | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| TrusteeIsHistoricalSID | bit | UDF column | True if SID came from SID History |
| TrusteePrincipalID | int | UDF column | AD-Inventory principal ID |
| TrusteeTypeDescription | varchar(18) | Computed (CASE) | e.g. `Domain User` |
| TrusteeDisplayName | nvarchar(256) | UDF column | |
| TrusteeDomain | nvarchar(128) | UDF column | NT domain |
| TrusteeNTName | nvarchar(256) | UDF column | SAM account name |
| TrusteeNTStyleName | nvarchar(385) | Computed (`Domain\Name`) | Concatenated NT-style name |

### SA_FSAA_ExpandedPermissionsView {#sa_fsaa_expandedpermissionsview}

Resource × *expanded* effective trustee — group memberships are recursively expanded and the view returns one row per `(resource, leaf trustee)` instead of one per `(resource, ACE)`. Uses `CROSS APPLY dbo.SA_FSAA_GetExpandedPermissions` to do the expansion.

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, UDF `SA_FSAA_GetExpandedPermissions`
**Filter:** `r.RightsProxyID IS NOT NULL`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAA_Resources.HOST | Host partition |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | Host name |
| ResourceID | bigint | SA_FSAA_Resources.ID | Resource |
| ParentResourceID | bigint | SA_FSAA_Resources.ParentResourceID | Parent resource |
| ResourceDeletedUSN | int | SA_FSAA_Resources.DeletedUSN | |
| ResourcePath | nvarchar(4000) | UDF: SA_FSAA_GetPath | Full path |
| ResourceType | tinyint | SA_FSAA_Resources.ResourceType | |
| ResourceTypeDescription | varchar(6) | Computed (CASE) | `Share` / `Folder` / `File` |
| AllowRights | smallint | UDF column | Effective allow bitmask after group expansion |
| DenyRights | smallint | UDF column | Effective deny bitmask |
| AllowList / AllowRead / AllowWrite / AllowDelete / AllowManage / AllowAdmin | bit | Computed (`AllowRights & N`) | Six boolean columns (bits 32, 1, 2, 4, 8, 16) |
| DenyList / DenyRead / DenyWrite / DenyDelete / DenyManage / DenyAdmin | bit | Computed (`DenyRights & N`) | Six boolean columns |
| AllowRightsDescription | varchar(6) | Computed | Letter form `LRWDMA` |
| DenyRightsDescription | varchar(6) | Computed | |
| TrusteeSID | varchar(184) | UDF column | Leaf-trustee SID |
| TrusteeType | smallint | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| TrusteeTypeDescription | varchar(18) | Computed (CASE) | |
| TrusteeDisplayName | nvarchar(256) | UDF column | |
| TrusteeDomain | nvarchar(128) | UDF column | |
| TrusteeNTName | nvarchar(256) | UDF column | |
| TrusteeNTStyleName | nvarchar(385) | Computed (`Domain\Name`) | |

### SA_FSAA_DirectPermissionsView {#sa_fsaa_directpermissionsview}

Same shape as `SA_FSAA_PermissionsView` but filtered to direct (non-inherited) ACEs only. Uses `DirectAllowRights` / `DirectDenyRights` / `DirectAllowMask` / `DirectDenyMask` as the source columns; the output column names remain `AllowRights`, `DenyRights`, `AllowMask`, `DenyMask`.

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`
**Filter:** `r.RightsProxyID IS NOT NULL AND ((p.DirectAllowRights <> 0) OR (p.DirectDenyRights <> 0) OR (p.DirectAllowMask <> 0) OR (p.DirectDenyMask <> 0))`

Column shape is identical to `SA_FSAA_PermissionsView`. Source columns changed: `AllowRights` ← `DirectAllowRights`, `DenyRights` ← `DirectDenyRights`, `AllowMask` ← `DirectAllowMask`, `DenyMask` ← `DirectDenyMask`.

### SA_FSAA_InheritedPermissionsView {#sa_fsaa_inheritedpermissionsview}

Same shape as `SA_FSAA_DirectPermissionsView` but reads from the `Inherited*` rights/mask columns.

**Source tables:** `SA_FSAA_Resources`, `SA_FSAA_Hosts`, `SA_FSAA_Rights`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`
**Filter:** `r.RightsProxyID IS NOT NULL AND ((p.InheritedAllowRights <> 0) OR (p.InheritedDenyRights <> 0) OR (p.InheritedAllowMask <> 0) OR (p.InheritedDenyMask <> 0))`

Column shape is identical to `SA_FSAA_PermissionsView`. Source columns changed: `AllowRights` ← `InheritedAllowRights`, `DenyRights` ← `InheritedDenyRights`, `AllowMask` ← `InheritedAllowMask`, `DenyMask` ← `InheritedDenyMask`.

### SA_FSAA_SharesTraversalView {#sa_fsaa_sharestraversalview}

For every resource reachable through a gate, returns the gate, the resource, the share-relative resource path, and the SMB/NFS/Azure UNC path. Two definitions exist; the Entra-aware variant adds storage-account/tenant/share-property columns when `SA_Entra_RmResources` is present.

**Source tables:** `SA_FSAA_Hosts`, `SA_FSAA_Gates`, `SA_FSAA_GatesProxy`, `SA_FSAA_Resources`, `SA_FSAA_Paths`, plus (Entra-aware) `SA_FSAA_AzureFilesShares`, `SA_FSAA_AzureFilesShareProperties`, `SA_Entra_RmResources`
**Filter:** `r.GatesProxyID IS NOT NULL`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAA_Hosts.ID | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| GateID | int | SA_FSAA_Gates.ID | |
| GateType | int | SA_FSAA_Gates.GateType | See [GateType](../enumeration/overview.md#gatetype) |
| GateTypeDescription | varchar(3) | Computed (CASE) | `SMB` or `NFS` |
| GateDeletedUSN | int | SA_FSAA_Gates.DeletedUSN | |
| ShareID | bigint | SA_FSAA_Gates.ShareID | |
| ShareName | nvarchar(256) | SA_FSAA_Gates.DisplayName | |
| ResourceID | bigint | SA_FSAA_Resources.ID | |
| ParentResourceID | bigint | SA_FSAA_Resources.ParentResourceID | |
| ResourceType | tinyint | SA_FSAA_Resources.ResourceType | |
| ResourceTypeDescription | varchar(6) | Computed (CASE) | |
| ResourceDeletedUSN | int | SA_FSAA_Resources.DeletedUSN | |
| ResourcePath | nvarchar(4000) | SA_FSAA_Paths.Path | Local resource path |
| NetworkPath | nvarchar(4000) | Computed | UNC path or NFS-style path (`host:share//rel-path` for NFS; `\\host\share\rel-path` for SMB) |
| NestedLevel | int | Computed (`r.NestedLevel - g.NestedLevel`) | Depth from share root |
| Storage Account | varchar(256) | SA_FSAA_AzureFilesShares.StorageAccount | Entra-aware variant only |
| Azure File Share Name | nvarchar(2000) | SA_FSAA_AzureFilesShares.Name | Entra-aware variant only |
| Azure TenantID | varchar(38) | SA_Entra_RmResources.DomainId | Entra-aware variant only |
| AzureShareID | int | SA_FSAA_AzureFilesShareProperties.AzureShareID | Entra-aware variant only |
| AccessChangeTime | datetime2(7) | SA_FSAA_AzureFilesShareProperties.AccessChangeTime | Entra-aware variant only |
| DeletedOn | datetime2(7) | SA_FSAA_AzureFilesShareProperties.DeletedOn | Entra-aware variant only |
| LastModified | datetime2(7) | SA_FSAA_AzureFilesShareProperties.LastModified | Entra-aware variant only |
| LeaseDuration | varchar(50) | SA_FSAA_AzureFilesShareProperties.LeaseDuration | Entra-aware variant only |
| QuotaInGB | float | SA_FSAA_AzureFilesShareProperties.QuotaInGB | Entra-aware variant only |
| RemainingRetentionDays | int | SA_FSAA_AzureFilesShareProperties.RemainingRetentionDays | Entra-aware variant only |

### SA_FSAA_EffectiveAccessView {#sa_fsaa_effectiveaccessview}

Like `SA_FSAA_SharesTraversalView` but additionally resolves each row through `SA_FSAA_GetEffectiveRights` to attribute effective allow/deny rights to each leaf trustee. Used to answer "who can do what on this resource through this share?"

**Source tables:** `SA_FSAA_SharesTraversalView`, UDF `SA_FSAA_GetEffectiveRights`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAA_SharesTraversalView.HostID | |
| HostName | nvarchar(64) | SA_FSAA_SharesTraversalView.HostName | |
| GateID | int | SA_FSAA_SharesTraversalView.GateID | |
| ShareID | bigint | SA_FSAA_SharesTraversalView.ShareID | |
| ResourceID | bigint | SA_FSAA_SharesTraversalView.ResourceID | |
| ShareName | nvarchar(256) | SA_FSAA_SharesTraversalView.ShareName | |
| NestedLevel | int | SA_FSAA_SharesTraversalView.NestedLevel | |
| ResourcePath | nvarchar(4000) | SA_FSAA_SharesTraversalView.ResourcePath | |
| NetworkPath | nvarchar(4000) | SA_FSAA_SharesTraversalView.NetworkPath | |
| ResourceType | tinyint | SA_FSAA_SharesTraversalView.ResourceType | |
| ResourceTypeDescription | varchar(6) | SA_FSAA_SharesTraversalView.ResourceTypeDescription | |
| ResourceDeletedUSN | int | SA_FSAA_SharesTraversalView.ResourceDeletedUSN | |
| GateDeletedUSN | int | SA_FSAA_SharesTraversalView.GateDeletedUSN | |
| AllowRights | smallint | UDF column | Effective allow bitmask |
| DenyRights | smallint | UDF column | Effective deny bitmask |
| DirectTrustee | bit | UDF column | True if rights come from a direct ACE rather than group expansion |
| AllowList / AllowRead / AllowWrite / AllowDelete / AllowManage / AllowAdmin | bit | Computed | Six boolean columns |
| DenyList / DenyRead / DenyWrite / DenyDelete / DenyManage / DenyAdmin | bit | Computed | Six boolean columns |
| AllowRightsDescription | varchar(6) | Computed | |
| DenyRightsDescription | varchar(6) | Computed | |
| TrusteeSID | varchar(184) | UDF column | |
| TrusteeType | smallint | UDF column | |
| TrusteeTypeDescription | varchar(18) | Computed (CASE) | |
| TrusteeDisplayName | nvarchar(256) | UDF column | |
| TrusteeDomain | nvarchar(128) | UDF column | |
| TrusteeNTName | nvarchar(256) | UDF column | |
| TrusteeNTStyleName | nvarchar(385) | Computed | |

### SA_FSAA_LocalGroupMembersView {#sa_fsaa_localgroupmembersview}

Flat view of local-group memberships derived from `SA_FSAA_TrusteeEquivalence`. One row per `(group, member)` pair on a host, with both group and member identity columns expanded via `SA_FSAA_GetTrusteeInformation`.

**Source tables:** `SA_FSAA_TrusteeEquivalence`, `SA_FSAA_Hosts`, UDF `SA_FSAA_GetTrusteeInformation` (called twice — once for the group, once for the member)

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAA_TrusteeEquivalence.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| GroupTrusteeID | int | SA_FSAA_TrusteeEquivalence.EquivalentTrusteeID | |
| GroupSID | varchar(184) | UDF column (group) | |
| GroupDisplayName | nvarchar(256) | UDF column (group) | |
| GroupDomain | nvarchar(128) | UDF column (group) | |
| GroupNTName | nvarchar(256) | UDF column (group) | |
| GroupNTStyleName | nvarchar(385) | Computed (`Domain\Name`) | |
| MemberTrusteeID | int | SA_FSAA_TrusteeEquivalence.TrusteeID | |
| MemberSID | varchar(184) | UDF column (member) | |
| MemberDomain | nvarchar(128) | UDF column (member) | |
| MemberNTName | nvarchar(256) | UDF column (member) | |
| MemberDisplayName | nvarchar(256) | UDF column (member) | |
| MemberNTStyleName | nvarchar(385) | Computed (`Domain\Name`) | |
| MemberType | smallint | UDF column (member) | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| MemberTypeDescription | varchar(18) | Computed (CASE) | |
| MemberPrincipalID | int | UDF column (member) | AD-Inventory principal ID |

### SA_FSAA_ExceptionsView {#sa_fsaa_exceptionsview}

`SA_FSAA_Exceptions` joined with the type catalog and with both `TrusteeID` and `SourceTrusteeID` resolved to display names.

**Source tables:** `SA_FSAA_Exceptions`, `SA_FSAA_ExceptionTypes`, `SA_FSAA_Trustees` (twice), `SA_FSAA_Hosts`, `SA_FSAA_Resources`, `SA_FSAA_Gates`, UDF `SA_FSAA_GetTrusteeInformationEx`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAA_Exceptions.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| ExceptionType | int | SA_FSAA_Exceptions.ExceptionType | |
| ParentType | int | SA_FSAA_ExceptionTypes.ParentType | Hierarchical parent type |
| ExceptionName | varchar(128) | SA_FSAA_ExceptionTypes.Name | |
| GateID | int | SA_FSAA_Exceptions.GateID | |
| ResourceID | bigint | SA_FSAA_Exceptions.ResourceID | |
| Path | nvarchar(4000) | Computed | UNC path / resource path / NULL depending on which columns are populated |
| TrusteeID | int | SA_FSAA_Exceptions.TrusteeID | |
| TrusteeSID | varchar(184) | SA_FSAA_Trustees.SID | |
| TrusteeType | smallint | SA_FSAA_Trustees.TrusteeType | |
| TrusteeDisplayName | nvarchar(256) | UDF column | |
| TrusteeNTStyleName | nvarchar(385) | Computed | |
| TrusteePrincipalID | int | UDF column | |
| SourceTrusteeID | int | SA_FSAA_Exceptions.SourceTrusteeID | |
| SourceTrusteeSID | varchar(184) | SA_FSAA_Trustees.SID (second join) | |
| SourceTrusteeType | smallint | SA_FSAA_Trustees.TrusteeType (second join) | |
| SourceTrusteeDisplayName | nvarchar(256) | UDF column | |
| SourceTrusteeNTStyleName | nvarchar(385) | Computed | |
| SourceTrusteePrincipalID | int | UDF column | |

### SA_FSAA_AzureFilesPermissionsView {#sa_fsaa_azurefilespermissionsview}

Created only when `SA_Entra_RmResources` exists. Joins Azure Files shares to the Entra ID role assignments captured by the Entra inventory collector to surface RBAC on Azure Files.

**Source tables:** `SA_FSAA_AzureFilesShares`, `SA_Entra_RmResources` (filtered to `Microsoft.Storage/storageAccounts`), `SA_Entra_RmResourcesPrincipalsRolesView`

| Column | Type | Source | Description |
|---|---|---|---|
| TenantID | varchar(38) | SA_Entra_RmResources.DomainId | |
| HOST | int | SA_FSAA_AzureFilesShares.HOST | |
| StorageAccount | varchar(256) | SA_FSAA_AzureFilesShares.StorageAccount | |
| Scope | nvarchar(512) | SA_Entra_RmResourcesPrincipalsRolesView.Scope | RBAC assignment scope |
| AzureShareId | int | SA_FSAA_AzureFilesShares.ID | |
| ResourceAzureId | varchar(512) | SA_Entra_RmResourcesPrincipalsRolesView.ResourceAzureId | |
| ProviderName | varchar(128) | SA_Entra_RmResources.ProviderName | |
| Type | varchar(128) | SA_Entra_RmResources.Type | |
| Resource Name | nvarchar(2000) | SA_FSAA_AzureFilesShares.Name | Share name |
| RoleDomainId | varchar(38) | SA_Entra_RmResourcesPrincipalsRolesView.RoleDomainId | |
| RoleDomainName | nvarchar(256) | SA_Entra_RmResourcesPrincipalsRolesView.RoleDomainName | |
| RoleId | varchar(38) | SA_Entra_RmResourcesPrincipalsRolesView.RoleId | |
| RoleName | nvarchar(256) | SA_Entra_RmResourcesPrincipalsRolesView.RoleName | |
| CreatedBy | nvarchar(256) | SA_Entra_RmResourcesPrincipalsRolesView.CreatedByDisplayName | |
| CreatedDateTime | datetime2 | SA_Entra_RmResourcesPrincipalsRolesView.CreatedDateTime | |
| ModifiedBy | nvarchar(256) | SA_Entra_RmResourcesPrincipalsRolesView.ModifiedByDisplayName | |
| ModifiedDateTime | datetime2 | SA_Entra_RmResourcesPrincipalsRolesView.ModifiedDateTime | |
| RightsFlags | int | SA_Entra_RmResourcesPrincipalsRolesView.RightsFlags | Custom-role rights bitmask |
| DataRightsFlags | int | SA_Entra_RmResourcesPrincipalsRolesView.DataRightsFlags | Custom-role data-action bitmask |

## Activity Views (SA_FSAC_*)

### SA_FSAC_DailyActivityView {#sa_fsac_dailyactivityview}

Per-`(host, date, folder, trustee, operation)` activity row with trustee identity expanded and operation code translated to a human-readable label. The most common entry point for activity reporting.

**Source tables:** `SA_FSAC_DailyActivity`, `SA_FSAA_Hosts`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`, UDF `SA_FSAA_GetPath`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAC_DailyActivity.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| ActivityDate | date | SA_FSAC_DailyActivity.ActivityDate | |
| FolderID | bigint | SA_FSAC_DailyActivity.FolderID | |
| Path | nvarchar(4000) | UDF: SA_FSAA_GetPath | Full folder path |
| UserID | int | SA_FSAC_DailyActivity.TrusteeID | |
| UserSID | varchar(184) | SA_FSAA_Trustees.SID | |
| UserType | smallint | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| UserPrincipalID | int | UDF column | AD-Inventory principal ID |
| UserTypeDescription | varchar(18) | Computed (CASE) | e.g. `Domain User` |
| UserDisplayName | nvarchar(256) | UDF column | |
| UserNTName | nvarchar(256) | UDF column | |
| UserNTDomain | nvarchar(128) | UDF column | |
| UserNTStyleName | nvarchar(385) | Computed (`Domain\Name`) | |
| Operation | tinyint | SA_FSAC_DailyActivity.Operation | |
| OperationDescription | varchar(18) | Computed (CASE) | `Read` / `Add` / `Update` / `Delete` / `Permission Change` / `Rename` |
| Allow | bit | SA_FSAC_DailyActivity.Allow | |
| AllowDescription | varchar(7) | Computed (CASE) | `Allowed` / `Denied` |
| OperationCount | int | SA_FSAC_DailyActivity.Count | |

### SA_FSAC_DailyUserActivityView {#sa_fsac_dailyuseractivityview}

Pivoted version of `SA_FSAC_DailyActivityView` — one row per `(host, date, folder, user)` with separate columns for each operation type's count. Filtered to `Allow = 1` (allowed operations only).

**Source tables:** `SA_FSAC_DailyActivity` (pivoted on Operation), `SA_FSAA_Hosts`, `SA_FSAA_Trustees`, UDF `SA_FSAA_GetTrusteeInformationEx`, UDF `SA_FSAA_GetPath`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAC_DailyActivity.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| ActivityDate | date | SA_FSAC_DailyActivity.ActivityDate | |
| FolderID | bigint | SA_FSAC_DailyActivity.FolderID | |
| Path | nvarchar(4000) | UDF: SA_FSAA_GetPath | |
| UserID | int | SA_FSAC_DailyActivity.TrusteeID | |
| UserSID | varchar(184) | SA_FSAA_Trustees.SID | |
| UserType | smallint | UDF column | |
| UserPrincipalID | int | UDF column | |
| UserTypeDescription | varchar(18) | Computed (CASE) | |
| UserDisplayName | nvarchar(256) | UDF column | |
| UserNTName | nvarchar(256) | UDF column | |
| UserNTDomain | nvarchar(128) | UDF column | |
| UserNTStyleName | nvarchar(385) | Computed | |
| Reads | int | Pivot (Operation = 0) | Read-operation count |
| Adds | int | Pivot (Operation = 1) | Add-operation count |
| Updates | int | Pivot (Operation = 2) | Update-operation count |
| Deletes | int | Pivot (Operation = 3) | Delete-operation count |
| PermissionChanges | int | Pivot (Operation = 4) | Permission-change count |
| Renames | int | Pivot (Operation = 5) | Rename count |

### SA_FSAC_DailyResourceActivityView {#sa_fsac_dailyresourceactivityview}

Same shape as `SA_FSAC_DailyUserActivityView` but rolled up across users — one row per `(host, date, folder)` with operation counts and a count of distinct active users.

**Source tables:** `SA_FSAC_DailyActivity` (pivoted on Operation, then aggregated), `SA_FSAA_Hosts`, UDF `SA_FSAA_GetPath`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAC_DailyActivity.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| ActivityDate | date | SA_FSAC_DailyActivity.ActivityDate | |
| FolderID | bigint | SA_FSAC_DailyActivity.FolderID | |
| Path | nvarchar(4000) | UDF: SA_FSAA_GetPath | |
| Reads | int | SUM (Operation = 0) | |
| Adds | int | SUM (Operation = 1) | |
| Updates | int | SUM (Operation = 2) | |
| Deletes | int | SUM (Operation = 3) | |
| PermissionChanges | int | SUM (Operation = 4) | |
| Renames | int | SUM (Operation = 5) | |
| ActiveUsers | int | COUNT(DISTINCT TrusteeID) | Distinct users with activity that day |

### SA_FSAC_ActivityEventsView {#sa_fsac_activityeventsview}

Detailed event view — one row per `SA_FSAC_ActivityEvents` row, joined to resource metadata, process name, trustee identity, and (for renames) the rename target.

**Source tables:** `SA_FSAC_ActivityEvents`, `SA_FSAA_Hosts`, `SA_FSAC_ProcessNames`, `SA_FSAA_Resources`, `SA_FSAA_Trustees`, `SA_FSAC_RenameTargets`, UDF `SA_FSAA_GetTrusteeInformationEx`, UDF `SA_FSAA_GetPath`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAC_ActivityEvents.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| ID | bigint | SA_FSAC_ActivityEvents.ID | |
| AccessTime | datetime2 | SA_FSAC_ActivityEvents.AccessTime | |
| ResourceID | bigint | SA_FSAC_ActivityEvents.PathID | |
| ResourceType | tinyint | SA_FSAA_Resources.ResourceType | |
| ResourceTypeDescription | varchar(6) | Computed (CASE) | `Folder` / `File` |
| ParentResourceID | bigint | SA_FSAA_Resources.ParentResourceID | |
| ResourceName | nvarchar(2000) | SA_FSAA_Resources.Name | |
| Path | nvarchar(4000) | UDF: SA_FSAA_GetPath | |
| ProcessID | int | SA_FSAC_ActivityEvents.ProcessID | |
| ProcessName | nvarchar(255) | SA_FSAC_ProcessNames.Name | |
| Operation | tinyint | SA_FSAC_ActivityEvents.Operation | |
| OperationDescription | varchar(18) | Computed (CASE) | |
| Allow | bit | SA_FSAC_ActivityEvents.Allow | |
| AllowDescription | varchar(7) | Computed (CASE) | `Allowed` / `Denied` |
| TargetResourceID | bigint | SA_FSAC_RenameTargets.TargetPathID | Renames only |
| TargetResourceName | nvarchar(2000) | SA_FSAA_Resources.Name (target) | Renames only |
| TargetParentResourceID | bigint | SA_FSAA_Resources.ParentResourceID (target) | Renames only |
| TargetPath | nvarchar(4000) | UDF: SA_FSAA_GetPath (target) | Renames only |
| UserID | int | SA_FSAC_ActivityEvents.TrusteeID | |
| UserSID | varchar(184) | SA_FSAA_Trustees.SID | |
| UserDisplayName | nvarchar(256) | UDF column | |
| UserNTDomain | nvarchar(128) | UDF column | |
| UserNTName | nvarchar(256) | UDF column | |
| UserType | smallint | UDF column | |
| UserPrincipalID | int | UDF column | |
| UserTypeDescription | varchar(18) | Computed (CASE) | |
| UserNTStyleName | nvarchar(385) | Computed | |

### SA_FSAC_ExceptionsView {#sa_fsac_exceptionsview}

`SA_FSAC_Exceptions` joined to the type catalog and to the trustee/gate/resource references, with day-of-week and time-of-day translations.

**Source tables:** `SA_FSAC_Exceptions`, `SA_FSAC_ExceptionTypes`, `SA_FSAA_Hosts`, `SA_FSAA_Gates`, `SA_FSAA_Resources`, UDF `SA_FSAA_GetPath`, UDF `SA_FSAA_GetTrusteeInformation`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAC_Exceptions.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| ID | int | SA_FSAC_Exceptions.ID | |
| ExceptionType | int | SA_FSAC_Exceptions.ExceptionType | |
| ParentType | int | SA_FSAC_ExceptionTypes.ParentType | |
| ExceptionName | varchar(128) | SA_FSAC_ExceptionTypes.Name | |
| ActivityDate | date | SA_FSAC_Exceptions.ActivityDate | |
| ActivityHour | tinyint | SA_FSAC_Exceptions.ActivityHour | |
| DayOfWeek | nvarchar(30) | Computed (`DATENAME(dw, ActivityDate)`) | e.g. `Monday` |
| TimeOfDay | varchar(8) | Computed (CASE on ActivityHour) | e.g. `3 PM`, `12 AM` |
| GateID | int | SA_FSAC_Exceptions.GateID | |
| ResourceID | bigint | SA_FSAC_Exceptions.ResourceID | |
| Path | nvarchar(4000) | Computed (`\\host\share<resource-path>`) | |
| TrusteeID | int | SA_FSAC_Exceptions.TrusteeID | |
| TrusteeDisplayName | nvarchar(256) | UDF: SA_FSAA_GetTrusteeInformation | |
| NTDomain | nvarchar(128) | UDF column | |
| NTName | nvarchar(256) | UDF column | |
| TrusteeNTStyleName | nvarchar(385) | Computed (`Domain\Name`) | |
| TrusteeType | smallint | UDF column | |
| TrusteeTypeDescription | varchar(18) | Computed (CASE) | |
| TrusteeSID | varchar(184) | UDF column | |
| TrusteePrincipalID | int | UDF column | |
| Value | int | SA_FSAC_Exceptions.Value | |
| Average | float | SA_FSAC_Exceptions.Average | |
| StandardDeviations | float | SA_FSAC_Exceptions.StandardDeviations | |

### SA_FSAC_UserExceptionsView {#sa_fsac_userexceptionsview}

Same shape as `SA_FSAC_ExceptionsView` but partitioned by user `SID` rather than `(HOST, ID)`. Used for cross-host user-behaviour anomalies.

**Source tables:** `SA_FSAC_UserExceptions`, `SA_FSAC_UserExceptionTypes`

Columns mirror `SA_FSAC_ExceptionsView` minus the per-host columns: `SID`, `ID`, `ExceptionType`, `ParentType`, `ExceptionName`, `ActivityDate`, `ActivityStartTime`, `ActivityPeriod`, `Value`, `Average`, `StandardDeviations`, plus computed `DayOfWeek` and `TimeOfDay`.

### SA_FSAC_PermissionChangesView {#sa_fsac_permissionchangesview}

Per-permission-change view that joins each `SA_FSAC_PermissionChanges` detail row to its host and resolves the affected trustee via `SA_FSAA_GetTrusteeInformation`. Doesn't join to `SA_FSAC_ActivityEvents` or `SA_FSAA_Resources`; use `SA_FSAC_ActivityEventsView` joined to `SA_FSAC_PermissionChanges` when `AccessTime`, `ResourcePath`, or `ResourceType` are needed.

**Source tables:** `SA_FSAC_PermissionChanges`, `SA_FSAA_Hosts`, CROSS APPLY `SA_FSAA_GetTrusteeInformation`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSAC_PermissionChanges.HOST | Host partition |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | Host name |
| ActivityID | bigint | SA_FSAC_PermissionChanges.ActivityID | Parent activity event ID |
| ChangeID | smallint | SA_FSAC_PermissionChanges.ChangeID | Per-event change index |
| AclType | tinyint | SA_FSAC_PermissionChanges.AclType | ACL type (DACL / SACL) |
| AclTypeDescription | varchar | Computed (CASE) | Decoded ACL type label |
| TrusteeID | int | SA_FSAC_PermissionChanges.TrusteeID | Trustee whose ACE changed |
| TrusteeSID | varchar(184) | UDF: SA_FSAA_GetTrusteeInformation | |
| TrusteeType | smallint | UDF column | See [TrusteeType](../enumeration/overview.md#trusteetype) |
| TrusteeTypeDescription | varchar | Computed (CASE) | e.g. `Domain User` |
| PrincipalId | int | UDF column | AD-Inventory principal ID |
| DisplayName | nvarchar(256) | UDF column | |
| NTDomain | nvarchar(128) | UDF column | |
| NTName | nvarchar(256) | UDF column | |
| TrusteeNTStyleName | nvarchar(385) | Computed (`Domain\Name`) | |
| ChangeType | tinyint | SA_FSAC_PermissionChanges.ChangeType | Added / Removed / Modified |
| ChangeTypeDescription | varchar | Computed (CASE) | Decoded change-type label |
| AceType | tinyint | SA_FSAC_PermissionChanges.AceType | Allow / Deny |
| AceTypeDescription | varchar | Computed (CASE) | Decoded ACE-type label |
| InheritanceFlags | tinyint | SA_FSAC_PermissionChanges.InheritanceFlags | NTFS inheritance flags |
| InheritanceFlagsDescription | varchar | Computed (CASE) | Decoded inheritance-flags label |
| AceFlags | tinyint | SA_FSAC_PermissionChanges.AceFlags | NTFS ACE flags |
| AceFlagsDescription | varchar | Computed (CASE) | Decoded ACE-flags label |
| AccessRights | bigint | SA_FSAC_PermissionChanges.AccessRights | Pre-change Windows access mask |
| NewAccessRights | bigint | SA_FSAC_PermissionChanges.NewAccessRights | Post-change access mask (NULL when ACE removed) |
| AccessRightsDescription | varchar | Computed (CASE) | Decoded pre-change rights label |
| NewAccessRightsDescription | varchar | Computed (CASE) | Decoded post-change rights label |

## Sensitive Data Views (SA_FSDLP_*)

### SA_FSDLP_MatchesView {#sa_fsdlp_matchesview}

`SA_FSDLP_Matches` enriched with file path, criterion name and GUID, a human-readable `DataSource` description, and an `IsExcluded` flag computed from the SDD exclusion-filter table.

**Source tables:** `SA_FSDLP_Matches`, `SA_FSAA_Hosts`, `SA_FSDLP_Criteria`, `SA_FSAA_Resources`, `SA_FSAA_SharesTraversalView`, `SA_SDDExclusionFilters`, UDF `SA_FSAA_GetPath`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSDLP_Matches.HOST | |
| HostName | nvarchar(64) | SA_FSAA_Hosts.HOST | |
| CriteriaId | int | SA_FSDLP_Matches.CriteriaId | |
| CriteriaName | nvarchar(256) | SA_FSDLP_Criteria.Name | |
| CriteriaGUID | uniqueidentifier | SA_FSDLP_Criteria.pattern_guid | |
| ResourceID | bigint | SA_FSDLP_Matches.FileId | |
| ParentResourceID | bigint | SA_FSAA_Resources.ParentResourceID | |
| FileName | nvarchar(2000) | SA_FSAA_Resources.Name | |
| FilePath | nvarchar(4000) | UDF: SA_FSAA_GetPath | |
| MatchCount | int | SA_FSDLP_Matches.MatchCount | |
| DataSource | varchar(30) | Computed (CASE) | `Content` / `Metadata` / `Filename` / combinations |
| IsExcluded | bit | Computed (EXISTS against `SA_SDDExclusionFilters`) | True if the file is covered by an exclusion filter |

### SA_FSDLP_MatchHitsView {#sa_fsdlp_matchhitsview}

`SA_FSDLP_MatchHits` joined to `SA_FSDLP_MatchesView` so each hit carries the parent file/criterion identity. Used by the Sensitive Data report's drill-down view.

**Source tables:** `SA_FSDLP_MatchHits`, `SA_FSDLP_MatchesView`

| Column | Type | Source | Description |
|---|---|---|---|
| HostID | int | SA_FSDLP_MatchesView.HostID | |
| HostName | nvarchar(64) | SA_FSDLP_MatchesView.HostName | |
| CriteriaID | int | SA_FSDLP_MatchesView.CriteriaId | |
| CriteriaName | nvarchar(256) | SA_FSDLP_MatchesView.CriteriaName | |
| CriteriaGUID | uniqueidentifier | SA_FSDLP_MatchesView.CriteriaGUID | |
| ResourceID | bigint | SA_FSDLP_MatchesView.ResourceID | |
| ParentResourceID | bigint | SA_FSDLP_MatchesView.ParentResourceID | |
| FileName | nvarchar(2000) | SA_FSDLP_MatchesView.FileName | |
| FilePath | nvarchar(4000) | SA_FSDLP_MatchesView.FilePath | |
| MatchCount | int | SA_FSDLP_MatchesView.MatchCount | |
| SubFileName | nvarchar(1024) | SA_FSDLP_MatchHits.SubFileName | |
| MatchPrefix | nvarchar(1024) | SA_FSDLP_MatchHits.MatchPrefix | |
| MatchData | nvarchar(1024) | SA_FSDLP_MatchHits.MatchData | |
| MatchSuffix | nvarchar(1024) | SA_FSDLP_MatchHits.MatchSuffix | |
| Confidence | int | SA_FSDLP_MatchHits.Confidence | |
| DataSource | varchar(30) | Computed (CASE on `SA_FSDLP_MatchHits.DataSource`) | Same vocabulary as `SA_FSDLP_MatchesView.DataSource` |
