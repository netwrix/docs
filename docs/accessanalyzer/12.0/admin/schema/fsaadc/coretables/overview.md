# Core Data Collection Tables

The FSAA DC schema contains 47 core tables populated by four collector modules: the File System Access Analyzer (`SA_FSAA_`), the File System Activity Collector (`SA_FSAC_`), the Sensitive Data / DLP collector (`SA_FSDLP_`), and the DFS Namespace collector (`SA_FSDFS_`). All `SA_FSAA_*` tables are partitioned by `HOST INT` (FK → `SA_FSAA_Hosts.ID`) with `ON DELETE CASCADE` so that removing a host purges its entire data set.

## FSAA Tables

### SA_FSAA_SchemaVer {#sa_fsaa_schemaver}

Single-row table holding the FSAA schema version string. The CREATE-Schema job clears and re-inserts the version on every run. Used by upgrades to decide whether to apply migrations.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| SchemaVer | varchar | 64 | No | | | | Schema version (current value `8.0.17`) |

**Primary Key:** None
**Foreign Keys:** None
**Indexes:** None

### SA_FSAA_Hosts {#sa_fsaa_hosts}

Registry of every host scanned by FSAA. One row per host. The integer `ID` is the FK target for every other FSAA table's `HOST` column. `USN`/`AccessUSN`/`ActivityUSN`/`DLPUSN` are per-scan-type Update Sequence Numbers used by the C# importer to detect deltas; the matching `*GUID` columns identify the SQLite cache that produced the last upload.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| ID | int | | No | PK | | IDENTITY(1,1) | Surrogate host ID — referenced by every FSAA table |
| HOST | nvarchar | 64 | No | | | | Host name (NetBIOS/FQDN). Has unique constraint |
| SAConsole | nvarchar | 64 | No | | | | Console host that initiated the scan |
| ScanTime | datetime | | No | | | | Time of most recent scan |
| GUID | varchar | 38 | No | | | `''` | Top-level scan correlation GUID |
| USN | int | | No | | | `-1` | Top-level Update Sequence Number for the structural scan |
| AccessUSN | int | | No | | | `-1` | USN tracking the latest Access (FSAA) data import |
| AccessGUID | varchar | 38 | No | | | `''` | Correlation GUID for the latest Access scan |
| ActivityUSN | int | | No | | | `-1` | USN tracking the latest Activity (FSAC) data import |
| ActivityGUID | varchar | 38 | No | | | `''` | Correlation GUID for the latest Activity scan |
| DLPUSN | int | | No | | | `-1` | USN tracking the latest DLP scan |
| DLPGUID | varchar | 38 | No | | | `''` | Correlation GUID for the latest DLP scan |
| LastScanHost | nvarchar | 64 | Yes | | | | Hostname of machine that performed the last scan |

**Primary Key:** `PK_SA_FSAA_Hosts` — clustered on `(ID)`
**Foreign Keys:** None
**Indexes:** `UQ_SA_FSAA_Hosts_HOST` — unique nonclustered on `(HOST)`

### SA_FSAA_ImportHistory {#sa_fsaa_importhistory}

Append-only history of every successful data import for each host. One row per host per import per scan type.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host that the import covered |
| GUID | varchar | 38 | No | | | | Correlation GUID for the imported scan |
| USN | int | | No | | | | USN observed at import time |
| ScanType | varchar | 32 | No | | | | One of `Access`, `Activity`, `DLP` |
| ImportTime | datetime | | No | PK | | `CURRENT_TIMESTAMP` | When the import ran |

**Primary Key:** `PK_SA_FSAA_ImportHistory` — clustered on `(HOST, ImportTime)`
**Foreign Keys:** `FK_SA_FSAA_ImportHistory_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_Trustees {#sa_fsaa_trustees}

Every distinct security principal observed in ACLs on a host, identified by `(HOST, ID)`. Holds only the SID and `TrusteeType` enumeration; human-readable name fields live in `SA_FSAA_LocalTrustees` for local accounts, or are looked up from the AD inventory at view time.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | int | | No | PK | | | Per-host trustee ID |
| SID | varchar | 184 | No | | | | Security identifier (string form, e.g. `S-1-5-21-...`) |
| TrusteeType | smallint | | No | | | | See [TrusteeType enumeration](../enumeration/overview.md#trusteetype) |

**Primary Key:** `PK_SA_FSAA_Trustees` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSAA_Trustees_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_LocalTrustees {#sa_fsaa_localtrustees}

Subset of `SA_FSAA_Trustees`: the local accounts and groups that exist on the scanned host. Adds NT-style domain/name and display name. `(HOST, ID)` is a foreign key into `SA_FSAA_Trustees`. `IsDisabled` is stored as `'Y'`/`'N'`.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Trustees.HOST | | Host partition |
| ID | int | | No | PK | FK → SA_FSAA_Trustees.ID | | Trustee ID — must exist in `SA_FSAA_Trustees` |
| NTDomain | nvarchar | 128 | Yes | | | | Domain portion of NT-style name |
| NTName | nvarchar | 256 | Yes | | | | SAM account name |
| DisplayName | nvarchar | 256 | Yes | | | | Display name |
| SID | varchar | 184 | No | | | | SID (denormalized copy from `SA_FSAA_Trustees`) |
| TrusteeType | smallint | | No | | | | See [TrusteeType enumeration](../enumeration/overview.md#trusteetype) |
| IsDisabled | varchar | 2 | No | | | | `'Y'` / `'N'` |
| USN | int | | No | | | `-1` | USN at last sighting |
| DeletedUSN | int | | Yes | | | | USN when the principal was removed (NULL = still present) |

**Primary Key:** `PK_SA_FSAA_LocalTrustees` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSAA_LocalTrustees_ID` — `(HOST, ID) → SA_FSAA_Trustees(HOST, ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_TrusteeEquivalence {#sa_fsaa_trusteeequivalence}

Group-membership edges between local trustees on the host. Each row is a `(group → member)` pair, where `EquivalentTrusteeID` is the group and `TrusteeID` is the member. Used to expand local-group memberships during effective-access calculations.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| TrusteeID | int | | No | PK | FK → SA_FSAA_Trustees.ID | | Member trustee |
| EquivalentTrusteeID | int | | No | PK | FK → SA_FSAA_LocalTrustees.ID | | Group (local trustee) the member belongs to |

**Primary Key:** `PK_SA_FSAA_TrusteeEquivalence` — clustered on `(HOST, TrusteeID, EquivalentTrusteeID)`
**Foreign Keys:**
- `FK_SA_FSAA_TrusteeEquivalence_TrusteeID` — `(HOST, TrusteeID) → SA_FSAA_Trustees(HOST, ID)`
- `FK_SA_FSAA_TrusteeEquivalence_EquivalentTrusteeID` — `(HOST, EquivalentTrusteeID) → SA_FSAA_LocalTrustees(HOST, ID) ON DELETE CASCADE`

**Indexes:** `SA_FSAA_TrusteeEquivalence_Group_IDX` — nonclustered on `(HOST, EquivalentTrusteeID)` INCLUDE `(TrusteeID)`

### SA_FSAA_Rights {#sa_fsaa_rights}

Permission-entry table. Every distinct ACL is given a `RightsProxyID`; resources sharing an identical ACL share one `RightsProxyID`, deduplicating storage dramatically. Each row is one access-control entry: a `TrusteeID` plus its allow/deny rights broken down by direct/inherited and by simplified bitmask vs. full Windows mask. Created with `WITH (DATA_COMPRESSION = ROW)` on Enterprise editions.

The `AllowRights`/`DenyRights` columns use the simplified six-bit FSAA representation — see the [Rights Bitmask enumeration](../enumeration/overview.md#rights-bitmask). The `*Mask` columns hold the full Windows access mask.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| RightsProxyID | int | | No | PK | | | Deduplication key — multiple resources may share one proxy |
| TrusteeID | int | | No | PK | FK → SA_FSAA_Trustees.ID | | The principal this ACE applies to |
| AllowRights | smallint | | No | | | | Combined direct+inherited allow bits |
| DenyRights | smallint | | No | | | | Combined direct+inherited deny bits |
| DirectAllowRights | smallint | | No | | | | Direct (non-inherited) allow bits |
| DirectDenyRights | smallint | | No | | | | Direct deny bits |
| InheritedAllowRights | smallint | | No | | | | Inherited allow bits |
| InheritedDenyRights | smallint | | No | | | | Inherited deny bits |
| AllowMask | int | | No | | | | Full Windows allow access mask |
| DenyMask | int | | No | | | | Full Windows deny access mask |
| DirectAllowMask | int | | No | | | | Direct allow mask |
| DirectDenyMask | int | | No | | | | Direct deny mask |
| InheritedAllowMask | int | | No | | | | Inherited allow mask |
| InheritedDenyMask | int | | No | | | | Inherited deny mask |

**Primary Key:** `PK_SA_FSAA_Rights` — clustered on `(HOST, RightsProxyID, TrusteeID)`
**Foreign Keys:** `FK_SA_FSAA_Rights_TrusteeID` — `(HOST, TrusteeID) → SA_FSAA_Trustees(HOST, ID)`
**Indexes:** None beyond the clustered PK

### SA_FSAA_Tags {#sa_fsaa_tags}

Distinct file tag values per host. Used in a two-level dedup pattern: `Tags` holds the unique tag string, `TagKeys`/`TagProxies` define a multi-tag set, and `Resources.TagProxyID` references a particular set.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| TagID | int | | No | PK | | | Per-host tag ID |
| Tag | nvarchar | MAX | No | | | | Tag string (e.g. an Azure Information Protection label or custom tag) |
| Source | tinyint | | No | | | `0` | Tag source |

**Primary Key:** `PK_SA_FSAA_Tags` — clustered on `(HOST, TagID)`
**Foreign Keys:** `FK_SA_FSAA_Tags_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_TagKeys {#sa_fsaa_tagkeys}

Defines a "tag set" identity. Each `TagProxyID` represents a unique combination of tag values shared by one or more resources.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| TagProxyID | int | | No | PK | | | Identifier for the tag set |

**Primary Key:** `PK_SA_FSAA_TagKeys` — clustered on `(HOST, TagProxyID)`
**Foreign Keys:** `FK_SA_FSAA_TagKeys_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_TagProxies {#sa_fsaa_tagproxies}

Membership of `Tags` in a `TagKeys` set: each row links one tag to one tag-proxy. A resource's `TagProxyID` points at a row in `TagKeys`; joining through `TagProxies` yields the list of tags applied.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| TagProxyID | int | | No | PK | FK → SA_FSAA_TagKeys.TagProxyID | | Tag set |
| TagID | int | | No | PK | FK → SA_FSAA_Tags.TagID | | Tag in the set |

**Primary Key:** `PK_SA_FSAA_TagProxies` — clustered on `(HOST, TagProxyID, TagID)`
**Foreign Keys:**
- `FK_SA_FSAA_TagProxies_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAA_TagProxies_TagProxyID` — `(HOST, TagProxyID) → SA_FSAA_TagKeys(HOST, TagProxyID)`
- `FK_SA_FSAA_TagProxies_TagID` — `(HOST, TagID) → SA_FSAA_Tags(HOST, TagID)`

**Indexes:** None beyond the clustered PK

### SA_FSAA_Resources {#sa_fsaa_resources}

The structural backbone — every share, folder, and file the DC has seen on the host, plus its parent linkage, owner, ACL pointer, gate pointer, tag pointer, sizing, and timestamps. This is the largest table in the schema by row count and is created `WITH (DATA_COMPRESSION = ROW)` on Enterprise editions.

`RightsProxyID`, `GatesProxyID`, and `TagProxyID` are logical (un-enforced) denormalized pointers; no FK constraints exist on them so that bulk imports can stage rows in any order.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | bigint | | No | PK | | | Per-host resource ID (bigint to support very large file systems) |
| ParentResourceID | bigint | | Yes | | FK → SA_FSAA_Resources.ID | | Parent folder/share. NULL = root |
| Name | nvarchar | 2000 | No | | | | Leaf name (folder/file name; share name for shares) |
| ResourceType | tinyint | | No | | | | See [ResourceType enumeration](../enumeration/overview.md#resourcetype) |
| OwnerID | int | | Yes | | FK → SA_FSAA_Trustees.ID | | Resource owner trustee |
| RightsProxyID | int | | Yes | | | | Logical pointer into `SA_FSAA_Rights` (no enforced FK; NULL = inherited from parent) |
| GatesProxyID | bigint | | Yes | | | | Logical pointer into `SA_FSAA_GatesProxy` (no enforced FK) |
| NestedLevel | int | | No | | | | Depth in the resource tree (0 = root) |
| Size | bigint | | Yes | | | | Aggregated file-content size |
| LastModified | datetime | | Yes | | | | NTFS last-modified timestamp |
| LastAccessed | datetime | | Yes | | | | NTFS last-accessed timestamp |
| Created | datetime | | Yes | | | | NTFS creation timestamp |
| TagProxyID | int | | Yes | | | | Logical pointer into `SA_FSAA_TagKeys` (no enforced FK) |
| USN | int | | No | | | `-1` | Structural USN — last seen in this scan |
| DeletedUSN | int | | Yes | | | | USN when the resource was deleted (NULL = still present) |

**Primary Key:** `PK_SA_FSAA_Resources` — clustered on `(HOST, ID)`
**Foreign Keys:**
- `FK_SA_FSAA_Resources_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAA_Resources_ParentResourceID` — `(HOST, ParentResourceID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAA_Resources_OwnerID` — `(HOST, OwnerID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:**
- `SA_FSAA_Resources_Enum_IDX` — nonclustered on `(HOST, ParentResourceID)` INCLUDE `(ID, ResourceType, DeletedUSN)`
- `SA_FSAA_Resources_RightsProxyID_IDX` — nonclustered on `(HOST, RightsProxyID)` INCLUDE `(ID, GatesProxyID, DeletedUSN, ResourceType)`
- `SA_FSAA_Resources_GatesProxyID_IDX` — nonclustered on `(HOST, GatesProxyID)` INCLUDE `(ID)`
- `SA_FSAA_Resources_USN_IDX` — nonclustered on `(HOST, USN)` INCLUDE `(ID)`
- `SA_FSAA_Resources_ParentResourceID_Name_IDX` — nonclustered on `(HOST, ParentResourceID, Name)`

### SA_FSAA_UnixRights {#sa_fsaa_unixrights}

POSIX permission triplet (`Mask`, owner, group) for Unix/NFS resources. One row per resource that has Unix rights. The `Mask` column stores the standard POSIX mode bits.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ResourceID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Resource these rights apply to |
| OwnerID | int | | No | | FK → SA_FSAA_Trustees.ID | | POSIX owner trustee |
| GroupID | int | | No | | FK → SA_FSAA_Trustees.ID | | POSIX group trustee |
| Mask | int | | No | | | | POSIX mode mask |
| USN | int | | No | | | | Update Sequence Number |

**Primary Key:** `PK_SA_FSAA_UnixRights` — clustered on `(HOST, ResourceID)`
**Foreign Keys:**
- `FK_SA_FSAA_UnixRights_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID) ON DELETE CASCADE`
- `FK_SA_FSAA_UnixRights_OwnerID` — `(HOST, OwnerID) → SA_FSAA_Trustees(HOST, ID)`
- `FK_SA_FSAA_UnixRights_GroupID` — `(HOST, GroupID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAA_Gates {#sa_fsaa_gates}

A "gate" is the entry point through which clients reach a resource: an SMB share, an NFS export, an NFS export policy, or an Azure Files share. Gates have their own ACLs (share permissions) separate from resource ACLs. A gate references the underlying `ShareID` and the `FolderID` it grants access to. NFS share-level ACLs are modeled as a separate "policy" gate referenced by the `PolicyID` self-FK.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | int | | No | PK | | | Per-host gate ID |
| ShareID | bigint | | Yes | | FK → SA_FSAA_Resources.ID | | Resource that represents the share root |
| FolderID | bigint | | Yes | | FK → SA_FSAA_Resources.ID | | Folder the gate grants access to |
| PolicyID | int | | Yes | | FK → SA_FSAA_Gates.ID | | Self-FK — points at the export-policy gate when this is an NFS export |
| DisplayName | nvarchar | 256 | No | | | | Share name (e.g. `Public$`) |
| Path | nvarchar | 512 | Yes | | | | Local path of the share (e.g. `C:\Shares\Public`) |
| NestedLevel | int | | Yes | | | | Depth from the host root |
| GateType | int | | No | | | `0` | See [GateType enumeration](../enumeration/overview.md#gatetype) |
| USN | int | | No | | | `-1` | Update Sequence Number |
| DeletedUSN | int | | Yes | | | | USN at deletion (NULL = still present) |

**Primary Key:** `PK_SA_FSAA_Gates` — clustered on `(HOST, ID)`
**Foreign Keys:**
- `FK_SA_FSAA_Gates_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAA_Gates_ShareID` — `(HOST, ShareID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAA_Gates_FolderID` — `(HOST, FolderID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAA_Gates_PolicyID` — `(HOST, PolicyID) → SA_FSAA_Gates(HOST, ID)` (self-FK for NFS export policies)

**Indexes:** None beyond the clustered PK

### SA_FSAA_GatesProxy {#sa_fsaa_gatesproxy}

Many-to-many bridge from a resource to gates. A resource may be reachable through multiple shares (or no share at all). The proxy `ID` is denormalized onto `SA_FSAA_Resources.GatesProxyID`.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ID | bigint | | No | PK | | | Proxy ID — referenced by `Resources.GatesProxyID` |
| GateID | int | | No | PK | FK → SA_FSAA_Gates.ID | | Gate that grants reach to this resource |

**Primary Key:** `PK_SA_FSAA_GatesProxy` — clustered on `(HOST, ID, GateID)`
**Foreign Keys:** `FK_SA_FSAA_GatesProxy_GateID` — `(HOST, GateID) → SA_FSAA_Gates(HOST, ID) ON DELETE CASCADE`
**Indexes:** `SA_FSAA_GatesProxy_GateID_IDX` — nonclustered on `(HOST, GateID)` INCLUDE `(ID)`

### SA_FSAA_Policies {#sa_fsaa_policies}

Local Security Authority (LSA) policies attached to a host's policy gates (e.g. *Logon as a service*, *Allow log on locally*). Used by the `SA_FSAA_GetPolicyMembership` UDF to expand pseudo-trustees such as `NT AUTHORITY\INTERACTIVE` and `NT AUTHORITY\SERVICE` into underlying user accounts. `PolicyID` is a FK into `SA_FSAA_Gates` because policies are modelled as a special gate type.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| PolicyID | int | | No | PK | FK → SA_FSAA_Gates.ID | | Policy gate (1 = INTERACTIVE, 3 = BATCH, 4 = SERVICE, 5 = TERMINAL SERVER USER) |
| TrusteeID | int | | No | PK | FK → SA_FSAA_Trustees.ID | | Trustee assigned to the policy |
| Allow | smallint | | No | | | | Allow flag (1 = granted, 0 = denied) |

**Primary Key:** `PK_SA_FSAA_Policies` — clustered on `(HOST, PolicyID, TrusteeID)`
**Foreign Keys:**
- `FK_SA_FSAA_Policies_PolicyID` — `(HOST, PolicyID) → SA_FSAA_Gates(HOST, ID) ON DELETE CASCADE`
- `FK_SA_FSAA_Policies_TrusteeID` — `(HOST, TrusteeID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAA_Exceptions {#sa_fsaa_exceptions}

One row per detected access-control anomaly (e.g. *Open Access*, *Broken Inheritance*, *Direct User Permissions*). The kind of anomaly is identified by `ExceptionType` joining `SA_FSAA_ExceptionTypes`. Either `ResourceID`, `GateID`, `TrusteeID`, or `SourceTrusteeID` may be NULL depending on the exception class.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | int | | No | PK | | | Per-host exception ID |
| ExceptionType | int | | No | | FK → SA_FSAA_ExceptionTypes.ExceptionType | | Class of exception |
| GateID | int | | Yes | | FK → SA_FSAA_Gates.ID | | Gate involved (if any) |
| ResourceID | bigint | | Yes | | FK → SA_FSAA_Resources.ID | | Resource involved (if any) |
| TrusteeID | int | | Yes | | FK → SA_FSAA_Trustees.ID | | Subject trustee (if any) |
| SourceTrusteeID | int | | Yes | | FK → SA_FSAA_Trustees.ID | | Source trustee — for SID-History exceptions, the historical SID's owner |

**Primary Key:** `PK_SA_FSAA_Exceptions` — clustered on `(HOST, ID)`
**Foreign Keys:**
- `FK_SA_FSAA_Exceptions_HOST` — `(HOST) → SA_FSAA_Hosts(ID)`
- `FK_SA_FSAA_Exceptions_GateID` — `(HOST, GateID) → SA_FSAA_Gates(HOST, ID) ON DELETE CASCADE`
- `FK_SA_FSAA_Exceptions_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAA_Exceptions_TrusteeID` — `(HOST, TrusteeID) → SA_FSAA_Trustees(HOST, ID)`
- `FK_SA_FSAA_Exceptions_SourceTrusteeID` — `(HOST, SourceTrusteeID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:** `SA_FSAA_Exceptions_Resource_IDX` — nonclustered on `(HOST, ResourceID)` INCLUDE `(ExceptionType, GateID)`

### SA_FSAA_ExceptionTypes {#sa_fsaa_exceptiontypes}

Per-host catalog of every exception class FSAA can detect. `ParentType` allows hierarchical grouping of related exceptions.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ExceptionType | int | | No | PK | | | Type code (referenced by `Exceptions.ExceptionType`) |
| GUID | varchar | 38 | No | | | | Stable GUID identifying this exception kind |
| USN | int | | No | | | | Update Sequence Number |
| Name | varchar | 128 | No | | | | Short name (e.g. `OpenAccess`) |
| Description | varchar | 256 | No | | | | Human-readable description |
| Count | int | | No | | | | Cached count of `SA_FSAA_Exceptions` rows of this type |
| ParentType | int | | Yes | | | | Optional parent exception type (self-reference within the host) |

**Primary Key:** `PK_SA_FSAA_ExceptionTypes` — clustered on `(HOST, ExceptionType)`
**Foreign Keys:** `FK_SA_FSAA_ExceptionTypes_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_ProbableOwners {#sa_fsaa_probableowners}

Probable-owner heuristic results — one row per `(resource, candidate-owner)` pair, scored by file count and aggregated size of files the candidate owns within the resource subtree. Populated by the *Probable Owner* analysis job.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ResourceID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Resource (folder/share) being scored |
| OwnerID | int | | No | PK | FK → SA_FSAA_Trustees.ID | | Candidate owner |
| FileSize | bigint | | Yes | | | | Total bytes owned by this candidate within the subtree |
| FileCount | int | | Yes | | | | Number of files owned by this candidate within the subtree |

**Primary Key:** `PK_SA_FSAA_ProbableOwners` — clustered on `(HOST, ResourceID, OwnerID)`
**Foreign Keys:**
- `FK_SA_FSAA_ProbableOwners_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAA_ProbableOwners_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAA_ProbableOwners_OwnerID` — `(HOST, OwnerID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAA_FileSizes {#sa_fsaa_filesizes}

Aggregated size and count of all files within each resource subtree. Populated by the bulk-import pipeline when the *Sizing* option is enabled.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ResourceID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Resource (folder/share) |
| FileSize | bigint | | Yes | | | | Total file bytes within the subtree |
| FileCount | int | | Yes | | | | Total number of files within the subtree |

**Primary Key:** `PK_SA_FSAA_FileSizes` — clustered on `(HOST, ResourceID)`
**Foreign Keys:** `FK_SA_FSAA_FileSizes_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_FileTypes {#sa_fsaa_filetypes}

Per-extension breakdown of files within each resource subtree. One row per `(resource, extension)`.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ResourceID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Resource (folder/share) |
| Extension | nvarchar | 255 | No | PK | | | File extension (e.g. `.docx`) |
| FileSize | bigint | | Yes | | | | Total bytes of files with this extension |
| FileCount | int | | Yes | | | | Number of files with this extension |

**Primary Key:** `PK_SA_FSAA_FileTypes` — clustered on `(HOST, ResourceID, Extension)`
**Foreign Keys:** `FK_SA_FSAA_FileTypes_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_FileAges {#sa_fsaa_fileages}

Histogram of file age buckets within each resource subtree. The eleven `FileCount0`–`FileCount10` columns hold counts in successively older buckets; bucket boundaries are determined at scan configuration time.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ResourceID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Resource (folder/share) |
| LastModified | datetime | | Yes | | | | Most recent file modification within the subtree |
| FileCount0 | int | | Yes | | | | Files in age bucket 0 (newest) |
| FileCount1 | int | | Yes | | | | Files in age bucket 1 |
| FileCount2 | int | | Yes | | | | Files in age bucket 2 |
| FileCount3 | int | | Yes | | | | Files in age bucket 3 |
| FileCount4 | int | | Yes | | | | Files in age bucket 4 |
| FileCount5 | int | | Yes | | | | Files in age bucket 5 |
| FileCount6 | int | | Yes | | | | Files in age bucket 6 |
| FileCount7 | int | | Yes | | | | Files in age bucket 7 |
| FileCount8 | int | | Yes | | | | Files in age bucket 8 |
| FileCount9 | int | | Yes | | | | Files in age bucket 9 |
| FileCount10 | int | | Yes | | | | Files in age bucket 10 (oldest) |

**Primary Key:** `PK_SA_FSAA_FileAges` — clustered on `(HOST, ResourceID)`
**Foreign Keys:** `FK_SA_FSAA_FileAges_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_FileTags {#sa_fsaa_filetags}

Aggregated file count and size per `(resource, tag-set)`. Populated when AIP or sensitive-data tags are collected.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ResourceID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Resource (folder/share) |
| TagProxyID | int | | No | PK | FK → SA_FSAA_TagKeys.TagProxyID | | Tag set |
| FileSize | bigint | | No | | | | Total bytes of files with this tag set |
| FileCount | int | | No | | | | Number of files with this tag set |

**Primary Key:** `PK_SA_FSAA_FileTags` — clustered on `(HOST, ResourceID, TagProxyID)`
**Foreign Keys:**
- `FK_SA_FSAA_FileTags_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID) ON DELETE CASCADE`
- `FK_SA_FSAA_FileTags_TagProxyID` — `(HOST, TagProxyID) → SA_FSAA_TagKeys(HOST, TagProxyID)`

**Indexes:** None beyond the clustered PK

### SA_FSAA_ScanHistory {#sa_fsaa_scanhistory}

Append-only audit log of every scan run, including the FSAA configuration XML used. Useful for forensic and configuration-tracking purposes.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| ConsoleHost | nvarchar | 64 | Yes | | | | NAA console that initiated the scan |
| ScanHost | nvarchar | 64 | Yes | | | | Host machine that performed the scan |
| ScanType | nvarchar | 64 | Yes | | | | Scan type (Access / Activity / DLP) |
| JobGUID | varchar | 38 | Yes | | | | Job correlation GUID |
| RunTime | datetime2 | | Yes | | | | When the scan ran |
| FSAAConfigXml | xml | | Yes | | | | Snapshot of the FSAA XML configuration |

**Primary Key:** None
**Foreign Keys:** None
**Indexes:** None

### SA_FSAA_AzureFilesShares {#sa_fsaa_azurefilesshares}

Catalog of Azure Files shares discovered on a host. Each share is linked back to a `SA_FSAA_Resources` row (the share root) and a `SA_FSAA_Gates` row (the share gate). `StorageAccount` carries the FQDN of the storage account.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | int | | No | PK | | | Per-host Azure share ID |
| ResourceID | bigint | | No | | FK → SA_FSAA_Resources.ID | | Share-root resource |
| GateID | int | | No | | FK → SA_FSAA_Gates.ID | | Share gate |
| Name | nvarchar | 2000 | Yes | | | | Share name |
| StorageAccount | varchar | 256 | Yes | | | | Storage-account FQDN (e.g. `acct.file.core.windows.net`) |

**Primary Key:** `PK_SA_FSAA_AzureFilesShares` — clustered on `(HOST, ID)`
**Foreign Keys:**
- `FK_SA_FSAA_AzureFilesShares_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAA_AzureFilesShares_ResourceID` — `(HOST, ResourceID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAA_AzureFilesShares_GateID` — `(HOST, GateID) → SA_FSAA_Gates(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAA_AzureFilesShareProperties {#sa_fsaa_azurefilesshareproperties}

Azure-Files-specific metadata that doesn't fit the generic resource model: tier, lease, retention, quota, and soft-delete state.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| AzureShareID | int | | No | PK | FK → SA_FSAA_AzureFilesShares.ID | | Azure share |
| AccessTier | varchar | 50 | Yes | | | | `Hot` / `Cool` / `Premium` / `TransactionOptimized` |
| AccessChangeTime | datetime2 | 7 | Yes | | | | When tier was last changed |
| AccessTierTransitionState | varchar | 50 | Yes | | | | In-progress tier transition state |
| DeletedOn | datetime2 | 7 | Yes | | | | Soft-delete timestamp (NULL if not deleted) |
| LastModified | datetime2 | 7 | Yes | | | | Last modified timestamp |
| LeaseDuration | varchar | 50 | Yes | | | | Lease duration (`Fixed` / `Infinite`) |
| LeaseStatus | varchar | 50 | Yes | | | | Lease status (`Locked` / `Unlocked`) |
| LeaseState | varchar | 50 | Yes | | | | Lease state (`Available` / `Leased` / `Expired` / `Breaking` / `Broken`) |
| EnabledProtocols | varchar | 50 | Yes | | | | Enabled protocols (`SMB`, `NFS`) |
| RemainingRetentionDays | int | | Yes | | | | Soft-delete retention days remaining |
| QuotaInGB | float | | Yes | | | | Configured share quota (GiB) |

**Primary Key:** `PK_SA_FSAA_AzureFilesShareProperties` — clustered on `(HOST, AzureShareID)`
**Foreign Keys:** `FK_SA_FSAA_AzureFilesShareProperties_AzureShareID` — `(HOST, AzureShareID) → SA_FSAA_AzureFilesShares(HOST, ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAA_AzureStorageAccounts {#sa_fsaa_azurestorageaccounts}

Single-column lookup of every Azure Storage Account hostname known to FSAA. Used by the data-collection job to expand a configured storage account into its discoverable file shares.

:::note
The unusual single-column shape exists because the `HOST` column name is required for NAA's dynamic host-list generation. This table carries no foreign keys and no indexes.
:::

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | nvarchar | 46 | No | | | | Storage-account FQDN (max 24 chars + `.file.core.windows.net` suffix) |

**Primary Key:** None
**Foreign Keys:** None
**Indexes:** None

### SA_FSAA_TrusteeMap {#sa_fsaa_trusteemap}

Cross-module identity map. Each FSAA trustee may correspond to a distinct trustee row in the FSAC (Activity) and FSDLP (DLP) tables. This table holds those mappings so the three sub-collectors can present unified results.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ID | int | | No | PK | FK → SA_FSAA_Trustees.ID | | FSAA trustee ID |
| AccessID | int | | Yes | | | | Corresponding ID in Access (FSAA) data — typically same as `ID` |
| ActivityID | int | | Yes | | | | Corresponding ID in Activity (FSAC) trustee table |
| DLPID | int | | Yes | | | | Corresponding ID in DLP (FSDLP) trustee table |

**Primary Key:** `PK_SA_FSAA_TrusteeMap` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSAA_TrusteeMap_ID` — `(HOST, ID) → SA_FSAA_Trustees(HOST, ID)`
**Indexes:** None beyond the clustered PK

### SA_FSAA_ResourceMap {#sa_fsaa_resourcemap}

Cross-module resource identity map. Same role as `SA_FSAA_TrusteeMap` but for resources.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | FSAA resource ID |
| AccessID | bigint | | Yes | | | | Corresponding Access (FSAA) ID |
| ActivityID | bigint | | Yes | | | | Corresponding Activity (FSAC) ID |
| DLPID | bigint | | Yes | | | | Corresponding DLP (FSDLP) ID |

**Primary Key:** `PK_SA_FSAA_ResourceMap` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSAA_ResourceMap_ID` — `(HOST, ID) → SA_FSAA_Resources(HOST, ID)`
**Indexes:**
- `SA_FSAA_ResourceMap_AccessID_IDX` — nonclustered on `(HOST, AccessID)`
- `SA_FSAA_ResourceMap_ActivityID_IDX` — nonclustered on `(HOST, ActivityID)`
- `SA_FSAA_ResourceMap_DLPID_IDX` — nonclustered on `(HOST, DLPID)`

### SA_FSAA_GateMap {#sa_fsaa_gatemap}

Cross-module gate identity map.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ID | int | | No | PK | FK → SA_FSAA_Gates.ID | | FSAA gate ID |
| AccessID | int | | Yes | | | | Corresponding Access ID |
| ActivityID | int | | Yes | | | | Corresponding Activity ID |
| DLPID | int | | Yes | | | | Corresponding DLP ID |

**Primary Key:** `PK_SA_FSAA_GateMap` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSAA_GateMap_ID` — `(HOST, ID) → SA_FSAA_Gates(HOST, ID)`
**Indexes:** None beyond the clustered PK

### SA_FSAA_ResourcesScanTypeDetails {#sa_fsaa_resourcesscantypedetails}

Per-resource USN tracking columns split out of `SA_FSAA_Resources` in schema version 8.0. One row per resource, holding per-scan-type "last seen" / "last deleted" timestamps and USNs for Access, Activity, and DLP.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Resource ID |
| AccessUSN | int | | Yes | | | | USN at last Access sighting |
| AccessLastSeen | datetime2 | | Yes | | | | Last time Access scan saw this resource |
| AccessLastDeleted | datetime2 | | Yes | | | | Time the resource was last marked deleted by Access |
| ActivityUSN | int | | Yes | | | | USN at last Activity sighting |
| ActivityLastSeen | datetime2 | | Yes | | | | Last time Activity scan saw this resource |
| ActivityLastDeleted | datetime2 | | Yes | | | | Time the resource was last marked deleted by Activity |
| DLPUSN | int | | Yes | | | | USN at last DLP sighting |
| DLPLastSeen | datetime2 | | Yes | | | | Last time DLP saw this resource |
| DLPLastDeleted | datetime2 | | Yes | | | | Time the resource was last marked deleted by DLP |

**Primary Key:** `PK_SA_FSAA_ResourcesScanTypeDetails` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSAA_ResourcesScanTypeDetails_ID` — `(HOST, ID) → SA_FSAA_Resources(HOST, ID)`
**Indexes:** None beyond the clustered PK

## Activity Collector Tables (SA_FSAC_*)

### SA_FSAC_ProcessNames {#sa_fsac_processnames}

Per-host lookup of process names observed in audit events. Activity events reference process names by `ID` to avoid storing the same long path string repeatedly.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | int | | No | PK | | | Per-host process-name ID |
| Name | nvarchar | 255 | No | | | | Process name (e.g. `EXPLORER.EXE`) |

**Primary Key:** `PK_SA_FSAC_ProcessNames` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSAC_ProcessNames_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSAC_ActivityEvents {#sa_fsac_activityevents}

The activity-event firehose. One row per audited file-system operation captured by an FSAC agent. `Operation` is a coded enumeration covering Read / Add / Update / Delete / PermissionChange / Rename. `Allow` is `1` for successful operations and `0` for denied operations.

:::note
The `AccessTime` column type differs by environment: fresh-install DDL uses `datetime2`; the Task-15 migration recreates the table with `datetime`. Post-migration environments have `datetime`.
:::

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | bigint | | No | PK | | | Per-host event ID |
| AccessTime | datetime / datetime2 | | No | | | | Time the operation occurred |
| PathID | bigint | | No | | FK → SA_FSAA_Resources.ID | | Resource (file or folder) the operation acted on |
| TrusteeID | int | | No | | FK → SA_FSAA_Trustees.ID | | The user / principal that performed the operation |
| ProcessID | int | | Yes | | FK → SA_FSAC_ProcessNames.ID | | Process executing the operation (NULL if unknown) |
| Operation | tinyint | | No | | | | `0`=Read, `1`=Add, `2`=Update, `3`=Delete, `4`=PermissionChange, `5`=Rename |
| Allow | bit | | No | | | `1` | `1` = operation allowed, `0` = operation denied |
| USN | int | | No | | | | Update Sequence Number |

**Primary Key:** `PK_SA_FSAC_ActivityEvents` — clustered on `(HOST, ID)`
**Foreign Keys:**
- `FK_SA_FSAC_ActivityEvents_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAC_ActivityEvents_PathID` — `(HOST, PathID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAC_ActivityEvents_ProcessID` — `(HOST, ProcessID) → SA_FSAC_ProcessNames(HOST, ID)`
- `FK_SA_FSAC_ActivityEvents_TrusteeID` — `(HOST, TrusteeID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:**
- `SA_FSAC_ActivityEvents_PathID_IDX` — nonclustered on `(HOST, PathID)` INCLUDE `(ID, AccessTime, TrusteeID, Operation, Allow)`
- `SA_FSAC_ActivityEvents_TrusteeID_IDX` — nonclustered on `(TrusteeID, AccessTime)` INCLUDE `(PathID, ProcessID, Operation, Allow)`

### SA_FSAC_PermissionChanges {#sa_fsac_permissionchanges}

Detail rows for activity events where `Operation = 4` (PermissionChange). Each event may have multiple change rows — one per ACE that was added, removed, or modified. `AccessRights` is the bitmask before the change; `NewAccessRights` is the bitmask after (NULL on removal).

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ActivityID | bigint | | No | PK | FK → SA_FSAC_ActivityEvents.ID | | Owning activity event |
| ChangeID | smallint | | No | PK | | | Per-event change index |
| AclType | tinyint | | No | | | | ACL type (DACL / SACL distinction) |
| TrusteeID | int | | No | | FK → SA_FSAA_Trustees.ID | | Trustee whose ACE changed |
| ChangeType | tinyint | | No | | | | Change kind: added / removed / modified |
| AceType | tinyint | | No | | | | ACE type (Allow / Deny) |
| InheritanceFlags | tinyint | | No | | | | NTFS inheritance flags |
| AceFlags | tinyint | | No | | | | NTFS ACE flags |
| AccessRights | bigint | | No | | | | Pre-change Windows access mask |
| NewAccessRights | bigint | | Yes | | | | Post-change access mask (NULL when ACE was removed) |

**Primary Key:** `PK_SA_FSAC_PermissionChanges` — clustered on `(HOST, ActivityID, ChangeID)`
**Foreign Keys:**
- `FK_SA_FSAC_PermissionChanges_HOST` — `(HOST) → SA_FSAA_Hosts(ID)`
- `FK_SA_FSAC_PermissionChanges_ActivityID` — `(HOST, ActivityID) → SA_FSAC_ActivityEvents(HOST, ID)`
- `FK_SA_FSAC_PermissionChanges_TrusteeID` — `(HOST, TrusteeID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAC_OwnerChanges {#sa_fsac_ownerchanges}

Detail rows for activity events that changed a resource's owner (Take Ownership / chown). One row per qualifying activity event.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ActivityID | bigint | | No | PK | FK → SA_FSAC_ActivityEvents.ID | | Owning activity event |
| PreviousOwnerID | int | | No | | FK → SA_FSAA_Trustees.ID | | Owner before the change |
| NewOwnerID | int | | No | | FK → SA_FSAA_Trustees.ID | | Owner after the change |

**Primary Key:** `PK_SA_FSAC_OwnerChanges` — clustered on `(HOST, ActivityID)`
**Foreign Keys:**
- `FK_SA_FSAC_OwnerChanges_HOST` — `(HOST) → SA_FSAA_Hosts(ID)`
- `FK_SA_FSAC_OwnerChanges_ActivityID` — `(HOST, ActivityID) → SA_FSAC_ActivityEvents(HOST, ID)`
- `FK_SA_FSAC_OwnerChanges_PreviousOwnerID` — `(HOST, PreviousOwnerID) → SA_FSAA_Trustees(HOST, ID)`
- `FK_SA_FSAC_OwnerChanges_NewOwnerID` — `(HOST, NewOwnerID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAC_DailyActivity {#sa_fsac_dailyactivity}

Daily aggregation of activity-event counts, partitioned by `(host, date, folder, trustee, operation, allow)`. Feeds the daily-activity views and the *Most Active Users* / *Most Active Servers* reports.

:::note
The PK was added by a migration block; fresh CREATE TABLE has no PK — the migration adds it if absent.
:::

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ActivityDate | date | | No | PK | | | Date the activity occurred |
| FolderID | bigint | | No | PK | FK → SA_FSAA_Resources.ID | | Containing folder |
| TrusteeID | int | | No | PK | FK → SA_FSAA_Trustees.ID | | Acting trustee |
| Operation | tinyint | | No | PK | | | Operation code (0–5) |
| Allow | bit | | No | PK | | `1` | Allow / Deny flag |
| Count | int | | No | | | | Number of operations |

**Primary Key:** `PK_SA_FSAC_DailyActivity` — clustered on `(HOST, FolderID, ActivityDate, TrusteeID, Operation, Allow)`
**Foreign Keys:**
- `FK_SA_FSAC_DailyActivity_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAC_DailyActivity_FolderID` — `(HOST, FolderID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSAC_DailyActivity_TrusteeID` — `(HOST, TrusteeID) → SA_FSAA_Trustees(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAC_RenameTargets {#sa_fsac_renametargets}

Detail rows for `Operation = 5` (Rename) activity events: stores the *target* path-ID of the rename. The activity event itself records the *source* path; this table records the destination.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ActivityID | bigint | | No | PK | FK → SA_FSAC_ActivityEvents.ID | | Owning rename event |
| TargetPathID | bigint | | No | | FK → SA_FSAA_Resources.ID | | Resource the source was renamed to |

**Primary Key:** `PK_SA_FSAC_RenameTargets` — clustered on `(HOST, ActivityID)`
**Foreign Keys:**
- `FK_SA_FSAC_RenameTargets_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSAC_RenameTargets_ActivityID` — `(HOST, ActivityID) → SA_FSAC_ActivityEvents(HOST, ID)`
- `FK_SA_FSAC_RenameTargets_TargetPathID` — `(HOST, TargetPathID) → SA_FSAA_Resources(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSAC_ExceptionTypes {#sa_fsac_exceptiontypes}

Catalog of activity-exception classes (e.g. *Unusual hourly activity*, *Mass deletion*, *Ransomware artifact*). One row per `(host, exception type)`.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ExceptionType | int | | No | PK | | | Exception type code |
| Name | varchar | 128 | No | | | | Short name |
| Description | varchar | 256 | No | | | | Human-readable description |
| Count | int | | No | | | | Cached count of `SA_FSAC_Exceptions` rows of this type |
| ParentType | int | | Yes | | | | Optional parent exception type for hierarchical grouping |

**Primary Key:** `PK_SA_FSAC_ExceptionTypes` — clustered on `(HOST, ExceptionType)`
**Foreign Keys:** None
**Indexes:** None beyond the clustered PK

### SA_FSAC_Exceptions {#sa_fsac_exceptions}

One row per detected activity anomaly. The `Value` / `Average` / `StandardDeviations` columns capture the statistical model output that triggered the exception.

:::note
`ExceptionType` is a logical (un-enforced) reference to `SA_FSAC_ExceptionTypes.ExceptionType` — no FK constraint is created.
:::

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| ID | int | | No | PK | | | Per-host exception ID |
| ExceptionType | int | | No | | | | Class of exception (logical reference to `SA_FSAC_ExceptionTypes`) |
| ActivityDate | date | | No | | | | Date the anomaly occurred |
| ActivityHour | tinyint | | Yes | | | | Hour-of-day (0–23) for hourly-bucketed anomalies |
| GateID | int | | No | | | | Gate (share) where the anomaly was observed |
| TrusteeID | int | | Yes | | | | User involved (if applicable) |
| ResourceID | bigint | | Yes | | | | Resource involved (if applicable) |
| Value | int | | Yes | | | | Observed value (e.g. operation count) |
| Average | float | | Yes | | | | Baseline average for comparison |
| StandardDeviations | float | | Yes | | | | How many σ the observed value is from the average |

**Primary Key:** `PK_SA_FSAC_Exceptions` — clustered on `(HOST, ID)`
**Foreign Keys:** None
**Indexes:** `SA_FSAC_Exceptions_ResourceID_IDX` — nonclustered on `(HOST, ResourceID)` INCLUDE `(GateID)`

### SA_FSAC_UserExceptionTypes {#sa_fsac_userexceptiontypes}

User-centric variant of `SA_FSAC_ExceptionTypes` — partitioned by user `SID` instead of by host. Used when an exception is associated with a particular user across multiple hosts.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| SID | varchar | 184 | No | PK | | | User SID |
| ExceptionType | int | | No | PK | | | Exception type code |
| Name | varchar | 128 | No | | | | Short name |
| Description | varchar | 256 | No | | | | Description |
| Count | int | | No | | | | Cached count |
| ParentType | int | | Yes | | | | Optional parent exception type |

**Primary Key:** `PK_SA_FSAC_UserExceptionTypes` — clustered on `(SID, ExceptionType)`
**Foreign Keys:** None
**Indexes:** None beyond the clustered PK

### SA_FSAC_UserExceptions {#sa_fsac_userexceptions}

One row per detected per-user activity anomaly (e.g. unusual login pattern attributed to a specific SID).

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| SID | varchar | 184 | No | | | | User SID |
| ID | int | | No | PK | | | Surrogate exception ID |
| ExceptionType | int | | No | | | | Exception type |
| ActivityDate | date | | No | | | | Date the anomaly occurred |
| ActivityStartTime | tinyint | | Yes | | | | Start hour of the activity window (0–23) |
| ActivityPeriod | tinyint | | Yes | | | | Length of the activity window in hours |
| Value | int | | Yes | | | | Observed value |
| Average | float | | Yes | | | | Baseline average |
| StandardDeviations | float | | Yes | | | | σ from baseline |

**Primary Key:** `PK_SA_FSAC_UserExceptions` — clustered on `(ID)`
**Foreign Keys:** None
**Indexes:** None beyond the clustered PK

## Sensitive Data Tables (SA_FSDLP_*)

### SA_FSDLP_ImportHistory {#sa_fsdlp_importhistory}

Append-only history of DLP scan imports per host. One row per imported scan run.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| GUID | varchar | 38 | No | | | | Scan correlation GUID |
| USN | int | | No | PK | | | USN at import time |

**Primary Key:** `PK_SA_FSDLP_ImportHistory` — clustered on `(HOST, USN)`
**Foreign Keys:** `FK_SA_FSDLP_ImportHistory_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSDLP_Criteria {#sa_fsdlp_criteria}

Per-host catalog of the DLP criteria (patterns / classifiers) that produced matches. The `pattern_guid` is the global identifier linking back to centrally managed criteria definitions. `Risk` is a numeric severity score.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | FK → SA_FSAA_Hosts.ID | | Host partition |
| ID | int | | No | PK | | | Per-host criterion ID |
| Name | nvarchar | 256 | No | | | | Criterion name (e.g. "US Social Security Number") |
| Risk | int | | No | | | `0` | Risk score |
| pattern_guid | uniqueidentifier | | Yes | | | | Global criterion GUID |

**Primary Key:** `PK_SA_FSDLP_Criteria` — clustered on `(HOST, ID)`
**Foreign Keys:** `FK_SA_FSDLP_Criteria_HOST` — `(HOST) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSDLP_Matches {#sa_fsdlp_matches}

One row per `(file, criterion)` pair where the criterion produced at least one hit. `MatchCount` is the total number of hits. `DataSource` is a bitmask: `1` = Content, `2` = Metadata, `4` = Filename; combinations are summed (e.g. `5` = Content + Filename).

:::note
`FileId` is a logical (un-enforced) reference to `SA_FSAA_Resources.ID`. The DLP collector populates `FileId` to match the FSAA resource ID but no SQL FK constraint is created, so DLP imports can run independently of structural scans.
:::

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| FileId | bigint | | No | PK | | | Resource ID of the matched file (logical FK to `SA_FSAA_Resources.ID`) |
| CriteriaId | int | | No | PK | FK → SA_FSDLP_Criteria.ID | | Criterion that matched |
| MatchCount | int | | Yes | | | | Number of hits within this file for this criterion |
| DataSource | int | | No | | | `0` | Bitmask: 1=Content, 2=Metadata, 4=Filename |

**Primary Key:** `PK_SA_FSDLP_Matches` — clustered on `(HOST, FileId, CriteriaId)`
**Foreign Keys:** `FK_SA_FSDLP_Matches_CriteriaId` — `(HOST, CriteriaId) → SA_FSDLP_Criteria(HOST, ID) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSDLP_MatchHits {#sa_fsdlp_matchhits}

Per-hit detail rows. For every match in `SA_FSDLP_Matches`, this table holds the prefix/data/suffix excerpt around each hit, plus a confidence score.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| FileId | bigint | | No | PK | | | Resource ID of the matched file |
| CriteriaId | int | | No | PK | | | Criterion that produced the hit |
| ID | bigint | | No | PK | | | Per-`(File, Criterion)` hit ID |
| SubFileName | nvarchar | 1024 | Yes | | | | Sub-file name (for archives such as ZIP / RAR) |
| MatchPrefix | nvarchar | 1024 | Yes | | | | Text immediately before the matched data |
| MatchData | nvarchar | 1024 | Yes | | | | The matched data itself |
| MatchSuffix | nvarchar | 1024 | Yes | | | | Text immediately after the matched data |
| Confidence | int | | No | | | `0` | Confidence score (0–100) |
| DataSource | int | | No | | | `0` | Where the hit was found (see `SA_FSDLP_Matches.DataSource`) |

**Primary Key:** `PK_SA_FSDLP_MatchHits` — clustered on `(HOST, FileId, CriteriaId, ID)`
**Foreign Keys:** `FK_SA_FSDLP_MatchHits_Match` — `(HOST, FileId, CriteriaId) → SA_FSDLP_Matches(HOST, FileId, CriteriaId) ON DELETE CASCADE`
**Indexes:** None beyond the clustered PK

### SA_FSDLP_MatchHits_SubjectProfile {#sa_fsdlp_matchhits_subjectprofile}

Links a DLP match hit to the subject-profile system, identifying which person or entity the hit is about. Populated when subject-profile correlation is enabled.

:::note
The `SA_SubjectProfile_*` tables referenced by this table's foreign keys are owned by the central Subject Profile module and are documented separately.
:::

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| HOST | int | | No | PK | | | Host partition |
| FileId | bigint | | No | PK | | | Resource ID of the matched file |
| CriteriaId | int | | No | PK | | | Criterion that produced the hit |
| ID | bigint | | No | PK | FK → SA_FSDLP_MatchHits.ID | | Hit ID |
| SourceId | int | | No | FK → SA_SubjectProfile_Sources.Id | | | Subject-profile source |
| IdentityId | bigint | | No | FK → SA_SubjectProfile_Identities.Id | | | Resolved identity |
| AttributeId | int | | No | | | | Attribute on the identity that the hit aligns with |
| Order | int | | No | | | | Position within multi-valued attributes |

**Primary Key:** `PK_SA_FSDLP_MatchHits_SubjectProfile` — clustered on `(HOST, FileId, CriteriaId, ID)`
**Foreign Keys:**
- `FK_SA_FSDLP_MatchHits_SubjectProfile` — `(HOST, FileId, CriteriaId, ID) → SA_FSDLP_MatchHits(HOST, FileId, CriteriaId, ID) ON DELETE CASCADE`
- `FK_SA_FSDLP_MatchHits_SubjectProfile_Source` — `(SourceId) → SA_SubjectProfile_Sources(Id)`
- `FK_SA_FSDLP_MatchHits_SubjectProfile_Identity` — `(IdentityId) → SA_SubjectProfile_Identities(Id)`
- `FK_SA_FSDLP_MatchHits_SubjectProfile_Attribute` — `(IdentityId, AttributeId, Order) → SA_SubjectProfile_AttributeValues(IdentityId, AttributeId, Order) ON DELETE CASCADE`

**Indexes:** None beyond the clustered PK

## DFS Namespace Tables (SA_FSDFS_*)

### SA_FSDFS_Namespaces {#sa_fsdfs_namespaces}

One row per discovered DFS namespace (e.g. `\\contoso.com\public`). Each namespace anchors zero or more DFS links.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| ID | int | | No | PK | | IDENTITY(1,1) | Surrogate namespace ID |
| HOST | int | | No | | | | Host that owns the namespace record |
| Name | nvarchar | 450 | No | | | | DFS namespace name |
| RootHostID | int | | Yes | | FK → SA_FSAA_Hosts.ID | | The FSAA host that hosts the namespace root |
| RootGateID | int | | Yes | | | | The gate (share) that backs the namespace root |
| Host | int | | Yes | | | | Alternate nullable host column added by schema migration |

**Primary Key:** `PK_SA_FSDFS_Namespaces` — clustered on `(ID)`
**Foreign Keys:**
- `FK_SA_FSDFS_Namespaces_Hosts` — `(RootHostID) → SA_FSAA_Hosts(ID) ON DELETE CASCADE`
- `FK_SA_FSDFS_Namespaces_GateID` — `(RootHostID, RootGateID) → SA_FSAA_Gates(HOST, ID)`

**Indexes:** None beyond the clustered PK

### SA_FSDFS_Links {#sa_fsdfs_links}

Each DFS link maps a logical DFS path (e.g. `\\contoso.com\public\sales`) to a physical target path on a specific server. Multiple links may exist per namespace.

| Column | Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| ID | int | | No | PK | | IDENTITY(1,1) | Surrogate link ID |
| HOST | int | | No | PK | | | Host partition (the DFS host) |
| NamespaceID | int | | Yes | | FK → SA_FSDFS_Namespaces.ID | | Owning namespace |
| NamespaceName | nvarchar | 512 | No | | | | Cached namespace name |
| DfsPath | nvarchar | 400 | No | | | | DFS-side logical path (e.g. `sales\reports`) |
| DfsResourceID | bigint | | Yes | | FK → SA_FSAA_Resources.ID | | Resource representing the DFS-side path (when available) |
| DfsHostID | int | | Yes | | | | Host on the DFS side |
| TargetPath | nvarchar | 450 | No | | | | UNC path of the physical target (e.g. `\\fileserver\sales`) |
| TargetHostID | int | | Yes | | FK → SA_FSAA_Hosts.ID | | FSAA host that holds the physical target |
| TargetGateID | int | | Yes | | FK → SA_FSAA_Gates.ID | | Gate (share) that holds the physical target |
| TargetResourceID | bigint | | Yes | | FK → SA_FSAA_Resources.ID | | Resource on the target host |
| State | int | | Yes | | | | DFS link state (online / offline) |
| Timeout | int | | Yes | | | | DFS-link cache timeout |
| DfsGuid | uniqueidentifier | | Yes | | | | DFS link's unique identifier |
| Comment | nvarchar | 1024 | Yes | | | | Free-text comment |
| IsRoot | bit | | No | | | | True if this link represents the namespace root rather than a sub-link |

**Primary Key:** `PK_SA_FSDFS_Links` — clustered on `(HOST, ID)`
**Foreign Keys:**
- `FK_SA_FSDFS_Links_NamespaceID` — `(NamespaceID) → SA_FSDFS_Namespaces(ID) ON DELETE CASCADE`
- `FK_SA_FSDFS_Links_TargetHostID` — `(TargetHostID) → SA_FSAA_Hosts(ID)`
- `FK_SA_FSDFS_Links_TargetGateID` — `(TargetHostID, TargetGateID) → SA_FSAA_Gates(HOST, ID)`
- `FK_SA_FSDFS_Links_TargetResourceID` — `(TargetHostID, TargetResourceID) → SA_FSAA_Resources(HOST, ID)`
- `FK_SA_FSDFS_Links_DfsResourceID` — `(DfsHostID, DfsResourceID) → SA_FSAA_Resources(HOST, ID)`

**Indexes:**
- `UQ_FSDFS_Links_DfsPath` — unique nonclustered on `(DfsPath, NamespaceID)`
- `SA_FSDFS_Links_GateID_IDX` — nonclustered on `(TargetHostID, TargetGateID)`
