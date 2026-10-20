# Index Reference

## Complete Index Listing {#complete-index-listing}

All indexes across the four FSAA DC collector modules. Clustered primary-key indexes are listed alongside nonclustered supporting indexes. Tables with no indexes beyond their clustered PK appear at the end of this page.

| Table | Index Name | Type | Unique | Columns |
|---|---|---|---|---|
| SA_FSAA_Hosts | PK_SA_FSAA_Hosts | Clustered | Yes | ID |
| SA_FSAA_Hosts | UQ_SA_FSAA_Hosts_HOST | Nonclustered | Yes | HOST |
| SA_FSAA_ImportHistory | PK_SA_FSAA_ImportHistory | Clustered | Yes | HOST, ImportTime |
| SA_FSAA_Trustees | PK_SA_FSAA_Trustees | Clustered | Yes | HOST, ID |
| SA_FSAA_LocalTrustees | PK_SA_FSAA_LocalTrustees | Clustered | Yes | HOST, ID |
| SA_FSAA_TrusteeEquivalence | PK_SA_FSAA_TrusteeEquivalence | Clustered | Yes | HOST, TrusteeID, EquivalentTrusteeID |
| SA_FSAA_TrusteeEquivalence | SA_FSAA_TrusteeEquivalence_Group_IDX | Nonclustered | No | HOST, EquivalentTrusteeID; INCLUDE TrusteeID |
| SA_FSAA_Rights | PK_SA_FSAA_Rights | Clustered | Yes | HOST, RightsProxyID, TrusteeID |
| SA_FSAA_Tags | PK_SA_FSAA_Tags | Clustered | Yes | HOST, TagID |
| SA_FSAA_TagKeys | PK_SA_FSAA_TagKeys | Clustered | Yes | HOST, TagProxyID |
| SA_FSAA_TagProxies | PK_SA_FSAA_TagProxies | Clustered | Yes | HOST, TagProxyID, TagID |
| SA_FSAA_Resources | PK_SA_FSAA_Resources | Clustered | Yes | HOST, ID |
| SA_FSAA_Resources | SA_FSAA_Resources_Enum_IDX | Nonclustered | No | HOST, ParentResourceID; INCLUDE ID, ResourceType, DeletedUSN |
| SA_FSAA_Resources | SA_FSAA_Resources_RightsProxyID_IDX | Nonclustered | No | HOST, RightsProxyID; INCLUDE ID, GatesProxyID, DeletedUSN, ResourceType |
| SA_FSAA_Resources | SA_FSAA_Resources_GatesProxyID_IDX | Nonclustered | No | HOST, GatesProxyID; INCLUDE ID |
| SA_FSAA_Resources | SA_FSAA_Resources_USN_IDX | Nonclustered | No | HOST, USN; INCLUDE ID |
| SA_FSAA_Resources | SA_FSAA_Resources_ParentResourceID_Name_IDX | Nonclustered | No | HOST, ParentResourceID, Name |
| SA_FSAA_UnixRights | PK_SA_FSAA_UnixRights | Clustered | Yes | HOST, ResourceID |
| SA_FSAA_Gates | PK_SA_FSAA_Gates | Clustered | Yes | HOST, ID |
| SA_FSAA_GatesProxy | PK_SA_FSAA_GatesProxy | Clustered | Yes | HOST, ID, GateID |
| SA_FSAA_GatesProxy | SA_FSAA_GatesProxy_GateID_IDX | Nonclustered | No | HOST, GateID; INCLUDE ID |
| SA_FSAA_Policies | PK_SA_FSAA_Policies | Clustered | Yes | HOST, PolicyID, TrusteeID |
| SA_FSAA_Exceptions | PK_SA_FSAA_Exceptions | Clustered | Yes | HOST, ID |
| SA_FSAA_Exceptions | SA_FSAA_Exceptions_Resource_IDX | Nonclustered | No | HOST, ResourceID; INCLUDE ExceptionType, GateID |
| SA_FSAA_ExceptionTypes | PK_SA_FSAA_ExceptionTypes | Clustered | Yes | HOST, ExceptionType |
| SA_FSAA_ProbableOwners | PK_SA_FSAA_ProbableOwners | Clustered | Yes | HOST, ResourceID, OwnerID |
| SA_FSAA_FileSizes | PK_SA_FSAA_FileSizes | Clustered | Yes | HOST, ResourceID |
| SA_FSAA_FileTypes | PK_SA_FSAA_FileTypes | Clustered | Yes | HOST, ResourceID, Extension |
| SA_FSAA_FileAges | PK_SA_FSAA_FileAges | Clustered | Yes | HOST, ResourceID |
| SA_FSAA_FileTags | PK_SA_FSAA_FileTags | Clustered | Yes | HOST, ResourceID, TagProxyID |
| SA_FSAA_AzureFilesShares | PK_SA_FSAA_AzureFilesShares | Clustered | Yes | HOST, ID |
| SA_FSAA_AzureFilesShareProperties | PK_SA_FSAA_AzureFilesShareProperties | Clustered | Yes | HOST, AzureShareID |
| SA_FSAA_TrusteeMap | PK_SA_FSAA_TrusteeMap | Clustered | Yes | HOST, ID |
| SA_FSAA_ResourceMap | PK_SA_FSAA_ResourceMap | Clustered | Yes | HOST, ID |
| SA_FSAA_ResourceMap | SA_FSAA_ResourceMap_AccessID_IDX | Nonclustered | No | HOST, AccessID |
| SA_FSAA_ResourceMap | SA_FSAA_ResourceMap_ActivityID_IDX | Nonclustered | No | HOST, ActivityID |
| SA_FSAA_ResourceMap | SA_FSAA_ResourceMap_DLPID_IDX | Nonclustered | No | HOST, DLPID |
| SA_FSAA_GateMap | PK_SA_FSAA_GateMap | Clustered | Yes | HOST, ID |
| SA_FSAA_ResourcesScanTypeDetails | PK_SA_FSAA_ResourcesScanTypeDetails | Clustered | Yes | HOST, ID |
| SA_FSAC_ProcessNames | PK_SA_FSAC_ProcessNames | Clustered | Yes | HOST, ID |
| SA_FSAC_ActivityEvents | PK_SA_FSAC_ActivityEvents | Clustered | Yes | HOST, ID |
| SA_FSAC_ActivityEvents | SA_FSAC_ActivityEvents_PathID_IDX | Nonclustered | No | HOST, PathID; INCLUDE ID, AccessTime, TrusteeID, Operation, Allow |
| SA_FSAC_ActivityEvents | SA_FSAC_ActivityEvents_TrusteeID_IDX | Nonclustered | No | TrusteeID, AccessTime; INCLUDE PathID, ProcessID, Operation, Allow |
| SA_FSAC_PermissionChanges | PK_SA_FSAC_PermissionChanges | Clustered | Yes | HOST, ActivityID, ChangeID |
| SA_FSAC_DailyActivity | PK_SA_FSAC_DailyActivity | Clustered | Yes | HOST, FolderID, ActivityDate, TrusteeID, Operation, Allow |
| SA_FSAC_OwnerChanges | PK_SA_FSAC_OwnerChanges | Clustered | Yes | HOST, ActivityID |
| SA_FSAC_RenameTargets | PK_SA_FSAC_RenameTargets | Clustered | Yes | HOST, ActivityID |
| SA_FSAC_ExceptionTypes | PK_SA_FSAC_ExceptionTypes | Clustered | Yes | HOST, ExceptionType |
| SA_FSAC_Exceptions | PK_SA_FSAC_Exceptions | Clustered | Yes | HOST, ID |
| SA_FSAC_Exceptions | SA_FSAC_Exceptions_ResourceID_IDX | Nonclustered | No | HOST, ResourceID; INCLUDE GateID |
| SA_FSAC_UserExceptionTypes | PK_SA_FSAC_UserExceptionTypes | Clustered | Yes | SID, ExceptionType |
| SA_FSAC_UserExceptions | PK_SA_FSAC_UserExceptions | Clustered | Yes | ID |
| SA_FSDLP_ImportHistory | PK_SA_FSDLP_ImportHistory | Clustered | Yes | HOST, USN |
| SA_FSDLP_Criteria | PK_SA_FSDLP_Criteria | Clustered | Yes | HOST, ID |
| SA_FSDLP_Matches | PK_SA_FSDLP_Matches | Clustered | Yes | HOST, FileId, CriteriaId |
| SA_FSDLP_MatchHits | PK_SA_FSDLP_MatchHits | Clustered | Yes | HOST, FileId, CriteriaId, ID |
| SA_FSDLP_MatchHits_SubjectProfile | PK_SA_FSDLP_MatchHits_SubjectProfile | Clustered | Yes | HOST, FileId, CriteriaId, ID |
| SA_FSDFS_Namespaces | PK_SA_FSDFS_Namespaces | Clustered | Yes | ID |
| SA_FSDFS_Links | PK_SA_FSDFS_Links | Clustered | Yes | HOST, ID |
| SA_FSDFS_Links | UQ_FSDFS_Links_DfsPath | Nonclustered | Yes | DfsPath, NamespaceID |
| SA_FSDFS_Links | SA_FSDFS_Links_GateID_IDX | Nonclustered | No | TargetHostID, TargetGateID |

The following tables carry no indexes at all (no clustered PK and no nonclustered indexes):

- `SA_FSAA_SchemaVer`
- `SA_FSAA_ScanHistory`
- `SA_FSAA_AzureStorageAccounts`
