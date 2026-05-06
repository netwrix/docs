# Functions & Stored Procedures

All functions and procedures live in the `dbo` schema. Most of the table-valued functions are inline (UDFs) and are joined into views with `CROSS APPLY` / `OUTER APPLY`. Two cross-database UDF table types — `SA_CORE_GroupMemberPathTable` and `SA_CORE_GroupMembersTable` — are used as `READONLY` table-valued parameters; both come from the `SA_CORE_*` shared schema (created elsewhere).

---

## FSAA Functions

### SA_FSAA_GetPath {#sa_fsaa_getpath}

**Signature:** `(@serverID INT, @resourceID BIGINT) RETURNS NVARCHAR(4000)`

**Type:** Scalar function

**Description:** Walks the parent chain in `SA_FSAA_Resources` and concatenates names with the appropriate delimiter (`/` for Unix resources of type 5/6, `\` for everything else) to produce the full resource path. Returns NULL if the resource is not found.

---

### SA_FSAA_GetTrusteeMembership {#sa_fsaa_gettrusteemembership}

**Signature:** `(@serverID INT, @objectSID VARCHAR(184), @trusteeType INT, @groupPath SA_CORE_GroupMemberPathTable READONLY, @directlyApplied INT = 0, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveMembers TABLE (NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`

**Type:** Multi-statement table-valued function

**Description:** Recursively expands a group/principal into its effective members. Handles well-known SIDs specially (`S-1-5-2 NETWORK`, `S-1-5-3 BATCH`, `S-1-5-4 INTERACTIVE`, `S-1-5-6 SERVICE`, `S-1-5-13 TERMINAL SERVER USER`, `S-1-5-14 REMOTE INTERACTIVE LOGON`, `S-1-2-0 LOCAL`) by routing through `SA_FSAA_GetPolicyMembership`. Domain groups are expanded via `SA_CORE_GetDomainGroupMembershipEx` or `SA_ADInventory_GroupMembersView`. Local groups are expanded via `SA_FSAA_GetLocalGroupMembership`. The `@groupPath` parameter prevents infinite recursion.

---

### SA_FSAA_IsTrusteeMember {#sa_fsaa_istrusteemember}

**Signature:** `(@serverID INT, @trusteeSID VARCHAR(184), @trusteeDomain NVARCHAR(256), @trusteeType INT, @groupSID VARCHAR(184), @groupDomain NVARCHAR(256), @groupType INT, @directlyApplied INT) RETURNS INT`

**Type:** Scalar function

**Description:** Returns 1 if the trustee is a (recursive) member of the group, else 0. Encodes well-known fast paths for `Everyone (S-1-1-0)`, `Authenticated Users (S-1-5-11)` (excluding Guest, Anonymous, and Domain Computers), and `Domain Users (S-1-5-21-...-513)`. Falls back to `SA_FSAA_GetTrusteeMembership` when the relationship cannot be answered by a fast path.

---

### SA_FSAA_RecurseFolders {#sa_fsaa_recursefolders}

**Signature:** `(@serverID INT, @resourceID BIGINT) RETURNS TABLE (ID, NestedLevel, ResourceType, DeletedUSN)`

**Type:** Inline table-valued function (recursive CTE)

**Description:** Returns every descendant of the given resource (used for subtree aggregation queries).

---

### SA_FSAA_WalkTrusteePath {#sa_fsaa_walktrusteepath}

**Signature:** `(@serverID INT, @trusteeType INT, @trusteeSID VARCHAR(184), @trusteeDomain NVARCHAR(256), @trusteeDisplay NVARCHAR(256), @groupSID VARCHAR(184), @groupType INT, @groupDomain NVARCHAR(256), @groupName NVARCHAR(256), @pathString NVARCHAR(1024), ...) RETURNS TABLE`

**Type:** Inline table-valued function

**Description:** Helper that walks an effective-membership path and accumulates the membership chain into a textual breadcrumb (`group → subgroup → user`).

---

### SA_FSAA_GetTrusteeInformationEx {#sa_fsaa_gettrusteeinformationex}

**Signature:** `(@serverID INT, @trusteeID INT, @objectSID VARCHAR(184), @trusteeType SMALLINT) RETURNS TABLE (NTDomain, NTName, DisplayName, TrusteeType, IsHistoricalSID, PrincipalId)`

**Type:** Inline table-valued function

**Description:** Returns a single row of trustee identity. For local trustees the values come from `SA_FSAA_LocalTrustees`; for domain trustees they come from the AD inventory's `SA_ADInventory_*` tables matched by SID (handling SID History when `IsHistoricalSID = 1`). The function does not project the SID — callers pass it in via `@objectSID` and the wrapper `SA_FSAA_GetTrusteeInformation` re-emits it from `SA_FSAA_Trustees`.

---

### SA_FSAA_GetTrusteeInformation {#sa_fsaa_gettrusteeinformation}

**Signature:** `(@serverID INT, @trusteeID INT) RETURNS TABLE (NTDomain, NTName, DisplayName, SID, TrusteeType, IsHistoricalSID, PrincipalId)`

**Type:** Inline table-valued function

**Description:** Wrapper around `SA_FSAA_GetTrusteeInformationEx` that pulls the SID and `TrusteeType` from `SA_FSAA_Trustees` first.

---

### SA_FSAA_GetResourcePermissions {#sa_fsaa_getresourcepermissions}

**Signature:** `(@serverID INT, @resourceID BIGINT) RETURNS TABLE (AllowRights, DenyRights, AllowMask, DenyMask, TrusteeID, NTDomain, NTName, DisplayName, SID, TrusteeType)`

**Type:** Inline table-valued function

**Description:** Joins `Resources → Rights → LocalTrustees` and returns the ACL of the resource as a flat table (one row per ACE).

---

### SA_FSAA_GetGatePermissions {#sa_fsaa_getgatepermissions}

**Signature:** `(@serverID INT, @gateID INT) RETURNS TABLE (AllowRights, DenyRights, TrusteeID, NTDomain, NTName, DisplayName, SID, TrusteeType)`

**Type:** Inline table-valued function

**Description:** Returns the share-level permissions for a gate. Computes the synthetic Allow/Deny bits by `b.Allow * -63` (turn the boolean into the full 6-bit `LRWDMA` mask).

---

### SA_FSAA_GetExpandedPermissions {#sa_fsaa_getexpandedpermissions}

**Signature:** `(@serverID INT, @resourceID BIGINT, @ispolicy BIT, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @expandedRights TABLE (AllowRights, DenyRights, ...trustee columns...)`

**Type:** Multi-statement table-valued function

**Description:** Takes a resource's ACL and recursively expands every group ACE into per-leaf-trustee entries via `SA_FSAA_GetTrusteeMembership`. Used by `SA_FSAA_ExpandedPermissionsView`.

---

### SA_FSAA_GetExpandedPermissionsEx {#sa_fsaa_getexpandedpermissionsex}

**Signature:** `(@serverID INT, @resourceID BIGINT, @ispolicy INT, @trusteeFilter SA_CORE_TrusteeInformationTable READONLY, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @expandedRights TABLE (...)`

**Type:** Multi-statement table-valued function

**Description:** Same as `SA_FSAA_GetExpandedPermissions` but pre-filtered to only the trustees in `@trusteeFilter` (significantly faster when caller cares about a specific user).

---

### SA_FSAA_GetPolicyMembership {#sa_fsaa_getpolicymembership}

**Signature:** `(@serverID INT, @policyID INT, @groupPath SA_CORE_GroupMemberPathTable READONLY, @directlyApplied INT = 0, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveMembers TABLE (...)`

**Type:** Multi-statement table-valued function

**Description:** Resolves the trustees of a local-policy gate (for example, *Logon Interactively*). Reads `SA_FSAA_Policies` and recursively expands each policy member.

---

### SA_FSAA_GetLocalGroupMembership {#sa_fsaa_getlocalgroupmembership}

**Signature:** `(@serverID INT, @objectSID VARCHAR(184), @groupPath SA_CORE_GroupMemberPathTable READONLY, @directlyApplied INT = 0, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveMembers TABLE (NTDomain, NTName, DisplayName, ObjectSID, TrusteeType, IsDirect BIT NOT NULL)`

**Type:** Multi-statement table-valued function

**Description:** Walks `SA_FSAA_TrusteeEquivalence` for the given local group and recursively expands each equivalent trustee. Unlike the sibling membership UDFs, the return-table includes an extra `IsDirect BIT` column flagging directly-applied vs. transitively-resolved members.

---

### SA_FSAA_GetEffectiveRights {#sa_fsaa_geteffectiverights}

**Signature:** `(@serverID INT, @resourceID BIGINT, @gateID INT, @directlyApplied INT, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveRights TABLE (AllowRights, DenyRights, ...trustee columns..., DirectTrustee BIT)`

**Type:** Multi-statement table-valued function

**Description:** Computes the *effective* allow/deny bits for every leaf trustee that can reach the resource through the gate. This is the heaviest UDF in the schema — it composes share permissions, NTFS permissions, group membership expansion, and domain inventory data. Used by `SA_FSAA_EffectiveAccessView`.

---

### SA_FSAA_GetEffectiveRightsEx {#sa_fsaa_geteffectiverightsex}

**Signature:** `(@serverID INT, @resourceID BIGINT, @gateID INT, @trusteeFilter SA_CORE_TrusteeInformationTable READONLY, @membershipOverride SA_CORE_GroupMembersTable READONLY) RETURNS @effectiveRights TABLE (...)`

**Type:** Multi-statement table-valued function

**Description:** Same as `SA_FSAA_GetEffectiveRights` but filtered to a specific set of trustees.

---

### SA_FSAA_GetTrusteePermissionSource {#sa_fsaa_gettrusteepermissionsource}

**Signature:** `(@serverID INT, @resourceID BIGINT, @gateID INT, @trusteeSID VARCHAR(184)) RETURNS @permissionSource TABLE (HOST VARCHAR(64) NOT NULL, AllowRights, DenyRights, AllowRightsDescription, ...)`

**Type:** Multi-statement table-valued function

**Description:** Given a resource, gate, and trustee SID, returns the *source* ACEs that contribute to that trustee's effective rights — useful for "who granted this user access?" diagnostic UI.

---

### SA_FSAA_LookupResourcePath {#sa_fsaa_lookupresourcepath}

**Signature:** `(@serverID INT, @path NVARCHAR(1024)) RETURNS BIGINT`

**Type:** Scalar function

**Description:** Resolves a backslash-delimited path string against the resource tree for a host and returns the matching `SA_FSAA_Resources.ID`, or NULL if no match.

---

### SA_FSAA_LookupUncPath {#sa_fsaa_lookupuncpath}

**Signature:** `(@path NVARCHAR(1024)) RETURNS @results TABLE (HostID INT NOT NULL, HostName NVARCHAR(256) NOT NULL, GateID INT NOT NULL, ResourceID BIGINT NULL, ShareName NVARCHAR(256) NOT NULL, FolderPath NVARCHAR(1024) NOT NULL)`

**Type:** Multi-statement table-valued function

**Description:** Parses a UNC path (`\\server\share\path`) and returns the matching host, gate, and resource, plus the parsed `ShareName` and the folder path beneath the share. Used to map paths captured in DLP / Activity tables back into the FSAA structural keyspace.

---

### SA_FSAA_UpdateStatistics {#sa_fsaa_updatestatistics}

**Signature:** `()`

**Type:** Stored procedure (no parameters)

**Description:** Runs `UPDATE STATISTICS` on the FSAA tables. Invoked by the structural-import job after a bulk import to keep the SQL Server query optimizer's row-count estimates current. Long-running on large data sets.

---

## Activity Collector Functions (SA_FSAC_*) {#activity-collector-functions-sa_fsac_}

### SA_FSAC_GetActiveFolderPermissions {#sa_fsac_getactivefolderpermissions}

**Signature:** `(@serverID INT, @resourceID BIGINT, @activityDays INT) RETURNS @results TABLE (AllowRights, ActiveRights, AllowRightsDescription, ActiveRightsDescription, TrusteeID, NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`

**Type:** Multi-statement table-valued function

**Description:** For a given resource and a recent activity window (`@activityDays`), returns each trustee's `AllowRights` (statically granted) alongside `ActiveRights` (the subset of those rights the trustee has actually exercised). The "active" mask is computed by walking the resource's subtree of recent daily activity through `SA_FSAC_GetFolderActivityMask`, then ANDing it with the granted rights — so it shows what each user is *using*, not just what they *can* use. Drives the *Least Privileged Access* report.

---

### SA_FSAC_GetFolderActivityMask {#sa_fsac_getfolderactivitymask}

**Signature:** `(@serverID INT, @resourceID BIGINT, @activityDays INT) RETURNS @results TABLE (ActiveRights, ActiveRightsDescription, TrusteeID, NTDomain, NTName, DisplayName, ObjectSID, TrusteeType)`

**Type:** Multi-statement table-valued function

**Description:** Translates a user's recent activity (within `@activityDays` days) on a folder subtree into the equivalent rights bitmask. Each operation type maps to a specific right (Read → R, Add/Update/Rename → W, Delete → D, PermissionChange → M); any activity at all also implies List (L). Returns one row per user with the consolidated `ActiveRights` mask and identity columns from `SA_FSAA_GetTrusteeInformation`.

---

## DFS Functions (SA_FSDFS_*) {#dfs-functions-sa_fsdfs_}

### SA_FSDFS_LookupDfsPath {#sa_fsdfs_lookupdfsepath}

**Signature:** `(@path NVARCHAR(1024)) RETURNS @values TABLE (TargetHostID INT NULL, TargetGateID INT NULL, TargetResourceID BIGINT NULL, TargetFolderPath NVARCHAR(1024) NOT NULL)`

**Type:** Multi-statement table-valued function

**Description:** Resolves a DFS-style path (for example, `\\contoso.com\public\sales\reports`) by walking `SA_FSDFS_Links` to find the matching link and returning the underlying physical target — the host, gate, resource, and remaining sub-folder path beneath the link. Used to translate DFS-relative report rows back into FSAA structural identifiers.
