# Index Reference

## Complete Index Listing

| Table | Index Name | Type | Unique | Columns |
|---|---|---|---|---|
| SA_FSAA_Hosts | PK_SA_FSAA_Hosts | CLUSTERED | Yes | ID |
| SA_FSAA_Hosts | UQ_SA_FSAA_Hosts_HOST | UNIQUE | Yes | HOST |
| SA_FSAA_ImportHistory | PK_SA_FSAA_ImportHistory | CLUSTERED | Yes | HOST, ImportTime |
| SA_FSAA_Trustees | PK_SA_FSAA_Trustees | CLUSTERED | Yes | HOST, ID |
| SA_FSAA_LocalTrustees | PK_SA_FSAA_LocalTrustees | CLUSTERED | Yes | HOST, ID |
| SA_FSAA_TrusteeEquivalence | PK_SA_FSAA_TrusteeEquivalence | CLUSTERED | Yes | HOST, TrusteeID, EquivalentTrusteeID |
| SA_FSAA_TrusteeEquivalence | SA_FSAA_TrusteeEquivalence_Group_IDX | NONCLUSTERED | No | HOST, EquivalentTrusteeID, TrusteeID (INCLUDE) |
| SA_FSAA_Rights | PK_SA_FSAA_Rights | CLUSTERED | Yes | HOST, RightsProxyID, TrusteeID |
| SA_FSAA_Tags | PK_SA_FSAA_Tags | CLUSTERED | Yes | HOST, TagID |
| SA_FSAA_TagKeys | PK_SA_FSAA_TagKeys | CLUSTERED | Yes | HOST, TagProxyID |
| SA_FSAA_TagProxies | PK_SA_FSAA_TagProxies | CLUSTERED | Yes | HOST, TagProxyID, TagID |
| SA_FSAA_Resources | PK_SA_FSAA_Resources | CLUSTERED | Yes | HOST, ID |
| SA_FSAA_Resources | SA_FSAA_Resources_Enum_IDX | NONCLUSTERED | No | HOST, ParentResourceID, ID, ResourceType, DeletedUSN (INCLUDE) |
| SA_FSAA_Resources | SA_FSAA_Resources_RightsProxyID_IDX | NONCLUSTERED | No | HOST, RightsProxyID, ID, GatesProxyID, DeletedUSN, ResourceType (INCLUDE) |
| SA_FSAA_Resources | SA_FSAA_Resources_GatesProxyID_IDX | NONCLUSTERED | No | HOST, GatesProxyID, ID (INCLUDE) |
| SA_FSAA_Resources | SA_FSAA_Resources_USN_IDX | NONCLUSTERED | No | HOST, USN, ID (INCLUDE) |
| SA_FSAA_Resources | SA_FSAA_Resources_ParentResourceID_Name_IDX | NONCLUSTERED | No | HOST, ParentResourceID, Name |
| SA_FSAA_UnixRights | PK_SA_FSAA_UnixRights | CLUSTERED | Yes | HOST, ResourceID |
| SA_FSAA_Gates | PK_SA_FSAA_Gates | CLUSTERED | Yes | HOST, ID |
| SA_FSAA_GatesProxy | PK_SA_FSAA_GatesProxy | CLUSTERED | Yes | HOST, ID, GateID |
| SA_FSAA_GatesProxy | SA_FSAA_GatesProxy_GateID_IDX | NONCLUSTERED | No | HOST, GateID, ID (INCLUDE) |
| SA_FSAA_Policies | PK_SA_FSAA_Policies | CLUSTERED | Yes | HOST, PolicyID, TrusteeID |
| SA_FSAA_Exceptions | PK_SA_FSAA_Exceptions | CLUSTERED | Yes | HOST, ID |
| SA_FSAA_Exceptions | SA_FSAA_Exceptions_Resource_IDX | NONCLUSTERED | No | HOST, ResourceID, ExceptionType, GateID (INCLUDE) |
| SA_FSAA_ExceptionTypes | PK_SA_FSAA_ExceptionTypes | CLUSTERED | Yes | HOST, ExceptionType |
| SA_FSAA_ProbableOwners | PK_SA_FSAA_ProbableOwners | CLUSTERED | Yes | HOST, ResourceID, OwnerID |
| SA_FSAA_FileSizes | PK_SA_FSAA_FileSizes | CLUSTERED | Yes | HOST, ResourceID |
| SA_FSAA_FileTypes | PK_SA_FSAA_FileTypes | CLUSTERED | Yes | HOST, ResourceID, Extension |
| SA_FSAA_FileAges | PK_SA_FSAA_FileAges | CLUSTERED | Yes | HOST, ResourceID |
| SA_FSAA_FileTags | PK_SA_FSAA_FileTags | CLUSTERED | Yes | HOST, ResourceID, TagProxyID |
| SA_FSAC_ProcessNames | PK_SA_FSAC_ProcessNames | CLUSTERED | Yes | HOST, ID |
| SA_FSAC_ActivityEvents | PK_SA_FSAC_ActivityEvents | CLUSTERED | Yes | HOST, ID |
| SA_FSAC_ActivityEvents | SA_FSAC_ActivityEvents_PathID_IDX | NONCLUSTERED | No | HOST, PathID, ID, AccessTime, TrusteeID, Operation, Allow (INCLUDE) |
| SA_FSAC_ActivityEvents | SA_FSAC_ActivityEvents_TrusteeID_IDX | NONCLUSTERED | No | TrusteeID, AccessTime, PathID, ProcessID, Operation, Allow (INCLUDE) |
| SA_FSAC_PermissionChanges | PK_SA_FSAC_PermissionChanges | CLUSTERED | Yes | HOST, ActivityID, ChangeID |
| SA_FSAC_OwnerChanges | PK_SA_FSAC_OwnerChanges | CLUSTERED | Yes | HOST, ActivityID |
| SA_FSAC_RenameTargets | PK_SA_FSAC_RenameTargets | CLUSTERED | Yes | HOST, ActivityID |
| SA_FSAC_DailyActivity | PK_SA_FSAC_DailyActivity | CLUSTERED | Yes | HOST, FolderID, ActivityDate, TrusteeID, Operation, Allow |
| SA_FSAC_ExceptionTypes | PK_SA_FSAC_ExceptionTypes | CLUSTERED | Yes | HOST, ExceptionType |
| SA_FSAC_Exceptions | PK_SA_FSAC_Exceptions | CLUSTERED | Yes | HOST, ID |
| SA_FSAC_Exceptions | SA_FSAC_Exceptions_ResourceID_IDX | NONCLUSTERED | No | HOST, ResourceID, GateID (INCLUDE) |
| SA_FSAC_UserExceptionTypes | PK_SA_FSAC_UserExceptionTypes | CLUSTERED | Yes | SID, ExceptionType |
| SA_FSAC_UserExceptions | PK_SA_FSAC_UserExceptions | CLUSTERED | Yes | ID |
| SA_FSDLP_ImportHistory | PK_SA_FSDLP_ImportHistory | CLUSTERED | Yes | HOST, USN |
| SA_FSDLP_Criteria | PK_SA_FSDLP_Criteria | CLUSTERED | Yes | HOST, ID |
| SA_FSDLP_Matches | PK_SA_FSDLP_Matches | CLUSTERED | Yes | HOST, FileId, CriteriaId |
| SA_FSDLP_MatchHits | PK_SA_FSDLP_MatchHits | CLUSTERED | Yes | HOST, FileId, CriteriaId, ID |
| SA_FSDLP_MatchHits_SubjectProfile | PK_SA_FSDLP_MatchHits_SubjectProfile | CLUSTERED | Yes | HOST, FileId, CriteriaId, ID |
| SA_FSDLP_MatchHits_SubjectProfile | SA_FSDLP_MatchHits_SubjectProfile_Source_IDX | NONCLUSTERED | No | SourceId |
| SA_FSDLP_MatchHits_SubjectProfile | SA_FSDLP_MatchHits_SubjectProfile_Identity_IDX | NONCLUSTERED | No | IdentityId |
| SA_FSDFS_Namespaces | PK_SA_FSDFS_Namespaces | CLUSTERED | Yes | ID |
| SA_FSDFS_Links | PK_SA_FSDFS_Links | CLUSTERED | Yes | HOST, ID |
| SA_FSDFS_Links | UQ_FSDFS_Links_DfsPath | UNIQUE | Yes | DfsPath, NamespaceID |
| SA_FSDFS_Links | SA_FSDFS_Links_GateID_IDX | NONCLUSTERED | No | TargetHostID, TargetGateID |

`SA_FSAA_SchemaVer` and `SA_FSAA_ScanHistory` carry no indexes.
