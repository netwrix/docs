# Table Relationship Diagrams (ERD)

Relationship lines use standard crow's foot notation: a single vertical bar on the parent side and a crow's foot (fork) on the child side means "exactly one parent and zero or more children"; a single bar on each side with an open circle means one-to-zero-or-one (sidecar / extension table).

:::note
Every core table includes a `HOST INT` column that is a foreign key to `SA_FSAA_Hosts.ID` with `ON DELETE CASCADE`. To keep the sub-diagrams readable, the host fan-out is shown only in the following top-level diagrams; in the other diagrams `HOST` is implicit on every relationship. Three tables aren't shown in any diagram because they carry no foreign keys: `SA_FSAA_SchemaVer` (single-row config), `SA_FSAA_ScanHistory` (audit log), and `SA_FSAA_AzureStorageAccounts` (single-column lookup).
:::

## Top-level Partitioning {#top-level-partitioning}

`SA_FSAA_Hosts` is the root of the schema. Every other table includes a `HOST` column whose foreign key cascades on delete, so removing a host atomically purges its entire data set. Because the host fan-out spans more than six child tables, it is split into the following two diagrams.

**Core structural and permission tables:**

```erDiagram
    SA_FSAA_Hosts ||--o{ SA_FSAA_ImportHistory : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_Trustees : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_Resources : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_Gates : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_Tags : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_TagKeys : "HOST"
```

**Exception, ownership, and Azure tables:**

```erDiagram
    SA_FSAA_Hosts ||--o{ SA_FSAA_TagProxies : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_ExceptionTypes : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_Exceptions : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_ProbableOwners : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAA_AzureFilesShares : "HOST"
```

## Trustees {#trustees}

`SA_FSAA_Trustees` is the canonical trustee table. `SA_FSAA_LocalTrustees` is a 1:0..1 extension that adds NT-style domain/name/display fields for principals local to the host. `SA_FSAA_TrusteeEquivalence` is the local-group-membership edge table — `TrusteeID` is the member, `EquivalentTrusteeID` is the local group it belongs to. `SA_FSAA_TrusteeMap` is the cross-module identity bridge to the Activity (FSAC) and DLP (FSDLP) trustee tables.

```erDiagram
    SA_FSAA_Trustees ||--o| SA_FSAA_LocalTrustees : "ID (extension)"
    SA_FSAA_Trustees ||--o{ SA_FSAA_TrusteeEquivalence : "TrusteeID (member)"
    SA_FSAA_LocalTrustees ||--o{ SA_FSAA_TrusteeEquivalence : "EquivalentTrusteeID (group)"
    SA_FSAA_Trustees ||--o| SA_FSAA_TrusteeMap : "ID"
```

## Resources {#resources}

`SA_FSAA_Resources` is the file/folder/share tree. Note the self-reference for parent-child folder hierarchy and the `OwnerID` FK back to `SA_FSAA_Trustees`. Five sidecar tables hold per-resource aggregations. `SA_FSAA_ResourceMap` and `SA_FSAA_ResourcesScanTypeDetails` are 1:0..1 extensions that hold cross-module IDs and per-scan-type USN tracking respectively.

```erDiagram
    SA_FSAA_Resources ||--o{ SA_FSAA_Resources : "ParentResourceID (self)"
    SA_FSAA_Trustees ||--o{ SA_FSAA_Resources : "OwnerID"

    SA_FSAA_Resources ||--o{ SA_FSAA_FileSizes : "ResourceID"
    SA_FSAA_Resources ||--o{ SA_FSAA_FileTypes : "ResourceID"
    SA_FSAA_Resources ||--o{ SA_FSAA_FileAges : "ResourceID"
    SA_FSAA_Resources ||--o{ SA_FSAA_UnixRights : "ResourceID"
    SA_FSAA_Resources ||--o{ SA_FSAA_ProbableOwners : "ResourceID"

    SA_FSAA_Trustees ||--o{ SA_FSAA_UnixRights : "OwnerID + GroupID"
    SA_FSAA_Trustees ||--o{ SA_FSAA_ProbableOwners : "OwnerID"

    SA_FSAA_Resources ||--o| SA_FSAA_ResourceMap : "ID (extension)"
    SA_FSAA_Resources ||--o| SA_FSAA_ResourcesScanTypeDetails : "ID (extension)"
```

## Gates and Permissions {#gates-and-permissions}

A "gate" is a way to reach a resource — an SMB share, NFS export, or LSA-policy container. `SA_FSAA_Gates` self-references through `PolicyID` (an NFS export gate points at its export-policy gate). `SA_FSAA_GatesProxy` is the dedup bridge between resources and gates. `SA_FSAA_Rights` holds the per-trustee allow/deny ACL entries. `SA_FSAA_GateMap` is the cross-module gate identity bridge.

```erDiagram
    SA_FSAA_Gates ||--o{ SA_FSAA_Gates : "PolicyID (self)"
    SA_FSAA_Resources ||--o{ SA_FSAA_Gates : "ShareID + FolderID"

    SA_FSAA_Gates ||--o{ SA_FSAA_GatesProxy : "GateID"
    SA_FSAA_Gates ||--o{ SA_FSAA_Policies : "PolicyID"
    SA_FSAA_Trustees ||--o{ SA_FSAA_Policies : "TrusteeID"

    SA_FSAA_Trustees ||--o{ SA_FSAA_Rights : "TrusteeID"

    SA_FSAA_Gates ||--o| SA_FSAA_GateMap : "ID (extension)"
```

:::note
`SA_FSAA_Resources.RightsProxyID → SA_FSAA_Rights.RightsProxyID` and `SA_FSAA_Resources.GatesProxyID → SA_FSAA_GatesProxy.ID` are logical (un-enforced) references not shown in the diagram. These are denormalized pointers maintained by the import pipeline; no FK constraint is created so that bulk imports can stage rows in any order.
:::

## Tags {#tags}

Tags use a three-table dedup pattern. `SA_FSAA_Tags` holds each unique tag string. `SA_FSAA_TagKeys` defines a "tag set" identity. `SA_FSAA_TagProxies` is the membership table linking tag sets to their individual tags. `SA_FSAA_Resources.TagProxyID` and `SA_FSAA_FileTags.TagProxyID` reference the tag-set identity in `TagKeys`.

```erDiagram
    SA_FSAA_TagKeys ||--o{ SA_FSAA_TagProxies : "TagProxyID"
    SA_FSAA_Tags ||--o{ SA_FSAA_TagProxies : "TagID"
    SA_FSAA_TagKeys ||--o{ SA_FSAA_FileTags : "TagProxyID"
    SA_FSAA_Resources ||--o{ SA_FSAA_FileTags : "ResourceID"
```

## Exceptions {#exceptions}

`SA_FSAA_ExceptionTypes` is the per-host catalog of exception classes. `SA_FSAA_Exceptions` carries one row per detected anomaly and has FKs to all four foundational tables — Hosts, Gates, Resources, and Trustees (twice: `TrusteeID` and `SourceTrusteeID`). Most FK columns are nullable because different exception types use different combinations.

```erDiagram
    SA_FSAA_ExceptionTypes ||--o{ SA_FSAA_Exceptions : "ExceptionType"
    SA_FSAA_Gates ||--o{ SA_FSAA_Exceptions : "GateID"
    SA_FSAA_Resources ||--o{ SA_FSAA_Exceptions : "ResourceID"
    SA_FSAA_Trustees ||--o{ SA_FSAA_Exceptions : "TrusteeID"
    SA_FSAA_Trustees ||--o{ SA_FSAA_Exceptions : "SourceTrusteeID"
```

## Azure Files {#azure-files}

`SA_FSAA_AzureFilesShares` ties an Azure Files share back to the resource tree (`ResourceID` = share root) and the gate model (`GateID`). `SA_FSAA_AzureFilesShareProperties` is a 1:0..1 extension carrying Azure-specific metadata (tier, lease, retention, quota).

```erDiagram
    SA_FSAA_Resources ||--o{ SA_FSAA_AzureFilesShares : "ResourceID"
    SA_FSAA_Gates ||--o{ SA_FSAA_AzureFilesShares : "GateID"
    SA_FSAA_AzureFilesShares ||--o| SA_FSAA_AzureFilesShareProperties : "AzureShareID (extension)"
```

## Activity Collection (SA_FSAC_*) {#activity-collection}

`SA_FSAC_ActivityEvents` is the audit-event firehose; each row is one observed file-system operation. Every event references the resource (`PathID`), the trustee that performed the operation, and the process (`ProcessID`) that ran it. Three detail tables reference `ActivityEvents`: `SA_FSAC_PermissionChanges`, `SA_FSAC_OwnerChanges`, and `SA_FSAC_RenameTargets`. `SA_FSAC_DailyActivity` is a daily aggregation rolled up by `(folder, trustee, operation)`. `SA_FSAC_Exceptions` records detected anomalies; `SA_FSAC_UserExceptions` is the per-user variant (partitioned by `SID` instead of by host).

```erDiagram
    SA_FSAA_Hosts ||--o{ SA_FSAC_ProcessNames : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAC_ActivityEvents : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSAC_DailyActivity : "HOST"

    SA_FSAA_Resources ||--o{ SA_FSAC_ActivityEvents : "PathID"
    SA_FSAA_Trustees ||--o{ SA_FSAC_ActivityEvents : "TrusteeID"
    SA_FSAC_ProcessNames ||--o{ SA_FSAC_ActivityEvents : "ProcessID"

    SA_FSAC_ActivityEvents ||--o{ SA_FSAC_PermissionChanges : "ActivityID"
    SA_FSAC_ActivityEvents ||--o| SA_FSAC_OwnerChanges : "ActivityID"
    SA_FSAC_ActivityEvents ||--o| SA_FSAC_RenameTargets : "ActivityID"

    SA_FSAA_Trustees ||--o{ SA_FSAC_PermissionChanges : "TrusteeID"
    SA_FSAA_Trustees ||--o{ SA_FSAC_OwnerChanges : "PreviousOwnerID + NewOwnerID"
    SA_FSAA_Resources ||--o{ SA_FSAC_RenameTargets : "TargetPathID"

    SA_FSAA_Resources ||--o{ SA_FSAC_DailyActivity : "FolderID"
    SA_FSAA_Trustees ||--o{ SA_FSAC_DailyActivity : "TrusteeID"

    SA_FSAC_ExceptionTypes ||--o{ SA_FSAC_Exceptions : "ExceptionType"
    SA_FSAC_UserExceptionTypes ||--o{ SA_FSAC_UserExceptions : "ExceptionType (by SID)"
```

## Sensitive Data — DLP (SA_FSDLP_*) {#sensitive-data}

`SA_FSDLP_Criteria` lists the active DLP patterns. `SA_FSDLP_Matches` records, for each `(file, criterion)` pair, how many hits were found. `SA_FSDLP_MatchHits` carries the per-hit excerpt (prefix/data/suffix) and confidence score. `SA_FSDLP_MatchHits_SubjectProfile` links each hit to a subject in the central Subject Profile system.

```erDiagram
    SA_FSAA_Hosts ||--o{ SA_FSDLP_ImportHistory : "HOST"
    SA_FSAA_Hosts ||--o{ SA_FSDLP_Criteria : "HOST"

    SA_FSDLP_Criteria ||--o{ SA_FSDLP_Matches : "CriteriaId"
    SA_FSDLP_Matches ||--o{ SA_FSDLP_MatchHits : "FileId + CriteriaId"
    SA_FSDLP_MatchHits ||--o{ SA_FSDLP_MatchHits_SubjectProfile : "FileId + CriteriaId + ID"
```

:::note
`SA_FSDLP_Matches.FileId → SA_FSAA_Resources.ID` is a logical (un-enforced) reference not shown in the diagram. The DLP collector populates `FileId` to match the FSAA resource ID but no SQL FK constraint is created, so DLP imports can run independently of structural scans. `SA_FSDLP_MatchHits_SubjectProfile` also has foreign keys into the central Subject Profile tables (`SA_SubjectProfile_Sources`, `SA_SubjectProfile_Identities`, `SA_SubjectProfile_AttributeValues`), which are owned by a separate module and not shown here.
:::

## DFS Namespaces (SA_FSDFS_*) {#dfs-namespaces}

`SA_FSDFS_Namespaces` lists the discovered DFS namespaces. `SA_FSDFS_Links` resolves each DFS-side path into the physical target (host/gate/resource) on a real file server. The link table has FKs into both the FSAA host and the FSAA structural tables on the target side.

```erDiagram
    SA_FSAA_Hosts ||--o{ SA_FSDFS_Namespaces : "RootHostID"
    SA_FSAA_Gates ||--o{ SA_FSDFS_Namespaces : "(RootHostID, RootGateID) composite FK"

    SA_FSDFS_Namespaces ||--o{ SA_FSDFS_Links : "NamespaceID"
    SA_FSAA_Hosts ||--o{ SA_FSDFS_Links : "TargetHostID"
    SA_FSAA_Gates ||--o{ SA_FSDFS_Links : "TargetGateID"
    SA_FSAA_Resources ||--o{ SA_FSDFS_Links : "TargetResourceID"
    SA_FSAA_Resources ||--o{ SA_FSDFS_Links : "DfsResourceID"
```
