# File System Access Data Collector Schema

## Overview

This is a comprehensive schema documentation for the **NAA 11.6 File System Access Data Collector (FSAA)**. The FSAA data collector audits Windows and NFS file systems for permissions, ownership, content, activity, and sensitive-data classification. FSAA scans Windows servers, NetApp / EMC / Dell filers, and Linux/Unix hosts; normalizes the security model into a unified per-host identity space; and writes the results to the central database.

This documentation covers four collector modules that share one schema:

- **`SA_FSAA_`** — File System Access Analyzer: file / folder / share inventory, NTFS and share permissions, file-content statistics (sizing, types, ages), ownership, and tags.
- **`SA_FSAC_`** — File System Activity Collector: file-system audit events (read / add / update / delete / permission-change / rename), aggregated daily activity, permission-change details, and exception detection.
- **`SA_FSDLP_`** — Sensitive Data / Data Loss Prevention: detected matches against DLP criteria, with per-match excerpts and subject-profile linkage.
- **`SA_FSDFS_`** — DFS Namespace mapping: DFS namespaces and links, plus the mapping from DFS paths to the underlying physical shares.

### Data model overview

Every core data table is **partitioned by host**: each table has a `HOST INT` column that is a foreign key to `SA_FSAA_Hosts.ID` with `ON DELETE CASCADE`. Removing a host from `SA_FSAA_Hosts` therefore atomically purges every collected row for that host across all four modules (FSAA, FSAC, FSDLP, DFS).

Within a host, the canonical secondary keys are:

- **Resources** — folders / files / shares — keyed by `bigint ID` (table `SA_FSAA_Resources`).
- **Trustees** — security principals seen in ACLs — keyed by `int ID` (table `SA_FSAA_Trustees`).
- **Gates** — entry points such as SMB shares and NFS exports — keyed by `int ID` (table `SA_FSAA_Gates`).
- **RightsProxyID** — a shared dedup key on `SA_FSAA_Rights` so that many resources sharing identical ACLs all reference one set of permission rows.
- **GatesProxyID** — analogous dedup pointer from a resource to the gates that grant access to it.
- **TagProxyID** — analogous dedup pointer from a resource to its set of file tags.

### Cross-module integration

`SA_FSAA_Resources` carries `AccessID`, `ActivityID`, and `DLPID` columns that link a resource into its corresponding rows in the Activity (FSAC) and DLP (FSDLP) tables. Reports that combine permissions, activity, and sensitive-data findings — for example the *Open Access* and *Least Privileged Access* reports — join across those columns.

---

### [Table Relationship Diagrams (ERD)](erd/overview.md)
  - [Top-level partitioning](erd/overview.md#top-level-partitioning)
  - [Trustees](erd/overview.md#trustees)
  - [Resources & content aggregations](erd/overview.md#resources--content-aggregations)
  - [Gates and permissions](erd/overview.md#gates-and-permissions)
  - [Tags](erd/overview.md#tags)
  - [Exceptions](erd/overview.md#exceptions)
  - [Activity collection](erd/overview.md#activity-collection)
  - [Sensitive data](erd/overview.md#sensitive-data)
  - [DFS namespaces](erd/overview.md#dfs-namespaces)

### [Core Data Collection Tables](coretables/overview.md)
#### [FSAA Tables](coretables/overview.md#fsaa-tables)
  - [SA_FSAA_SchemaVer](coretables/overview.md#sa_fsaa_schemaver)
  - [SA_FSAA_Hosts](coretables/overview.md#sa_fsaa_hosts)
  - [SA_FSAA_ImportHistory](coretables/overview.md#sa_fsaa_importhistory)
  - [SA_FSAA_Trustees](coretables/overview.md#sa_fsaa_trustees)
  - [SA_FSAA_LocalTrustees](coretables/overview.md#sa_fsaa_localtrustees)
  - [SA_FSAA_TrusteeEquivalence](coretables/overview.md#sa_fsaa_trusteeequivalence)
  - [SA_FSAA_Rights](coretables/overview.md#sa_fsaa_rights)
  - [SA_FSAA_Tags](coretables/overview.md#sa_fsaa_tags)
  - [SA_FSAA_TagKeys](coretables/overview.md#sa_fsaa_tagkeys)
  - [SA_FSAA_TagProxies](coretables/overview.md#sa_fsaa_tagproxies)
  - [SA_FSAA_Resources](coretables/overview.md#sa_fsaa_resources)
  - [SA_FSAA_UnixRights](coretables/overview.md#sa_fsaa_unixrights)
  - [SA_FSAA_Gates](coretables/overview.md#sa_fsaa_gates)
  - [SA_FSAA_GatesProxy](coretables/overview.md#sa_fsaa_gatesproxy)
  - [SA_FSAA_Policies](coretables/overview.md#sa_fsaa_policies)
  - [SA_FSAA_Exceptions](coretables/overview.md#sa_fsaa_exceptions)
  - [SA_FSAA_ExceptionTypes](coretables/overview.md#sa_fsaa_exceptiontypes)
  - [SA_FSAA_ProbableOwners](coretables/overview.md#sa_fsaa_probableowners)
  - [SA_FSAA_FileSizes](coretables/overview.md#sa_fsaa_filesizes)
  - [SA_FSAA_FileTypes](coretables/overview.md#sa_fsaa_filetypes)
  - [SA_FSAA_FileAges](coretables/overview.md#sa_fsaa_fileages)
  - [SA_FSAA_FileTags](coretables/overview.md#sa_fsaa_filetags)
  - [SA_FSAA_ScanHistory](coretables/overview.md#sa_fsaa_scanhistory)

#### [Activity Collector Tables (SA_FSAC_*)](coretables/overview.md#activity-collector-tables-sa_fsac_)
  - [SA_FSAC_ProcessNames](coretables/overview.md#sa_fsac_processnames)
  - [SA_FSAC_ActivityEvents](coretables/overview.md#sa_fsac_activityevents)
  - [SA_FSAC_PermissionChanges](coretables/overview.md#sa_fsac_permissionchanges)
  - [SA_FSAC_OwnerChanges](coretables/overview.md#sa_fsac_ownerchanges)
  - [SA_FSAC_DailyActivity](coretables/overview.md#sa_fsac_dailyactivity)
  - [SA_FSAC_RenameTargets](coretables/overview.md#sa_fsac_renametargets)
  - [SA_FSAC_ExceptionTypes](coretables/overview.md#sa_fsac_exceptiontypes)
  - [SA_FSAC_Exceptions](coretables/overview.md#sa_fsac_exceptions)
  - [SA_FSAC_UserExceptionTypes](coretables/overview.md#sa_fsac_userexceptiontypes)
  - [SA_FSAC_UserExceptions](coretables/overview.md#sa_fsac_userexceptions)

#### [Sensitive Data Tables (SA_FSDLP_*)](coretables/overview.md#sensitive-data-tables-sa_fsdlp_)
  - [SA_FSDLP_ImportHistory](coretables/overview.md#sa_fsdlp_importhistory)
  - [SA_FSDLP_Criteria](coretables/overview.md#sa_fsdlp_criteria)
  - [SA_FSDLP_Matches](coretables/overview.md#sa_fsdlp_matches)
  - [SA_FSDLP_MatchHits](coretables/overview.md#sa_fsdlp_matchhits)
  - [SA_FSDLP_MatchHits_SubjectProfile](coretables/overview.md#sa_fsdlp_matchhits_subjectprofile)

#### [DFS Namespace Tables (SA_FSDFS_*)](coretables/overview.md#dfs-namespace-tables-sa_fsdfs_)
  - [SA_FSDFS_Namespaces](coretables/overview.md#sa_fsdfs_namespaces)
  - [SA_FSDFS_Links](coretables/overview.md#sa_fsdfs_links)

### [Views](views/overview.md)
#### [FSAA Views](views/overview.md#fsaa-views)
  - [SA_FSAA_Paths](views/overview.md#sa_fsaa_paths)
  - [SA_FSAA_ResourcesView](views/overview.md#sa_fsaa_resourcesview)
  - [SA_FSAA_PermissionsView](views/overview.md#sa_fsaa_permissionsview)
  - [SA_FSAA_ExpandedPermissionsView](views/overview.md#sa_fsaa_expandedpermissionsview)
  - [SA_FSAA_DirectPermissionsView](views/overview.md#sa_fsaa_directpermissionsview)
  - [SA_FSAA_InheritedPermissionsView](views/overview.md#sa_fsaa_inheritedpermissionsview)
  - [SA_FSAA_SharesTraversalView](views/overview.md#sa_fsaa_sharestraversalview)
  - [SA_FSAA_EffectiveAccessView](views/overview.md#sa_fsaa_effectiveaccessview)
  - [SA_FSAA_LocalGroupMembersView](views/overview.md#sa_fsaa_localgroupmembersview)
  - [SA_FSAA_ExceptionsView](views/overview.md#sa_fsaa_exceptionsview)

#### [Activity Views (SA_FSAC_*)](views/overview.md#activity-views-sa_fsac_)
  - [SA_FSAC_DailyActivityView](views/overview.md#sa_fsac_dailyactivityview)
  - [SA_FSAC_DailyUserActivityView](views/overview.md#sa_fsac_dailyuseractivityview)
  - [SA_FSAC_DailyResourceActivityView](views/overview.md#sa_fsac_dailyresourceactivityview)
  - [SA_FSAC_ActivityEventsView](views/overview.md#sa_fsac_activityeventsview)
  - [SA_FSAC_ExceptionsView](views/overview.md#sa_fsac_exceptionsview)
  - [SA_FSAC_UserExceptionsView](views/overview.md#sa_fsac_userexceptionsview)
  - [SA_FSAC_PermissionChangesView](views/overview.md#sa_fsac_permissionchangesview)

#### [Sensitive Data Views (SA_FSDLP_*)](views/overview.md#sensitive-data-views-sa_fsdlp_)
  - [SA_FSDLP_MatchesView](views/overview.md#sa_fsdlp_matchesview)
  - [SA_FSDLP_MatchHitsView](views/overview.md#sa_fsdlp_matchhitsview)

### [Enumeration & Lookup Values Reference](enumeration/overview.md)
  - [TrusteeType](enumeration/overview.md#trusteetype)
  - [ResourceType](enumeration/overview.md#resourcetype)
  - [GateType](enumeration/overview.md#gatetype)
  - [Rights Bitmask](enumeration/overview.md#rights-bitmask)

### [Functions & Stored Procedures](functions/overview.md)
#### [FSAA Functions](functions/overview.md#fsaa-functions)
  - [SA_FSAA_GetPath](functions/overview.md#sa_fsaa_getpath)
  - [SA_FSAA_GetTrusteeMembership](functions/overview.md#sa_fsaa_gettrusteemembership)
  - [SA_FSAA_IsTrusteeMember](functions/overview.md#sa_fsaa_istrusteemember)
  - [SA_FSAA_RecurseFolders](functions/overview.md#sa_fsaa_recursefolders)
  - [SA_FSAA_WalkTrusteePath](functions/overview.md#sa_fsaa_walktrusteepath)
  - [SA_FSAA_GetTrusteeInformationEx](functions/overview.md#sa_fsaa_gettrusteeinformationex)
  - [SA_FSAA_GetTrusteeInformation](functions/overview.md#sa_fsaa_gettrusteeinformation)
  - [SA_FSAA_GetResourcePermissions](functions/overview.md#sa_fsaa_getresourcepermissions)
  - [SA_FSAA_GetGatePermissions](functions/overview.md#sa_fsaa_getgatepermissions)
  - [SA_FSAA_GetExpandedPermissions](functions/overview.md#sa_fsaa_getexpandedpermissions)
  - [SA_FSAA_GetExpandedPermissionsEx](functions/overview.md#sa_fsaa_getexpandedpermissionsex)
  - [SA_FSAA_GetPolicyMembership](functions/overview.md#sa_fsaa_getpolicymembership)
  - [SA_FSAA_GetLocalGroupMembership](functions/overview.md#sa_fsaa_getlocalgroupmembership)
  - [SA_FSAA_GetEffectiveRights](functions/overview.md#sa_fsaa_geteffectiverights)
  - [SA_FSAA_GetEffectiveRightsEx](functions/overview.md#sa_fsaa_geteffectiverightsex)
  - [SA_FSAA_GetTrusteePermissionSource](functions/overview.md#sa_fsaa_gettrusteepermissionsource)
  - [SA_FSAA_LookupResourcePath](functions/overview.md#sa_fsaa_lookupresourcepath)
  - [SA_FSAA_LookupUncPath](functions/overview.md#sa_fsaa_lookupuncpath)
  - [SA_FSAA_UpdateStatistics](functions/overview.md#sa_fsaa_updatestatistics)

#### [Activity Collector Functions (SA_FSAC_*)](functions/overview.md#activity-collector-functions-sa_fsac_)
  - [SA_FSAC_GetActiveFolderPermissions](functions/overview.md#sa_fsac_getactivefolderpermissions)
  - [SA_FSAC_GetFolderActivityMask](functions/overview.md#sa_fsac_getfolderactivitymask)

#### [DFS Functions (SA_FSDFS_*)](functions/overview.md#dfs-functions-sa_fsdfs_)
  - [SA_FSDFS_LookupDfsPath](functions/overview.md#sa_fsdfs_lookupdfsepath)

### [Index Reference](indexreference/overview.md)
  - [Complete Index Listing](indexreference/overview.md#complete-index-listing)

### [Foreign Key Reference](fkreference/overview.md)
  - [Complete Foreign Key Listing](fkreference/overview.md#complete-foreign-key-listing)
