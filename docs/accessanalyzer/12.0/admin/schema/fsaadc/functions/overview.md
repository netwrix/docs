# Functions & Stored Procedures

All functions and stored procedures live in the `dbo` schema. Most table-valued functions are inline (iTVF) and are joined into views with `CROSS APPLY` or `OUTER APPLY`. Two cross-database UDF table types — `SA_CORE_GroupMemberPathTable` and `SA_CORE_GroupMembersTable` — are used as `READONLY` table-valued parameters; both come from the `SA_CORE_*` shared schema created elsewhere.

## FSAA Functions {#fsaa-functions}

### SA_FSAA_GetPath

**Signature:** `(@serverID INT, @resourceID BIGINT) RETURNS NVARCHAR(4000)`
**Type:** Scalar function

Walks the parent chain in `SA_FSAA_Resources` and concatenates names with the appropriate delimiter (`/` for Unix resources of type 5 or 6, `\` for everything else) to produce the full resource path. Returns NULL if the resource isn't found.

### SA_FSAA_GetTrusteeMembership

**Signature:** `(@serverID INT, @objectSID VARCHAR(184), @trusteeType INT, @groupPath SA_CORE_GroupMemberPathTable READONLY, @directlyApplied INT = 0, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS TABLE (NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`
**Type:** Multi-statement table-valued function

Recursively expands a group or principal into its effective members. Handles well-known SIDs specially — `S-1-5-2 NETWORK`, `S-1-5-3 BATCH`, `S-1-5-4 INTERACTIVE`, `S-1-5-6 SERVICE`, `S-1-5-13 TERMINAL SERVER USER`, `S-1-5-14 REMOTE INTERACTIVE LOGON`, `S-1-2-0 LOCAL` — by routing through `SA_FSAA_GetPolicyMembership`. Domain groups are expanded via `SA_CORE_GetDomainGroupMembershipEx` or `SA_ADInventory_GroupMembersView`; local groups via `SA_FSAA_GetLocalGroupMembership`. The `@groupPath` parameter prevents infinite recursion.

### SA_FSAA_IsTrusteeMember

**Signature:** `(@serverID INT, @trusteeSID VARCHAR(184), @trusteeDomain NVARCHAR(256), @trusteeType INT, @groupSID VARCHAR(184), @groupDomain NVARCHAR(256), @groupType INT, @directlyApplied INT) RETURNS INT`
**Type:** Scalar function

Returns `1` if the trustee is a recursive member of the group, else `0`. Encodes fast paths for `Everyone (S-1-1-0)`, `Authenticated Users (S-1-5-11)` (excluding Guest, Anonymous, and Domain Computers), and `Domain Users (S-1-5-21-...-513)`. Falls back to `SA_FSAA_GetTrusteeMembership` when no fast path can answer the relationship.

### SA_FSAA_RecurseFolders

**Signature:** `(@serverID INT, @resourceID BIGINT) RETURNS TABLE (ID, NestedLevel, ResourceType, DeletedUSN)`
**Type:** Inline table-valued function (recursive CTE)

Returns every descendant of the given resource. Used for subtree aggregation queries.

### SA_FSAA_WalkTrusteePath

**Signature:** `(@serverID INT, @trusteeType INT, @trusteeSID VARCHAR(184), @trusteeDomain NVARCHAR(256), @trusteeDisplay NVARCHAR(256), @groupSID VARCHAR(184), @groupType INT, @groupDomain NVARCHAR(256), @groupName NVARCHAR(256), @pathString NVARCHAR(1024), ...) RETURNS TABLE`
**Type:** Inline table-valued function

Helper that walks an effective-membership path and accumulates the membership chain into a textual breadcrumb (`group → subgroup → user`).

### SA_FSAA_GetTrusteeInformationEx

**Signature:** `(@serverID INT, @trusteeID INT, @objectSID VARCHAR(184), @trusteeType SMALLINT) RETURNS TABLE (NTDomain, NTName, DisplayName, SID, TrusteeType, IsHistoricalSID, PrincipalId)`
**Type:** Inline table-valued function

Returns a single row of trustee identity. For local trustees the values come from `SA_FSAA_LocalTrustees`; for domain trustees they come from the AD inventory's `SA_ADInventory_*` tables matched by SID (handling SID History when `IsHistoricalSID = 1`). Two definitions exist in the script; the `#SA_ImportObject` helper chooses the current version at runtime.

### SA_FSAA_GetTrusteeInformation

**Signature:** `(@serverID INT, @trusteeID INT) RETURNS TABLE (NTDomain, NTName, DisplayName, SID, TrusteeType, IsHistoricalSID, PrincipalId)`
**Type:** Inline table-valued function

Wrapper around `SA_FSAA_GetTrusteeInformationEx` that pulls the SID and `TrusteeType` from `SA_FSAA_Trustees` first.

### SA_FSAA_GetResourcePermissions

**Signature:** `(@serverID INT, @resourceID BIGINT) RETURNS TABLE (AllowRights, DenyRights, AllowMask, DenyMask, TrusteeID, NTDomain, NTName, DisplayName, SID, TrusteeType)`
**Type:** Inline table-valued function

Joins `Resources → Rights → LocalTrustees` and returns the ACL of the resource as a flat table (one row per ACE).

### SA_FSAA_GetGatePermissions

**Signature:** `(@serverID INT, @gateID INT) RETURNS TABLE (AllowRights, DenyRights, TrusteeID, NTDomain, NTName, DisplayName, SID, TrusteeType)`
**Type:** Inline table-valued function

Returns the share-level permissions for a gate. Computes the synthetic Allow/Deny bits by `b.Allow * -63` (turning the boolean into the full 6-bit `LRWDMA` mask).

### SA_FSAA_GetExpandedPermissions

**Signature:** `(@serverID INT, @resourceID BIGINT, @ispolicy BIT, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @expandedRights TABLE (AllowRights, DenyRights, ...trustee columns...)`
**Type:** Multi-statement table-valued function

Takes a resource's ACL and recursively expands every group ACE into per-leaf-trustee entries via `SA_FSAA_GetTrusteeMembership`. Used by `SA_FSAA_ExpandedPermissionsView`.

### SA_FSAA_GetExpandedPermissionsEx

**Signature:** `(@serverID INT, @resourceID BIGINT, @ispolicy INT, @trusteeFilter SA_CORE_TrusteeInformationTable READONLY, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @expandedRights TABLE (...)`
**Type:** Multi-statement table-valued function

Same as `SA_FSAA_GetExpandedPermissions` but pre-filtered to only the trustees in `@trusteeFilter`. Significantly faster when the caller cares about a specific user.

### SA_FSAA_GetExpandedAzureSharePermissions

**Signature:** `(@serverId INT, @azureShareId BIGINT) RETURNS @expandedRights TABLE (AllowRights, DenyRights, TrusteeDomain, TrusteeNTName, ...)`
**Type:** Multi-statement table-valued function

Azure-Files-specific equivalent of `SA_FSAA_GetExpandedPermissions`.

### SA_FSAA_GetPolicyMembership

**Signature:** `(@serverID INT, @policyID INT, @groupPath SA_CORE_GroupMemberPathTable READONLY, @directlyApplied INT = 0, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveMembers TABLE (...)`
**Type:** Multi-statement table-valued function

Resolves the trustees of a local-policy gate (e.g. *Logon Interactively*). Reads `SA_FSAA_Policies` and recursively expands each policy member.

### SA_FSAA_GetLocalGroupMembership

**Signature:** `(@serverID INT, @objectSID VARCHAR(184), @groupPath SA_CORE_GroupMemberPathTable READONLY, @directlyApplied INT = 0, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveMembers TABLE (...)`
**Type:** Multi-statement table-valued function

Walks `SA_FSAA_TrusteeEquivalence` for the given local group and recursively expands each equivalent trustee.

### SA_FSAA_GetEffectiveRights

**Signature:** `(@serverID INT, @resourceID BIGINT, @gateID INT, @directlyApplied INT, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveRights TABLE (AllowRights, DenyRights, ...trustee columns..., DirectTrustee BIT)`
**Type:** Multi-statement table-valued function

Computes the effective allow/deny bits for every leaf trustee that can reach the resource through the gate. Composes share permissions, NTFS permissions, group membership expansion, and domain inventory data. The heaviest UDF in the schema. Used by `SA_FSAA_EffectiveAccessView`.

### SA_FSAA_GetEffectiveRightsEx

**Signature:** `(@serverID INT, @resourceID BIGINT, @gateID INT, @trusteeFilter SA_CORE_TrusteeInformationTable READONLY, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveRights TABLE (...)`
**Type:** Multi-statement table-valued function

Same as `SA_FSAA_GetEffectiveRights` but filtered to a specific set of trustees.

### SA_FSAA_GetTrusteePermissionSource

**Signature:** `(@serverID INT, @resourceID BIGINT, @gateID INT, @trusteeSID VARCHAR(184)) RETURNS @permissionSource TABLE (HOST VARCHAR(64) NOT NULL, AllowRights, DenyRights, AllowRightsDescription, ...)`
**Type:** Multi-statement table-valued function

Given a resource, gate, and trustee SID, returns the source ACEs that contribute to that trustee's effective rights. Useful for "who granted this user access?" diagnostic UI.

### SA_FSAA_LookupResourcePath

**Signature:** `(@serverID INT, @path NVARCHAR(1024)) RETURNS BIGINT`
**Type:** Scalar function

Resolves a backslash-delimited path string against the resource tree for a host and returns the matching `SA_FSAA_Resources.ID`, or NULL if no match.

### SA_FSAA_LookupUncPath

**Signature:** `(@path NVARCHAR(1024)) RETURNS @results TABLE (HostID INT NOT NULL, HostName NVARCHAR(256) NOT NULL, GateID INT NOT NULL, ResourceID BIGINT NULL, ...)`
**Type:** Multi-statement table-valued function

Parses a UNC path (`\\server\share\path`) and returns the matching host, gate, and resource. Maps paths captured in DLP or Activity tables back into the FSAA structural keyspace.

### SA_FSAA_UpdateStatistics

**Signature:** `()`
**Type:** Stored procedure (no parameters)

Runs `UPDATE STATISTICS` on the FSAA tables. The structural-import job invokes this procedure after a bulk import to keep the SQL Server query optimizer's row-count estimates current. Long-running on large data sets.

## Activity Collector Functions {#activity-collector-functions}

### SA_FSAC_GetActiveFolderPermissions

**Signature:** `(@serverID INT, @resourceID BIGINT, @activityDays INT) RETURNS @results TABLE (AllowRights, ActiveRights, AllowRightsDescription, ActiveRightsDescription, TrusteeID, NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`
**Type:** Multi-statement table-valued function

For a given resource and a recent activity window (`@activityDays`), returns each trustee's `AllowRights` (statically granted) alongside `ActiveRights` (the subset of those rights the trustee has actually exercised). The "active" mask is computed by walking the resource's subtree of recent daily activity through `SA_FSAC_GetFolderActivityMask`, then ANDing it with the granted rights. Drives the *Least Privileged Access* report.

### SA_FSAC_GetFolderActivityMask

**Signature:** `(@serverID INT, @resourceID BIGINT, @activityDays INT) RETURNS @results TABLE (ActiveRights, ActiveRightsDescription, TrusteeID, NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`
**Type:** Multi-statement table-valued function

Translates a user's recent activity (within `@activityDays` days) on a folder subtree into the equivalent rights bitmask. Each operation type maps to a specific right: Read → R, Add/Update/Rename → W, Delete → D, PermissionChange → M; any activity at all also implies List (L). Returns one row per user with the consolidated `ActiveRights` mask and identity columns from `SA_FSAA_GetTrusteeInformation`.

## DFS Functions {#dfs-functions}

### SA_FSDFS_LookupDfsPath

**Signature:** `(@path NVARCHAR(1024)) RETURNS @values TABLE (TargetHostID INT, TargetGateID INT, TargetResourceID BIGINT, TargetFolderPath NVARCHAR(1024) NOT NULL)`
**Type:** Multi-statement table-valued function

Resolves a DFS-style path (e.g. `\\contoso.com\public\sales\reports`) by walking `SA_FSDFS_Links` to find the matching link and returning the underlying physical target — the host, gate, resource, and remaining sub-folder path beneath the link. Translates DFS-relative report rows back into FSAA structural identifiers.

## Shared Core Functions {#shared-core-functions}

The FSAA Create-Schema job (Task 26) creates these functions, but they live in the shared `dbo` schema used across multiple data collector modules. They handle domain group membership expansion and trustee-permission resolution by integrating with AD Inventory tables.

### SA_CORE_GetDomainGroupMembershipEx

**Signature:** `(@objectSID VARCHAR(184), @serverID INT, @groupPath SA_CORE_GroupMemberPathTable READONLY) RETURNS @members TABLE (NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`
**Type:** Multi-statement table-valued function

Recursively expands a domain group into its members by querying `SA_ADInventory_GroupMembersView`. The `@groupPath` parameter prevents infinite recursion. Returns one row per effective leaf member.

### SA_CORE_GetDomainGroupMembership

**Signature:** `(@objectSID VARCHAR(184), @serverID INT, @groupPath SA_CORE_GroupMemberPathTable READONLY) RETURNS @members TABLE (NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`
**Type:** Multi-statement table-valued function

Simplified variant of `SA_CORE_GetDomainGroupMembershipEx`. Expands a domain group via the AD Inventory view without the extended membership path handling.

### SA_CORE_IsTrusteeMember

**Signature:** `(@trusteeSID VARCHAR(184), @groupSID VARCHAR(184), @serverID INT) RETURNS INT`
**Type:** Scalar function

Returns `1` if the trustee (identified by `@trusteeSID`) is a recursive member of the group (identified by `@groupSID`), otherwise `0`. Uses `SA_CORE_GetDomainGroupMembershipEx` for the expansion.

### SA_CORE_GetTrusteePermissionEx

**Signature:** `(@serverID INT, @resourceID BIGINT, @trusteeFilter SA_CORE_TrusteeInformationTable READONLY, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @permissions TABLE (AllowRights, DenyRights, ...trustee columns...)`
**Type:** Multi-statement table-valued function

Returns the effective permissions for a specific set of trustees on a resource, filtering the ACL expansion through `@trusteeFilter`. Designed as the cross-module equivalent of `SA_FSAA_GetExpandedPermissionsEx` for use in contexts where only selected trustees are required.

### SA_CORE_GetTrusteePermission

**Signature:** `(@serverID INT, @resourceID BIGINT, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @permissions TABLE (AllowRights, DenyRights, ...trustee columns...)`
**Type:** Multi-statement table-valued function

Unfiltered variant of `SA_CORE_GetTrusteePermissionEx` — returns effective permissions for all trustees on the resource. Used when the caller needs the full expanded ACL rather than a targeted subset.

### SA_CORE_GetEntraTrusteePermissionEx

**Signature:** `(@serverID INT, @azureShareId BIGINT, @trusteeFilter SA_CORE_TrusteeInformationTable READONLY) RETURNS @permissions TABLE (AllowRights, DenyRights, ...trustee columns...)`
**Type:** Multi-statement table-valued function

Azure-Files / Entra ID variant of `SA_CORE_GetTrusteePermissionEx`. Resolves effective permissions on an Azure Files share (identified by `@azureShareId`) against the Entra role assignments in `SA_Entra_RmResources`. Only meaningful in Entra-integrated environments.
